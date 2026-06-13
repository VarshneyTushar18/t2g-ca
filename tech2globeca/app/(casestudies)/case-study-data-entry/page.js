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
  FaUsers,
  FaFile,
  FaSuitcase,
  FaUser,
  FaComments,
  FaCheckCircle,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

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
    icon: <FaUser size={28} />,
    title: "Training",
    desc: "Solicited training from the hungry house for tech2globe team to ensure the menu entry would be completed properly & backlog should be finished in minimum time interval.",
  },
  {
    icon: <FaShield size={28} />,
    title: "Safety & Data Security",
    desc: "Optimal performance & minimal risk were covered to measure safety of large data.Used static IP’s, secure email server, timely backup with Tech2globe internal database.",
  },
  {
    icon: <FaLink size={28} />,
    title: "Samples Shared",
    desc: "Several samples were shared with the hungry house team before we started on a real time project.These samples were approved and the project started in full.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Team Strength",
    desc: "Several samples were shared with the hungry house team before we started on a real time project.These samples were approved and the project started in full.",
  },
  {
    icon: <FaFile size={28} />,
    title: "Reporting",
    desc: "Several samples were shared with the hungry house team before we started on a real time project.These samples were approved and the project started in full.",
  },
  {
    icon: <FaSuitcase size={28} />,
    title: "Backup and Work Overload",
    desc: "Several samples were shared with the hungry house team before we started on a real time project.These samples were approved and the project started in full.",
  },
  {
    icon: <FaComments size={28} />,
    title: "Feedback",
    desc: "Several samples were shared with the hungry house team before we started on a real time project.These samples were approved and the project started in full.",
  },
  {
    icon: <FaCheckCircle size={28} />,
    title: "Quality",
    desc: "As their major concern was the quality, so we planned accordingly & give them a separate plan.",
  },
];

const executionPoints = [
  "The Tech2Globe team has managed to finish the backlog in just 75 days with the positive feedback of the client.",
  "The Hungry House team gained a fair amount of confidence for the quality of the work and it resulted in their in-house team management, they managed to move their menu typing team into customer care management which results in better business outcomes and quick customer’s queries handling .",
  "With the quality of the work promised and delivered to the Hungry House team, subsequently they handed over their restaurant's logo creation work to our graphic team.",
  "Delivery Hero is now able to save up to 80% of the cost which they were incurring in the menu entry and used that investment to grab more business. They put more resources in the sales team to grow the business which is their core.",
];

/* ─── Component ────────────────────────────────────── */
export default function CaseStudyDataEntry() {

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden font-[Montserrat,sans-serif]">
      <Header />

      <PageHeader
        title="Case Study Data Entry"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "#" },
          { label: "Data Entry", href: "/case-study-data-entry" },
        ]}
      />

      {/* ── Hero Result Card ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Delivery Hero
            </h2>
            <div className="w-20 h-[3px] bg-[#c7010c] mx-auto" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Slider */}
            <div className="relative w-full lg:w-[55%]  overflow-hidden bg-gray-100 min-h-[280px] sm:min-h-[340px]">
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
                Project Overview
              </h3>
              <div className="grid grid-cols-1 gap-5">
                <div

                  className="group items-center gap-4 transition-all duration-300 bg-white"
                >

                  <div>
                    <p className="leading-relaxed text-base">
                      A leading UK based restaurant brand with over 1000+ employees with 70 nationalities across 5 continents work for delivery hero. The largest food network in the world with more than 3,00,000 participating restaurants.<br />
                      They wanted to outsource their restaurant menu data entry work for one of their major chain which is “Hungry House” and wanted a better partner who can give them prominent results and provide maximum solutions related to their menu entry day to day operations.
                    </p>

                  </div>
                </div>

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
              "When we decided to relocate our data entry service outside of Germany, we wanted to find the best partner in terms of ongoing communication and ethics. It became quickly evident that Tech2Globe would be our partner of choice, what we didn't expect was to receive such a high quality of service day after day. Thanks to Tech2Globe we have reduced our data entry service levels by 10 times and freed up inhouse resources to handle real-time customer’s queries."
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


      {/* ── The Strategy ─────────────────────────────── */}
      <section className="py-16 bg-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              The Strategy
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-5" />
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Aquatech Basement Waterproofing teamed up with Tech2Globe Canada to assist create a successful marketing plan because they wanted to boost their brand awareness and quality leads online. Three strategies are selected by Aquatech Basement Waterproofing and Tech2Globe to help boost online traffic:
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
          The Results
        </h2>
        <div className="w-16 h-[3px] bg-[#c7010c] mb-6 mx-auto" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left image */}
            <div className="w-full lg:w-[48%]  overflow-hidden shadow-xl">
              <img
                src="/images/case-study/excution-image2.webp"
                alt="SEO Execution Strategy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-[52%]">

              <p className="text-gray-600 mb-6 leading-relaxed">
                With the extra time spent to ensure training and accurate engagement with the team, the following results were made possible for the project
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
