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

## Blog migration (from blog.tech2globe.ca)

Import published WordPress posts from `buynfqw4_blogtech_CA.sql`:

```bash
npm run migrate:blogs
# Or with a custom dump path:
node scripts/migrate-blogs.mjs "E:/ca blog/buynfqw4_blogtech_CA.sql"
```

This writes `data/blogs.json` and `data/blogs_seed.sql`, and imports into MySQL when `DB_*` credentials are set in `.env`.

### VPS: create blogs table + import posts

If PM2 logs show `Table 't2g_db.blogs_tech2globeca' doesn't exist`, run on the server:

```bash
cd /path/to/tech2globeca-api
npm run setup:blogs
pm2 restart t2g-canada-backend --update-env
```

Or manually:

```bash
mysql -u t2g_leads -p t2g_db < sql/blogs_tech2globeca.sql
mysql -u t2g_leads -p t2g_db < data/blogs_seed.sql
```

Ensure the DB user can access the blogs table:

```sql
GRANT SELECT, INSERT, UPDATE, DELETE ON t2g_db.blogs_tech2globeca TO 't2g_leads'@'localhost';
FLUSH PRIVILEGES;
```

Blog images are served from `blog.tech2globe.ca` uploads. The frontend proxies them at `/blog-media/*` (see `next.config.ts`) because HTTPS on the blog subdomain may be broken. After deploying frontend changes, rebuild Next.js on the VPS.

Blog API endpoints:

- `GET /api/blogs` — list posts (`page`, `limit`, `search`, `category`)
- `GET /api/blogs/:slug` — single post
- `GET /api/blogs/categories` — category counts

## VPS deployment

Deploy this folder separately from `tech2globeca` (frontend).

- **This folder:** `.env` with SMTP, `TURNSTILE_SECRET_KEY`, and `CORS_ORIGIN`
- **Production CORS** must include both apex and www:
  `CORS_ORIGIN=https://tech2globe.ca,https://www.tech2globe.ca,https://manageadmin.tech2globe.tech`
- **Local dev:** `DB_PASS=` (empty) and `SKIP_DB_VERIFY=true` when XAMPP MySQL has no password
- **Production:** `DB_USER=t2g_leads`, set `DB_PASS`, do **not** set `SKIP_DB_VERIFY`
- **Frontend folder:** `.env.local` with `NEXT_PUBLIC_CONTACT_API_URL=https://www.tech2globe.ca`

## ElevenLabs chatbot

Webhook URL (configure in ElevenLabs dashboard):

`https://www.tech2globe.ca/api/elevenlabs/webhook`

Required API env vars: `ELEVENLABS_SECRET`, `ELEVENLABS_API_KEY`, `ELEVENLABS_AGENT_ID`.

Transcript emails use the same SMTP setup as lead forms (`LEAD_EMAILS` by default).

Frontend widget env (optional, defaults to Canada agent):

`NEXT_PUBLIC_ELEVENLABS_AGENT_ID=agent_0901kt3f7sgbe978neys8w30bv8x`
