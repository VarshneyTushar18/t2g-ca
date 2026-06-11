import mysql from "mysql2/promise";

const requiredDbEnv = ["DB_HOST", "DB_USER", "DB_NAME"];

for (const key of requiredDbEnv) {
  if (!process.env[key]) {
    console.error(`Missing required database environment variable: ${key}`);
    process.exit(1);
  }
}

if (process.env.DB_PASS == null) {
  console.error("Missing required database environment variable: DB_PASS");
  process.exit(1);
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_POOL_SIZE) || 10,
  queueLimit: 0,
});

function getTableName() {
  const table = process.env.DB_TABLE || "leads_tech2globeca";
  if (!/^[a-zA-Z0-9_]+$/.test(table)) {
    throw new Error("Invalid DB_TABLE name");
  }
  return table;
}

function sanitize(value) {
  return value == null ? "" : String(value).trim();
}

function buildLeadFilters(filters = {}) {
  const clauses = [];
  const params = [];

  const search = sanitize(filters.search);
  if (search) {
    const like = `%${search}%`;
    clauses.push(
      "(name LIKE ? OR email LIKE ? OR phone LIKE ? OR message LIKE ? OR country LIKE ? OR source_page LIKE ? OR form_type LIKE ?)"
    );
    params.push(like, like, like, like, like, like, like);
  }

  const formType = sanitize(filters.formType);
  if (formType) {
    clauses.push("form_type = ?");
    params.push(formType);
  }

  const sourceSite = sanitize(filters.sourceSite);
  if (sourceSite) {
    clauses.push("source_site = ?");
    params.push(sourceSite);
  }

  const dateFrom = sanitize(filters.dateFrom);
  const dateTo = sanitize(filters.dateTo);
  if (dateFrom) {
    clauses.push("DATE(created_at) >= ?");
    params.push(dateFrom);
  }
  if (dateTo) {
    clauses.push("DATE(created_at) <= ?");
    params.push(dateTo);
  }

  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  return { where, params };
}

export async function verifyDbConnection() {
  const conn = await pool.getConnection();
  conn.release();
}

export async function insertLead(lead) {
  const table = getTableName();

  const sql = `
    INSERT INTO ${table}
      (source_site, name, email, country, phone, message, form_type, source_page, sender_ip, location)
    VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    "tech2globeca",
    lead.name,
    lead.email,
    lead.country || null,
    lead.phone || null,
    lead.message || null,
    lead.formType || null,
    lead.sourcePage || null,
    lead.senderIp || null,
    lead.location || null,
  ];

  const [result] = await pool.execute(sql, params);
  return result.insertId;
}

export async function listLeads({
  page = 1,
  limit = 10,
  search = "",
  formType = "",
  sourceSite = "",
  dateFrom = "",
  dateTo = "",
} = {}) {
  const table = getTableName();
  const safePage = Math.max(Number(page) || 1, 1);
  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 100);
  const offset = (safePage - 1) * safeLimit;

  const { where, params } = buildLeadFilters({
    search,
    formType,
    sourceSite,
    dateFrom,
    dateTo,
  });

  const [rows] = await pool.query(
    `
      SELECT id, source_site, name, email, country, phone, message, form_type, source_page, sender_ip, location, created_at
      FROM ${table}
      ${where}
      ORDER BY id DESC
      LIMIT ? OFFSET ?
    `,
    [...params, safeLimit, offset]
  );

  const [[{ total }]] = await pool.query(
    `SELECT COUNT(*) as total FROM ${table} ${where}`,
    params
  );

  return {
    rows,
    pagination: {
      page: safePage,
      limit: safeLimit,
      total,
      totalPages: Math.max(1, Math.ceil(total / safeLimit)),
    },
  };
}

export async function exportLeads({
  search = "",
  formType = "",
  sourceSite = "",
  dateFrom = "",
  dateTo = "",
  maxRows = 10000,
} = {}) {
  const table = getTableName();
  const { where, params } = buildLeadFilters({
    search,
    formType,
    sourceSite,
    dateFrom,
    dateTo,
  });

  const [rows] = await pool.query(
    `
      SELECT id, source_site, name, email, country, phone, message, form_type, source_page, sender_ip, location, created_at
      FROM ${table}
      ${where}
      ORDER BY id DESC
      LIMIT ?
    `,
    [...params, maxRows]
  );

  return rows;
}

export async function deleteLeadById(id) {
  const table = getTableName();
  const [result] = await pool.execute(`DELETE FROM ${table} WHERE id = ?`, [id]);
  return result.affectedRows;
}
