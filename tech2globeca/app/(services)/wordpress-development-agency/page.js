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
  title: "WordPress Website Development | Elevate Your WordPress Site",
  description:
    "WordPress Website Development to boost your business online. Dedicated team of WordPress experts, save 60% on development cost, 11000+ successful projects. Contact us today.",

  keywords: [
    "WordPress website development",
    "Best WordPress development agency",
    "WordPress website design Toronto",
    "WordPress website development Toronto",
    "WordPress web design Toronto",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/wordpress-development-agency",
  },

  verification: {
    google: "jD0JDJ5j1FAatSBe_yirV-nqIsDpM68FtkukrbsPK3I",
  },

  openGraph: {
    title: "WordPress Website Development | Elevate Your WordPress Site",
    description:
      "WordPress Website Development to boost your business online. Dedicated team of WordPress experts, save 60% on development cost, 11000+ successful projects. Contact us today.",
    url: "https://tech2globe.ca/wordpress-development-agency",
    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",
    locale: "en_US",
    type: "article",
  },

  other: {
    "article:publisher":
      "https://www.facebook.com/tech2globe.software",

    // Cache Control
    "http-equiv": "Cache-Control",
    "cache-control": "no-cache, no-store, must-revalidate",
    pragma: "no-cache",
    expires: "0",
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
    letter: "PW",
    name: "Pardew Wesle",
    subname: "Business Owner",
    text: "Wonderful; I adore working with Tech2Globe. Because of their expertise and tenacity in WordPress web design Toronto, our website operates and looks wonderful."
  },
  {
    id: 2,
    letter: "WA",
    name: "William Anderson",
    subname: "E-commerce Manager",
    text: "It's harder to find the right company or person than it is to build a website. I looked online for a certain company that could design, construct, and optimise for WordPress website development."
  },
  {
    id: 3,
    letter: "RH",
    name: "Rishad Hammed",
    subname: "Marketing Director",
    text: "The excellent design team and prompt completion of all duties and demands. Thanks to their knowledgeable guidance, they have improved the results of our Google searches."
  }
];


const faqsData = [
  {
    question:
      "How much do you cost for one WordPress website design Toronto project?",
    answer: `
      The pricing may vary from one project to another according to its needs and requirements. You may consult our experts with your project via phone or email, and they will let you know what help it requires and at what price. You will be free of any budget stress as we aim to deliver the best services at a minimal cost to every client.
    `,
  },
  {
    question:
      "How much time will your WordPress website development Toronto company take for the completion of one successful project?",
    answer: `
      Whenever we evaluate new projects, we make sure to set a deadline like this: the pre-project consulting process will take two weeks, our research design and planning phase will take 4 to 6 weeks, and then we will begin our developing phase. A client will always be updated for each step, and we make sure to deliver a successful ecommerce website within a given timeline.
    `,
  },
  {
    question:
      "How do you identify the best website solution for each project?",
    answer: `
      This totally depends on the requirements of the client's business. We have a list of the best ecommerce solutions to help your business reach the upper level. You must contact our best WordPress development agency to get yourself the right choice of platform and start your business journey.
    `,
  },
  {
    question:
      "Do I need to visit your WordPress web design Toronto during the processing of my project?",
    answer: `
      No, you do not need to do this. At the end of each working day, the Project Manager supervising your project or the programmer working on your project will send you a detailed report updating you on the progress of your project. We maintain easy accessibility and an open line of communication through VOIP, Email, or any other preferred mode of communication with you. Our quality control team keeps a check and closely monitors the workflow to enable you to get superior results all throughout.
    `,
  },
  {
    question:
      "Can I manage the functions of my WordPress website after you deliver it to me?",
    answer: `
      Yes, you are allowed to manage everything by yourself after your project is delivered by us. Post-delivery of the project, our company will not be involved in your website in any case, and you will be provided with all the credentials that you may change according to your convenience. Still, our customer support team will be there to help you out if you get stuck anywhere.
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Custom WordPress Design",
    description:
      "Experienced WordPress site designers in Toronto produce a unique, highly functional, and performant design for your brand that offers a smooth online experience. Hiring our WordPress website design Toronto is the best option for you.",
    icon: <FiLayout size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "WordPress Development",
    description:
      "To support the expansion of your company and assist you in achieving your objectives, our WordPress developer company in Toronto offers world-class custom website development services.",
    icon: <FiCode size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Plug-Ins For WordPress",
    description:
      "Do you require bespoke plugin development or WordPress plugin customization? You're covered by our WordPress developer in Toronto. To meet your business needs, our skilled developers can create bespoke plugins, modify existing plugins, or identify suitable alternatives.",
    icon: <FiTool size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "WordPress Maintenance",
    description:
      "Regular upgrades for the WordPress core engine, plugins, and themes are necessary for a robust WordPress website. A frequent security assessment is also necessary to guarantee a malware and virus-free website. Your WordPress maintenance requirements are handled by our experts.",
    icon: <FiRefreshCw size={32} color="#ffffff" />,
  },
  {
    id: 5,
    title: "Themes For WordPress",
    description:
      "Do you need that distinctive design for your website? To give your brand an appealing look, our website designers offer original, creative, and professionally designed WordPress themes. Experts at our WordPress website development agency can help you out.",
    icon: <FiPenTool size={32} color="#ffffff" />,
  },
  {
    id: 6,
    title: "Hosting For WordPress",
    description:
      "To obtain great speed for your website, you need an effective hosting setup with the appropriate modules. To offer the best performance levels, our specialists manage your requirements and host on dedicated servers.",
    icon: <FiServer size={32} color="#ffffff" />,
  },
];

const expectationsData = [
  {
    id: 1,
    title: "CUSTOM DESIGN",
    description: "A design that is wholly unique, tailored to your brand, and focused on your company's objectives.",
    icon: <FiPenTool size={28} color="#ffffff" />,
  },
  {
    id: 2,
    title: "MOBILE RESPONSIVE",
    description: "Using a mobile-first strategy, we ensure that your website is running smooth on all devices.",
    icon: <FiLayers size={28} color="#ffffff" />,
  },
  {
    id: 3,
    title: "STRAIGHTFORWARD",
    description: "We only require a few hours of your time, and we'll take care of the rest.",
    icon: <FiScissors size={28} color="#ffffff" />,
  },
  {
    id: 4,
    title: "EXPERIENCED DESIGNERS",
    description: "Our team of skilled website designers is aware of the requirements and preferences for your company's website.",
    icon: <FiLock size={28} color="#ffffff" />,
  },
  {
    id: 5,
    title: "WE MANAGE AND HOST",
    description: "As a result, you can concentrate on expanding your business while we take care of your website.",
    icon: <FiServer size={28} color="#ffffff" />,
  },
  {
    id: 6,
    title: "CONVERSION ORIENTED TACTICS",
    description: "Our WordPress web design Toronto experts are geared toward generating more leads, calls, and clients for your company.",
    icon: <FiLayers size={28} color="#ffffff" />,
  },
  {
    id: 7,
    title: "SEO & MOBILE READY",
    description: "Our best WordPress development agency offers highly optimised Google Speed requirements and mobile responsiveness.",
    icon: <FiMonitor size={28} color="#ffffff" />,
  },
  {
    id: 8,
    title: "SINCERE & INCLUSIVE PRICING",
    description: "For your job, we offer straightforward, detailed pricing.",
    icon: <FiDollarSign size={28} color="#ffffff" />,
  },
];


export default function WordpressDevelopmentAgency() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Wordpress Web Design In Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Wordpress Development Agency", href: "/wordpress-development-agency" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best WordPress Development Agency In Canada
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Do you wish to grow your business to accomplish your aspirations? With the help of our WordPress website development Toronto services, we are here to meet your needs in a very convenient manner. We will do all in our power to meet and even surpass your expectations. Tech2Globe can help your business with everything right from website creation to development.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                What About Our WordPress Website Design Toronto Services?
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                We at Tech2Globe, the best WordPress development agency in Toronto, specialise in creating websites with the WordPress content management system.
                We frequently appear on the list of Toronto's top WordPress web development agencies because of our highly skilled WordPress Developers, who routinely work on developing and customising themes, plugins, and WordPress websites. Our Toronto-based team of WordPress website designers work to achieve unique, mobile-friendly, and SEO-friendly websites every time for companies in Canada and all over the world.<br /><br />
                Including our clients in the design process is prioritised by us along with an extensive understanding of your brand and its requirements. Once we have a thorough understanding of your company, we can create a website that not only meets your objectives but also enhances the position of your brand in the marketplace with our WordPress website development services. For your company, our skilled WordPress developers and designers produce mobile-responsive, safe, and high-performance WordPress websites. We are committed to exceeding our clients' expectations, growing their audience, and rapidly enhancing their WordPress websites. Our client’s reviews speak enough
              </p>

              <a
                href="/contact-us"
                className="inline-block bg-[#c7010c] text-white text-sm font-semibold px-8 py-3 transition-colors hover:bg-black uppercase tracking-wider"
              >
                Contact Us
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              What Can You Expect In Our WordPress Web Design Toronto Services?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base">
              We at Tech2Globe, create innovative, attractive, and high-performance websites using WordPress as a platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {expectationsData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-sm p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-red-100 hover:transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-[#c7010c] flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-sm tracking-wider mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            Tech2Globe's Canada Accomplishments
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
          <p className="mb-3">Despite the fact that we have accomplished a lot over the past 14 years, the following are some highlights for you to be aware of:</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">


            <ul className="hrline">
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> For WordPress website development Toronto services, we have 65+ web developers.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Our staff boasts a 90% client retention rate.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> We are Gesia certified.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> We are a WordPress website development company with ISO certification</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> A NASSCOM-certified member, Tech2Globe.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Within a short period of time, we finished more than 30 large-scale projects.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> We've been serving customers from over 21+ different nations.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/why-smo.webp"
                alt="Our Accomplishments"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>

      <ClientSlider title="Our Clients" clients={clientsData} />

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Services We Provide In Our Best<br />
              WordPress Development Agency
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              We have a deep knowledge of developing WordPress and a thorough understanding of what works and what doesn't. To help our clients flourish online, our WordPress designers in Toronto draw on their vast experience in building successful websites. Tech2Globe is one of the leading WordPress website development Toronto agencies to help you in developing websites.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <Industries />

      <Testimonials testimonials={testimonialsData} />

      <ClientSlider title="We Are Recognized, Certified And Award-Winning Partners Of" clients={clientsData3} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
