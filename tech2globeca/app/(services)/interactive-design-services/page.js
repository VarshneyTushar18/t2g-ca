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
  FiShoppingCart,
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
} from "react-icons/fi";

import { FaCheck, FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";


export const metadata = {
  title:
    "Interactive Design Agency @Experience Interactive Excellence",

  description:
    "Interactive Design Agency ✅ Experience Interactive Excellence ✅ Explore Free Audits & Personalized Strategies ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!",

  keywords: [
    "interactive design services",
    "Top Interaction Design Company",
    "interactive graphic design",
    "interactive design agency",
    "ux interaction design",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/interactive-design-services",
  },

  openGraph: {
    title:
      "Interactive Design Agency @Experience Interactive Excellence",

    description:
      "Interactive Design Agency ✅ Experience Interactive Excellence ✅ Explore Free Audits & Personalized Strategies ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!",

    url: "https://tech2globe.ca/interactive-design-services",

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


const testimonialsData = [
  {
    id: 1,
    letter: "AT",
    name: "Ashley Thompson",
    subname: "Business Owner",
    text: "Tech2Globe has exceeded my expectations with their content marketing services. They have a team of skilled writers who produce high-quality, engaging content that resonates with our target audience. They also have a great understanding of SEO and how to use it to drive traffic to our website.I highly recommend Tech2Globe to any business."
  },
  {
    id: 2,
    letter: "IR",
    name: "Isabella Rodriguez",
    subname: "E-commerce Manager",
    text: "Tech2Globe has been a game changer for our company. We were struggling to generate leads and increase our online visibility, but since working with Tech2Gobe, we have seen a significant improvement in both areas. Their team is professional, responsive, and always willing to go the extra mile to deliver great results. I can't recommend them enough!"
  },
  {
    id: 3,
    letter: "HM",
    name: "Henry Moore",
    subname: "Marketing Director",
    text: "We have been working with Tech2Globe for the past year and have seen tremendous results in terms of website traffic and lead generation. Their team is knowledgeable and always willing to provide guidance and support. I highly recommend Tech2Globe to any business looking to improve their online presence through content marketing."
  }
];


const faqsData = [
  {
    question: "What is Interaction Design?",
    answer: `
      Interaction Design is the creation of Interactive Design Services in which the designer's focus extends beyond the item under development to include how users will interact with it. Thus, a close examination of users' needs, limitations, and contexts, among other things, enables designers to tailor the output to specific demands.
    `
  },
  {
    question: "What Designers Do – with the 5 Dimensions of Interactive Design?",
    answer: `
      The axis around which our work revolves for UX designers is "Interaction Design" (i.e., the Design of human interaction with digital products); however, the term also applies to understanding how people interact with non-digital products. "Interaction Design creates a bridge between a person and a product, system, or service." This is physical and emotional, manifesting in the interplay of form, function, and technology as it is experienced with time.
    `
  },
  {
    question: "What are the five dimensions of the framework of Interactive Design?",
    answer: `
      The five aspects of interaction design are an effective model for comprehending what interaction design entails. Gillian Crampton Smith, an interaction design scholar, first developed the concept of the four dimensions of an interaction design language. Kevin Silver later added a fifth dimension to his model. Words (1D), visual representations (2D), physical objects/space (3D), time (4D), and behaviour are all used in interactive Design (5D).
    `
  },
  {
    question: "What are interactive design principles?",
    answer: `
      While it is impossible to enumerate all of the concepts of interaction design, a few general topics that are often employed in this discipline can be described:

      <ul>
        <li>Design with a purpose</li>
        <li>Excellent usability</li>
        <li>Ergonomics</li>
        <li>Positive emotional reactions</li>
        <li>People-centred Design</li>
        <li>Patterns in Design</li>
        <li>Iterations in Design</li>
      </ul>
    `
  },
  {
    question: "What is the role of an Interaction Designer?",
    answer: `
      The interaction designer's tasks include defining essential product interactions and producing prototypes to test concepts.Interaction designers collaborate with other designers (UX and visual) to guarantee that all interaction patterns are correctly implemented in a product. Interaction designers must stay current with technological trends and evaluate them regarding the value they provide to users.
    `
  }
];

const servicesData = [
  {
    id: 1,
    title: "User-Centric Approach",
    description:
      "When building startup MVPs, we prioritise your end- users requirements and expectations over specifications.Continuous user testing and feedback implementation generate a product that your clients want.",
    icon: <FiAward size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Effective Communication",
    description:
      "Our emphasis is always on availability, scalability, and consistent communication with clients, which allows us to pay attention to every detail while meeting deadlines. We work in agile and implement Google design sprint techniques.",
    icon: <FiUsers size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Interdisciplinary Experience",
    description:
      "After working on projects with some major businesses, we have learned to adapt quickly to different industries and project types. We have discovered patterns and connections that allow us to switch between tasks swiftly",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Business Thinking",
    description:
      "We have worked on our startup, so we understand your dilemma.We want to be your partner and look at your product strategically.Startups are about much more than technology, and we are excited to embrace it.",
    icon: < FiTrendingUp size={32} color="#ffffff" />
  },
];


export default function InteractiveDesignServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Interactive Design Agency"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Interactive Design Agency", href: "/interactive-design-services" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Top Interaction Design Company For Your Business
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                As an interaction design agency, Tech2Globe integrates new emerging technology. We offer user-friendly Interactive graphic design that showcases your products' true potential. Aesthetic designs boost product consumption while increasing brand recognition and adoption rates. Our interactive design team, with expertise in User Experience, Interactive design services, and product management, is determined to deliver award-winning experiences.<br /><br />
                Our team's tenacious efforts for any client are why we have a successful customer satisfaction record. Top Interaction design companies value our clients and prioritise them over everything else.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            What Is Interactive Design?
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">

            <p className=" mb-8 leading-relaxed">
              Interaction Design (IdX) creates interactive digital products and experiences that focus on the user's interaction with the digitals. This is where UI and UX intersect!<br />
              One of the most critical pillars of IDX is driving goals. Graphic objects such as icons and typography, as well as simple command words on a button (1D) (2D), even short films (4D) and demonstrations of how to use a kitchen mixer (5D) - are Interactive graphic design dimensions for a user to attain a brand-defined purpose. When creating interactive solid design, keep comfort, control, and functionality in mind so that your users psychologically associate your brand and product with a pleasant experience.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/interactive-web-large.jpg"
                alt="Why Do Businesses Need Social Media Management?"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
            Why is Interactive Design Important?
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center gap-10">



          <p className=" mb-8 leading-relaxed text-center">
            UX design includes a significant amount of Interactive Graphic Design. We are looking at how users interact with your product or website to see how we can better align intuitive use with intended use for a positive response. UX may exist in the absence of Interactive Design, but not the other way around.<br />
            Colour and speech alone can significantly impact perception and provoke emotional responses in Interactive Graphic Design. With our services and expertise that comes along, we let you develop clear interactions with your users without saying anything!
          </p>


        </div>
      </section>


      {/* Step-by-Step Workflow Section */}
      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Why Choose Tech2Globe?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              With our expertise and experience, we can offer you the best creativity that matches with your business requirements.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <div className="workflow-icon-wrapper">
                <FiSearch size={28} />
              </div>
              <h3 className="workflow-title">Enhance Customer Engagement with Top Interaction Design Company</h3>
              <p className="workflow-desc">
                Enhance Customer Engagement with Top Interaction Design Company
                Interactive graphic design is more than just functionality; it also includes intuitive insights that activate and impact customers. Our interactive design agency produces business outcomes that are predictable to enterprise businesses globally using our time-tested process design approach and pixel-perfect engineering. Our interactive design services focus on how the user interacts with the system, and we specialise in this.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <div className="workflow-icon-wrapper">
                <FiLayers size={28} />
              </div>
              <h3 className="workflow-title">Grow your Business With Our Interactive Design Agency</h3>
              <p className="workflow-desc">
                Our Front-End Engineering Team makes your company more accessible and visible online by developing fully effective web and mobile apps. Our modules are simple to implement, with upgrades as needed and minimal support over time. Our interaction design firm also works closely with your teams per your schedule.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <div className="workflow-icon-wrapper">
                <FiMonitor size={28} />
              </div>
              <h3 className="workflow-title">Data Visualization Is Made More Accessible By Our Interaction Design Company.</h3>
              <p className="workflow-desc">
                By collaborating with our top interaction design company, you can improve the user interface by adding graphic elements to the dashboard. Convey your insights more successfully by expressing crucial parts of limited and complex data more understandably—Design to achieve a mix of form and function, creating stunning data visualisations while delivering the information.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <div className="workflow-icon-wrapper">
                <FiActivity size={28} />
              </div>
              <h3 className="workflow-title">Achieve Flawless Communication With Our Interactive Design Agency</h3>
              <p className="workflow-desc">
                The key to improving performance is flawless communication across devices. Top interaction design companies ensure that your experience is both seamless and exciting. We've created conversational interfaces (chatbots) for various use cases, such as consumer workflow for retail banking or lead generation for UX interaction design.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">05.</span>
              <div className="workflow-icon-wrapper">
                <FiTarget size={28} />
              </div>
              <h3 className="workflow-title">Salesforce Lightning UI With Our Interaction Design Company</h3>
              <p className="workflow-desc">
                Salesforce Lightning is the fastest method to offer insights across vast volumes of data, whether it's data-driven choices or visually impressive das hboards. Our interaction design company helps you develop more personalised, dynamic, and impro ved consumer and staff experiences.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">06.</span>
              <div className="workflow-icon-wrapper">
                <FiTarget size={28} />
              </div>
              <h3 className="workflow-title">Pixel Perfect Front-End Engineering</h3>
              <p className="workflow-desc">
                Your ideas are brought to life by our Front-End Engineering masters, with attention to detail, impeccable execution, and timely delivery. These professionals ensure a pixel-perfect transition from your Design to the application.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">


          <div className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-semibold  mb-3">
              Be The Pioneer In The Industry With Tech2Globe’s Assistance
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>

            <ul className="hrline">
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Increases participation. Interactive business websites can make your website more engaging and less boring, resulting in more user activity.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Users will spend more time on a website that engages them. This raises your conversion rate, decreases your bounce rate, and can help your website's SEO.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Websites with interactive design create a more personalized user experience, which can lead to satisfied customers.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Engaged users are more likely to establish long-term relationships with websites.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Websites with interactive design can leave an indelible impression on users. This raises brand awareness and reach.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> Users are more likely to suggest and link to your website when it is interactive.</li><hr />
              <li className=" flex items-center gap-2 mb-2"><FaCheck /> More conversions indicate a better probability of making a sale!</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/Industry-Assistance.jpg"
                alt="Why Do Businesses Need Social Media Management?"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-[#1c1c1c] overflow-hidden">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 items-center gap-10">

          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 text-center">
            Interactive Design Services Tailored To Match Our Clients’ Specific
            User Tasks And Business Goals
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mb-3 mx-auto"></div>
          <p className="text-white leading-relaxed mb-3 text-center">
            Delivering a complete digital experience is like using glue to link all touch points, connect devices, and create omnichannel experiences. Our UX interaction design agency’s strategy and Interaction Design team can devise solutions that are intuitive to use and targeted to our client's specific user duties and business goals by utilising best practices and approaches, as well as a complete understanding of all the newest technology resources.<br />
            We constantly keep the end user in mind when designing, and we provide various design services ranging from UX research to interface design and thorough usability audits. Our interface design approach is based on collaborative and interactive Design, and we always work with a participatory approach and open communication. We believe that data-driven user insights, well-defined goals, and solid validation are the keys to success.<br />
            Our UX interaction design services help design and develop digital experiences that are both practical and engaging for end users and our clients. Your consumers are our principal focus, and our bare minimum is 100 % client satisfaction. At Tech2Globe, we prioritise what is most important to you, and we will ensure that all requested and required features are acknowledged and executed.
          </p>


        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              How Can A Good Interactive Design Agency Boost Your Business?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              We appreciate that you have a choice regarding partnering with a UX interaction design.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>



      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
