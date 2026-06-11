import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
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
    "Local Search Engine Optimization Company | Request a Free Consultation",

  description:
    "Local Search Engine Optimization Company. Results-driven ROI marketing, complimentary audits, customized plans, and 8,000+ successful projects.",

  keywords: [
    "Local Search Engine Optimization Company",
    "Local SEO Services",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/local-seo-services",
  },

  openGraph: {
    title:
      "Local Search Engine Optimization Company | Request a Free Consultation",

    description:
      "Results-driven ROI marketing, complimentary audits, customized plans, and 8,000+ successful projects.",

    url: "https://tech2globe.ca/local-seo-services",

    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },
};

const clientsData = [
  { id: 1, name: 'Abrams', logo: 'images/clients/abrams.webp' },
  { id: 2, name: 'Absolute Toner', logo: 'images/clients/absolute-toner-logo.webp' },
  { id: 3, name: 'Aniss', logo: 'images/clients/aniss-logo.webp' },
  { id: 4, name: 'Aon Hewitt', logo: 'images/clients/aonHewit.webp' },
  { id: 5, name: 'Aquatech', logo: 'images/clients/aquatech.webp' },
  { id: 6, name: 'Creative Arcades', logo: 'images/clients/creative-arcades.webp' },
  { id: 7, name: 'Follett', logo: 'images/clients/follett.webp' },
  { id: 8, name: 'GBS', logo: 'images/clients/gbs-logo.webp' },
  { id: 9, name: 'HP', logo: 'images/clients/hp.webp' },
  { id: 10, name: 'Wellist', logo: 'images/clients/wellist.webp' },
];


const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.webp' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.webp' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.webp' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.webp' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.webp' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.webp' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.webp' },
];




const faqsData = [
  {
    question: "How different is Seo from Local Seo?",
    answer:
      "The spatial component distinguishes a conventional SEO effort from the GMB services Canada campaign. Local SEO enables you to target nearby customers in your neighbourhood or service area as opposed to traditional SEO, which focuses on increasing your site's visibility on a worldwide level. By concentrating on ranking well in local search results, you can attract more clients to your storefront. You can enhance your local SEO by upgrading Google My Business, finding out what your clients are searching for through keyword research, and adding local citations, to name a few."
  },
  {
    question: "What Do Local Seo Fee Cost?",
    answer:
      "The price of local SEO services might vary greatly, just like it does for all other marketing avenues. For instance, it will be much less expensive to create and optimize Google My Business than to revamp the site and add all the extras ultimately. It's crucial to figure out how to develop the most cost-effective local SEO approach if you have a tight budget. You need a local SEO company with the expertise to maximise ROI while working within any budget. And at Tech2Globe local seo company Toronto, we have local SEO specialists who can do just that! Because no two businesses are the same, we don't provide pre-made local SEO solutions."
  },
  {
    question: "Where Do I Begin With Local Seo?",
    answer:
      "Local SEO strategies can help you enhance conversions, online visibility, and foot traffic to your physical locations. Contact our local seo experts to discuss in-depth SEO tactics if you're ready to move forward."
  },
  {
    question: "What Can You Do To Help Me Raise In The Search Rankings?",
    answer:
      "Being the best local seo company Toronto has years of combined expertise helping local search engine optimization for businesses like yours. Therefore, you can be sure that we have the know-how to position your website at the top of any local intent search that involves your company. We provide local search services that cover every aspect of search engine optimization, from content development to link building, website redesign, technical on-page, and everything else. And we'll do it all for incredibly reasonable local SEO prices."
  },
  {
    question: "Concerning Local Rankings, Can Social Media Help?",
    answer:
      "You can definitely include social media in the mix to raise your position in search results because Google values each online reference or backlink to your website. However, it's more complex than setting up social media accounts and continuously posting links to your website. Doing that will be a waste of time because you won't create much (if any) internet buzz or gain any following. The method for using social media as a local SEO tool varies based on your social platform."
  }
];

const servicesData = [
  {
    id: 1,
    title: "Local SEO Audit",
    description:
      "Potential clients from local searches are highly targeted because they actively seek your services in your nearby area. These potential clients will go to your competition if you don't have complete coverage at all your sites. Tech2Globe, a local seo company Toronto approaches local search from three angles: regional maps, organic local, and citations.",
    icon: <FiSearch size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Keyword Research",
    description:
      "We thoroughly understand a brand's product or service when collaborating with it. After that, our local seo agency compiles a list of phrases that customers will likely use while interacting with these brands. After considering several additional variables, including keyword density, we create a list of target keywords that link consumers and prospects to the brands we represent.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Google Business SEO",
    description:
      "With assistance from our Google My Technical experts, manage your Google My Business locations and ensure your brand information is accurate and up to date. In addition to GMB SEO, we also offer Bing and Yahoo local optimization for Google My Business. We ensure that these company profiles are optimised for your target location or service area and maintain the same brand identity.",
    icon: <FiLink size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "eCommerce SEO",
    description:
      "Almost 50% of shoppers look for products on their mobile devices before making a purchase. Get the top local SEO services to link your business with 21st-century consumers in your nearby areas. Using geo-targeted content and keywords, building local company citations, managing online reviews, and claiming and optimising your business profile across Google My Business locations are all offered by our local digital marketing agency.",
    icon: <FiBarChart2 size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Link Building",
    description:
      "Invest in low-cost local SEO services to increase your online presence. We make sure search engines locate an accurate depiction of your company online as one of the top local SEO businesses. Our SEO business develops hyperlocal SEO landing pages, establishes your local SEO citations, uses highly relevant keywords, and starts email outreach efforts.",
    icon: <FiFileText size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Conversion Optimization",
    description:
      "Improve your local ranks by letting our local digital marketing company handle your business' affordable local SEO services needs. Our local search engine optimization business can assist you with building service and city pages, enhancing your website's mobile friendliness, or finishing your local SEO checklist.",
    icon: <FiDollarSign size={32} color="#ffffff" />
  }
];

export default function LocalSeoServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="BEST LOCAL SEO SERVICES IN TORONTO, CANADA"
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
                Best Local SEO Services in Canada
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] text-lg font-medium mb-3">Any marketing effort is only worthwhile with perfect local seo optimization!</p>


              <p className="text-gray-600 mb-3 leading-relaxed">
                Like typical GMB services Canada, local search engine optimization works within a more constrained geographic area to promote your company to millions of potential clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With this specialised strategy, you can anticipate an increase in qualified leads waiting to be converted into sales. As you know, any small business can lead a successful path with its potential to convert leads into customers. Your business grows more due to the benefits of local SEO, which will provide you with the right leads and assure higher exposure. Knowing what your competitors are doing is the best way to begin your local SEO journey. Our professionals evaluate where your business stands as compared to your rivals and devise a plan to outperform them with favourable outcomes.At Tech2Globe, a local seo company Toronto we don't take any shortcuts. Our team searches the web for the top directories and creates sources to send you the required leads. You can keep your business updated when you work with our local SEO services.
              </p>
            </div>
          </div>
        </div>
      </section>




      <AvailableLocations title="Our Digital Marketing Location" subtitle="" />


      <section className="py-16 bg-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Leverage The Best Local Seo Agency
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mb-3 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/Bussines-digital-grouth.webp"
                alt="Why Google My Business Is a Big Part of Local SEO?"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">

            <p className="text-white mb-8 leading-relaxed">
              Our analysts constantly modify the keyword research method to understand how your clients look for your product or service.
              The SEO experts at our local seo agency are experienced and have worked on SEO for many websites. We promise to deliver long-lasting effects for your website. The fact that each of our packages is customized makes us the top choice for providing professional SEO services in Canada. Our local seo agency takes pride in providing our clients with SEO solutions that produce effective results.
              Do you know that most users search on Google before making a purchase? And this calls for the fact that you cannot boost profitability without a website. As a result, investing in SEO services will help your website rank well in search engine results pages. Let our local seo company Toronto experts assist you by boosting your journey to achieving your goal.
            </p>
          </div>

        </div>
      </section>

      <ClientSlider title="Meet Our Clients" clients={clientsData} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Why do you need local seo services?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                It Is Reliable
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Being simply visible online is insufficient in the modern digital world. You must ensure your company is noticeable in your local area, regardless of whether you are a startup or a major corporation. Tech2Globe provide trustworthy local SEO services to aid your marketing initiatives.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                You Achieve Relevance
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Relevance is essential for the finest marketing outcomes. Marketers must be creative and trend-focused to stay ahead of the competition in this Seo for local business. The main factor in both customer engagement and brand recall is relevancy.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                You Gains Innovative Approach
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Applying innovative marketing strategies can aid in the growth of SEO businesses. The business gains from successfully applying cutting-edge marketing strategies from Seo for local business Canada providers because these ideas raise customer and brand awareness.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              How Local SEO Services Drive Lead Generation?
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="text-[#c7010c] text-lg font-medium mb-3">Any marketing effort is only worthwhile with perfect local seo optimization!</p>
            <p className="text-white mb-8 leading-relaxed">
              Local SEO is a complicated undertaking requiring technical knowledge. Therefore, you need to choose a qualified Local SEO provider, such as the best GMB services Canada, to promote your website. Tech2Globe offers affordable local SEO services as a leading digital marketing agency in Canada that offers end-to-end web solutions to customers worldwide. GMB services Canada works to achieve the ideal balance between quality and cost. As one of the top local SEO service providers, we give the best local SEO services Canada packages to meet your SEO needs and work with SEO professionals to rank your website in the SERPs as quickly as possible.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/lead-generation.webp"
                alt="Why Google My Business Is a Big Part of Local SEO?"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>

        </div>
      </section>




      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Tech2Globe's Local SEO Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-[#c7010c] text-lg font-medium mb-3">
              We know better what stops your business from ranking higher in search engines!
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <section className="py-16 bg-[#f9f9f9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Why Google My Business Is a Big Part of Local SEO?
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="text-[#c7010c] text-lg font-medium mb-3">Expanding your business to the big market can only be achieved when Google My Business is a part of your local seo services!</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The main force behind affordable local SEO services success is still Google My Business. The techniques used to assist your company in becoming more visible in local search results are known as local SEO. Right now, if you search anything into Google, there's a high chance you'll witness the value and effectiveness of local SEO in action. However, your ranking for proximity, prominence, and relevance is also significantly influenced by your Google My Business listings. The "Local Pack," or the first three search results that appear as business listings beneath the ad area, was mentioned in the preceding section and is a significant factor in the importance of Google My Business. According to data, affordable local SEO services appear in 93% of searches with a local focus.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/google-seo.webp"
                alt="Why Google My Business Is a Big Part of Local SEO?"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>

        </div>
      </section>

      <Industries />

      <FaqContact faqs={faqsData} />

      <Footer />
    </main>
  );
}
