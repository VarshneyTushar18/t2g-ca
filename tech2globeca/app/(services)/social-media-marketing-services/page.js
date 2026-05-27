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
  FiDatabase
} from "react-icons/fi";

import { FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";


export const metadata = {
  title:
    "Social Media Marketing Toronto | Request a Free Audit & Plan",

  description:
    "Social Media Marketing Toronto. Results-driven ROI marketing, complimentary audits, customized plans, and 10,000+ successful projects.",

  keywords: [
    "Social Media Marketing Toronto",
    "Social Media Agency Toronto",
  ],

  alternates: {
    canonical:
      "https://tech2globe.ca/social-media-marketing-services",
  },

  openGraph: {
    title:
      "Social Media Marketing Toronto | Request a Free Audit & Plan",

    description:
      "Results-driven ROI marketing, complimentary audits, customized plans, and 10,000+ successful projects.",

    url:
      "https://tech2globe.ca/social-media-marketing-services",

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




const faqsData = [
  {
    question: "How can I be assured of my social media management strategies?",
    answer: `
      Your social media marketing Toronto plan will include a detailed, organised summary of each post or post category tailored to your company's social media platform. This breakdown will display each post, its content, and when it will be published. Because photos and digital graphics are so important online, your plan will contain an image template so that all your photographs fit your corporate branding. If you have pictures or graphics that you would want to use, we will integrate them into your plan.
    `
  },
  {
    question: "Why should I outsource social media management services?",
    answer: `
      Outsourcing to the best social media marketing agencies can be incredibly beneficial if you are unsure how or where to begin promoting your business online. We can assist you in developing an effective Social Media strategy Social media marketing agencies will save you a lot of time and ensure you provide the finest content possible to promote your brand. Engage your audience daily so that you become their first option. Your social media accounts are maintained in one location. We employ solutions that allow us to control all channels in one place, giving us more time to create high-quality content on social media.
    `
  },
  {
    question: "Why should I hire Tech2Globe for social media management services?",
    answer: `
      We are a prominent social media marketing agency in Canada. Brandhype's team ensures that they will build your brand's internet presence successfully. We can assist you in interacting directly with your clients on social media. With the assistance of our committed team, we provide you with various social media marketing services Toronto at reasonable prices.

      Yes, it takes time to write posts, design graphics, develop a content strategy, integrate the plan with your products and services, respond to queries and comments, and so on. You've attempted to post regularly, but it takes too long. You understand that social media is a full-time job.
    `
  },
  {
    question: "What platforms can you take charge of?",
    answer: `
      Twitter, Facebook fan page, Facebook group, Instagram, and Pinterest are currently available for any brand. LinkedIn can also be controlled on a case-by-case basis in some circumstances. This is because LinkedIn is only utilised as a professional network and is not used the same way as other sites.
    `
  },
  {
    question: "How will I know whether your efforts are fruitful?",
    answer: `
      The objectives you set as part of your rationale for employing me will let you know if it is working. For example, when you work with Tech2Globe, a top SMO company in Canada, your profiles will seem consistent if you want to maintain a constant presence on social media.

      If you want to sell specific products and services, the rise in phone calls and queries will let you know it's working (lead generation).
    `
  }
];

const servicesData = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Tech2Globe, a best social marketing company services provider, has accomplished everything from launching a brand on social media to developing a long-term growth strategy. Our competence lies in creating enticing content that can boost your brand on social media, such as creating posts, graphics, videos, GIFs, blogs, etc. Using various tools and technical methodologies, we enable ideas to go viral and get the trending charts, but also the brains of the target audience. ​​",
    icon: <FiSearch size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Online Brand Reputation",
    description:
      "Managing your internet reputation entails giving your business the finest online presence possible. These services ensure that when clients (and potential leads) look for your company online, they first encounter good news and reviews. Tech2Globe provides the best ORM Services Canada, uses various tactics to remove unfavourable articles and reviews from the first few pages of search results for businesses with negative content online.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Influencer Marketing",
    description:
      "From social media integrations to influencer-led IPs, our teams are adept at holistically approaching influencer marketing strategy and digital content. We use statistics and our sense of what's happening in culture to create unique influencer marketing services in Toronto. Using our technology, we can categorise, find, and choose the ideal influencers based on relevancy, authenticity, brand safety, predictive performance, and 20+ other important data criteria.",
    icon: <FiLink size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Social Media Follower Growth",
    description:
      "A significant social media organic following expansion means a lot for genuine engagement. These are core goals for every company or brand on any social media platform, not merely trendy terms for brand social development. Collaboration with our social media marketing agency can be very beneficial. If you find the perfect growth partner, it is regarded as one of the finest practices for efficient follower growth. Naturally, a social media follower growth service will boost your following.",
    icon: <FiBarChart2 size={32} color="#ffffff" />
  },
];

const caseStudiesData = [
  {
    id: 1,
    title: "SEO SERVICE RESULTS",
    icon: <FiSearch size={64} className="text-black" />,
    stats: [
      { label: "Organic Traffic", value: "+700%" },
      { label: "Online Leads", value: "+430%" }
    ],
    description: "Tech2Globe used SEO to increase the overall traffic to our Aquatech project website by +700% and along with the new CRO (Conversion rate optimization) focused Website were able to increase online leads by over +430%.",
    link: "/case-study/seo-service-results"
  },
  {
    id: 2,
    title: "DATA MANAGEMENT SERVICES",
    icon: <FiDatabase size={64} className="text-black" />,
    stats: [
      { label: "Industries", value: "+30" },
      { label: "Companies", value: "+500" }
    ],
    description: "Tech2Globe's data management experts can help you with our data entry services and lower your burden. They will scan and categorize the originals in order to convert physical documents into digital files.",
    link: "/case-study/data-management-services"
  },
  {
    id: 3,
    title: "ECOMMERCE MARKET PLACES",
    icon: <FiShoppingCart size={64} className="text-black" />,
    stats: [
      { label: "Traffic", value: "+780%" },
      { label: "Conversion", value: "+660%" }
    ],
    description: "Built up the goodwill on the online marketplace within the targeted date and client appreciated our efforts and a committed team with expertise were necessary to accomplish all tasks within TAT & deliver the assignment.",
    link: "/case-study/ecommerce-market-places"
  }
];

export default function SocialMediaMarketingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="BEST SOCIAL MEDIA MARKETING AGENCY IN CANADA"
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
                Best Social Media Marketing Agency
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] text-lg font-medium mb-3">We know how to create endless opportunities with our restless efforts! We channelise, nurture, and convert followers into committed customers.</p>


              <p className="text-gray-600 mb-3 leading-relaxed">
                Do your strategies come up short of your goals? This might be because now social media is preferred more than ever; social media is a "usage-based" environment that requires all of your resources: a clear game plan, complete commitment, and a well-defined budget. Aside from organic outreach, getting your brand in front of your target audience without spending money on advertising can be difficult, whether for an ongoing campaign or a one-time sponsored piece.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tech2Globe having experience of over 14 years and consistently delivering satisfying results, believes better marketing always leads to smooth business expansion. Being one of the best social media marketing agencies in Canada, we integrate social media marketing services into your marketing plan to maximise your online visibility with the right social media marketing Toronto like Instagram or Facebook management services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AvailableLocations title="Our Digital Marketing Location" subtitle="" />







      <section className="py-16 bg-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Why Do Businesses Need
            Social Media Management?
          </h3>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-3"></div>
          <p className="text-white mb-5">With our social media marketing services in Toronto, we help you with visibility of social media profiles to stay on top of emerging themes and develop an agile social media marketing plan.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/why-smo.jpg"
                alt="Why Do Businesses Need Social Media Management?"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">

            <p className="text-white mb-8 leading-relaxed">
              Social media management is essential to a company's core strategy. To deliver a seamless user experience or keep the social store up to date with inventory and sales information, brands must ensure that social media and commerce teams interact. Your social media marketing agency may help you make critical strategic decisions based on real-time consumer information if you have access to analytics on social media activity. We have developed a social media marketing services Toronto team of experts that incorporate social listening capabilities, market benchmarks, search analytics, and other features. <br />Understanding what customers are doing on social media can help improve your marketing strategy and product development.
              Knowing what social media marketing agencies are good for you will help you make critical strategic decisions based on real-time consumer information if you have access to analytics on social media activity.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              How Social Media Platforms Help With
              Better Social Presence?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>As a top SMO company in Canada, we provide comprehensive, cutting-edge solutions to help you scale your business on every single social media platform!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/facebook-icon.png" alt="Facebook" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Facebook Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Advertising on Facebook can help bring your professional practices to the attention of a new audience more swiftly. As an experienced social media marketing agency, we personalise your ad to potential clients interested in your product or service based on their interests, gender, or even region using data from Facebook. Facebook's advertising platform has developed over time; users can now execute a marketing campaign or run advertisements.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/youtube-logo-icon.png" alt="Youtube" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                YouTube Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                YouTube is rapidly expanding, with over 5 billion videos watched every day! This platform receives far more traffic than any other. Even if you don't make many videos for your company, you may still reach a large audience by advertising your services on other people's videos. YouTube has a larger pool of traffic that you're almost certain to find potential clients if you appeal to their wants. By implementing YouTube marketing with the help of the best social marketing company, you are also strengthening your company's internet authority.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/linkedin-icon.png" alt="LinkedIn" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                LinkedIn Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                LinkedIn is a platform where one looks for something informative or engaging in nature. You can cover many areas on one platform with the help of LinkedIn marketing, resulting in a considerable volume of leads. Your company or personal profile is critical to the success of your marketing activities. Your social media marketing Toronto can be targeted to a specific set of people who have access to the platform on any device, and tablets using LinkedIn's marketing features, attracting traffic to your campaign.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/instagram-icon.png" alt="Instagram" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Instagram Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Instagram is a visually appealing social media platform with stunning recent features like reels. This social app now has over 800 million active users. However, Instagram is more than just a platform having a collection of beautiful photos and videos; many businesses now use the app as part of their digital marketing strategy. Still, being the top SMO company in Canada, we avoid over-posting and uploading irrelevant content. It creates a bad impact on your audience!
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/twitter-icon.png" alt="Twitter" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Twitter Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Twitter marketing can be enhanced by launching cross-channel campaigns centred by the best social marketing company. Tech2Globe social media services team maintains your overall social media and digital marketing approach collaborative and platform-oriented so you may invest your resources where and when they are most needed. The above social media marketing Toronto can also be applied to other social accounts, providing even more complementing alternatives.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/pinterest-icon.png" alt="Pinterest" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Pinterest Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Pinterest marketing services can benefit your brand because the platform rapidly becomes a search powerhouse for individuals worldwide. The network currently has over 175 million active users who use the enticing pinboards based on their particular niche of interest. Tech2Globe is the perfect option for harnessing the actual power of Pinterest to increase the ROI of your brand.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <ClientSlider title="Meet Our Clients" clients={clientsData} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Our Social Media Management Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              We create compelling social media campaigns to reach and engage the correct audience across several social channels.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>


      <Industries />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Case Studies
            </h2>
            <div className="w-16 h-[3px] bg-[#c7010c] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
              At Tech2Globe we believe not on instincts but on real-time output,
              so our customers trust us and we have a huge range of our case studies to display.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => (
              <div key={study.id} className="border border-gray-100 flex flex-col h-full bg-white transition-all hover:shadow-lg">
                {/* Icon Area */}
                <div className="bg-[#f2f2f2] py-12 flex items-center justify-center">
                  {study.icon}
                </div>

                {/* Title Bar */}
                <div className="bg-[#c7010c] py-4 px-6 text-center">
                  <h3 className="text-white font-semibold text-lg uppercase tracking-wider">
                    {study.title}
                  </h3>
                </div>

                {/* Stats & Description */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="grid grid-cols-2 gap-4 mb-6 border-b border-gray-100 pb-6">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[#c7010c] text-3xl font-semibold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-gray-500 text-xs uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    {study.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={study.link}
                      className="text-gray-900 text-xs font-semibold uppercase tracking-widest flex items-center hover:text-[#c7010c] transition-colors group"
                    >
                      Read More About Case Study
                      <span className="ml-2 text-[#c7010c] transform transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqContact faqs={faqsData} />

      <Footer />
    </main >
  );
}
