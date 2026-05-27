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
  title: "Amazon consulting Company in Canada @Optimize Your Amazon Presence",

  description:
    "Elevate your online presence with our Amazon consulting company in Canada! ✔ Expert Guidance ✔ Customized Solutions. Ready ✔ 11,000+ Successful Projects ✔ Reach Out Today!",

  keywords: [
    "amazon web services consulting",
    "Amazon consulting services",
    "Amazon Seller Consultants",
    "Amazon Marketing Agency",
  ],

  alternates: {
    canonical: "/amazon-consulting-services",
  },

  openGraph: {
    title:
      "Amazon consulting Company in Canada @Optimize Your Amazon Presence",

    description:
      "Elevate your online presence with our Amazon consulting company in Canada! ✔ Expert Guidance ✔ Customized Solutions. Ready ✔ 11,000+ Successful Projects ✔ Reach Out Today!",

    url: "https://tech2globe.ca/amazon-consulting-services",

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
    question: "Can You Get Me A Dedicated Amazon Account Specialist?",
    answer: `
      Through the SAS Core program offered by Amazon, you can have an account manager for your Amazon web services consulting. You must have an active Professional selling account with Amazon that is in good standing to qualify for an account manager through this program. If you have numerous selling accounts, you can apply for an account manager using each account's particular Merchant Token and email address.
    `,
  },
  {
    id: 2,
    question:
      "I'm Successful With Amazon's E-Commerce, But I'm Not Sure I'm Performing To My Full Potential. What Can I Be Doing Incorrectly?",
    answer: `
      You might be committing several errors (or you could be doing everything just fine). The most typical issue, though, is retail readiness. Your product must, at the absolute least, be able to satisfy a few prerequisites.
    `,
  },
  {
    id: 3,
    question:
      "I Need Some Assistance With My Amazon Business, But I Don't Know Where To Begin. Please Give Me Advice, Details, And Help Regarding Amazon PPC.",
    answer: `
      Yes! Our Amazon web services consulting team at Tech2Globe is available to collaborate directly with you to develop a cutting-edge plan that will enable you to function at the highest level possible. Our Amazon professionals collaborate with you to educate, train, and give you the research you need to accomplish your objectives.

      The best training resources available to you are our educational modules, which make use of Loom. They are simplified so that everyone may comprehend them and find them helpful at every level of the procedure. Depending on your demands, you can employ our Amazon seller consultants with a very simple process.
    `,
  },
  {
    id: 4,
    question:
      "Why Would I Trust You As A Full Time Amazon Seller Consultants?",
    answer: `
      We at Tech2Globe are aware that you desire to boost your Amazon sales. Your brand must appear precisely when customers want you to accomplish that. You need more knowledge and time to handle Amazon, which likely leaves you feeling overwhelmed and dissatisfied.

      To increase your Amazon sales, you should be able to hire, train, and oversee a staff of internal operations personnel. Because we have firsthand knowledge of the demands of success on Amazon, we have established a full-service Amazon management company to assist businesses just like yours.
    `,
  },
  {
    id: 5,
    question: "What Does Your Amazon Advertising Solutions Include?",
    answer: `
      We provide a comprehensive range of services and support for Amazon marketing, including but not limited to the following:

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
    title: "Amazon Marketing",
    description:
      "Utilise a full-funnel Amazon marketing strategy to generate financial outcomes. Our knowledgeable approach begins with a thorough examination of your company's needs and the Amazon marketing plan. We provide customized solutions like an Amazon product launch service and Amazon web services consulting to meet your objectives better. Trust your Amazon expert to find every chance to expand your company.",
    icon: <FiTrendingUp size={32} color="#ffffff" />,
  },

  {
    id: 2,
    title: "Storefront & Branding on Amazon",
    description:
      "Through Amazon A+ Content, we ensure your Amazon branding strategy departs from the typical product detail page look. A professionally designed storefront excites your customers and helps effectively highlight your merchandise. At Tech2Globe, we follow Amazon's stringent creative acceptance rules and all best practices while creating content.",
    icon: <FiShoppingBag size={32} color="#ffffff" />,
  },

  {
    id: 3,
    title: "Amazon PPC Advertising",
    description:
      "Our Amazon consulting services develop efficient ways to advertise your company using the options provided by the Amazon Advertising platform. Our Amazon product launch solution comes with a carefully thought-out advertising campaign to grab your audience's attention and produce the finest outcomes. Our primary goals are to lower your advertising cost per sale (ACoS) and raise your profit margins.",
    icon: <FiTarget size={32} color="#ffffff" />,
  },

  {
    id: 4,
    title: "Amazon Ranking",
    description:
      "To assess your product exposure and develop a successful plan, your Amazon optimization consultant performs in-depth research and competition analysis. Through Amazon consulting services, we put your products in a position to rank for high search volume and low competition keywords. Increasing your Amazon reviews is critical to our plan because it will increase brand recognition and boost your product rankings.",
    icon: <FiBarChart2 size={32} color="#ffffff" />,
  },

];


export default function AmazonConsultingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Amazon consulting Company in Canada"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Amazon Consulting Services", href: "/amazon-consulting-services"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Amazon Marketing Agency
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Benefit from our years-long industry expertise in Amazon web services consulting to get the results you need!
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                An Amazon marketing agency's role is to assist companies in boosting sales from their Amazon product listings. We provide various services that are specialised to the demands of their customers. The tools and resources needed to move your product listings to the top pages of Amazon are incorporated in our work process. Since we know this area, we recommend hiring and working with us to use proper techniques to better and positively impact your sales. Our consultants have experience in all specific product niche, which will be very helpful to your company.
              </p>
            </div>
          </div>
        </div>
      </section>


      <ConsultancySlider
        title="Why Would You Seek Amazon Consultancy Services?"
        subtitle="Without leveraging Amazon consultancy services, there might be chances to miss on the aspects that are important for a seller to be aware of."
        slides={slides}
        imageSrc="/images/services/parallax-bg8.jpg"
        imageAlt="Amazon Consultancy Services"
      />

      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Highlights
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">24-hour Support.</h3>
              <p className="workflow-desc">
                On every aspect of Amazon, we offer our customers thorough help. We communicate regularly with our clients via phone, email, and web conferencing. Working together with our client's staff, Tech2Globe, an Amazon marketing agency smoothly integrates services into their operations.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Rapid Results</h3>
              <p className="workflow-desc">
                The team at Tech2globe Amazon marketing agency quickly sets up your seller account, whether you're a new or experienced Amazon seller. Complete client onboarding, accurate listing, and Amazon advertising are provided.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Over 14 Years Of Experience</h3>
              <p className="workflow-desc">
                Including 1P and 3P sellers, we have worked with a diverse range of enterprises and sales structures. We are fully aware of the advantages and disadvantages of different business methods. We support our clients in running hybrid models, switching to a new business model, or accelerating their current one.
              </p>
            </div>

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
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              But Why Go With Tech2Globe As Your<br />
              Amazon Marketing Agency?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Ecommerce companies have picked Tech2Globe as their SEO advisor for many years. For our clients, we have created more than $3 million in income, assisting in expanding both their businesses and local communities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                250+ Amazon seller consultants
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                For Amazon consulting services, we have one of the largest and most qualified teams of consultants. Our staff has more than 14 years of experience to offer; with the help of our dedicated optimization consultancy for Amazon, your business benefits from the best advice in the field. This gives you a massive advantage over your competitors, which can raise your sales and revenue to new heights.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Over A Decade Of Expertise
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We bring more than 14 years of experience. We offer your organisation in-depth evaluations and recommendations using our superior industry knowledge and software, which can significantly impact your revenue. Additionally, we stay current with changes in the industry that gives your company a thorough consultation that complies with the most current rules and suggestions for Amazon.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Information-Driven Suggestions
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We bring more than 14 years of experience. We offer your organisation in-depth evaluations and recommendations using our superior industry knowledge and software, which can significantly impact your revenue. Additionally, we stay current with changes in the industry that gives your company a thorough consultation that complies with the most current rules and suggestions for Amazon.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
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
