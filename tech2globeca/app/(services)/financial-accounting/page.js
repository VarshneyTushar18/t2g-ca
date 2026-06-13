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
  FiCheckCircle,
  FiZap,
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

const testimonialsData = [
  {
    id: 1,
    letter: "M",
    name: "Alice Smith",
    subname: "Business Owner",
    text: "I highly recommend Tech2Globe for their finance and account data entry services. Their team of experts has helped us to efficiently and accurately input and manage our financial data, and they always go above and beyond to deliver great results. Thank you Tech2Globe for helping our business succeed!"
  },
  {
    id: 2,
    letter: "L",
    name: "Bob Johnson",
    subname: "E-commerce Manager",
    text: "Tech2Globe Canada has been a game changer for our business. We were struggling to efficiently input and manage our financial data, but since working with Tech2Globe, we have seen a significant improvement. Their team is knowledgeable and always willing to help, and their finance and account data entry services have been invaluable. I highly recommend Tech2Globe to any business looking to improve their financial data management."
  },
  {
    id: 3,
    letter: "J",
    name: "Carol Williams",
    subname: "Marketing Director",
    text: "I am extremely satisfied with the finance and account data entry services provided by Tech2Globe. They have helped us to efficiently and accurately input and manage our financial data, and their team is always responsive and willing to go above and beyond to meet our needs. I highly recommend their services to any business looking to improve their financial data management."
  }
];


const faqsData = [
  {
    question:
      "What are accounting and financial data entry service Canada?",
    answer: `
      Accounting and financial data entry service Canada is the process of outsourcing tasks related to financial and accounting data entry to a third-party company. This can include tasks such as bookkeeping, invoicing, payroll, and financial reporting.
    `,
  },
  {
    question:
      "Why should a business consider outsourcing their financial and accounting data entry tasks?",
    answer: `
      There are several reasons why a business might consider outsourcing their financial and accounting data entry tasks. These can include cost savings, access to specialised expertise, increased efficiency, and the ability to focus on core business activities.
    `,
  },
  {
    question:
      "What are the benefits of outsourcing financial and accounting data entry tasks?",
    answer: `
      Some of the benefits of outsourcing financial and accounting data entry tasks include cost savings, increased efficiency, access to specialised expertise, and the ability to focus on core business activities.
    `,
  },
  {
    question:
      "What are the potential risks of outsourcing financial and accounting data entry tasks?",
    answer: `
      Some potential risks of outsourcing financial and accounting data entry tasks include the loss of control over the data, the potential for data security breaches, and the potential for miscommunication or misunderstandings with the outsourcing company.
    `,
  },
  {
    question:
      "How can a business ensure that their financial and accounting data is being handled securely and accurately when outsourcing?",
    answer: `
      A business can ensure the security and accuracy of their financial and accounting data by carefully selecting a reputable and reliable outsourcing company, establishing clear communication and expectations with the outsourcing company, and regularly reviewing and monitoring the work of the outsourcing company.
    `,
  },
];

const servicesData = [
  {
    id: 1,
    title: "Cost Savings",
    description:
      "Outsourcing can be more cost-effective than hiring in-house staff to handle these tasks. You'll save money on salary, benefits, and training costs.",
    icon: <FiDollarSign size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Time Savings",
    description:
      "Outsourcing allows you to focus on your core business functions while experts handle the data entry, freeing time for other important tasks.",
    icon: <FiClock size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Accuracy",
    description:
      "Financial and accounting data entry requires high accuracy and attention to detail. Professionals ensure data is entered accurately and efficiently.",
    icon: <FiCheckCircle size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Improved Efficiency",
    description:
      "Professional financial data entry services use efficient tools and processes to improve your business operations.",
    icon: <FiTrendingUp size={32} color="#ffffff" />,
  },
  {
    id: 5,
    title: "Expertise",
    description:
      "Gain access to experienced professionals knowledgeable in accounting and financial data entry services.",
    icon: <FiUsers size={32} color="#ffffff" />,
  },
  {
    id: 6,
    title: "Increased Efficiency",
    description:
      "Outsourcing lets you focus on core competencies while experts manage data entry quickly and accurately.",
    icon: <FiZap size={32} color="#ffffff" />,
  },
  {
    id: 7,
    title: "Access to Specialised Skills",
    description:
      "Work with skilled professionals who can handle complex financial and accounting data entry tasks.",
    icon: <FiTool size={32} color="#ffffff" />,
  },
  {
    id: 8,
    title: "Scalability",
    description:
      "Scale financial and accounting data entry operations based on business needs while improving cost efficiency.",
    icon: <FiBarChart2 size={32} color="#ffffff" />,
  },
];


const servicesData2 = [
  {
    id: 1,
    title: "Access to bank statements",
    description:
      "​",
    icon: '',
  },
  {
    id: 2,
    title: "Access to all purchase, sales and expense invoices",
    description:
      "​",
    icon: '',
  },
  {
    id: 3,
    title: "Last available balance sheet and Income statement",
    description:
      "",
    icon: '',
  },
  {
    id: 4,
    title: "Back-up/access to accounting software",
    description:
      "",
    icon: '',
  },
  {
    id: 5,
    title: "Access to GST Portal",
    description:
      "",
    icon: '',
  },
  {
    id: 6,
    title: "Any other relevant information required to do accounting",
    description:
      "",
    icon: '',
  },
];

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
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.webp' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.webp' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.webp' },
];



export default function FinancialAccounting() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Financial And Accounting Data Entry Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Financial Accounting", href: "/financial-accounting" }
        ]}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/account.webp"
                alt="Financial And Accounting Data Entry Services"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <h4 className="text-2xl md:text-3xl font-semibold  mb-3">
              Financial And Accounting Data Entry Services
            </h4>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className=" mb-8 leading-relaxed">
              Financial and accounting data entry services Toronto are essential for businesses, organisations, and individuals looking to effectively manage their financial information and make informed financial decisions. These services cover a wide range of tasks and activities related to financial management, including bookkeeping, tax preparation and filing, financial planning and consulting, auditing, budgeting and forecasting, and financial reporting. Whether you are a small business owner, a non-profit organisation, or an individual with personal financial goals, financial data entry service Canada can help you better understand your financial situation, identify opportunities and challenges, and develop strategies to achieve your financial objectives.
            </p>
          </div>



        </div>
      </section>

      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-3/4">
            <h4 className="text-2xl md:text-3xl font-semibold  mb-3">
              Leave The Tedious Task Of Financial Data Entry To Us And Focus On Driving Your Business Forward
            </h4>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className=" mb-8 leading-relaxed">
              If you are considering financial data entry outsourcing, it is important to choose a provider that has the expertise, experience, and resources to meet your specific needs. We are the top providers offering a range of services, from basic bookkeeping to advanced financial planning and analysis, and that has a proven track record of helping clients succeed. By partnering with our reputable financial and accounting service provider, you can gain access to the tools, insights, and guidance you need to make informed financial decisions and achieve your financial goals.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/drive.webp"
                alt="Leave The Tedious Task Of Financial Data Entry To Us And Focus On Driving Your Business Forward"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/data.webp"
                alt="Streamline Your Financial Processes And Save Valuable Time With Our Data Entry Services By Tech2Globe"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <h4 className="text-2xl md:text-3xl font-semibold  mb-3">
              Streamline Your Financial Processes And Save Valuable Time With Our Data Entry Services By Tech2Globe
            </h4>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className=" mb-8 leading-relaxed">
              If you’re considering financial data entry outsourcing services to Tech2Globe, there are several key factors you should consider. First and foremost, you’ll want to look for a provider that has a proven track record of success in the industry. This includes a history of happy clients, a strong reputation, and a demonstrated ability to deliver high-quality results. You’ll also want to look for a provider that has a wide range of services and capabilities. Fortunately, Tech2Globe can help you with all this. Tech2Globe offers a range of financial and accounting data entry services Toronto, including bookkeeping, tax preparation and filing, financial planning and consulting, auditing, budgeting and forecasting, and financial reporting. This ensures that you’ll be able to find a solution that meets your specific needs. We are a team of experts that is reliable, responsive, and easy to work with. Tech2Globe prides itself on its customer service and is dedicated to ensuring that its clients are satisfied with the services it provides. Finally, it’s important to choose a provider that is affordable and offers value for money. Tech2Globe offers competitive pricing and works with its clients to develop customized solutions that meet their specific budget constraints.
            </p>
          </div>



        </div>
      </section>

      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-3/4">
            <h4 className="text-2 md:text-3xl font-semibold  mb-3">
              The Goals We Stick To While Providing You Our Accounting Data Entry Services Toronto:
            </h4>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className=" mb-8 leading-relaxed">
              At Tech2Globe, we understand that accurate and timely financial data is crucial for the success of any business. That's why we offer a range of financial data entry outsourcing services to help our clients streamline their financial processes and make informed decisions. Our team of skilled professionals is trained to handle a wide range of financial tasks, including accounting data entry services , bookkeeping, accounts payable and receivable, payroll, and more. We use advanced tools and technologies to ensure that all of our work is accurate and up-to-date, and we are committed to providing the highest level of financial data entry service Canada to our clients.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/Toronto.webp"
                alt="The Goals We Stick To While Providing You Our Accounting Data Entry Services Toronto:"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-3">
            When outsourcing your accounting data entry services to Tech2Globe, you can expect:
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mb-8 mx-auto"></div>


          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiUsers className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Professional and efficient service</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Our team is highly trained and experienced in financial data entry outsourcing, and we take pride in our attention to detail and ability to meet tight deadlines.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiUserPlus className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Customised solutions</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                We understand that every business is unique, and we will work with you to develop customized solutions that meet your specific needs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiRefreshCcw className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Secure and confidential handling of your data</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                We take the security and confidentiality of your financial information very seriously and use advanced security measures to protect it.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiFileText className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Increased efficiency and accuracy</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                By outsourcing your accounting tasks to Tech2Globe, you can free up time and resources to focus on other areas of your business while still ensuring that your financial data is accurate and up-to-date.
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
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Benefits Of Outsourcing Financial And Accounting Data Entry Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>There are several benefits to outsourcing your financial and accounting data entry tasks to a professional service like Tech2Globe:</p>
          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Process For Accounting Data Entry Services Toronto
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              That Will Take Your Financial Management To The Next Level
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Initial Discussion</h3>
              <p className="workflow-desc">
                We begin by having a detailed discussion with our clients to understand their business, the frequency of their accounting needs, the scope of the accounting data entry services Toronto required, and any backlog of accounting work. We also discuss the selection of accounting software. This step helps us to fully understand our clients' needs and set up the processes accordingly.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Scoping and Quotation</h3>
              <p className="workflow-desc">
                After the initial discussion, our team will brainstorm and design a proper process that meets our clients' needs. We will then share the scope and quotation with them for approval, to ensure that there is no communication gap.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Information Gathering</h3>
              <p className="workflow-desc">
                Once the scope and quotation have been agreed upon, we will gather all necessary information, such as bank statements and invoices, to begin the accounting process. We will also set up accounting software, such as Tally or Zoho, and gather GST login credentials. Our team will analyse the information and communicate with our clients on the expected date for the next communication.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Client Discussion</h3>
              <p className="workflow-desc">
                Our team will have further discussion with clients or their team members as needed to clarify any transactions requiring more information. We work as a team to finalise the accounts.
              </p>
            </div>
            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <h3 className="workflow-title">Finalising Accounts</h3>
              <p className="workflow-desc">
                After incorporating any necessary changes, the final accounts will be shared with our clients for their business decision-making. They can view their accounts on a mobile app, making their accounting database easily accessible from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden servicestwo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Documents You’ll Need For Accounting Data Entry Services:
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
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
