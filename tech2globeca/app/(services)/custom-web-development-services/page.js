import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import {
  FiTool,
  FiMessageCircle,
  FiSearch,
  FiShare2,
  FiMousePointer,
  FiLayout,
  FiMail,
  FiCheckCircle,
  FiThumbsUp,
  FiEdit3,
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
  FiHeadphones,
  FiRefreshCw,
  FiEdit,
  FiLayers,
  FiBriefcase,
  FiEye,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiShoppingCart,
  FiMonitor,
  FiFileText,
} from "react-icons/fi";

import { FaCheck, FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ServiceExpertise from "@/components/services/ServiceExpertise";


export const metadata = {
  title:
    "Web Development Services @Boost Your Online Experience",

  description:
    "Web Development Services ✅ Boost Your Online Experience ✅ Custom Web App Development ✅ Over 6,000 Successful Projects ✅ Contact Us Today!",

  keywords: [
    "web development services",
    "web development agency",
    "web development company toronto",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/custom-web-development-services",
  },

  openGraph: {
    title:
      "Web Development Services @Boost Your Online Experience",

    description:
      "Web Development Services ✅ Boost Your Online Experience ✅ Custom Web App Development ✅ Over 6,000 Successful Projects ✅ Contact Us Today!",

    url: "https://tech2globe.ca/custom-web-development-services",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

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


const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.png' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.png' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.png' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.png' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.png' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.png' },
];


const testimonialsData = [
  {
    id: 1,
    letter: "PW",
    name: "Parmen Wem",
    subname: "Business Owner",
    text: "Awesome; I really like working with Tech2Globe. Our website looks fantastic and performs fantastically because of their knowledge and perseverance."
  },
  {
    id: 2,
    letter: "AT",
    name: "Andy Tame",
    subname: "E-commerce Manager",
    text: "Finding the ideal person or business is much more difficult than putting together a website. I conducted a search to find a specific business that could design & develop my website."
  },
  {
    id: 3,
    letter: "RA",
    name: "Rashid Al-Hammed",
    subname: "Marketing Director",
    text: "Excellent design staff and rapid response to all requests and tasks. They have enhanced our Google search results, thanks to their expert assistance"
  }
];


const faqsData = [
  {
    question: "How much does one custom web development project cost?",
    answer: `
      Depending on the needs and specifications of the project, the price may change. By phone or email, you can communicate with the professionals at our custom web application development services about your project, and they'll tell you what assistance it needs and how much it will cost. We strive to provide the greatest services to every client at a reasonable rate, so you won't have to worry about your budget.
    `
  },
  {
    question: "How long will it take your custom web development company to complete a single project?",
    answer: `
      The pre-project consultation process will take two weeks, our research design and planning phase will take four to six weeks, and then we will start our developing phase. This is how we make sure to set deadlines for all new projects that we examine. We ensure that a client is kept informed at every stage and that a successful website is delivered within the deadline we have set.
    `
  },
  {
    question: "Do you agree to a confidentiality agreement to safeguard private company data?",
    answer: `
      We do, indeed. When you share confidential information, business plans, ideas, or strategies with us while working with us, we keep everything completely confidential.
    `
  },
  {
    question: "Do I have to travel to your Canadian custom web development company while my project is being processed?",
    answer: `
      You are not required to do this. The Project Manager overseeing your project or the programmer working on your project will provide you a thorough report on the status of your project at the conclusion of each working day. Through VOIP, email, or any other desired method of connection with you, we retain simple accessibility and an open line of communication. Our quality control team keeps a check and closely monitors the workflow to enable you to get superior results all throughout.
    `
  },
  {
    question: "Can I manage the source code of my website after you deliver it to me?",
    answer: `
      Yes, you are allowed to manage everything by yourself after your project is delivered by us. Post-delivery of the project, our company will not be involved in your website in any case, and you will be provided with all the credentials that you may change according to your convenience. Still, our customer support team will be there to help you out if you get stuck anywhere.
    `
  }
];

const servicesData = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "We offer custom website development services to our clients so that they can enjoy customized solutions for their website as well as their business. This helps them get a unique website to establish a successful business.",
    icon: <FiAward size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Our custom web development team provides professional UI and UX services after working in design for 14 years. We adhere to defined design standards, procedures, and rules so that you receive the website you require from skilled designers within the designated time frame.",
    icon: <FiLayers size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Ecommerce Solution",
    description:
      "These are the services you really need to operate a profitable online business. Our custom web development company in Toronto covers everything from hosting to business analytics and ecommerce web design. When used together, these solutions give you the ability to successfully conduct online business.",
    icon: <FiShoppingCart size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Ecommerce Platform",
    description:
      "While we help you set up the ecommerce platform, you will be provided with a fully working ecommerce website that is tailored using our custom web application development services to draw in and keep clients in a fiercely competitive market.",
    icon: <FiMonitor size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Content Management",
    description:
      "Our custom website development company in Canada has expertise in developing content management systems for multiple companies. You can receive services for developing bespoke CMSs that include migration and integration with the help of our custom web development team.",
    icon: <FiFileText size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Technical SEO Services",
    description:
      "We are the best SEO company Toronto that brings success on board, from technical SEO service audits to optimization to delivered results in the form of more organic traffic and higher website rankings. However, a website optimized for search engines and adhering to the best practices for SEO offers a host of additional advantages to users and businesses alike.",
    icon: <FiTrendingUp size={32} color="#ffffff" />
  }
];


const expertiseItems = [
  {
    id: "1",
    number: "01",
    title: "Prototype",
    description:
      "In order to ensure that the delivery will be in line with your concept, we first create a web prototype and run it by your team.",
  },
  {
    id: "2",
    number: "02",
    title: "Code",
    description:
      "To keep everyone on the very same page, our skilled web app developers execute the code while our quality assurance team reviews it and shares it with you.",
  },
  {
    id: "3",
    number: "03",
    title: "Deliver",
    description:
      "The finished website is clean, functional, and devoid of mistakes. Our committed quality assurance staff makes sure that any problems are fixed in advance.",
  },

];


export default function CustomWebDevelopmentServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="web development company in toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Custom Web Development Services", href: "/custom-web-development-services" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Custom Web Development Services
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Are you seeking a Canadian custom web development company that can provide you with first-rate solutions?
                Tech2Globe is here to support you in bringing your idea to reality. We have been providing clients with the best custom web design services in Toronto for years.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            Our Custom Web Application Development Services For Your Business Needs
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">

            <p className=" mb-8 leading-relaxed">
              With our custom web design services in Toronto, you can improve your business's web presence beyond the average level and work to communicate your brand successfully. Our custom web development company strives to give excellent web development services that are customized, highly engaged, enable simple navigation, and, more significantly, drive a more incredible conversion to help you accomplish goals. Our custom website development can help your business with brand-specific specialized design that supports corporate objectives in order to boost your online visibility. Making conversions are only possible by knowing the current state of your website and the sector you work in. A marathon, not a sprint, is what SEO is. Additionally, some markets and keywords take longer to rank than others. But with perseverance, any mountain can be climbed. Usually, it takes between six months and a year to see noticeable benefits for any best seo agency in Canada.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/custom-web-development.jpg"
                alt="Why Do Businesses Need Social Media Management?"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              What Tech2Globe Has Achieved With It's Expertise In The Industry?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              Despite the fact that we have accomplished a lot over the past 14 years, the following are some highlights for you to be aware of:
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <p className="workflow-desc">
                We have 65+ web developers for custom web development.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <p className="workflow-desc">
                We hold Gesia certification.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <p className="workflow-desc">
                Startup India has our support.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <p className="workflow-desc">
                As of right now, our staff boasts a 96% client retention rate.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <p className="workflow-desc">
                We are a company with ISO certification.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">06.</span>
              <p className="workflow-desc">
                Completed more than 500+ large-scale projects.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Our Custom Web Development Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              We, as the reputable custom website development company, provide the best web app services in the market. Our developers strive to offer perfection with our top-notch services.<br />
              In order to accomplish a project successfully, our company places a strong emphasis on satisfying the demands and expectations of the client. With our custom web development services, we place a high focus on assisting you in differentiating yourself from the market competitors and dominating this sector.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>


      <section className="py-16 bg-[#dfdfdf] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              What More?
            </h3>
            <div className="w-24 h-[2px] bg-[#c7010c] mb-4"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of highly skilled and passionate developers can create the application of your thoughts, thanks to our custom web design services in Toronto. We are the leading developers on the market since we have a wealth of experience and knowledge in this field. We provide the greatest web application possible for our clients, and they consistently provide us with good reviews. You can simply advance your business's future and encourage innovation at every stage by working with us. With our custom web development services, we help start-ups, and existing enterprises get on the road to success.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/accomplishment.jpg"
                alt="Why Choose Us"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>

        </div>
      </section>


      <ServiceExpertise
        title="What Process Is Followed While Working On Custom Web Development Project?"
        subtitle="Being a leading firm, we help both small and large businesses create distinctive websites. We assist you in creating one-of-a-kind, genuine business websites that are exceptional! We can help you set up your business online, build a user friendly website, and maintain a strong online presence."
        items={expertiseItems}
      />


      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/why-us-2.jpg"
                alt="Why Choose Us"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Why Choose Tech2Globe For Custom Web Application Development Services?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Promote your business online in a way that generates interest in search engine results, too, with our experts' help. We can help you develop custom web applications that enhance productivity or cater to users who are actively looking for solutions. We bring technical skills to the table as an established web development business when creating online solutions that are scalable and reliable.
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

      <Testimonials testimonials={testimonialsData} />



      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
