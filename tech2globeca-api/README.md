# Tech2Globe Contact API

Standalone Node.js backend for contact forms (**email only — no database**):

- **Nodemailer** — team notification + user thank-you email (`lib/mailer.js`)
- Default recipients: `info@tech2globe.com`, `enquiries@tech2globe.net` (override with `LEAD_EMAILS`)
- **Turnstile** — captcha verification
- **Express** — REST API

Submissions are **not** stored in MySQL or any database. Enquiries exist only in the inboxes above (and the auto-reply to the visitor).

## Setup

```bash
cp .env.example .env
# Edit .env with SMTP and Turnstile secret
npm install
npm run dev
```

Uses **nodemon** to auto-restart when you change files.

Runs on `http://localhost:3001` by default.

## VPS deployment

Deploy this folder separately from `tech2globeca` (frontend).

- **This folder:** `.env` with SMTP, `TURNSTILE_SECRET_KEY`, and `CORS_ORIGIN` (comma-separated frontend URLs, e.g. `https://tech2globe.ca`)
- **Frontend folder:** `.env.local` with `NEXT_PUBLIC_CONTACT_API_URL=https://api.yourdomain.com`
