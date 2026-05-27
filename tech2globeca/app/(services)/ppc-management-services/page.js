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
  FiDollarSign,
  FiPhone
} from "react-icons/fi";

import { FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";


export const metadata = {
  title:
    "Pay Per Click (PPC) Advertising Company in Toronto | Request Your Free PPC Audit",

  description:
    "Pay Per Click (PPC) Advertising Company in Toronto. Results-driven ROI marketing, complimentary audits, customized plans, and 9,000+ successful projects.",

  keywords: ["PPC Management Services"],

  alternates: {
    canonical: "https://tech2globe.ca/ppc-management-services",
  },

  openGraph: {
    title:
      "Pay Per Click (PPC) Advertising Company in Toronto | Request Your Free PPC Audit",

    description:
      "Results-driven ROI marketing, complimentary audits, customized plans, and 9,000+ successful projects.",

    url: "https://tech2globe.ca/ppc-management-services",

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

const slides = [
  {
    id: 1,
    title: "Paid Search Advertisements",
    description: "Paid search ads are the most typical and the best PPC services. When experimenting with PPC advertising, this is the ad type that most advertisers begin with. They then choose the highest price they are ready to pay if their ad is clicked on and get listed on Google Ads for the ad copy they want to appear for when a user searches for their keywords",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  },
  {
    id: 2,
    title: "Retargeting Ads",
    description: "A remarketing campaign displays advertisements to users who have previously visited your website. Remarketing is mainly the best PPC service because the user has already expressed interest in your company. It is frequently used to re-engage clients on the verge of leaving the sales to funnel or upsell or cross-sell more products to your current customers. When running a remarketing campaign with Google Adverts, picture ads are frequently displayed to visitors as they explore Google Display Network websites. To remarket to users, we here employ image or video advertising.",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  }
];

const faqsData = [
  {
    question: "Why aren't my PPC advertisements at the top of the SERP?",
    answer:
      "As the top PPC agency in Toronto, we believe that if your advertising appears outside the top, they are ranked lower. The two critical determinants of ad ranks are the quality score and CPC. Your low ad position may be due to one of the two explanations. Increase your keyword bids if you want your advertising at the top. You must increase your click-through rate through ad copy testing if you receive low-quality scores."
  },
  {
    question: "What causes my CPC to rise?",
    answer:
      "If you're wondering why your CPC is rising even after implementing best practices for PPC advertising management services, there are two potential explanations. Either there is a lot of competition, or the quality is poor. The CPC algorithm in Google Ads uses an auction system to determine how much you must spend. The bids will rise in tandem with the number of participants in the auction. A lower quality score, on the other hand, can also sharply raise click costs."
  },
  {
    question: "How long-term PPC benefits my business?",
    answer:
      "Hiring pay per click marketing agency gives your company many benefits and fosters expansion. It produces quick and quantifiable outcomes. Small businesses looking to increase online visibility can rely on a seasoned PPC service provider to acquire the necessary exposure. Additionally, it is the quickest approach to launching advertising campaigns and getting results. You can monitor your campaign's success and know where every dollar is going. Costs, clicks, visits, profit or loss, and numerous other significant factors are all included in the thorough report. Your company can experience well-deserved growth with improved visibility, engagement, recognition, and ROI."
  },
  {
    question: "Where on search result pages does my PPC advertising show up?",
    answer:
      "With Google Advertisements, you may display your PPC ads on Google's SERP and on partner websites that participate in Google Ads via the AdSense programme. Additionally, users of Bing Advertisements can allow advertisers to display their PPC ads directly next to search results on Bing's SERP, Yahoo, MSN, and other Microsoft and Yahoo Internet domains. As the best pay per click marketing agency, we can help you with this."
  },
  {
    question: "How do I manage the spending for my PPC campaigns?",
    answer:
      "Based on your price, targeting, and ads' potential, you must compute your PPC expenditures. Your bid is the money you are prepared to shell out in exchange for a user clicking on your advertisement. In an ad auction where the highest bidder wins, you can pay less than your bid amount but never more. For instance, the cost of bidding on a highly competitive keyword increases due to the increased cost-per-click (CPC). You establish your PPC advertising management services budget by comprehending and considering each element."
  }
];

const servicesData = [
  {
    id: 1,
    title: "PPC Marketing",
    description:
      "There are numerous moving components when it comes to PPC services in Canada. Email marketing, social media marketing, and search engine optimization are all its crucial puzzle parts. However, if you're not using pay-per-click (PPC) advertising, you're losing out on a potent tool that may help your company produce leads and revenue.",
    icon: <FiSearch size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Conversion Tracking",
    description:
      "We can assist if you're ready to use PPC to build your company. Contact us right now, and we'll demonstrate how our PPC services may assist you in achieving your objectives. Starting with keyword analysis and research, we put all of our efforts into identifying pertinent keywords that will effectively direct visitors to your website",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Cost Management",
    description:
      "Together with the design team, we develop a solid initial cost plan that all parties acknowledge as a realistic estimate for meeting the client's objectives. Cost analyses for each design option so client can make selections with full knowledge. As a top PPC agency in Toronto, we collaborate closely with the project team.",
    icon: <FiLink size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Google Shopping Ads",
    description:
      "PPC agency in Toronto, Tech2Globe, has more than 14 years of experience. Our team of over hundreds of PPC specialists will provide your Google Shopping feed efforts with the best results. As a certified Google Premier Partner, Tech2Globe has proven its team's proficiency with Google Ads, met the required ad spend, and grown our agency's clientele and revenue from clients.",
    icon: <FiBarChart2 size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Amazon PPC Ads",
    description:
      "In addition to assisting you with your PPC services in Canada, we also support clients with outside options like Amazon product display ads. We frequently collaborate with e-commerce clients to create advertising campaigns using Google Ads, Bing or YouTube, as well as through social media platforms as part of our Amazon PPC agency solutions",
    icon: <FiFileText size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Remarketing Ads",
    description:
      "A display image used in the best PPC services is a visual reminder of your brand to users. These advertisements are directed towards users who have already engaged with your brand by going to your website or clicking a link in a current digital advertisement.",
    icon: <FiDollarSign size={32} color="#ffffff" />
  }
];

export default function PpcManagementServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Best PPC Management Services in Canada"
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
                Best PPC Management Services In Canada
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>


              <p className="text-gray-600 mb-3 leading-relaxed">
                Get immediate benefits for your company with our PPC management services in digital marketing,including a significant increase in traffic, increased leads, and more conversions. Using PPC effectively, we will give your company a measure Regardless able return on investment and help you reach your long-term business objectives.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Tech2Globe, the most professional PPC management agency in Digital Marketing, works to help companies reach their potential markets and expand their brands. Each business model is unique in its own way, with its own set of advantages, objectives and aspirations, and being a top PPC agency, we know how to deliver. As a result, we adapt digital marketing strategies and PPC strategy to meet your company's specific needs and offer customised PPC services in Toronto rather than using a template approach.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Regardless of how new you are to PPC management, everything you produce and optimise should take shape because you've put a lot of time into it. We only focus on the KPIs your company knows and cares about. We spare you the technical jargon and report only on the KPIs that matter to your company. We are happy to talk, you can contact us anytime. Tech2Globe pay per click marketing agency in Toronto; specifically, our content marketing, conversion rate optimization (CRO), and search engine optimization teams are well professionals to give incredible support for your PPC campaigns (SEO).
              </p>
            </div>
          </div>
        </div>
      </section>


      <AvailableLocations title="Our Digital Marketing Location" subtitle="" />

      <ClientSlider title="Meet Our Clients" clients={clientsData} />




      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Best PPC Services Tech2Globe Canada
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>
              You should start immediately if you aren't currently looking out for the PPC management services
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <ConsultancySlider 
        title="Why Would You Seek PPC Management Services?" 
        subtitle="Without leveraging expert PPC management services, you might miss key opportunities to optimize your ad spend, increase traffic, and maximize ROI."
        slides={slides} 
        imageSrc="/images/services/parallax-bg8.jpg"
        imageAlt="PPC Management Services"
      />

      <section className="bg-[#c7010c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-white mb-8">
            <div className="flex items-center gap-2">
              <FiPhone className="text-xl" />
              <span className="text-sm md:text-base font-medium">Call us Today for a Free Consultation:</span>
              <a href="tel:+17783829628" className="text-sm md:text-base font-semibold hover:underline">
                +1-778-382-9628
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-xl" />
              <a href="mailto:info@tech2globe.ca" className="text-sm md:text-base font-semibold hover:underline">
                info@tech2globe.ca
              </a>
            </div>
          </div>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-3 font-semibold uppercase tracking-widest hover:bg-white hover:text-[#c7010c] transition-all duration-300"
          >
            Let&apos;s Talk
            <FaComments className="text-xl" />
          </a>
        </div>
      </section>

      <Industries />

      <FaqContact faqs={faqsData} />

      <Footer />
    </main>
  );
}
