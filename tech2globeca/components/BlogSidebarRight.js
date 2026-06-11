import Link from "next/link";
import Image from "next/image";
import { formatBlogDate, getBlogImage } from "@/lib/blogs";

export default function BlogSidebarRight({
  recentPosts = [],
  currentSlug = "",
  categories = [],
  activeCategory = "",
}) {
  const posts = recentPosts.filter((post) => post.slug !== currentSlug).slice(0, 5);

  return (
    <aside className="space-y-8">
      {categories.length > 0 && (
        <div className="bg-white border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">
            Categories
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/blog"
                className={`block text-sm py-1.5 transition-colors ${
                  !activeCategory
                    ? "text-[#c7010c] font-semibold"
                    : "text-gray-600 hover:text-[#c7010c]"
                }`}
              >
                All Posts
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={`/blog?category=${encodeURIComponent(category.name)}`}
                  className={`flex items-center justify-between text-sm py-1.5 transition-colors ${
                    activeCategory === category.name
                      ? "text-[#c7010c] font-semibold"
                      : "text-gray-600 hover:text-[#c7010c]"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs text-gray-400">{category.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-100">
          Recent Posts
        </h3>
        <ul className="space-y-5">
          {posts.map((post) => (
            <li key={post.slug} className="flex gap-3">
              <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                <Image
                  src={getBlogImage(post)}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-gray-900 leading-snug hover:text-[#c7010c] transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-gray-500 mt-1">{formatBlogDate(post.publishedAt)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#c7010c] text-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-3">Need Help Growing Online?</h3>
        <p className="text-sm text-white/90 leading-relaxed mb-5">
          Talk to Tech2Globe Canada for SEO, PPC, web development, and digital marketing support.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-white text-[#c7010c] text-sm font-semibold px-5 py-2.5 hover:bg-gray-100 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>

      <div className="bg-white border border-gray-100 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
        <p className="text-sm text-gray-600 mb-2">
          <a href="tel:+17783829628" className="hover:text-[#c7010c] transition-colors">
            +1-778-382-9628
          </a>
        </p>
        <p className="text-sm text-gray-600">
          <a href="mailto:info@tech2globe.ca" className="hover:text-[#c7010c] transition-colors">
            info@tech2globe.ca
          </a>
        </p>
      </div>
    </aside>
  );
}
