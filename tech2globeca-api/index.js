import "dotenv/config";
import { app, corsOrigins } from "./app.js";
import {
  createMailTransporter,
  verifyMailConnection,
  getLeadEmails,
} from "./lib/mailer.js";
import { verifyDbConnection } from "./lib/db.js";
import { startPendingProcessor } from "./lib/elevenlabs/fallback/elevenlabs.fallback.service.js";

const PORT = Number(process.env.PORT) || 3001;

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

createMailTransporter();

const skipDbVerify = process.env.SKIP_DB_VERIFY === "true";
const skipSmtpVerify = process.env.SKIP_SMTP_VERIFY === "true";

async function start() {
  if (skipDbVerify) {
    console.warn("MySQL: startup check skipped (SKIP_DB_VERIFY=true)");
  } else {
    try {
      await verifyDbConnection();
      console.log("MySQL: connection verified");
    } catch (err) {
      console.error("MySQL: connection failed:", err.message);
      console.error("Check DB_HOST, DB_USER, DB_PASS, DB_NAME in .env");
      console.error("Or set SKIP_DB_VERIFY=true for local dev without MySQL");
      process.exit(1);
    }
  }

  if (skipSmtpVerify) {
    console.warn("Nodemailer: startup check skipped (SKIP_SMTP_VERIFY=true)");
  } else {
    try {
      await verifyMailConnection();
      console.log("Nodemailer: SMTP connection verified");
      console.log("Lead emails will be sent to:", getLeadEmails().join(", "));
    } catch (err) {
      console.error("Nodemailer: SMTP verification failed:", err.message);
      console.error("Check SMTP_HOST, SMTP_USER, SMTP_PASS in .env");
      process.exit(1);
    }
  }

  app.listen(PORT, () => {
    console.log(`Mail API listening on http://localhost:${PORT}`);
    console.log("CORS allowed origins:", corsOrigins.join(", "));
    if (process.env.ELEVENLABS_API_KEY) {
      startPendingProcessor();
    } else {
      console.warn("ELEVENLABS_API_KEY not set — chat fallback processor disabled");
    }
  });
}

start();
