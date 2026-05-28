import "dotenv/config";
import { app, corsOrigins } from "./app.js";
import {
  createMailTransporter,
  verifyMailConnection,
  getLeadEmails,
} from "./lib/mailer.js";
import { verifyDbConnection } from "./lib/db.js";

const PORT = process.env.PORT || 3001;

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

async function start() {
  try {
    await verifyDbConnection();
    console.log("MySQL: connection verified");
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
