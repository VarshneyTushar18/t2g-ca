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
  FiCheckCircle,
  FiTruck,
  FiPackage,
  FiShare2,
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";
import ConsultancySlider from "@/components/services/ConsultancySlider";


export const metadata = {
  title: "Amazon Marketing Services in Toronto @Elevate Your Amazon Strategy",

  description:
    "Elevate your online presence with our Amazon marketing services in Toronto! ✔ ROI-Focused Strategies ✔ Complimentary Audits & Custom Plans ✔ 11,000+ Successful Projects ✔ Reach Out Today!",

  keywords: [
    "Amazon marketing agency in canada",
    "Amazon marketing services in Toronto",
    "Amazon Advertising services",
    "Amazon product copywriting agency",
    "amazon web services consulting",
    "Amazon consulting services",
    "Amazon Seller Consultants",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/amazon-marketing-services",
  },

  openGraph: {
    title:
      "Amazon Marketing Services in Toronto @Elevate Your Amazon Strategy",

    description:
      "Elevate your online presence with our Amazon marketing services in Toronto! ✔ ROI-Focused Strategies ✔ Complimentary Audits & Custom Plans ✔ 11,000+ Successful Projects ✔ Reach Out Today!",

    url: "https://tech2globe.ca/amazon-marketing-services",

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

const clientsData2 = [
  { id: 1, name: 'Goodfirms', logo: 'images/clients/t2g-goodfirms.png ' },
  { id: 2, name: 'Clutch', logo: 'images/clients/t2g-clutch.png' },
  { id: 3, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 4, name: 'Extract', logo: 'images/clients/extract.png' },
];



const faqsData = [

  {
    id: 1,
    question: "How Do Amazon Ads Function?",
    answer: `
      Utilising Amazon's advertising services is easy once you register on the platform and select an enrollment option. With the Amazon DSP, you may simultaneously create audio and video advertisements.

      Naturally, the process is more involved when getting a high ROI in a short amount of time is the goal. Contact our Amazon advertising management experts to accomplish that goal easily.
    `,
  },

  {
    id: 2,
    question: "Do You Also Serve Sellers or Just Vendors?",
    answer: `
      Our Amazon product copywriting agency can assist you in expanding, regardless of whether you handle your products in Seller Central or Vendor Central. Send your requests to and you'll instantly receive various marketing services specifically tailored to your needs.
    `,
  },

  {
    id: 3,
    question:
      "Can You Help Me Calculate The ROI For Amazon Marketing Services?",
    answer: `
      Of course, we will! We assist you in measuring and analysing the outcomes with regular campaign and account reports and offer a wide selection of Amazon advertising alternatives. Our Amazon marketing services specialists review the information with you, assess the ROI, and suggest new and improved ways to improve the adverts.
    `,
  },

  {
    id: 4,
    question:
      "For My Amazon Ad Campaigns, Will You Conduct Research ?",
    answer: `
      Without a doubt, yes! The success of marketing initiatives by Amazon marketing agency in Canada is directly correlated with keyword relevancy. Before developing the campaigns, our Amazon marketing services company does rigorous yet exploratory keyword research. Once the automated ads are up, we keep track of the keywords that produce successful clicks and sales and use those to advance the campaign.
    `,
  },

  {
    id: 5,
    question:
      "What Does Your Amazon Advertising Solutions Include?",
    answer: `
      We provide a comprehensive range of services and support for Amazon marketing, including but not limited to the following.

      • Associated Brands  
      • Sponsored Items  
      • Featured Display  
      • Customised ad campaigns, audio ads, and video ads on Amazon  

      We also develop solutions based on specific client needs and existing Amazon advertising options.
    `,
  },

];


const servicesData = [
  {
    id: 1,
    title: "Amazon SEO",
    description:
      "We at Tech2Globe, Amazon product copywriting agency research the most successful keywords for which your product should be ranked, including long-tail ones that your competitors still need to identify. This involves optimising the page for Google's and Amazon's algorithms, resulting in a higher ranking across the board. In addition to organising and directing the labelling process to the fulfilment centres, we handle all shipments.",
    icon: <FiSearch size={32} color="#ffffff" />,
  },

  {
    id: 2,
    title: "Amazon Advertising",
    description:
      "We have created a solution in the form of SellerApp's Amazon marketing agency in Canada to assist professional sellers building and optimising their campaigns. Over time, we have reduced the ACoS by 30% while assisting our clients in increasing their sales by 20% on average. In addition, our first-rate Amazon PPC marketing service helped them increase their market share and brand visibility, which brought in new clients and repeat business.",
    icon: <FiTrendingUp size={32} color="#ffffff" />,
  },

  {
    id: 3,
    title: "Amazon Brand Stores",
    description:
      "Gain access to end-to-end Amazon brand store design services through a partnership with Tech2Globe, best Amazon marketing agency in Canada to fully utilise the world's largest eCommerce platform. We deploy a team of committed personnel to construct a fully tailored space for your product portfolio filled with rich content, photographs, videos, and multimedia.",
    icon: <FiShoppingBag size={32} color="#ffffff" />,
  },
];


export default function AmazonMarketingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Amazon Marketing Services in Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Amazon Marketing Services", href: "/amazon-marketing-services"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Amazon Marketing Services In Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                By using all our tested strategies, we've got excellent results for sellers like you on Amazon.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Amazon has over 300 million active consumer accounts. With so many data points, it should be no surprise that Amazon understands consumer motivations, brand engagement, and online shopping patterns. Amazon sellers can reach their target audience by advertising on Amazon, which offers a wide variety of products to help you meet your advertising objectives at every point in the customer journey. This Amazon marketing services in Toronto solution enables you to convey your brand story and product portfolio to Amazon customers using a direct drag-and-drop page builder or premade templates. Even Amazon URLs like amazon.com/BRAND are provided. Vendors, agents, and sellers members of the Amazon Brand Registry can open stores. To launch a store, you can promote it on Amazon.<br />
                Most consumers shop on Amazon. You need a competitive edge, and you don't want to waste money when no one is buying. You already know Amazon if you're here. You must also be aware of the fact that retail dominates the e-commerce sector. All you need to learn is how to participate. What is the first step? How do you differentiate your goods or services? How can you navigate an overcrowded Amazon marketplace without getting lost?<br />
                Our professional team at Amazon product copywriting agency helps you develop a unique plan to make the most of your budget. To get the greatest return on investment (ROI) for your Amazon marketing, working with an Amazon platform expert with a track record is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClientSlider
        title="Awards & Recognition"
        subtitle="Tech2Globe has been recognized as a leading digital marketing and web development
agency from some of the leading industry review sites."
        clients={clientsData2}
      />

      <section className="py-16 bg-white overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center  mb-6">
          What We Focus On With Our Amazon Advertising Services?
        </h2>
        <div className="w-24 h-[2px] bg-[#c7010c] mx-auto  mb-4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/home-page-about.jpg"
                alt="How Tech2Globe Helps Drive Results For Businesses?"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">

            <p className="text-[16px] text-[#000000] font-normal mb-4">One of the many Expert
              Use Tech2Globe's full-cycle Amazon marketing services in Toronto to turn your advertising into money.<br />

              Leverage our two-pronged strategy, cutting-edge Amazon advertising options, and qualified professionals to expand your eStore, company, and brand on the platform.<br /><br />

              <ul className="list-disc list-inside ml-4">
                <li>Full Brand Protection</li>
                <li>Personal Ad Format</li>
                <li>An Intense Focus On A Group</li>
                <li>Deep Impressions</li>
                <li>Policy For Premium Creative Ads</li>
              </ul><br />

              Our Amazon advertising services experts are precise in their targeting, drive results for your company, and increase the effectiveness of your advertising efforts. Join us to improve your ads performance, ranking, conversion efficiency, and sales.

            </p>


            <br />

            <a
              href="/about"
              className="inline-block bg-[#222222] text-white px-8 py-3.5 text-sm font-semibold tracking-wider hover:bg-[#c7010c] transition-colors duration-300"
            >
              About Us
            </a>
          </div>


        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">

            {/* RIGHT – Image (50%) */}
            <div className="w-full lg:w-1/2 relative">
              <img src="/images/services/services-classic-07.jpg" alt="Why Is Marketing On Amazon Important?" className="object-cover" />
            </div>

            {/* LEFT – Content (50%) */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="px-8 sm:px-12 lg:px-16 ">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 leading-snug">
                  Why Is Marketing On Amazon Important?
                </h2>
                <div className="w-16 h-[3px] bg-[#c7010c] mb-4"></div>
                <p className="text-gray-500 text-sm leading-relaxed mb-10">
                  Because it offers focused, keyword-targeted advertising campaigns, Amazon advertising is becoming increasingly popular as a marketing tool. Amazon advertising campaigns focus on words and display products that are relevant when a customer searches the Internet for a specific product. In addition to serving Amazon-relevant ads, AMS additionally:
                </p>

                {/* 2×2 Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">

                  {/* Benefit 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded border border-gray-200 flex items-center justify-center text-[#c7010c]">
                      <FiMonitor size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-1">Increases Product Sales</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        When customers see relevant products in Amazon ads, they are more likely to check product details and make a purchase, which leads to increased product sales.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded border border-gray-200 flex items-center justify-center text-[#c7010c]">
                      <FiShare2 size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-1">Superior Performance</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        Keyword-targeted ad campaigns help with display optimization and show relevant display ads for each search result.
                      </p>
                    </div>
                  </div>


                </div>{/* /grid */}
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              We Know The Taste Of Your Audienc
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">Sell ​​what online customers want to buy</p>
            <p>Classes are classified based on their similarities to Amazon Standard Identification Numbers (ASINs). The total number of items in each group will be estimated. You can narrow down the ASINs to your category using the "Refine" button. It encourages you to focus only on the ASINs' unique labels, pricing, and star ratings. Using a targeted category, you can change pricing, brands, and ratings for stars. You can use these refinement techniques to establish precise parameters for how and when to display your ad. The options for targeting Amazon ads are expanding. However, many of Amazon's new tailored targeting options now are more closely related to Google Ads. We are the best Amazon marketing services in Toronto; thus, we are familiar with the Amazon market.</p>
          </div>


        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Where Our Amazon Consultants<br />
              Help You Improve?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>


          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>



      <section className="py-16 bg-white overflow-hidden">
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
              Why Choose Tech2Globe To Be Your Amazon Marketing Agency In Canada?
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Recently, a competitive landscape in the ecommerce industry has emerged due to Amazon's dominant position in the retail sector. As a vendor, brand, or company, you are competing not only with thousands of other sellers but also with an algorithm constantly changing.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Making a good profit while standing out in that crowd requires:

              <ul className="text-gray-600 mb-4 leading-relaxed list-disc" >
                <li>
                  A Satisfying Use Of The Product
                </li>

                <li>
                  A Top-Notch Product Presentation
                </li>

                <li>
                  Knowledge Of Your Specialty
                </li>

                <li>
                  Best Amazon Advertising Services To Help You With That.
                </li>

                <li>
                  A Solid Understanding Of The Methods For Obtaining Traffic And Quality Leads
                </li>
              </ul>
              Tech2Globe, a top Amazon marketing agency in Canada, has everything a seller might need to place their listings where they belong.
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

      <ClientSlider title="Our Clients" clients={clientsData} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
