const API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL || "http://localhost:3001";

async function fetchJson(path) {
  const response = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Blog API request failed: ${response.status}`);
  }

  const payload = await response.json();
  if (!payload.success) {
    throw new Error(payload.message || "Blog API request failed");
  }

  return payload;
}

export async function getBlogs({ page = 1, limit = 12, search = "", category = "" } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (search) params.set("search", search);
  if (category) params.set("category", category);

  const payload = await fetchJson(`/api/blogs?${params.toString()}`);
  return {
    blogs: payload.data,
    pagination: payload.pagination,
  };
}

export async function getBlogBySlug(slug) {
  const payload = await fetchJson(`/api/blogs/${encodeURIComponent(slug)}`);
  return payload.data;
}

export async function getRecentBlogs(limit = 3) {
  const { blogs } = await getBlogs({ page: 1, limit });
  return blogs;
}

export function formatBlogDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatBlogAuthor(authorName) {
  const name = String(authorName || "").trim();
  if (!name || name.toLowerCase() === "admin") {
    return "Tech2Globe";
  }
  return name;
}

export function getBlogImage(blog) {
  return blog.featuredImage || "/images/Banner-Tech2Globe.jpg";
}

export async function getBlogCategories() {
  const payload = await fetchJson("/api/blogs/categories");
  return payload.data;
}
