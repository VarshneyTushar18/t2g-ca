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
  FiUploadCloud
} from "react-icons/fi";

import ServiceCards from "@/components/ServiceCards";
import ServiceExpertise from "@/components/services/ServiceExpertise";
import ServiceIntro from "@/components/services/ServiceIntro";




// ✅ Change this image path to update the banner for this page only
const bannerImage = "/images/innerbanner/app-development-banner.webp";

export const metadata = {
  title: "Mobile App Development Company in Canada @Get Your App Strategy",

  description:
    "Elevate your online presence with our mobile app development company in Canada! ✔ Develop Your Custom App with Confidence ✔ Let`s Create Your App Success Story ✔ 3,000+ Successful Projects ✔ Reach Out Today!",

  keywords: [
    "Mobile app development company in canada",
    "Mobile app development company in toronto",
    "Mobile application development",
    "Mobile app development services",
  ],

  alternates: {
    canonical:
      "https://tech2globe.ca/mobile-app-development-services",
  },

  openGraph: {
    title:
      "Mobile App Development Company in Canada @Get Your App Strategy",

    description:
      "Elevate your online presence with our mobile app development company in Canada! ✔ Develop Your Custom App with Confidence ✔ Let`s Create Your App Success Story ✔ 3,000+ Successful Projects ✔ Reach Out Today!",

    url: "https://tech2globe.ca/mobile-app-development-services",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "article",

    images: [
      {
        url: "https://tech2globe.ca/images/logo.webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mobile App Development Company in Canada @Get Your App Strategy",

    description:
      "Elevate your online presence with our mobile app development company in Canada! ✔ Develop Your Custom App with Confidence ✔ Let`s Create Your App Success Story ✔ 3,000+ Successful Projects ✔ Reach Out Today!",
  },
};

const faqsData = [
  {
    question: "What platforms do you support for mobile app development services?",
    answer: "We have experience developing mobile apps for a variety of platforms, including iOS, Android, and more. If you have a specific platform in mind, let us know and we can discuss the options available."
  },
  {
    question: "How much does it cost to develop a mobile app?",
    answer: "The cost of developing a mobile app can vary significantly depending on the complexity of the app, the features and functionality you want to include, and the platform you choose. During our initial consultation, we will provide you with a rough estimate of the project's cost and timeline based on your specific requirements."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "Again, the timeline for developing a mobile app will depend on the complexity of the app and the features and functionality you want to include. We will provide you with a rough timeline during our initial consultation and update you throughout the development process as needed."
  },
  {
    question: "What is your process for developing a mobile app?",
    answer: "Our process for developing a mobile app includes an initial consultation, requirements gathering and analysis, design and prototyping, development, testing and debugging, and deployment. We prioritise open and honest communication with our clients and keep you updated throughout the process."
  },
  {
    question: "Can you help with ongoing maintenance and updates for my mobile app?",
    answer: "Yes, we can assist with ongoing maintenance and updates for your mobile app. We understand that technology and user needs change over time, and it's important to keep your app up to date to ensure it remains relevant and effective. Let us know if you have any specific maintenance or update needs, and we can discuss a plan to address them."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "JH",
    name: "JOE HASHLEY",
    subname: "",
    text: "I had an idea for a mobile app that I wanted to bring to life, but I wasn't sure where to start. That's when I came across Tech2Globe and decided to give them a try. From the very first consultation, I knew I had made the right decision. The team at Tech2Globe listened to my idea and provided valuable insights and recommendations on how to make it a reality."
  },
  {
    id: 2,
    letter: "RM",
    name: "RIM MAXWELL",
    subname: "",
    text: "As a small business owner, I was looking for a mobile app development services company that could provide custom solutions at an affordable price. That's when I found Tech2Globe. From the very beginning, the team at Tech2Globe was professional, responsive, and easy to work with. They took the time to understand my business and the specific needs of my app, and provided valuable recommendations on how to make it a success."
  },
  {
    id: 3,
    letter: "CA",
    name: "CLARA ANDERSON",
    subname: "",
    text: "I was hesitant to work with a mobile app development company in Toronto at first, as I was worried about the cost and the communication process. However, my experience with Tech2Globe completely changed my mind. From the very beginning, the team at Tech2Globe was transparent about their pricing and communicated clearly and consistently throughout the development process."
  }
];


const expertiseItems = [
  {
    id: "1",
    number: "01",
    title: "eCommerce",
    description:
      "You can get one for yourself by utilising our technical expertise. We are experts in providing mobile application development for different eCommerce platforms. Allow us to take your business online with the best of our consultancy",
  },
  {
    id: "2",
    number: "02",
    title: "Education",
    description:
      "For education online learning through live classes or videos. Let our mobile app development company in Canada assist you in making it available to your audience via the web and mobile app",
  },
  {
    id: "3",
    number: "03",
    title: "Social networking",
    description:
      "Apps centred on sports, social communication or startups. For your startup, ask us to build the next trending mobile app that will give your brand a new face.",
  },
  {
    id: "4",
    number: "04",
    title: "Real Estate",
    description:
      "Create a mobile app or scalable website for your real estate business to help you grow.",
  },
  {
    id: "5",
    number: "05",
    title: "Travel",
    description:
      "Spend money on technology to meet the coming demand in the travel industry.",
  },
  {
    id: "6",
    number: "06",
    title: "Sports",
    description:
      "IT solutions for sports coaching, soccer club websites, stadium apps, and so on.",
  },
  {
    id: "07",
    number: "07",
    title: "Food Delivery",
    description:
      "We have a lot of experience developing IT solutions for the hospitality industry. Just tell us what you need, and we'll create a custom app for your company.",
  },
  {
    id: "08",
    number: "08",
    title: "Telemedicine",
    description:
      "The digitization of health technology is on the rise worldwide. When the world reopens, millions of people will need an effective Telemedicine platform.",
  },
  {
    id: "09",
    number: "09",
    title: "Taxi Booking",
    description:
      "Get a model for sending off a new application like Uber Taxi Administration. We can complete one for you by clicking one button",
  },
  {
    id: "10",
    number: "10",
    title: "Dating",
    description:
      "Construct an application for your startup with us. Start with a prototype that looks like the Bumble App or Tinder.",
  },
  {
    id: "11",
    number: "11",
    title: "Pets",
    description:
      "We'll begin by sending you a free prototype for your pet business. You're just a click away. Launch a feature-rich eShop quickly.",
  },
  {
    id: "12",
    number: "12",
    title: "Travel",
    description:
      "Spend money on technology to meet the coming demand in the travel industry.",
  },

];

const servicesData = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "The first step in our process is to schedule a consultation with our mobile app development company. During consultation, we will discuss your app idea, answer your queries, & provide you with a rough estimate of the project's cost and timeline.",
    icon: <FiBriefcase className="text-white text-3xl" />,
  },
  {
    id: 2,
    title: "Gathering & Analysis",
    description:
      "Next, we will work with you to gather and analyse the requirements for your app. This includes understanding your target audience, the features and functionality you want to include, and any specific design preferences you may have.",
    icon: <FiPieChart className="text-white text-3xl" />,
  },
  {
    id: 3,
    title: "Design & Prototyping",
    description:
      "After the requirements have been gathered and analysed, our team will create a detailed design for your app. This includes creating wireframes and a prototype to give you an idea of how the app will look and function.",
    icon: <FiTool className="text-white text-3xl" />,
  },
  {
    id: 4,
    title: "Development",
    description:
      "Once the design has been approved, our developers will begin the actual process of mobile app development. We use the latest technologies and best practices to ensure that the end result is a high-quality, reliable product.",
    icon: <FiCode className="text-white text-3xl" />,
  },
  {
    id: 5,
    title: "Testing & Debugging",
    description:
      "Before we deliver the final product to you, our mobile app development company in Canada will thoroughly test the app to ensure it is free of bugs and glitches. Any issues that are found will be promptly addressed and fixed.",
    icon: <FiCpu className="text-white text-3xl" />,
  },
  {
    id: 6,
    title: "Deployment",
    description:
      "Once the app has been tested and debugged, we will work with you to deploy it to the appropriate app stores or platforms. We can also assist with ongoing maintenance and updates as needed.",
    icon: <FiUploadCloud className="text-white text-3xl" />,
  },
];


const introData = {
  image: "/images/mobile-app-devopment.webp",
  imageAlt: "Mobile App Development Company in Toronto",
  heading: "Top Mobile App Development Company In Toronto",
  paragraphs: [
    "With over 14 years of experience in software development outsourcing, we enabled organisations, including start-ups, SMEs, and Fortune 500 corporations, to leverage our expertise and abilities to alleviate their short and long term software development needs. As a mobile application development company in Toronto, Canada, proficient mobile app developers will be there for you from the beginning to the final result. We make sure to understand the demands and requirements of clients, find out appropriate resources, potential solutions, and methods to build up your company through our app development services.",
    "Our post-delivery assistance is what sets us apart from other app development businesses competing for your project. Mobile app development, website development, animation development, and other mobile app development services are among the services we offer. Hire Tech2Globe for a stress-free mobile app development journey that will bring you to the outstanding mobile app that you deserve.",
  ],
};

export default function MobileAppDevelopmentServices() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Mobile App Development Services", href: "/mobile-app-development-services" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Mobile App Development Services"
        breadcrumbs={breadcrumbs}
        image={bannerImage}
      />

      <section className="py-16 overflow-hidden ">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            The Best Mobile App Development Services in Toronto, Canada
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          <p className=" text-center text-base md:text-lg ">
            Our team at mobile app development company in Canada is here to help you bring your app idea to life.
            We specialize in creating custom, user-friendly mobile apps for a variety of platforms, including iOS, Android, and more.
          </p>
        </div>
      </section>

      <ServiceIntro data={introData} />



      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#222222] mb-3">
            Do You Know How We Process Your Requests?
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          <p className=" text-center text-base md:text-lg ">
            Want a feature-rich, scalable app in your company's solutions ?<br />
            Hire an experienced mobile app development team from Tech2Globe Canada, to design and create like never before!
          </p>
        </div>
      </section>
      <ServiceCards services={servicesData} />


      {/* ── Why Choose Tech2Globe Canada? ── */}
      <section className="py-16 bg-[#f8f8f8] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Why Choose Tech2Globe Canada?
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
            <p className="text-[#c7010c] font-semibold italic text-base md:text-lg mb-5">
              Crafting intuitive and user-friendly mobile experiences!
            </p>
            <p className="text-[#555555] max-w-3xl mx-auto leading-[1.8] text-[15px]">
              Tech2Globe focuses solely on custom mobile app development for iOS and Android. We have a large group of mobile application developers who have successfully produced over 200 mobile apps. Mobile app development is a serious art that necessitates a thorough understanding of visuals, user interface design, and user experience planning.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Experienced Team */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiUsers className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[1rem] font-semibold text-[#222222] mb-3">Experienced Team</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                Our developers have a wealth of experience in mobile app development services and have successfully delivered numerous apps to clients in a variety of industries.
              </p>
            </div>

            {/* Custom Solutions */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiTool className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[1rem] font-semibold text-[#222222] mb-3">Custom Solutions</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                We don&apos;t believe in a one-size-fits-all approach. Instead, we work closely with you to create a customised solution that meets your specific needs and goals.
              </p>
            </div>

            {/* Excellent Communication */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiMessageCircle className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[1rem] font-semibold text-[#222222] mb-3">Excellent Communication</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                We value open and honest communication with our clients and make sure to keep you updated throughout the development process.
              </p>
            </div>

            {/* Competitive Pricing */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiDollarSign className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[1rem] font-semibold text-[#222222] mb-3">Competitive Pricing</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] max-w-[260px]">
                We offer competitive pricing for our mobile app development services without sacrificing quality.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ServiceExpertise
        title="Our Expertise"
        subtitle="We are the best mobile app development company in Canada. Tech2Globe is your go-to &quot;app developer near me&quot; for any mobile app need, no matter what your business is."
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
