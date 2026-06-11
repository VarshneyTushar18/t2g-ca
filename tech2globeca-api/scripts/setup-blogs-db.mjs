import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(rootDir, ".env") });

const blogsTable = process.env.BLOGS_TABLE || "blogs_tech2globeca";

async function main() {
  const required = ["DB_HOST", "DB_USER", "DB_NAME"];
  for (const key of required) {
    if (!process.env[key]) {
      console.error(`Missing ${key} in .env`);
      process.exit(1);
    }
  }

  const schemaPath = path.join(rootDir, "sql", "blogs_tech2globeca.sql");
  const seedPath = path.join(rootDir, "data", "blogs_seed.sql");

  if (!fs.existsSync(schemaPath)) {
    console.error(`Schema file not found: ${schemaPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(seedPath)) {
    console.error(`Seed file not found: ${seedPath}`);
    process.exit(1);
  }

  const schemaSql = fs.readFileSync(schemaPath, "utf8");
  const seedSql = fs.readFileSync(seedPath, "utf8");

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

    console.log(`Creating table ${blogsTable} in ${process.env.DB_NAME}...`);
    await connection.query(schemaSql);

    console.log("Importing blog posts from data/blogs_seed.sql...");
    await connection.query(seedSql);

    const [[{ count }]] = await connection.query(
      `SELECT COUNT(*) AS count FROM ${blogsTable} WHERE status = 'published'`
    );

    console.log(`Done. ${count} published blog posts in ${blogsTable}.`);
    console.log("Restart the API: pm2 restart t2g-canada-backend --update-env");
  } catch (error) {
    console.error("Blog database setup failed:", error.message);
    if (/denied|access/i.test(error.message)) {
      console.error(
        `Grant access, e.g. GRANT SELECT, INSERT, UPDATE, DELETE ON ${process.env.DB_NAME}.${blogsTable} TO '${process.env.DB_USER}'@'localhost';`
      );
    }
    process.exitCode = 1;
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

main();
