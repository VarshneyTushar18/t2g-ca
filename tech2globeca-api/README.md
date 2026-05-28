# Tech2Globe Contact API

Standalone Node.js backend for contact forms with MySQL + email notifications:

- **MySQL** — stores leads in `leads_tech2globeca` (`lib/db.js`)
- **Nodemailer** — team notification + user thank-you email (`lib/mailer.js`)
- Default recipients: `info@tech2globe.com`, `enquiries@tech2globe.net` (override with `LEAD_EMAILS`)
- **Turnstile** — captcha verification
- **Express** — REST API

Submissions are stored in MySQL and then emailed to the enquiry inboxes.

## Setup

```bash
cp .env.example .env
# Edit .env with SMTP, Turnstile, and MySQL values
npm install
npm run dev
```

Uses **nodemon** to auto-restart when you change files.

Runs on `http://localhost:3001` by default.

## VPS deployment

Deploy this folder separately from `tech2globeca` (frontend).

- **This folder:** `.env` with SMTP, `TURNSTILE_SECRET_KEY`, and `CORS_ORIGIN` (comma-separated frontend URLs, e.g. `https://tech2globe.ca`)
- **Frontend folder:** `.env.local` with `NEXT_PUBLIC_CONTACT_API_URL=https://api.yourdomain.com`
