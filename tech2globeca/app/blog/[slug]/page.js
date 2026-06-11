import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogContent from "@/components/BlogContent";
import BlogSidebarRight from "@/components/BlogSidebarRight";
import { formatBlogDate, getBlogBySlug, getBlogCategories, getBlogImage, getBlogs } from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug).catch(() => null);

  if (!blog) {
    return {
      title: "Blog Not Found - Tech2Globe Canada",
    };
  }

  return {
    title: `${blog.metaTitle || blog.title} - Tech2Globe Canada`,
    description: blog.metaDescription || blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const [blog, categories, recentResult] = await Promise.all([
    getBlogBySlug(slug).catch(() => null),
    getBlogCategories().catch(() => []),
    getBlogs({ page: 1, limit: 6 }).catch(() => ({ blogs: [] })),
  ]);

  if (!blog) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blog" },
    { label: blog.title, href: `/blog/${blog.slug}` },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <PageHeader title={blog.title} breadcrumbs={breadcrumbs} image={getBlogImage(blog)} />

      <section className="py-12 lg:py-16 flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <article className="lg:col-span-8 bg-white border border-gray-100 shadow-sm p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                <span className="text-[#c7010c] font-semibold uppercase tracking-wider">{blog.category}</span>
                <span>{formatBlogDate(blog.publishedAt)}</span>
                <span>By {blog.authorName}</span>
              </div>

              {blog.featuredImage && (
                <div className="relative w-full h-[240px] md:h-[360px] mb-10 rounded-lg overflow-hidden">
                  <Image
                    src={getBlogImage(blog)}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              )}

              {blog.excerpt && (
                <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium">
                  {blog.excerpt}
                </p>
              )}

              <BlogContent html={blog.content} />

              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link
                  href="/blog"
                  className="text-[#c7010c] text-sm font-semibold uppercase tracking-widest hover:underline"
                >
                  ← Back to all blogs
                </Link>
              </div>
            </article>

            <div className="lg:col-span-4">
              <BlogSidebarRight
                recentPosts={recentResult.blogs}
                currentSlug={blog.slug}
                categories={categories}
                activeCategory={blog.category}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
