import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import BlogCategoryTabs from "@/components/BlogCategoryTabs";
import { getBlogCategories, getBlogs } from "@/lib/blogs";
import Link from "next/link";

export const metadata = {
  title: "Blogs - Tech2Globe Canada",
  description: "Read the latest digital marketing, SEO, PPC, and web development insights from Tech2Globe Canada.",
};

export default async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page) || 1;
  const category = resolvedSearchParams?.category || "";

  const [{ blogs, pagination }, categories] = await Promise.all([
    getBlogs({ page, limit: 12, category }),
    getBlogCategories().catch(() => []),
  ]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blog" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <PageHeader title="Blogs" breadcrumbs={breadcrumbs} />

      <section className="py-12 lg:py-16 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Insights And News
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
              Digital marketing tips, SEO strategies, and industry updates for Canadian businesses.
            </p>
          </div>

          <BlogCategoryTabs categories={categories} activeCategory={category} />

          {blogs.length === 0 ? (
            <div className="text-center py-20 text-gray-600 bg-white border border-gray-100 shadow-sm">
              No blog posts found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
              ))}
            </div>
          )}

          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              {page > 1 && (
                <Link
                  href={`/blog?page=${page - 1}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
                  className="px-5 py-2 bg-white border border-gray-300 text-sm font-semibold uppercase tracking-wide hover:border-[#c7010c] hover:text-[#c7010c] transition-colors"
                >
                  Previous
                </Link>
              )}
              <span className="text-sm text-gray-600">
                Page {pagination.page} of {pagination.totalPages}
              </span>
              {page < pagination.totalPages && (
                <Link
                  href={`/blog?page=${page + 1}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
                  className="px-5 py-2 bg-white border border-gray-300 text-sm font-semibold uppercase tracking-wide hover:border-[#c7010c] hover:text-[#c7010c] transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
