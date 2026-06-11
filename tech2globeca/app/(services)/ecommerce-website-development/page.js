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
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";


export const metadata = {
  title: "Best Ecommerce Website Development Company @Elevate Your Online Store",
  description:
    "Best Ecommerce Website Development Company to Boost Your Business Online. ✔Elevate Your Online Store ✔ Experience Digital Excellence ✔2000+ Successful Projects ✔Contact Now",
  keywords:
    "ecommerce website development company, ecommerce web development company, Best Ecommerce Website Development Company , Ecommerce website Development Services",
  alternates: {
    canonical: "https://tech2globe.ca/ecommerce-website-development",
  },
  openGraph: {
    title: "Best Ecommerce Website Development Company @Elevate Your Online Store",
    description:
      "Best Ecommerce Website Development Company to Boost Your Business Online. ✔Elevate Your Online Store ✔ Experience Digital Excellence ✔2000+ Successful Projects ✔Contact Now",
    url: "https://tech2globe.ca/ecommerce-website-development",
    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",
    locale: "en_US",
  },
};

const clientsData = [
  { id: 1, name: 'Payoneer', logo: 'images/clients/Payoneer-Log.webp' },
  { id: 2, name: 'Shopify', logo: 'images/clients/shopify.webp' },
  { id: 3, name: 'ISO', logo: 'images/clients/iso.webp' },
  { id: 4, name: 'Certificate', logo: 'images/clients/certificate.webp' },
  { id: 5, name: 'MSME', logo: 'images/clients/msme.webp' },
  { id: 6, name: 'Google', logo: 'images/clients/google.webp' },
];

const clientsData2 = [
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


const faqsData = [
  {
    id: 1,
    question: "How Much Do You Cost For One Ecommerce Project?",
    answer: `
      The pricing may vary from one project to another according to its needs and requirements. 
      You may consult our experts with your project via phone or email, and they will let you know 
      what help it requires and at what price. You will be free of any budget stress as we aim to 
      deliver the best services at a minimal cost to every client.
    `,
  },
  {
    id: 2,
    question: "How Much Time Will You will Take For Completion Of One Successful Project?",
    answer: `
      Whenever we evaluate new projects, we make sure to set a deadline like this: the pre-project 
      consulting process will take two weeks, our research design and planning phase will take 4 to 6 
      weeks, and then we will begin our developing phase. A client will always be updated for each step, 
      and we make sure to deliver a successful ecommerce website within a given timeline.
    `,
  },
  {
    id: 3,
    question: "How Do You Identify The Best Shopping Cart Solution For Each Project?",
    answer: `
      This totally depends on the requirements of the client's ecommerce business. We have a list of the 
      best ecommerce solutions to help your ecommerce business reach the upper level. You must contact our 
      ecommerce website development agency to get yourself the right choice of platform and start your 
      business journey.
    `,
  },
  {
    id: 4,
    question: "Do I Need To Visit You During The Processing Of My Project?",
    answer: `
      No, you do not need to do this. At the end of each working day, the Project Manager supervising your 
      project or the programmer working on your project will send you a detailed report updating you on the 
      progress of your project. We maintain easy accessibility and an open line of communication through VOIP, 
      Email, or any other preferred mode of communication with you. Our quality control team keeps a check and 
      closely monitors the workflow to enable you to get superior results all throughout.
    `,
  },
  {
    id: 5,
    question: "Can I Manage The Functions Of My Ecommerce Website After You Deliver It To Me?",
    answer: `
      Yes, you are allowed to manage everything by yourself after your project is delivered by us. Post-delivery 
      of the project, our company will not be involved in your website in any case, and you will be provided with 
      all the credentials that you may change according to your convenience. Still, our customer support team will 
      be there to help you out if you get stuck anywhere.
    `,
  },
];


const servicesData = [
  {
    id: 1,
    title: "Ecommerce Consulting",
    description:
      "We provide you with professional ecommerce consulting with the relevant solutions for your ecommerce problems.Our experts systematically optimize your ecommerce business to bring in the best results.You will be assisted from scratch, especially when you are a beginner.Our customizing strategy will surely make your performance better day by day.",
    icon: <FiShoppingBag size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Ecommerce Web Development",
    description:
      "Our ecommerce web development company will provide you with a top - quality web application for your business using the best web content management system.We indulge in -depth expertise in this niche to serve our clients with the needed domain knowledge.The agency makes sure of one thing that is, they must be using code quality and reusability.",
    icon: <FiCode size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Ecommerce Web Design",
    description:
      "Our ecommerce web application designing team operates all over Toronto to help clients whenever they need them for their business.Experts will work on many things, such as redesigning your ecommerce application for both web and mobile, enhancing the UI to bring more potential customers towards it and increasing your online business by using cutting-edge tools and technologies.",
    icon: <FiMonitor size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Ecommerce Mobile App Development",
    description:
      "Our ecommerce website development company works on integrating ecommerce mobile applications with the top - class and advanced application features necessary for beating the current competition in the market.It is our top priority to give your buyers the best customer interaction whenever they use your application.Using the latest technologies of the ecommerce niche is the major rule that we follow in our services.",
    icon: <FiBriefcase size={32} color="#ffffff" />,
  },
  {
    id: 5,
    title: "Secure Ecommerce Solutions",
    description:
      "We have expertise in providing you with a secure and scalable ecommerce website that is easy for you as well as for your customers to use.With experience in serving the best ecommerce solution over the past many years, we give you the best suggestions for choosing the right ecommerce platform, technology, ecommerce modules, and a comprehensive set of practices that can take your business to the next level.",
    icon: <FiUsers size={32} color="#ffffff" />,
  },
  {
    id: 6,
    title: "Customer Support And Maintenance",
    description:
      "Tech2Globe is the top ecommerce web development company that ensures to give full - time, i.e., 24 / 7 customer support to their clients and be there for them to solve every business query.According to the client's business needs, our team makes sure to present unique and accessible solutions every time, whether related to web or mobile applications. You will be given the best in all, indeed.",
    icon: <FiTrendingUp size={32} color="#ffffff" />,
  },
];


export default function EcommerceWebsiteDevelopment() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Ecommerce Website Development Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Ecommerce Website Development", href: "/ecommerce-website-development"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Ecommerce Web Development Company Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

              <p className="text-gray-600 mb-3 leading-relaxed">
                Do you want to take your ecommerce business to reach the goals of your dream? We are here to fulfill this for you in a very convenient way with our ecommerce website development services! We will indeed exceed your expectations in every possible manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Make this section light text dark */}
      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/Ecommerce-Development-Company.webp"
                alt="Our Web Solutions Are Inclusive Of The Most Advanced Tools And Tactics"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Know Our Ecommerce Web Development Company!

            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className=" leading-relaxed mb-3 ">
              We are a team of experts who have expertise in ecommerce website development services. Tech2Globe is a full-time ecommerce website development agency, serving businesses for more than 14 years with the best. We believe in fulfilling our customer's expectations, expanding their audience base, and boosting their ecommerce sales in a very short time.
            </p>
            <ul className=" list-disc list-inside">
              <li>Enhancing customer engagement with the UI and UX website design</li>
              <li>Providing mobile and web applications for your ecommerce business.</li>
              <li>Implementing Artificial Intelligence, The Internet Of Things, as well as Machine Learning as the backbone of your ecommerce website.</li>
            </ul>
          </div>

        </div>
      </section>



      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Services Offered By Our Ecommerce Website Development Agency
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>We are the leading ecommerce website development company in the market to help you with profitable ecommerce business solutions and offer the best web integration services.</p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Our Ecommerce Web Development Company Welcomes A Greater ROI
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
            <p className="text-[#555555] max-w-7xl mx-auto leading-[1.8] text-[15px]">
              Our ecommerce website developers have achieved perfection in using the best technologies to help you build an online store and create an environment that contributes to receiving high ROI.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiPenTool className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Ecommerce Website Design</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                You will get an attractive and eye-catching website design for your ecommerce business that will help you get the targeted potential customers. This will bring you more sales and higher revenue in the end.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTag className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Ecommerce Development</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                With the best web designing, we aim to develop your ecommerce business and make it mark a higher level by implementing the experts' suggestions into it. Collaborating with us will lead you to cross the unexpected sales.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTarget className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">B2B Ecommerce</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Serving our clients with world-class ecommerce solutions also includes solutions for business-to-business ecommerce. Nowadays, the phenomenon of B2B is spreading very fast, and we truly believe in helping our clients join the race.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiShoppingCart className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">B2C Ecommerce</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Clients are guided to convert their ecommerce paths towards the business-to-consumer phase. This will bring them higher sales as compared to other strategies as it is directly related to interacting with the customers.

              </p>
            </div>


          </div>
        </div>
      </section>


      <section className="py-16 bg-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/image-4.webp"
                alt="Our Web Solutions Are Inclusive Of The Most Advanced Tools And Tactics"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Our Web Solutions Are Inclusive Of The Most Advanced Tools And Tactics
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="text-white leading-relaxed mb-3 ">
              An ecommerce business's success is totally dependent on two factors, mainly ecommerce website development tools and an expert by your side. We have discussed the latter one, so let's focus on the prior one.
            </p>
            <ul className="text-white list-disc list-inside">
              <li>WordPress for the content management system and design and development.</li>
              <li>Adobe Magento for commerce and community services.</li>
              <li>WooCommerce for WordPress + Ecommerce.</li>
              <li>Shopify for designing and development.</li>
              <li>Drupal for the content management system.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Technologies We Are Highly Specialized In */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Technologies We Are Highly Specialized In
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
            <p className="text-[#555555] max-w-3xl mx-auto leading-relaxed mt-6 mb-3 text-[15px]">
              Working with our experts in ecommerce website development services makes it easy for you to get the best in hand with no extra effort to put in.
            </p>
            <p className="text-[#555555] max-w-4xl mx-auto leading-relaxed text-[15px]">
              We work to deliver{" "}
              <span className="text-[#c7010c] font-medium">scalable and functional</span>{" "}
              ecommerce web development services to our clients that drive more sales and functions well. We make sure to make your ecommerce website easily navigable, manageable,{" "}
              <span className="text-[#c7010c] font-medium">mobile and desktop friendly</span>, and{" "}
              <span className="text-[#c7010c] font-medium">SEO optimized</span>{" "}
              to help you grow in the market in a very less time.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Shopify */}
            <div className="border border-gray-200 rounded-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="h-[120px] flex items-center justify-center mb-6">
                <img
                  src="/images/services/shopify-icon.webp"
                  alt="Shopify"
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#c7010c] mb-3">
                Shopify Development
              </h3>
              <p className="text-[#555555] text-[14px] leading-relaxed">
                You can choose to work with our Shopify experts in Canada to help you develop an online store by using this platform, a popular and flexible one for everyone.
              </p>
            </div>

            {/* WooCommerce */}
            <div className="border border-gray-200 rounded-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="h-[120px] flex items-center justify-center mb-6">
                <img
                  src="/images/services/wo-commerce-icon.webp"
                  alt="WooCommerce"
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#c7010c] mb-3">
                WooCommerce Development
              </h3>
              <p className="text-[#555555] text-[14px] leading-relaxed">
                You can also create one on this open-source shopping platform. It has many features and plug-ins, making it the most popular platform for ecommerce.
              </p>
            </div>

            {/* Magento */}
            <div className="border border-gray-200 rounded-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="h-[120px] flex items-center justify-center mb-6">
                <img
                  src="/images/services/magento-logo-icon.webp"
                  alt="Magento"
                  className="max-h-[90px] w-auto object-contain"
                />
              </div>
              <h3 className="text-[17px] font-bold text-[#c7010c] mb-3">
                Magento Development
              </h3>
              <p className="text-[#555555] text-[14px] leading-relaxed">
                This is a high performing and one of the most popular ecommerce platforms for creating an online store. Qualities that make it attractive include robustness, enterprise-level features, and many more.
              </p>
            </div>

            {/* OpenCart */}
            <div className="border border-gray-200 rounded-sm p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="h-[120px] flex items-center justify-center mb-6">

                <img
                  src="/images/services/open-cart-icon.webp"
                  alt="OpenCart"
                  className="max-h-[90px] w-auto object-contain"
                />

              </div>
              <h3 className="text-[17px] font-bold text-[#c7010c] mb-3">
                OpenCart Development
              </h3>
              <p className="text-[#555555] text-[14px] leading-relaxed">
                This platform is the best for its uniqueness, and creativity, i.e., a combination of features as well as a greater performance.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ClientSlider title="We Are Long Term Partners" clients={clientsData2} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
