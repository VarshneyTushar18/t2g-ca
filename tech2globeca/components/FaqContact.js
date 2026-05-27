"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export default function FaqContact({ faqs = [], source = "FAQ contact form" }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <section className="bg-[#1c1c1c] py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-8">FAQ&apos;s</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white">
                <button
                  className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none transition-colors hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-[15px] font-normal text-gray-800">{faq.question}</span>
                  <span className="text-gray-800 text-sm">
                    {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div
                    className="px-5 pb-4 text-[14px] text-gray-600 border-t border-gray-100 pt-3"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-3xl font-semibold text-white mb-8">Contact Us</h2>
          <ContactForm variant="faq" showCountry source={source} />
        </div>
      </div>
    </section>
  );
}
