import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import {
  FiMonitor,
  FiTool,
  FiMessageCircle,
  FiUsers,
  FiMegaphone,
  FiDollarSign,
  FiBriefcase,
  FiBarChart2,
  FiTrendingUp,
  FiDatabase,
  FiSmartphone,
  FiShoppingBag,
  FiPenTool,
  FiShoppingCart,
  FiPieChart,
  FiCode,
  FiCpu,
  FiUploadCloud,
  FiAward,
  FiSearch,
  FiArrowUpRight,
  FiAlignLeft
} from "react-icons/fi";

import ServiceCards from "@/components/ServiceCards";
import ServiceExpertise from "@/components/services/ServiceExpertise";
import ServiceIntro from "@/components/services/ServiceIntro";
import ClientSlider from "@/components/ClientSlider";




// ✅ Change this image path to update the banner for this page only
const bannerImage = "/images/innerbanner/app-development-banner.webp";

export const metadata = {
  title: "iPhone App Development Company @Craft Your App Vision",

  description:
    "Elevate your online presence with our iPhone app development company! ✔ Develop Your Custom App with Confidence ✔ Let`s Create Your App Success Story ✔ 3,000+ Successful Projects ✔ Reach Out Today!",

  keywords: [
    "iphone app development company",
    "ios application development agency",
    "ios app development company",
    "ios mobile app development",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/iphone-app-development",
  },

  openGraph: {
    title: "iPhone App Development Company @Craft Your App Vision",

    description:
      "Elevate your online presence with our iPhone app development company! ✔ Develop Your Custom App with Confidence ✔ Let`s Create Your App Success Story ✔ 3,000+ Successful Projects ✔ Reach Out Today!",

    url: "https://tech2globe.ca/iphone-app-development",
  },
};

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

const faqsData = [
  {
    question: "How much does one project cost, and what time do you need to complete it?",
    answer:
      "Depending on the needs and specifications of the project, the price may change. By phone or email, you can communicate with the professionals at our iOS application development agency about your project, and they'll tell you what assistance it needs and how much it will cost. We strive to provide the most excellent services to every client at a reasonable rate, so you won't have to worry about your budget. The pre-project consultation process will take two weeks, our research design and planning phase will take four to six weeks, and then we will start our developing phase."
  },
  {
    question:
      "Do you agree to a confidentiality agreement to safeguard private company data, and is there a need for me to travel to your office regarding iOS app development?",
    answer:
      "We do, indeed. When you share confidential information, business plans, ideas, or strategies with us while working with us, we keep everything completely confidential. You are not required to visit our office. The Project Manager overseeing your project or the iOS app developer working on your project will provide you with a thorough report on the status of your project at the conclusion of each working day."
  },
  {
    question: "Can I manage the source code after you deliver it to me?",
    answer:
      "Yes, you are allowed to manage everything by yourself after your project is delivered by our iOS app development company. Post-delivery of the project, our company will not be involved in your website in any case, and you will be provided with all the credentials that you may change according to your convenience. Still, our customer support team will be there to help you out if you get stuck anywhere."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments through PayPal, Wire Transfers, and Credit Cards. Our business representative/project manager will give you detailed information on each of these methods. You can learn more by visiting our company's website or via email or phone. Our experts will guide you to the core of our iPhone app development company in Canada."
  },
  {
    question:
      "Do our iOS mobile app development services provide assistance in maintaining clients' websites with upgrading services?",
    answer:
      "No, we do not provide services for the maintenance of websites. But you can consult us to know the ways to manage it efficiently and effectively. Our experts will guide you in the proper manner to execute the services and get your application more customer insights. Tech2Globe is there to assist you in every possible way."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "JH",
    name: "Jim Harlow",
    subname: "",
    text: "When it comes to developing iOS applications, the Tech2Globe team is imaginative, skilled, committed, and has extensive knowledge of the iOS platform."
  },
  {
    id: 2,
    letter: "DM",
    name: "Dua Martin",
    subname: "",
    text: "I couldn't have been more pleased with my app and the prompt support when it came to updating it when iOS versions were released. Strongly recommend hiring Tech2Globe!"
  },
  {
    id: 3,
    letter: "BP",
    name: "Brett Peter",
    subname: "",
    text: "Our iOS App has been expertly developed and is now being maintained by Tech2Globe. We loved their work"
  }
];

const servicesData = [
  {
    id: 1,
    title: "IPhone App Creation",
    description:
      "We are a top company for creating iOS mobile app development. We have experience in creating top-notch iPhone applications that captivate people. Our apps have a great user interface that makes it simple for individuals to navigate and dig for the data they need.",
    icon: <FiSearch className="text-white text-3xl" />,
  },
  {
    id: 2,
    title: "Creation Of IPad Apps",
    description:
      "For iPad app development services, we are your reliable technical partner. Because of their proficiency with Swift and Cocoa, our developers can create iPad apps that are truly unique. We ensure that you receive what you require through our apps by providing the ideal fusion of technology and imagination.",
    icon: <FiArrowUpRight className="text-white text-3xl" />,
  },
  {
    id: 3,
    title: "IOS App Development",
    description:
      "Are you searching for specialized iOS applications created to match your unique business requirements? Tech2Globe is your ideal decision if that's the case. Our iOS developers are experts at creating unique apps jam-packed with tools to boost sales and expand your business.",
    icon: <FiAlignLeft className="text-white text-3xl" />,
  },
  {
    id: 4,
    title: "Apple App Consultancy",
    description:
      "Our team of trained industry experts and developers uses their expertise to provide our clients with technologies that enhance their businesses. Therefore, whatever your needs, you can rely on us for flexible, scalable digital solutions.",
    icon: <FiSearch className="text-white text-3xl" />,
  },
  {
    id: 5,
    title: "IOS Apps For Businesses",
    description:
      "For Apple devices, we create corporate apps at our iOS application development agency. These apps are created to make business operations simpler and process more efficient, which boosts the effectiveness of your business and staff efficiency.",
    icon: <FiArrowUpRight className="text-white text-3xl" />,
  },
  {
    id: 6,
    title: "Creation Of IOS Gaming Apps",
    description:
      "Global enterprises can benefit from our services for iOS game creation. We have expertise in creating interactive games in every category, like pinball, athletics, mystery, and modeling. In order to render the games more engaging, we employ a variety of technologies.",
    icon: <FiAlignLeft className="text-white text-3xl" />,
  },
];


const introData = {
  image: "/images/iphone-app-devopment.webp",
  imageAlt: "iPhone App Development Company",
  heading: "About Our iPhone App Development Company",
  paragraphs: [
    "We are the best iOS app development company in Toronto, with 14 years of experience developing a range of excellently crafted iOS apps that you can establish in the Apple App Store. We always make use of advanced methodologies and technologies to make the best apps for our clients. We believe in providing a path-breaking interface along with the latest features so that the user can enjoy whatever they look for in an iOS app.",
    "Our iOS mobile app development team has the best iPhone app developers in Canada and uses the newest technologies such as OpenGL ES, Cocoa Touch Development, SQLite database, Swift, Objective C, CoreGraphics API, and Programming Tools: Interface Builder to make unmatched iPhone apps.",
    "As Canada's top iOS app development company, we have a group of knowledgeable and professional iOS developers who put their all into each project and ensure that our clients are delighted with the outcome. You can be confident that you will get the best services, regardless of what kind of software you want to design for iOS devices. We are committed to meeting deadlines and maintaining high-quality standards while giving customers the finest services and interactions possible. To discover more, get in touch with our iOS app development team.",
  ],
};

export default function IphoneAppDevelopment() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Iphone App Development", href: "/iphone-app-development" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Iphone App Development"
        breadcrumbs={breadcrumbs}
        image={bannerImage}
      />

      <section className="py-16 overflow-hidden ">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            Best iOS App Development Company In Canada
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          <p className=" text-center text-base md:text-lg ">
            Your search is over with us for developing the best iOS apps for your brand in the best ways.
            You will be provided with top-notch solutions every time you collaborate with us.
            Tech2Globe Canada brings the best iOS mobile app development services all over Canada.
            We have the best team of iPhone app developers in the world that can serve you with an unbeatable match.
          </p>
        </div>
      </section>

      <ServiceIntro data={introData} />


      {/* ── Why Choose Tech2Globe Canada? ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Why Choose Tech2Globe Canada<br />
              As Your iOS Application Development Agency?
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
            <p className="text-[#555555] max-w-7xl mx-auto leading-[1.8] text-[15px]">
              What makes Tech2Globe Canada the best choice to develop your next iOS app for your business and lead you to the next big step?
              The answer to this question is very simple. At Tech2Globe Canada, we serve you with a list of benefits, making us the leading ios application development agency in the world.
            </p>

            <p className="text-[#000000] font-semibold max-w-7xl mx-auto leading-[1.8] text-[15px]">
              The reasons for choosing us as your iphone app development company include the following:
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiAward className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>

              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                We are listed as the top iOS app development company by the clients because they are always provided with top-notch development services that our professionals have expertise in for the last 14 years.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiSmartphone className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>

              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                The iPhone app developers in our company have gained a reputation in this industry by designing the most attractive and easy-navigation apps for a number of clients.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiCpu className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>

              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                Our iOS app developers are experts in working with Apple and Mac's newest technologies and the latest trends introduced by them in the marketplace.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiMonitor className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>

              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                You will always be served with the best UI design apps that will work for every version of your iPhone device for sure.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            Services We Offer In Our iPhone App Development Company
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
        </div>
      </section>
      <ServiceCards services={servicesData} />


      <ClientSlider
        title="Brands That Trust The Services Of Our iPhone App Development Company Toronto"
        clients={clientsData} />

      {/* ── Our Accomplishments ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Our Accomplishments
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
            <p className="text-[#555555] max-w-2xl mx-auto leading-[1.8] text-[15px]">
              In addition to providing you with fast iOS app development services, we have decades of experience and
              numerous successful iOS and Android applications, and our devotion to your iOS app project will ensure
              positive outcomes in all manners
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

            <div className="flex flex-col items-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiUsers className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <p className="text-[#222222] text-[20px] font-medium">50+ IOS Developers In-House</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiCode className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <p className="text-[#222222] text-[20px] font-medium">300+ IOS Projects Developed</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiMessageCircle className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <p className="text-[#222222] text-[20px] font-medium">20+ Industries Brought</p>
            </div>

          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      <div id="contact">
        <FaqContact faqs={faqsData} />
      </div>

      <CTA />

      <Footer />
    </main>
  );
}
