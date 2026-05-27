import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
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
} from "react-icons/fi";
import { FaLink, FaSearch } from "react-icons/fa";
import "./custom.css";


export const metadata = {
  title: "Digital Marketing Agency in Toronto | Boost Online Presence",
  description:
    "Digital Marketing Agency in Toronto. Results-driven ROI marketing, complimentary audits, customized plans, and 11,000+ successful projects.",

  keywords: ["Digital Marketing Agency in Toronto"],

  alternates: {
    canonical: "https://tech2globe.ca/digital-marketing-agency",
  },

  openGraph: {
    title: "Digital Marketing Agency in Toronto | Boost Online Presence",
    description:
      "Results-driven ROI marketing, complimentary audits, customized plans, and 11,000+ successful projects.",
    url: "https://tech2globe.ca/digital-marketing-agency",
    siteName: "Tech2Globe Canada: Multi-Function IT Outsourcing Services",
    locale: "en_US",
    type: "website",
  },
};

const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.png' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.png' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.png' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.png' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.png' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.png' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.png' },
];


const portfolioItems = [
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
  {
    title: "QUIQUP",
    image: "/images/portfolio/QUIQUP.png",
    website: "https://www.quiqup.com/",
  },
];

const faqsData = [
  {
    question: "Digital Marketing: What Is It?",
    answer: "Digital marketing is used for advertising a website to sell goods and services online and establish a brand. We are a well-known digital marketing agency Ottawa; we can handle all your digital needs."
  },
  {
    question: "How are you the greatest choice for our needs in digital marketing?",
    answer: "For 14 years in the online marketing industry, Tech2Globe, an online marketing agency, has earned a solid reputation as a digital marketing agency in Canada. Because we prioritize serving our client's interests, we have earned the trust of our customers. Before beginning any Digital Marketing project, we thoroughly comprehend the client's business."
  },
  {
    question: "Is your digital marketing team capable of handling challenges?",
    answer: "Tech2Globe has one of the most knowledgeable teams in the digital marketing agency Ottawa. The collective experience of our digital marketing team spans several years. They have in-depth knowledge of every facet of digital marketing. Our team of professional digital marketers Canada ensures that your business and product receive the greatest online representation possible."
  },
  {
    question: "How will you help with lead generation?",
    answer: "Many businesses want leads so that their sales team may follow up with prospects. This is especially true for B2B enterprises, companies offering high-priced goods, organizations whose product sales strategy includes a demonstration, and offline businesses. As the best digital marketing agency Ottawa, we've effectively generated speedy leads for all of these businesses. We are able to connect with potential clients of these companies and then obtain the necessary information about them."
  },
  {
    question: "Is digital marketing your USP?",
    answer: "You've probably already concluded from the facts provided above that we are competent in the area of digital marketing. As an online marketing agency, we are quite skilled at these skills thanks to our extensively experienced experts in the field over the years."
  }
];

const testimonialsData = [
  {
    id: 1,
    letter: "W",
    name: "WILLIAM ANDERSON",
    text: "I have been trying to get a digital marketing service for my small business for a long time. I came across this website and the services on it four months ago. I decided to give them a try, & I'm delighted"
  },
  {
    id: 2,
    letter: "L",
    name: "LIAM SMITH",
    text: "The owner of the company is amiable and helpful. The price for the products and services is reasonable. This is the best digital marketing service I have ever experienced."
  },
  {
    id: 3,
    letter: "L",
    name: "LISA CAMPBELL",
    text: "I was looking for a company that could help me put up some social media posts and do several other digital marketing tasks. I came across the services offered by Tech2Globe and decided to give them a try."
  }
];

const servicesData = [
  {
    id: 1,
    title: "SEO",
    description:
      "We will assist you in locating and resolving any issues that are preventing your website from achieving high rankings with the help of our SEO services. From content marketing to link development, we provide a variety of digital marketing services in Canada to help you reach your target audience. Our professionals ensure your website ranks higher in search engines by employing the latest technology and marketing techniques to help you attract more clients and expand your business.",
    icon: <FiSearch size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "PPC",
    description:
      "We can manage all sorts of PPC campaigns, including Google Ads, Facebook Ads, Instagram Ads, Dynamic Remarketing Ads, and so on, courtesy of our team of Google Adwords Certified Professionals. Because we are one of Canada's leading PPC management service providers, we are qualified to manage all types of PPC campaigns. As a digital marketing agency Vancouver, we can manage PPC ads across all search engines and social media platforms.",
    icon: <FiTarget size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Content",
    description:
      "In today's competitive internet landscape, you must stand out from the crowd to be noticed. And Tech2Globe, the best digital marketing agency Toronto, can assist you with this. We develop engaging content that resonates with your target audience and provides them with the information they need to decide whether or not to employ your services. You can increase the exposure of your website and inspire more visitors to make purchases by providing your target market with the information they seek.",
    icon: <FiEdit3 size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "SMM",
    description:
      "As a leading digital marketing agency Toronto, we offer a variety of social media management services to assist customers with this, including creating and implementing social media campaigns, managing online reputation, and measuring the results of their social media activities. Our approach is simple but effective: we combine keyword research, social media scheduling, and optimization strategies to ensure that your messages are seen by the right people and reach their intended audience.",
    icon: <FiUsers size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Guest Posting",
    description:
      "We assess a site's performance in a variety of ways, including its high domain authority, extended domain life, organic visitor volume, indexed pages, and traffic location. In addition to statistics, we look for websites that have an authentic feel and a high-quality professional design. Our digital marketing services Canada professional team keeps your brand at the forefront at every stage, from content ideas and ideation to design and copywriting that converts.",
    icon: <FiGlobe size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Link Building",
    description:
      "We help boost your domain authority and website traffic by providing results-driven white hat link-building services trusted by innovative SEO agencies and in-house marketers. Some essential ideas guiding our strategy are no PBNs or link farms, in-content white hat backlinks, niche-relevant sites with high authority, and shortlists after testing against 10+ link metrics. As the top digital marketing agency Toronto, we can attest to the quality of our services and our unwavering commitment to supporting businesses in growth.",
    icon: <FiLink size={32} color="#ffffff" />
  },
  {
    id: 7,
    title: "Local SEO",
    description:
      "Tech2Globe, a digital marketing agency Vancouver, takes pride in employing in-house SEO specialists in our digital marketing team. No one can expressly guarantee search engine rankings using local SEO due to the variables influencing search results and the changing nature of search engines. Still, we'll make sure that you receive maximum positive results. To help you rank higher on local search results over the long term, we make sure to use the most morally sound best practices.",
    icon: <FiMapPin size={32} color="#ffffff" />
  },
  {
    id: 8,
    title: "Influencer Marketing",
    description:
      "Tech2Globe allows you to plan and monitor each of your influencer marketing projects. We provide the information and resources you need to make sound decisions. We are a digital marketing agency in Canada with a distinct business model that enables data-driven influencer marketing and makes it simple for anyone to implement efficient influencer marketing campaigns. We assign a team of campaign managers and associates to every project, regardless of budget.",
    icon: <FiStar size={32} color="#ffffff" />
  },
  {
    id: 9,
    title: "Online Reputation",
    description:
      "Everyone can experience anything terrible online, which shouldn't define you or keep you from moving on with your life. For 14 consecutive years, the award-winning reputation management and digital marketing agency in Canada, Tech2Globe, provided the finest outcomes and value. This is accomplished by eliminating negative search results, disseminating encouraging content online, and constantly monitoring your online exposure.",
    icon: <FiShield size={32} color="#ffffff" />
  }
];

export default function DigitalMarketingAgency() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Dominate Online With Our Top Digital Marketing Agency In Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Digital Marketing Agency", href: "/digital-marketing-agency" }
        ]}
      />

      <ClientSlider title="The leader in Digital Marketing" clients={clientsData3} />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Dominate Online with Our Top Digital Marketing Agency in Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                Work with us to build your brand identity and smooth channel execution, and watch your sales graph reach heights.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Tech2Globe, a digital marketing agency Toronto, has been providing a wide range of services to businesses of all sizes across Canada and other countries for over 14 years. We offer robust marketing programs to help your company reach its target market. Tech2Globe's digital marketing services include website designing, web development, social media management, search engine optimization (SEO), and lead generation. Our team consists of a skilled group of industry specialists committed to providing high-quality digital marketing services Canada at reasonable prices.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Each of our campaigns is designed with the client's requirements in mind, and we constantly update them to reflect the most recent trends and advancements in the digital marketing industry. Because we have vast experience working with small to large-scale businesses, you can be confident that your campaign will be specifically tailored to your business objectives.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                If you're looking for a capable digital marketing agency in Canada that can help you achieve your goals, then you have stumbled upon the right agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AvailableLocations title="Our Digital Marketing Location" subtitle="" />

      <section className="py-16 bg-[#f0f0f0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            How Does Our Online Marketing Agency Help<br />
            Businesses Drive Growth?
          </h2>
          <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
          <p className="text-gray-600 mb-4 leading-relaxed text-center">
            Would you like a comprehensive, multichannel digital campaign that yields results quickly? Yes, we can make that happen for you. We assign you a team of experienced professionals that will take your business to new heights.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed text-center">
            Develop multichannel campaigns that effectively capture the essence and voice of your company by partnering with our creative team. We as the best digital marketing agency Toronto help you create campaigns with the right strategies for your products or services and work with the brand identity of your business. Web design, funnel development, and branding are areas where our professionals thrive. Using our multi channel advertising, you can reach a larger pool of potential customers. Let us, the best digital marketing agency Toronto, create a one-of-a-kind strategy that will quickly fill your sales pipeline or e-commerce checkout with leads from various sources. Your capacity to reach a broader audience is significantly improved via multichannel. Reach a large number of people with a message that is tailored according to your company and product. Furthermore, you can track every aspect of your campaign at any given point in time. We are a highly professional digital marketing agency Vancouver that can help you save enormous amounts of time, energy, and resources (and money, too). We are by far the quickest path to development and success. Leave the marketing to those who are good, honest, and excellent at what they do. Finally, it's easier than ever to manage your company as it grows.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              What We Serve You?
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>
              From content marketing to link development, we provide a variety of digital marketing<br /> services Canada to help you reach your target audience.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#f9f9f9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div>
              {/* Placeholder for the team image shown in the screenshot */}
              <img
                src="/images/services/homepage-option17-banner-bg2.png"
                alt="Why Choose Us"
                className="rounded-lg overflow-hidden shadow-lg img-fluid"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Why Choose Us As Your Digital Marketing Agency?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are young, imaginative, passionate and eager to make bold decisions that will benefit our clients in the long run.<br />

              We are not only an advertising entity but a very creative and credible name for over 14 years. We are left in a universe full of possibilities after merely liberating ourselves from the constraints of these predetermined definitions. Our imaginative selves are freed, and this enables us to take on difficulties without worrying about constrai
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col  text-left">
                <FiCheckCircle size={48} className="text-[#c7010c] mb-4" />
                <h4 className="font-semibold text-lg text-gray-800">Served over clients</h4>
                <h2>5500+</h2>
              </div>
              <div className="flex flex-col  text-left">
                <FiThumbsUp size={48} className="text-[#c7010c] mb-4" />
                <h4 className="font-semibold text-lg text-gray-800">Client Retention</h4>
                <h2 >95%</h2>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-[3.2rem] lg:py-[4.8rem] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Industries We Served
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="text-gray-600">With over 14 years of proven results in multiple industries, <br />we’ve been successfully the top name in digital marketing Canada!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 relative">
            {/* Healthcare */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="mb-6 text-[#c7010c] bg-white rounded-full p-4 shadow-sm border border-gray-100 flex items-center justify-center w-28 h-28">
                <FiActivity size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">
                Healthcare
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Tech2Globe is a one-stop shop for anything connected to healthcare marketing. Because of our years of expertise, dealing with practically every sort of company in this market. We are particularly well-suited to assist you in creating your brand and reaching your goals. We don't only offer digital marketing services Canada; rather, it's our team's undivided concentration on delivering correct outcomes, which can only be accomplished by working with people who actually care about creating yours as well!
              </p>
            </div>

            {/* Ecommerce */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="mb-6 text-[#c7010c] bg-white rounded-full p-4 shadow-sm border border-gray-100 flex items-center justify-center w-28 h-28">
                <FiShoppingCart size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">
                Ecommerce
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Customer behaviour, technological integration, and competitive pressure affect how effectively your online store succeeds. You can boost customer loyalty and outperform the competition by providing exceptional digital marketing services Canada's user experiences across all touchpoints where customers are likely to connect with you. From SEO to CRO, PPC to Social Media, email to content marketing, influencer marketing to maintaining your online reputation, and attribution and measurement to any other topic you can think of, we've covered it all.
              </p>
            </div>

            {/* Food And Restaurant */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="mb-6 text-[#c7010c] bg-white rounded-full p-4 shadow-sm border border-gray-100 flex items-center justify-center w-28 h-28">
                <FiCoffee size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">
                Food And Restaurant
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Tech2Globe, the leading digital marketing agency Ottawa, can offer all of the elements your food website requires, such as search engine optimization, traffic growth, client relationship building, and more. This will allow more customers to connect with the website. Tech2Globe can help you create a customer-focused, keyword-rich, and search-engine-optimized website, among other things, thanks to advancements in communication and technology.
              </p>
            </div>

            {/* Real Estate */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="mb-6 text-[#c7010c] bg-white rounded-full p-4 shadow-sm border border-gray-100 flex items-center justify-center w-28 h-28">
                <FiHome size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">
                Real Estate
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our results-driven online marketing agency specializes in lead creation for both B2B and B2C companies. We help our clients gain more customers through search while also being recognized for our efforts. Our team has assisted over 400 real estate clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-[#f0f0f0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
              Our Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work speaks louder than what you read about us! Tech2Globe, digital marketing agency Toronto, assists you in promoting your business globally by employing the greatest marketing strategies.
            </p>
          </div>

          <div className="portfolioGrid">

            {/* Card 1 */}
            <div className="gridItem">
              <figure>
                <div className="portfolioImg">
                  <Image
                    src="/images/services/QUIQUP.png"
                    alt="QUIQUP"
                    width={500}
                    height={300}
                    className="image"
                  />

                  <div className="portfolioIcon">
                    <a
                      href="https://www.quiqup.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>

                    <a
                      href="/images/portfolio/QUIQUP.png"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSearch />
                    </a>
                  </div>
                </div>

                <figcaption>
                  <span>QUIQUP</span>
                </figcaption>
              </figure>
            </div>

            {/* Card 2 */}
            <div className="gridItem">
              <figure>
                <div className="portfolioImg">
                  <Image
                    src="/images/services/sports456.jpg"
                    alt="Sports456"
                    width={500}
                    height={300}
                    className="image"
                  />

                  <div className="portfolioIcon">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>

                    <a
                      href="/images/services/sports456.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSearch />
                    </a>
                  </div>
                </div>

                <figcaption>
                  <span>Sports456</span>
                </figcaption>
              </figure>
            </div>

            {/* Card 3 */}
            <div className="gridItem">
              <figure>
                <div className="portfolioImg">
                  <Image
                    src="/images/services/shopaloo.jpg"
                    alt="Shopaloo"
                    width={500}
                    height={300}
                    className="image"
                  />

                  <div className="portfolioIcon">
                    <a
                      href="https://shopaloo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>

                    <a
                      href="/images/services/QUIQUP.png"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSearch />
                    </a>
                  </div>
                </div>

                <figcaption>
                  <span>Shopaloo</span>
                </figcaption>
              </figure>
            </div>

            {/* Card 4 */}
            <div className="gridItem">
              <figure>
                <div className="portfolioImg">
                  <Image
                    src="/images/services/plazasurfsports.jpg"
                    alt="plazasurfsports"
                    width={500}
                    height={300}
                    className="image"
                  />

                  <div className="portfolioIcon">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink />
                    </a>

                    <a
                      href="/images/services/plazasurfsports.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSearch />
                    </a>
                  </div>
                </div>

                <figcaption>
                  <span>PLAZA SURF SPORTS</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonialsData} />

      <FaqContact faqs={faqsData} />

      <Footer />
    </main>
  );
}
