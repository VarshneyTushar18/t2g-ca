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
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";
import { AiFillCalculator } from "react-icons/ai";


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
    letter: "AS",
    name: "Alice Smith",
    subname: "Business Owner",
    text: "I highly recommend Tech2Globe Canada for their logistics and transportation data entry services. Their team of experts has helped us to efficiently and accurately input and manage our shipping and delivery data, and they always go above and beyond to deliver great results. Thank you Tech2Globe for helping our business succeed!"
  },
  {
    id: 2,
    letter: "BJ",
    name: "Bob Johnson",
    subname: "E-commerce Manager",
    text: "Tech2Globe Canada has been a game changer for our logistics and transportation business. We were struggling to efficiently input and manage our shipping and delivery data, but since working with Tech2Globe, we have seen a significant improvement. Their team is knowledgeable and always willing to help, and their logistics and transportation data entry services have been invaluable. I highly recommend Tech2Globe to any logistics and transportation business looking to improve their data management."
  },
  {
    id: 3,
    letter: "CW",
    name: "Carol Williams",
    subname: "Marketing Director",
    text: "I am extremely satisfied with the logistics and transportation data entry services provided by Tech2Globe. They have helped us to efficiently and accurately input and manage our shipping and delivery data, and their team is always responsive and willing to go above and beyond to meet our needs. I highly recommend their services to any logistics and transportation business looking to improve their data management."
  }
];


const faqsData = [
  {
    question: "What is logistics and transportation data entry?",
    answer: `
      Logistics and transportation data entry involves capturing, organising, and inputting data related to logistics and transportation processes, such as shipping, warehousing, and transportation management. This data may include details such as shipping addresses, delivery dates, tracking information, and more.
    `,
  },
  {
    question:
      "What are the benefits of outsourcing logistics and transportation data entry?",
    answer: `
      Logistics data entry outsourcing service can help businesses save time and resources, as well as improve accuracy and efficiency. Professional transportation data entry services can handle the data entry process efficiently and accurately, allowing businesses to focus on other areas of their operations.
    `,
  },
  {
    question:
      "What types of data are typically included in logistics and transportation data entry?",
    answer: `
      Logistics and transportation data entry may include a variety of data, such as shipping addresses, delivery dates, tracking information, freight rates, warehouse management data, and more.
    `,
  },
  {
    question:
      "How is logistics and transportation data entry typically performed?",
    answer: `
      Logistics and transportation data entry is typically performed using specialised software or tools that are designed to handle large volumes of data efficiently. Data entry professionals may use a combination of manual data entry and automation to ensure accuracy and speed.
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Invoice Generation Data Entry",
    description:
      "This service involves entering information about invoices related to logistics and transportation into a database or system.",
    icon: <FiLayout size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Driver Login Data Entry",
    description:
      "This service involves entering information about driver login and activity into a database or system.",
    icon: <FiUser size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Calculation of Logistics Input",
    description:
      "This service involves calculating logistics input, such as fuel consumption, to help businesses and organisations track and optimise their logistics operations.",
    icon: <AiFillCalculator size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Internal Auditing Services",
    description:
      "Tech2Globe offers internal auditing services to help businesses and organisations identify and address any issues or inefficiencies in their logistics and transportation operations.",
    icon: <FiCheckSquare size={32} color="#ffffff" />,
  },
  {
    id: 5,
    title: "Overcharge Evaluation",
    description:
      "This service involves evaluating any overcharges that may have occurred in logistics and transportation operations and helping businesses recover any overpaid amounts.",
    icon: <FiDollarSign size={32} color="#ffffff" />,
  },
  {
    id: 6,
    title: "Claim Dispute Settlement",
    description:
      "Tech2Globe can help businesses and organisations resolve any disputes that may arise in relation to logistics and transportation claims.",
    icon: <FiFileText size={32} color="#ffffff" />,
  },
  {
    id: 7,
    title: "Data Entry of Freight Bill",
    description:
      "This service involves entering information about freight bills into a database or system.",
    icon: <FiDatabase size={32} color="#ffffff" />,
  },
  {
    id: 8,
    title: "Freight Bill Data Entry",
    description:
      "This service involves entering information about freight bills into a database or system. This can include details such as bill of lading numbers, shipment dates, weight and dimensions, and more.",
    icon: <FiTruck size={32} color="#ffffff" />,
  },
  {
    id: 9,
    title: "Purchase Order Data Entry",
    description:
      "Tech2Globe can help businesses and organisations enter and manage information about purchase orders related to logistics and transportation. This can include details such as item descriptions, quantities, prices, and delivery dates.",
    icon: <FiShoppingCart size={32} color="#ffffff" />,
  },
  {
    id: 10,
    title: "Inventory Management",
    description:
      "Tech2Globe offers logistic data entry service to help businesses and organisations track and manage their inventory levels. This can include entering and updating information about stock levels, reorder points, and more.",
    icon: <FiArchive size={32} color="#ffffff" />,
  },
  {
    id: 11,
    title: "Route Planning",
    description:
      "Tech2Globe can help businesses and organisations optimise their routes and schedules by entering and managing data about transportation and delivery schedules.",
    icon: <FiMap size={32} color="#ffffff" />,
  },
];


const servicesData2 = [
  {
    id: 1,
    title: "Save time and resources",
    description:
      "Logistics data entry outsourcing services can free up time and resources that would otherwise be spent on data entry tasks. This can allow you to focus on more important tasks, such as managing your logistics and transportation operations or serving your customers.​",
    icon: '',
  },
  {
    id: 2,
    title: "Improve accuracy",
    description:
      "Tech2Globe's team of experienced data entry professionals are trained to ensure the highest level of accuracy in their work.With our logistics data entry outsourcing services, you can be confident that your logistics data is accurate and up - to - date.​",
    icon: '',
  },
  {
    id: 3,
    title: "Enhance efficiency",
    description:
      "Tech2Globe's transportation data entry services are designed to be efficient and streamlined, helping you to manage your logistics and transportation operations more effectively.",
    icon: '',
  },
  {
    id: 4,
    title: "Scale up or down easily",
    description:
      "Logistics data entry outsourcing services allows you to scale up or down your data entry needs easily, without having to hire or lay off in -house staff.",
    icon: '',
  },
  {
    id: 5,
    title: "Stay current with industry best practices",
    description:
      "Tech2Globe Canada stays up - to - date on the latest technologies and best practices in logistics data entry, ensuring that you are always using the most effective methods for managing your logistics data.",
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

export default function LogisticTransportation() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Logistics and Transportation Outsourcing Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Logistic Transportation", href: "/logistic-transportation" }
        ]}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/logistic.jpg"
                alt="Our Logistic Data Entry Service Keep Your Logistics Moving Forward"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>


          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Our Logistic Data Entry Service Keep Your Logistics Moving Forward
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="text-gray-600 mb-3 leading-relaxed">Logistics data entry outsourcing services involve the process of outsourcing the task of entering and managing logistics data to a specialised company or team. This can include tasks such as entering and updating information about shipments, tracking orders, managing inventory, and more. Outsourcing logistics data entry can bring a number of benefits to businesses and organisations. It can save time and resources by allowing in-house staff to focus on more important tasks, and can also help ensure accuracy and efficiency by taking advantage of the expertise and experience of specialised data entry professionals. Logistics data entry outsourcing services can also provide flexibility and scalability, as businesses can easily scale up or down their data entry needs without having to hire or lay off in-house staff.</p>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              How Tech2Globe Offers You Multidimensional<br />
              Logistics Services?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Tech2Globe provides a range of logistics data entry outsourcing services to help businesses and organisations manage their logistics and transportation operations more efficiently and accurately. Some of the services we offer include:</p>
          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>


      <ClientSlider title="Our Clients" clients={clientsData} />


      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Procedure of Logistics Data Entry Services at Tech2Globe
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              Tech2Globe is a company that provides a range of logistics data entry services to help businesses and organisations manage their logistics and transportation operations more efficiently and accurately. Here is a general overview of the procedure for their transportation data entry services:
            </p>
          </div>


          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Initial consultation</h3>
              <p className="workflow-desc">
                The first step in the process is to schedule a consultation with Tech2Globe to discuss your logistics data entry needs. During this consultation, you can provide information about your business, your data entry requirements, and any specific challenges or goals you have.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Customised solution</h3>
              <p className="workflow-desc">
                Based on the information you provide, Tech2Globe will develop a customised solution to meet your logistics data entry needs. This may include a combination of different services and technologies, depending on your specific requirements.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Data collection</h3>
              <p className="workflow-desc">
                Tech2Globe will work with you to collect the necessary data for your logistics data entry project. This may involve providing Tech2Globe with access to your existing data, or working with you to gather new data as needed.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Data entry</h3>
              <p className="workflow-desc">
                Tech2Globe's team of experienced data entry professionals will then enter and manage your logistics data according to the agreed-upon plan. This include tasks such as updating and organising data, verifying and correcting data for accuracy, and integrating data with logistics and transportation management systems.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <h3 className="workflow-title">Quality assurance</h3>
              <p className="workflow-desc">
                Tech2Globe Canada follows a thorough quality assurance process to ensure that all data is entered accurately and meets the agreed-upon specifications. This includes multiple levels of review and verification.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">06.</span>
              <h3 className="workflow-title">Data delivery</h3>
              <p className="workflow-desc">
                Once the data entry process is complete, Tech2Globe will deliver the completed data to you in a format that is easy to use and access.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#0000001a] overflow-hidden servicestwo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Advantages of Outsourcing Logistics Data Entry Services to Tech2Globe Canada
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Effortlessly drive project success with our comprehensive outsourced management services!</p>
          </div>
          <ServiceCards services={servicesData2} columns={3} />
        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
