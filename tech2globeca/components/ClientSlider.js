"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';



export default function ClientSlider({ clients = [], title = "", subtitle = "" }) {
  return (
    <section className="py-12 bg-gray-50 dark:bg-zinc-900 border-y border-gray-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4"></div>
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="relative">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-gray-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-gray-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none"></div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={3000} // Continuous speed
            autoplay={{
              delay: 0, // No delay for smooth continuous scroll
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="client-swiper !ease-linear"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id} className="flex items-center justify-center">
                <div className="w-50 h-30 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110 cursor-pointer">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter opacity-100  transition-all duration-300 "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
