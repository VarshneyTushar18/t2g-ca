import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import ClientSlider from "@/components/ClientSlider";
import AvailableLocations from "@/components/AvailableLocations";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import {
  FiMonitor,
  FiTool,
  FiMessageCircle,
  FiSearch,
  FiShare2,
  FiFileText,
  FiMousePointer,
  FiLayout,
  FiMail,
  FiCheckCircle,
  FiThumbsUp,
  FiTarget,
  FiEdit3,
  FiUsers,
  FiGlobe,
  FiLink,
  FiMapPin,
  FiStar,
  FiShield,
  FiActivity,
  FiShoppingCart,
  FiCoffee,
  FiHome,
  FiBarChart2,
  FiDollarSign
} from "react-icons/fi";

import { FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";


export const metadata = {
  title: "The Best Toronto SEO Company | Free Audit & Plan Now",

  description:
    "The Best Toronto SEO Company. Results-driven ROI marketing, complimentary audits, customized plans, and 8,000+ successful projects.",

  keywords: [
    "Best Toronto SEO Company",
    "Best SEO Agency Toronto",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/seo-agency-toronto",
  },

  openGraph: {
    title: "The Best Toronto SEO Company | Free Audit & Plan Now",

    description:
      "Results-driven ROI marketing, complimentary audits, customized plans, and 8,000+ successful projects.",

    url: "https://tech2globe.ca/seo-agency-toronto",

    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },
};

const clientsData = [
  { id: 1, name: 'Abrams', logo: 'images/clients/abrams.png' },
  { id: 2, name: 'Absolute Toner', logo: 'images/clients/absolute-toner-logo.png' },
  { id: 3, name: 'Aniss', logo: 'images/clients/aniss-logo.png' },
  { id: 4, name: 'Aon Hewitt', logo: 'images/clients/aonHewit.png' },
  { id: 5, name: 'Aquatech', logo: 'images/clients/aquatech.png' },
  { id: 6, name: 'Creative Arcades', logo: 'images/clients/creative-arcades.png' },
  { id: 7, name: 'Follett', logo: 'images/clients/follett.png' },
  { id: 8, name: 'GBS', logo: 'images/clients/gbs-logo.png' },
  { id: 9, name: 'HP', logo: 'images/clients/hp.png' },
  { id: 10, name: 'Wellist', logo: 'images/clients/wellist.png' },
];


const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.png' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.png' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.png' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.png' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.png' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.png' },
];


const portfolioItems = [
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
];

const packagesData = [
  {
    id: 1,
    title: "LOCAL SEO PACKAGES",
    icon: <FaHandshake className="text-white text-4xl" />,
    link: "#"
  },
  {
    id: 2,
    title: "BUSINESS SERVICE SEO PACKAGES",
    icon: <FaSearch className="text-white text-4xl" />,
    link: "#"
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MARKETING PACKAGES",
    icon: <FaShareAlt className="text-white text-4xl" />,
    link: "#"
  },
  {
    id: 4,
    title: "PPC PACKAGES",
    icon: <FiTarget className="text-white text-4xl" />,
    link: "#"
  }
];

const faqsData = [
  {
    question: "Should I invest in seo services in Canada if I run a small-scale business?",
    answer: "Being online has become essential in a world especially today where more than 80% of consumers look for goods or services online. If your company ranks on the top page, potential customers will trust you more and be more inclined to purchase from you. Our goal as the best SEO company Toronto is to assist you in obtaining the top search engine positions for your intended keywords."
  },
  {
    question: "What makes us different from rest of the options available in the market?",
    answer: "An enterprise typically has more substantial needs than other smaller organizations. They also have significantly larger budgets because they must coordinate various goals, including traffic, conversions, online reputation, discoverability, etc. Tech2Globe differs from other types of SEO partners. As a competent professional seo services provider, we prioritize these issues, strike a balance between them, and focus on broad strategies and specific tactics."
  },
  {
    question: "Why should we only work with SEO professionals but not our own?",
    answer: "Marketers require professional seo services specialists to deal with the challenges of huge businesses' marketing requirements. SEO is a dynamic field, and adaptive organizations will surpass their competition. Tech2Globe considers both the overall situation and the specifics. Although the objectives of the many firm divisions may conflict, marketers need a comprehensive strategy."
  },
  {
    question: "Will my website be in danger?",
    answer: "Not at all! We neither practice gray hat SEO nor black hat SEO; all of our SEO strategies fall within Google's guidelines. We never support the creation of dodgy links to your website or best link building service that undermine our SEO efforts. We always try avoiding making use of black methods as we think that one can only thrive if it is strict to principles."
  },
  {
    question: "I am facing critical issues with Local SEO. Will you help me with this?",
    answer: "Definitely! Our speciality is local SEO, and we have assisted numerous companies in rising to the top of local search results. We welcome the opportunity to explore your local SEO requirements fully, and we are more than pleased to assist. For further in-depth knowledge, you can contact us by +1-516-858-5840 or mail us at Info@tech2globe.com by anytime, and we'll try reaching you as soon as possible."
  }
];

const servicesData = [
  {
    id: 1,
    title: "SEO Consulting",
    description:
      "Our consulting service for seo services in Canada provides all the information you require to understand better where you are in the search results, where you can improve, and how to get there. Every website is unique; thus, we do not plan similar solutions. Our team of SEO strategists and SEO experts will thoroughly examine your website to identify potential areas for improvement and search engine optimization chances.",
    icon: <FiSearch size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Keyword Research",
    description:
      "Our off page keyword research services enable your team to produce pertinent content around those topics, increase your chances of appearing in search results by strategically using keywords, and harness the power of SEO to learn what material your audience is actively seeking out. Finding keywords for products and services is the main goal of our keyword research method.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Link Building",
    description:
      "Send emails to site owners, audit your backlinks, look for negative signals, and eliminate bad links that could result in a search engine penalty. Gather potential linkers, contact them using a built-in interface in semi-automatic mode, and keep track of the progress of your requests. Up to five domains' seo link building profiles can be compared to see where the similarities and differences lie.",
    icon: <FiLink size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Google Search Console",
    description:
      "The most popular platform utilized by many organizations to analyze the behaviour of their websites is Google Analytics. You can find and use the most important data for you and your company with the help of advanced Google analytics. You can evaluate website traffic, mobile app traffic, improved eCommerce, goal conversions, cross-channel attribution reporting, bespoke dashboards, dynamic retargeting, and stakeholder-specific dashboard analytics with the aid of Tech2Globe seo agency Toronto Google Analytics Services.",
    icon: <FiBarChart2 size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Content Marketing",
    description:
      "With a solid content strategy, we assist you with affordable seo services. Our strategists use data and thorough research to ensure that your content marketing strategy is effective and successful. Following that, we ensure that content marketing drives traffic, leads, and organic growth for your organization using our tried-and-true implementation approach. We bring 14 years of experience in content production to the table. Our writers and editors have produced content for a wide range of businesses.",
    icon: <FiFileText size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Paid Search",
    description:
      "Since we started, we have been assisting brands worldwide with our cutting-edge PPC advertising solutions. We are one of the few companies with affordable seo services in Canada to have begun developing high-tech digital tools to understand a search engine's intricacy. You can work and collaborate with us if you are also seeking the same services, as we have great experience working with various highly prestigious brands.",
    icon: <FiDollarSign size={32} color="#ffffff" />
  }
];

export default function SeoAgencyToronto() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Tech2Globe Canada The Best SEO Agency Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "SEO Agency Toronto", href: "/seo-agency-toronto" }
        ]}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best SEO Agency In Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>


              <p className="text-gray-600 mb-4 leading-relaxed">
                Empowering your business and accelerating your growth, this is exactly what we are capable of! Work with us; we are masters at delivering professional seo services and bringing organic traffic to your website. Your quest for finding the best SEO agency Toronto gets over here! We can be your next partner if you want to rank your website on top results of multiple channels or search engines and make it worthy of being ahead of your competitors. Tech2Globe is a committed provider of seo services in Canada with more than 14 years of experience in the field of digital marketing, with branches in SEO, PPC, SMM and more. We offer the greatest seo services in Canada that are lawful, ethical, and reasonably priced. With keyword portfolios that receive thousands and lakhs of visitors daily, Tech2Globe seo agency Toronto has a track record of managing Enterprise SEO for clients. We adopt a metrics-based, content-based strategy that enables us to identify your target audience, evaluate your competition, and provide the best content. Our expert SEO staff has years of expertise in understanding what makes SEO tick and is exceptional at research, and we've been Best SEO company Toronto for a while and care about your success. We are a full-service firm that is quick, a pioneer in our field, and always up to date. We make every effort to assist your internal departments in reducing conflict and embracing change. Making conversions are only possible by knowing the current state of your website and the sector you work in. A marathon, not a sprint, is what SEO is. Additionally, some markets and keywords take longer to rank than others. But with perseverance, any mountain can be climbed. Usually, it takes between six months and a year to see noticeable benefits for any best seo agency in Canada.
              </p>
            </div>
          </div>
        </div>
      </section>


      <AvailableLocations title="Our Digital Marketing Location" subtitle="" />

      <ClientSlider title="Whom We’ve Partnered With" clients={clientsData} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              What Are We Known For?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>
              Today, SEO optimization is crucial for any company hoping to prosper online. Your internet business will expand if you fully benefit from our SEO tactics and will gain more visibility in Google search results. In addition, our committed team will deliver weekly and monthly data on your page's positions in relation to the used keywords, seo link building, and indexed pages.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#f9f9f9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/seo-agency-toronto-image.webp"
                alt="Why Choose Us"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Why Would You Choose Tech2Globe Canada?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our search engine optimization service gives your company a chance to rank #1 every time someone searches for your goods or services, permanently improving your sales. Additionally, as the best SEO company Toronto, our staff goes above and beyond to make sure that your material is displayed in a way that allows visitors to quickly find the information they require, creating a positive and helpful user experience. Before gaining customers, it's critical to establish trust with your audience. If you want to draw attention, you must have a functioning website with a list of all your features, even if you have an offline presence. That's where SEO is useful. We connect the route to more leads and recurring sales for you by offering seo services in Canada.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col  text-left">
                <FiCheckCircle size={48} className="text-[#c7010c] mb-4" />
                <h4 className="font-semibold text-lg text-gray-800">Served over clients</h4>
                <h2>5500+</h2>
              </div>
              <div className="flex flex-col  text-left">
                <FiThumbsUp size={48} className="text-[#c7010c] mb-4" />
                <h4 className="font-semibold text-lg text-gray-800">Client Retention</h4>
                <h2 >95%</h2>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Industries />

      <section className="py-[3.2rem] bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              See Our Packages
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-xl duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-full py-12 px-8 flex flex-col items-center bg-[#f9f9f9]">
                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 relative">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#c7010c] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 duration-300">
                      {pkg.icon}
                    </div>
                  </div>
                  <h3 className="text-[1.1rem] font-semibold text-[#222222] uppercase tracking-wide leading-snug">
                    {pkg.title}
                  </h3>
                </div>

                {/* Button Container */}
                <div className="w-full py-6 px-8 border-t border-gray-100">
                  <a
                    href={pkg.link}
                    className="inline-block bg-[#c7010c] text-white text-sm font-semibold px-8 py-3 transition-colors hover:bg-black uppercase tracking-wider"
                  >
                    Get A Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqContact faqs={faqsData} />

      <Footer />
    </main>
  );
}
