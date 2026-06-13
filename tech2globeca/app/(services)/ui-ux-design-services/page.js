import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import ClientSlider from "@/components/ClientSlider";
import AvailableLocations from "@/components/AvailableLocations";
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
  FiTablet,
  FiTag,
  FiPenTool
} from "react-icons/fi";

import { FaComments, FaHandshake, FaLightbulb, FaLink, FaSearch, FaShareAlt, FaTablet, FaTimes } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";
import CTA from "@/components/CTA";


export const metadata = {
  title: 'UI UX Design Company in Canada @Enhance User Experience',

  description:
    'UI UX Design Company in Canada ✅ Enhance User Experience ✅ Website Maintenance and Support ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!',

  keywords: [
    'ui ux design services',
    'ui ux design company in canada',
    'ui ux design agency toronto',
    'Hire UI UX Designer',
    'UI/UX Design and Development Services',
  ],

  metadataBase: new URL('https://tech2globe.ca'),

  alternates: {
    canonical: '/ui-ux-design-services',
  },

  openGraph: {
    title: 'UI UX Design Company in Canada @Enhance User Experience',
    description:
      'UI UX Design Company in Canada ✅ Enhance User Experience ✅ Website Maintenance and Support ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!',
    url: 'https://tech2globe.ca/ui-ux-design-services',
    siteName: 'Tech2Globe Canada: Multi-Function IT Outsourcing Services',
    locale: 'en_US',
    type: 'website',
  },
};


const faqsData = [
  {
    question:
      "What is UI/UX web design and how is it useful for a business website?",
    answer:
      "UI web design services manage the interface development of a website or mobile application that incorporates seamless navigation and accessibility management. UX, on the other hand, stands for user experience design, and it entails designers analysing an application's layout and customising it from the perspective of the users. User interface and user experience design are both crucial for a web-based company because they establish the level of scalability you will deliver to your clients.",
  },
  {
    question:
      "How can your UI UX design agency Toronto help me set up a brand identity in the market?",
    answer:
      "Hire UI UX Designer industry-specialists on staff who can create a complete setup from the ground up to create a simple and understandable brand identification for your company on Google and social networking sites. For effective promotion, our web design team will build a customised logo for your brand, as well as advertising and print banners. If you choose, you can create your own mobile application to provide your devoted clients with more convenient access and navigation.",
  },
  {
    question:
      "What services does a UI/UX design company provide for efficient business development?",
    answer:
      "While looking for a reliable UI UX design agency Toronto, keep in mind that your web design budget will vary depending on the quality and preferences you have for your portal. A simple dynamic website, for example, would not be expensive, however an e-commerce website design or mobile application design would require significant effort and money. Tech2Globe specialises in custom design solutions, including UI/UX services that include website design, mobile app design, and brand identity creation.",
  },
  {
    question:
      "Can I ask for potential changes in basic layout and architectural design of website?",
    answer:
      "Our UI/UX design services are completely customizable, and you may hire UI UX Designer about prospective layout modifications at any moment. We carry out a research-based design process, which is subsequently followed by wireframing and prototype development. We also show our design prototypes to our clients for final approval before beginning final integration. If you are dissatisfied with the architectural formation of the design, you can request that our design specialist make appropriate revisions.",
  },
  {
    question:
      "How can I select a suitable UI UX design agency Toronto for my mobile application?",
    answer:
      "Tech2Globe is committed to making every technical part of your internet business growth as simple as possible. It can be difficult to Hire UI UX Designer for a mobile application, especially for those who are new to online and mobile development. To make your decision easier, we begin the service with an excellent prototype that will assist you in visualising your mobile app and deciding on the final design you want for your application.",
  },
];

const servicesData = [
  {
    id: 1,
    title: "Design Focused on the Experience",
    description:
      "UX design, or user experience design, is a component of a user's total experience when visiting your website, consisting of handpicked text, images, multimedia elements, and other added animations and features. The site's or application's influence and impact on the user lasts longer than the information supplied. Differentiation is required since the volume of information is often high. The ability to capture emotional responses from customers is the most rewarding aspect of the overall experience.",
    icon: <FiSearch size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Users desire clarity and simplicity",
    description:
      "You have an average of 9 seconds, or at least 0.5 seconds, to capture your user’s attention. Instead of making them think about how you want them to get what they need, utilise this time to direct them. The UX design should have a pleasing and clear appearance, as well as a simple and easy-to-navigate UI.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Prioritising the scrolling",
    description:
      "Modernization and dynamic digitization have changed the very typical User experience design of paging. Paging used to need many clicks to switch between pages, but today it's all about scrolling. Vertical and horizontal scrolling options are now available on all current websites, with some even reaching 5+ pages vertically, which is said to have a significant positive impact because it is faster and needs less clicks, reducing the need to refresh and flick through pages.",
    icon: <FiLink size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Classics vs Creative Elements",
    description:
      "Certain UX design elements must be consistent. For example, if a button does not appear to be a button, a new audience may overlook it, and the button fails to serve its purpose. It is critical to strike the proper balance between utility and creativity. But don't go too far and jeopardise the aesthetics.",
    icon: <FiBarChart2 size={32} color="#ffffff" />
  },
];

export default function UiUxDesignServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="UI UX Design Company in Canada"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "SEO Agency Toronto", href: "/seo-agency-toronto" }
        ]}
      />



      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                UI UX Design Company in Canada
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>


              <p className="text-gray-600 mb-3 leading-relaxed">
                UX/UI design is at the core of all Tech2Globe solutions. Since our designers' primary purpose is to improve the User-Experience, they pay close attention to Tech2Globe's guiding principles. We concentrate on developing solutions that people want to use, with an emphasis on simplicity and readability, so clients can understand the application at a glance.

              </p>
              <p className="text-gray-600 leading-relaxed">
                Top quality design standards and calls to action based on application usability are crucial to us. Tech2Globe works with customers to develop concepts for new mobile and web applications, as well as to revamp current ones, with the goal of modernising the design and offering meaningful user experiences that build the brand and strengthen customer connection. Hire UI UX Designer for your brand to avail the best class services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Our UI/UX Design and Development Services
            </h2>

            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

            <p>Because of their simple interfaces and engaging user experiences, our UI UX design company in Canada applications stand out in the digital age. Tech2Globe's expertise in assisting your company to achieve its objectives is a seamless experience inspired by worldwide standards in collaboration with out-of-the-box innovations. We design to express your thoughts to your users in such a way that they can be directed towards your business goals by following an ideal road map of understanding your consumers, from inception to perfection.<br />
              UX design incorporates every aspect of a design that affects the consumer. At Tech2Globe, we consider each detail of this design variation accountable to provide a persuasive and accessible user experience for UI UX design agency Toronto. Our design services include the following.</p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Designing Interactions
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                UX and UI are the two most important parts of any design process. As the saying goes, UI is nothing without UX, and vice versa. We, as a UI UX design company in Canada, offer stunning interaction procedures that are powered by cutting-edge technology to give users an immersive experience.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Mobile UX
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                It is the process of providing users with delightful mobile UX experiences. A remarkable mobile design offered by the best UI UX design company in Canada holds the key to your customer's heart. By identifying and designing mobile UX strategies, we create exceptional B2B and B2C usable enterprise mobile apps that fall into the category of next generation.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                UX Testing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                With UX testing, both user interface procedures are consolidated under one roof. Tech2Globe is your one-stop shop for all user experience design needs. We provide complete UX design services, including concepting, evaluating, studying, prototyping, developing, as well as UX testing. As a result, we are the top UI UX design company in Canada.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>


            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                UX research
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                UX research is the first step toward providing better design experiences and we believe our customers to have done that. However, we have our own strategies in place before we begin the UX design process. As the best UI UX design company in Canada, we think that our UX design process is not complete until our team of research analysts create and incorporate their UX research ideas.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Wireframes
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Wireframes are the backbone of every website design, and our UI UX design agency Toronto is no exception. We work closely with our clients at Tech2Globe. You won't be able to finish your design until you've gone through the design wireframes, which have been the core of our real-working model. Once you accept the wireframe, we can proceed to the real thing.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Perfection of Information
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Quality Information Architecture develops only when it is in the hands of specialists. We as UI/UX Design and Development Services providers, build solid information architectures that result in digital products that transform the world. We utilise advancing technology, design principles, and business processes to create digital products that signify a new beginning.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>



          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">
              Our Design Process
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3 mx-auto"></div>
          </div>

          {/* Process Cards */}
          <div className="flex flex-col gap-6">

            {/* Step 01 */}
            <div className="design-process-card flex flex-col md:flex-row items-center gap-6 bg-[#252525] rounded-xl p-6 border border-[#333] hover:border-[#c7010c] transition-all duration-300">
              <div className="flex-shrink-0 w-48 h-36 rounded-lg overflow-hidden">
                <img
                  src="/images/services/goals-vs.webp"
                  alt="Understanding the Goals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#c7010c] leading-none">01.</span>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Understanding the Goals</h4>
                </div>
                <p className="text-[#aaaaaa] leading-relaxed text-sm md:text-base">
                  The project&apos;s discovery phase involves a detailed analysis of user requirements and business objectives. Our project team begins by researching the background information, user types, and operational flow. A design project is planned around a user problem that needs to be solved.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="design-process-card flex flex-col md:flex-row-reverse items-center gap-6 bg-[#252525] rounded-xl p-6 border border-[#333] hover:border-[#c7010c] transition-all duration-300">
              <div className="flex-shrink-0 w-48 h-36 rounded-lg overflow-hidden">
                <img
                  src="/images/services/design-emlimented.webp"
                  alt="Design to Implementation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#c7010c] leading-none">02.</span>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Design to Implementation</h4>
                </div>
                <p className="text-[#aaaaaa] leading-relaxed text-sm md:text-base">
                  Any design&apos;s success is determined by how well it is executed. We understand the significance of adhering to quality standards for pixel-perfect UI design for web and mobile.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="design-process-card flex flex-col md:flex-row items-center gap-6 bg-[#252525] rounded-xl p-6 border border-[#333] hover:border-[#c7010c] transition-all duration-300">
              <div className="flex-shrink-0 w-48 h-36 rounded-lg overflow-hidden">
                <img
                  src="/images/services/ux-strategy.webp"
                  alt="Setting Up the UX Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#c7010c] leading-none">03.</span>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Setting Up the UX Strategy</h4>
                </div>
                <p className="text-[#aaaaaa] leading-relaxed text-sm md:text-base">
                  We employ design principles by listening to our stakeholders&apos; feedback in order to offer the right web and mobile products to end consumers. We are firm believers that with the correct strategy and planning, a company can produce measurable results.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="design-process-card flex flex-col md:flex-row-reverse items-center gap-6 bg-[#252525] rounded-xl p-6 border border-[#333] hover:border-[#c7010c] transition-all duration-300">
              <div className="flex-shrink-0 w-48 h-36 rounded-lg overflow-hidden">
                <img
                  src="/images/services/Interactive-Design-img.webp"
                  alt="Interactive Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#c7010c] leading-none">04.</span>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Interactive Design</h4>
                </div>
                <p className="text-[#aaaaaa] leading-relaxed text-sm md:text-base">
                  The navigation experience will be designed, prototyped, and linked to various user journeys after understanding the users&apos; goals. The user, company owners, and technical staff are always involved in the Interaction Design process.
                </p>
              </div>
            </div>

            {/* Step 05 */}
            <div className="design-process-card flex flex-col md:flex-row items-center gap-6 bg-[#252525] rounded-xl p-6 border border-[#333] hover:border-[#c7010c] transition-all duration-300">
              <div className="flex-shrink-0 w-48 h-36 rounded-lg overflow-hidden">
                <img
                  src="/images/services/wow-factor.webp"
                  alt="Bringing the WOW Factor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#c7010c] leading-none">05.</span>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide">Bringing the WOW Factor</h4>
                </div>
                <p className="text-[#aaaaaa] leading-relaxed text-sm md:text-base">
                  A meticulously crafted visual design complements Interactive Design. The end user interacts at the user interface level to improve discovery, engagement, and transactions. Our UI/UX design and development services providers recognise the importance of pixel-level details and standards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-[3.2rem] lg:py-[4.8rem] bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              What Are The Benefits Of Working With Tech2Globe?
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
            <p className="mt-4 text-gray-600 text-lg">In general, working with the greatest UI UX design services will help you design and optimise your goals. Our unity and cooperation would surely help you achieve and rise to new heights.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Proficient Team */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiMonitor size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our flexibility</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We believe in safe business practices with UI UX design services, so you can rely on us to assist you when you need it. We guarantee our honesty and keep our promises.
              </p>
            </div>

            {/* Collaborative Process */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiTag size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Productivity on the rise</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We are known for our quality services as the best UI UX design services providers. As a result, our team ensures that you complete the work in a productive manner, ensuring that it is done efficiently.
              </p>
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiTarget size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our efforts, your knowledge</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                It is a normal aspect of life to experience and recall events. We will, nevertheless, make every attempt to give you an experience that you will never forget.
              </p>
            </div>

            {/* Technical Assistance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiTablet size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tools That Are Appropriate</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                The most important aspect is that our UI UX design services offered by our professionals deliver clear and concise instructions to our consumers.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-3">
              Why Choose Us For Your UI UX Design Services?
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-4" />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FaLightbulb className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Insightful Conceptualization</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Every design campaign begins with a concept breakdown, which we use to time each phase of our full-fledged UI/UX design solutions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FaTimes className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Adherence To The Timeline</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                We make certain that tight deadlines do not have an impact on the quality of our services, thus we adopt a well-planned method to complete the project on time.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FaTablet className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Acquaintance With Technology</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                We tackle functionality selection, wire-frame creation, data dissemination, task evaluation, prototype testing, and tool maintenance in addition to the aesthetic appeal.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-[88px] h-[88px] rounded-full bg-[#f0f0f0] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[#c7010c]">
                <FiPenTool className="text-[#c7010c] text-[2rem] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-[#222] text-[16px] font-semibold">Knack For Perfection</h3>
              <p className="text-[#666666] text-[14px] leading-[1.8] ">
                Our skilled design and development teams excel in their respective industries, which is why we always offer exceptional models to our clients for final approval.

              </p>
            </div>


          </div>
        </div>
      </section>


      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              UX/UI Designing Principles
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              User experience and user interface are dynamic fields with constantly changing ideas and foundations that must be kept up with. There are thus a few carefully curated rules that most UI/UX design and development services providers adhere to. It is done in order to comply with the importance of these designs that aid in the creation of joyful designs when a user navigates, utilises, or browses a certain website or application.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>


      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main>
  );
}
