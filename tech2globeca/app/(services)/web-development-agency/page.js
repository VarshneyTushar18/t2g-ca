import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import {
  FiMonitor,
  FiTool,
  FiMessageCircle,
  FiSearch,
  FiShare2,
  FiFileText,
  FiMousePointer,
  FiLayout,
  FiMail,
  FiCheckCircle,
  FiThumbsUp,
  FiTarget,
  FiEdit3,
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
  FiPenTool,
  FiShoppingCart,

} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";


export const metadata = {
  title:
    "Web Development Company Canada @Hire Custom Developer",

  description:
    "Web Development Company Canada ✅ Hire Custom Developer ✅ Website Maintenance and Support ✅ Backed by 6,000+ Successful Projects ✅ Contact Us Today!",

  keywords: [
    "Web Development company canada",
    "Web development services",
    "Web development agency",
    "Web development company toronto",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/web-development-agency",
  },

  openGraph: {
    title:
      "Web Development Company Canada @Hire Custom Developer",

    description:
      "Web Development Company Canada ✅ Hire Custom Developer ✅ Website Maintenance and Support ✅ Backed by 6,000+ Successful Projects ✅ Contact Us Today!",

    url: "https://tech2globe.ca/web-development-agency",

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

const stats = [
  {
    id: 1,
    icon: FaSmile,
    value: "18+",
    label: "YEARS EXPERIENCE",
  },
  {
    id: 2,
    icon: FaLayerGroup,
    value: "7K+",
    label: "PROJECT COMPLETED",
  },
  {
    id: 3,
    icon: FaGlobe,
    value: "40+",
    label: "COUNTRIES CLIENTS",
  },
  {
    id: 4,
    icon: FaComments,
    value: "50+",
    label: "GLOBAL CUSTOMERS",
  },
];


const testimonialsData = [
  {
    id: 1,
    letter: "MS",
    name: "Mathew Steele",
    subname: "Business Owner",
    text: "Our new website has made us very delighted! It appears expert and is really simple to use"
  },
  {
    id: 2,
    letter: "DL",
    name: "Daisy Lauren",
    subname: "E-commerce Manager",
    text: "We were very pleased with our new website in every way. Anyone wishing to create a new website has our highest recommendation for Tech2Globe."
  },
  {
    id: 3,
    letter: "AM",
    name: "Andy Mark",
    subname: "Marketing Director",
    text: "Meeting customer demands with expertise and a methodical approach are the things that Tech2Globe performs very well"
  }
];


const faqsData = [
  {
    question: "How much do you cost for one web development project?",
    answer: `
      The pricing may vary from one project to another according to its needs and requirements. You may consult the experts at our web development agency with your project via phone or email, and they will let you know what help it requires and at what price. You will be free of any budget stress as we aim to deliver the best services at a minimal cost to every client.
    `
  },
  {
    question: "How much time will your web development agency take for the completion of one successful project?",
    answer: `
      Whenever we evaluate new projects, we make sure to set a deadline like this: the pre-project consulting process will take two weeks, our research design and planning phase will take 4 to 6 weeks, and then we will begin our developing phase. A client will always be updated for each step, and we make sure to deliver a successful website within a given timeline.
    `
  },
  {
    question: "Do you sign a confidentiality agreement to protect sensitive business information?",
    answer: `
      Yes, we do. We maintain utmost confidentiality with the proprietary information or business plans, ideas, or strategies that you share with us during the course of your work.
    `
  },
  {
    question: "Do I need to visit your web development company during the processing of my project?",
    answer: `
      No, you do not need to do this. At the end of each working day, the Project Manager supervising your project or the programmer working on your project will send you a detailed report updating you on the progress of your project. We maintain easy accessibility and an open line of communication through VOIP, Email, or any other preferred mode of communication with you. Our quality control team keeps a check and closely monitors the workflow to enable you to get superior results all throughout.
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
    title: "Web Designing",
    description:
      "We provide the best web designing services to our clients by making sure the website is highly responsive to customer interaction. We follow an approach of making the website function well to the user’s environment, no matter what device or screen size they use. Our expert developer team indulges quality pictures, proportional grids as well as latest HTML and CSS versions in website development. Our main goal is to make the website responsive to user queries.",
    icon: <FiLayers size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our web development company Canada will provide you with a top-quality web application for your business using the best web content management system. We indulge in-depth expertise in this niche to serve our clients with the needed domain knowledge. The agency makes sure of one thing that is they must be using code quality and reusability. You will be able to prevent SQL injection attacks and many other problems that might prevent the proper functioning of your website.",
    icon: <FiCode size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Custom Web Development",
    description:
      "We also offer custom website development to our clients so that they can enjoy customized solutions for their website as well as their business. This helps them get a unique website to establish a successful business. Our custom web development services have both front-end and back-end development to enhance your existing application or to architect a new application.",
    icon: <FiSettings size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Our mobile app developers have a decade of expertise in providing solutions to clients that meet their specific needs as well as market needs. We also provide various versions of mobile app development like native mobile apps, hybrid mobile apps, progressive web apps, etc. Our goal is to empower your business identity and encourage growth and expansion in every possible way.",
    icon: <FiSmartphone size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "UI/UX Design",
    description:
      "Our web development team has honed the process of providing UI and UX services after working in design for 14 years. We adhere to defined design standards, procedures, and rules so that you receive the website you require from skilled designers within the assigned time frame.",
    icon: <FiPenTool size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Ecommerce Software Solution",
    description:
      "These are the services you really need to operate a profitable online business. Our web development company Toronto covers everything from hosting to business analytics and ecommerce web design. When used together, these solutions give you the ability to successfully conduct online business.",
    icon: <FiShoppingCart size={32} color="#ffffff" />
  }
];


export default function WebDevelopmentAgency() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Web Development Company In Canada"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Web Development Agency", href: "/web-development-agency" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Web Development Company Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Are you looking for a web development agency in Canada to provide you with top-notch solutions that fulfill your imagination?<br />
                We at Tech2Globe, are there to help you in making your idea come to reality. We are the leading web development company toronto serving clients for years with the best.
              </p>
            </div>
          </div>
        </div>
      </section>

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



      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
              Get To Know About Our Web Development Company Canada
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className=" mb-8 leading-relaxed">
              Tech2Globe has been offering clients the best web development services for the past 14 years and continues to work hard to deliver the same quality every time.<br />
              Our team of experienced developers makes sure to bring creativity and new imagination to every project. We work dedicatedly towards creating quality web applications by indulging new web technologies into it. Our team makes sure to enhance your web services so that you and your customers can experience quick navigation while using the web applications. We believe in the combination of extraordinariness and convenience that you can experience with our services.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/web.jpg"
                alt="Get To Know About Our Web Development Company Canada"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>




      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
              Our Accomplishments
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="mb-3">Though we have achieved so much in these past 14 years, here are some of the accomplishments for you to know:</p>

            <ul className="hrline">
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> We have 65+ web developers in our company toronto.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Our team has achieved 96% client retention till now.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> We are Gesia certified.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> We are an ISO-certified web development agency.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Tech2Globe is a NASSCOM-certified member.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Completed 30+ enterprise projects within a short time.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> We have been serving clients from across 21+ countries.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/award.jpg"
                alt="Our Accomplishments"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>



      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Services We Offer At Our Web Development Company Toronto
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              Tech2Globe is a professional web development company offering the best web app services in the market.
              Our developers believe in providing quality services with each project. We have never let down the expectations of any customer and always work hard to accomplish their requirement level.<br />
              Our company focuses on meeting the client's needs and requirements for a particular project and making sure to deliver a successful project as a result. We make it our top priority to help you stand out from the competition in the market and be number one in this industry with our web development services.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>


      <section className="py-[3.2rem] lg:py-[4.8rem] bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              The Process Followed By Our Web Development Company Toronto
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
            <p>As a development department, we assist both small and big companies in providing a unique website. We help you produce authentic business websites that are unmatched anywhere!</p>
            <p>We can assist you in creating a smooth functioning website, setting up your business online and establishing a solid online presence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Proficient Team */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiUsers size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Discover</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Firstly, we try to understand the needs of the customer and then discover the app models that are well-suited for them. The one selected by the client is then further processed.
              </p>
            </div>

            {/* Collaborative Process */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiRefreshCw size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Our web development agency then creates UI/UX web designs that are easy to access and navigate. We make sure to simplify the app for the user in every possible way.
              </p>
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiAward size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Build</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Our web developers make sure to use the latest technologies in the market by keeping future requirements in mind. We also abide by the needs and requirements proposed by the client.
              </p>
            </div>

            {/* Technical Assistance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiTool size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Delivery</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We ensure that the client gets the app within the given timeframe. Our developers put the latest technologies and techniques into building unique apps and websites every time.
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
                src="/images/services/why-choose-us-1.jpg"
                alt="Why Choose Tech2Globe For Web Development Services?"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Why Choose Tech2Globe For Web Development Services?
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="text-white leading-relaxed mb-3 ">
              We have a plethora of knowledge and a track record of success in our main service areas since we created our company with a focus on addressing the different demands of our clientele. We will support your business in making a name for itself and flourishing in the competitive online market.
            </p>
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
