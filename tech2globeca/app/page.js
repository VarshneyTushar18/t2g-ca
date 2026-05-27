import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FaqContact from "@/components/FaqContact";
import ClientSlider from "@/components/ClientSlider";
import ServiceCards from "@/components/ServiceCards";
import ExpertiseSection from "@/components/ExpertiseSection";
import Industries from "@/components/Industries";
import { FiArrowUpRight, FiTarget } from 'react-icons/fi';
import {
  FiDatabase,
  FiMonitor,
  FiSmartphone,
  FiShoppingBag,
  FiPenTool,
  FiShoppingCart,
  FiCheckCircle,
  FiBook,
  FiHome,
  FiGift,
  FiBookOpen,
  FiTool,
  FiAward,
  FiUsers,
  FiRefreshCw,
  FiSearch,
  FiPhone,
  FiMail
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils } from "react-icons/fa";
import Image from "next/image";

export const metadata = {
  title: "Top Digital Marketing Agency in Canada & Web Development Services",
  description:
    "Tech2Globe Canada is an award-winning digital marketing agency in Toronto. We specialize in eCommerce solutions, web development, and data management services and we delivered more than 1500+ projects.",
  keywords: [
    "online marketing agency in Toronto",
    "digital marketing agency in Canada",
    "ui ux design services provider",
    "Amazon marketing services",
    "web development services",
    "ecommerce website development company",
    "mobile app development services",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Top Digital Marketing Agency in Canada & Web Development Services",
    description:
      "Tech2Globe Canada is an award-winning digital marketing agency in Toronto...",
    url: "https://www.tech2globe.ca/",
    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",
    images: [
      {
        url: "https://tech2globe.ca/images/logo.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Tech2Globe: Online Marketing | Ecommerce & IT Consulting | BPO/KPO",
    description:
      "Tech2Globe is Web Portal & Software Development Company...",
    images: ["https://tech2globe.ca/images/tech2globe.jpg"],
  },
};

const expertiseData = [
  {
    id: 1,
    title: "Mobile App Development Specialists",
    description:
      "Helping businesses around the world with the precision of human intelligence and the strength of automation. We are a trusted name in the mobile app development options available all across!",
    image: "/images/Mobile-App.jpg",
    list: [
      "5000+ successful project deliveries with almost 100% client retention.",
      "We have brought in the best mobile app developers for each of our projects.",
      "Our google certified professionals have got us hundreds of happy clients.",
      "On-time delivery and quality assurance is a part of our core strategies.",
      "Increased the company's revenue by over 86% with our mobile app development services."
    ],
    link: "/mobile-app-development-services"
  },
  {
    id: 2,
    title: "Digital Marketing Specialists",
    description:
      "Being the best digital marketing agency Toronto, we believe in embracing the digital era and staying ahead of all trends. We employ revolutionary tactics to help your brand and business develop digitally.",
    image: "/images/Digital-Marketing.jpg",
    list: [
      "We have delivered over 7000+ successful projects.",
      "Not only during the project but also we offer tracking reports post completion.",
      "Generated satisfactory leads and made sales for hundreds of our clients.",
      "Content marketing, site optimisation, or competitor analysis we’ve yielded 100% results.",
      "100% client retention as a result of our precise outcomes."
    ],
    link: "/digital-marketing-agency"
  },
  {
    id: 3,
    title: "Ecommerce Services Expertise",
    description:
      "We look forward to assisting you on the path to success with our best ecommerce solutions for the optimization of your store and better journey of your websites.",
    image: "/images/Ecommerce-Development.jpg",
    list: [
      "Our certified developers and ecommerce consultants onboard have years of industry experience.",
      "We helped over thousands of businesses improve their stalled functioning.",
      "Tech2Globe has been the perfect partner for startups requiring initial guidance.",
      "With advertising tools, videos, infographics, and others we targeted 100% ROI.",
      "Our Ecommerce website development services provided complete flexibility to customers."
    ],
    link: "/ecommerce-website-development"
  },
  {
    id: 4,
    title: "Web Development Solutions",
    description:
      "We have imaginative, experimental, and inventive minds and that's how we create quite amazing web designs. We are on a mission to deliver results that not only fits search engines but also human minds.",
    image: "/images/Web-Development.jpg",
    list: [
      "We helped over 1000+ websites rank up in search engine results.",
      "Our top notch graphics helped our clients to entice their new customers.",
      "Clients have experienced sudden jumps in their sales record.",
      "We are a 5 star business on search engines.",
      "Information on websites is easily accessible and navigable."
    ],
    link: "/web-development-agency"
  },
  {
    id: 5,
    title: "Data Entry Expertise",
    description:
      "We provide data support to businesses that encourage organisational growth. We have a global customer base with over 96% customer retention rate for an offshore data entry business.",
    image: "/images/data-entry.png",
    list: [
      "Medical data entry services have increased productivity and profitability.",
      "Accurate and high-quality data entry services with utmost precision.",
      "Reduced data loss and increased accessibility for almost 95%.",
      "99% data accuracy and 100% data security.",
      "Minimal procedural delays ensuring efficiency."
    ],
    link: "/medical-data-entry-services"
  }
];

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

const stats = [
  {
    id: 1,
    icon: FaSmile,
    value: "14+",
    label: "YEARS EXPERIENCE",
  },
  {
    id: 2,
    icon: FaLayerGroup,
    value: "7K+",
    label: "SUCCESSFUL PROJECTS",
  },
  {
    id: 3,
    icon: FaGlobe,
    value: "25+",
    label: "CUSTOMER BASED COUNTRIES",
  },
  {
    id: 4,
    icon: FaComments,
    value: "99%",
    label: "CUSTOMER SATISFACTION SCORE",
  },
];

const servicesData = [
  {
    id: 1,
    title: "BPO/KPO/Data Management",
    description:
      "Specifically tailored KPO, BPO and Data management solutions to substantially reduce costs with the assistance of specialized personnel smoothly executing the process. By entrusting your strategies to our team of proficient experts, you can discover new and improved ways to be more efficient and redistribute your resources as needed. This, in turn, boosts productivity and efficiency.",
    icon: <FiDatabase className="text-white text-3xl" />
  },
  {
    id: 2,
    title: "Online Marketing",
    description:
      "We are the top digital marketing agency in Canada, with the right approach to digital communications joined-up in a digital world where everything is connected. Our strategy combines creativity and technology, bringing together a wide range of digital marketing disciplines—from mobile and adaptable web design to search and social media campaigns — under one roof.",
    icon: <FiMonitor className="text-white text-3xl" />
  },
  {
    id: 3,
    title: "Web & App Development",
    description:
      "Cost-efficient development backed by advanced frameworks and automation specific to each business need. We provide customized web development services aligned with your business objectives and help you achieve optimum success. Our approach to web and app development combines efficiency and effectiveness, allowing you to get the most value out of your investment.",
    icon: <FiSmartphone className="text-white text-3xl" />
  },
  {
    id: 4,
    title: "Amazon Services",
    description:
      "We excel at understanding and working with Amazon's algorithms to create a highly functioning selling experience for our clients. We have a team of skilled Amazon marketing services experts who are proficient in navigating these complex algorithms and leveraging them to the advantage of our clients.",
    icon: <FiShoppingBag className="text-white text-3xl" />
  },
  {
    id: 5,
    title: "UI/UX & Graphic Designing",
    description:
      "Smooth and intuitive user interaction aligned to center on resolving problems with the UX vision and approach. The goal of our UI/UX design services is to create a positive experience for users that leads to increased conversion rates, reduced maintenance costs, and a consistent user experience.",
    icon: <FiPenTool className="text-white text-3xl" />
  },
  {
    id: 6,
    title: "Ecommerce Development",
    description:
      "Breaking free from brick-and-mortar and digitizing your business with top-notch advanced technologies to drive customer satisfaction. We use both new and tried-and-true methods to create high-performance eCommerce websites with all essential tools for an efficient online store.",
    icon: <FiShoppingCart className="text-white text-3xl" />
  }
];

const faqsData = [
  {
    question: "What is Tech2Globe all about?",
    answer: "Tech2Globe is an IT consulting and software development company focused on delivering innovative solutions to help businesses grow in the digital landscape."
  },
  {
    question: "What are the services that Tech2Globe offers?",
    answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, digital marketing, e-commerce solutions, and dedicated hiring."
  },
  {
    question: "How will my project be handled at Tech2Globe?",
    answer: "Your project will be handled by a dedicated team of professionals with regular updates, transparent communication, and agile methodologies to ensure timely delivery."
  },
  {
    question: "How about security at Tech2Globe?",
    answer: "We prioritize security and follow industry best practices, including NDA agreements, secure coding standards, and data protection protocols to ensure your projects are safe."
  },
  {
    question: "I want to outsource to Tech2Globe. What should I do?",
    answer: "Simply contact us through this form with your requirements, and our business development team will get back to you shortly to discuss the next steps and provide a consultation."
  }
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

const featuredServicesData = [
  {
    id: 1,
    title: "360° Digital Marketing Services",
    items: [
      { name: "Hire Digital Marketing Agency Canada", link: "/digital-marketing-agency" },
      { name: "Best SEO Agency Toronto", link: "/search-engine-optimization" },
      { name: "PPC Management Services", link: "/ppc-management-services" },
      { name: "Professional Local Seo Services", link: "/local-seo-services" },
      { name: "Affordable Social Media Marketing", link: "/social-media-marketing" }
    ],
    bgColor: "bg-[#e5e5e5]",
    textColor: "text-[#222222]",
    itemTextColor: "text-gray-600"
  },
  {
    id: 2,
    title: "Amazon Store and Setup Services",
    items: [
      { name: "Amazon Marketing Services Toronto", link: "/amazon-marketing-services" },
      { name: "Amazon Consultancy Services", link: "/amazon-consultancy-services" },
      { name: "Amazon FBA Consulting Services", link: "/amazon-fba-consulting" },
      { name: "Hire Amazon SEO Consultant", link: "/hire-amazon-seo-consultant" },
      { name: "Amazon Advertising Management", link: "/amazon-advertising-management" }
    ],
    bgColor: "bg-[#c7010c]",
    textColor: "text-white",
    itemTextColor: "text-white/90"
  },
  {
    id: 3,
    title: "Outsource Data Management Services",
    items: [
      { name: "Medical Data Entry Services", link: "/medical-data-entry-services" },
      { name: "Restaurant Data Menu Entry", link: "/restaurant-data-entry-services" },
      { name: "Product data entry services Mississauga", link: "/product-data-entry-services" },
      { name: "Get Professional B2B Lead Generation", link: "/b2b-lead-generation-services" },
      { name: "Certified Translation Services", link: "/translation-services" }
    ],
    bgColor: "bg-[#e5e5e5]",
    textColor: "text-[#222222]",
    itemTextColor: "text-gray-600"
  }
];


const insightsData = [
  {
    id: 1,
    title: "6 Advantages of Social Media Marketing Services",
    excerpt: "Remember when everyone believed social media was a passing fad? Its strength has become evident, and it is just growing, with no end in sight...",
    image: "/images/blogs/6-Reasons-blog.png",
    link: "/blog/6-advantages-of-social-media-marketing-services"
  },
  {
    id: 2,
    title: "Top 5 Website Development Hacks You Need To Know",
    excerpt: "Despite the fact that people spend a lot of time on their phones, web pages are still relevant! On the contrary, new CSS specifications and UX trends have...",
    image: "/images/blogs/10-VS-4.jpg",
    link: "/blog/top-5-website-development-hacks"
  },
  {
    id: 3,
    title: "Why Should I Hire A Digital Marketing Agency",
    excerpt: "Are you truly getting the most out of your marketing efforts in this post-pandemic era? A rapidly transforming digital era has begun, and it necessitates a shifting manner...",
    image: "/images/blogs/10-VS-2.jpg",
    link: "/blog/why-should-i-hire-a-digital-marketing-agency"
  }
];

const caseStudiesData = [
  {
    id: 1,
    title: "SEO SERVICE RESULTS",
    icon: <FiSearch size={64} className="text-black" />,
    stats: [
      { label: "Organic Traffic", value: "+700%" },
      { label: "Online Leads", value: "+430%" }
    ],
    description: "Tech2Globe used SEO to increase the overall traffic to our Aquatech project website by +700% and along with the new CRO (Conversion rate optimization) focused Website were able to increase online leads by over +430%.",
    link: "/case-study/seo-service-results"
  },
  {
    id: 2,
    title: "DATA MANAGEMENT SERVICES",
    icon: <FiDatabase size={64} className="text-black" />,
    stats: [
      { label: "Industries", value: "+30" },
      { label: "Companies", value: "+500" }
    ],
    description: "Tech2Globe's data management experts can help you with our data entry services and lower your burden. They will scan and categorize the originals in order to convert physical documents into digital files.",
    link: "/case-study/data-management-services"
  },
  {
    id: 3,
    title: "ECOMMERCE MARKET PLACES",
    icon: <FiShoppingCart size={64} className="text-black" />,
    stats: [
      { label: "Traffic", value: "+780%" },
      { label: "Conversion", value: "+660%" }
    ],
    description: "Built up the goodwill on the online marketplace within the targeted date and client appreciated our efforts and a committed team with expertise were necessary to accomplish all tasks within TAT & deliver the assignment.",
    link: "/case-study/ecommerce-market-places"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Header />
      {/* Main page content goes here */}

      <section className="relative w-full min-h-[52vh] sm:min-h-[62vh] lg:min-h-[72vh] flex items-center justify-center text-center">

        <div className="absolute inset-0">
          <img
            src="images/Banner-Tech2Globe.jpg"
            alt="IT Solutions Banner"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8">

          <span className="inline-block bg-red-600 text-white 
                 text-[10px] sm:text-xs md:text-sm 
                 font-semibold tracking-widest uppercase 
                 px-3 py-1.5 sm:px-4 sm:py-2 
                 mb-4 sm:mb-6">
            Over a Decade of Experience
          </span>


          <h1 className="text-white font-semibold 
               text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
               leading-tight mb-4 sm:mb-6">
            IT SOLUTIONS
          </h1>

          <p className="text-gray-200 
              text-xs sm:text-sm md:text-base lg:text-lg 
              leading-relaxed 
              max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8">

            <span className="block sm:inline">
              Increase Visibility
            </span>

            <span className="hidden sm:inline mx-2 text-red-500">|</span>

            <span className="block sm:inline">
              Generate Relevant Quality Traffic
            </span>

            <span className="hidden sm:inline mx-2 text-red-500">|</span>

            <span className="block sm:inline">
              Reduce Advertising Spend
            </span>
          </p>

          <a href="#"
            className="inline-block bg-white text-gray-900 
              text-xs sm:text-sm md:text-base 
              font-semibold 
              px-5 py-2.5 sm:px-6 sm:py-3 
              rounded-full shadow-md 
              hover:bg-gray-200 transition duration-300">
            GET CONSULTATION
          </a>

        </div>
      </section>

      <ClientSlider title="" clients={clientsData} />

      <section className="bg-[#c7010c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
          py-[1.2rem] sm:py-[1.6rem] md:py-[1.6rem] lg:py-[1.6rem]">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                    gap-6 md:gap-8">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-center md:justify-start gap-3"
                >
                  {/* Icon */}
                  <Icon className="text-xl sm:text-2xl md:text-3xl flex-shrink-0" />

                  {/* Content */}
                  <div className="text-left">
                    <h3 className="font-semibold 
                             text-lg sm:text-xl md:text-2xl leading-tight">
                      {item.value}
                    </h3>

                    <p className="text-[10px] sm:text-xs md:text-sm 
                            tracking-wide leading-snug">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 sm:py-[2.4rem] md:py-[3.2rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Top Online Marketing And Web Development Agency In Toronto
            </h2>
            <div className="w-24 h-[2px] bg-red-600 mx-auto mt-3"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Image */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
              <Image
                src="/images/small-banner-home2.jpg" // replace with your actual image
                alt="Top Online Marketing And Web Development Agency In Toronto"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Tech2Globe as a reliable online marketing agency in Toronto implies the best online strategies and tactics for a leading-edge online presence of your brand. We help plan and execute online marketing approaches using data-driven decisions and creativity for integrated growth. As your growth partner, we work in collaboration with your brand team to engineer performance-based strategies for diverse services.
              </p>

              <p>
                We understand that every business is unique, and we take the time to get to know your brand, your goals, and your target audience. This allows us to create customized online marketing plans that are tailored to your specific needs. We are a group of highly trained web development services providers and marketing professionals with extensive expertise in developing and implementing online marketing campaigns for businesses of all sizes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#c7010c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                  py-[1.2rem] sm:py-[1.6rem] md:py-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Image 1 */}
            <div className="flex items-center justify-center">
              <img
                src="/images/google-5-star.png"
                alt="Google Rating"
                className="w-auto h-auto object-contain max-h-[64px] sm:max-h-[72px] md:max-h-[80px]"
              />
            </div>

            {/* Image 2 */}
            <div className="flex items-center justify-center">
              <img
                src="/images/clutch-5-star.png"
                alt="Clutch Rating"
                className="w-auto h-auto object-contain max-h-[64px] sm:max-h-[72px] md:max-h-[80px]"
              />
            </div>

            {/* Image 3 */}
            <div className="flex items-center justify-center">
              <img
                src="/images/upcity-5-star.png"
                alt="UpCity Rating"
                className="w-auto h-auto object-contain max-h-[64px] sm:max-h-[72px] md:max-h-[80px]"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                  py-[1.2rem] sm:py-[1.6rem] md:py-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Meet Our Founder
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
          </div>

          <div className="flex justify-center items-center">
            {/* Image 1 */}
            <div className="group relative w-[200px] h-[200px] mx-auto 
                bg-white p-5 rounded-full shadow-lg 
                flex items-center justify-center
                overflow-visible
                transition-[border-radius] duration-300 ease-out
                hover:rounded-2xl">

              {/* Image Wrapper */}
              <div className="absolute top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2
                  w-[140px] h-[140px]
                  transform-gpu
                  transition-transform duration-300 ease-out
                  group-hover:-translate-y-[105%] z-20">
                <img
                  src="/images/harpreet-singh-sethi.jpg"
                  alt="Harpreet Singh Sethi"
                  className="w-full h-full object-cover rounded-full 
                 shadow-md transform-gpu
                 transition-[border-radius] duration-300 ease-out
                 group-hover:rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-5 left-0 right-0 text-center
                  opacity-0 translate-y-4
                  transform-gpu
                  transition-all duration-300 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0">

                <h3 className="text-lg font-semibold text-gray-700">
                  Harpreet Singh<br />Sethi
                </h3>

                <p className="text-xs text-red-600 mt-1">
                  Founder & CEO
                </p>
              </div>

            </div>


          </div>
        </div>
      </section>

      <section className="pt-[3.2rem] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Our Complete Spectrum of Services
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
          </div>
        </div>
      </section>
      <ServiceCards services={servicesData} />

      {/* Packages Section */}
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

      {/* Featured Services Section */}
      <section className="py-[3.2rem] bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-[#222222]">
              Featured Services
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-[#c7010c] text-lg font-medium">
              Making Your Data Both Accessible and Actionable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-gray-100">
            {featuredServicesData.map((service) => (
              <div
                key={service.id}
                className={`${service.bgColor} p-8 md:p-12 flex flex-col h-full transition-all hover:z-10 hover:shadow-2xl duration-300 group`}
              >
                <h3 className={`text-2xl md:text-3xl font-semibold mb-8 ${service.textColor} leading-tight`}>
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 border-b border-black/5 pb-4 last:border-0 group/item">
                      <FiCheckCircle className={`mt-1 flex-shrink-0 ${service.id === 2 ? 'text-white' : 'text-gray-400'} group-hover/item:text-[#c7010c] ${service.id === 2 ? 'group-hover/item:text-black' : ''} transition-colors`} />
                      <a
                        href={item.link}
                        className={`text-sm md:text-[15px] font-medium ${service.itemTextColor} hover:text-[#c7010c] ${service.id === 2 ? 'hover:text-black' : ''} transition-colors`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExpertiseSection data={expertiseData} />

      <Industries />

      {/* Why Choose Section */}
      <section className="py-[3.2rem] lg:py-[4.8rem] bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Why Choose Tech2Globe Canada
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Proficient Team */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiUsers size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Proficient Team</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Experience phenomenal growth in your business with our seasoned experts holding years of experience in the industry.
              </p>
            </div>

            {/* Collaborative Process */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiRefreshCw size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Collaborative Process</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                As your growth partners, we work in collaboration with your in-house team and offer full transparency with start-to-end tracking.
              </p>
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiAward size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Industry Experience</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We have been in the industry for more than a decade now, which makes us a reliable partner for you with strong business acumen.
              </p>
            </div>

            {/* Technical Assistance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiTool size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Assistance</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We offer value-driven and straightforward assistance with a quick problem-solving attitude and efficient troubleshooting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
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

      {/* Case Studies Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Case Studies
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
              At Tech2Globe we believe not on instincts but on real-time output,
              so our customers trust us and we have a huge range of our case studies to display.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => (
              <div key={study.id} className="border border-gray-100 flex flex-col h-full bg-white transition-all hover:shadow-lg">
                {/* Icon Area */}
                <div className="bg-[#f2f2f2] py-12 flex items-center justify-center">
                  {study.icon}
                </div>

                {/* Title Bar */}
                <div className="bg-[#c7010c] py-4 px-6 text-center">
                  <h3 className="text-white font-semibold text-lg uppercase tracking-wider">
                    {study.title}
                  </h3>
                </div>

                {/* Stats & Description */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="grid grid-cols-2 gap-4 mb-6 border-b border-gray-100 pb-6">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[#c7010c] text-3xl font-semibold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-500 text-xs uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {study.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={study.link}
                      className="text-gray-900 text-xs font-semibold uppercase tracking-widest flex items-center hover:text-[#c7010c] transition-colors group"
                    >
                      Read More About Case Study
                      <span className="ml-2 text-[#c7010c] transform transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights and News Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Insights And News
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsData.map((post) => (
              <div key={post.id} className="bg-white group transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                {/* Image Wrapper */}
                <div className="relative h-54 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Circular Link Button with Arrow */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex justify-end">
                    <a
                      href={post.link}
                      className="w-12 h-12 rounded-full border border-[#c7010c] text-[#c7010c] flex items-center justify-center transition-all duration-300 hover:bg-[#c7010c] hover:text-white group/btn"
                    >
                      <FiArrowUpRight size={20} className="transform transition-transform group-hover/btn:scale-110" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Partnerships */}
      <section className="py-16 lg:py-20 bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Credentials & Partnerships
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Proficient Team */}
            <div className="flex flex-col items-center text-center">
              <Image src="/images/Feature-1.png" alt="Trust Pilot" width={343} height={384} />
            </div>

            <div className="flex flex-col items-center text-center">
              <iframe
                src="https://widget.clutch.co/widgets/get/3?ref_domain=www.tech2globe.ca&uid=561082&rel_nofollow=true&width=100%25&ref_path=/"
                className="w-full border-0"
                style={{ height: "384px", width: "100%" }}
                loading="lazy"
                title="Clutch Reviews"
              />
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col items-center text-center">
              <Image src="/images/Feature-3.png" alt="Trust Pilot" width={343} height={384} />
            </div>

          </div>
        </div>
      </section>

      <FaqContact faqs={faqsData} />
      <CTA />
      <Footer />
    </main>
  );
}
