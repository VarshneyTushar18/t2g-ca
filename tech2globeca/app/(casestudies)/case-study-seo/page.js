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
    value: "+21.23%",
    label: "Site Visits",
    color: "#c7010c",
    icon: <FiTrendingUp size={22} />,
  },
  {
    value: "+133.10%",
    label: "Organic Traffic",
    color: "#c7010c",
    icon: <FiUsers size={22} />,
  },
  {
    value: "+500.00%",
    label: "Online Leads",
    color: "#c7010c",
    icon: <FiBarChart2 size={22} />,
  },
  {
    value: "+400.92%",
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
  "Custom blogging",
  "Evaluated and optimized all calls to action",
  "Consistent local citation building",
  "Managing local SEO",
  "Auto-published syndicated blogs to social media channels",
  "On-page SEO: Optimized title tags, meta descriptions, header tags, internal linking and image alt tags",
  "Off-page SEO: Quality backlinks, guest post articles, native mentions and niche directory listings",
  "Ongoing monitoring and repairing technical issues",
];

/* ─── Component ────────────────────────────────────── */
export default function CaseStudySEO() {

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden font-[Montserrat,sans-serif]">
      <Header />

      <PageHeader
        title="Case Study SEO"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "#" },
          { label: "SEO", href: "/case-study-seo" },
        ]}
      />

      {/* ── Hero Result Card ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Aquatech Basement Waterproofing
            </h2>
            <div className="w-20 h-[3px] bg-[#c7010c] mx-auto" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Slider */}
            <div className="relative w-full lg:w-[55%]  overflow-hidden shadow-xl bg-gray-100 min-h-[280px] sm:min-h-[340px]">
              <img
                src="/images/case-study/seo-case-study.webp"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              "Without a doubt, the top search result for the best service provider in our service area and Basement Waterproofing will be Aquatech Basement Waterproofing. Canada's tech2globe is pursuing it. That invariably brings in revenue for us. Tech2globe has gone above and beyond, allowing me to focus on other business expansion areas. Tech2globe is aware of the challenging specifications for what we're attempting."
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
              src="/images/case-study/seo-case-study-large.webp"
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

          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-4">
              Our expert Basement Waterproofing contractors are friendly and knowledgeable professionals. They have all the correct answers to every Basement Waterproofing need you may have. Therefore, we are happy to give advice and provide free waterproofing consultleaders in the wet basement, leaky basement and basement waterproofing industry, we understand how our services work. Our goal is to protect your home’s basement while providing you with the best quality services.
            </p>
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

      {/* ── The Execution ────────────────────────────── */}
      <section className="py-16 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
          The Execution
        </h2>
        <div className="w-16 h-[3px] bg-[#c7010c] mb-6 mx-auto" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left image */}
            <div className="w-full lg:w-[48%]  overflow-hidden shadow-xl">
              <img
                src="/images/case-study/excution-image1.webp"
                alt="SEO Execution Strategy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-[52%]">

              <p className="text-gray-600 mb-6 leading-relaxed">
                Unique digital experiences
              </p>
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


      <CTA />
      <Footer />
    </main>
  );
}
