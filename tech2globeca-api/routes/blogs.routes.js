import { Router } from "express";
import { getBlog, getBlogCategoryList, getBlogs } from "../controllers/blogs.controller.js";

const router = Router();

router.get("/blogs", getBlogs);
router.get("/blogs/categories", getBlogCategoryList);
router.get("/blogs/:slug", getBlog);

export default router;
