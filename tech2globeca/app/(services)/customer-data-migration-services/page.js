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
  FiUser,
  FiCheckSquare,
  FiTruck,
  FiArchive,
  FiMap,
  FiBarChart,
  FiRefreshCcw,
  FiUserPlus,
  FiAlertCircle,
  FiClock,
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck, FaStickyNote } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";
import { AiFillCalculator, AiFillIdcard } from "react-icons/ai";


export const metadata = {

  title: "",

  description:
    "",

  keywords: [

  ],
};

const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.png' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.png' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.png' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.png' },
];

const testimonialsData = [
  {
    id: 1,
    letter: "M",
    name: "Michael",
    subname: "Business Owner",
    text: "We recently worked with Tech2Globe’s customer data migration services to transfer our customer data from an old CRM system to a new one. The process was smooth and efficient, and the team at Tech2Globe was incredibly helpful and responsive throughout. We were extremely happy with the results and would definitely use their services again in the future."
  },
  {
    id: 2,
    letter: "L",
    name: " Lisa",
    subname: "E-commerce Manager",
    text: "Tech2Globe customer data migration services did an excellent job of transferring our customer data from multiple sources into a single, centralised database.They were very thorough in their data preparation and validation processes, and the final result was a clean and organised customer database that has made our work much more efficient.We highly recommend Tech2Globe's services."
  },
  {
    id: 3,
    letter: "J",
    name: "Jennifer",
    subname: "Marketing Director",
    text: "We were very impressed with the level of expertise and professionalism displayed by Tech2Globe  during the customer data migration services.They were able to handle the complexity of our data with ease and were able to complete the migration on time and on budget.We would definitely use their services again in the future."
  }
];


const faqsData = [
  {
    question: "Why do I need customer data migration services?",
    answer: `
      Customer data migration services may be necessary when an organisation is upgrading to a new system or consolidating data from multiple sources into a single database. These services can help ensure that the data is transferred smoothly and accurately, and that the organisation has access to the most up-to-date customer data.
    `,
  },
  {
    question: "How long does the customer data migration process take?",
    answer: `
      The length of the customer data migration process can vary depending on the size and complexity of the data being migrated, as well as the specific needs of the organisation. In general, it is important to allow enough time for a thorough data assessment, data preparation, and data validation process. It is also important to allow for any unforeseen challenges that may arise during the migration process.
    `,
  },
  {
    question: "Will my customer data be secure during the migration process?",
    answer: `
      Security is a top priority when it comes to customer data migration, and reputable customer data migration service providers will take steps to ensure the security of the data throughout the process. This may include using secure data transfer protocols, encrypting the data, and following strict data handling procedures.
    `,
  },
  {
    question:
      "What happens if there is an issue with the data during the migration process?",
    answer: `
      If an issue arises with the data during the migration process, the customer data migration service provider should have a plan in place to address the issue and resolve it. This may involve working with the customer to identify the cause of the issue and developing a plan to correct it.
    `,
  },
  {
    question: "Can I do the customer data migration process myself?",
    answer: `
      While it is technically possible for an organisation to handle their own customer data migration, it can be a complex and time-consuming process. Working with a customer data migration service provider can help ensure that the process is carried out smoothly and efficiently, and can also provide the necessary expertise and support to handle any challenges that may arise.
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Ensuring the Continuity of Business",
    description:
      "Migrating customer data is essential for maintaining the continuity of your business. If you are switching to a new system or platform, or merging with another company, you will need to ensure that your customer data is transferred accurately so that you can continue to serve your customers without any disruption.",
    icon: <FiRefreshCw size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Protecting Customer Data",
    description:
      "Database migration service is also important for protecting sensitive information, such as payment details and personal information. A professional data migration service can ensure that this data is transferred securely and in compliance with relevant regulations.",
    icon: <FiShield size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Reducing the Risk of Errors",
    description:
      "Migrating customer data manually can be time-consuming and prone to errors. Using a professional service can help reduce the risk of errors, as our team has the necessary tools and expertise to ensure that the data is transferred accurately.",
    icon: <FiAlertCircle size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Saving Time and Resources",
    description:
      "Migrating customer data can be a complex and time-consuming process, especially if you are dealing with large amounts of data.",
    icon: <FiClock size={32} color="#ffffff" />,
  },
];


const servicesData2 = [
  {
    id: 1,
    title: "Upgrading to a new system",
    description:
      "One common reason for customer data migration is when an organisation upgrades to a new system. This could be a new customer relationship management (CRM) system, a new database, or a new software application. In these cases, customer data needs to be transferred from the old system to the new one to ensure that the organisation can access accurate and up-to-date customer data.​",
    icon: '',
  },
  {
    id: 2,
    title: "Consolidating data from multiple sources",
    description:
      "Another situation in which database migration service may be necessary is when an organisation consolidates data from various sources into a single database. This could result from a merger, acquisition, or simply a desire to streamline the organisation's data management processes. Customer data needs to be transferred from multiple sources into a centralised database in these cases.​",
    icon: '',
  },
  {
    id: 3,
    title: "Migrating to the cloud",
    description:
      "Some organisations may choose to relocate their customer data to the cloud to take advantage of the scalability and flexibility of cloud-based solutions. In these cases, customer data must be transferred from an on-premises system to a cloud-based one.",
    icon: '',
  },
  {
    id: 4,
    title: "Changing data storage platforms",
    description:
      "Sometimes, an organisation may switch to a new data storage platform, such as moving from a traditional database to a data lake or data warehouse. In these situations, database migration service may be necessary to transfer the data from the old platform to the new one.",
    icon: '',
  },
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


export default function CustomerDataMigrationServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Best Customer Data Migration Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Customer Data Migration Services", href: "/customer-data-migration-services" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center gap-10">


          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-3">
            Best Customer Data Migration Services
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mb-3 mx-auto"></div>
          <p className="text-gray-600 mb-3 leading-relaxed text-center">Our professionals can assist you if you require a speedy, effective, and secure data moving service!<br />
            Customer data migration services involve transferring customer data from one system or platform to another. This is often necessary when a business is switching to a new system or platform, or when it is merging with another company and needs to combine customer data from both systems. Customer data migration services can include transferring a wide range of data, including:</p>


        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">


          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiUsers className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Customer contact information</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                It includes gathering names, addresses, phone numbers, and email addresses.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiUserPlus className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Customer account information</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Login credentials, account preferences, and any other information related to the customer's account.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiRefreshCcw className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Customer transaction history</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Information about past orders, returns, and refunds.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiFileText className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Customer loyalty program data</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Insights about a customer's loyalty points or rewards, as well as any other data related to the program.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Why Is Customer Data Migration Service Important For Your Business?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Using a professional service can save you time and resources, we will handle the entire process for you!</p>
          </div>
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Tech2Globe Provide Customised Migrations From Any<br />
              Source To Any Target
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Experience seamless data migration with our customer-centric approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Create Strategies
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We solve your specific archive difficulties and offer cost-effective data migration services.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Improve Outcomes
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We assist you in determining which target archives will best fulfil your specific data compliance requirements.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Migrate With Confidence
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                We provide you with flexibility and control, as well as a comprehensive chain of custody until the task is completed.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Data Migration Services Process We Follow With Proven Track Record
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              When it comes to assisting enterprises with their data migration difficulties, our database migration services professionals offer unparalleled expertise.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Planning</h3>
              <p className="workflow-desc">
                The first step in the database migration services is to carefully plan out the migration. We involve identifying the specific data that needs to be migrated, assessing the current system and the new system to ensure compatibility, and developing a timeline for the migration.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Data Preparation</h3>
              <p className="workflow-desc">
                The next step is to prepare the data for migration. We clean and organise the data, ensuring that it is in a format that is compatible with the new system, and verifying the accuracy and completeness of the data.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Data Transfer</h3>
              <p className="workflow-desc">
                Once the data is prepared, the actual transfer of the data from the old system to the new system can take place. We use specialised tools or software to facilitate the transfer, or it may involve manually entering the data into the new system.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Data Validation</h3>
              <p className="workflow-desc">
                After the data has been transferred by our data migration services, it is important to validate that all of the data has been transferred correctly and that the data is accurate and complete. We compare the data in the old system to the data in the new system, or run tests to ensure that the data is being used correctly in the new system.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <h3 className="workflow-title">Data Cleanup</h3>
              <p className="workflow-desc">
                Depending on the complexity of the data being migrated, there may be some cleanup work that needs to be done after the migration is complete. We at Tech2Globe do it by removing any duplicate or unnecessary data, or making sure that all of the data is properly organised and structured in the new system.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#0000001a] overflow-hidden servicestwo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              When Are Customer Data Migration Services Necessary?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Maximise efficiency and minimise disruption with our comprehensive customer data migration services!</p>
          </div>
          <ServiceCards services={servicesData2} columns={2} />
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center gap-10">


          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-3">
            Partner With Tech2Globe For Efficient Database Migration Services
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mb-3 mx-auto"></div>
          <p className="text-gray-600 mb-3 leading-relaxed text-center">Ensure a smooth customer experience during data migration with our specialised services!<br />
            Tech2Globe Canada offers a comprehensive database migration service, supported by both in-house expertise and a track record of delivering multi-industry projects. With project teams composed of data migration business professionals, data migration profiling consultants, data migration project managers, data migration architects, data migration ETL developers, and data quality specialists, our data migration experts can provide the necessary expertise.<br />
            Fill out the form, email us at info@tech2globe.com, or call us now to get started on your next data migration project.</p>


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
              We Will Ensure That The Database Migration Services Process<br />
              Is Built With Availability, Security, And Dependability
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              Transform your customer data migration process into a strategic advantage with our expertise!
            </p>
          </div>


          <div className="workflow-grid for-datamigration">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Recognizing the purpose of your data</h3>
              <p className="workflow-desc">
                We'll examine the information environment to determine how and where you use your data, as well as who uses it. We'll also see if the data should be used differently in the future.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Ensure data accuracy (especially in legit systems)</h3>
              <p className="workflow-desc">
                We'll do a thorough quality assessment with our data migration services to ensure that your users are serviced both now and in the future.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Validation is still continuing</h3>
              <p className="workflow-desc">
                Making changes after migration can be expensive. As a result, while migrating data from one system to another, we'll produce a visual prototype of the new approach to ensure that the data is used exactly as you planned; changes can be done at any moment.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Testing with end users</h3>
              <p className="workflow-desc">
                We like to share the prototype with your end-users for a User Acceptance Test (UAT), the final migration, to verify it meets the criteria and validates it.
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
