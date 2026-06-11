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
  FiTarget,
  FiEdit3,
  FiUsers,
  FiGlobe,
  FiStar,
  FiAward,
  FiRefreshCw,
  FiEdit,
  FiEye,
  FiBookOpen,
  FiMic,
  FiCode,
  FiPackage,
  FiLanguages,
  FiHome,
  FiMail,
  FiSend,
  FiShare2,
  FiTrendingUp,
  FiHeadphones,
  FiLayers,
  FiBriefcase,
  FiDollarSign,
  FiFileText,
  FiShoppingCart,
} from "react-icons/fi";

import { FaCheck, FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt, FaSignLanguage } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";


export const metadata = {
  title:
    "Content Marketing Services | Content Marketing Agency | Tech2Globe",

  description:
    "Tech2Globe provides content marketing services with consistent content creation to engage your audience, build trust, and influence purchasing decisions.",

  keywords: [
    "Content Marketing Services",
    "Content Marketing Agency",
    "Content Marketing Service Providers",
    "Content Marketing Services India",
    "Content Marketing Services Packages",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/content-marketing-services",
  },

  openGraph: {
    title:
      "Content Marketing Services | Content Marketing Agency | Tech2Globe",

    description:
      "Tech2Globe provides content marketing services with consistent content creation to engage your audience, build trust, and influence purchasing decisions.",

    url: "https://tech2globe.ca/content-marketing-services",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
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


const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.webp' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.webp' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.webp' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.webp' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.webp' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.webp' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.webp' },
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
    question: "What is content marketing?",
    answer: `
      Content marketing is the process of creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience, and ultimately, to drive profitable customer action. This can include blog posts, social media posts, email newsletters, videos, podcasts, and other types of content.
    `
  },
  {
    question: "What services does a content marketing company offer?",
    answer: `
      A content marketing agency Canada typically offer a range of services, including:
      Content strategy development: This involves creating a plan for creating and distributing content that aligns with the business's goals and objectives.
      Content creation: This involves creating the actual content, such as blog posts, social media posts, and more.
      Content distribution: This involves promoting and distributing the content through various channels, such as social media, email newsletters, and more.
      Analytics and reporting: This involves tracking the performance of the content and providing reports on metrics such as website traffic, engagement, and conversions
    `
  },
  {
    question: "How does the Best content marketing services in Toronto create content?",
    answer: `
      Content marketing companies typically have a team of writers, editors, and content strategists who work together to create content. The process may involve researching topics, developing a content calendar, writing and editing the content, and ensuring that the content is optimised for search engines and meets the needs of the target audience.
    `
  },
  {
    question: "How is content marketing services different from other forms of marketing?",
    answer: `
      Content marketing is different from other forms of marketing in that it focuses on creating valuable and relevant content that helps to attract and retain customers, rather than directly promoting products or services. This can help businesses establish trust and credibility with their audience, which can ultimately lead to increased sales and customer loyalty
    `
  },
  {
    question: "Who can benefit from content marketing services?",
    answer: `
      Content marketing services can be beneficial for businesses of all sizes and industries. By creating valuable content that resonates with their target audience, businesses can attract and retain customers, increase brand awareness, and drive sales.
    `
  }
];

const servicesData = [
  {
    id: 1,
    title: "Quality of work",
    description:
      "A top-notch content marketing company should produce high-quality content that is well-written, accurate, and engaging.",
    icon: <FiAward size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Expertise",
    description:
      "An affordable content marketing service should have a team of experts who have a deep understanding of the industry and target audience.",
    icon: <FiUsers size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Strategy",
    description:
      "A great content marketing company should have a clear and well-thought-out content strategy that aligns with the business's overall marketing goals and objectives.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Results",
    description:
      "The best content marketing companies should be able to demonstrate the results they have achieved for their clients, such as increased website traffic.",
    icon: <FiTrendingUp size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Customer service",
    description:
      "An affordable content marketing service should provide excellent customer service, responding to inquiries and requests promptly and working closely with clients to ensure their needs are met.",
    icon: <FiHeadphones size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Flexibility",
    description:
      "A great content marketing company should be able to adapt to changes in the market and be flexible in terms of the types of content they produce and the platforms they use to publish it.",
    icon: <FiRefreshCw size={32} color="#ffffff" />
  },
  {
    id: 7,
    title: "Creativity",
    description:
      "A content marketing agency Canada should be able to come up with fresh, original ideas for content and present them in an engaging way.",
    icon: <FiEdit size={32} color="#ffffff" />
  },
  {
    id: 8,
    title: "Collaboration",
    description:
      "A top content marketing company should be able to work closely with clients and other team members, collaborating to develop and execute a successful content marketing strategy.",
    icon: <FiLayers size={32} color="#ffffff" />
  },
  {
    id: 9,
    title: "Experience",
    description:
      "A content marketing company should have a track record of working with businesses in a variety of industries, and should be able to draw on this experience to inform their approach.",
    icon: <FiBriefcase size={32} color="#ffffff" />
  },
  {
    id: 10,
    title: "Transparency",
    description:
      "A top content marketing company should be transparent about their processes and fees, and should clearly communicate their expectations and deliverables to clients.",
    icon: <FiEye size={32} color="#ffffff" />
  },
  {
    id: 11,
    title: "Cost",
    description:
      "While cost is not the only factor to consider when choosing a content marketing company, it is important to find a company that offers a good value for the content marketing services they provide.",
    icon: <FiDollarSign size={32} color="#ffffff" />
  },
  {
    id: 12,
    title: "Online reputation",
    description:
      "Look for a content marketing agency Canada with a strong online reputation, as this can be an indicator of the quality of their work and customer satisfaction.",
    icon: <FiStar size={32} color="#ffffff" />
  }
];

const servicesData2 = [
  {
    id: 1,
    title: "Content Writing",
    description:
      "Build Credibility And Revenue Highly researched content Content for Targeted Audience Technical content expertise",
    icon: <FiEdit3 size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Blog Writing",
    description:
      "Convey scholarly information Evidence-based reasoning Authoritative point of view Concrete word choice",
    icon: <FiBookOpen size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Article Writing",
    description:
      "Flexible Writing Methods Highly Researched Articles 100% Original Content Keyword Optimised Content",
    icon: <FiFileText size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Press Release",
    description:
      "100% Originally Crafted Content SEO Optimised Content On-Time Delivery Instant Exposure",
    icon: <FiMic size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Guest Posting",
    description:
      "Domain & SEO Authority Build Quality Traffic Create Strong Brand Awareness Fast Turn-Around Time",
    icon: <FiGlobe size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Technical Content",
    description:
      "SEO Best Practice In Every Stroke Well Researched Content Cites Credible Sources Informative Content",
    icon: <FiCode size={32} color="#ffffff" />
  },
  {
    id: 7,
    title: "Ecommerce Copywriting",
    description:
      "Content As Per Industry Standards Unique & Descriptive Content Quality And Quantity Result Oriented Content",
    icon: <FiShoppingCart size={32} color="#ffffff" />
  },
  {
    id: 8,
    title: "Product Description",
    description:
      "Creative, And Unique Content Leads On The Targeted Group Expert Content Creators Structure For All Businesses",
    icon: <FiPackage size={32} color="#ffffff" />
  },
  {
    id: 9,
    title: "Product Reviews",
    description:
      "Concrete Word Choice Understanding The Customers Highly Strategized Content Unique Writing Proposition",
    icon: <FiStar size={32} color="#ffffff" />
  },
  {
    id: 10,
    title: "Language Translation",
    description:
      "Professional Interpretation Commercial & Web Translation Industry-Expert Translators Proofreading By Senior Editors",
    icon: <FaSignLanguage size={32} color="#ffffff" />
  },
  {
    id: 11,
    title: "AD Copywriting Services",
    description:
      "Complete Research And Planning Asses The Competition Creating Content Considering Your Audience Engaging Ad Copies",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 12,
    title: "Case Studies",
    description:
      "All-inclusive Bespoke Case Study Writing Educate Clients and Audience Creative And Versatile Expert Writers Services For Diverse Industry Verticals",
    icon: <FiBriefcase size={32} color="#ffffff" />
  },
  {
    id: 13,
    title: "Company Profile",
    description:
      "Powerful Company Presence Engaging Business Profile Writing Service 100% Plagiarism-free Content Convey Your Business With Attractive Profile",
    icon: <FiHome size={32} color="#ffffff" />
  },
  {
    id: 14,
    title: "Email Writing",
    description:
      "Excellent Content That Drives Results Writing Good Customer Service Emails Engaging Email Copies Compelling Crisp Content",
    icon: <FiMail size={32} color="#ffffff" />
  },
  {
    id: 15,
    title: "Newsletters",
    description:
      "We can be your word of mouth A/B Testing Mobile Friendly Newsletters Email Support",
    icon: <FiSend size={32} color="#ffffff" />
  },
  {
    id: 16,
    title: "Website Content",
    description:
      "Highly Appealing, Readable, And Unique Content Content For A Wide Variety Of Sectors Creative And Versatile Web Content Writers Thoroughly Researched Content",
    icon: <FiMonitor size={32} color="#ffffff" />
  },
  {
    id: 17,
    title: "Social Media Content",
    description:
      "Compelling Content That Attracts Connect With Your Audience Precise Content and Creative Graphics Dominate the Social Media Space",
    icon: <FiShare2 size={32} color="#ffffff" />
  },
  {
    id: 18,
    title: "Transcription Services",
    description:
      "Quick Turnaround Can Be Downloaded In Any Format Transcription By Professionals Confidentiality At Priority",
    icon: <FiMic size={32} color="#ffffff" />
  }
]


export default function SocialMediaMarketingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="BEST CONTENT MARKETING SERVICES IN CANADA"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "SEO Agency Toronto", href: "/seo-agency-toronto" }
        ]}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Breathe Life Into Your Brand With Engaging And Impactful Content
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] text-lg font-medium mb-3">A one-stop shop for Best content marketing services in Toronto</p>


              <p className="text-gray-600 mb-3 leading-relaxed">
                Tech2Globe Canada, one of the most dependable creative writing organisations, takes great delight in providing the greatest copywriting and content marketing services for all thriving industries. We have a staff of creative content writers and experienced copywriters who excel in all aspects of writing, with the goal of providing 100% unique and well-defined material that promotes commerce. By casting magical spells of well-knitted words, our articles have the capability to influence clients to make purchasing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AvailableLocations title="Our Digital Marketing Location" subtitle="" />


      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Transform Your Ideas Into Powerful Storytelling
              With Our Expert Writing Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              Tech2Globe Canada has a staff of experienced writers that are well-versed in all aspects of SEO writing. With a creative mindset and originality, our top copywriters put out their best efforts in developing bespoke SEO content tailored to specific company requirements. Our SEO writing services include a wide range of topics, including one-page blogs, off-page blogs, website content writing, keyword research, article writing, outreach affordable content marketing services, SEO copywriting, and many others.<br /><br />Our writers specialise in curating SEO-friendly material that improves the overall SERPs of websites, allowing ambitious companies to achieve the ultimate aim of digital marketing.<br /><br /><strong>Check out our top service offerings:</strong>
            </p>

          </div>
          <ServiceCards services={servicesData2} columns={3} />
        </div>
      </section>


      <section className="py-[3.2rem] lg:py-[4.8rem] bg-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Unleash The Power Of Words With Best Content Marketing Services In Toronto
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
            <p className="mt-4 text-gray-600 text-lg">See the benefits accruing to you by hiring the affordable content marketing services of our experienced expert Writers Teams:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Proficient Team */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiUsers size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experienced team</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                World-class writing at incredibly affordable prices and Prompt delivery
              </p>
            </div>

            {/* Collaborative Process */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiRefreshCw size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Custom solutions</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Practicality in capturing the hearts of readers with honesty and truth
              </p>
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiAward size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellent communication</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Boosting your website's ranking in key search engines
              </p>
            </div>

            {/* Technical Assistance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiTool size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive pricing</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Efficient digital marketing across social networking sites to elevate your brand.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Step-by-Step Approach Section */}
      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Step-By-Step Approach By Content Marketing Agency Canada <br className="hidden md:inline" /> To Serve Our Customers
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              Tech2Globe team obeys a streamlined workflow to deliver fast and affordable content marketing services in the most professional manner saving our client's valuable time, effort and money!
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Consulting & Quoting</h3>
              <p className="workflow-desc">
                Discuss goals, express ideas & brief about your company to our expert content strategists
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Curating</h3>
              <p className="workflow-desc">
                Our best copywriters and creative content writers will brainstorm ideas to include.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Quality Checking</h3>
              <p className="workflow-desc">
                Once the writing is done, content is sent to our proficient proofreaders for thorough scrutinization.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">Final Delivery</h3>
              <p className="workflow-desc">
                After quality-checking, we deliver the content to our customers to assure top-notch quality work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              What Makes Tech2Globe Canada
              Exceptional From Others?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              There are several factors that can contribute to a best content marketing services in Toronto being considered the finest in its field. Some of these factors may include:
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>





      <Industries />

      <section className="py-16 bg-[#1c1c1c] overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/content-writing.webp"
                alt="Hire Qualified Content Experts To Achieve Your Content Marketing Goals"
                className="rounded-lg overflow-hidden img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Hire Qualified Content Experts To Achieve Your Content Marketing Goals
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>
            <p className="text-white leading-relaxed mb-3">
              Tech2Globe’s writers take immense interest in your business in finding out your business core functionalities, mode of operation, target audience, the strength and weaknesses to curate the aptly tailored content exclusive to the particular needs. Our team is fluent with SEO writing and we conduct extensive keyword and topic research to create unique content in various formats.
            </p>
            <p className="mb-3 text-white"><strong>Our Promises:</strong></p>
            <ul className="hrline">
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We stick to deadlines</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We offer cost-effective service</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We follow industry standards</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We provide various types of content</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We are reliable</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We save you a lot of your time</li><hr />
              <li className="text-white flex items-center gap-2 mb-2"><FaCheck /> We excel in offering fresh content</li>
            </ul>
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
