import React from "react";

/**
 * ServiceExpertise
 *
 * Props:
 *  - title       {string}  Section heading (default: "Our Expertise")
 *  - subtitle    {string}  Short description paragraph below the heading
 *  - items       {Array}   Array of expertise items — defined as a const[] in the consuming page
 *                  Each item: { id: string, number: string, title: string, description: string }
 */
const ServiceExpertise = ({
  title = "Our Expertise",
  subtitle = "",
  items = [],
}) => {
  return (
    <section className="service-expertise-section py-[3.6rem] bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
            {title}
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6" />
          {subtitle && (
            <p className="text-[#444444] max-w-2xl mx-auto leading-[1.8] text-[15px]">
              {subtitle}
            </p>
          )}
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="w-[88px] h-[88px] rounded-full border-2 border-[#c7010c] flex items-center justify-center mb-6 bg-white">
                <span className="text-[1.35rem] font-semibold text-[#222222]">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[1.1rem] font-semibold text-[#222222] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#555555] text-[14.5px] leading-[1.8] max-w-[280px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExpertise;
