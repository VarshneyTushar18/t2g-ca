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
  FiVideo,
  FiClipboard,
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";
import ConsultancySlider from "@/components/services/ConsultancySlider";


export const metadata = {
  title: "Amazon PPC Management Agency @Maximize Your Amazon Advertising",

  description:
    "Amazon PPC Management Agency to Boost Your Business Online. ✔Maximize ROI with Expert PPC ✔Boost Your Sales ✔11000+ Successful Projects ✔Contact Now",

  keywords: [
    "Amazon PPC Services",
    "amazon ppc management service",
    "amazon advertising management",
    "Amazon PPC Management Agency",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/amazon-advertising-management",
  },

  openGraph: {
    title: "Amazon PPC Management Agency @Maximize Your Amazon Advertising",
    description:
      "Amazon PPC Management Agency to Boost Your Business Online. ✔Maximize ROI with Expert PPC ✔Boost Your Sales ✔11000+ Successful Projects ✔Contact Now",
    url: "https://tech2globe.ca/amazon-advertising-management",
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


const slides = [
  {
    id: 1,
    title: "Boost Your Amazon Sales",
    description: "Increasing sales on Amazon is a common business goal for those who invest in seller Amazon web services consulting for the marketplace. It's a sensible goal given that Amazon accounts for more than 40% of all ecommerce sales because you can reach many valuable customers there.",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  },
  {
    id: 2,
    title: "Improve Your Product Listings",
    description: "It takes a lot of effort to analyse, audit, and optimise each product in an extensive product catalogue. Our Amazon marketing agency can help with that. We can put these adjustments into effect for you because we specialise in SEO, PPC and Store launches for Amazon.",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  },
  {
    id: 3,
    title: "Strengthen Your Amazon Rating",
    description: "You can increase the number of reviews you receive through our Amazon consulting services. Your SEO approach might be strengthened with more authenticated product reviews. Consumers also regard reviews as a reliable sign of trust..",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  },
  {
    id: 4,
    title: "Fuel Your Amazon Advertising ROI",
    description: "Your advertising campaigns need to produce a return on investment because businesses have increased their Amazon advertising spending by more than 160% (ROI). Our team searches for strategies to raise your product sales and return on investment as part of our Amazon web services consulting.",
    buttonText: "ABOUT COMPANY",
    buttonLink: "#"
  },

];

const faqsData = [

  {
    id: 1,
    question: "How Is Amazon Advertising Implemented?",
    answer: `
      Visit the Register page and select one of the enrollment choices to begin using self-service advertising solutions, such as Sponsored Products, Sponsored Brands, Sponsored Display, and Stores. You can handle display advertisements, video ads, and ads served through the Amazon DSP either on your own or with the assistance of an Amazon Advertising account executive. To begin, get in touch with us.
    `,
  },
  {
    id: 2,
    question: "On Amazon, What Distinguishes A Vendor From A Seller?",
    answer: `
      Customers of Amazon are directly served by sellers. You are a seller if you use Seller Central to manage your products. Vendors supply Amazon directly with their products, which it subsequently offers to customers. You are a vendor if you use Vendor Central to handle your products.
    `,
  },
  {
    id: 3,
    question: "After I Set Up My Budget, Can I Readjust It?",
    answer: `
      Once your ads go live, you can, in fact, change your daily budget.
    `,
  },
  {
    id: 4,
    question: "I Kicked Off A Campaign. How Do I Find My Ad?",
    answer: `
      Your campaign's specifications will determine how your ads are shown. On the reporting page, you can view your ad impressions, clicks, and conversions.
    `,
  },
  {
    id: 5,
    question: "What is the procedure for bidding on Sponsored Products?",
    answer: `
      An advertiser enters a bid for the terms they want to target when launching a campaign. A bid is the most you will spend when a customer clicks on an advertisement.
    `,
  },
];


const servicesData = [
  {
    id: 1,
    title: "Auto Campaign",
    description:
      "Amazon selects when to display your product ad depending on the keywords provided in the title, description, and other sections of your product listing under Automatic Campaigns. Automated campaigns are simple to start up, even for Amazon PPC services newcomers.",
    icon: <FiTrendingUp size={32} color="#ffffff" />,
  },

  {
    id: 2,
    title: "Brand Campaign",
    description:
      "Amazon Sponsored Brand Ads are the most effective approach to increasing your brand's visibility and the reach of your product on Amazon Marketplace. Tech2Globe, Amazon PPC management agency is your best option as an Amazon PPC consultant.",
    icon: <FiAward size={32} color="#ffffff" />,
  },

  {
    id: 3,
    title: "Competitor Brand Campaign",
    description:
      "Competitor brand campaigning is like branded campaigns, target brand names, but they are the names of your competitors. These campaigns make your company appear when a customer actively searches for a competitor, bringing your name in front of more individuals who require your services.",
    icon: <FiUsers size={32} color="#ffffff" />,
  },

  {
    id: 4,
    title: "Competitor ASIN Targeting",
    description:
      "Amazon Sponsored Brands allows you to create a bespoke branded shopping experience for your clients, cancelling the noise on the search results page. Sponsored Brands advertisements, like Sponsored Products ads, are PPC (pay-per-click) ads that target keyword searches.",
    icon: <FiTarget size={32} color="#ffffff" />,
  },

  {
    id: 5,
    title: "Manual Campaign",
    description:
      "In Manual Amazon advertising management campaigns, the seller defines the keywords and bid rates manually. The product ad for the search phrase is presented based on the keyword match type. Highly segmented ad groups usually yield the greatest benefit, spending, and sales.",
    icon: <FiSettings size={32} color="#ffffff" />,
  },

  {
    id: 6,
    title: "Video Ads",
    description:
      "Amazon video advertisements enable advertisers to reach customers through targeted videos on Amazon's websites, mobile apps, and other devices. For an engaging ad experience, we use out-of-stream autoplay video to convey your brand message.",
    icon: <FiVideo size={32} color="#ffffff" />,
  },

];

const testimonialsData = [
  {
    id: 1,
    letter: "SW",
    name: "Stuart Woaks",
    subname: "Business Owner",
    text: "When we tried to market our products on Amazon, our clothes start-up sold roughly $900 worth of merchandise per month. Within three months, Tech2Globe was able to 10x our sales. We now frequently appear on the top page of Amazon for important keywords related to our sector thanks to their Amazon PPC management service. Highly advisable!"
  },
  {
    id: 2,
    letter: "CB",
    name: "Chris O Brien",
    subname: "E-commerce Manager",
    text: "Tech2Globe, Amazon PPC management agency helped us grow from a start-up firm to a position where we are now looking to expand into three states in Canada. They collaborated with us to create a logo and built our website from the ground up to assist with our debut. Created a marketing strategy that took our company to the next level, They are still our partners."
  },
  {
    id: 3,
    letter: "JM",
    name: "Jim Macron",
    subname: "Marketing Director",
    text: "We began working with Tech2Globe for Amazon advertising management in 2018 because we were looking for a business with experience working with everything Amazon. Starting with setting up our Amazon advertising, new product launches, growth strategies, and outcome analysis. Working with them has been a pleasure, and I recommend them."
  }
];


export default function AmazonAdvertisingManagement() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Amazon PPC Management Agency"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Amazon Advertising Management", href: "/amazon-advertising-management"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Amazon Advertising Management
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

              <p className="text-gray-600 mb-3 leading-relaxed">
                We are available to businesses of all sizes and accessible to marketers at every level of operations. Tech2Globe, an Amazon PPC management agency, provides ad solutions that help your business connect with customers at every stage of its journey.<br />
                Brands must take advantage of this opportunity to develop a loyal client base as Amazon continues to improve its advertising offerings. Amazon advertising management services can help you outperform your competitors in terms of traffic if used wisely. You can choose the product variations you want to advertise, giving you control over which products provide you visibility in ASIN targeting. You have less control over category targeting because Amazon chooses which products you are advertised for. By keeping your ACoS low, effectively adopting these tactics will enhance your market share. To see the results may take some time. But keep in mind, it's worthwhile!
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

      <section className="py-16 bg-[#0000001a] overflow-hidden">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-6">
          How Tech2Globe Helps Drive Results For Businesses?
        </h2>
        <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/amazon-advertising-management.jpg"
                alt="How Tech2Globe Helps Drive Results For Businesses?"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-[16px] text-[#000000] font-normal mb-4">One of the many programmes Amazon provides to its merchants is Amazon advertising management, which is the most advantageous for any seller!
              Amazon advertising management services carry out its stated purpose. You can deliver your products in bulk to Amazon's fulfilment centres once you've signed up. When a customer purchases your products, Amazon takes over the packaging and delivery of the order to the customer. A great way to free yourself from duties like order fulfilment and refunds is by signing up for Amazon advertising. The programme is still extremely complex, and you must learn to succeed.</p>
          </div>


        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Services Where We Deliver You With<br />
              The Best Of Our Expertise
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>We are always eager to serve our clients with the best we can offer!</p>

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
                src="/images/services/Amazon-Ads.png"
                alt="How Tech2Globe Helps Drive Results For Businesses?"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900  mb-6">
              Why Is Amazon Advertising Management Consulting So Important?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c]  mb-4"></div>
            <p className="text-[16px] text-[#000000] font-normal mb-4">One of the many Expert consultants find discrepancies between performance and goals, highlight the potential for business expansion, create business plans, and assist with progress management.<br /><br />

              Each seller account needs to be registered for Amazon PPC services. Depending on the consultant's position, one person might need help managing all your seller accounts. If that is the case, careful coordination will ensure that your numerous accounts are managed successfully.</p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Why Choose Tech2Globe For Amazon PPC Management Services?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Fulfilment, inventory, traffic, conversion rates, merchandising or promotion are all done with perfection and in a timely manner at Tech2Globe!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                One-Stop Solution For Everything On Amazon
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We offer the full range of Amazon PPC management service. From sales to consulting, data to original recommendations, we handle everything.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Use of Commercial AI-Powered Tools
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Want to succeed with technology and gain access to real-time analytics? We provide specialised tools that are suited to your company using our AI/ML solutions.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Over 100 Marketing Experts Work For Amazon Advertising Management
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                With over 100 Amazon PPC services professionals on our team, your Amazon business is in good hands. Our team can help you achieve success because they are bilingual and speak your language.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Diverse Amazon Experience
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Amazon Seller Central, Amazon Vendor Central, Hybrid Accounts (both Seller Central & Vendor Central), Amazon DSP, and Amazon Fresh are all platforms that our team works with. We have worked with more than 15 Amazon product categories.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Each Account Has a Dedicated Account Manager and Amazon Strategist
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                You and one of our specialists conduct a one-on-one strategy conversation. For the success of your brand, we understand how crucial it is to develop personalised, performance-based blueprints.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Process We Believe Has Worked
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
            <p>Before incorporating anything new into your digital advertising plan you should become acquainted with the recommended best practices!</p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiClipboard className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">
                Ask For Requirements
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Your assigned strategist will take the time to become familiar with your
                company, brand, and sector. We lead our clients through a thorough client
                intake procedure that enables us to perform.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiSearch className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Research</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Our Amazon PPC management agency investigates your brand by poring over
                audience research analytics and digital intelligence studies that are
                readily available.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTarget className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">
                Strategic Planning
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                We create a thorough digital strategy that is tailored to fulfil your
                business and digital goals by fusing the unique information from your team
                and company with our extensive digital research.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTrendingUp className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">
                Execution & Review of Strategy
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                As you work to implement the finalised digital strategy, our team of
                professionals will guide your team through it and be available to answer
                any questions.
              </p>
            </div>


          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
