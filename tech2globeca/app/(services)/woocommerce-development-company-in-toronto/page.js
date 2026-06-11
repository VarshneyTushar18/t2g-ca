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
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";


export const metadata = {
  title:
    "WooCommerce Development Toronto @Optimize Your WooCommerce Store",

  description:
    "Woocommerce Development Toronto to Boost Your Business Online. ✔End-To-End Web Design Solutions ✔Award Winning Web Design Company ✔5000+ Successful Projects ✔Contact Now",

  keywords: [
    "Woocommerce Development Agency",
    "Woocommerce Development Services",
    "WooCommerce developer",
    "WooCommerce Development Toronto",
  ],

  alternates: {
    canonical:
      "https://tech2globe.ca/woocommerce-development-company-in-toronto",
  },

  openGraph: {
    title:
      "WooCommerce Development Toronto @Optimize Your WooCommerce Store",

    description:
      "Woocommerce Development Toronto to Boost Your Business Online. ✔End-To-End Web Design Solutions ✔Award Winning Web Design Company ✔5000+ Successful Projects ✔Contact Now",

    url: "https://tech2globe.ca/woocommerce-development-company-in-toronto",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },

  other: {
    "article:publisher":
      "https://www.facebook.com/tech2globe.software",
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
  { id: 2, name: 'Clutch', logo: 'images/clients/t2g-clutch.webp' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.webp' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.webp' },
];



const testimonialsData = [
  {
    id: 1,
    letter: "EV",
    name: "Elina Victoria",
    subname: "Business Owner",
    text: "Make sure you purchase any custom WooCommerce plugins you require from WP Tech2Globe WooCommerce Development Agency. They are the best on the market and will help you add every feature you need for a WooCommerce website that works well. I appreciate their support and development teams, particularly for quickly attending to my demands. I'm content and will undoubtedly use your services once more. I greatly appreciate it. "
  },
  {
    id: 2,
    letter: "JC",
    name: "Julie Corey",
    subname: "Marketing Director",
    text: "The excellent design team and prompt completion of all duties and demands. Thanks to their knowledgeable guidance, they have improved the results of our Google searches."
  },
  {
    id: 2,
    letter: "LK",
    name: "Lucy Kelly",
    subname: "E-commerce Manager",
    text: "Although I had a little problem, Tech2Globe's team took the time to research the problem, identify the flaw, and then repair it. Their WooCommerce developer made things simple for me and remained late so they could be on a call with me to address the problem, even though they were halfway around the world. This was something I valued. They understood my lack of technical knowledge while they worked to find a solution. I'm grateful to Tech2Globe "
  },
];


const faqsData = [

  {
    question:
      "Why Is Tech2Globe The Best WooCommerce Development Agency For Me?",
    answer: `
      
        You receive just that from Tech2Globe WooCommerce development agency. 
        We have helped numerous firms reach their goals, scale their operations, 
        and give their businesses an advantage over the competition thanks to our 
        more than nine years of experience, the team of more than 250 marketers 
        and WooCommerce developers, and 7000 global clients.
      
    `,
  },
  {
    question:
      "What Steps Should I Take To Begin My WooCommerce Development Project?",
    answer: `
      
        We'll call you if you schedule a meeting with one of our executives. 
        Please let us know all of your requirements as well as your preferred 
        level of knowledge and experience. Tech2Globe, a reputable WooCommerce 
        development agency, will provide you with the most excellent tools and 
        assistance to get going.
      
    `,
  },
  {
    question:
      "I Need Content For My WooCommerce Store; Can You Help?",
    answer: `
      
        Yes, we also offer services for writing content. But remember that you 
        must see our price chart or speak with one of our specialists directly 
        if you want a more accurate estimate of the services. To use our excellent 
        writing services, you need to obtain a separate proposal for the content 
        or a combination proposal.
      
    `,
  },
  {
    question:
      "What Further Advantages Do WooCommerce Websites Provide Me?",
    answer: `
      
        Here are the two reasons that make Tech2Globe different, as the top 
        Shopify development agency, from other Shopify service providers.
      

      <ul>
        <li>
          We know how to deploy a dedicated Shopify development team for our clients. 
          Our Shopify expert Toronto follows transparent processes, employs cutting-edge 
          tools, and offers a performance-based compensation package, making us a stellar 
          Shopify development company in Canada.
        </li>

        <li>
          We are committed to assigning the best talent for your project. 
          Our Shopify expert Toronto undergoes a stringent vetting process 
          before their selection.
        </li>
      </ul>
    `,
  },
  {
    question:
      "On My WooCommerce Website, How Many Products Can I List?",
    answer: `
      
        By providing highly scalable eCommerce sites that support an endless 
        number of products, we are dedicated to assisting you in listing 
        infinite products. The disadvantage of having several product listings 
        is that it may cause the site's performance to lag.
      
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Commitment To Quality",
    description:
      "We can meet client requirements by offering unwavering quality. Our work for our clients is evidence of our steadfast dedication to meeting deadlines.",
    icon: <FiLayout size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Budget-Friendly Solutions",
    description:
      "We know that firms have a budget for expansion projects. Because of this, you'll find that our services are affordable.",
    icon: <FiCode size={32} color="#ffffff" />,
  },
];


export default function WoocommerceDevelopmentCompanyInToronto() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="WooCommerce Development Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Woocommerce Development Company in Toronto", href: "/woocommerce-development-company-in-toronto"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best WooCommerce Development Agency Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Enjoy the most innovative and reliable eCommerce website solutions to give your customers an exceptional website experience
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Tech2Globe WooCommerce development agency works to match your eCommerce needs with the appropriate technologies as the most reputable among others in Canada. With a highly responsive & user-friendly online store, we concentrate on increasing your sales. WooCommerce, the viral WordPress CMS's e-commerce plugin significantly improves the User Experience (UX) because it is quick and simple to move between displays, select products, make payments, and complete the checkout process. Get in touch with Tech2Globe Canada if you're seeking WooCommerce development services for an eCommerce store.<br />
                WooCommerce Development is an add-on that facilitates the creation of more effective eCommerce websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            Key Highlights
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
          <p className="mb-3">With years of expertise, we are always eager to offer the best WooCommerce development services to our clients.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">

            <ul className="hrline">
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Certified WooCommerce Professionals</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Start your project within 48 hours.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Savings on Development Costs of Up to 70%</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Free Consultation & Flexible Hiring Models</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> 98% Client Retention Rate</li><hr />
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/WOW-Factor.webp"
                alt="Our Accomplishments"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              We Offer You The Best<br />WooCommerce Development Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>To produce a bug-free solution, we adhere to strict quality checks with every WooCommerce development project.
              Our cost-effective and business-oriented services will create an online store for your company that is expandable, mobile-friendly, and compliant with the greatest security standards. This will help your company reach new heights of success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Development & Customization
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Keeping a static website will prevent your company from expanding in the ever-expanding digital world. You must adjust to the ongoing adjustments for your store due to the shifting technological trends. Additionally, consumer preferences and methods of customer service are evolving daily. Therefore, adapting to customer needs is essential in these situations if you want to bring transition to your company.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Creation Of WooCommerce Templates
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                You may integrate the required WooCommerce theme into your website and application. A great theme is essential for constructing a WooCommerce store to attract customers. We provide our customers with a number of themes, and they can choose the category they want. Whether viewed on a desktop or mobile, WooCommerce development offers a seamlessly responsive theme.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Development Of Mobile Apps For WooCommerce
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                A large section of well-known business entities have used mobile applications from Tech2Globe and are immensely satisfied with the quality! Our WooCommerce developer works with you to create a mobile application for your website that makes it easier for users to navigate. Additionally, it enables customers to browse your store from anywhere.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Migration Assistance
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                It is evident from the client's potential that they will eventually need to upgrade to the newest technology. No matter what platform you now use for your store, you are always welcome to use WooCommerce development services to set up a store there. Customers can use advanced features and functions in a better method.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>


            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Development Of PWA
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Every company aims to give their customers a better experience, no matter how big or small. For a better app experience, the store owner now can integrate headless PWA technology into their store. PWA technology initiates web compatibility to provide clients with an experience similar to a native app. The most crucial technology is headless technology, particularly for enterprise-based applications.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                API Development
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                The software and eCommerce industries both use APIs daily. APIs, or application programming interfaces, are the main driving force behind the creation of all mobile applications. They can be found in practically every area of the software industry. From booking a bus or rail to performing a routine game, some APIs are always at work in the background to control that particular capability or operation.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Experience The High-Quality Services From Our WooCommerce Website Specialists
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              Tech2Globe has been creating online stores with the WooCommerce platform for more than a decade.
              We have the cutting-edge infrastructure and a thorough understanding of the WooCommerce API to guarantee that the entire development process produces successful outcomes for your online store. We have a skilled team of WooCommerce developers who are familiar with a wide range of e-commerce sectors.<br />
              Our expertise enables us to examine, identify, and fix problems quickly. We keep our clients informed at every stage of the WooCommerce website creation process for e-commerce stores, fashion, or jewellery. We guarantee that there are no communication gaps and that we are fulfilling our client's expectations.<br />
              Certified WooCommerce Developers: Our WooCommerce development Toronto consists of professionals that have been working for years and this is one of the reasons why many reputable online merchants and retailers value our professionalism.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>

      {/* Numbers That Validate Our Efforts */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-3">
              Numbers That Validate Our Efforts
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-[#c7010c] text-sm md:text-base">
              Reliability and knowledge are qualities you seek in an operating partner, and we know how it can be fulfilled!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">2.2x</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[100px]">SEO traffic increased</span>
            </div>

            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">65%</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[100px]">more sales/leads</span>
            </div>

            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">1.6</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[120px]">User engagement increased</span>
            </div>

            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">157%</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[100px]">PPC ROI Improved</span>
            </div>
          </div>
        </div>
      </section>


      <ClientSlider title="We Are Recognized, Certified And Award-Winning Partners Of" clients={clientsData3} />

      <Testimonials testimonials={testimonialsData} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
