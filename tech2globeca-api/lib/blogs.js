import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2/promise";
import { normalizeBlogMediaUrl, rewriteBlogContentHtml } from "./blogMedia.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, "..", "data", "blogs.json");

let pool;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: Number(process.env.DB_POOL_SIZE) || 10,
      queueLimit: 0,
    });
  }

  return pool;
}

function getBlogsTable() {
  const table = process.env.BLOGS_TABLE || "blogs_tech2globeca";
  if (!/^[a-zA-Z0-9_]+$/.test(table)) {
    throw new Error("Invalid BLOGS_TABLE name");
  }
  return table;
}

function sanitize(value) {
  return value == null ? "" : String(value).trim();
}

function mapBlogRow(row) {
  return {
    id: row.id,
    wpId: row.wp_id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || "",
    content: rewriteBlogContentHtml(row.content),
    featuredImage: normalizeBlogMediaUrl(row.featured_image) || null,
    authorName: row.author_name || "Tech2Globe",
    category: row.category || "Blog",
    status: row.status,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    metaTitle: row.meta_title || row.title,
    metaDescription: row.meta_description || row.excerpt || "",
  };
}

function readSeedBlogs() {
  if (!fs.existsSync(seedPath)) {
    return [];
  }

  const blogs = JSON.parse(fs.readFileSync(seedPath, "utf8"));
  return blogs.map((blog, index) => ({
    id: index + 1,
    wpId: blog.wp_id,
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt || "",
    content: rewriteBlogContentHtml(blog.content),
    featuredImage: normalizeBlogMediaUrl(blog.featured_image) || null,
    authorName: blog.author_name || "Tech2Globe",
    category: blog.category || "Blog",
    status: blog.status || "published",
    publishedAt: blog.published_at,
    updatedAt: blog.updated_at,
    metaTitle: blog.meta_title || blog.title,
    metaDescription: blog.meta_description || blog.excerpt || "",
  }));
}

function filterSeedBlogs({ page = 1, limit = 10, search = "", category = "" } = {}) {
  const safePage = Math.max(Number(page) || 1, 1);
  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 100);
  const searchTerm = sanitize(search).toLowerCase();
  const categoryTerm = sanitize(category).toLowerCase();

  let rows = readSeedBlogs().filter((blog) => blog.status === "published");

  if (searchTerm) {
    rows = rows.filter((blog) => {
      const haystack = `${blog.title} ${blog.excerpt} ${blog.category}`.toLowerCase();
      return haystack.includes(searchTerm);
    });
  }

  if (categoryTerm) {
    rows = rows.filter((blog) => blog.category.toLowerCase() === categoryTerm);
  }

  rows.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const total = rows.length;
  const offset = (safePage - 1) * safeLimit;

  return {
    rows: rows.slice(offset, offset + safeLimit),
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages: Math.max(1, Math.ceil(total / safeLimit)),
    },
  };
}

async function queryBlogsFromDb(filters) {
  const table = getBlogsTable();
  const safePage = Math.max(Number(filters.page) || 1, 1);
  const safeLimit = Math.min(Math.max(Number(filters.limit) || 10, 1), 100);
  const offset = (safePage - 1) * safeLimit;

  const clauses = ["status = 'published'"];
  const params = [];

  const search = sanitize(filters.search);
  if (search) {
    const like = `%${search}%`;
    clauses.push("(title LIKE ? OR excerpt LIKE ? OR category LIKE ?)");
    params.push(like, like, like);
  }

  const category = sanitize(filters.category);
  if (category) {
    clauses.push("category = ?");
    params.push(category);
  }

  const where = `WHERE ${clauses.join(" AND ")}`;

  const [rows] = await getPool().query(
    `
      SELECT id, wp_id, slug, title, excerpt, content, featured_image, author_name, category, status, published_at, updated_at, meta_title, meta_description
      FROM ${table}
      ${where}
      ORDER BY published_at DESC, id DESC
      LIMIT ? OFFSET ?
    `,
    [...params, safeLimit, offset]
  );

  const [[{ total }]] = await getPool().query(
    `SELECT COUNT(*) AS total FROM ${table} ${where}`,
    params
  );

  return {
    rows: rows.map(mapBlogRow),
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages: Math.max(1, Math.ceil(total / safeLimit)),
    },
  };
}

async function getBlogBySlugFromDb(slug) {
  const table = getBlogsTable();
  const [rows] = await getPool().query(
    `
      SELECT id, wp_id, slug, title, excerpt, content, featured_image, author_name, category, status, published_at, updated_at, meta_title, meta_description
      FROM ${table}
      WHERE slug = ? AND status = 'published'
      LIMIT 1
    `,
    [slug]
  );

  return rows[0] ? mapBlogRow(rows[0]) : null;
}

function canUseDatabase() {
  return Boolean(process.env.DB_HOST && process.env.DB_USER && process.env.DB_NAME);
}

export async function listBlogs(filters = {}) {
  if (canUseDatabase()) {
    try {
      return await queryBlogsFromDb(filters);
    } catch (error) {
      console.error("Blog DB query failed, falling back to seed data:", error.message);
    }
  }

  return filterSeedBlogs(filters);
}

export async function getBlogBySlug(slug) {
  const safeSlug = sanitize(slug);
  if (!safeSlug) return null;

  if (canUseDatabase()) {
    try {
      const blog = await getBlogBySlugFromDb(safeSlug);
      if (blog) return blog;
    } catch (error) {
      console.error("Blog DB lookup failed, falling back to seed data:", error.message);
    }
  }

  return readSeedBlogs().find((blog) => blog.slug === safeSlug && blog.status === "published") || null;
}

export async function listBlogCategories() {
  if (canUseDatabase()) {
    try {
      const table = getBlogsTable();
      const [rows] = await getPool().query(
        `
          SELECT category, COUNT(*) AS count
          FROM ${table}
          WHERE status = 'published' AND category IS NOT NULL AND category <> ''
          GROUP BY category
          ORDER BY category ASC
        `
      );

      return rows.map((row) => ({ name: row.category, count: row.count }));
    } catch (error) {
      console.error("Blog category query failed, falling back to seed data:", error.message);
    }
  }

  const counts = new Map();
  for (const blog of readSeedBlogs()) {
    if (blog.status !== "published" || !blog.category) continue;
    counts.set(blog.category, (counts.get(blog.category) || 0) + 1);
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
