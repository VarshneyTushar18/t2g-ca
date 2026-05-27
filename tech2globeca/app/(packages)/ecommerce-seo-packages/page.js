import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqContact from "@/components/FaqContact";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import "./custom.css";
import {
  FiMonitor,
  FiTool,
  FiMessageCircle,
  FiSearch,
  FiDatabase,
  FiShoppingCart,
  FiUsers,
  FiMegaphone,
  FiDollarSign,
  FiBriefcase,
  FiBarChart2,
  FiTrendingUp
} from "react-icons/fi";

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

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
    letter: "WA",
    text: "I have been trying to get a digital marketing service for my small business for a long time. I came across this website and the services on it four months ago. I decided to give them a try, & I'm delighted"
  },
  {
    id: 2,
    letter: "LS",
    name: "Liam Smith",
    subname: "",
    text: "The owner of the company is amiable and helpful. The price for the products and services is reasonable. This is the best digital marketing service I have ever experienced."
  },
  {
    id: 3,
    letter: "LC",
    name: "Lisa Campbell",
    subname: "",
    text: "I was looking for a company that could help me put up some social media posts and do several other digital marketing tasks. I came across the services offered by Tech2Globe and decided to give them a try."
  }
];


export default function EcommerceSeoPackages() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecommerce Seo Packages", href: "/ecommerce-seo-packages" }
  ];

  return (

    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="ECOMMERCE SEO Packages"
        breadcrumbs={breadcrumbs}
      />


      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
            <div>
              <p className="text-gray-600 mb-4 leading-relaxed text-center">
                Our SEO packages are designed to help your website rank higher in search engine results, increase organic traffic, and improve overall visibility. Our comprehensive SEO packages include keyword research, on-page optimization, content creation, link building, and monthly reporting. Our team of experts will work closely with you to understand your business goals and develop a customized strategy that suits your needs. Boost your online presence today with our affordable and effective SEO packages.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="packages-container-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="table-responsive">
            <table className="table table-striped packages-table mb-0">
              <thead>
                <tr>
                  <th className="path-th main-th" width="16.66%">
                    <h2 className="text-center">Activity</h2>
                  </th>
                  <th className="path-th grey" width="16.66%">
                    <h3>Startup
                      <span className="dollor-currency"><a href="/contact-us" >Get A Quote</a></span>
                    </h3>
                  </th>
                  <th className="path-th red" width="16.66%">
                    <h3>Medium
                      <span className="dollor-currency"><a href="/contact-us" >Get A Quote</a></span>
                    </h3>
                  </th>
                  <th className="path-th dark-grey" width="16.66%">
                    <h3>Growth
                      <span className="dollor-currency"><a href="/contact-us" >Get A Quote</a></span>
                    </h3>
                  </th>
                  <th className="path-th main-custom" width="16.66%">
                    <h3>Custom</h3>
                  </th>




                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-left">
                    <h3>Total Keywords</h3>
                  </td>
                  <td>
                    Upto 30
                  </td>
                  <td>
                    Upto 55
                  </td>
                  <td>
                    Upto 120
                  </td>
                  <td rowspan="5">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>

                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Primary Focused Keywords</h3>
                  </td>
                  <td>
                    10
                  </td>
                  <td>
                    20
                  </td>
                  <td>
                    40
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Supporting Keywords</h3>
                  </td>
                  <td>
                    20

                  </td>
                  <td>
                    35
                  </td>
                  <td>
                    80
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Total Contextual Backlinks</h3>
                  </td>
                  <td>
                    5
                  </td>
                  <td>
                    20
                  </td>
                  <td>
                    35
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Total Traditional Backlinks</h3>
                  </td>
                  <td>Upto 50</td>
                  <td>Upto 100</td>
                  <td>Upto 200</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Best Suited For*</h3>
                  </td>
                  <td>Upto 25 Products</td>
                  <td>25-50 Products</td>
                  <td>50-80 Products</td>
                  <td>Above 80</td>
                </tr>



                <tr>
                  <td className="td-left">
                    <h3>Categories Targeted</h3>
                  </td>
                  <td>
                    2
                  </td>
                  <td>
                    5
                  </td>
                  <td>
                    10
                  </td>
                  <td>-</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Est. Conversion Growth**</h3>
                  </td>
                  <td>
                    2X
                  </td>
                  <td>
                    3X to 5X
                  </td>
                  <td>
                    5X to 8X
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Minimum Time Period</h3>
                  </td>
                  <td>
                    3 Months
                  </td>
                  <td>
                    3 Months
                  </td>
                  <td>
                    6 Months
                  </td>
                  <td>-</td>
                </tr>


                <tr>
                  <td className="full-row" colspan="7">Initial Review & Analysis Tasks
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Full Website Audit</h3>
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                  <td rowspan="13">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Backlink Analysis</h3>
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" />
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Duplicate Content Check</h3>
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" />
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Google Penalty Check</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>SEMRUSH Audit Report</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Keywords Research & Analysis</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Baseline Ranking Report</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Keywords URL Mapping</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Competitor Analysis Report (No. of Competitor)</h3>
                  </td>
                  <td>2</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Screaming Frog Report (Customized)</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Broken Links Check</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Shopping Cart Funnel Analysis & Recommendation</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Mobile Usability Check</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>




                <tr>
                  <td className="full-row" colspan="5">E-commerce On-Page Tasks</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>SEO Friendly URLs (URL Rewriting)</h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td rowspan="21">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Meta Tag, Header Tag, ALT, Title Tag Optimization*</h3>
                  </td>
                  <td>
                    20
                  </td>
                  <td>
                    60
                  </td>
                  <td>
                    100
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Existing Website Content Optimization</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>New Page Creation</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Schema Markup Suggestions</h3>
                  </td>
                  <td>
                    2
                  </td>
                  <td>
                    3
                  </td>
                  <td>
                    5
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Webmaster Tools - Crawl Error Resolution</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Website Page Load Optimization</h3>
                  </td>
                  <td>
                    Desktop
                  </td>
                  <td>
                    Desktop/Mobile
                  </td>
                  <td>
                    Desktop/Mobile
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Custom 404 Error Page Setup</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Internal Linking & Anchor Text Optimization</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Robots.txt Creation & Analysis
                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>XML Sitemap Creation & Analysis</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Google Webmaster Setup</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Google Analytics Set-up with Ecommerce Conversion Tracking</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Product Image Alt Tag Optimization</h3>
                  </td>
                  <td>
                    Upto 50
                  </td>
                  <td>
                    Upto 100
                  </td>
                  <td>
                    Upto 200
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Core Web Vital Analysis & Recommendation</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>URL Canonicalization Check</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Navigation Analysis & Recommendations</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Header & Footer Optimization</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Product Optimization Suggestion (UI/UX)</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>E-E-A-T Suggestion</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Breadcrumb Implementation
                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>




                <tr>
                  <td className="full-row" colspan="5">Content Marketing</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Guest Blog Writing</h3>
                  </td>
                  <td>
                    2
                  </td>
                  <td>
                    5
                  </td>
                  <td>
                    10
                  </td>
                  <td rowspan="7">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Article Writing & Submission</h3>
                  </td>
                  <td>
                    3
                  </td>
                  <td>
                    10
                  </td>
                  <td>
                    15
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Press Release Writing & Submission</h3>
                  </td>
                  <td>
                    0
                  </td>
                  <td>
                    1
                  </td>
                  <td>
                    2
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Blog Posting</h3>
                  </td>
                  <td>
                    0
                  </td>
                  <td>
                    4
                  </td>
                  <td>
                    8
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Premium Guest Posting***</h3>
                  </td>
                  <td>
                    Additional Charges
                  </td>
                  <td>
                    Additional Charges

                  </td>
                  <td>
                    Additional Charges

                  </td>
                </tr>

                <tr className="alert" role="alert">

                  <td className="td-left" colspan="5">
                    <strong>Word Count : </strong>
                    <small className="fs-12">Guest Blog* 700 Per Post | Article Submission* 600 Per Article | Press Release* 1000 Per PR | Blog Posting*500 per Blog |

                    </small>
                  </td>

                </tr>



                <tr>
                  <td className="full-row" colspan="5">Off Page Optimization</td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Content Curation/Syndication</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="7">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Social Bookmarking/Sharing</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Product Image Submissions</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Product Video Submissions (If Available)</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Classified Submissions</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Coupons Distribution (If Available)</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Competitor Links Analysis & Creation</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="full-row" colspan="5">Ecommerce SEO Reporting

                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Google Analytics Report</h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Weekly
                  </td>
                  <td rowspan="5">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Keyword Ranking Report</h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Weekly
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Progress Report</h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Weekly
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>SEO Activity Report</h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Weekly
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Action Plan</h3>
                  </td>
                  <td>
                    Quarterly
                  </td>
                  <td>
                    Quarterly
                  </td>
                  <td>
                    Monthly
                  </td>
                </tr>





                <tr>
                  <td className="full-row" colspan="5">Customer Support
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Email, Chat (WhatsApp, Skype, Slack)</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>

                  <td rowspan="5">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Voice Support</h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Weekly
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Project Dashboard</h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Weekly
                  </td>
                </tr>





                <tr>
                  <td className="td-left">
                    <h3>Additional Monthly SEO Consulting (Hrs)</h3>
                  </td>
                  <td>
                    2
                  </td>
                  <td>
                    5
                  </td>
                  <td>
                    10
                  </td>
                </tr>




              </tbody>
            </table>
          </div>
        </div>
      </section >

      {/* Case Studies Section */}
      < section className="py-16 lg:py-24 bg-white" >
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
      </section >

      <Testimonials testimonials={testimonialsData} />

      <div id="contact">
        <FaqContact faqs={faqsData} />
      </div>

      <CTA />

      <Footer />
    </main >
  );
}
