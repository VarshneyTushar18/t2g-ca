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
  formType,
}) {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const pageLink =
    sourcePage && sourcePage !== "—"
      ? `<a href="${escapeHtml(sourcePage)}">${escapeHtml(sourcePage)}</a>`
      : "-";

  const body = `
    <h3 style="margin-bottom:15px;color:#222;">Contact Details</h3>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Country:</strong> ${escapeHtml(country && country !== "—" ? country : "-")}</p>
    <p><strong>Location:</strong> ${escapeHtml(location)}</p>
    <p><strong>Sender IP:</strong> ${escapeHtml(senderIp)}</p>

    <hr style="border:none;border-top:1px solid #e5e5e5;margin:25px 0;" />

    <h3 style="margin-bottom:15px;color:#222;">Message</h3>
    <p style="line-height:1.7;white-space:pre-wrap;">${escapeHtml(message || "-")}</p>

    <hr style="border:none;border-top:1px solid #e5e5e5;margin:25px 0;" />

    <h3 style="margin-bottom:15px;color:#222;">Additional Information</h3>
    <p><strong>Source Page:</strong> ${pageLink}</p>
    <p><strong>Form Type:</strong> ${escapeHtml(formType || "-")}</p>
    <p><strong>Submitted At:</strong> ${escapeHtml(submittedAt)}</p>
  `;

  return emailShell("New Lead Inquiry", body);
}

function buildUserConfirmationHtml({ name, email, phone, country }) {
  const body = `
    <p>Dear ${escapeHtml(name)},</p>
    <p style="line-height:1.7;">
      Thank you for reaching out to Tech2Globe.
      We have received your inquiry successfully and our team will contact you shortly.
    </p>

    <hr style="border:none;border-top:1px solid #e5e5e5;margin:25px 0;" />

    <h3 style="margin-bottom:15px;color:#222;">Your Submitted Details</h3>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Country:</strong> ${escapeHtml(country && country !== "—" ? country : "-")}</p>

    <hr style="border:none;border-top:1px solid #e5e5e5;margin:25px 0;" />

    <p>
      Regards,<br />
      <strong>Tech2Globe Team</strong>
    </p>
  `;

  return emailShell("Thank You for Contacting Us", body);
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
    subject: `New Lead Inquiry - ${name}`,
    html: teamHtml,
    text: [
      `New Lead Inquiry`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Country: ${country || "-"}`,
      `Location: ${location}`,
      `Sender IP: ${senderIp}`,
      `Message: ${message || "-"}`,
      `Source Page: ${sourcePage || "-"}`,
      `Form Type: ${formType || "-"}`,
    ].join("\n"),
  });

  const userHtml = buildUserConfirmationHtml({ name, email, phone, country });

  const userMail = transport.sendMail({
    from,
    to: email,
    subject: "Thank You for Contacting Tech2Globe",
    html: userHtml,
    text: `Dear ${name},\n\nThank you for contacting Tech2Globe. We have received your inquiry and will contact you shortly.\n\nRegards,\nTech2Globe Team`,
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
