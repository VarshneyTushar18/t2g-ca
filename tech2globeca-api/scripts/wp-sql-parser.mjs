import fs from "fs";

export function readSqlDump(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function extractInsertValues(sql, table) {
  const marker = `INSERT INTO \`${table}\``;
  const start = sql.indexOf(marker);
  if (start === -1) return "";

  const valuesStart = sql.indexOf("VALUES", start);
  if (valuesStart === -1) return "";

  const end = sql.indexOf(";\n", valuesStart);
  return sql.slice(valuesStart + 6, end === -1 ? sql.length : end);
}

function parseSqlTuples(valuesChunk) {
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

      if (ch === "\\" && inString) {
        const next = valuesChunk[i + 1];
        if (next === "n") {
          current += "\n";
          i += 2;
          continue;
        }
        if (next === "r") {
          current += "\r";
          i += 2;
          continue;
        }
        if (next === "t") {
          current += "\t";
          i += 2;
          continue;
        }
        if (next === "\\") {
          current += "\\";
          i += 2;
          continue;
        }
        if (next === "'") {
          current += "'";
          i += 2;
          continue;
        }
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

function nullIfEmpty(value) {
  if (value == null) return null;
  const trimmed = String(value).trim();
  return trimmed === "" ? null : trimmed;
}

function buildAttachmentMap(postRows) {
  const map = new Map();

  for (const fields of postRows) {
    const id = Number(fields[0]);
    const mimeType = fields[21] || "";
    const guid = fields[18] || "";

    if (fields[20] !== "attachment" || !mimeType.startsWith("image/")) {
      continue;
    }

    map.set(id, {
      id,
      guid,
      mimeType,
    });
  }

  return map;
}

function buildPostMetaMap(metaRows) {
  const map = new Map();

  for (const fields of metaRows) {
    const postId = Number(fields[1]);
    const key = fields[2];
    const value = fields[3];

    if (!map.has(postId)) {
      map.set(postId, new Map());
    }

    map.get(postId).set(key, value);
  }

  return map;
}

function buildUsersMap(userRows) {
  const map = new Map();

  for (const fields of userRows) {
    map.set(Number(fields[0]), {
      id: Number(fields[0]),
      login: fields[1],
      displayName: fields[9] || fields[1],
    });
  }

  return map;
}

function buildTermsMap(termRows) {
  const map = new Map();

  for (const fields of termRows) {
    map.set(Number(fields[0]), {
      id: Number(fields[0]),
      name: fields[1],
      slug: fields[2],
    });
  }

  return map;
}

function buildTaxonomyMap(taxonomyRows) {
  const map = new Map();

  for (const fields of taxonomyRows) {
    map.set(Number(fields[1]), {
      termId: Number(fields[1]),
      taxonomy: fields[2],
      name: fields[3] || null,
    });
  }

  return map;
}

function buildPostCategories(relationshipRows, taxonomyMap, termsMap) {
  const map = new Map();

  for (const fields of relationshipRows) {
    const postId = Number(fields[0]);
    const termTaxonomyId = Number(fields[1]);
    const taxonomy = taxonomyMap.get(termTaxonomyId);

    if (!taxonomy || taxonomy.taxonomy !== "category") {
      continue;
    }

    const term = termsMap.get(taxonomy.termId);
    if (!term) continue;

    if (!map.has(postId)) {
      map.set(postId, []);
    }

    map.get(postId).push(term.name);
  }

  return map;
}

function resolveFeaturedImage(postId, postMetaMap, attachmentMap) {
  const meta = postMetaMap.get(postId);
  if (!meta) return null;

  const thumbnailId = Number(meta.get("_thumbnail_id"));
  if (!thumbnailId) return null;

  const attachmentMeta = postMetaMap.get(thumbnailId);
  const attachedFile = attachmentMeta?.get("_wp_attached_file");
  if (attachedFile) {
    return `https://blog.tech2globe.ca/wp-content/uploads/${attachedFile}`;
  }

  const attachment = attachmentMap.get(thumbnailId);
  return attachment?.guid || null;
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildExcerpt(post, postMetaMap) {
  const explicit = stripHtml(post.excerpt);
  if (explicit) return explicit;

  const meta = postMetaMap.get(post.id);
  const seoDescription = meta?.get("rank_math_description") || meta?.get("_aioseo_description");
  if (seoDescription) return stripHtml(seoDescription);

  const content = stripHtml(post.content);
  return content.slice(0, 220) + (content.length > 220 ? "..." : "");
}

export function parseWordPressDump(sqlPath) {
  const sql = readSqlDump(sqlPath);

  const postRows = parseSqlTuples(extractInsertValues(sql, "bltech34_posts"));
  const metaRows = parseSqlTuples(extractInsertValues(sql, "bltech34_postmeta"));
  const userRows = parseSqlTuples(extractInsertValues(sql, "bltech34_users"));
  const termRows = parseSqlTuples(extractInsertValues(sql, "bltech34_terms"));
  const taxonomyRows = parseSqlTuples(extractInsertValues(sql, "bltech34_term_taxonomy"));
  const relationshipRows = parseSqlTuples(extractInsertValues(sql, "bltech34_term_relationships"));

  const postMetaMap = buildPostMetaMap(metaRows);
  const attachmentMap = buildAttachmentMap(postRows);
  const usersMap = buildUsersMap(userRows);
  const termsMap = buildTermsMap(termRows);
  const taxonomyMap = buildTaxonomyMap(taxonomyRows);
  const categoriesByPost = buildPostCategories(relationshipRows, taxonomyMap, termsMap);

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
      modified: fields[14],
      type: fields[20],
    }))
    .filter((post) => post.type === "post" && post.status === "publish")
    .map((post) => {
      const meta = postMetaMap.get(post.id);
      const author = usersMap.get(post.authorId);
      const categories = categoriesByPost.get(post.id) || [];

      return {
        wp_id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: buildExcerpt(post, postMetaMap),
        content: post.content,
        featured_image: resolveFeaturedImage(post.id, postMetaMap, attachmentMap),
        author_name: author?.displayName || "Tech2Globe",
        category: categories[0] || "Blog",
        status: "published",
        published_at: post.date,
        updated_at: post.modified,
        meta_title: nullIfEmpty(meta?.get("rank_math_title") || meta?.get("_aioseo_title")),
        meta_description: nullIfEmpty(meta?.get("rank_math_description") || meta?.get("_aioseo_description")),
      };
    })
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

  return posts;
}
