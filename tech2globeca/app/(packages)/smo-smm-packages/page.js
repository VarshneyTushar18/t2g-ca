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


export default function SmoSmmPackages() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Smo Smm Packages", href: "/smo-smm-packages" }
  ];

  return (

    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="SMO/SMM Packages"
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
                    <h2 className="text-center">Activity
                    </h2>
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
                    <h3>ADVANCE
                      <span className="dollor-currency"><a href="/contact-us" >Get A Quote</a></span>
                    </h3>
                  </th>
                  <th className="path-th dark-grey" width="16.66%" style={{ backgroundColor: "#BC0101" }}>
                    <h3>GROWTH
                      <span className="dollor-currency"><a href="/contact-us" >Get A Quote</a></span>
                    </h3>
                  </th>
                  <th className="path-th main-custom" width="16.66%" style={{ backgroundColor: "#2c2c33!important" }}>
                    <h3>Custom</h3>
                  </th>




                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-left">
                    <h3>No. of Channels</h3>
                  </td>
                  <td>
                    Any 1
                    (Facebook, Instagram, LinkedIn, YouTube, Twitter, Pinterest)

                  </td>
                  <td>
                    Any 2
                    (Facebook, Instagram,LinkedIn, YouTube, Twitter, Pinterest)

                  </td>
                  <td>
                    Any 3
                    (Facebook, Instagram, TikTok, LinkedIn, YouTube, Twitter, Pinterest)

                  </td>
                  <td>Any 4
                    (Facebook, Instagram, TikTok, LinkedIn, YouTube, Twitter, Pinterest)
                  </td>
                  <td rowspan="6">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>

                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Monthly Unique Creatives Creation</h3>
                  </td>
                  <td>
                    Upto 8
                  </td>
                  <td>
                    Upto 15
                  </td>
                  <td>
                    Upto 25
                  </td>
                  <td>Upto 40</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Paid Campaigns</h3>
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
                    <h3>Target Products/Pages</h3>
                  </td>
                  <td>
                    Upto 5
                  </td>
                  <td>
                    Upto 10
                  </td>
                  <td>
                    Upto 15
                  </td>
                  <td>
                    Upto 25
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Taglines & Unique Hashtag</h3>
                  </td>
                  <td><img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td><img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td><img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Est. Engagement Growth</h3>
                  </td>
                  <td>2X</td>
                  <td>2X to 4X</td>
                  <td>2X to 4X</td>
                  <td>4X to 6X</td>
                </tr>


                <tr>
                  <td className="full-row" colspan="6">Social Media Marketing
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Facebook Ads* (Monthly Budget)</h3>
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" />
                  </td>
                  <td>
                    Upto
                    $ 300
                  </td>
                  <td>
                    Upto
                    $ 600

                  </td>
                  <td>
                    Upto
                    $ 1000

                  </td>
                  <td rowspan="6">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Instagram Ads* (Monthly Budget)</h3>
                  </td>
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" />
                  </td>
                  <td>
                    Upto
                    $ 300

                  </td>
                  <td>
                    Upto
                    $ 600

                  </td>
                  <td>
                    Upto
                    $ 1000

                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Post Boost*</h3>
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
                  <td>
                    <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Conversion Tracking</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Influencers (Barter)</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Influencers (Paid)</h3>
                  </td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image003.gif" alt="" src="images/clip_image003.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                  <td> <img className=" lazyloaded" data-src="images/clip_image002.gif" alt="" src="images/clip_image002.gif" /></td>
                </tr>



                <tr>
                  <td className="full-row" colspan="6">Initial Review and Analysis</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Profile Creation (If Necessary)</h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td rowspan="8">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Profile Optimization</h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>

                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Target Audience Analysis</h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>

                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Identify Hashtags</h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>

                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Identify Business Goals</h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>

                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Creating Social Media Calendar
                    </h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>

                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Follow Social Media Trends & Memes
                    </h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>
                  <td><img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" /></td>

                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Contests & Giveaways
                    </h3>
                  </td>
                  <td><img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" /></td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                </tr>




                <tr>
                  <td className="full-row" colspan="6">Facebook Management
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Facebook Page Optimization</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="24">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Fan Page Creation (If Page Is Not Created)</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Cover Image Creation & Updation</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Facebook Groups Joining</h3>
                  </td>
                  <td>
                    5
                  </td>
                  <td>
                    10
                  </td>
                  <td>
                    15
                  </td>
                  <td>
                    25
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Facebook Post Sharing In Groups</h3>
                  </td>
                  <td>
                    3 Post
                  </td>
                  <td>
                    5 Post

                  </td>
                  <td>
                    8 Post

                  </td>
                  <td>12 Post</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Facebook Story Creation</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Facebook Review Posting</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>3</td>
                  <td>6</td>
                  <td>10</td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Community Group Creation & Management</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Competitor Analysis</h3>

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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Facebook Tabs Creation</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Facebook Influencer Research</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Messenger Marketing</h3>
                  </td>
                  <td>
                    Up to 3
                  </td>
                  <td>
                    Up to 5
                  </td>
                  <td>
                    Up to 8
                  </td>
                  <td>
                    Up to 15
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Video Sharing (If Provided)</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Identify Hashtags</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Facebook Pixel Updation For Ad Campaign</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left"><h3>Facebook Shop Listing & Management (Products)</h3>

                  </td>
                  <td>
                    Upto 5
                  </td>
                  <td>
                    Up to 5
                  </td>
                  <td>
                    Up to 10
                  </td>
                  <td>
                    Up to 10
                  </td>
                </tr>

                <tr>
                  <td className="td-left"><h3>Facebook Reporting</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left"><h3>Social Content Creation</h3>

                  </td>
                  <td>
                    1/month
                  </td>
                  <td>
                    2/month
                  </td>
                  <td>
                    4/month
                  </td>
                  <td>
                    6/month
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Visual Content Presentation</h3>

                  </td>
                  <td>
                    2
                  </td>
                  <td>
                    2
                  </td>
                  <td>
                    4
                  </td>
                  <td>
                    4
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Content Seeding To Increase Visibility</h3>

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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>

                </tr>

                <tr>
                  <td className="td-left"><h3>Joining Communities</h3>


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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>

                </tr>

                <tr>
                  <td className="td-left"><h3>Respond To Direct Messages</h3>


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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>

                </tr>

                <tr>
                  <td className="td-left"><h3>Respond To Comments & Replies</h3>


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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>

                </tr>


                <tr>
                  <td className="full-row" colspan="6">Instagram Management</td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Profile Optimization
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="19">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Convert Account In Professional/Business</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Instagram Thread Account Creation</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Personalized Hashtags Research & Use</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image002.gif" alt="" />
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
                    <h3>Target Instagram Followers Increase</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Customized Story Creation & Updation</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Competitor Analysis</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>IGTV Video Updation (Video Provided By Client)</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Reel Updation
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Personalized Highlights Covers Creation
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Product Guide Creation

                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
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
                    <h3>Content & Giveaways
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Influencers Outreach
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Image Tagging
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Monthly Ads
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Comments & Likes Management
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Respond To Direct Messages & Mentions
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Respond To Comments & Replies
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Instagram Analytics Management
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>



                <tr>
                  <td className="full-row" colspan="6">TikTok Management

                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Strategic Direction</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="5">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Creative Brief</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    3
                  </td>
                  <td>
                    6
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>UGC Videos (Provided by Client)</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    1
                  </td>
                  <td>3</td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Content Ideation Session</h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Video Posting (Provided by Client)</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="full-row" colspan="6">LinkedIn Management
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Profile Optimization</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>

                  <td rowspan="12">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Company Page Creation</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Profile Pic & Cover Page Updation</h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Competitor Analysis
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Video Posting (Provided by Client)
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Community Group Creation & Management
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Customized Story Updation
                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
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
                    <h3>Follow Hashtags
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Joined Groups & Discussions
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="td-left">
                    <h3>Build Profile Connections
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Company Page Followers Increase
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Linkedin Post Sharing
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="full-row" colspan="18">YouTube Management
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Channel Optimization
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="19">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Channel Cover Image
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Video Optimization (Video Provided By Client)
                    </h3>
                  </td>
                  <td>
                    1
                  </td>
                  <td>
                    2
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
                    <h3>Video Thumbnail Creation
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Keyword Research
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Competitor Analysis
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Adding Video Elements
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Add Subtitles/Video Transcript
                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
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
                    <h3>YouTube Story Updates
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>YouTube Live Streaming Feature
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Community Updation
                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
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
                    <h3>YouTube Playlist Creation

                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>YouTube Shorts Updation (Video Provided By Client)

                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Youtube Subscribers Increase
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>YouTube Views
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Video Optimization & Promotion
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Comment Moderation
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>YouTube Video Likes

                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Video Backlinks
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>

                <tr>
                  <td className="full-row" colspan="6">Twitter Management
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Profile Optimization
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="9">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Tweets Posting
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Customized Cover Photo Creative Upload
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Retweets
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Follow Hashtag Trends
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Poll Creation
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Follow Industry Related People
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Create Moments

                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
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
                    <h3>Twitter Analytics Reporting
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="full-row" colspan="7">Pinterest Management
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Profile Optimization
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="7">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Business Account Convert
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Custom Pin Boards Creation
                    </h3>
                  </td>
                  <td>2</td>
                  <td>4</td>
                  <td>6</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Video Updation (Video Provided By Client)
                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
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
                    <h3>Story Updation
                    </h3>
                  </td>
                  <td>
                    <img className="lazyload" data-src="images/clip_image003.gif" src="images/clip_image003.gif" alt="" />
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
                    <h3>Website Verification
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Monthly Visitors Analysis
                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="full-row" colspan="7">Content Posting Strategy
                  </td>
                </tr>


                <tr>
                  <td className="td-left">
                    <h3>Motivational Post (Twice A Week)
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="3">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Business Post (Twice A Week)
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Ques. & Ans. / Image Sharing (Twice A Week)

                    </h3>
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="full-row" colspan="7">Reporting
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Progress Report

                    </h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Bi-Weekly

                  </td>
                  <td>
                    Weekly
                  </td>
                  <td rowspan="2">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Activity Report
                    </h3>
                  </td>
                  <td>
                    Monthly
                  </td>
                  <td>
                    Bi-Weekly
                  </td>
                  <td>
                    Bi-Weekly

                  </td>
                  <td>
                    Weekly
                  </td>
                </tr>
                <tr>
                  <td className="full-row" colspan="7">Customer Support
                  </td>

                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Email, Chat (WhatsApp, Skype, Slack)
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
                  <td>
                    <img className="lazyload" data-src="images/clip_image002.gif" src="images/clip_image002.gif" alt="" />
                  </td>
                  <td rowspan="2">
                    <a href="/contact-us" className="btn btn-danger">Get A Quote</a>
                  </td>
                </tr>
                <tr>
                  <td className="td-left">
                    <h3>Voice Support
                    </h3>
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
                  <td>
                    Weekly
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
