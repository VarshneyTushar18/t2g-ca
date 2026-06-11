import fs from "fs";

const sqlPath = process.argv[2] || "E:/ca blog/buynfqw4_blogtech_CA.sql";
const sql = fs.readFileSync(sqlPath, "utf8");

function extractInsert(table) {
  const marker = `INSERT INTO \`${table}\``;
  const start = sql.indexOf(marker);
  if (start === -1) return null;
  const valuesStart = sql.indexOf("VALUES", start);
  const end = sql.indexOf(";\n", valuesStart);
  return sql.slice(valuesStart + 6, end);
}

function parseTuples(valuesChunk) {
  const rows = [];
  let i = 0;

  while (i < valuesChunk.length) {
    while (i < valuesChunk.length && valuesChunk[i] !== "(") i++;
    if (i >= valuesChunk.length) break;

    i++;
    const fields = [];
    let current = "";
    let inString = false;
    let escape = false;

    while (i < valuesChunk.length) {
      const ch = valuesChunk[i];

      if (escape) {
        current += ch;
        escape = false;
        i++;
        continue;
      }

      if (ch === "\\") {
        escape = true;
        i++;
        continue;
      }

      if (ch === "'" && !inString) {
        inString = true;
        i++;
        continue;
      }

      if (ch === "'" && inString) {
        if (valuesChunk[i + 1] === "'") {
          current += "'";
          i += 2;
          continue;
        }
        inString = false;
        i++;
        continue;
      }

      if (!inString && ch === ",") {
        fields.push(current);
        current = "";
        i++;
        continue;
      }

      if (!inString && ch === ")") {
        fields.push(current);
        rows.push(fields);
        i++;
        break;
      }

      current += ch;
      i++;
    }
  }

  return rows;
}

const postRows = parseTuples(extractInsert("bltech34_posts"));
const posts = postRows
  .map((fields) => ({
    id: Number(fields[0]),
    authorId: Number(fields[1]),
    date: fields[2],
    content: fields[4],
    title: fields[5],
    excerpt: fields[6],
    status: fields[7],
    slug: fields[11],
    type: fields[20],
  }))
  .filter((p) => p.type === "post" && p.status === "publish");

console.log("Published posts:", posts.length);
for (const post of posts) {
  console.log(`- [${post.id}] ${post.slug} :: ${post.title}`);
}
