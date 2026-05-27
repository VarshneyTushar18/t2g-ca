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
  FiPhone
} from "react-icons/fi";

import { FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import ConsultancySlider from "@/components/services/ConsultancySlider";


export const metadata = {
  title:
    "Influencer Marketing Agency Toronto | Request a Free Sample Data",

  description:
    "Influencer Marketing Agency Toronto. Results-driven ROI marketing, complimentary audits, customized plans, and 10,000+ successful projects.",

  keywords: [
    "Influencer Marketing Agency",
    "Influencer Marketing Agency Toronto",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/influencer-marketing-services",
  },

  openGraph: {
    title:
      "Influencer Marketing Agency Toronto | Request a Free Sample Data",

    description:
      "Results-driven ROI marketing, complimentary audits, customized plans, and 10,000+ successful projects.",

    url: "https://tech2globe.ca/influencer-marketing-services",

    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

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
    question: "What Is Influencer Marketing?",
    answer:
      "Influencer marketing is a type of social media advertising in which influencers are employed to sell or advertise a company or its goods to their audiences. Influencers typically have a large following on social media platforms, and influencer marketing agency Canada uses this following to spread the word about the product for which marketers pay them."
  },
  {
    question: "What Will You Do If I Collaborate With Your Influencer Marketing Agency?",
    answer:
      "As the best influencer marketing agency, we assist businesses in establishing connections with leading influencers across various markets. To get the most out of each campaign, we plan, carry out, and monitor influencer marketing initiatives for their customers."
  },
  {
    question: "What Are The Social Media Channels You Will Help With?",
    answer:
      "Our 50,000+ Creator Network spans platforms including Facebook, Instagram, YouTube, Twitter, and Quora."
  },
  {
    question: "Is Influencer Marketing Really Successful Or Just Hype?",
    answer:
      "Influencer marketing is becoming a productive strategy for companies. According to one of the reports, 81% of marketers believe influencer marketing Toronto to be a successful tactic. Successful reports include that It produces higher-quality traffic than other marketing channels. Compared to other marketing methods, it helps to increase ROI. Compared to affiliate marketing or organic search results, it yields quicker results and is one of the most economical marketing channels."
  }
];

const servicesData = [
  {
    id: 1,
    title: "Brand Awareness",
    description:
      "The Influencer marketing agency helps the target audience, frequently inundated with a barrage of commercials every day, feel more connected to and engaged by the advertising activities. Influencer marketing Toronto provides brands with a practical, discreet way to interact with customers in contrast to other social media marketing strategies, regardless of the widespread use of ad blockers and the general mistrust of overt advertisements.",
    icon: <FiSearch size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Drive Conversions",
    description:
      "Long-term marketing initiatives' success results from accurate and exciting content. The foundation of effective influencer campaigns is authenticity. Maintaining long-term relationships through collaboration with the influencer promotes beneficial outcomes for the brand and company. Long-term relationships with influencers result in cost savings since they will bargain and offer a fair price if you work with them on multiple initiatives. Influencer marketing in Toronto can significantly aid in building audience engagement.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Build Brand Trust",
    description:
      "Because the top influencer marketing agency has professionals in the industry, their followers respect them and give them a lot of recognition. Over time they have developed a positive and powerful rapport among their audience. 75% of YouTube subscribers value the platform's use of accurate, relevant, and trustworthy faces, and 70% of teen users are more inclined to identify the influencers than with conventional celebrities. Additionally, 60% of users state that they prefer the reviews of their favourite micro-influencers to those of well-known TV and prominent celebrities",
    icon: <FiLink size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Great for Lead Generation",
    description:
      "Nowadays, most online customers are influenced by what their influencers suggest when making purchases. People respect and trust their favorite influencers' opinions, making them more receptive to advertising. As the best influencer marketing agency Canada, we believe influencers can impact a customer's purchase choice. Therefore, social media users regard influencer marketing as one of the activities they have responded to positively. This is why influencer marketing is continuously spreading its branches in every section of the commercial industry.",
    icon: <FiBarChart2 size={32} color="#ffffff" />
  },
];

export default function InfluencerMarketingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="BEST INFLUENCER MARKETING AGENCY IN CANADA"
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
                Top Influencer Marketing Agency In Canada
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] text-lg font-medium mb-3">We have a giant network of social media influencers, so you can choose the one that best fits your business!</p>


              <p className="text-gray-600 mb-3 leading-relaxed">
                With the evolution of Advertisements, consumers are becoming more educated and critical of the messages they perceive. The days of accepting an advertisement's message and proposition at face value are long gone. Businesses now must discover new methods to engage in a world where advertising is viewed as more invasive than helpful. Directly approaching celebrities for endorsements may be out of your price range due to their current affiliations and high operating costs. Because it addresses access issues and increases trust in disseminating powerful marketing messages, this confluence of events has created the ideal storm for influencer marketing Toronto. In response, we are here. To produce the content, we connect the dots and collaborate with the advertiser and the influencer. Now, a marketer may have their message aired by someone the target market trusts and who, in turn, trusts the advertiser. Tech2Globe, an influencer marketing agency, is a group of top-tier digital marketing professionals who work closely with the world's biggest brands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We at Tech2Globe, one of the best influencer marketing agencies, specialise in connecting businesses with like-minded social media influencers who act as brand ambassadors for your company. Our database contains thousands of social media influencers, each of whom has a sizable following in almost every category, including professional sports, fashion, foodies, and music. Research and preparation are the cornerstones of our creative process. At the same time, the foundation of our strategy is creating exciting content and disseminating it via Social Media, SEO, PPC, and community-building projects. Thanks to our management, you can understand exactly how each project will affect your business based on years of experience and reporting supported by thorough analysis.
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
              Benefits Of Influencer Marketing Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              Tech2Globe, the best Influencer marketing agency Canada helps achieve long-term success by collaborating effectively with influencers and creating solid, long-lasting partnerships.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>

      <Industries />

      <ClientSlider title="Brands We’ve Worked With" clients={clientsData} />

      <section className="py-16 bg-[#1c1c1c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/why-influencer.jpg"
                alt="Why Hire A Top Influencer Marketing Agency?"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Why Hire A Top Influencer Marketing Agency?
            </h3>
            <div className="w-16 h-[3px] bg-[#c7010c] mb-3"></div>

            <p className="text-white mb-8 leading-relaxed">
              Planning, analysing, and executing practical campaign principles that run the top influencer marketing companies are implemented in all our strategies.<br />
              We assist brands in building new connections, networking with successful influencers, and developing intriguing campaigns as it leads them through the complicated world of competition. We are highly skilled in developing and advancing the marketing plan. As one of the top influencer marketing companies, our expert team devises successful strategies for social media marketing that ultimately leads to better brand awareness and new sales.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Services We’re Proudly Serving Our Partners For Years
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>We live in a world where advertisements shout at us from every angle, pleading with us to act. And we know how and in what form we should respond!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/instagram-icon.png" alt="Instagram" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Instagram Influencer Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                The Influencers on Instagram or any other social media platform are heard because they are aware of what their audience is searching for. Brands have an advantage of connecting with their customer base because of this. Influencers are prominent social media figures because they are known for creating content that connects with their audience. Brands can use this characteristic to reach their target market with their audiences.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/facebook-icon.png" alt="Facebook" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Facebook Influencer Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                As the best influencer marketing agency Canada, we know Facebook is an excellent platform for influencers to share a brand's story. When you incorporate videos into your story, they become even more powerful. The fact that Facebook Stories appear at the top of a user's page instead of in the main news feed is one of the critical factors in their popularity.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/youtube-logo-icon.png" alt="Youtube" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Youtube Influencer Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                As a benefit of influencer marketing Toronto, it's important to note that influencers take a strong position for your products or services in a compelling manner without being forceful or dishonest. Additionally, leveraging influencers for marketing makes your consumer outreach approach more viable because you want to avoid people blocking your ads or causing people to become irritated.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/Affiliate-icon.png" alt="Affiliate" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Affiliate Influencer Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                You can benefit from having your affiliate program as one of the advantages of working with an influencer marketing agency Canada. Influencers or affiliates receive commissions from affiliate programs depending on sign-up rates, purchases, or other variables. You can design a unique affiliate program when your company collaborates with numerous influencers.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/Celebrity-icon.png" alt="Celebrity" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Celebrity Influencer Marketing
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Celebrity advertisements greatly influence and shape consumer opinion about a brand and build trust. Best influencer marketing agencies increase the brand's value and raise awareness of a particular product or service. We ensure that our influencers not only deliver, but the entire process should be as desired because celebrity endorsements must always reflect the endorser's honest opinion. The supporter's findings, beliefs, and experiences are of primary importance.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <Image width={100} height={100} src="/images/services/creator-icon.png" alt="Creator" className="mb-3" />
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Creator Onboarding
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                It's not a new thing that companies have earlier started using celebrities to market their products and services. However, accomplishing that may seem impossible if your business is small to medium-sized. Social media influencers can be helpful in this situation. These well-known online celebrities work in a specific sector, like fashion or gaming.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <FaqContact faqs={faqsData} />

      <Footer />
    </main >
  );
}
