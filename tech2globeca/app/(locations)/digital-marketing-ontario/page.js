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

const clientsData2 = [
  { id: 1, name: 'Yelp', logo: 'images/clients/yelp.webp' },
  { id: 2, name: 'Bing', logo: 'images/clients/bing.webp' },
  { id: 3, name: 'Hotfrog', logo: 'images/clients/hotfrog.webp' },
  { id: 4, name: 'Goodfirm', logo: 'images/clients/goodfirm.webp' },
];

const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.webp' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.webp' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.webp' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.webp' },
];

const faqsData = [
  {
    question: "The Importance and Advantages of Digital Marketing in Ontario?",
    answer: "Digital Marketing Ontario is an essential aspect of any business in Ontario, Canada. It provides a cost-effective and targeted way to reach new customers and increase sales. By using the right digital marketing strategies, businesses can achieve their goals and reach their target audience effectively in the digital world."
  },
  {
    question: "Why Digital Marketing Is in Huge Demand Nowadays in Ontario?",
    answer: "Digital Marketing London Ontario has become a necessity for businesses to reach carry out their target audience, increase their online presence, and stay competitive in the market. With its cost-effectiveness, measurable results and personalization, it's no surprise that it is in high demand."
  },
  {
    question: "How does a digital marketing Agency help to grow your business?",
    answer: "A digital marketing agency can help businesses in Ontario, Canada grow by providing a comprehensive digital marketing strategy, building and managing a strong online presence, targeted advertising, measuring and analysing results, keeping up with industry trends, and providing experienced professionals. With Digital Marketing Services in Ontario, a business can increase its online presence, reach new customers, and ultimately grow its revenue."
  },
  {
    question: "How to Find The Right Digital Marketing Agency in Ontario, Canada?",
    answer: "Tech2Globe Digital Marketing Agency in Ontario always establishes a clear contract and ensures that you have a clear understanding of your goals and expectations before starting any work."
  },
  {
    question: "What's the Cost of Digital Marketing?",
    answer: "It's important to note that these are approximate costs and can vary greatly depending on the Digital Marketing Agency in Ontario, the services provided and the size of the project. Also, it's always best to get a proposal from the agency that includes a detailed breakdown of the services offered and their associated costs."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "L",
    name: "LISA",
    subname: "Business Owner",
    text: "We had the pleasure of working with Tech2Globe digital marketing London Ontario agency and it was a game changer for our business. They helped us to create a comprehensive digital marketing strategy that included SEO, PPC, and social media marketing. The results have been amazing, our website traffic has increased by 200% and our sales have doubled. We highly recommend this agency to any business looking to take their presence to the next level"
  },
  {
    id: 2,
    letter: "M",
    name: "MANDY",
    subname: "E-commerce Manager",
    text: "As a small business, we were struggling to compete online with larger companies. We decided to work with a Tech2Globe digital marketing agency, and they have helped us to level the playing field. They created a tailored strategy that included SEO, PPC and social media marketing, and the results have been impressive. Our website traffic has increased by 300% and our sales have tripled. We are so grateful for the work they have done for us"
  },
  {
    id: 3,
    letter: "A",
    name: "ALEX",
    subname: "Marketing Director",
    text: "We were in need of a digital marketing agency that could help us to increase our online presence and reach our target audience. The Tech2Globe digital marketing agency we worked with in Ontario exceeded our expectations. They helped us to create a comprehensive digital marketing strategy that included SEO, PPC, and social media marketing. As a result, our website traffic has increased by 400% and our sales have quadrupled."
  }
];

const ontarioMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.3787768560117!2d-79.67389812403666!3d43.669947963131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b39f37c48f889%3A0x6b8d43886161413!2s975%20Mid-Way%20Blvd%20%2312%2C%20Mississauga%2C%20ON%20L5T%202C6%2C%20Canada!5e0!3m2!1sen!2sca!4v1719600000000!5m2!1sen!2sca";

export default function DigitalMarketingOntario() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Digital Marketing Ontario", href: "/digital-marketing-ontario" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Digital Marketing Ontario"
        breadcrumbs={breadcrumbs}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Digital Marketing Agency in Ontario
              </h2>
              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Get More Leads and Sales with Our Result-Driven Digital Marketing Campaigns!
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Tech2Globe is a full-service Digital Marketing Agency Ontario that has won several awards. We provide organisations with unique solutions that target your audience in the most efficient ways imaginable. At Tech2Globe, we&apos;ve become specialists at nano-targeting our digital marketing efforts to produce unparalleled and unprecedented outcomes to our clients. Social media is currently one of the most effective marketing platforms, allowing you to engage with your target audience in real time. The ability to build and manage these channels is a barrier for some “do it yourself” businesses. You can rely on our devoted digital marketing London Ontario expert staff to build and deploy plans that are in accordance with your company&apos;s vision, financial goals, and social engagement aspirations as an extension of your organisation.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tech2Globe plans and handles all of your campaign&apos;s advertising, making it simple for you to see genuine results. We manage the complexities of online advertising and provide social media management for platforms like Facebook, Instagram, Linkedln, Twitter, Google My Business, and many others. You may be confident that when the next social media networking platform takes over the world. Our professionals are well-versed on how to utilise and leverage such platforms. We will assist you in advancing your company&apos;s digital marketing and social media strategy. Our solutions are tailored to your specific requirements and provide peace of mind by maintaining these channels so that you can devote your time and energy to other elements of your organisation. We as the top SEO Company Ontario are suitable for businesses of all sizes. Our solutions are intended to improve your ability to communicate with your target audience. Speak with one of our consultants today to build the ideal solution for your needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LocationContact mapSrc={ontarioMapUrl} />

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
              SEND AN EMAIL
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
              Best Digital Marketing Services Ontario, Canada
            </h2>
            <p className="text-[#c7010c] text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              We, as the top digital marketing agency, offer you a range of IT services to help your business grow!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Working with a digital marketing agency has the advantage of having the expertise and experience to create a comprehensive and effective digital marketing strategy. They understand how to use the most up-to-date tools and techniques to reach the right audience, and they can assist businesses in determining the best channels to use for their campaigns. Social media platforms, for example, are excellent for increasing brand awareness and engaging with customers, whereas Digital Marketing Ontario services and pay-per-click (PPC) advertising are more effective for driving traffic.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                A digital marketing agency can also assist businesses in measuring and analysing their marketing campaigns. They can monitor the performance of various campaigns and make adjustments as needed by using analytics and tracking tools. This enables businesses to optimise their campaigns for better results and ensure that they are receiving the best possible results. Furthermore, Digital Marketing Ontario can assist businesses in saving time and resources. Running a digital marketing campaign takes a significant amount of time, effort, and knowledge.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                As more businesses recognise the value of having a strong online presence, digital marketing agencies are becoming increasingly popular. These firms specialise in developing and implementing digital marketing campaigns that assist businesses in reaching their target audiences and meeting their marketing objectives.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Overall, our digital marketing agency can be a valuable resource for businesses looking to establish an online presence and reach their target audience. We can assist businesses in developing and implementing effective digital strategies by leveraging their expertise, experience, and resources.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <Industries
        title="Best Digital Marketing by Industries in Ontario, Canada"
        subtitle="With Our Comprehensive Digital Marketing Packages, You Can Accelerate To Your Company's Full Potential!"
      />

      <ClientSlider title="Whom We’ve Partnered With" clients={clientsData} />

      {/* Tools and Technologies Section */}
      <section className="bg-white py-[3.2rem] lg:py-[4.8rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Tools And Technologies We Make Use Of
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-[#c7010c] text-lg sm:text-xl font-medium">
              Empowering your brand in a digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiMonitor size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                Increasing Website Traffic
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiTool size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                Advanced Analytics Tools
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiMessageCircle size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                24/7 Customer Support
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
