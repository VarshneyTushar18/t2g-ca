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
  title: "Digital Marketing Company in Mississauga | Tech2Globe Canada",
  description:
    "Top Digital Marketing Company in Mississauga to grow your business online. ✔ROI Driven Strategy ✔SEO, PPC & Social Media ✔Free Consultation ✔Contact Now",
  keywords: [
    "digital marketing mississauga",
    "digital marketing company mississauga",
    "seo services mississauga",
    "ppc agency mississauga",
    "social media marketing mississauga"
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
    question: "What is Digital Marketing & How does it work in Mississauga, Canada?",
    answer: (
      <>
        Digital marketing Mississauga is the use of digital channels, such as the internet, social media, search engines, and mobile devices, to promote a product or service. It's a broad term that encompasses a variety of different strategies, such as search engine optimization (SEO), social media marketing, email marketing, content marketing, and more.
        <br /><br />
        In Mississauga, Canada, digital marketing is used by businesses of all sizes, from small local businesses to large corporations, to reach their target audience and promote their products or services.
      </>
    )
  },
  {
    question: "What's the right way to improve your Digital Marketing in Mississauga, Canada?",
    answer: (
      <>
        Some general best practices for improving your digital marketing Mississauga include:
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>Conducting comprehensive market research</li>
          <li>Developing a comprehensive digital marketing strategy</li>
          <li>Optimising your website</li>
          <li>Building a strong online presence</li>
          <li>Investing in paid advertising</li>
          <li>Measuring and analysing your results</li>
          <li>Use Local SEO techniques</li>
          <li>Partnering with a reputable digital marketing agency</li>
        </ul>
      </>
    )
  },
  {
    question: "What is the most effective strategy for Digital Marketing Mississauga?",
    answer: (
      <>
        To improve your digital marketing in Mississauga, Canada, you should consider the following strategies:
        <ol className="list-decimal pl-5 mt-3 space-y-1">
          <li>Understand your target audience</li>
          <li>Develop a comprehensive digital marketing plan</li>
          <li>Optimise your website</li>
          <li>Leverage social media</li>
          <li>Measure and analyse your results</li>
          <li>Work with the best digital marketing agency in Mississauga</li>
          <li>Stay up-to-date with the latest trends and best practices in digital marketing</li>
        </ol>
        <br />
        Consider hiring a reputable partner for your digital marketing services in Mississauga that can help you to develop and implement effective digital marketing campaigns.
      </>
    )
  },
  {
    question: "How Long Does It Take to Start Seeing Results and Improvements?",
    answer: (
      <>
        The time it takes to start seeing results and improvements from digital marketing in Mississauga can vary depending on factors such as the type of campaign, the target audience, the level of competition, and the available resources.
        <br /><br />
        Some tactics, such as pay-per-click (PPC) advertising, can produce results quickly, while others like search engine optimization (SEO) may take longer to show significant improvements.
      </>
    )
  },
  {
    question: "How much does a Marketing agency charge for Digital Marketing?",
    answer: (
      <>
        The cost of hiring a partner for digital marketing services in Mississauga can vary widely depending on the specific services offered and the size and needs of the business.
        <br /><br />
        It’s best to get a custom quote from a digital marketing company in Mississauga after discussing your business goals and requirements.
      </>
    )
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "L",
    name: "LISA",
    text: "We have been working with Tech2Globe for the past year and have seen a significant increase in our search engine rankings and website traffic. Their team of experts provided us with a comprehensive SEO strategy and executed it with great attention to detail. Their reporting and communication are top-notch, and we highly recommend them to any business looking to improve their online presence."
  },
  {
    id: 2,
    letter: "M",
    name: "MANDY",
    text: "We struggled with getting our website to rank on the first page of Google for our target keywords. But since working with Tech2Globe, we have seen a dramatic improvement in our search engine rankings. They were able to identify and resolve technical issues on our website that were hindering our SEO efforts. Their team is knowledgeable, responsive, and a pleasure to work with."
  },
  {
    id: 3,
    letter: "A",
    name: "ALEX",
    text: "Tech2Globe helped us take our online business to the next level. Their team provided us with a customised SEO strategy that was tailored to our specific needs. Their efforts have resulted in a significant increase in our organic traffic and revenue. We are very satisfied with their work and highly recommend them to any business looking to improve their SEO."
  }
];

const mississaugaMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3921313875917!2d-79.67998492344486!3d43.6608138519379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f1968fc536d%3A0x4385f1b8f0154b7b!2s975%20Mid-Way%20Blvd%20%2312%2C%20Mississauga%2C%20ON%20L5T%202C6%2C%20Canada!5e0!3m2!1sen!2sin!4v1777450525637!5m2!1sen!2sin";

export default function DigitalMarketingMississauga() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Digital Marketing Mississauga"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Digital Marketing Mississauga", href: "/digital-marketing-mississauga" }
        ]}
      />

      <ClientSlider title="The Leader in Digital Marketing" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 uppercase">
                Digital Marketing Company in Mississauga, Canada
              </h2>
              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                We have the experience to produce results and help you reach your target audience, you can rely on us to improve your web visibility and increase conversions!
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Tech2Globe is a digital marketing agency based in Mississauga, Canada with over 14 years of experience in the industry. We specialise in providing comprehensive online marketing solutions to businesses of all sizes.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our internet marketing company Mississauga has a team of experienced professionals who are dedicated to helping businesses achieve their online marketing goals. They work closely with clients to understand their unique needs and develop customised strategies to drive traffic, increase conversions, and ultimately boost revenue. With a track record of delivering measurable results, we have earned a reputation as a trusted partner for businesses looking to expand their online presence. The Tech2Globe digital marketing team has more than a decade of profitable experience developing internet firms into household names. Our full-service growth digital marketing agency Mississauga has been entirely remote from its inception, which means that we hire the greatest talent in the field — regardless of location — to help your company develop. In addition to our core digital marketing services in Mississauga, we also provide a wide range of other services such as website design, analytics and conversion rate optimization, PPC management, and more to provide a comprehensive solution to our clients' needs. Tech2Globe realises the value of developing strong relationships with our clients. We collaborate closely with you to understand your business and your objectives, and we are dedicated to giving the best service and support possible.
              </p>
            </div>

          </div>
        </div>
      </section>

      <LocationContact mapSrc={mississaugaMapUrl} />

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



      <section className="bg-[#f0f0f0] py-[3.2rem] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Best Digital Marketing Services Mississauga, Canada
            </h2>
            <p className="text-[#c7010c] text-lg font-medium leading-relaxed max-w-3xl mx-auto">
              Connecting your brand with your audience, online and offline!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Digital marketing Mississauga is the backbone of a successful business in today's digital age. A strong online presence is essential for any company looking to attract new customers and grow their business. A digital marketing agency can help you achieve this by providing a range of services, including search engine optimization (SEO), social media marketing, pay-per-click advertising, and content marketing. As a leading digital marketing agency in Canada, we understand the unique challenges and opportunities that businesses in Canada face. Whether you're a small startup or a large corporation, we can help you achieve your digital marketing goals.
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="bg-white p-8 flex flex-col justify-between">
              <p className="text-[#444444] text-[15px] leading-[1.8]">
                Our digital marketing agency Mississauga has specialised knowledge and experience in creating and executing effective marketing campaigns across various digital channels, such as search engine optimization (SEO), social media marketing, and email marketing. We stay up-to-date on the latest trends and best practices, and can help your business stay ahead of the competition. Outsourcing to our internet marketing company Mississauga allows your business to focus on your other competencies while we handle the core areas with our solutions. This frees up valuable time and resources for your business to invest in other areas, such as product development or customer service. We allow you to access the
              </p>
              <div className="w-16 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <Industries
        title="Best Digital Marketing by Industries in Mississauga, Canada"
        subtitle=""
      />

      <ClientSlider title="Some Of The Brands We Work With" clients={clientsData} />

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
                24/7 customer support
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