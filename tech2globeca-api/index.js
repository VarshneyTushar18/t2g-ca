import "dotenv/config";
import cors from "cors";
import express from "express";
import { validateContactPayload, getFirstError } from "./validate.js";
import { verifyTurnstileToken } from "./turnstile.js";
import {
  createMailTransporter,
  verifyMailConnection,
  sendLeadEmails,
  getLeadEmails,
} from "./lib/mailer.js";
import { getClientIp } from "./lib/getClientIp.js";
import { resolveIpLocation } from "./lib/geoip.js";
import { getCorsOrigins } from "./lib/cors.config.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.set("trust proxy", true);

const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

if (!process.env.LEAD_EMAILS && !process.env.MAIL_TO) {
  console.warn(
    "LEAD_EMAILS not set — using defaults: info@tech2globe.com, enquiries@tech2globe.net"
  );
}

const corsOrigins = getCorsOrigins();

createMailTransporter();

app.use(
  cors({
    origin: corsOrigins,
  })
);
app.use(express.json({ limit: "32kb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({
      success: false,
      message: "Invalid request body.",
      errors: {},
    });
  }

  const clientIp = getClientIp(req);

  const captchaResult = await verifyTurnstileToken(
    req.body.captchaToken,
    clientIp
  );

  if (!captchaResult.success) {
    return res.status(400).json({
      success: false,
      message: captchaResult.error || "Captcha verification failed",
      errors: { captcha: captchaResult.error },
    });
  }

  const payload = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    message: req.body.message,
    country: req.body.country,
    source: req.body.source || req.body.form_type,
    pageUrl: req.body.pageUrl || req.body.source_page,
    form_type: req.body.form_type,
    source_page: req.body.source_page,
  };

  const hasCountry = Boolean(payload.country?.trim());

  const result = validateContactPayload(payload, { requireCountry: hasCountry });

  if (!result.valid) {
    return res.status(400).json({
      success: false,
      message: getFirstError(result.errors),
      errors: result.errors,
    });
  }

  try {
    const location = await resolveIpLocation(clientIp);

    await sendLeadEmails({
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      message: result.data.message,
      country: result.data.country,
      senderIp: clientIp,
      location,
      sourcePage: result.data.sourcePage,
      formType: result.data.formType,
    });

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been sent successfully.",
    });
  } catch (err) {
    console.error("Send lead emails failed:", err);
    return res.status(500).json({
      success: false,
      message: "Unable to send message. Please try again later.",
    });
  }
});

async function start() {
  try {
    await verifyMailConnection();
    console.log("Nodemailer: SMTP connection verified");
    console.log("Lead emails will be sent to:", getLeadEmails().join(", "));
  } catch (err) {
    console.error("Nodemailer: SMTP verification failed:", err.message);
    console.error("Check SMTP_HOST, SMTP_USER, SMTP_PASS in .env");
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`Mail API listening on http://localhost:${PORT}`);
    console.log("CORS allowed origins:", corsOrigins.join(", "));
  });
}

start();
