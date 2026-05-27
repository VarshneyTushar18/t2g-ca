import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import {
  FiTool,
  FiLayout,
  FiPenTool,
  FiFileText,
  FiThumbsUp,
  FiUsers,
  FiGlobe,
  FiLink,
  FiMapPin,
  FiStar,
  FiShield,
  FiActivity,
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
  FiCode,
  FiSettings,
  FiSmartphone,
  FiShoppingCart,
  FiServer,
  FiMonitor,
  FiArrowUpRight,
  FiScissors,
  FiLock,
  FiShoppingBag,
  FiImage,
  FiRefreshCcw,
  FiTag,
  FiTarget,
  FiUserCheck,
  FiSearch,
  FiCheckCircle,
  FiTruck,
  FiPackage,
  FiShare2,
} from "react-icons/fi";

import { FaSmile, FaLayerGroup, FaGlobe, FaComments, FaHandshake, FaSearch, FaShareAlt, FaHeartbeat, FaBus, FaStore, FaPlane, FaUtensils, FaCheck } from "react-icons/fa";
import "./custom.css";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ClientSlider from "@/components/ClientSlider";


export const metadata = {
  title: "Best Amazon SEO Agency @Supercharge Your Amazon Listings",

  description:
    "Best Amazon SEO Agency to Boost Your Business Online. ✔ Proven SEO Strategies ✔Elevate Your Sales ✔11000+ Successful Projects ✔Contact Now",

  keywords: [
    "Amazon SEO services",
    "Best Amazon SEO Agency",
    "seo for amazon listings",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/amazon-seo-consultant",
  },

  openGraph: {
    title: "Best Amazon SEO Agency @Supercharge Your Amazon Listings",

    description:
      "Best Amazon SEO Agency to Boost Your Business Online. ✔ Proven SEO Strategies ✔Elevate Your Sales ✔11000+ Successful Projects ✔Contact Now",

    url: "https://tech2globe.ca/amazon-seo-consultant",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },
};



const faqsData = [
  {
    id: 1,
    question: "What Packaging And Preparation Standards Apply To FBA?",
    answer: `
      For Amazon FBA services in Toronto, Amazon thoroughly explains the packaging and preparation requirements. Despite the list's apparent length, it includes all relevant categories, such as hanger removal, product sets, packed items, and loose goods. Sellers should note that every unit that fits into more than one category must be prepared using all relevant prep types.

      Log into your Seller Central account and visit the Packaging and Prep Criteria resource page for more details about these requirements. The inventory shipment to Amazon fulfilment centres can be simplified by following these fundamental guidelines. If you adhere to these conditions, Amazon may only accept, return, or repackage the products you send at your expense.
    `,
  },

  {
    id: 2,
    question: "Are There Any Precautionary Things To Be Considered About FBA?",
    answer: `
      Each FNSKU used on a unit must be distinct and refer to a single distinct product. A distinct FNSKU must be assigned to each variant, such as size or colour. Each unit must have a label or barcode that can be read from the outside. Existing barcodes on shipping cartons that cannot be scanned must be covered or deleted.
    `,
  },

  {
    id: 3,
    question: "What Are Amazon FBA Prep Services All About?",
    answer: `
      To determine whether problem behaviour is present, why it is occurring, and what can be done about it, a functional behaviour assessment (FBA) gathers data from numerous indirect and direct sources. A behaviour plan is frequently created to focus on the goals and areas highlighted in the assessment when an FBA is finished.
    `,
  },

  {
    id: 4,
    question: "Why Would I Go For An Amazon FBA Consulting Agency?",
    answer: `
      Working with an Amazon Consultant is a good idea if you want to:
      - Achieve more Amazon sales
      - Reduce Amazon's advertising expenses
      - Boost Amazon SEO rankings
      - Increase brand awareness
      - Avoid making costly errors
      - Know how to handle an Amazon account
      - Recognize all fees both on and off Amazon
      - Understand your market competition
      - Know how to expand and scale for the foreseeable future
    `,
  },
];


const servicesData = [
  {
    id: 1,
    title: "FBA Eligibility And Projections",
    description:
      "Tech2Globe can help you ensure that your products are eligible for Amazon FBA prep services and that there are no enrollment barriers, such as hazmat reviews. Since FBA imposes additional fees in addition to Amazon's standard fees, we will also conduct a profit estimate.",
    icon: <FiCheckCircle size={32} color="#ffffff" />,
  },
  {
    id: 2,
    title: "Delivery via Amazon",
    description:
      "Amazon receives merchandise from sellers. In addition to handling customer assistance, Amazon packages and ships the customer's products. Amazon FBA prep services guarantee two-day shipping, and you can add a Prime badge to your offering.",
    icon: <FiTruck size={32} color="#ffffff" />,
  },
  {
    id: 3,
    title: "Optimization For FBA",
    description:
      "If you have been using FBA fees, we will audit them. Amazon has a lot of unstated fees that are tough to notice through Seller Central. Tech2Globe can compute all of these and manage Amazon FBA prep services fees on your behalf by accessing more detailed fee information via an API.",
    icon: <FiBarChart2 size={32} color="#ffffff" />,
  },
  {
    id: 4,
    title: "Seller Fulfilled Prime",
    description:
      "Seller Fulfilled Prime is a Prime programme that allows you to deliver directly from your own warehouse to domestic Prime consumers. By displaying the Prime badge, you are committing to fulfilling orders with Two-Day Delivery for Prime customers at no additional cost.",
    icon: <FiPackage size={32} color="#ffffff" />,
  },

];


export default function AmazonFbaConsultingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Amazon FBA Services in Toronto"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          {
            label: "Amazon Fba Consulting Services", href: "/amazon-fba-consulting-services"
          }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Best Amazon FBA Services In Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

              <p className="text-[#c7010c] font-semibold text-lg md:text-xl mb-8">
                14+ Years Of Being A Top-Rated Amazon FBA Services Consulting Agency
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Amazon has a customer base that is constantly expanding in the hundreds of millions. To give customers the best purchasing experience possible, the marketplace also boasts a great distribution network and optimal delivery agreements. Sellers can leverage Amazon's enormous client potential to market their products because they have access to a ready-made customer base. You can be a successful Amazon seller by including a variety of seller-focused services like product delivery, product listing, payment and refund processing, and much more. You can succeed as an Amazon seller with our Amazon fba services in Toronto.<br />
                When you hire an Amazon FBA services agency, you can anticipate getting best FBA support with the challenging transfer from Vendor to Seller Central. Also you receive valuable advice, for instance, on handling your Amazon FBA products as their services are economically feasible. An efficient inventory management plan is crucial if you want to reduce your costs because the FBA program has several fees, such as storage fees, that rise the longer your products remain unsold. However, Tech2Globe experts are skilled at handling Amazon fba consulting services in a way that minimises the costs connected with the program's various fees.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Amazon FBA Consulting Services
              That We Can Help You With
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Your inventory is kept at an Amazon Fulfilment Centre when you use FBA. Instead of sending your products directly to the consumer, it is prepared and shipped to the fulfillment centre(s); as soon as buyers place an order for your goods, Amazon picks, packs, and ships them and directly reaches out to the customers.</p>

          </div>
          <ServiceCards services={servicesData} columns={2} />
        </div>
      </section>



      {/* ===== Benefits That You Can Leverage – 50/50 Split ===== */}
      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">

            {/* RIGHT – Image (50%) */}
            <div className="w-full lg:w-1/2 relative">
              <img src="/images/services/services-classic-07.jpg" alt="Benefits That You Can Leverage" className="object-cover" />
            </div>

            {/* LEFT – Content (50%) */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="px-8 sm:px-12 lg:px-16 ">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 leading-snug">
                  Benefits That You Can Leverage
                </h2>
                <div className="w-16 h-[3px] bg-[#c7010c] mb-4"></div>
                <p className="text-gray-500 text-sm leading-relaxed mb-10">
                  Although learning Amazon FBA consulting services takes time and might be difficult, it is
                  one of your competitive advantages over other sellers.
                </p>

                {/* 2×2 Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">

                  {/* Benefit 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded border border-gray-200 flex items-center justify-center text-[#c7010c]">
                      <FiMonitor size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-1">You Can Aim for Growth</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        You may check the Amazon FBA services dashboard whenever you want to see what is selling
                        and what is not and what inventory you should refill. FBA enables you to effectively
                        manage inventory levels while giving Amazon complete control over the shipping logistics.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded border border-gray-200 flex items-center justify-center text-[#c7010c]">
                      <FiShare2 size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-1">Amazon Shares</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        Customers get the assurance that they will receive their order fast because FBA products
                        are labelled with the Prime badge. It lets customers know that you handle packing,
                        delivery, customer care, and returns on Amazon very smoothly.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded border border-gray-200 flex items-center justify-center text-[#c7010c]">
                      <FiDollarSign size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-1">Cost Effective</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        You pay as you go using Amazon FBA prep services! Only the storage space and orders
                        Amazon fulfils on the seller's behalf are subject to charges from Amazon. There is no
                        additional upfront investment required.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded border border-gray-200 flex items-center justify-center text-[#c7010c]">
                      <FiGlobe size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 mb-1">Global Sales Expansion</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        The benefits of Amazon FBA services in Toronto aren't just available in the Canadian
                        market. Our Amazon seller account management team demonstrates how to use the global
                        Amazon network to reach customers everywhere.
                      </p>
                    </div>
                  </div>

                </div>{/* /grid */}
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Why Choosing Tech2Globe Can Be<br />
                The Best Option?
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>

              <p className="text-gray-600 mb-3 leading-relaxed">
                An Amazon FBA consulting services specialist examines your data to determine whether joining Amazon's FBA programme is wise for your company. FBA requires you to be extremely careful with your operations to avoid fines or account suspensions. Your chances of having smooth operations and more sales increase if you have an Amazon FBA consultant. For 14 years, Tech2Globe has fueled Amazon businesses of all sizes with incredible support of Amazon fba services in Toronto. Through our results-driven Amazon selling techniques and account management Amazon experience, we have gained the trust of thousands of customers. We are your go-to resource for learning how to sell on Amazon and increase your sales there.<br />
                All boxes sent to Amazon FBA services centres by small package delivery, less than truckload (LTL), or full truckload (FTL) shipment must meet the specifications. By providing Amazon with box content details, you can better manage your inventory once it gets to an Amazon location and ensure your products are sold as soon as possible. Following packaging guidelines guarantees that your shipments will reach Amazon's fulfilment centres unharmed and prepared for receipt.
                For more in-depth information about the operational requirements on Amazon, you can call us at the +1-516-858-5840 or reach us through the above CTA button anytime.
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
