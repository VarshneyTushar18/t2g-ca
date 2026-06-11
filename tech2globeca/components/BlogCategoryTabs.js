import Link from "next/link";

export default function BlogCategoryTabs({ categories = [], activeCategory = "" }) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        <Link
          href="/blog"
          className={`px-4 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wide border transition-colors ${
            !activeCategory
              ? "bg-[#c7010c] border-[#c7010c] text-white"
              : "bg-white border-gray-200 text-gray-700 hover:border-[#c7010c] hover:text-[#c7010c]"
          }`}
        >
          All
        </Link>

        {categories.map((category) => {
          const isActive = activeCategory === category.name;

          return (
            <Link
              key={category.name}
              href={`/blog?category=${encodeURIComponent(category.name)}`}
              className={`px-4 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wide border transition-colors ${
                isActive
                  ? "bg-[#c7010c] border-[#c7010c] text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:border-[#c7010c] hover:text-[#c7010c]"
              }`}
            >
              {category.name}
              <span className={`ml-1.5 ${isActive ? "text-white/80" : "text-gray-400"}`}>
                ({category.count})
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
