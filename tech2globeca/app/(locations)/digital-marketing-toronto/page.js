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
  FiMessageCircle
} from "react-icons/fi";

import LocationContact from "@/components/LocationContact";

export const metadata = {
  title: "Digital Marketing Agency in Toronto | Tech2Globe Canada",
  description:
    "Dominate online with Tech2Globe, a top digital marketing agency in Toronto offering SEO, PPC, social media, content marketing, and lead generation services.",
  keywords: [
    "digital marketing toronto",
    "digital marketing agency toronto",
    "digital marketing company toronto",
    "seo services toronto",
    "ppc agency toronto",
    "social media marketing toronto"
  ],
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
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.webp' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.webp' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.webp' },
];

const faqsData = [
  {
    question: "How does digital marketing work in Canada?",
    answer: "Overall, while the core principles and strategies of digital marketing in Toronto are similar globally, businesses in Canada must adapt to specific market differences to succeed in a competitive environment."
  },
  {
    question: "What are the benefits of hiring a Digital Marketing Agency in Toronto?",
    answer: `
      - Local Knowledge: Agencies understand the Canadian market, consumer behavior, and competition.
      - Expertise: Teams specialize in SEO, PPC, social media, and email marketing.
      - Creativity: They bring fresh ideas to help businesses stand out.
      - Scalability: Services can be adjusted based on business needs.
    `
  },
  {
    question: "How do I choose a Digital Marketing Agency in Toronto Canada?",
    answer: `
      Consider the following factors:
      1. Expertise
      2. Case studies and testimonials
      3. Services offered
      4. Communication and collaboration
      5. Pricing
      6. Location
      7. Reputation
      8. References
    `
  },
  {
    question: "How do agencies work for small businesses?",
    answer: `
      Digital marketing agencies typically support small businesses through:
      - Strategy Development: Creating marketing strategies aligned with goals.
      - Implementation: Executing SEO, PPC, social media, and email campaigns.
      - Analytics and Reporting: Tracking performance and sharing insights.
    `
  },
  {
    question: "How long does it take to see results and improvements?",
    answer: "Digital marketing is a long-term strategy. With consistent effort and proper planning, businesses can gradually see improvements and achieve their goals over time."
  },
  {
    question: "How much do marketing agencies charge for digital marketing?",
    answer: "Typically, small businesses can expect to pay between $3000 to $5000 CAD per month for comprehensive digital marketing services, though costs vary based on services and expertise."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "W",
    name: "WILLIAM ANDERSON",
    text: "Our company has been struggling to generate leads and sales through our website, but since we started working with Tech2Globe digital marketing agency, we have seen a huge improvement. Their team helped us to create a marketing strategy that is tailored to our need."
  },
  {
    id: 2,
    letter: "L",
    name: "LIAM SMITH",
    text: "Their team is professional, knowledgeable and always willing to help. They created a customised social media marketing strategy for our business which helped us to reach a larger audience and generate more leads."
  },
  {
    id: 3,
    letter: "L",
    name: "LISA CAMPBELL",
    text: "Their strategies for SEO and social media marketing were spot on, and we've seen a significant increase in sales as a result. I highly recommend them to any business looking to improve their online marketing efforts."
  }
];

const torontoMapUrl =
  "https://www.google.com/maps?q=Toronto%2C%20ON%2C%20Canada&output=embed";

export default function DigitalMarketingToronto() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Top Digital Marketing Agency in Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Digital Marketing Toronto", href: "/digital-marketing-toronto" }
        ]}
      />

      <ClientSlider title="Awards & Recognition" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Digital Marketing Agency in Toronto, Canada
              </h2>
              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Unlocking the power of the digital world for your business. We know what it takes to make the complex simple!!
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Digital Marketing Toronto is essential for any business that wants to succeed in today's digital age. With the rise of the internet and the increasing use of smartphones, more and more consumers are turning to the web to find products and services. To stay competitive, businesses need a solid online presence that effectively reaches and converts their target audience. That's where our digital marketing agency comes in.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tech2Globe, Digital Marketing Agency Toronto, one of Canada’s most professional and reliable online marketing solutions agencies. We are a team of experts who specialise in helping businesses of all sizes achieve their online marketing goals. One of the critical elements of our approach is creating high-quality, engaging web content. We understand the importance of search engine optimization (SEO) and content's role. Further, our writers are experts in crafting informative and interesting content while also being optimised for search engines. This helps drive more traffic to our client's websites, which can lead to more leads and conversions.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In addition, our internet marketing company Toronto also focuses on building solid relationships with our clients. We understand that communication is critical, and we strive to keep our clients informed every step of the way. Whether through regular check-ins, detailed analytics reports, or one-on-one consultations, we ensure that our clients are always in the loop. Our digital marketing agency Toronto is not just limited to website optimization; we also provide services like Social Media Marketing, Email marketing, Influencer marketing, Video marketing, and so on. With our help, businesses can expand their reach and connect with more potential customers. We also use advanced analytics tools to track the performance of our campaigns and make data-driven decisions to improve results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationContact mapSrc={torontoMapUrl} />

      <AvailableLocations title="Our Digital Marketing Location" />

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
              href="tel:+1-778-382-9628"
              className="px-8 py-3 border-2 border-white text-white font-semibold tracking-wide hover:bg-white hover:text-[#c7010c] transition-colors duration-200"
            >
              GIVE A CALL
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f0f0] py-[3.2rem] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Best Digital Marketing Services In Canada
            </h2>
            <p className="text-[#c7010c] text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              Best Digital Marketing Services In Canada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                As a bustling metropolis, Toronto is home to a diverse range of businesses and industries, and we understand the unique challenges that companies in this city face regarding digital marketing. With years of experience and a deep understanding of the latest digital marketing trends and techniques, we can create customised solutions that deliver measurable results for our clients. We pride ourselves on understanding our client's unique needs and providing personalised digital marketing Toronto.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Our experienced writers and marketers have a proven track record of helping our clients increase website traffic, generate leads, and drive conversions. Our internet marketing company Toronto with a focus on strategy, research, and data-driven results, works closely with our clients to understand their unique goals and create content that resonates with their target audience. Whether you're looking to improve your search engine optimization, build brand awareness, or drive sales, our digital marketing agency Toronto has the skills and expertise to help you achieve your objectives.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <Industries
        title="Industries We Served"
        subtitle="Unleashing the full potential of your online presence!"
      />

      <ClientSlider title="Some Of The Brands We Work With" clients={clientsData} />

      {/* Tools and Technologies Section */}
      <section className="bg-white py-[3.2rem] lg:py-[4.8rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Tools And Technologies We Make Use Of
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Empowering your brand in a digital world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiMonitor size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                Increasing Website Traffic
              </h3>
            </div>

            <div className="bg-[#fafafa] py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md">
              <div className="mb-6 text-[#c7010c]">
                <FiTool size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                Advanced Analytics Tools
              </h3>
            </div>

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

      <FaqContact faqs={faqsData} />

      <CTA />

      <Footer />
    </main>
  );
}
