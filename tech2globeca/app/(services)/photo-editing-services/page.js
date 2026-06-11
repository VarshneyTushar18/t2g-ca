import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ServiceCards from "@/components/ServiceCards";
import Image from "next/image";
import {
  FiTool,
  FiMessageCircle,
  FiSearch,
  FiShare2,
  FiMousePointer,
  FiLayout,
  FiMail,
  FiCheckCircle,
  FiThumbsUp,
  FiEdit3,
  FiGlobe,
  FiLink,
  FiMapPin,
  FiShield,
  FiActivity,
  FiCoffee,
  FiHome,
  FiBarChart2,
  FiDollarSign,
  FiPhone,
  FiDatabase,
  FiAward,
  FiHeadphones,
  FiRefreshCw,
  FiEdit,
  FiLayers,
  FiBriefcase,
  FiEye,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiShoppingCart,
  FiMonitor,
  FiFileText,
  FiPenTool,
  FiImage,
  FiCamera,
  FiBox,
  FiStar,
} from "react-icons/fi";

import { FaCheck, FaComments, FaHandshake, FaLink, FaSearch, FaShareAlt } from "react-icons/fa";
import "./custom.css";
import CTA from "@/components/CTA";
import ServiceExpertise from "@/components/services/ServiceExpertise";


export const metadata = {
  title:
    "Photo Retouching Services @Revive Your Images",

  description:
    "Photo Retouching Services ✅ Revive Your Images ✅ Request Your Custom Plan ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!",

  keywords: [
    "photo editing service",
    "photo retouching services",
    "professional photo editing services",
    "online photo editing service",
  ],

  alternates: {
    canonical: "https://tech2globe.ca/photo-editing-services",
  },

  openGraph: {
    title:
      "Photo Retouching Services @Revive Your Images",

    description:
      "Photo Retouching Services ✅ Revive Your Images ✅ Request Your Custom Plan ✅ Over 5,000 Successful Projects ✅ Get in Touch Today!",

    url: "https://tech2globe.ca/photo-editing-services",

    siteName:
      "Tech2Globe Canada: Multi-Function IT Outsourcing Services",

    locale: "en_US",

    type: "website",
  },

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


const clientsData3 = [
  { id: 1, name: 'Good Firm', logo: 'images/clients/good-firm.webp' },
  { id: 2, name: 'Clutch', logo: 'images/clients/clutch-2021.webp' },
  { id: 3, name: 'Clutch', logo: 'images/clients/clutch-2021-1.webp' },
  { id: 4, name: 'Clutch', logo: 'images/clients/clutch-2021-2.webp' },
  { id: 5, name: 'Trustpilot', logo: 'images/clients/trust-pilot.webp' },
  { id: 6, name: 'Ypca', logo: 'images/clients/ypca.webp' },
  { id: 7, name: 'Extract', logo: 'images/clients/extract.webp' },
];


const testimonialsData = [
  {
    id: 1,
    letter: "PW",
    name: "Parmen Wem",
    subname: "Business Owner",
    text: "Awesome; I really like working with Tech2Globe. Our website looks fantastic and performs fantastically because of their knowledge and perseverance."
  },
  {
    id: 2,
    letter: "AT",
    name: "Andy Tame",
    subname: "E-commerce Manager",
    text: "Finding the ideal person or business is much more difficult than putting together a website. I conducted a search to find a specific business that could design & develop my website."
  },
  {
    id: 3,
    letter: "RA",
    name: "Rashid Al-Hammed",
    subname: "Marketing Director",
    text: "Excellent design staff and rapid response to all requests and tasks. They have enhanced our Google search results, thanks to their expert assistance"
  }
];


const servicesData = [
  {
    id: 1,
    title: "Ghost Mannequins",
    description:
      "Have you ever considered how people upload photos of what apparel would look like if worn? While many people use mannequins for the same reason, they frequently restrict the customer's eyesight and get in the way of garment details. Ghost mannequin services can combine many images into a single image, giving an unobstructed view of the apparel.",
    icon: <FiAward size={32} color="#ffffff" />
  },
  {
    id: 2,
    title: "Background Removal",
    description:
      "Do you want to eliminate distracting things from the backdrop of your image? Or do you need to replace the background entirely with a new, better one? Backdrop removal services allow you to completely alter the background of a photograph to increase its visual appeal. Tech2Globe's experienced editors can handle it all, whether you need a plain white one for printing or a brilliant, colourful one for your social media profile.",
    icon: <FiLayers size={32} color="#ffffff" />
  },
  {
    id: 3,
    title: "Colour Enhancement",
    description:
      "Are your photos lifeless and boring? Or has your products' true colour been distorted due to bad lighting and camera error? Colour influences the mood and tone you want to set. It is vital to have eye-catching visuals representing facts, such as the correct product colour, as precisely as possible.",
    icon: <FiShoppingCart size={32} color="#ffffff" />
  },
  {
    id: 4,
    title: "Vector Conversion",
    description:
      "Did your image become distorted, pixelated, or hazy when you tried to zoom in? Raster images are frequently smaller than vector graphics but lack the same quality and break apart when magnified. Raster graphics are simply inadequate for something as significant as logos. Vector images may be easily scaled, printed, and smaller in size.",
    icon: <FiPenTool size={32} color="#ffffff" />
  },
  {
    id: 5,
    title: "Image Resizing",
    description:
      "Do you want to be sure that your photos are downsized without losing quality? Image resizing via online photo editing service can have your photographs appropriately sized if you wish to advertise them through various online and offline channels. Our experts can work with images in any format and downsize or expand photos while adhering to your naming conventions.",
    icon: <FiImage size={32} color="#ffffff" />
  },
  {
    id: 6,
    title: "Event Photo Editing",
    description:
      "Do you want each event to be remembered? Everyone enjoys taking photographs, whether on their own or with others, especially during occasions. Using event picture editing services can help you increase the quality of your photographs to treasure those memories. Our editors ensure that each image is flawless.",
    icon: <FiCamera size={32} color="#ffffff" />
  },
  {
    id: 7,
    title: "Photo Retouching Services",
    description:
      "Are minor defects in your photographs detracting from your message? You may increase the quality of your photographs and remove flaws by using our photo retouching services. Tech2Globe utilises the best resources available to erase defects and provide flawless images.",
    icon: <FiEdit size={32} color="#ffffff" />
  },
  {
    id: 8,
    title: "Product Photo Editing",
    description:
      "First impressions are crucial. Customers keep photographs for a lengthy amount of time. So, do you want them to remember a poorly edited product image or be unable to look away from an intriguing product image?",
    icon: <FiBox size={32} color="#ffffff" />
  },
  {
    id: 9,
    title: "Jewelry Photo Editing",
    description:
      "There is no such thing as over-bling. Customers are typically drawn to jewellery, but it's uncommon to find a shot that hasn't been meticulously modified. Tech2Globe's jewellery picture editing ensures that every single detail is precise, from the colour of the metal to the vivid shine of the stone.",
    icon: <FiStar size={32} color="#ffffff" />
  }
];


const servicesData2 = [
  {
    id: 1,
    title: "Cost Effective",
    description:
      "Tech2Globe photo retouching company is well-known for providing the best image editing services at a reasonable and cost-effective price compared to other companies.",
    icon: ""
  },
  {
    id: 2,
    title: "Excellent Service",
    description:
      "Tech2Globe is a professional photo editing service provider with a team of employees with 14 years of experience in professional image editing. Furthermore, it employs highly qualified professionals.",
    icon: ""
  },
  {
    id: 3,
    title: "On-Time Delivery",
    description:
      "Tech2Globe is on the front lines, ready to work on a customer's order immediately. Its personnel ensure that high-quality online photo editing services are offered and that photos are delivered on time. When it comes to service delivery, you will never be dissatisfied with Tech2Globe.",
    icon: ""
  },
  {
    id: 4,
    title: "Data/Photo Security",
    description:
      "Tech2Globe assures that the customer's work is always protected from unauthorized persons or hackers. Our systems are incredibly secure. With this sense of security, you can be certain that any images or photos provided for editing services are completely safe with us.",
    icon: ""
  },
  {
    id: 5,
    title: "All Services Under One Roof",
    description:
      "We are known for providing a broad selection of image retouching services including portrait retouching, product photo retouching, wrinkle and acne retouching, jewellery, wedding photo retouching, and many other services.",
    icon: ""
  },
  {
    id: 6,
    title: "100% Satisfaction Guaranteed",
    description:
      "We provide extremely high-quality image editing services. We have a staff of skilled editors who use cutting-edge tools to deliver professionally altered photographs at all times. We have mastered the most advanced photo editing techniques.",
    icon: ""
  },
  {
    id: 7,
    title: "Best Client Service",
    description:
      "Our talented and experienced professionals are ready 24 hours a day, seven days a week, to assist you with any picture editing issues with dedicated project managers working.",
    icon: ""
  },
  {
    id: 8,
    title: "More Than a Decade of Experience",
    description:
      "Over 14 years of expertise in providing photo editing services worldwide. Our high-quality, low-cost solutions have assisted our clients in forging a distinct brand in their respective markets.",
    icon: ""
  },
  {
    id: 9,
    title: "Scalable Based on Client Needs",
    description:
      "We can edit over 5000 photos every day in-house. We retain 10% of our resources in reserve to ensure project completion on schedule.",
    icon: ""
  },
  {
    id: 10,
    title: "Turnaround Time of 24 Hours",
    description:
      "We supply all pictures without fail within 24 hours because we have separate pools of specialists working in different shifts to serve different time zones.",
    icon: ""
  }
];


export default function PhotoEditingServices() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      <PageHeader
        title="Professional Photo Editing Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "#" },
          { label: "Photo Editing Services", href: "/photo-editing-services" }
        ]}
      />

      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Top Leading Photo Editing Services in Toronto
              </h2>
              <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Tech2Globe's photo editing specialists are very skilled at using image tools and are able to work with a variety of formats!
                Are you losing potential customers because of poor product photography? Tech2Globe can modify your photographs to the smallest detail, so product features stand out. We clean up your raw photographs and edit them using current digital technologies to give the right punch that helps attract clients and double revenue.<br />
                We are the top image editing company with around 25 professionals dedicatedly working in the team. We collaborate with well-known graphic design firms, product photographers, and e-commerce sites. Because of our extensive expertise, years of experience, and production scalability in professional image retouching, we can promise you world-class photo retouching services
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="suitability-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 suitability-container">
          <div className="suitability-left">
            <div className="suitability-card">
              <svg width="60" height="45" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                <path d="M22.2 0C10 8.2 2.2 21.6 2.2 36.6C2.2 47.6 9.4 55.4 19.6 55.4C28.4 55.4 34.6 49.2 34.6 40.8C34.6 32.6 28.6 26.6 20.4 26.6C18.6 26.6 16.4 27.2 15.2 27.8C17 17.6 24.6 9.6 31.8 4.4L22.2 0ZM61 0C48.8 8.2 41 21.6 41 36.6C41 47.6 48.2 55.4 58.4 55.4C67.2 55.4 73.4 49.2 73.4 40.8C73.4 32.6 67.4 26.6 59.2 26.6C57.4 26.6 55.2 27.2 54 27.8C55.8 17.6 63.4 9.6 70.6 4.4L61 0Z" fill="white" />
              </svg>
              <h3 className="suitability-card-text">
                What Makes Us The Most Suitable For Your Photo Editing Services?
              </h3>
            </div>
          </div>
          <div className="suitability-right">
            <h3 className="suitability-heading">
              With over 14 years of expertise, we are one of the fastest-growing photo editing companies.
            </h3>
            <p className="suitability-desc">
              Unique solutions are required for special themes, distinctive concepts, and inventive ways. As a Photo Editing Company, we are dedicated to achieving these results by providing cutting-edge photo editing, image masking, and photo retouching services. We believe in producing visually appealing items in their totality, harmony, and brilliance without compromising picture detail.
            </p>
            <p className="suitability-desc">
              We specialise in offering cutting-edge online photo editing service to clients all over the world, particularly in Canada, United States (USA), the United Kingdom (UK), Australia, Dubai, Saudi Arabia, UAE, Germany, Italy, India, Singapore, France, Finland, Ireland, and others.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Our Professional Photo Editing Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              For over a decade, we have provided high-quality post-processing Photoshop services to various companies and individual photographers!
              We are a trusted photo retouching partner to many professional photographers working in real estate, wedding, portrait, ecommerce products, and stock photography. We offer photographers worldwide cost-effective professional photo editing services with short response times (less than 24 hours). Outsource your picture editing services to us, and we will edit and retouch your images with the help of experienced and seasoned professionals.<br />
              Our advanced Photoshop methods are dedicated to providing our clients with attractive, interactive, and aesthetically pleasing photos that will readily capture the attention of their target audiences at first sight.
            </p>

          </div>
          <ServiceCards services={servicesData} columns={3} />
        </div>
      </section>

      <section className="py-16 bg-[#0000001a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Pros For A Business Of<br />
              Photoshop Retouching Services
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>Photoshop is commonly connected with photo modification to make someone appear to be someone else, although it is used for much more. In reality, ecommerce stores can gain from Photoshop as well. Want to see how?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Get Excellent Branding Material
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                For starters, it aids in the creation of visually appealing branding content. Whether you're photographing high-end products or real estate, shots require the odd touch-up. Without photo retouching services, your branding materials may not appear as you expected them to.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Improve Your Social Media
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Nowadays, every brand has a social media marketing strategy, and no campaign is complete without artistic photos that fascinate the audience. So, suppose you're taking fashion shots of a model wearing your product.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#c7010c] mb-4">
                Assist in Increasing Sales
              </h3>
              <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px] font-normal flex-grow">
                Images are critical for ecommerce firms to keep afloat in this day and age. Customers evaluate your product's worth depending on your website's appearance. You get enticing photographs that persuade customers to buy when you hire skilled photographers for graphic design and product online photo editing service.
              </p>
              <div className="w-12 h-[3px] bg-[#c7010c] mt-6"></div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#222222] mb-4">
              Maintain Consistent Content
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p>When you don't have a dedicated staff of Photoshop experts handling all of your post-production, your photographs may appear significantly different.<br />
              A company that offers services like skin retouching and photo restoration can also review various photographs to ensure that the images are appropriate to post in public.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Photo Editing Service
              </h3>
              <ul>
                <li className="flex items-center gap-2"><FaCheck /> Headshot Photography</li>
                <li className="flex items-center gap-2"><FaCheck /> Still Life Photography</li>
                <li className="flex items-center gap-2"><FaCheck /> Food Photography</li>
                <li className="flex items-center gap-2"><FaCheck /> Pet Photography</li>
                <li className="flex items-center gap-2"><FaCheck /> Maternity Shoot</li>
                <li className="flex items-center gap-2"><FaCheck /> E-Commerce Product</li>
                <li className="flex items-center gap-2"><FaCheck /> Fashion Shows</li>
                <li className="flex items-center gap-2"><FaCheck /> Newborn Photography</li>
                <li className="flex items-center gap-2"><FaCheck /> Birthdays</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Photo Retouching Services
              </h3>
              <ul>
                <li className="flex items-center gap-2"><FaCheck /> Create Canada Clipping Path</li>
                <li className="flex items-center gap-2"><FaCheck /> Photography Retouching</li>
                <li className="flex items-center gap-2"><FaCheck /> Wedding Photography Editing</li>
                <li className="flex items-center gap-2"><FaCheck /> Restore Old Photographs</li>
                <li className="flex items-center gap-2"><FaCheck /> Photoshop Retouching</li>
                <li className="flex items-center gap-2"><FaCheck /> Photo Editing for Photographers</li>
                <li className="flex items-center gap-2"><FaCheck /> Cut Out Photo</li>
                <li className="flex items-center gap-2"><FaCheck /> Real Estate Property Retouching</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Other Specific services
              </h3>
              <ul>
                <li className="flex items-center gap-2"><FaCheck /> Remove Wrinkles</li>
                <li className="flex items-center gap-2"><FaCheck /> Erase Spots and Blemishes</li>
                <li className="flex items-center gap-2"><FaCheck /> Hair Strands</li>
                <li className="flex items-center gap-2"><FaCheck /> Removal of Freckles</li>
                <li className="flex items-center gap-2"><FaCheck /> Teeth Whitening</li>
                <li className="flex items-center gap-2"><FaCheck /> Breast Enlargement</li>
                <li className="flex items-center gap-2"><FaCheck /> Body Modification</li>
                <li className="flex items-center gap-2"><FaCheck /> Tattoo Removal</li>
                <li className="flex items-center gap-2"><FaCheck /> Body Reshaping</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-4">
                Product Photo Editing
              </h3>
              <ul>
                <li className="flex items-center gap-2"><FaCheck /> Amazon</li>
                <li className="flex items-center gap-2"><FaCheck /> Online Stores in Canada</li>
                <li className="flex items-center gap-2"><FaCheck /> Google Shops</li>
                <li className="flex items-center gap-2"><FaCheck /> Websites</li>
                <li className="flex items-center gap-2"><FaCheck /> E-Commerce Websites</li>
                <li className="flex items-center gap-2"><FaCheck /> Online Shopping</li>
                <li className="flex items-center gap-2"><FaCheck /> Web Directories Canada</li>
                <li className="flex items-center gap-2"><FaCheck /> Jewelry Stores in Canada</li>
                <li className="flex items-center gap-2"><FaCheck /> Apparel Company in Canada</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      <section className="py-16 bg-[#f7f7f7] overflow-hidden timezone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-4">
              Adjustment To Your Timezone
            </h2>
            <div className="w-24 h-[2px] bg-[#c7010c] mx-auto mb-4"></div>
            <p className="mb-3">
              We'll work around your schedule wherever you are in the world, whether you're in Australia, the United States, or any point in between.
            </p>

          </div>
          <ServiceCards services={servicesData2} columns={2} />
        </div>
      </section>


      <CTA />

      <Footer />
    </main >
  );
}
