import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import {
  FiTool,
  FiLayout,
  FiPenTool,
  FiFileText,
  FiThumbsUp,
  FiUsers,
  FiGlobe,
  FiLink,
  FiMapPin,
  FiStar,
  FiShield,
  FiActivity,
  FiCoffee,
  FiHome,
  FiBarChart2,
  FiDollarSign,
  FiPhone,
  FiDatabase,
  FiAward,
  FiTrendingUp,
  FiHeadphones,
  FiRefreshCw,
  FiEdit,
  FiLayers,
  FiBriefcase,
  FiEye,
  FiCode,
  FiSettings,
  FiSmartphone,
  FiShoppingCart,
  FiServer,
  FiMonitor,
  FiArrowUpRight,
  FiScissors,
  FiLock,
  FiShoppingBag,
  FiImage,
  FiRefreshCcw,
  FiTag,
  FiTarget,
  FiUserCheck,
  FiSearch,
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";


export const metadata = {
  title: "Best Amazon SEO Agency @Supercharge Your Amazon Listings",

  description:
    "Best Amazon SEO Agency to Boost Your Business Online. ✔ Proven SEO Strategies ✔Elevate Your Sales ✔11000+ Successful Projects ✔Contact Now",

  keywords: [
    "Amazon SEO services",
    "Best Amazon SEO Agency",
    "seo for amazon listings",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/amazon-seo-consultant",
  },

  openGraph: {
    title: "Best Amazon SEO Agency @Supercharge Your Amazon Listings",

    description:
      "Best Amazon SEO Agency to Boost Your Business Online. ✔ Proven SEO Strategies ✔Elevate Your Sales ✔11000+ Successful Projects ✔Contact Now",

    url: "https://tech2globe.ca/amazon-seo-consultant",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

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

const clientsData2 = [
  { id: 1, name: 'Goodfirms', logo: 'images/clients/t2g-goodfirms.png ' },
  { id: 2, name: 'Clutch', logo: 'images/clients/t2g-clutch.png' },
  { id: 3, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 4, name: 'Extract', logo: 'images/clients/extract.png' },
];


const faqsData = [
  {
    id: 1,
    question: "What Packaging And Preparation Standards Apply To FBA?",
    answer: `
      <ul>
        <li>
          <b>Comparing Amazon's Search Engine to Other Search Engines</b>
          <p style="font-size:14px;">
            Because it is built differently from search engines like Google or Bing, Amazon's search engine should be handled differently.
          </p>
        </li>

        <li>
          <b>It's Very Important To Target the Right Keywords</b>
          <p style="font-size:14px;">
            An Amazon SEO consultant's primary objective should be to convince Amazon that their product is the most relevant for a variety of pertinent search phrases since Amazon's product rankings are designed to give its customers the best options for purchases.
          </p>
        </li>

        <li>
          <b>A Picture Speaks a Thousand Words</b>
          <p style="font-size:14px;">
            Including quality photos in your listing can help you rank much better.
          </p>
        </li>

        <li>
          <b>Most Important are Sales and Positive Reviews</b>
          <p style="font-size:14px;">
            Sales are the most important aspect of ranking highly on Amazon.
          </p>
        </li>

        <li>
          <b>Amazon Excels At Spotting Malicious Tactics</b>
          <p style="font-size:14px;">
            You risk having your Amazon account suspended or terminated if you try to buy reviews or include false information on your listing.
          </p>
        </li>
      </ul>
    `,
  },

  {
    id: 2,
    question: "What do Amazon SEO services entail?",
    answer: `
      <p>
        The goal of SEO services for Amazon is to raise the position of your product listings in Amazon's organic search results. The typical list of SEO services for Amazon will also likely include inventory tracking, product title optimization, and keyword research.
      </p>
    `,
  },

  {
    id: 3,
    question: "Do Google SEO And Amazon SEO Work Together?",
    answer: `
      <p>
        You're not the only one who may wonder, "What is the difference between Google SEO and Amazon SEO?" In addition to helping Amazon product pages rank in search engines like Google, Amazon SEO services aim to increase organic visibility on the online retailer's product search engine.
      </p>

      <p>
        Traditional SEO primarily targets the top search engines like Google, Bing, and Yahoo, and there are quite different strategies to rank on each. Optimising your Amazon products for SEO won't help your D2C website rank higher on Google.
      </p>
    `,
  },
];


const servicesData = [
  {
    id: 1,
    title: "Account Audit",
    description:
      "Our Amazon SEO Consultant will thoroughly audit your current account. We'll identify the problems that need to be fixed, assess the effectiveness of your current listings and campaigns, and then offer a tactical execution strategy to boost your product sales.",
    icon: <FiSearch size={32} color="#ffffff" />,
  },

  {
    id: 2,
    title: "Competitor Research",
    description:
      "Our Amazon SEO company will employ top-notch tools as part of our thorough account audit to identify your top competitors and spot possibilities. Pricing, promotions, coupons, offensive targeting, and focusing on related product categories are specific strategies.",
    icon: <FiUsers size={32} color="#ffffff" />,
  },

  {
    id: 3,
    title: "A+ Enhanced Brand Content",
    description:
      "To help you set up your Amazon Brand Registry, we'll support you while speaking with the Amazon client team. Once everything is set up, you are qualified to receive A+ branded material. Your patented goods will also be safeguarded.",
    icon: <FiAward size={32} color="#ffffff" />,
  },

  {
    id: 4,
    title: "Seller Consulting",
    description:
      "Seller Interactive can make a difference in how your product ranks on Amazon. Our Amazon SEO consultants are the experts when it comes to SEO practice. From understanding the Amazon a10 algorithm to optimising the relevant keywords, our team is ready to help you sell on Amazon.",
    icon: <FiUserCheck size={32} color="#ffffff" />,
  },

  {
    id: 5,
    title: "Keyword Position",
    description:
      "Our team will keep looking for keyword opportunities, boost the number of product reviews, and improve the price, headlines, and product descriptions. This dynamic process will continue till it is complete.",
    icon: <FiBarChart2 size={32} color="#ffffff" />,
  },

  {
    id: 6,
    title: "Buy Box Techniques",
    description:
      "Only some people on Amazon are thinking about the success of your brand. You can be confident that the exclusivity of your brand will be safeguarded because our Amazon SEO services specialists know how to handle them.",
    icon: <FiShoppingBag size={32} color="#ffffff" />,
  },
];


export default function AmazonSEOConsultant() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Best Amazon SEO Agency"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Amazon Seo Consultant", href: "/amazon-seo-consultant"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Amazon SEO Consultant In Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Getting stuck with Amazon SEO is common but not availing the best solutions is not!
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                With the help of Amazon SEO Consultant from Tech2Globe, businesses can sell their goods more smoothly on Amazon, which is a global marketplace. With expertise and experience in the Amazon E-commerce business, we are a team of Amazon SEO Specialists and Amazon PPC Experts. By using the trustworthy services offered by our team, we aim to increase the scalability of our client's online businesses. We work hard to deliver the top Amazon SEO services. The FBA Amazon SEO Consultant from Tech2Globe ensures that the sellers do not encounter any difficulties as we assist our clients in achieving high Google rankings. Through our professional services, Our knowledgeable and experienced staff enables our clients to connect with a worldwide audience. If a seller wants to scale Google rankings for their Amazon Webstore, they can do so at Tech2Globe with SEO for Amazon Webstore. This helps the clientele obtain additional customers for their goods. We are skilled Amazon SEO professionals who support our client's growth and development while providing more significant returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Seller And Product Specific SEO Services

            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <ul className=" list-disc list-inside">
              <li>Sellerexpress, Seller Central, And Seller Central</li>
              <li>Product Sourcing & Research</li>
              <li>Product Analysis By Jungle Scout</li>
              <li>Product Sourcing Activity Agents</li>
              <li>FBA/FBM Product Listing</li>
              <li>Product Catalogues</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/SEO-seller.jpg"
                alt="Our Web Solutions Are Inclusive Of The Most Advanced Tools And Tactics"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>



        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              SEO & Product Ranking Services For
              Amazon Sellers
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Understanding how Amazon SEO works is crucial for your listings' success. With the number of competitors in the marketplace, getting noticed on Amazon search results can take time and effort.</p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Our Strategy To Rank Your Products

            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className=" leading-relaxed mb-3 ">
              There is no doubt that Amazon is a significant marketplace where third-party vendors can advertise and sell their goods for a set price. As a result, most e-commerce merchants are working very hard to establish a strong presence there. We are one of the top and seasoned suppliers of Amazon SEO services, and our talented team of Amazon SEO & PPC, FBA, and creative minds is here to support the expansion of your company.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/amazon-seo-consultant.jpg"
                alt="Our Strategy To Rank Your Products"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>



        </div>
      </section>

      <ClientSlider title="Tools We Make Use Of" clients={clientsData} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Benefits Of Using Smart Links<br />
              Amazon SEO Services
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiPenTool className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Boost Organic Search</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                The search algorithm used by Amazon to produce an organic ranking considers many variables, including keyword relevancy, customer reviews, and sales history.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTag className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Increase Sales</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Your product will be more likely to be seen and bought by potential customers the higher it is ranked on Amazon. This means that a successful Amazon SEO strategy can increase your company's sales and revenue.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTarget className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Increase Brand Recognition</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Additionally, a high Amazon rating might aid in spreading the word about your product's brand. Potential buyers are more likely to click on your product and learn more.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiShoppingCart className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Best Outcomes</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                In just a few months, we saw a significant rise in sales and revenues due to using strong Amazon SEO strategies. This makes using Amazon SEO to sell your goods effective and affordable.

              </p>
            </div>


          </div>
        </div>
      </section>


      <ClientSlider title="Our Partners" clients={clientsData2} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
