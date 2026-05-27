import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import CTA from "@/components/CTA";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import ClientSlider from "@/components/ClientSlider";
import AvailableLocations from "@/components/AvailableLocations";
import {
  FiMonitor,
  FiTool,
  FiMessageCircle,
  FiUsers,
  FiMegaphone,
  FiDollarSign,
  FiBriefcase,
  FiBarChart2,
  FiTrendingUp
} from "react-icons/fi";

import LocationContact from "@/components/LocationContact";
import ServiceCards from "@/components/ServiceCards";

export const metadata = {
  title: "Digital Marketing Agency in Ontario | Tech2Globe Canada",
  description:
    "Best Digital Marketing Agency in Ontario to Boost Your Business Online. ✔ROI Driven Marketing ✔Free Audit & Plans ✔7000+ Successful Projects ✔Contact Now",
  keywords: [
    "digital marketing agency ontario",
    "seo services ontario",
    "ppc management ontario",
    "social media marketing ontario",
    "digital marketing company ontario"
  ],
};

const servicesData = [
  {
    id: 1,
    title: "Larger Audience",
    description:
      "Because of the internet, businesses can now reach customers all over the world, regardless of their location. This is especially true for businesses that do business on a global scale or have a large customer base. SEO, social media marketing, and PPC advertising are examples of digital marketing Ontario services that can assist businesses in reaching out to specific audiences and expanding their customer base.",
    icon: <FiMessageCircle className="text-white text-3xl" />
  },
  {
    id: 2,
    title: "Effectiveness Of Campaigns",
    description:
      "The amount of clicks, views, and click - throughs yielded by a digital marketing campaign can be tracked. Businesses can use the Digital Marketing Agency in Ontario to determine which campaigns are likely to succeed and which need to be enhanced. By monitoring the success of their campaigns, businesses can make data-driven determinations about their marketing strategy and adjust it consequently to optimise their results.",
    icon: <FiBarChart2 className="text-white text-3xl" />
  },
  {
    id: 3,
    title: "Affordable Marketing",
    description:
      "Traditional marketing techniques can be quite costly. Digital marketing, on the other hand, is frequently significantly less costly. This is especially true for small and medium-sized businesses that may not have the financial resources for large-scale advertising. Email marketing and social media marketing are examples of digital marketing services that can assist businesses in developing.",
    icon: <FiTrendingUp className="text-white text-3xl" />
  },
  {
    id: 4,
    title: "Beneficial Marketing Services",
    description:
      "A strong internet persona is critical for companies of all sizes in today's digital age. Website design and development, search engine optimization, and social media marketing are examples of online marketing Ontario services that can assist businesses in creating and managing a website, social media accounts, and other web assets which will help them improve their digital presence.",
    icon: <FiBriefcase className="text-white text-3xl" />
  },
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

const clientsData2 = [
  { id: 1, name: 'Yelp', logo: 'images/clients/yelp.png' },
  { id: 2, name: 'Bing', logo: 'images/clients/bing.png' },
  { id: 3, name: 'Hotfrog', logo: 'images/clients/hotfrog.png' },
  { id: 4, name: 'Goodfirm', logo: 'images/clients/goodfirm.png' },
];

const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.png' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.png' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.png' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.png' },
];

const faqsData = [
  {
    question: "What Is Digital Marketing in Today's Digital World?",
    answer: "In today's digital world, digital marketing has become an essential part of any business's overall marketing strategy. It allows companies to reach a larger and more diverse audience, build brand awareness, generate leads and sales, and track the success of their marketing efforts in real-time. In short, Digital Marketing Ottawa is a constantly evolving field, and new technologies and trends are emerging all the time."
  },
  {
    question: "Why is Digital Marketing Essential for the Success of a Business in Ottawa, Canada?",
    answer: "Digital Marketing Ottawa is essential for the success of any business in Canada as it allows you to reach a larger audience, be cost-effective, track your success, target the right audience, build relationships, and have a strong online presence."
  },
  {
    question: "What Kinds of Businesses Need Digital Marketing in Ottawa, Canada?",
    answer: `All types of businesses can benefit from digital marketing services in Ottawa:
      1. Service-based businesses: Businesses that provide services, such as law firms, accounting firms, and consulting businesses, can leverage partnership with the digital marketing agency in Ottawa.
      2. Local businesses: Local businesses, such as restaurants and retail shops, can use digital marketing to attract customers from the Ottawa region.
      3. B2B Businesses: Businesses that sell to other businesses can use digital marketing to generate leads and build relationships with potential clients.
      4. Start-ups: Start-ups can use digital marketing to build brand awareness, attract customers, and generate leads.
      5. Healthcare Industry: Healthcare providers can use digital marketing to increase patient engagement and improve patient outcomes.
      Consider hiring a reputable partner for your digital marketing services in Mississauga that can help you to develop and implement effective digital marketing campaigns.`
  },
  {
    question: "How Long Does Digital Marketing Take to Start Seeing Results?",
    answer: "On average, digital marketing Ottawa might take anywhere from a few weeks to a few months to yield results. The time frame will vary depending on the techniques and channels chosen, the complexity of the campaign, and the level of industry competition."
  },
  {
    question: "How long does Digital Marketing take to work at a Digital Marketing Agency in Ottawa?",
    answer: "It's crucial to remember that digital marketing services in Ottawa are a continuous activity, not something you do once and then abandon. To achieve the best results, our digital marketing agency in Ottawa constantly analyses and alters programmes, as well as being patient while waiting for results. Furthermore, we set realistic goals and explain it to our clients, as certain campaigns may take longer to produce results than others."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "L",
    name: "LISA",
    subname: "",
    text: "We have been working with Tech2Globe for the past year and have seen a significant increase in our search engine rankings and website traffic. Their team of experts provided us with a comprehensive SEO strategy and executed it with great attention to detail."
  },
  {
    id: 2,
    letter: "M",
    name: "MANDY",
    subname: "",
    text: "We struggled with getting our website to rank on the first page of Google for our target keywords. But since working with Tech2Globe, we have seen a dramatic improvement in our search engine rankings. They were able to identify and resolve technical issues on our website that were hindering our SEO efforts."
  },
  {
    id: 3,
    letter: "A",
    name: "ALEX",
    subname: "",
    text: "Tech2Globe helped us take our online business to the next level. Their team provided us with a customised SEO strategy that was tailored to our specific needs. Their efforts have resulted in a significant increase in our organic traffic and revenue. Very satisfied with their work and highly recommend them."
  }
];

const ottawaMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.3787768560117!2d-79.67389812403666!3d43.669947963131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b39f37c48f889%3A0x6b8d43886161413!2s975%20Mid-Way%20Blvd%20%2312%2C%20Mississauga%2C%20ON%20L5T%202C6%2C%20Canada!5e0!3m2!1sen!2sca!4v1719600000000!5m2!1sen!2sca";

export default function DigitalMarketingOttawa() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Digital Marketing Ottawa", href: "/digital-marketing-ottawa" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Digital Marketing Ottawa"
        breadcrumbs={breadcrumbs}
      />

      <ClientSlider title="The Leader in Digital Marketing" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Digital Marketing Services Ottawa
              </h2>
              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Know the real potential of your business with Canada's leading digital marketing agency - Tech2Globe!
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                As we know digital marketing is critical for every organisation that wishes to thrive in the digital age. With the advent of the internet and the widespread usage of smartphones, an increasing number of consumers are turning to the internet to find products and services. Businesses must have a strong online presence that efficiently reaches and converts their target audience in order to remain competitive. Welcome to Tech2Globe SEO Company Ottawa, one of the most competent and dependable digital marketing firms Ottawa, Canada. We are a group of professionals who specialise in assisting businesses of all kinds in achieving their online marketing objectives. Creating high-quality, engaging web content is a vital component of our approach. We recognise the significance of search engine optimization (SEO) and the function of content. Furthermore, our writers are masters in creating informative and interesting material that is also search engine optimised. This increases traffic to our clients' websites, which leads to more leads and conversions.

              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We place a high value on developing long-term partnerships with our clients. We realise the importance of communication and endeavour to keep our clients informed at all times, whether through regular check-ins, thorough analytics reports, or one-on-one consultations. Our digital marketing agency Toronto offers more than simply website optimization; we also offer Social Media Marketing, Email Marketing, Influencer Marketing, Video Marketing, and other services. Businesses can broaden their reach and connect with more potential clients with our assistance. We also employ advanced analytics tools to track campaign success and make data-driven decisions to improve outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LocationContact mapSrc={ottawaMapUrl} />

      <AvailableLocations title="Other Locations We Serve" />

      {/* CTA Banner */}
      <section className="bg-[#c7010c] py-[2.8rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-4">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="text-white text-base md:text-lg font-light">
            Feel Free To Connect With Us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="mailto:info@tech2globe.ca"
              className="px-8 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-[#c7010c] transition-colors duration-200"
            >
              SEND A MAIL
            </a>
            <a
              href="tel:+1-516-858-5840"
              className="px-8 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-[#c7010c] transition-colors duration-200"
            >
              GIVE A CALL
            </a>
          </div>
        </div>
      </section>

      {/* Best Digital Marketing Services Section */}
      <section className="bg-[#f0f0f0] py-[3.2rem] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Best Digital Marketing Services Ottawa, Canada
            </h2>
            <p className="text-[#c7010c] text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              Our digital marketing agency offers you a range of IT services to help your business grow!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Ottawa is a vibrant town with a broad spectrum of organisations and industries, and we understand the specific issues that enterprises in this area confront when it comes to digital marketing. We can design bespoke solutions that offer demonstrable results for our clients unlike other marketing firms Ottawa. We take pride in understanding our clients' specific requirements and providing personalised digital marketing Ottawa. Tech2Globe works with you to deliver personalised digital marketing services and a plan that is tailored to your specific business needs. Rather than simply being a strategy execution agency, we become an extension of your team, a partner who understands your market and objectives.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Unlike many other marketing firms Ottawa, we value client relationships and outcomes over glitz and glam in order to close sales and then fail to execute. We always deliver on substance rather than empty promises, and we work hard to make the most of your money so that you get the best return on investment (ROI). Our digital marketing agency prefers to assist businesses in increasing their online presence and reaching their target audience through a variety of digital channels in a timely manner. Search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content creation are all areas where our team of experts excels. We recognise that each business is unique and tailor our SEO services Ottawa to meet the specific needs and goals of each client.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      <Industries
        title="Best Digital Marketing by Industries in Ottawa, Canada"
        subtitle="From strategy to success - your digital marketing partner!"
      />

      <ClientSlider title="Whom We’ve Partnered With" clients={clientsData} />

      {/* Tools and Technologies Section */}
      <section className="bg-white py-[3.2rem] lg:py-[4.8rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Best in-class results
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiMonitor size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                Increase of 47% in average lead generation
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiTool size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                130% increase in brand mentions & engagement
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiMessageCircle size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                24/7 customer care support
              </h3>
            </div>
          </div>
        </div>
      </section>

      <ClientSlider title="List Your Brand On Popular Platforms" clients={clientsData2} />

      <Testimonials testimonials={testimonialsData} />

      <div id="contact">
        <FaqContact faqs={faqsData} />
      </div>

      <CTA />

      <Footer />
    </main>
  );
}
