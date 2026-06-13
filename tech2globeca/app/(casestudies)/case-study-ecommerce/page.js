"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { useState } from "react";
import {
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiSearch,
  FiEdit3,
  FiCheckCircle,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaQuoteLeft,
  FaStar,
  FaSearch,
  FaPen,
  FaLink,
} from "react-icons/fa";

/* ─── Case study data ─────────────────────────────── */

const results = [
  {
    value: "+24.62%",
    label: "Site Visitor",
    color: "#c7010c",
    icon: <FiTrendingUp size={22} />,
  },
  {
    value: "+111.40%",
    label: "Organic Traffic",
    color: "#c7010c",
    icon: <FiUsers size={22} />,
  },
  {
    value: "+£2,396,049.21",
    label: "Online Sales",
    color: "#c7010c",
    icon: <FiBarChart2 size={22} />,
  },
  {
    value: "+500.92%",
    label: "Conversions Rate",
    color: "#c7010c",
    icon: <FiSearch size={22} />,
  },
];

const strategyPillars = [
  {
    icon: <FaSearch size={28} />,
    title: "Custom Research & HTML Deals",
    desc: "",
  },
  {
    icon: <FaPen size={28} />,
    title: "Custom Content Writing",
    desc: "",
  },
  {
    icon: <FaLink size={28} />,
    title: "Search Engine Optimization",
    desc: "",
  },
];

const executionPoints = [
  "Cataloging",
  "Sales boost",
  "Traffic & ranking",
  "Visibility",
  "Brand awareness",
  "Marketplace auth approvals",
  "Meeting client expectations",
  "Utilizing best practice and strategies",
  "Best analysis and mapping",
];

/* ─── Component ────────────────────────────────────── */
export default function CaseStudyEcommerce() {

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden font-[Montserrat,sans-serif]">
      <Header />

      <PageHeader
        title="Case Study Ecommerce"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "#" },
          { label: "Ecommerce", href: "/case-study-ecommerce" },
        ]}
      />

      {/* ── Hero Result Card ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Online Business Growth
            </h2>
            <div className="w-20 h-[3px] bg-[#c7010c] mx-auto" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Slider */}
            <div className="relative w-full lg:w-[55%]  overflow-hidden shadow-xl bg-gray-100 min-h-[280px] sm:min-h-[340px]">
              <img
                src="/images/case-study/ecomm-case-study-top.jpg"
                alt="Aquatech Basement Waterproofing"
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{ minHeight: 280 }}
              />

            </div>

            {/* Results Panel */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                The Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
                {results.map((r, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-4 p-5  border border-gray-200 hover:border-[#c7010c] hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c7010c]/10 group-hover:bg-[#c7010c] text-[#c7010c] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      {r.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-[#c7010c] leading-none">
                        {r.value}
                      </p>
                      <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">
                        {r.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── From the Client ──────────────────────────── */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              From the Client
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto bg-white  shadow-lg p-8 sm:p-10 relative">
            <FaQuoteLeft
              className="absolute top-6 left-6 text-[#c7010c]/15"
              size={48}
            />
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg italic relative z-10">
              "This client is a well-established online retailer who sells a broad selection of items ranging from electrical equipment to gardening tools, as well as other categories such as Home, Furniture, and DIY Decorative Items, and many more. They also have a seller account on Amazon, eBay, Onbuy, Walmart, and other ecommerce marketplaces, as well as a Shopify website."
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-full bg-[#c7010c] flex items-center justify-center text-white font-bold text-lg">
                JB
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  — Jay Benjamin
                </p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={13} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Overview ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Project Overview
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto" />
            <p className="mt-4">The results of these efforts were very impressive. These numbers reflect a comparison from August 12 – June 11, 2021 vs. the same timeframe in 2022:</p>
          </div>

          {/* Analytics image */}
          <div className=" overflow-hidden mb-10">
            <img
              src="/images/case-study/ecomm-case-study.jpg"
              alt="Project Analytics Overview"
              className="w-full"
            />
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {results.map((r, i) => (
              <div
                key={i}
                className="text-center py-6 px-4  bg-gray-50 border border-gray-100"
              >
                <p className="text-2xl sm:text-3xl font-semibold text-[#c7010c]">
                  {r.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-wider">
                  {r.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── The Strategy ─────────────────────────────── */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              The Strategy
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-5" />
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Aquatech Basement Waterproofing provides expert services, and we
              built a strategy as methodical as their work — anchoring on
              authority-building actions they needed most to boost rankings and
              generate qualified traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {strategyPillars.map((pillar, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center bg-[#252525]  p-8 border border-[#333] hover:border-[#c7010c] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#c7010c]/15 group-hover:bg-[#c7010c] text-[#c7010c] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 ">
            Client expectations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">They intended to attract a larger audience and sell their products on online ecommerce platforms. They needed a single solution to assist them expand their existing and new marketing channels. They do, however, desire a marketing automation system that offers outstanding customer support and is simple to use.<br /><br />
            Client approached us to have his account managed professionally, and he was looking for an experienced Person/SPN/Organization who could understand his online eCommerce business and assist him with key factors such as Product Listings on Different Channels, Optimization, Promotion, Sponsored Ads, Sales Boost, and can operate "Multi Fulfillment Channel (Linnwork)."<br /><br />
            They have a big plan to launch new items across all marketplaces, and they wanted their all-products details content/contribution to be as per marketplace guidelines, matching all attributes to target the right audience. They set an expectation to keep the Product ID/the SKU's same across all marketplaces, and they wanted us to operate a Linnwork tool to manage it. Client was seeking a service provider that could assist them raise brand recognition and work with an expert team to drive sales. He believes in his goal of becoming a best seller on Amazon and other marketplaces, because he did not limit his capacity to grow inventory, they anticipated buyers to have a shop that could meet all their purchasing needs, potentially with several buying experiences.</p>
        </div>
      </section>

      {/* ── The Execution ────────────────────────────── */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left image */}
            <div className="w-full lg:w-[48%]  overflow-hidden">
              <img
                src="/images/case-study/excution-image3.webp"
                alt="SEO Execution Strategy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-[52%]">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                The Execution
              </h2>
              <div className="w-16 h-[3px] bg-[#c7010c] mb-6" />

              <ul className="flex flex-col gap-4">
                {executionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheckCircle
                      className="flex-shrink-0 mt-0.5 text-[#c7010c]"
                      size={18}
                    />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 ">
            Result
          </h2>
          <p className="text-sm sm:text-base">Hard work always pays, and our team's consistent, thorough, and well-coordinated efforts worked splendidly in this situation. Our campaign aims exceeded the client's expectations, as overall spends-to-sale decreased dramatically while we maintained our sales targets successfully. Built up the goodwill on the online marketplace within the targeted date and client appreciated our efforts we put to deliver this job on time with 100% accuracy. Below are the examples of the Sales numbers achieved</p><br />

          <p><strong>Note:</strong> We are not disclosing the domain name of the project as per the client instruction.</p>
        </div>
      </section>



      <CTA />
      <Footer />
    </main >
  );
}
