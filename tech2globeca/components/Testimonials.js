"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials({
  testimonials = [],
  title = "Testimonials",
  subtitle = "We Turn Clicks Into Customers!",
}) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-14 bg-[#f9fafb] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222]">
              {title}
            </h2>

            <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-6">
              {subtitle}
            </p>

            <div className="w-24 h-1.5 bg-[#c7010c] rounded-full mb-6"></div>

            <p className="text-gray-500 text-lg max-w-md">
              Hear what our amazing clients have to say about their experience working with us.
            </p>
          </div>

          {/* RIGHT SIDE - SLIDER */}
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "testimonial-bullet",
                bulletActiveClass: "testimonial-bullet-active",
              }}
              className="h-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="flex items-stretch">
                  <div className="flex flex-col w-full h-full">

                    {/* CARD */}
                    <div className="relative bg-white p-8 md:p-10 shadow-lg border border-gray-100 mb-10 max-w-xl">
                      <p className="text-gray-600 italic leading-relaxed">
                        {item.text}
                      </p>

                      {/* Bubble arrow */}
                      <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white border-r border-b border-gray-100 rotate-45"></div>
                    </div>

                    {/* AUTHOR */}
                    <div className="flex items-center gap-4 pl-4">
                      <div className="w-14 h-14 bg-[#c7010c] flex items-center justify-center text-white text-xl font-semibold">
                        {item.letter}
                      </div>

                      <div>
                        <div className="font-semibold text-[#222]">
                          {item.name}
                        </div>
                        <div className="text-gray-400 text-xs uppercase tracking-wide">
                          {item.subname}
                        </div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>

      {/* BULLETS STYLE */}
      <style jsx global>{`
        .testimonial-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          border-radius: 50%;
          margin: 0 5px;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .testimonial-bullet-active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: #c7010c !important;
        }

        .swiper-pagination {
          position: relative;
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
    </section>
  );
}