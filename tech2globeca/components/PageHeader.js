import Link from "next/link";

const DEFAULT_IMAGE = "/images/Banner-Tech2Globe.webp";

export default function PageHeader({ title, breadcrumbs = [], image }) {
  const bannerImage = image || DEFAULT_IMAGE;
  return (
    <section className="relative w-full min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#3d4550]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-6">
          {title}
        </h1>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index} className="flex items-center gap-2">
                    {!isLast ? (
                      <>
                        <Link
                          href={crumb.href}
                          className="text-white hover:text-[#c7010c] transition-colors uppercase text-xs sm:text-sm tracking-wider"
                        >
                          {crumb.label}
                        </Link>
                        <span className="text-gray-400">/</span>
                      </>
                    ) : (
                      <span className="text-gray-300 uppercase text-xs sm:text-sm tracking-wider">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
