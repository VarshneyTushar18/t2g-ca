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
  title: "Digital Marketing Agency in Calgary | Tech2Globe Canada",
  description:
    "Best Digital Marketing Agency in Calgary to Boost Your Business Online. ✔ROI Driven Marketing ✔Free Audit & Plans ✔7000+ Successful Projects ✔Contact Now",
  keywords: [
    "digital marketing agency calgary",
    "seo services calgary",
    "ppc management calgary",
    "social media marketing calgary",
    "digital marketing company calgary"
  ],
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
    question: "What Is Digital Marketing and What Does It Mean to Our Business in Calgary, Canada?",
    answer: "Digital marketing is the process of promoting a business or brand online through various digital channels. Digital marketing Calgary provides a cost-effective, measurable, and targeted way to reach audiences and grow a business. For businesses in Calgary, investing in digital marketing services can help them stand out in a competitive market and reach new customers."
  },
  {
    question: "How Digital Marketing Can Increase Our Business in Calgary, Canada?",
    answer: "Digital marketing Calgary can help increase a business in Calgary, Canada in several ways: Increased online visibility, cost-effective marketing, targeted marketing, measurable results, increased brand awareness, greater engagement with customers, and better customer insights."
  },
  {
    question: "How a Calgary Digital Marketing Agency Can Help Your Business to Grow Fast?",
    answer: "A digital marketing agency can help your business grow fast in several ways: developing a comprehensive digital marketing strategy, targeting specific audiences based on demographics, location, and interests, and adapting to the market using real-time data and analytics to stay ahead of the competition."
  },
  {
    question: "How To Choose The Best Digital Marketing Agency For Your Business in Calgary, Canada?",
    answer: "Choosing the best digital marketing agency involves understanding your needs, researching the agency's reputation, checking their portfolio, asking for references, communicating effectively, considering their experience, and ensuring they provide measurable results."
  },
  {
    question: "How Long Does Digital Marketing Take To Start Working?",
    answer: "The time it takes for digital marketing to start working depends on the strategy, industry, and available resources. With the right approach and persistence, digital marketing can deliver strong long-term benefits for your business."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "L",
    name: "LISA",
    subname: "",
    text: "Our company has been struggling to generate leads and sales through our website, but since we started working with Tech2Globe digital marketing agency, we have seen a huge improvement. Their team helped us to create a marketing strategy that is tailored to our need"
  },
  {
    id: 2,
    letter: "M",
    name: "MANDY",
    subname: "",
    text: "Their team is professional, knowledgeable and always willing to help. They created a customised social media marketing strategy for our business which helped us to reach a larger audience and generate more leads."
  },
  {
    id: 3,
    letter: "A",
    name: "ALEX",
    subname: "",
    text: "Their strategies for SEO and social media marketing were spot on, and we've seen a significant increase in sales as a result. I highly recommend them to any business looking to improve their online marketing efforts."
  }
];

const calgaryMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160533.15340625646!2d-114.23789053896593!3d51.02766324976778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170030f0350e5%3A0x6b6c0e8633320c24!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin";

export default function DigitalMarketingCalgary() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Digital Marketing Calgary", href: "/digital-marketing-calgary" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Digital Marketing Calgary"
        breadcrumbs={breadcrumbs}
      />

      <ClientSlider title="The Leader in Digital Marketing" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 uppercase">
                Best Digital Marketing Agency in Calgary, Canada
              </h2>
              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Unlock the full potential of your business with our expert strategy, analysis and proven approach
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Empowering your brand, in a digital world because we think beyond the click that helps generate maximum conversions!
                Tech2Globe is a dynamic, highly experienced, full-service digital marketing agency Calgary that does not use deception to acquire new clients but apply genuine strategies. We rely on our own search engine optimization (SEO) and marketing skills to draw new clients to our website. We are not a static organisation and also do not confine ourselves to particular industries. Tech2Globe has the experience and competence to create a bespoke website and use a variety of digital marketing services to help any sized business in any sector. While many other companies take a one-size-fits-all approach, delivering you the same strategy and cookie-cutter website as your neighbour down the street.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As a digital marketing company Calgary, Tech2Globe collaborates with you to provide personalised online marketing services and a plan that meets your specific business requirements. Rather than simply being an agency that executes strategy blindly, we become an extension of your team, a partner who understands your market and goals. We, unlike many other agencies, focus on client connections and results rather than glitter and glam to close sales and then fail to execute. We always deliver on substance, not empty promises, and we make every effort to maximise your money so you get the best return on investment (ROI).
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Digital marketing Calgary enables businesses of all sizes to market their brand 24 hours a day, seven days a week at a reasonable cost. Our digital marketing agency Calgary can assist you increase your niche market reach to offer goods and services to your target clients regardless of time differences or geography, from startups to medium-sized enterprises to multi-location businesses. Hiring an online marketing agency is one of the most efficient ways to reach out to prospects while keeping current customers satisfied. Customers will always find you if your company has a strong digital presence.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LocationContact mapSrc={calgaryMapUrl} />

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
              Best Digital Marketing Agency in Calgary, Canada
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Calgary is a bustling city that is home to a diverse range of businesses, from small startups to large corporations. With the rise of digital technologies, businesses in Calgary are increasingly turning to digital marketing services to help them reach and engage with their target audiences. Digital marketing services in Calgary include a variety of tactics that can be used to promote a business or brand online, such as SEO, PPC advertising, social media marketing, email marketing, and content marketing.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                You get the ability to target specific audiences when you opt to work with our internet marketing services Calgary. Businesses can target specific audiences based on factors such as demographics, location, and interests. This allows for more effective and efficient marketing campaigns. Our services provide measurable results, which allows businesses to track their ROI and make data-driven decisions. They can see which campaigns are working, and which are not, and make adjustments accordingly.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Digital marketing company Calgary with services such as SEO and PPC advertising can help businesses increase their visibility on search engines and other online platforms. This can lead to more website traffic, leads, and ultimately sales. Traditional forms of advertising can be expensive, but digital marketing services are often more cost-effective. PPC advertising, for example, enables businesses to only pay when someone clicks on their ad.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Digital marketing services provide real-time data and analytics which allows businesses to track their progress and make adjustments on the fly. This allows businesses to respond to changes in the market quickly and stay ahead of the competition. In today's digital age, any business that wants to succeed must have a strong online presence. Local SEO Services in Calgary provide a effective & targeted way to reach audiences.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

          </div>
        </div>
      </section>

      <Industries
        title="Best Digital Marketing by Industries in Calgary, Canada"
        subtitle="Marketing for the modern age because we think outside the pixel!"
      />

      <ClientSlider title="Some Of The Brands We Work With" clients={clientsData} />

      {/* Highlights Section */}
      <section className="bg-[#f7f7f7] py-[3.2rem] lg:py-[4.8rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Highlights
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md border border-gray-100">
              <div className="mb-6 text-[#c7010c]">
                <FiMonitor size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                10+ Years Of Experience In The Industry
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md border border-gray-100">
              <div className="mb-6 text-[#c7010c]">
                <FiTool size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                7000+ Successful Marketing Campaigns
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white py-8 px-6 flex flex-col items-center text-center transition-all hover:shadow-md border border-gray-100">
              <div className="mb-6 text-[#c7010c]">
                <FiMessageCircle size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#222222]">
                100% Transparency & Reporting
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
