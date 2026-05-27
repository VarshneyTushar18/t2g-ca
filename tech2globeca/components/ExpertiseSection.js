"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ExpertiseSection = ({ data }) => {
  return (
    <section className="py-[3.2rem] bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
            We Offer Multifold Expertise
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
          <p className="text-[#444444] max-w-4xl mx-auto leading-[1.8] text-[15px]">
            Though there may be several approaches. Some believe that it can be done through digital marketing,
            while some say that social media marketing is the way to go.
            In any case, there are numerous ways to accomplish this goal. We provide a variety of services to assist you achieve your business objectives.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet expertise-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active expertise-bullet-active'
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="expertise-swiper pb-16"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-2 lg:px-8">
                {/* Left side Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full max-w-[500px] h-auto object-contain" />
                  ) : (
                    <div className="w-full max-w-[500px] aspect-[4/3] bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-gray-400 font-medium">Add Image Here (e.g. /images/ecommerce.png)</span>
                    </div>
                  )}
                </div>

                {/* Right side Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl md:text-[1.75rem] font-semibold text-[#c7010c] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#444444] mb-3 leading-[1.8] text-[15px]">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-10 border-t border-gray-100 pt-6">
                    {item.list.map((listItem, index) => (
                      <li key={index} className="flex items-start pb-2 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex-shrink-0 mt-1.5 mr-4 text-[#a0a0a0]">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
                          </svg>
                        </div>
                        <span className="text-[#444444] text-[15px] leading-relaxed">{listItem}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={item.link}
                    className="inline-block bg-[#222222] text-white px-8 py-3.5 text-sm font-semibold tracking-wider hover:bg-[#c7010c] transition-colors duration-300"
                  >
                    VIEW MORE INFO
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExpertiseSection;
