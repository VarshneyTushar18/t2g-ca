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
  FiUpload,
  FiCheck,
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";


export const metadata = {

  title: "",

  description:
    "",

  keywords: [

  ],
};

const testimonialsData = [
  {
    id: 1,
    letter: "AS",
    name: "Alice Smith",
    subname: "Business Owner",
    text: "We were extremely impressed with the level of expertise and professionalism displayed by the team at Tech2Globe, project management company during the implementation of our project. They were able to deliver the project on time and on budget, and the final result exceeded our expectations. We would highly recommend their Project Implementation Services to any organisation looking to deliver a successful project."
  },
  {
    id: 2,
    letter: "BJ",
    name: "Bob Johnson",
    subname: "E-commerce Manager",
    text: "As a small business, we were hesitant to take on a large project without the necessary in-house resources. However, partnering with Tech2Globe, project management company for Project Implementation Services proved to be an excellent decision. They managed the entire project from start to finish and were able to deliver the project on time and within budget. We will definitely be working with them again in the future."
  },
  {
    id: 3,
    letter: "CW",
    name: "Carol Williams",
    subname: "Marketing Director",
    text: "We were impressed by the level of communication and transparency displayed by Tech2Globe, a project management company during the implementation of our project. They kept us informed of progress at every stage and were quick to address any questions or concerns we had. The final result was exactly what we were looking for, and we are extremely satisfied with the project implementation services provided by Tech2Globe."
  }
];


const faqsData = [
  {
    question:
      "What types of project implementation services do you offer?",
    answer: `
      Some examples of project implementation services that we may offer include project planning, project management, project coordination, project execution, and project closeout.
    `,
  },
  {
    question:
      "What industries do you have experience in?",
    answer: `
      We have experience in a variety of industries, including construction, manufacturing, technology, healthcare, and financial services.
    `,
  },
  {
    question:
      "How do you ensure that projects are completed on time and on budget?",
    answer: `
      We use a variety of project management methodologies and tools, such as Gantt charts, project management software, and agile methodologies, to help ensure that projects are completed on time and on budget. We also regularly communicate with our clients to keep them informed of the project's progress and to identify any potential issues that may arise.
    `,
  },
  {
    question:
      "How do you handle scope changes or scope creep during a project?",
    answer: `
      We use a formal scope change management process to handle scope changes or scope creep during a project. This process includes reviewing the requested scope change with the client, determining the impact on the project schedule and budget, and obtaining approval from the client before proceeding with the change.
    `,
  },
  {
    question:
      "How do you ensure that project deliverables meet the client's expectations?",
    answer: `
      We work closely with our clients to define their expectations for the project deliverables and to establish clear communication channels throughout the project.
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Planning and project management",
    description:
      "Developing a detailed project plan, including timelines, budgets, and resources, and managing the project throughout the implementation process.​",
    icon: <FiLayout size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Design and user experience",
    description:
      "Creating wireframes and mockups of the project's user interface and user experience, and developing a style guide for the project's branding and visual design.​",
    icon: <FiPenTool size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Development",
    description:
      "Here our project execution services involve writing code, integrating the project with any necessary APIs or third-party services, and testing the project to ensure that it is functioning correctly.",
    icon: <FiCode size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Testing",
    description:
      "Before the project is launched, it is important to thoroughly test it to ensure that it is functioning correctly and meeting the needs of the intended users. We do it by conducting both manual and automated testing.​",
    icon: <FiCheck size={32} color="#ffffff" />,
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "Once the project execution services have been successfully tested, the next step is to deploy it to the appropriate platforms or channels. We submit the project for review, setting up any necessary billing or payment systems, and promoting the project to potential users.​",
    icon: <FiUpload size={32} color="#ffffff" />,
  },
  {
    id: 6,
    title: "Maintenance",
    description:
      "After the project has been launched, it is important to provide ongoing maintenance and support to ensure that it continues to function correctly and meet the needs of users. We release updates, fix any issues that arise, and provide customer support.​",
    icon: <FiSettings size={32} color="#ffffff" />,
  },
];

const servicesData2 = [
  {
    id: 1,
    title: "Expertise and experience",
    description:
      "By outsourcing project implementation services, organisations can access expertise and experience that may not be available in-house. This can be especially valuable for organisations that are new to a particular industry or are looking to build a complex project.​",
    icon: '',
  },
  {
    id: 2,
    title: "Cost-effectiveness",
    description:
      "Outsourcing project implementation services can be a cost-effective option for organisations, especially if they are working within a specific budget or do not have the resources to hire additional staff to manage the project in-house.​",
    icon: '',
  },
  {
    id: 3,
    title: "Flexibility",
    description:
      "We make sure to Consider the overall cost and value of the onboarding services being offered, and align with your budget and business objectives.Outsourcing project implementation services can provide organisations with greater flexibility, as they can choose to bring in external resources on a project-by-project basis as needed.",
    icon: '',
  },
  {
    id: 4,
    title: "Improved efficiency",
    description:
      "When you hand over project implementation services can help to improve the efficiency of the project, as external resources may be able to complete tasks more quickly and efficiently than in-house staff.​",
    icon: '',
  },
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
    label: "COUNTRIES CLIENTS",
  },
  {
    id: 4,
    icon: FaComments,
    value: "99%",
    label: "GLOBAL CUSTOMERS",
  },
];



export default function ProjectImplementationServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Project Implementation Services Toronto, Canada"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Project Implementation Services", href: "/project-implementation-services" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Project Implementation Services Toronto, Canada
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Transform your project outcomes with our proven project management methodology. Our project management services are designed to ensure that the project is delivered on time, on budget, and to the required level of quality. It includes planning and project management, design and user experience, development, testing, deployment, and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#212529] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Tech2Globe Canada As The Best Project Management Company
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/project-managment.webp"
                alt="Tech2Globe Canada As The Best Project Management Company"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>


          <div className="w-full md:w-1/2">

            <p className="text-white">Welcome to Tech2Globe, project management company, a leading provider of project implementation services. With years of experience in project management, design, development, testing, deployment, and maintenance, we have the skills and expertise to deliver high-quality services to our clients. Our team is dedicated to ensuring the success of our clients' projects, and we offer responsive customer support to address any questions or concerns that may arise during the project. We have a proven track record of delivering successful projects for our clients, and have received positive feedback for our services. In addition to our expertise and experience, we also offer competitive pricing for our project implementation services, which can be beneficial for organisations working within a specific budget. Overall, our goal is to help our clients deliver their projects on time, on budget, and to the required level of quality. If you are in need of project management services, we encourage you to contact us to discuss your needs and learn more about how we can help.</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              What Services Are Given With Project<br /> Implementation Services?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Why Are Project Implementation Services Important For Your Business?
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Your business can only succeed if you are having innovative solutions with seamless project implementation!
              </p>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

              {/* Proficient Team */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                  <FiUsers size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ensuring On-Time Delivery</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Our expert team is there to help you with managing all the digital reservations done by your Project Implementation Services help to ensure that a project is delivered on time, which can be especially important for organisations that are working within a specific timeframe or have external dependencies on the project.
                </p>
              </div>

              {/* Collaborative Process */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                  <FiRefreshCw size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maintaining quality</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Project management services by our experts help to ensure that a project is delivered to the required level of quality, which is important for organisations that are looking to deliver a high-quality product or service to their customers or users.
                </p>
              </div>

              {/* Industry Experience */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                  <FiAward size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Managing risk</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Project Implementation Services can help to identify and mitigate potential risks that may arise during the implementation process, which can help to ensure the success of the project.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>




      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              The Process We Follow Throughout Providing Our Services:
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              We use a formal quality assurance process to ensure that project deliverables meet the client's expectations!
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">The Advancement</h3>
              <p className="workflow-desc">
                Our team of project resources, including analysts, technical leads, trainers, testers, and developers, will collaborate with your project team to design, create, and deploy customised business solutions of any scale.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Implementation Options</h3>
              <p className="workflow-desc">
                The team will collaborate with you to develop and customise the solution in a practical and effective manner for a better user experience, integrate it with back-end host or third party applications, educate users for talent enhancement, efficiently test the solution, and provide continuous support from testing to live execution.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">After Implementation</h3>
              <p className="workflow-desc">
                This cooperation will grow as our post-project management services are activated after the period expires.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Post Service Support</h3>
              <p className="workflow-desc">
                For immediate assistance, please contact us through a dedicated phone line, email, or our 24x7 customer care portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden servicestwo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Why Should You Consider Outsourcing Project Management Services?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Effortlessly drive project success with our comprehensive outsourced management services!</p>
          </div>
          <ServiceCards services={servicesData2} columns={2} />
        </div>
      </section>

      <section className="bg-[#c7010c] py-[2.8rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-4">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Get Exclusive Tips To Grow Your Business
          </h2>
          <p className="text-white text-base md:text-lg font-light">
            Feel Free To Connect With Us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="mailto:info@tech2globe.ca"
              className="px-8 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-[#c7010c] transition-colors duration-200"
            >
              SEND A MAIL
            </a>
            <a
              href="tel:+1-516-858-5840"
              className="px-8 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-[#c7010c] transition-colors duration-200"
            >
              GIVE A CALL
            </a>
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Why Choose Tech2Globe Canada Project<br />
              Implementation Services?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              Project implementation services are an essential part of any successful project, and can help organisations to deliver
              their projects on time, on budget, and to the required level of quality.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Expertise and experience</h3>
              <p className="workflow-desc">
                We have a team of experts with a range of skills and experience in project management, design, development, testing, deployment, and maintenance. This enables us to deliver high-quality project management services to our clients.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Proven track record</h3>
              <p className="workflow-desc">
                We have a proven track record of delivering successful projects for our clients, and have received positive feedback from our clients for our services.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Responsive customer support</h3>
              <p className="workflow-desc">
                We offer responsive customer support and are dedicated to ensuring that our clients are satisfied with our services. We are available to answer any questions or concerns that may arise during the project.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Competitive pricing</h3>
              <p className="workflow-desc">
                We offer competitive pricing for our project implementation services, which can be beneficial for organisations working within a specific budget.
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
