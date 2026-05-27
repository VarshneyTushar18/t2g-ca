import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import {
  FiClipboard,
  FiEdit,
  FiDroplet,
  FiImage,
  FiFileText,
  FiList,
  FiActivity,
  FiCreditCard,
  FiUsers,
  FiBookOpen,
  FiShield,
  FiDatabase,
} from "react-icons/fi";

import ServiceCards from "@/components/ServiceCards";
import ServiceExpertise from "@/components/services/ServiceExpertise";
import ServiceIntro from "@/components/services/ServiceIntro";
import ClientSlider from "@/components/ClientSlider";

const bannerImage = "/images/innerbanner/data-entry-2.png";

export const metadata = {
  title: "Restaurant Menu Data Entry Services | Get Your Menu Organized",
  description:
    "Elevate your online presence with our restaurant menu data entry services! Boost restaurant efficiency, enhance your restaurant's digital presence, and streamline menu management.",

  keywords: [
    "restaurant menu data entry services",
    "menu digitization services",
    "restaurant data entry",
    "online menu management",
    "food delivery menu upload",
  ],

  alternates: {
    canonical:
      "https://tech2globe.ca/restaurant-menu-data-entry-services",
  },

  openGraph: {
    title: "Restaurant Menu Data Entry Services | Get Your Menu Organized",
    description:
      "Elevate your online presence with our restaurant menu data entry services!",
    url: "https://tech2globe.ca/restaurant-menu-data-entry-services",
  },

  twitter: {
    title: "Restaurant Menu Data Entry Services | Get Your Menu Organized",
    description:
      "Boost restaurant efficiency and streamline menu management.",
  },

}

const faqsData = [
  {
    question: "What do you understand about restaurant menu data entry services?",
    answer:
      "These services can be useful to you if you need to handle data entry work regarding the restaurant's operations such as order management, menu card data entry, menu digitization, stock. For more information, you can contact Tech2Globe via email or phone."
  },
  {
    question:
      "Do you agree to a confidentiality agreement or non-disclosure agreement to safeguard private company data?",
    answer:
      "We do, indeed. When you share confidential information, business plans, ideas, or strategies with us while working with us, we keep everything completely confidential."
  },
  {
    question: "How much do you cost for one data entry project?",
    answer:
      "The pricing may vary from one project to another according to its needs and requirements. You may consult our experts with your project via phone or email, and they will let you know what help it requires and at what price. You will be free of any budget stress as we aim to deliver the best services at a minimal cost to every client."
  },
  {
    question:
      "How long will it take your restaurant menu entry services company to complete a single project?",
    answer:
      "The pre-project consultation process will take two weeks, our research design and planning phase will take four to six weeks, and then we will start our developing phase. This is how we make sure to set deadlines for all new projects that we examine. We ensure that a client is kept informed at every stage and that a successful website is delivered within the deadline we have set."
  },
  {
    question:
      "Do I have to travel to your company while my project is being processed?",
    answer:
      "You are not required to do this. The Project Manager overseeing your project or the programmer working on your project will provide you a thorough report on the status of your project at the conclusion of each working day. Through VOIP, email, or any other desired method of connection with you, we retain simple accessibility and an open line of communication. Our quality control team keeps a check and closely monitors the workflow to enable you to get superior results all throughout."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "TD",
    name: "Taseem Dwiz",
    subname: "",
    text: "I appreciate the advantages and high standards that this organisation supports."
  },
  {
    id: 2,
    letter: "MS",
    name: "Mariam Seel",
    subname: "",
    text: "Hours of labour and possibly hundreds of dollars are saved. All thanks to Tech2Globe."
  },
  {
    id: 3,
    letter: "RG",
    name: "Ravindra Gupta",
    subname: "",
    text: "We receive just the proper amount of help from Tech2Globe to manage our daily workload."
  }
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


const expertiseItems = [
  {
    id: "1",
    number: "01",
    title: "Need Evaluation",
    description:
      "We evaluate and comprehend your requirements In order to estimate the amount and data within documents that are being digitized.",
  },
  {
    id: "2",
    number: "02",
    title: "Services For Data Entry",
    description:
      "Our data entry experts will scan and categorize the originals in order to convert physical documents into digital files that can be added into data entry systems.",
  },
  {
    id: "3",
    number: "03",
    title: "Authentication Of Data",
    description:
      "Our quality assurance team will conduct another check to make sure that data reliability is not compromised during the data entry process.",
  },
  {
    id: "4",
    number: "04",
    title: "Verification Of Data",
    description:
      "The document will be validated by our team of quality analysts to ensure the information is accurate and error-free.",
  },
  {
    id: "5",
    number: "05",
    title: "Conversion Of File Types",
    description:
      "Then, we convert the documents and records into a format that your medical personnel and other stakeholders can understand.",
  },
  {
    id: "06",
    number: "06",
    title: "Results Delivery",
    description:
      "The authorised files are safely sent back to the customer via a secure FTP or VPN so they can utilise them right away.",
  },

];

const servicesData = [
  {
    id: 1,
    title: "Casual Dining Data Entry",
    description:
      "Our expert team is there to help you with managing all the digital reservations done by your customers and also look after the takeaway orders. These two are essential to speed up the serving process. We also help you bring great customer loyalty. Along with this, you will be provided with business analytics such as your customer profile, everyday sales, and inventory management. We guide you in sending emails and text receipts that reduce your use of printers as well as papers.",
    icon: <FiDatabase className="text-white text-3xl" />,
  },
  {
    id: 2,
    title: "Bars And Clubs Data Entry",
    description:
      "If you outsource restaurant menu entry services to handle digital devices, this results in making check-outs simpler and quicker. We also pre-authorize payments to prevent fraud and online theft. And again, we guide you in sending emails and text receipts.",
    icon: <FiEdit className="text-white text-3xl" />,
  },
  {
    id: 3,
    title: "Fast Casual Data Entry",
    description:
      "Our experts will help you in handling digital devices that will save you as well as your customers' time. This will also include providing direct links for online ordering and door-to-door pick-up. We will assist you with user-friendly terminals to get orders quicker. This will help those customers who want to get their food delivered within less time at their doors.",
    icon: <FiDroplet className="text-white text-3xl" />,
  },
];


const introData = {
  image: "/images/medical-data-entry.jpg",
  imageAlt: "Outsource Restaurant Menu Entry Services From Tech2Globe In Toronto",
  heading: "Outsource Restaurant Menu Entry Services From Tech2Globe In Toronto",
  paragraphs: [
    "In recent studies, it has been found that around 90% of new customers or visitors make sure to search the menu online before making an order from your business. Tech2Globe is the leading restaurant menu entry service provider in Toronto that ensures your business looks perfect to the sight of online visitors with its restaurant menu data entry services.Our team of data entry professionals work to give a significant presence to your restaurants’ menus so that food lovers can easily decide on what to buy from you without taking any time.This strategy has been adopted by most of the new businesses nowadays to make your brand name pop up on the top whenever they search for the best restaurants in the market.",
  ],
};

export default function MedicalDataEntryServices() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Restaurant Menu Data Entry Services", href: "/restaurant-menu-data-entry-services" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Restaurant Menu Data Entry Services"
        breadcrumbs={breadcrumbs}
        image={bannerImage}
      />

      <section className="py-16 overflow-hidden ">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            Best Restaurant Menu Data Entry Services In Canada
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          <p className=" text-center text-base md:text-lg ">
            Are you struggling to manage your restaurant’s menu on online platforms? You can easily take this burden off your shoulders with the help of our restaurant menu data entry agency. Our experts have years of experience working in this field, and you can be sure about this by hiring our restaurant menu entry service provider.
          </p>
        </div>
      </section>

      <ServiceIntro data={introData} />



      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            Services Offered By Our Restaurant Menu<br />
            Data Entry Agency
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          <p className=" text-center text-base md:text-lg ">
            Why let professionals handle your restaurant's online menu card? Because our main goal is to improve your service's efficiency and the way your customers consider you when searching online. We can create a website that is appropriate for every mobile device. Our services can be tailored to your demands and budget.<br />
            In addition to freeing up valuable employee time, outsourcing your restaurant data gives you access to a new range of features and designs that you probably couldn't afford previously. We have the services for you regardless of the type of restaurant you own.
          </p>
        </div>
      </section>
      <ServiceCards services={servicesData} />

      <ClientSlider title="Our Clients" clients={clientsData} />


      <ServiceExpertise
        title="Process Followed In Our Healthcare Data Entry Services"
        subtitle="As the leading provider of medical data entry services, Tech2Globe helps you manage your patient's medical records using digital tools. By putting your data records in a digital form, we will streamline the management of your data. Activities like billing, filing claims, and keeping track of patient needs are crucial components. It helps in developing trust in this competitive environment as the most crucial area of the healthcare sector is healthcare data entry."
        items={expertiseItems}
      />

      <Testimonials testimonials={testimonialsData} />

      <div id="contact">
        <FaqContact faqs={faqsData} />
      </div>

      <CTA />

      <Footer />
    </main>
  );
}
