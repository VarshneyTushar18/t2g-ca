import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import ServiceCards from "@/components/ServiceCards";
import ClientSlider from "@/components/ClientSlider";
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
  FiClock,
  FiPackage,
  FiZap,
  FiKey,
} from "react-icons/fi";

import { FaCheck, FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";


export const metadata = {
  title: "Graphic Design Services Canada @Transform Your Brand Design",

  description:
    "Graphic Design Services Canada ✅ Transform Your Brand Design ✅ Claim Your Free Audit & Custom Plan ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!",

  keywords: [
    "graphic design services",
    "graphic design agency toronto",
    "graphic design company",
    "graphic design services canada",
    "Professional Graphic Designers in Toronto",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/graphic-design-services",
  },

  verification: {
    google: "jD0JDJ5j1FAatSBe_yirV-nqIsDpM68FtkukrbsPK3I",
  },

  openGraph: {
    title: "Graphic Design Services Canada @Transform Your Brand Design",

    description:
      "Graphic Design Services Canada ✅ Transform Your Brand Design ✅ Claim Your Free Audit & Custom Plan ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!",

    url: "https://tech2globe.ca/graphic-design-services",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },

  other: {
    "article:publisher":
      "https://www.facebook.com/tech2globe.software",
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
    question: "Why do I need a graphic designer?",
    answer: `
      If your goal is to create and print your material from your desktop printer for personal use, such as greeting cards, flyers, or craft projects, using desktop publishing software, you will not need a graphic designer.

      What a graphic design services Canada will bring to your process is an in-depth knowledge of graphic design, the elements and principles of graphic design, and the software skills required to use desktop publishing and image programs. A graphic designer will also be conversant in preparing files for use by others – be they printers or online Web hosting providers, ensuring the trouble-free output of your finished communication piece.
    `
  },
  {
    question: "How does your graphic design procedure work?",
    answer: `
      Initially, we set up a meeting with our clients and understand their needs. Later on, we do in-depth research on the competitors and the respective industry. Once done, we start working on the graphics. You can then let us know the rectifications, if any!
    `
  },
  {
    question: "Is the graphic work my property once the work is complete?",
    answer: `
      Yes, if you pay the whole fee for the project and the graphic work is approved from your end, the project entirely belongs to you.
    `
  },
  {
    question: "Are you available all-round the clock?",
    answer: `
      Our customer support representatives are available 24x7 for our esteemed customers. Thus, you can contact us any time you want related to graphic designing services in Delhi.
    `
  },
  {
    question: "How much does it cost to get graphic designing services?",
    answer: `
      We charge based on "per design" for our graphic designing services. However, the specific cost could depend upon the complexity of the designs you want from us.
    `
  },
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


export default function GraphicDesignServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Graphic Design Services In Canada"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Graphic Design Services", href: "/graphic-design-services" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Graphic Design Services For Creative Enthusiasts
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-center font-semibold text-[#c7010c] mb-4">Our graphic design services are works of pieces of art in themselves.</p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                As a design firm, we strive to produce remarkably appealing, intriguing, educational, and fascinating designs for your company. We perform our magic to assist your company in delivering the appropriate message. Using a visual medium makes it relatively simple to make a lasting impression on someone. Our designs imprint a lasting impression on the viewer's mind, making sure they recall your brand long after seeing your ad. As a graphic design services provider, we balance utility with design to ensure that the message delivered to the audience is loud and clear.<br /><br />
                Having a Graphic Designer create or select the correct logos, images, graphics, or layout for your creative materials will create visual consistency for your company across all the different channels it uses to interact with clients. Think of any successful company and how much graphic design plays into its branding and forward-facing design choices.
                Beyond establishing your brand, graphic design is vital in telling your target audience what you want it to hear. A photograph or text alone can't convey all that good graphics can, so a Graphic Designer's job is to find ways to create emotionally resonant creative materials.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── Bring Your Brand To Life – refined elegant section ── */}
      <section className="brand-principles-section bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="brand-principles-header">
            <h2 className="brand-principles-title">
              Bring Your Brand To Life With Our Detailed Work
            </h2>
            <div className="brand-principles-accent-line"></div>
            <p className="brand-principles-subtitle">
              Unique, innovative, and consistency are 3 principles that we strictly follow
            </p>
          </div>

          {/* Cards Grid */}
          <div className="brand-principles-grid">

            {/* Experience */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiAward size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">Experience</h3>
                <p className="bp-card-text">
                  We have extensive experience driving organic traffic to your business and website to increase engagement and visibility. Our experienced professionals know what works and what does not to rank the website and get potential clientele for your business.
                </p>
              </div>
            </div>

            {/* Customer-Centric */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiUsers size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">Customer-Centric</h3>
                <p className="bp-card-text">
                  We always prioritise creating first-grade products for your company while keeping your business needs and preferences in mind. We, as a graphic design company, know what your customers might want to see, hence, we design and deliver accordingly.
                </p>
              </div>
            </div>

            {/* Industry-Research */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiSearch size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">Industry-Research</h3>
                <p className="bp-card-text">
                  To curate a product that is not only functional but also effective requires huge volumes of in-depth industry research. Our trained professionals ensure that we deliver a world-class product backed by relevant facts and figures.
                </p>
              </div>
            </div>

            {/* Array Of Services */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiLayers size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">Array Of Services</h3>
                <p className="bp-card-text">
                  Our business offers a massive array of graphic design services to choose from because, as a fellow enterprise, we understand a business&apos;s needs and wants. From graphic designing to UI/UX services, we have everything to offer you.
                </p>
              </div>
            </div>

            {/* No Hidden Cost */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiDollarSign size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">No Hidden Cost</h3>
                <p className="bp-card-text">
                  We are transparent; thus, you don&apos;t have to worry about hidden charges. We ensure that our team works within your budget. We are not that graphic design company who charge according to customers.
                </p>
              </div>
            </div>

            {/* On-Time Delivery */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiClock size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">On-Time Delivery</h3>
                <p className="bp-card-text">
                  We are quite punctual and recognise the significance of on-time deliveries. You can rely on our graphic design company for timely and trustworthy services. We are known for working around our client&apos;s timelines and finishing before deadlines without compromising the quality of work.
                </p>
              </div>
            </div>

            {/* Skilled Team */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiBriefcase size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">Skilled Team</h3>
                <p className="bp-card-text">
                  Like-minded, innovative individuals hold our graphic design agency Toronto together. They not only complement each other&apos;s points of view, but they also collaborate well! They are amazing and responsible professionals full of enthusiasm who complement each other and contribute to the overall output.
                </p>
              </div>
            </div>

            {/* Organised Workflow */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiZap size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">Organised Workflow</h3>
                <p className="bp-card-text">
                  Everything we do has a pattern, and our approach is no different! Working logically and methodically to save time is more critical than working rapidly. We always meet deadlines that we set for ourselves.
                </p>
              </div>
            </div>

            {/* Integrity */}
            <div className="bp-card">
              <div className="bp-card-icon">
                <FiKey size={28} />
              </div>
              <div className="bp-card-body">
                <h3 className="bp-card-title">Integrity</h3>
                <p className="bp-card-text">
                  We promise to be truthful in whatever we make. Our reputation is owed to our customers. Without them, we would not have been able to achieve what we have today. We would never, ever want to be ambiguous with our customers.
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
              You Get The Best Of Our Services
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
            <p className="text-center font-semibold text-[#c7010c] mb-4">We analyse, plan, design, and execute thus you can rest assured with the quality!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Proficient Team */}
            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30  flex items-center justify-center mb-6 text-[#c7010c] ">
                <img src="/images/services/logo-design.webp" alt="Logo Designing" className="img-fluid" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Logo Designing</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We can create the logo you've always wanted, whether simple or sophisticated. We analyse and comprehend your design aim before creating a logo that reflects the concepts of your company. As a graphic design agency Toronto, we understand that a logo should speak eloquently about the organisation's persona while being instantly recognisable.
              </p>
            </div>

            {/* Collaborative Process */}
            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30  flex items-center justify-center mb-6 text-[#c7010c] ">
                <img src="/images/services/Brochure.webp" alt="Brochure" className="img-fluid" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Brochure</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We can design everything from a product catalogue to flyers and company brochures. Our graphic design agency Toronto understands how vital it is to deliver as much information as possible in the most appealing way possible. We design eye-catching brochures, catalogues, and flyers consistent with your company's theme!
              </p>
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30  flex items-center justify-center mb-6 text-[#c7010c] ">
                <img src="/images/services/Corporate-&-Branding.webp" alt="Corporate & Branding" className="img-fluid" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate & Branding</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Our Brand & Corporate Identity service is focused on conveying a clear statement about the character and vision of your brand. We go above and beyond to make your brand distinctive and appealing. This includes displaying your firm's principles, practices, mission, and much more to offer the world an example image of your company.
              </p>
            </div>

            {/* Technical Assistance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30  flex items-center justify-center mb-6 text-[#c7010c] ">
                <img src="/images/services/Infographics.webp" alt="Infographics" className="img-fluid" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Infographics</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Infographics, how enticing are they? Our graphic design team appreciates generating infographics that engage and educate visitors! We focus on providing information about your products or services in the most benign way possible, in addition to giving our undivided attention to infographic design.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30  flex items-center justify-center mb-6 text-[#c7010c] ">
                <img src="/images/services/Poster-Designing.webp" alt="Poster Designing" className="img-fluid" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Poster Designing</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                We wish to make your brand valuable on social media and other digital communication platforms. We spend a significant amount of time and work developing a poster that promotes your brand without overly marketing it. We love to create posters and signage as a graphic design agency Toronto .
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-30 h-30  flex items-center justify-center mb-6 text-[#c7010c] ">
                <img src="/images/services/Motion-Graphics.webp" alt="Motion Graphics" className="img-fluid" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Motion Graphics</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                A 2D or 3D motion graphics explanation is one of the most unique ways to market your band. We use cutting-edge technologies to create seamless 2D or 3D animations that will influence your customers! We can also develop bespoke gifs to enhance your website or social accounts.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ClientSlider title="Whom We’ve Partnered With" clients={clientsData} />

      <section className="workflow-section">
        <div className="workflow-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 workflow-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              The Best And The Most Advanced Tools<br />
              We Use While We Serve You
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-6xl mx-auto leading-relaxed text-[15px] md:text-[16px]">
              We favour simple yet appealing presentations to dreary slideshows and bullet points.
              To attract the audience, our professional Graphic Designers in Toronto combine analytical data with perfect design components.<br />
              Bring your PowerPoint presentations to life and captivate your audience's attention to wow them!
              Graphic Designers rely on software to bring their ideas to life. Photoshop, Sketch, Illustrator, InDesign, and After Effects are among the best software for graphic design.
            </p>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <span className="workflow-number">01.</span>
              <h3 className="workflow-title">Photoshop</h3>
              <p className="workflow-desc">
                Photoshop is a graphic editor that is best used for image editing. It is the industry standard for manipulating photos and computer art. Photoshop offers 2D and 3D image manipulation, compositing, video editing, and image analysis.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">02.</span>
              <h3 className="workflow-title">Sketch</h3>
              <p className="workflow-desc">
                A sketch is a vector-based tool on Mac that focuses on Web, app, and interface design. This program is excellent for designing icons, ad banners, social media images, and presentation materials. It also has many UI and UX-related usages, such as icon design, prototyping, and creating user flows.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">03.</span>
              <h3 className="workflow-title">Illustrator</h3>
              <p className="workflow-desc">
                You can create everything from vector illustrations and logos to graphics and fonts with Illustrator. While Illustrator shares many similar tools and functions with Photoshop, it is centred around vector design, which means that you can resize and rescale designs without losing image clarity.
              </p>
            </div>

            <div className="workflow-card">
              <span className="workflow-number">04.</span>
              <h3 className="workflow-title">After Effects</h3>
              <p className="workflow-desc">
                After Effects is a motion graphics and visual effects software ideal for Graphic Designers who incorporate motion into their work; with After Effects, designers can create animations, movie titles, transitions, or even designs in a 3D space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[3.2rem] lg:py-[4.8rem] bg-[#f7f7f7] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Why Should You Be Choosing<br />
              Tech2Globe Graphic Design Services?
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
            <p className="text-center font-semibold text-[#c7010c] mb-4">We know whom you sell, and their minds thus we are capable of delivering the best one!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Proficient Team */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiUsers size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                With over twenty years of design experience, I bring a broad base of experience and knowledge to your design project. I am passionate about the design business and helping organisation
              </p>
            </div>

            {/* Collaborative Process */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiRefreshCw size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                I am a relatively small design shop with significantly less overhead than larger design firms, allowing me to pass the savings on to you.
              </p>
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiAward size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Risk-free</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                It never hurts to talk to someone to help clarify your design requirement. Use my Preliminary Project Brief Form to submit your design project today.
              </p>
            </div>

            {/* Technical Assistance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  flex items-center justify-center mb-6 text-[#c7010c] ">
                <FiTool size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Creativity</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Creativity is a very subjective topic. Examine my portfolio, and you will see how I have solved my past client's design problems. This is an indicator of my creative abilities.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                You Enjoy The Best Experience When<br />
                You Go Graphic Design Services
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Graphic design services Canada focuses on the appearance of a product, while UX design focuses on the user's overall experience with the product. These two types of innovation have many elements in common, but there are a few essential differences between the two.<br />
                The goal of graphic design is to create visually appealing products that convey specific messages or information. Graphic Designers focus on branding, typography, layout, and the general principles of design composition. They work on various materials, including advertisements, flyers, logos, packaging, and animations.<br />
                Good graphic design will make a company more visible in the marketplace, which will translate to a boost in revenue. Given the link between intelligent graphic design and concerns like usability and user experience, there's plenty of evidence to show that just graphic design alone significantly affects customer behaviour.
              </p>
            </div>
          </div>
        </div>
      </section>


      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main >
  );
}
