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

const bannerImage = "/images/innerbanner/data-entry-2.webp";

export const metadata = {
  title: "Medical Data Entry Services | Secure Healthcare Data Solutions",

  description:
    "Professional medical data entry services for healthcare providers. ✔ HIPAA-Compliant Solutions ✔ Accurate Medical Records Management ✔ 2,000+ Successful Projects ✔ Contact Us Today!",

  keywords: [
    "Medical Data Entry Services",
    "Healthcare Data Entry Services",
    "Medical Records Data Entry",
    "HIPAA Compliant Data Entry",
    "Medical Data Management",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/medical-data-entry-services",
  },

  openGraph: {
    title: "Medical Data Entry Services | Secure Healthcare Data Solutions",
    description:
      "Professional medical data entry services with secure healthcare data management, accurate records processing, and HIPAA-compliant solutions for healthcare providers.",
    url: "https://tech2globe.ca/medical-data-entry-services",
    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Medical Data Entry Services | Secure Healthcare Data Solutions",
    description:
      "Professional medical data entry services with accurate healthcare records management and HIPAA-compliant solutions.",
  },
};

const faqsData = [
  {
    question: "What do you understand about medical data entry services?",
    answer:
      "These services can be useful to you if you need to precisely identify, access, and retrieve medical data. For more information, you can contact Tech2Globe via email or phone."
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
      "How long will it take your healthcare data entry services company to complete a single project?",
    answer:
      "The pre-project consultation process will take two weeks, our research design and planning phase will take four to six weeks, and then we will start our developing phase. This is how we make sure to set deadlines for all new projects that we examine. We ensure that a client is kept informed at every stage and that a successful website is delivered within the deadline we have set."
  },
  {
    question:
      "Do I have to travel to your Canadian medical data entry service provider company while my project is being processed?",
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
    title: "Healthcare Records",
    description:
      "Our goal is to provide you with a quick-access solution for storing, protecting, and accessing your hospital or clinic data. With the help of our services, our medical support team handles the majority of hospital data in a much more effective manner since delayed and unsafe hospital data can be a major issue.",
    icon: <FiDatabase className="text-white text-3xl" />,
  },
  {
    id: 2,
    title: "Data Entry For Handwritten Documents",
    description:
      "We have skilled data entry professionals on board with a stellar track record for speed and precision. This enables us to offer our clients with digitized documents of the highest caliber.",
    icon: <FiEdit className="text-white text-3xl" />,
  },
  {
    id: 3,
    title: "Assessments Or Lab Records",
    description:
      "Test or lab records are among the most significant categories that are fundamentally distinct from other types of data with healthcare companies. The cutting-edge infrastructure and solutions available with our services enable better management information.",
    icon: <FiDroplet className="text-white text-3xl" />,
  },
  {
    id: 4,
    title: "Entry Of Image Record Data",
    description:
      "We offer the tools necessary to make image record data input a smooth, effective procedure that greatly enhances the core capabilities of our clients.",
    icon: <FiImage className="text-white text-3xl" />,
  },
  {
    id: 5,
    title: "Records Of Surgical Encounters",
    description:
      "We have a specific infrastructure to hold, oversee, and protect a healthcare organization's surgical data, enabling them to be confident in the confidentiality and safety of the information they have on hand.",
    icon: <FiFileText className="text-white text-3xl" />,
  },
  {
    id: 6,
    title: "Records Of Prescription",
    description:
      "Being a medical data entry service provider, we make sure that medication records should be stored in the appropriate file format, secured, and optimized for organization access by our skilled data entry specialists team.",
    icon: <FiClipboard className="text-white text-3xl" />,
  },
  {
    id: 7,
    title: "Entry Of Text And Numeric Data",
    description:
      "With the help of specialized infrastructure and a team of knowledgeable medical data entry specialists, we are able to give our clients organized, timely access to text and numerical information regardless of volume.",
    icon: <FiList className="text-white text-3xl" />,
  },
  {
    id: 8,
    title: "Healthcare And Clinical Records",
    description:
      "Our goal is to make it possible for all procedures to be carried out in a smooth manner. The most crucial elements that need to be handled with precision are clinical and healthcare records. The data is saved appropriately as we also take into account security.",
    icon: <FiActivity className="text-white text-3xl" />,
  },
  {
    id: 9,
    title: "Posting Of Payment",
    description:
      "Payment posting is highly valued at our company because it immediately affects the clients' financial integrity. Through our services, we guarantee that we submit payments promptly and deliver the best outcomes to our clients.",
    icon: <FiCreditCard className="text-white text-3xl" />,
  },
  {
    id: 10,
    title: "All Patient Records",
    description:
      "The information about your patients is kept up to date by our healthcare data entry professionals.",
    icon: <FiUsers className="text-white text-3xl" />,
  },
  {
    id: 11,
    title: "Statistical Entries",
    description:
      "For strategic and research considerations, patient demographics are vital for every healthcare business. We take care to store all the patient data rigorously to ensure that the healthcare organization receives all the details about the demographics of the patients.",
    icon: <FiBookOpen className="text-white text-3xl" />,
  },
  {
    id: 12,
    title: "Medical Insurance Claims",
    description:
      "The financial integrity of a healthcare institution depends on this data. To make it much easier to reuse and guarantee a high level of security, the finest procedure is taken in use.",
    icon: <FiShield className="text-white text-3xl" />,
  },
];


const introData = {
  image: "/images/medical-data-entry.webp",
  imageAlt: "Tech2Globe, The Top Medical Data Entry Service Provider In Toronto",
  heading: "Tech2Globe, The Top Medical Data Entry Service Provider In Toronto",
  paragraphs: [
    "Tech2Globe has been offering medical records data entry services in Canada for the past 14 years, so experience and expertise are the two things you can observe in our work. Our team provides medical data entry services that are specially customized for your healthcare organization’s particular needs. Medical records data entry services may have a significant impact on how modern health businesses continue to evolve digitally. After all, data is the crux of a lot of what businesses do, from making strategic business decisions to maintaining crucial datasets, registries, and records. Data entry services are necessary to enable this on an ever-growing scale. It is interesting to know that our experts have served so many clients in these years; you will be free of any hassle that comes while collecting multiple data that runs in your healthcare organization. ",
  ],
};

export default function MedicalDataEntryServices() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Medical Data Entry Services", href: "/medical-data-entry-services" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Medical Data Entry Services"
        breadcrumbs={breadcrumbs}
        image={bannerImage}
      />

      <section className="py-16 overflow-hidden ">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            Best Medical Data Entry Services In Toronto
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          <p className=" text-center text-base md:text-lg ">
            Managing all the data entries by yourself might be hard work, especially when you are working in a health organization or own one of them. We can help you with our healthcare data entry services and lower your burden.
          </p>
        </div>
      </section>

      <ServiceIntro data={introData} />



      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            Services We Offer In Our Medical Records
            Data Entry Services
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          <p className=" text-center text-base md:text-lg ">
            We provide medical data entry services that can assist you with digitizing the following
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
