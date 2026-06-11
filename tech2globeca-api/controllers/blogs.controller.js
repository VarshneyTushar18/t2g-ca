import { getBlogBySlug, listBlogCategories, listBlogs } from "../lib/blogs.js";

export async function getBlogs(req, res) {
  try {
    const result = await listBlogs({
      page: req.query.page,
      limit: req.query.limit,
      search: req.query.search,
      category: req.query.category,
    });

    return res.json({
      success: true,
      data: result.rows,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error("Failed to list blogs:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to load blogs.",
    });
  }
}

export async function getBlog(req, res) {
  const slug = req.params.slug;

  try {
    const blog = await getBlogBySlug(slug);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    return res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Failed to load blog:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to load blog post.",
    });
  }
}

export async function getBlogCategoryList(_req, res) {
  try {
    const categories = await listBlogCategories();
    return res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error("Failed to list blog categories:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to load blog categories.",
    });
  }
}
