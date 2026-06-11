import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { parseWordPressDump } from "./wp-sql-parser.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(rootDir, ".env") });

const sqlPath = process.argv[2] || "E:/ca blog/buynfqw4_blogtech_CA.sql";
const blogsTable = process.env.BLOGS_TABLE || "blogs_tech2globeca";
const seedPath = path.join(rootDir, "data", "blogs.json");

function escapeSql(value) {
  if (value == null) return "NULL";
  return `'${String(value).replace(/\\/g, "\\\\").replace(/'/g, "''")}'`;
}

async function ensureBlogsTable(connection) {
  const schemaPath = path.join(rootDir, "sql", "blogs_tech2globeca.sql");
  const schemaSql = fs.readFileSync(schemaPath, "utf8");
  await connection.query(schemaSql);
}

async function upsertBlogs(connection, blogs) {
  let inserted = 0;
  let updated = 0;

  for (const blog of blogs) {
    const sql = `
      INSERT INTO ${blogsTable}
        (wp_id, slug, title, excerpt, content, featured_image, author_name, category, status, published_at, updated_at, meta_title, meta_description)
      VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        wp_id = VALUES(wp_id),
        title = VALUES(title),
        excerpt = VALUES(excerpt),
        content = VALUES(content),
        featured_image = VALUES(featured_image),
        author_name = VALUES(author_name),
        category = VALUES(category),
        status = VALUES(status),
        published_at = VALUES(published_at),
        updated_at = VALUES(updated_at),
        meta_title = VALUES(meta_title),
        meta_description = VALUES(meta_description)
    `;

    const params = [
      blog.wp_id,
      blog.slug,
      blog.title,
      blog.excerpt,
      blog.content,
      blog.featured_image,
      blog.author_name,
      blog.category,
      blog.status,
      blog.published_at,
      blog.updated_at,
      blog.meta_title,
      blog.meta_description,
    ];

    const [result] = await connection.execute(sql, params);
    if (result.affectedRows === 1) inserted += 1;
    else if (result.affectedRows === 2) updated += 1;
  }

  return { inserted, updated };
}

function writeSeedFiles(blogs) {
  fs.mkdirSync(path.dirname(seedPath), { recursive: true });
  fs.writeFileSync(seedPath, JSON.stringify(blogs, null, 2), "utf8");

  const seedSqlPath = path.join(rootDir, "data", "blogs_seed.sql");
  const lines = blogs.map((blog) => {
    return `INSERT INTO ${blogsTable} (wp_id, slug, title, excerpt, content, featured_image, author_name, category, status, published_at, updated_at, meta_title, meta_description) VALUES (${blog.wp_id}, ${escapeSql(blog.slug)}, ${escapeSql(blog.title)}, ${escapeSql(blog.excerpt)}, ${escapeSql(blog.content)}, ${escapeSql(blog.featured_image)}, ${escapeSql(blog.author_name)}, ${escapeSql(blog.category)}, ${escapeSql(blog.status)}, ${escapeSql(blog.published_at)}, ${escapeSql(blog.updated_at)}, ${escapeSql(blog.meta_title)}, ${escapeSql(blog.meta_description)}) ON DUPLICATE KEY UPDATE title = VALUES(title), excerpt = VALUES(excerpt), content = VALUES(content), featured_image = VALUES(featured_image), author_name = VALUES(author_name), category = VALUES(category), status = VALUES(status), published_at = VALUES(published_at), updated_at = VALUES(updated_at), meta_title = VALUES(meta_title), meta_description = VALUES(meta_description);`;
  });

  fs.writeFileSync(seedSqlPath, lines.join("\n"), "utf8");
}

async function main() {
  console.log(`Reading WordPress dump: ${sqlPath}`);
  const blogs = parseWordPressDump(sqlPath);
  console.log(`Parsed ${blogs.length} published blog posts.`);

  writeSeedFiles(blogs);
  console.log(`Wrote seed files:\n- ${seedPath}\n- ${path.join(rootDir, "data", "blogs_seed.sql")}`);

  const hasDbConfig = process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME;
  if (!hasDbConfig) {
    console.log("DB credentials not configured. Skipping database import.");
    return;
  }

  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS || "",
      database: process.env.DB_NAME,
      multipleStatements: true,
    });

    await ensureBlogsTable(connection);
    const { inserted, updated } = await upsertBlogs(connection, blogs);
    console.log(`Database import complete: ${inserted} inserted, ${updated} updated.`);
  } catch (error) {
    console.error("Database import failed:", error.message);
    console.log("Seed files were still generated and can be imported manually.");
    process.exitCode = 1;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

main();
