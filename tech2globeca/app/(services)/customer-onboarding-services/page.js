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
  FiFeather,
  FiCalendar,
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
    text: "Our company recently switched to a new CRM system, and the onboarding for customer service team at Tech2Globe was instrumental in helping us get up and running smoothly. They provided comprehensive training and support and were always available to answer our questions and help us troubleshoot any issues. I highly recommend their services to anyone looking to streamline their onboarding for customer service processes."
  },
  {
    id: 2,
    letter: "BJ",
    name: "Bob Johnson",
    subname: "E-commerce Manager",
    text: "The customer onboarding team at Tech2Globe went above and beyond to ensure that we had a seamless transition to their product. They provided personalised training and support and were always available to answer our questions and address any concerns. We couldn't be happier with their services and would highly recommend them to anyone."
  },
  {
    id: 3,
    letter: "CW",
    name: "Carol Williams",
    subname: "Marketing Director",
    text: "As a small business owner, I hesitated to invest in a customer onboarding service. After working with the team at Tech2Globe, it was the best decision. They helped us get up and running quickly and effectively and provided ongoing support to ensure we could fully utilise and benefit from the product. I highly recommend their services to anyone looking to streamline their customer onboarding process."
  }
];


const faqsData = [
  {
    question:
      "How long does customer onboarding typically take?",
    answer: `
      The length of the customer onboarding process will vary depending on the complexity of the product or service, the needs and goals of the customer, and the resources and support provided by the onboarding team. In general, customer onboarding aims to get new customers up and running as quickly and efficiently as possible.
    `,
  },
  {
    question:
      "What is the role of a customer onboarding partner?",
    answer: `
      A customer onboarding partner is a company or agency that provides services and support to help new customers set up and use a product or service. The role of a customer onboarding partner is to ensure that new customers can fully utilise and benefit from the product or service and to minimise any barriers or challenges they may encounter during the onboarding process.
    `,
  },
  {
    question:
      "How do I choose the right customer onboarding partner?",
    answer: `
      When selecting a customer onboarding partner, it's essential to consider factors such as expertise and experience, flexibility and customization, scalability, communication and collaboration, and cost and value. It's also a good idea to research and ask for references or testimonials from other clients who have worked with the partner.
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Account setup and configuration",
    description:
      "This includes creating an account for the customer, setting up their profile and preferences, and configuring any necessary settings or options.",
    icon: <FiSettings size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Training and support",
    description:
      "We will provide training and support to help customers understand how to use the product or service, and troubleshoot any issues they encounter. Our Customer data onboarding service includes one-on-one training sessions, online tutorials, or written documentation.",
    icon: <FiHeadphones size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Integration and data migration",
    description:
      "If the customer is transitioning from a different product or service, we help them integrate their existing data and migrate it to the new system.",
    icon: <FiDatabase size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Customization and configuration",
    description:
      "Tech2Globe also helps customers customise their product or service to meet their specific needs, such as setting up custom integrations or configuring advanced features.",
    icon: <FiSettings size={32} color="#ffffff" />,
  },
  {
    id: 5,
    title: "Marketing and promotion",
    description:
      "For some special considerations, we also offer marketing and promotion services to help customers get the word out about their product or service and attract new customers.",
    icon: <FiMonitor size={32} color="#ffffff" />,
  },
];

const servicesData2 = [
  {
    id: 1,
    title: "Expertise and experience",
    description:
      "We are working with a track record of success in onboarding for customer service, and have relevant expertise in your industry or sector.",
    icon: '',
  },
  {
    id: 2,
    title: "Flexibility and customization",
    description:
      "We are one of the only reliable partners able to tailor our onboarding for customer servics to meet your specific needs and goals.",
    icon: '',
  },
  {
    id: 3,
    title: "Scalability",
    description:
      "We are well capable of accommodating your company's growth and scale as your customer base expands.",
    icon: '',
  },
  {
    id: 4,
    title: "Communication and collaboration",
    description:
      "None of our client base has ever complained about communication loopholes as we are very easy to work with, and are open and transparent in communication.",
    icon: '',
  },
  {
    id: 5,
    title: "Cost and value",
    description:
      "We make sure to Consider the overall cost and value of the onboarding services being offered, and align with your budget and business objectives.",
    icon: '',
  },
  {
    id: 6,
    title: "Performance Oriented",
    description:
      "If you're tired of spending hours onboarding new customers and are looking for a more efficient and effective way to do it, look no further than Tech2Globe's Customer Onboarding Services.",
    icon: '',
  },
];



export default function CustomerOnboardingService() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Best Customer Onboarding Service, Toronto, Canada"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Customer Onboarding Service", href: "/customer-onboarding-service" }
        ]}
      />



      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/customer.webp"
                alt="Best Customer Onboarding Service, Toronto, Canada"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>


          <div className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
              Best Customer Onboarding Service, Toronto, Canada
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="">Customer onboarding services are a set of activities and processes designed to help new customers get set up and get started using a product or service. The goal of customer onboarding services is to ensure that new customers are able to fully utilise and benefit from the product or service, and to minimise any barriers or challenges they may encounter during the onboarding process. Some common services provided as part of our onboarding for customer service g include account setup and configuration, training and support, integration and data migration, customization and configuration, and marketing and promotion.<br /><br />
              These services are provided by our expert agency, and delivered through a variety of channels, such as in-person training sessions, online tutorials, or written documentation. Overall, the goal of customer onboarding services is to help new customers get up and running quickly and effectively, and to ensure that they are able to fully utilise and benefit from the product or service.</p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Who We Are?
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                We at Tech2Globe Canada understand that the process of onboarding for customer service for new customers can be overwhelming and time-consuming, especially for businesses that are growing quickly. That's where we come in.<br />
                Our onboarding for customer services are designed to streamline the process and ensure that new customers get the support and resources they need to succeed. Our team has a wealth of experience in customer onboarding, and we know what it takes to make the process as smooth and seamless as possible. We work closely with businesses to understand their unique needs and challenges and develop customised onboarding plans tailored to ea  ch business.<br />
                We also understand that every business is different, so we offer various customer onboarding services to meet your needs.
              </p>
            </div>
          </div>
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

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Services Offered by Customer<br />
              Onboarding Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Effortlessly transition new customers into loyal brand advocates with our onboarding for customer service.</p>
          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>






      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Process That We Believe Has Worked For Us
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              The process for customer onboarding services can vary depending on the company's specific needs and the product or service being offered. However, here is a general outline of the steps that agencies for customer onboarding services often follow
            </p>
          </div>

          <div className="workflow-grid newgrid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Initial consultation</h3>
              <p className="workflow-desc">
                During this stage, we work with the company to understand its specific needs and goals for the onboarding process. This includes gathering information about the target audience, the offered product or service, and any unique challenges or requirements.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Strategy development</h3>
              <p className="workflow-desc">
                Based on the information gathered during the initial consultation, we develop a customised Customer data onboarding service strategy tailored to the company's specific needs. Here we create a timeline, identifying key milestones, and outlining the resources and support that will be needed.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Onboarding materials development</h3>
              <p className="workflow-desc">
                Tech2Globe works with your company to develop the materials and resources needed for the onboarding process. Now we do it by creating user manuals, tutorial videos, training materials, and other resources to help new customers understand and use the product or service.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Implementation</h3>
              <p className="workflow-desc">
                Now we work with the company to implement the onboarding for customer service strategy, including delivering the necessary materials and resources to new customers and providing support.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <h3 className="workflow-title">Evaluation and optimization</h3>
              <p className="workflow-desc">
                After the Customer data onboarding service process has been implemented, we review the results and look for opportunities to optimise and improve the process. At this step we do it by gathering feedback from new customers, analysing data, and making necessary adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                But Why Do You Need<br />
                Customer Onboarding Services?
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Maximise customer retention from day one with our comprehensive onboarding services!
              </p>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

              {/* Proficient Team */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                  <FiActivity size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Improved customer satisfaction</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Our effective customer onboarding process helps new customers quickly and easily understand how to use the product or service, which can improve their satisfaction with the product or service.
                </p>
              </div>

              {/* Collaborative Process */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                  <FiCalendar size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Increased retention</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Customers who have a positive onboarding experience are more likely to continue using the product or service and are less likely to churn.
                </p>
              </div>

              {/* Industry Experience */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                  <FiFeather size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Better understanding of the product or service</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Onboarding helps customers gain a deeper understanding of the features and benefits of the product or service, which can lead to increased usage and satisfaction.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                  <FiFileText size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Greater efficiency</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  A well-designed onboarding process can streamline the process of introducing new customers to the product or service, making it easier and more efficient for the company to onboard new customers.
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
              Additional Support You Can Expect
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              Simplify and accelerate the Customer data onboarding service journey with our specialised services.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">User manuals and documentation</h3>
              <p className="workflow-desc">
                You get detailed documentation and user manuals to help new customers understand how to use the product or service.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Tutorial videos and demonstrations</h3>
              <p className="workflow-desc">
                We create videos or offer live demonstrations to help new customers understand how to use the product or service.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Training and education materials</h3>
              <p className="workflow-desc">
                You will be provided training materials or hold training sessions to help new customers learn about the features and benefits of the product or service.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Customer support</h3>
              <p className="workflow-desc">
                A dedicated customer support to help new customers with any questions or issues they may have during the onboarding process.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <h3 className="workflow-title">Integration support</h3>
              <p className="workflow-desc">
                A complete support to help new customers integrate the product or service with other systems or processes.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">06.</span>
              <h3 className="workflow-title">Account setup and configuration</h3>
              <p className="workflow-desc">
                We will be assisting you with setting up and configuring new customer accounts.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">07.</span>
              <h3 className="workflow-title">Regular updates and new features</h3>
              <p className="workflow-desc">
                Regular updates and new features to help new customers get the most out of the product or service.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">08.</span>
              <h3 className="workflow-title">Customized Onboarding Process</h3>
              <p className="workflow-desc">
                We provide a customized onboarding process, tailored to your needs, to ensure a smooth experience and build confidence in using our product or service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden servicestwo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Why Consider Tech2Globe For Onboarding Services?

            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Transform first-time customers into lifelong supporters with our proven onboarding process!</p>
          </div>
          <ServiceCards services={servicesData2} columns={2} />
        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
