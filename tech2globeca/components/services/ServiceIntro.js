import React from "react";
import Image from "next/image";

/**
 * ServiceIntro
 *
 * Props:
 *  - data  {Object}
 *      {
 *        image       {string}   Path to the intro image (src)
 *        imageAlt    {string}   Alt text for the image
 *        heading     {string}   Main h2 heading
 *        paragraphs  {string[]} Array of paragraph strings
 *      }
 */
const ServiceIntro = ({ data = {} }) => {
  const {
    image = "",
    imageAlt = "Service intro",
    heading = "",
    paragraphs = [],
  } = data;

  return (
    <section className="service-intro-section py-16 overflow-hidden bg-[#f8f8f8]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

          {/* ── Left: Image ── */}
          {image && (
            <div className="w-full lg:w-[45%] flex-shrink-0">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md shadow-sm">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          )}

          {/* ── Right: Text ── */}
          <div className="w-full lg:w-[55%]">
            {heading && (
              <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-5 leading-snug">
                {heading}
              </h2>
            )}

            <div className="w-16 h-[3px] bg-[#c7010c] mb-4" />

            <div className="space-y-4">
              {paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-[#555555] text-[15px] leading-[1.85]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
