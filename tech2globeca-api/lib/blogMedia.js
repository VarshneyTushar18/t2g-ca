const UPLOADS_PATH = "/wp-content/uploads/";

function getBlogMediaPrefix() {
  const prefix = process.env.BLOG_MEDIA_URL_PREFIX || "/blog-media";
  return prefix.endsWith("/") ? prefix.slice(0, -1) : prefix;
}

export function normalizeBlogMediaUrl(url) {
  if (!url) return url;

  const value = String(url).trim();
  const prefix = getBlogMediaPrefix();

  const blogHostPattern = /^https?:\/\/blog\.tech2globe\.ca\/wp-content\/uploads\//i;
  if (blogHostPattern.test(value)) {
    return value.replace(blogHostPattern, `${prefix}/`);
  }

  if (value.startsWith(UPLOADS_PATH)) {
    return `${prefix}${value}`;
  }

  return value;
}

export function rewriteBlogContentHtml(html) {
  if (!html) return html;

  const prefix = getBlogMediaPrefix();
  return String(html).replace(
    /https?:\/\/blog\.tech2globe\.ca\/wp-content\/uploads\//gi,
    `${prefix}/`
  );
}
