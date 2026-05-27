import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Link from "next/link";
import { FiBookOpen, FiGift, FiMonitor, FiSmartphone, FiPenTool, FiShoppingBag, FiDatabase, FiSettings } from 'react-icons/fi';
import { FaHandshake, FaUserTie, FaTools } from 'react-icons/fa';

export const metadata = {
  title: "About Us - Tech2Globe Canada",
  description: "Learn more about Tech2Globe Canada, our mission, vision, and the services we offer to help your business grow.",
};

export default function AboutUs() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Header />
      <PageHeader title="About Us" breadcrumbs={breadcrumbs} />

      {/* Section 1: About Tech2Globe Canada */}
      <section className="py-[3.2rem] lg:py-[4.8rem] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-100">
              <img
                src="/images/about-us-slider.jpg"
                alt="About Tech2Globe Canada"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 inline-block relative pb-2">
                  About <span className="border-b-4 border-[#c7010c]">Tech2Globe Canada</span>
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed mb-8">
                <p>
                  Tech2Globe is an award-winning agency recognized by Clutch and Good Firms for many of its services. We help businesses create transformational digital experiences by offering fully developed online marketing services from scratch.
                </p>
                <p>
                  We offer everything that the industry has necessitated for a business to sustain and evolve in contemporary times, aka the digitized world. From website development, branding, product listing, and marketing, we offer it all.
                </p>
                <p>
                  Established in 2014 with our headquarters in the USA, we have now extended our branches to Canada to offer enterprise solutions to businesses regardless of their sizes.
                </p>
                <p>
                  Mutually beneficial business partnerships have always been at the top of our priorities list, which is why we have developed long-term relationships with our clientele beyond any boundaries. And will surely help your business in the long run as well, irrespective of its size. Sounds promising?
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-block bg-[#333333] hover:bg-[#c7010c] text-white font-semibold py-3.5 px-8 rounded transition-colors duration-300 text-sm tracking-wide"
              >
                Get a quote today!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="py-[3.2rem] lg:py-[4.8rem] bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-0 relative">
            {/* Mission */}
            <div className="flex-1 md:pr-12 lg:pr-20 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-6 text-[#c7010c] border border-gray-100">
                <FiBookOpen size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-md">
                To leverage the spectrum of digitization & online marketing to help startups, SMEs, & large organizations with the expertise we have gained throughout these years.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-[#c7010c] opacity-20 -translate-x-1/2"></div>

            {/* Vision */}
            <div className="flex-1 md:pl-12 lg:pl-20 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-6 text-[#c7010c] border border-gray-100">
                <FiGift size={36} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed max-w-md">
                To be the foremost company in the industry with the quickest turnaround time and diverse clientele base with superior thinking in ideation of the services we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Recognition */}
      <section className="py-[3.2rem] lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 inline-block relative pb-2 border-b-4 border-[#c7010c]">
              Recognition
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              't2g-clutch.png',
              't2g-behance.png',
              't2g-themenifest.png',
              't2g-your-story.png',
              't2g-goodfirms.png',
              't2g-researchgate.png'
            ].map((logo, index) => (
              <div key={index} className="border border-gray-200 p-8 flex items-center justify-center bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 rounded">
                <img src={`/images/clients/${logo}`} alt="Recognition Logo" className="max-h-12 object-contain transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Services With Us */}
      <section className="py-[3.2rem] lg:py-[4.8rem] bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 inline-block relative pb-2 border-b-4 border-[#c7010c]">
              Services With Us
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { title: "Software Development", icon: <FiSettings /> },
              { title: "UI/UX Development", icon: <FiPenTool /> },
              { title: "App Development", icon: <FiSmartphone /> },
              { title: "Web Development", icon: <FiMonitor /> },
              { title: "Digital Marketing", icon: <FiDatabase /> },
              { title: "Graphic Design", icon: <FiPenTool /> },
              { title: "E-commerce Development", icon: <FiShoppingBag /> },
              { title: "Amazon Marketplaces", icon: <FiShoppingBag /> },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-24 h-24 rounded-full border border-gray-200 bg-white flex items-center justify-center mb-5 text-[#c7010c] text-3xl group-hover:bg-[#c7010c] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1">
                  {service.icon}
                </div>
                <h4 className="text-[15px] font-semibold text-gray-800">{service.title}</h4>
                <div className="w-10 h-0.5 bg-gray-300 mt-3 group-hover:bg-[#c7010c] transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Business Approach */}
      <section className="py-[3.2rem] lg:py-[4.8rem] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-gray-900 inline-block relative pb-2 border-b-4 border-[#c7010c] mb-6">
              Our Business Approach
            </h2>
            <div className="max-w-3xl mx-auto text-gray-600 text-[15px] leading-relaxed space-y-3">
              <p>Tech2Globe strives to leave a lasting impression of business growth by offering exceptional value. Through our business acumen, we deliver robust solutions.</p>
              <p>We believe in forming strong relationships based on trust, which translates into an organic, evolving process geared toward client success.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded bg-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#c7010c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-[#c7010c] mb-4">Agile Based Decision Making</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Our team works collaboratively with transparency that calls upon agile based decision making ensuring rapid growth, testing, and continuous improvement.</p>
            </div>
            <div className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded bg-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#c7010c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-[#c7010c] mb-4">Flexible Working Hours</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Our expert team is flexible with working hours, accommodating global time zones because they believe in making things happen regardless of distance.</p>
            </div>
            <div className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded bg-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#c7010c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-[#c7010c] mb-4">Client-Oriented Approach</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">All business decisions are made with the client's approval. The client is consulted on all major decision-making steps to ensure perfect alignment.</p>
            </div>
            <div className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded bg-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#c7010c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <h3 className="text-xl font-semibold text-[#c7010c] mb-4">Team Augmentation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">We have a pool of highly skilled and experienced employees. They will provide quality work professionally as extended members of your in-house team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose Tech2Globe */}
      <section className="py-[3.2rem] lg:py-[4.8rem] bg-[#1c1c1c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-1/3">
              <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
                Why Choose <br /><span className="text-[#c7010c]">Tech2Globe</span> To Establish Mutually Beneficial Business Partnerships?
              </h2>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-start group">
                <div className="w-14 h-14 bg-[#2a2a2a] group-hover:bg-[#c7010c] rounded flex items-center justify-center mb-6 text-2xl transition-colors duration-300 shadow-md">
                  <FaHandshake className="text-white" />
                </div>
                <h4 className="text-[17px] font-semibold mb-3">Collaborative Process</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed">As your growth partners, we work in collaboration with your in-house team & offer full transparency with start-to-end tracking.</p>
              </div>

              <div className="flex flex-col items-start group">
                <div className="w-14 h-14 bg-[#2a2a2a] group-hover:bg-[#c7010c] rounded flex items-center justify-center mb-6 text-2xl transition-colors duration-300 shadow-md">
                  <FaUserTie className="text-white" />
                </div>
                <h4 className="text-[17px] font-semibold mb-3">Industry Experience</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed">We have been in the industry for more than a decade now, which makes us a reliable partner for you with business acumen.</p>
              </div>

              <div className="flex flex-col items-start group">
                <div className="w-14 h-14 bg-[#2a2a2a] group-hover:bg-[#c7010c] rounded flex items-center justify-center mb-6 text-2xl transition-colors duration-300 shadow-md">
                  <FaTools className="text-white" />
                </div>
                <h4 className="text-[17px] font-semibold mb-3">Technical Assistance</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed">We offer value and straightforward assistance with the right and quick problem-solving attitude and troubleshooting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
