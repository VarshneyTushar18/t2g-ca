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
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";


export const metadata = {
  title: "Shopify Expert Toronto @Supercharge Your Shopify Store",

  description:
    "Shopify Expert Toronto to Boost Your Business Online. ✔Hire Top Shopify Developers ✔Shopify Certified agency ✔3000+ Successful Projects ✔Contact Now",

  keywords: [
    "Shopify development agency",
    "shopify development services",
    "best shopify web development company",
    "shopify website developer",
    "shopify expert toronto",
    "shopify development company toronto",
    "shopify website development Ottawa",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/shopify-development-services",
  },

  openGraph: {
    title: "Shopify Expert Toronto @Supercharge Your Shopify Store",

    description:
      "Shopify Expert Toronto to Boost Your Business Online. ✔Hire Top Shopify Developers ✔Shopify Certified agency ✔3000+ Successful Projects ✔Contact Now",

    url: "https://tech2globe.ca/shopify-development-services",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },

  other: {
    "article:publisher":
      "https://www.facebook.com/tech2globe.software",

    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
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
  { id: 2, name: 'Clutch', logo: 'images/clients/t2g-clutch.png' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.png' },
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
    id: 3,
    letter: "LK",
    name: "Lucy Kelly",
    subname: "E-commerce Manager",
    text: "Although I had a little problem, Tech2Globe's team took the time to research the problem, identify the flaw, and then repair it. Their WooCommerce developer made things simple for me and remained late so they could be on a call with me to address the problem, even though they were halfway around the world. This was something I valued. They understood my lack of technical knowledge while they worked to find a solution. I'm grateful to Tech2Globe "
  },
];


const faqsData = [
  {
    question:
      "How might Shopify aid in the expansion of my online shop?",
    answer: `
      <p>
        Shopify provides a comprehensive marketing suite that enables companies to grow quickly and attract the attention of their target market.
        Numerous SEO capabilities are available on the platform, including editable headlines, titles, and meta tags, which can improve your website's position in search engine results.
        Customers can provide product reviews, which contribute to the trustworthiness of your company.
      </p>
    `,
  },

  {
    question:
      "How much does it cost to create an online store by your Shopify website developer?",
    answer: `
      <p>
        The price of developing a Shopify store varies depending on the project's scope, the complexity involved,
        the number of features to be integrated, the project's size, the developers' location, etc.
        Obtain the most accurate cost estimate for your project by contacting our Shopify expert Toronto.
      </p>
    `,
  },

  {
    question:
      "Are there specialised Project Managers available for the chosen Shopify development services?",
    answer: `
      <p>
        It's optional to engage a dedicated project manager, and you can do so according to the needs of your project.
        We'll always be by your side, together with the development team.
        We will designate a temporary PM to deal with your problems if you encounter difficulties.
      </p>
    `,
  },

  {
    question:
      "What do you provide as a Shopify development agency that others don't?",
    answer: `
      <p>
        Here are the two reasons that make Tech2Globe different, as the top Shopify development agency,
        from other Shopify service providers.
      </p>

      <ul>
        <li>
          We know how to deploy a dedicated Shopify development team for our clients.
          Our Shopify expert Toronto follows transparent processes, employs cutting-edge tools,
          and offers a performance-based compensation package, making us a stellar Shopify development company in Canada.
        </li>

        <li>
          We are committed to assigning the best talent for your project.
          Our Shopify expert Toronto undergoes a stringent vetting process before their selection.
        </li>
      </ul>
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Store Development For Shopify",
    description:
      "Partner with a professional Shopify website developer to quickly begin the setup and configuration of your Shopify store. You may accomplish your eCommerce goals more quickly than ever with the help of our specialised Shopify store development solutions.",
    icon: <FiShoppingBag size={32} color="#ffffff" />,
  },

  {
    id: 2,
    title: "Theme Development for Shopify",
    description:
      "When you choose Tech2Globe, our talented team of Shopify expert Toronto works with you to enhance the visual appeal of your Shopify online store.",
    icon: <FiImage size={32} color="#ffffff" />,
  },

  {
    id: 3,
    title: "App Development for Shopify",
    description:
      "In addition to constructing Shopify websites, we also have extensive experience creating mobile applications that support seamless m-commerce. When you work with our Shopify experts Toronto, we create custom mobile apps that function flawlessly on all platforms and devices.",
    icon: <FiSmartphone size={32} color="#ffffff" />,
  },

  {
    id: 4,
    title: "Shopify Support And Maintenance",
    description:
      "Being the best Shopify web development company, we provide our customers with end-to-end Shopify maintenance and support services after development, whether they need assistance with bug fixing and performance optimization or want to update their Shopify platform to the most recent version.",
    icon: <FiTool size={32} color="#ffffff" />,
  },

  {
    id: 5,
    title: "Shopify Migration Services",
    description:
      "Partnering with a reputable Shopify development services provider will help you seamlessly convert from any eCommerce shop development platform to Shopify. When we work together, there will be little to no downtime when we move your web store to Shopify.",
    icon: <FiRefreshCcw size={32} color="#ffffff" />,
  },

  {
    id: 6,
    title: "Third-Party Integration Services",
    description:
      "Third-party integrations for your Shopify-powered eCommerce store's shopping cart, payment processors, shipping, social logins, APIs, QuickBooks, and other features will enhance its standard capabilities.",
    icon: <FiLink size={32} color="#ffffff" />,
  },
];


export default function ShopifyDevelopmentServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Shopify Development Company Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Shopify Development Services", href: "/shopify-development-services"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Shopify Development Services Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Create a profitable online store right away with our Shopify expert Toronto, they are as credible as Shopify itself! We provide a wide range of Shopify development services as the best Shopify web development company to assist you in creating a strong, scalable, sales-driven, and highly secure Shopify site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0000001a]  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            Leverage Shopify Platform For End-To-End
            ECommerce Solutions
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
          <p className="mb-3">The need for a platform is gaining hype where an online business may achieve success at one stop; and Shopify masters in this.<br />
            The Shopify platform is a vast domain that serves as a terrific chance for practically anyone who uses it, from giant companies to web developers or designers. E-commerce is expanding astoundingly as the line separating digital and physical companies blurs. Modern, digitally native businesses are experimenting with various emerging technologies, including voice commerce, headless commerce, and augmented reality-enabled online-to-offline (O2O) engagements. The globe is rapidly transforming into a storefront as online e-commerce platforms are transformed into experiential locales. Our Shopify development agency uses the platform's ecosystem to assist retailers with designing and developing online shops.<br />
            Even though Shopify is considered one of the top e-commerce platforms available today, store owners are constantly attempting to produce something distinctive, unique, and different in response to growing customer wants. This has made Shopify development services necessary for any brand looking to stand out the fierce competition! Creating an online business can take time and effort. Because of this, most companies use hosted platforms like Shopify. Even yet, Shopify is the best-hosted platform for creating an online store since it combines quality, variety, efficiency, and simplicity. This ultimately improves ROI and raises revenue for your business.<br />
            It's an ideal choice for businesses that provide products or services with minimal modifications. You can sell by creating a comprehensive Shopify website section based on the requirements of your business.</p>
        </div>

      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Your Are Served With The Best Of Our Services And Resources<br />
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              With its prominent features, Shopify has become a necessity for everyone, from start-ups to well-to-do giant businesses!
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>


      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              When You Opt For Shopify, You Reap Massive Benefits & Opportunities.<br />
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              Create a profitable online store right away with our Shopify expert Toronto, they are as credible as Shopify itself! We provide a wide range of Shopify development services as the best Shopify web development company to assist you in creating a strong, scalable, sales-driven, and highly secure Shopify site.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] text-center mb-4">
                You Get A Store That Can Match Your Needs.
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal text-center flex-grow">
                Compared to its competitors, Shopify is quite simple to operate. Unlike other platforms, which have a slight learning curve, it's pretty simple to set up. Both beginners or Shopify website developers can use Shopify.
              </p>

            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] text-center mb-4">
                Your Achievement Is Most Important.
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal text-center flex-grow">
                Shopify development company Toronto uses a wide range of qualified and modern themes to create aesthetically pleasing online enterprises. Working with developers and designers will provide your customers with a better UX and UI even when it already has basic themes.
              </p>

            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c]  text-center mb-4">
                Integrations
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal text-center flex-grow">
                With the flexibility to swiftly edit your Shopify website development Ottawa and connect it to third-party applications, you may add sophisticated features and customise functionality.
              </p>

            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              What Makes Us a Good Investment?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>As Tech2Globe Shopify development company Toronto is aware of your financial constraints, creating an online store that satisfies your customers' needs in a matter of minutes is no longer a burden for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                You Get A Store That Can Match Your Needs.
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We offer the best Shopify development services to provide you with precisely what you need to meet your growth objectives. As a top Shopify partner, we contribute knowledge, experience, and devotion to our services.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Your Achievement Is Most Important.
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Since the beginning of our Shopify development company, our seasoned team of talented Shopify developers has provided efficient e-commerce stores. You can trust our expertise to manage your Shopify project and ensure success.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Reliable And Consistent Technical Support
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                E-commerce stores don't start working until after they are launched. We point you in the appropriate route for increasing your store's ROI. Our team provides dependable end-to-end support from conception through launch.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Numerous Years Of Strong Experience
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Being the best Shopify development company Toronto we know the importance of developing your brand's online presence and work to ensure it takes place. We are a dependable service provider because of our proficiency in Shopify web designing, development, modification, and integration.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>


            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Finding A Professional With Ease
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We provide flexible engagement models to hire our Shopify development agency at an affordable rate and follow your project requirements as part of our Shopify website design services, including development. You may design, administer, and improve your Shopify store with our knowledgeable team of Shopify specialists in Canada.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Effective Solutions
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Our Shopify website developers use Shopify's extensive capabilities with our creativity and knowledge to create cutting-edge Shopify ecommerce stores that are aesthetically pleasing and functionally powerful. Contact us right away for complete Shopify services and solutions!
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            Hundreds Of Companies Rely On Tech2Globe Canada, Shopify Development Company Toronto
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
          <p className="mb-3">Are the stats fascinating? Companies from more than 20 nations have benefited from Shopify's empowerment of online retail brands. Shopify expert Toronto is what you need if you have ambitious ideas for launching your online store. With Shopify, everything is simple, from setting up your online store to running it and generating sales.</p>
        </div>

      </section>


      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              How Do We Build A Secure & Feature-Rich Shopify Ecommerce Store?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              Tech2Globe team obeys a streamlined workflow to deliver fast and affordable content marketing services in the most professional manner saving our client's valuable time, effort and money!
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Shopify expert Toronto</h3>
              <p className="workflow-desc">
                at Tech2Globe can easily immerse into the giant sea of your store requirements without harming the true nature of your business!
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Maintaining Quality Standards</h3>
              <p className="workflow-desc">
                When building a Shopify store with many features, we follow strict standards and use sophisticated coding techniques.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Ensure Performance & Speed</h3>
              <p className="workflow-desc">
                To guarantee maximum conversions, our skilled Shopify website designers build quick, and user-friendly eCommerce sites.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Mobile-Friendly & Responsive</h3>
              <p className="workflow-desc">
                To establish a store optimised for mobile use and utterly responsive across all browsing platforms, rely on the skills of creative website designer Shopify.
              </p>
            </div>
            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <h3 className="workflow-title">Clear Call to Action Is Present</h3>
              <p className="workflow-desc">
                To communicate a Call to Action, we design and construct compelling clickable buttons for the Shopify Store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers That Validate Our Efforts */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-3">
              The Design & Development Process For Shopify
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-sm md:text-base">
              Our technical team can handle complex, multi-technology, and multidisciplinary Shopify development store projects.
              Hire our Shopify website development Ottawa professionals, who offer customizable engagement models tailored to your company's needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">01</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[100px]">Initiative Requirement</span>
            </div>

            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">02</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[100px]">Business Evaluation</span>
            </div>

            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">03</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[120px]">Design and development of UI/UX</span>
            </div>

            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">04</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[100px]">Testing and quality control
              </span>
            </div>
            <div className="flex items-center gap-3 px-8 py-4">
              <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">05</span>
              <span className="text-sm md:text-base text-[#444444] font-medium max-w-[100px]">Support and Upkeep
              </span>
            </div>
          </div>
        </div>
      </section>

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
