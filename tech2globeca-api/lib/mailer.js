import nodemailer from "nodemailer";

const DEFAULT_LEAD_EMAILS = ["info@tech2globe.com", "enquiries@tech2globe.net"];

let transporter = null;

export function getLeadEmails() {
  const fromEnv = process.env.LEAD_EMAILS || process.env.MAIL_TO;
  if (!fromEnv) return DEFAULT_LEAD_EMAILS;
  return fromEnv
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

export function getMailFrom() {
  const smtpEmail = process.env.SMTP_EMAIL || process.env.SMTP_USER;
  return process.env.MAIL_FROM || `"Tech2Globe" <${smtpEmail}>`;
}

export function getSmtpFromAddress() {
  return (process.env.ELEVENLABS_FROM_EMAIL || process.env.SMTP_EMAIL || process.env.SMTP_USER || "").trim();
}

export function getTranscriptRecipients() {
  const dedicated = process.env.ELEVENLABS_TRANSCRIPT_EMAIL;
  if (dedicated) {
    return dedicated
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean)
      .join(",");
  }
  return getLeadEmails().join(",");
}

export function createMailTransporter() {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export function getMailTransporter() {
  if (!transporter) {
    return createMailTransporter();
  }
  return transporter;
}

export async function verifyMailConnection() {
  const transport = getMailTransporter();
  await transport.verify();
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function emailShell(title, bodyHtml) {
  return `
    <div style="background:#f4f4f4;padding:40px 20px;font-family:Arial,sans-serif;">
      <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:10px;padding:35px;">
        <h2 style="margin-top:0;color:#111;">${escapeHtml(title)}</h2>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />
        ${bodyHtml}
      </div>
    </div>
  `;
}

function buildTeamLeadHtml({
  name,
  email,
  phone,
  country,
  message,
  location,
  senderIp,
  sourcePage,
}) {
  return `
    <html>
      <head><title>Enquiry from Tech2Globe</title></head>
      <body style="font-family:Arial, Helvetica, sans-serif;">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Country Code:</strong> ${escapeHtml(country && country !== "—" ? country : "-")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Comment:</strong> ${escapeHtml(message || "-").replace(/\n/g, "<br>")}</p>
        <p><strong>Sender IP:</strong> ${escapeHtml(senderIp || "-")}</p>
        <p><strong>Location:</strong> ${escapeHtml(location || "Unknown")}</p>
        <p><strong>Page:</strong> ${escapeHtml(sourcePage || "-")}</p>
      </body>
    </html>
  `;
}

function buildUserConfirmationHtml({ name, email, phone, country }) {
  return `
    <html>
      <head><title>Thank You</title></head>
      <body style="font-family:Arial, Helvetica, sans-serif;">
        <p>Dear ${escapeHtml(name)},</p>
        <p>Thank you for your enquiry. Our team will get back to you within 1 business day.</p>
        <p>Regards,<br>Tech2Globe Team</p>
      </body>
    </html>
  `;
}

export async function sendLeadEmails({
  name,
  phone,
  email,
  message,
  country,
  senderIp,
  location,
  sourcePage,
  formType,
}) {
  const transport = getMailTransporter();
  const from = getMailFrom();
  const leadEmails = getLeadEmails();

  const teamHtml = buildTeamLeadHtml({
    name,
    email,
    phone,
    country,
    message,
    location,
    senderIp,
    sourcePage,
    formType,
  });

  const teamMail = transport.sendMail({
    from,
    to: leadEmails.join(","),
    replyTo: email,
    subject: "New Enquiry from Tech2Globe",
    html: teamHtml,
    text: [
      `New Enquiry from Tech2Globe`,
      ``,
      `Name: ${name}`,
      `Country Code: ${country || "-"}`,
      `Phone: ${phone || "-"}`,
      `Email: ${email}`,
      `Comment: ${message || "-"}`,
      `Sender IP: ${senderIp}`,
      `Location: ${location}`,
      `Page: ${sourcePage || "-"}`,
    ].join("\n"),
  });

  const userHtml = buildUserConfirmationHtml({ name, email, phone, country });

  const userMail = transport.sendMail({
    from,
    to: email,
    subject: "Thank you for your enquiry!",
    html: userHtml,
    text: `Dear ${name},\n\nThank you for your enquiry. Our team will get back to you within 1 business day.\n\nRegards,\nTech2Globe Team`,
  });

  const [teamResult, userResult] = await Promise.allSettled([teamMail, userMail]);

  if (teamResult.status === "rejected") {
    console.error("Lead team mail failed:", teamResult.reason?.message);
    throw teamResult.reason;
  }

  console.log("Lead mail sent:", teamResult.value?.messageId);

  if (userResult.status === "fulfilled") {
    console.log("User confirmation mail sent:", userResult.value?.messageId);
  } else {
    console.error("User confirmation mail failed:", userResult.reason?.message);
  }

  return teamResult.value;
}
