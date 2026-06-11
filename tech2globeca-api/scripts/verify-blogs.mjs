import mysql from "mysql2/promise";
import { parseWordPressDump } from "./wp-sql-parser.mjs";

const sqlPath = "E:/ca blog/buynfqw4_blogtech_CA.sql";
const wpPosts = parseWordPressDump(sqlPath);

const conn = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "t2g_db",
});

const [[{ dbCount }]] = await conn.query(
  "SELECT COUNT(*) AS dbCount FROM blogs_tech2globeca WHERE status = 'published'"
);
const [dbRows] = await conn.query(
  "SELECT slug, title FROM blogs_tech2globeca ORDER BY published_at DESC"
);

const wpSlugSet = new Set(wpPosts.map((p) => p.slug));
const dbSlugSet = new Set(dbRows.map((r) => r.slug));
const missing = wpPosts.filter((p) => !dbSlugSet.has(p.slug));

console.log("WordPress dump (published):", wpPosts.length);
console.log("MySQL blogs_tech2globeca (published):", dbCount);
console.log("Match:", wpPosts.length === dbCount && missing.length === 0 ? "YES" : "NO");

if (missing.length) {
  console.log("\nMissing from migrated DB:");
  for (const post of missing) {
    console.log(`- ${post.slug}`);
  }
}

const wpConn = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "buynfqw4_blogstech",
});

const [[wpDb]] = await wpConn.query(`
  SELECT
    SUM(post_type = 'post') AS total_posts,
    SUM(post_type = 'post' AND post_status = 'publish') AS published,
    SUM(post_type = 'post' AND post_status = 'draft') AS drafts
  FROM bltech34_posts
`);

console.log("\nXAMPP WordPress DB (buynfqw4_blogstech):");
console.log("- Total post type 'post':", Number(wpDb.total_posts));
console.log("- Published:", Number(wpDb.published));
console.log("- Drafts:", Number(wpDb.drafts));
console.log("\nNote: Only published posts were migrated.");

await conn.end();
await wpConn.end();
