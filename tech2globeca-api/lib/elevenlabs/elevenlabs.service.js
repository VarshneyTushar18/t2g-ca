import crypto from "crypto";

const TZ = "Asia/Kolkata";
const SKEW_SECONDS = 300;
const MAX_MESSAGES_IN_EMAIL = 10;

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatLocalTime(epochSeconds) {
  return new Date(epochSeconds * 1000).toLocaleString("en-IN", {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDate(epochSeconds) {
  return new Date(epochSeconds * 1000).toLocaleString("en-IN", {
    timeZone: TZ,
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function verifyElevenLabsSignature(rawBody, signatureHeader, secret) {
  if (!secret) {
    return { ok: false, status: 500, message: "Webhook secret not configured" };
  }

  const match = /t=(\d+),v0=([a-f0-9]+)/i.exec(signatureHeader || "");
  if (!match) {
    return { ok: false, status: 400, message: "Malformed signature header" };
  }

  const headerTs = Number(match[1]);
  const headerSig = match[2];
  const now = Math.floor(Date.now() / 1000);

  if (Math.abs(now - headerTs) > SKEW_SECONDS) {
    return { ok: false, status: 401, message: "Signature timestamp invalid or expired" };
  }

  const computed = crypto
    .createHmac("sha256", secret)
    .update(`${headerTs}.${rawBody}`)
    .digest("hex");

  if (computed.length !== headerSig.length) {
    return { ok: false, status: 401, message: "Invalid signature" };
  }

  if (
    !crypto.timingSafeEqual(
      Buffer.from(computed, "utf8"),
      Buffer.from(headerSig, "utf8"),
    )
  ) {
    return { ok: false, status: 401, message: "Invalid signature" };
  }

  return { ok: true };
}

function extractMultivoiceMessage(value) {
  if (!value) return null;
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed || null;
  }
  if (typeof value !== "object") return null;

  if (typeof value.message === "string" && value.message.trim()) {
    return value.message.trim();
  }

  if (Array.isArray(value.parts)) {
    const joined = value.parts
      .map((part) => {
        if (typeof part === "string") return part;
        return part?.text || part?.message || "";
      })
      .filter(Boolean)
      .join(" ")
      .trim();
    return joined || null;
  }

  return null;
}

function isLikelyInternalPayload(text) {
  if (!text.startsWith("{")) return false;

  try {
    const parsed = JSON.parse(text);
    return (
      parsed &&
      typeof parsed === "object" &&
      (Array.isArray(parsed.tool_calls) ||
        Array.isArray(parsed.tool_results) ||
        parsed.agent_metadata != null)
    );
  } catch {
    return false;
  }
}

function getDisplayableMessage(item) {
  if (!item || typeof item !== "object") return null;

  const candidates = [
    item.message,
    item.text,
    item.content,
    item.original_message,
    extractMultivoiceMessage(item.multivoice_message),
  ];

  for (const candidate of candidates) {
    if (candidate == null) continue;
    const text = String(candidate).trim();
    if (!text || isLikelyInternalPayload(text)) continue;
    return text;
  }

  return null;
}

function pickFirstString(...values) {
  for (const value of values) {
    if (value == null) continue;
    const text = String(value).trim();
    if (text) return text;
  }
  return null;
}

function normalizeFieldKey(key) {
  return String(key).toLowerCase().replace(/[\s_-]+/g, "");
}

function matchesFieldKey(key, patterns) {
  const normalized = normalizeFieldKey(key);
  return patterns.some(
    (pattern) => normalized === pattern || normalized.includes(pattern),
  );
}

function extractCollectionValue(entry) {
  if (entry == null) return null;
  if (typeof entry === "string") return entry.trim() || null;
  if (typeof entry === "number" || typeof entry === "boolean") {
    return String(entry);
  }
  if (typeof entry === "object") {
    const value =
      entry.value ?? entry.result ?? entry.collected_value ?? entry.data;
    if (value != null) return String(value).trim() || null;
  }
  return null;
}

function extractFromDataCollection(dataCollectionResults) {
  const out = { name: null, email: null, phone: null };
  if (!dataCollectionResults || typeof dataCollectionResults !== "object") {
    return out;
  }

  for (const [key, value] of Object.entries(dataCollectionResults)) {
    const text = extractCollectionValue(value);
    if (!text) continue;

    if (matchesFieldKey(key, ["email", "mail"])) {
      out.email = out.email || text;
    } else if (matchesFieldKey(key, ["phone", "mobile", "tel"])) {
      out.phone = out.phone || text;
    } else if (
      matchesFieldKey(key, [
        "name",
        "fullname",
        "firstname",
        "lastname",
        "username",
      ])
    ) {
      out.name = out.name || text;
    }
  }

  return out;
}

function inferFromMessages(formatted) {
  const userText = formatted
    .filter((item) => String(item.role).toLowerCase() === "user")
    .map((item) => item.message)
    .join("\n");

  const email =
    userText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? null;
  const phone =
    userText.match(
      /(?:\+?\d{1,3}[\s-]?)?(?:\(?\d{3}\)?[\s-]?)\d{3}[\s-]?\d{4}/,
    )?.[0] ?? null;

  return { email, phone, name: null };
}

export function buildVisitorLabel({ name, email, phone, userId }) {
  const parts = [];
  if (name) parts.push(name);
  if (email) parts.push(email);
  if (phone && !parts.includes(phone)) parts.push(phone);

  if (parts.length) return parts.join(" • ");
  if (userId) return `Visitor ID: ${userId}`;
  return "Anonymous visitor";
}

export function extractConversationContext(data, formatted = []) {
  const root = data?.data ?? data ?? {};
  const dynamicVars =
    root.conversation_initiation_client_data?.dynamic_variables ?? {};
  const collected = extractFromDataCollection(
    root.analysis?.data_collection_results,
  );
  const inferred = inferFromMessages(formatted);
  const metadata = root.metadata ?? {};

  const name = pickFirstString(
    collected.name,
    dynamicVars.user_name,
    dynamicVars.name,
    dynamicVars.full_name,
    dynamicVars.user_first_name,
    dynamicVars.first_name,
    dynamicVars.visitor_name,
    inferred.name,
  );

  const email = pickFirstString(
    collected.email,
    dynamicVars.email,
    dynamicVars.user_email,
    dynamicVars.visitor_email,
    inferred.email,
  );

  const phone = pickFirstString(
    collected.phone,
    dynamicVars.phone,
    dynamicVars.user_phone,
    dynamicVars.phone_number,
    metadata.phone_call?.external_number,
    metadata.phone_call?.from,
    inferred.phone,
  );

  const sourcePage = pickFirstString(
    dynamicVars.source_page,
    dynamicVars.page_url,
    dynamicVars.pageUrl,
    dynamicVars.url,
  );

  const userId = pickFirstString(root.user_id, metadata.user_id);
  const summary = pickFirstString(root.analysis?.transcript_summary);
  const agentName = pickFirstString(root.agent_name);

  const displayName =
    name ||
    (email ? email.split("@")[0] : null) ||
    (userId ? `User ${userId}` : null);

  return {
    name: displayName,
    email,
    phone,
    sourcePage,
    userId,
    summary,
    agentName,
    displayLabel: buildVisitorLabel({ name: displayName, email, phone, userId }),
  };
}

export function parseTranscriptPayload(data) {
  const eventTs = data.event_timestamp
    ? Number(data.event_timestamp)
    : Math.floor(Date.now() / 1000);

  const conversationId =
    data?.data?.conversation_id ??
    data.conversation_id ??
    `conv_${Date.now()}`;

  let transcriptArray = [];
  if (Array.isArray(data?.data?.transcript)) {
    transcriptArray = data.data.transcript;
  } else if (Array.isArray(data.transcript)) {
    transcriptArray = data.transcript;
  } else {
    transcriptArray = [
      {
        role: "system",
        message: JSON.stringify(data),
        time_in_call_secs: 0,
      },
    ];
  }

  let maxTime = 0;
  for (const item of transcriptArray) {
    if (Number.isFinite(item?.time_in_call_secs)) {
      maxTime = Math.max(maxTime, Number(item.time_in_call_secs));
    }
  }

  const formatted = [];
  for (const item of transcriptArray) {
    const msgText = getDisplayableMessage(item);
    if (!msgText) continue;

    const role = item.role ?? "unknown";
    const timeInCall = Number.isFinite(item?.time_in_call_secs)
      ? Number(item.time_in_call_secs)
      : null;

    const absEpoch =
      maxTime > 0 && timeInCall !== null
        ? eventTs - (maxTime - timeInCall)
        : eventTs;

    formatted.push({
      role,
      message: msgText,
      local_time: formatLocalTime(absEpoch),
      epoch: absEpoch,
    });
  }

  const context = extractConversationContext(data, formatted);

  return { eventTs, conversationId, formatted, context };
}

function buildMessageRows(messages) {
  return messages
    .map((m) => {
      const role = String(m.role).toLowerCase();
      const text = escapeHtml(m.message);
      const time = m.local_time;

      if (role === "user") {
        return `
        <tr class="message-row">
            <td valign="top" width="40">
                <div class="avatar user">U</div>
            </td>
            <td style="padding-left:10px;">
                <div class="bubble user-bubble">${text}</div>
                <span class="time" style="text-align:right;">${time}</span>
            </td>
        </tr>`;
      }

      return `
        <tr class="message-row">
            <td valign="top" width="40">
                <div class="avatar">AI</div>
            </td>
            <td style="padding-left:10px;">
                <div class="bubble ai-bubble">${text}</div>
                <span class="time">${time}</span>
            </td>
        </tr>`;
    })
    .join("");
}

export function buildTranscriptEmailHtml({
  conversationId,
  eventTs,
  formatted,
  context = {},
}) {
  const readMoreUrl = `https://elevenlabs.io/app/agents/history/${conversationId}`;
  const messagesToShow = formatted.slice(0, MAX_MESSAGES_IN_EMAIL);
  const htmlMessages =
    buildMessageRows(messagesToShow) +
    `
<tr><td colspan="2" style="text-align:center; padding-top:10px;">
<a href="${readMoreUrl}" style="color:#2563eb; font-size:14px; text-decoration:underline;">Read full conversation</a>
</td></tr>`;

  const dateStr = formatDate(eventTs);
  const totalMsgs = formatted.length;
  const visitorLabel = escapeHtml(context.displayLabel || "Anonymous visitor");
  const metaLines = [
    `<strong>Visitor:</strong> ${visitorLabel}`,
    `<strong>Date:</strong> ${dateStr} • <strong>Messages:</strong> ${totalMsgs}`,
  ];

  if (context.sourcePage) {
    metaLines.push(`<strong>Page:</strong> ${escapeHtml(context.sourcePage)}`);
  }
  if (context.summary) {
    metaLines.push(`<strong>Summary:</strong> ${escapeHtml(context.summary)}`);
  }
  if (context.userId && context.displayLabel === "Anonymous visitor") {
    metaLines.push(`<strong>Visitor ID:</strong> ${escapeHtml(context.userId)}`);
  }

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Chat Transcript</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
    body { margin:0; padding:0; font-family:Arial, Helvetica, sans-serif; background:#f5f7fa; }
    .container { width:100%; max-width:680px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.08); }
    .header { background:#254269; color:#ffffff; padding:16px 20px; border-radius:8px 8px 0 0; font-size:18px; font-weight:bold; }
    .meta { color:#6b7280; font-size:13px; padding:8px 20px; border-bottom:1px solid #e5e7eb; }
    .message-table { width:100%; border-collapse:collapse; }
    .message-row { padding:0; margin:0; }
    .avatar { width:34px; height:34px; border-radius:50%; background:#254269; color:#ffffff; text-align:center; vertical-align:middle; font-weight:bold; font-size:13px; line-height:34px; }
    .avatar.user { background:#C7070C; }
    .bubble { padding:12px 14px; border-radius:10px; margin-bottom:8px; max-width:85%; line-height:1.4; font-size:14px; display:inline-block; }
    .ai-bubble { background:#f3f4f6; color:#111827; }
    .user-bubble { background:#e0edff; color:#111827; float:right; }
    .time { color:#9ca3af; font-size:12px; margin-top:4px; display:block; }
    .footer { text-align:center; color:#9ca3af; font-size:12px; padding:12px 0; border-top:1px solid #e5e7eb; }
    .clear { clear:both; }.message-table td{padding:10px;}</style>
</head>
<body>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa; padding:24px 0;">
<tr>
<td align="center">
<table role="presentation" class="container">
<tr>
<td>
<div class="header">Chat Transcript</div>
<div class="meta">
${metaLines.join("<br />")}
</div>
<table class="message-table" cellpadding="0" cellspacing="0" width="100%" style="padding:18px 20px;">
${htmlMessages}
</table>
<div class="clear"></div>
<div class="footer">
© 2025 Chat Support • <a href="${readMoreUrl}" style="color:#9ca3af; text-decoration:underline;">View Transcript Online</a>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

export function buildTranscriptSubject(conversationId, eventTs, context = {}) {
  const prefix = process.env.ELEVENLABS_SUBJECT_PREFIX || "Chat Transcript";
  const when = new Date(eventTs * 1000).toLocaleString("en-IN", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const who =
    context.displayLabel && context.displayLabel !== "Anonymous visitor"
      ? ` — ${context.displayLabel}`
      : "";
  return `${prefix}${who} #${conversationId} - ${when}`;
}
