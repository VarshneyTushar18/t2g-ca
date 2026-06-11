import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUser, FiTag } from "react-icons/fi";
import { formatBlogAuthor, formatBlogDate, getBlogImage } from "@/lib/blogs";

export default function BlogCard({ blog }) {
  const author = formatBlogAuthor(blog.authorName);
  const publishedDate = formatBlogDate(blog.publishedAt);

  return (
    <article className="bg-white border border-gray-100 group transition-all duration-300 hover:shadow-xl flex flex-col h-full overflow-hidden">
      <Link href={`/blog/${blog.slug}`} className="block relative h-52 overflow-hidden">
        <Image
          src={getBlogImage(blog)}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {blog.category && (
          <span className="absolute top-4 left-4 bg-[#c7010c] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1">
            {blog.category}
          </span>
        )}
      </Link>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <span className="inline-flex items-center gap-1.5">
            <FiUser className="text-[#c7010c] shrink-0" size={14} />
            <span>
              Posted by <span className="font-semibold text-gray-700">{author}</span>
            </span>
          </span>
          {publishedDate && (
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar className="text-[#c7010c] shrink-0" size={14} />
              <span>{publishedDate}</span>
            </span>
          )}
          {blog.category && (
            <span className="inline-flex items-center gap-1.5">
              <FiTag className="text-[#c7010c] shrink-0" size={14} />
              <span>{blog.category}</span>
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-[#c7010c] transition-colors">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>

        {blog.excerpt && (
          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
          <span className="text-xs text-gray-500">By {author}</span>
          <Link
            href={`/blog/${blog.slug}`}
            className="text-gray-900 text-xs font-semibold uppercase tracking-widest flex items-center hover:text-[#c7010c] transition-colors group/link whitespace-nowrap"
          >
            Read More
            <span className="ml-2 text-[#c7010c] transform transition-transform group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
