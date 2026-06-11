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
  title: "Magento Development Services @Empower Your E-Commerce",

  description:
    "Magento Development Services to Boost Your Business Online. ✔Expert Development Services ✔Elevate Your Online Store ✔3000+ Successful Projects ✔Contact Now",

  keywords: [
    "magento development company",
    "Hire Magento developers",
    "magento ecommerce developers",
    "Magento Development Services",
    "magento development agency toronto",
    "best magento developers canada",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/magento-development-services",
  },

  openGraph: {
    title: "Magento Development Services @Empower Your E-Commerce",
    description:
      "Magento Development Services to Boost Your Business Online. ✔Expert Development Services ✔Elevate Your Online Store ✔3000+ Successful Projects ✔Contact Now",
    url: "https://tech2globe.ca/magento-development-services",
    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",
    locale: "en_US",
    type: "website",
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


const testimonialsData = [
  {
    id: 1,
    letter: "M",
    name: "Micheal",
    subname: "Business Owner",
    text: "Really pleased with how the project has developed since we began working with Tech2Globe. To put it nicely, it has been a beneficial collaboration and going forward; I hope to harvest larger returns with their assistance."
  },
  {
    id: 2,
    letter: "L",
    name: "Lisa",
    subname: "Marketing Director",
    text: "We felt more assured that Tech2Globe was always doing its best. The team's superb documentation abilities and comprehensive communication impressed our internal team and served as a crucial confidence check."
  },
  {
    id: 3,
    letter: "J",
    name: "Jennifer",
    subname: "E-commerce Manager",
    text: "Brainvire saved us from our never-ending worries about how to raise brand visibility and social media engagement. I was genuinely surprised by their method of operation. Our organisation benefited from their solution nearly right away. "
  },
];


const faqsData = [
  {
    question:
      "How much do you cost for a magento website design Toronto project?",
    answer: `
      <p>
        The pricing may vary from one project to another according to its needs and requirements. You may consult our experts with your project via phone or email, and they will let you know what help it requires and at what price. You will be free of any budget stress as we aim to deliver the best services at a minimal cost to every client.
      </p>
    `,
  },

  {
    question:
      "How much time will your company take for the completion of one successful project?",
    answer: `
      <p>
        Whenever we evaluate new projects, we make sure to set a deadline like this: the pre-project consulting process will take two weeks, our research design and planning phase will take 4 to 6 weeks, and then we will begin our developing phase. A client will always be updated for each step, and we make sure to deliver a successful ecommerce website within a given timeline.
      </p>
    `,
  },

  {
    question:
      "How do you identify the best website solution for each project?",
    answer: `
      <p>
        This totally depends on the requirements of the client's business. We have a list of the best ecommerce solutions to help your business reach the upper level. You must contact our best magento developers Canada to get yourself the right choice of platform and start your business journey.
      </p>
    `,
  },

  {
    question:
      "Do I need to visit your company during the processing of my project?",
    answer: `
      <p>
        No, you do not need to do this. At the end of each working day, the Project Manager supervising your project or the programmer working on your project will send you a detailed report updating you on the progress of your project. We maintain easy accessibility and an open line of communication through VOIP, Email, or any other preferred mode of communication with you. Our quality control team keeps a check and closely monitors the workflow to enable you to get superior results all throughout.
      </p>
    `,
  },

  {
    question:
      "Can I manage the functions of my magento website after you deliver it to me?",
    answer: `
      <p>
        Yes, you are allowed to manage everything by yourself after your project is delivered by us. Post-delivery of the project, our company will not be involved in your website in any case, and you will be provided with all the credentials that you may change according to your convenience. Still, our customer support team will be there to help you out if you get stuck anywhere.
      </p>
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Implementation Of Magento",
    description:
      "Leverage Tech2Globe's experience to create a reliable and expandable ecommerce store on Adobe Commerce or Adobe Commerce Cloud.",
    icon: <FiShoppingBag size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Magento Custom Development",
    description:
      "Create new features, rewrite code, and customize current functionality to increase efficiency.",
    icon: <FiCode size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Developing UI For Magento",
    description:
      "To improve user experience and encourage desired user activities, you can give your store a clean storefront.",
    icon: <FiMonitor size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "B2B Using Magento",
    description:
      "Get benefit of Magento's B2B package to simplify challenging B2B operations. With the help of our Magento B2B expertise, you can handle complex activities like processing orders, account-based costing, customised quotes, and multi-layered buying approvals.",
    icon: <FiBriefcase size={32} color="#ffffff" />,
  },
  {
    id: 5,
    title: "B2C Using Magento",
    description:
      "Create compelling digital experiences that your customers want. With its customizability, Magento's B2C suite enables you to continuously improve while accelerating your growth goals for omnichannel ecommerce and cross-border selling. Hire magento developers from Tech2Globe to ease everything.",
    icon: <FiUsers size={32} color="#ffffff" />,
  },
  {
    id: 6,
    title: "Extensions And Growth",
    description:
      "If you hire magento developers, you can create unique magento modules to greatly enhance your management capabilities and client comfort.",
    icon: <FiTrendingUp size={32} color="#ffffff" />,
  },
];


export default function MagentoDevelopmentServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Magento Development Agency Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Magento Development Services", href: "/magento-development-services"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Magento Development Service In Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] text-lg font-medium">
                Are you looking for a magento development company in Toronto for:
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                <div className="flex items-center gap-3 px-8 py-4">
                  <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">01</span>
                  <span className="text-sm md:text-base text-[#444444] font-medium max-w-[250px]">Complete magento development services.</span>
                </div>

                <div className="flex items-center gap-3 px-8 py-4">
                  <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">02</span>
                  <span className="text-sm md:text-base text-[#444444] font-medium max-w-[250px]">Trained and knowledgeable magento developers working on your project.</span>
                </div>

                <div className="flex items-center gap-3 px-8 py-4">
                  <span className="text-4xl md:text-5xl font-semibold text-[#c7010c] leading-none">03</span>
                  <span className="text-sm md:text-base text-[#444444] font-medium max-w-[250px]">A track record of success spanning more than thousands of projects.</span>
                </div>
              </div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Tech2Globe, being the best magento development agency Toronto is here to help you with the “test-and-tried” solutions. Hire magento developers and take your ecommerce business to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7]  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            Best Magento Developers Canada In Tech2Globe
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
          <p className="mb-3">Do you intend to enter the ecommerce market with a fully functional Magento store? Do you want to give your current e-store an update with latest features addition? Tech2Globe is a reputable magento development company that you can depend on to create a store that generates high conversions and propels your business's growth. You likely have a solid understanding of ecommerce when you have chosen magento ecommerce developers to assist you in the magento development platform for your online store. And if you hire magento developers, you can be sure you'll receive the best services our platform has to offer. We are the ideal choice for developing your fMagento websites because we have a team of the best Magento developers Canada with experience in ecommerce strategies.<br />
            We guarantee you everything, whether you need specialized integrations and extensions, a transfer or update, or trustworthy regular maintenance for your website. By choosing us as your development partner, you can be certain that your store will have the most advanced design, exceptional backend efficiency, and smooth page loads.<br />
            For more than 14 years, Tech2Globe has offered organisations the best magento development services. We are dedicated to going above and beyond for our clients, expanding their audience, and quickly improving their websites. Our magento development company in Toronto has mastered producing a reliable magento website for several clients who have given us outstanding feedback.

          </p>
        </div>

      </section>

      <ClientSlider title="Our Clients" clients={clientsData2} />

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Tech2Globe's Magento Development Services Includes
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>


          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>


      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              The Process Followed In Our Magento Development Agency Toronto
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Share Needs</h3>
              <p className="workflow-desc">
                The client first elaborates their goals and requirements for their brand. In order to develop a Magento solution that will meet their needs and expectations, our dedicated team does extensive research to fetch information about the company.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Project Evaluation</h3>
              <p className="workflow-desc">
                Our best Magento developers Canada view every customer as unique and evaluate their needs, challenges, and goals in order to design the project in different stages so as to meet their needs with the ideal solution.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Team/Developer Selection</h3>
              <p className="workflow-desc">
                Depending on the specifications of the project, we recommend the best magento ecommerce developers. The client has the option to inspect them and select the developer he wishes to work on his project with.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Choosing A Hiring Model</h3>
              <p className="workflow-desc">
                The client gets a recruiting model to choose from in addition to selecting the best magento developers Canada for their project. Depending on the demands of the clients, our recruiting models provide services on an hourly, part-time, or full-time basis.
              </p>
            </div>
            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <h3 className="workflow-title">Project Launch</h3>
              <p className="workflow-desc">
                Once the client makes the initial payment, our professionals start working on the project, we designate a specific project manager to handle communication and deliver regular project status reports.
              </p>
            </div>
            <div className="workflow-card">
              <span className="workflow-number">06.</span>
              <h3 className="workflow-title">Performance Evaluation</h3>
              <p className="workflow-desc">
                Depending on the specifications of the project, we recommend the best magento ecom merce developers. The client has the option to inspect them and select the developer he wishes to work on his project with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Why Trust Tech2Globe's
              Reliability, Effectiveness, And Openness?
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
            <p className="text-[#555555] max-w-7xl mx-auto leading-[1.8] text-[15px]">
              Because that's what makes us different from other magento development compani
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiDatabase className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Understanding & Evaluation</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                It is recommended to locate a Magento development company that focuses on comprehending your needs while searching for such services. Our procedure begins with an in-depth comprehension and analysis of your needs, after which we continue on to propose a solution.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTag className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Design And Testing</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Our team creates your Magento store based on the particular specifications you offer and keeping in view the current market trends. The store is carefully tested to guarantee that it offers smooth shopping experiences in addition to being designed to match your brand.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTarget className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Support & Deployment</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                When we are confident that your online store has been thoroughly tested and is ready to launch, we deploy it. In addition to this, we provide additional services as we continue to optimize the website.
              </p>
            </div>


          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      <ClientSlider title="We Are Accredited, Verified, And Prize-Winning Partners With" clients={clientsData} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
