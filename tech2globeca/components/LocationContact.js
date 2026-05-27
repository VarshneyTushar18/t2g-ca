"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";

export default function LocationContact({ mapSrc, source = "Location page contact form" }) {
  return (
    <section className="bg-[#1c1c1c] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        {/* Visit Us Section (Map) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 uppercase tracking-wide">
            Visit Us
          </h2>
          <div className="w-full h-[350px] md:h-[450px] bg-gray-200">
            {mapSrc ? (
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                Map location goes here
              </div>
            )}
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 uppercase tracking-wide">
            Send a Message
          </h2>
          <ContactForm variant="location" source={source} />
        </div>

      </div>
    </section>
  );
}
