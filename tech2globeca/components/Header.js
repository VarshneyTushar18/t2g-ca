"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBars, FaTimes, FaChevronDown, FaSearch, FaMousePointer, FaMapMarkerAlt, FaBullhorn, FaPen, FaWrench, FaImage, FaPaintBrush, FaHandPointer, FaFileAlt, FaMobileAlt, FaCommentAlt, FaUser, FaAd, FaShoppingCart, FaWordpress } from "react-icons/fa";

const locations = [
  { name: "Toronto", href: "/digital-marketing-toronto" },
  { name: "Mississauga", href: "/digital-marketing-mississauga" },
  { name: "Calgary", href: "/digital-marketing-calgary" },
  { name: "Ottawa", href: "/digital-marketing-ottawa" },
  { name: "Ontario", href: "/digital-marketing-ontario" },
  { name: "Vancouver", href: "/digital-marketing-vancouver" },
];

const packages = [
  { name: "Business PPC Packages", href: "/business-service-ppc-packages" },
  { name: "Business SEO Packages", href: "/business-service-seo-packages" },
  { name: "Ecommerce PPC Packages", href: "/e-commerce-ppc-packages" },
  { name: "Ecommerce SEO Packages", href: "/ecommerce-seo-packages" },
  { name: "Local SEO Packages", href: "/local-seo-packages" },
  { name: "Performance Marketing", href: "/performance-marketing" },
  { name: "SMM Packages", href: "/smm-packages" },
  { name: "SMO SMM Packages", href: "/smo-smm-packages" },
];

const servicesData = [
  {
    title: "DIGITAL MARKETING",
    links: [
      { name: "Digital Marketing Agency", href: "/digital-marketing-agency", icon: <FaBullhorn className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "SEO Agency Toronto", href: "/seo-agency-toronto", icon: <FaSearch className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "PPC Management", href: "/ppc-management-services", icon: <FaMousePointer className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Local Seo", href: "/local-seo-services", icon: <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Social Media Marketing", href: "/social-media-marketing-services-services", icon: <FaTwitter className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Influencer Marketing", href: "/influencer-marketing-services", icon: <FaBullhorn className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Content Marketing", href: "/content-marketing-services", icon: <FaPen className="text-gray-400 mt-1 flex-shrink-0" /> },
    ]
  },
  {
    title: "UI/UX DESIGN",
    links: [
      { name: "Custom Web Development", href: "/custom-web-development-services", icon: <FaWrench className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Photo Editing", href: "/photo-editing-services", icon: <FaImage className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Web Development", href: "/web-development-agency", icon: <FaWrench className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Graphic Design", href: "/graphic-design-services", icon: <FaPaintBrush className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Interactive Design", href: "/interactive-design-services", icon: <FaHandPointer className="text-gray-400 mt-1 flex-shrink-0" /> },
    ]
  },
  {
    title: "BPO/KPO/DATA",
    links: [
      { name: "Medical Data Entry", href: "/medical-data-entry-services", icon: <FaFileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Restaurant Data Entry", href: "/restaurant-menu-data-entry-services", icon: <FaFileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Logistic & Transportation", href: "/logistic-transportation", icon: <FaFileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Financial And Accounting Services", href: "/financial-accounting-services", icon: <FaFileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Customer Onboarding Services", href: "/customer-onboarding-services", icon: <FaFileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Customer Data Migration Services", href: "/customer-data-migration-services", icon: <FaFileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Project Implementation Services", href: "/project-implementation-services", icon: <FaFileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
    ]
  },
  {
    title: "APP DEVELOPMENT",
    links: [
      { name: "Mobile App Development", href: "/mobile-app-development-services", icon: <FaMobileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "iPhone App Development", href: "/iphone-app-development", icon: <FaMobileAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
    ]
  },
  {
    title: "AMAZON MARKETING",
    links: [
      { name: "Amazon Marketing", href: "/amazon-marketing-services", icon: <FaCommentAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Amazon Consulting", href: "/amazon-consulting-services", icon: <FaCommentAlt className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Amazon FBA Consulting", href: "/amazon-fba-consulting-services-services", icon: <FaUser className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Amazon Seo Consultant", href: "/amazon-seo-consultant", icon: <FaSearch className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Amazon Ad Management", href: "/amazon-advertising-management", icon: <FaAd className="text-gray-400 mt-1 flex-shrink-0" /> },
    ]
  },
  {
    title: "ECOMMERCE SOLUTIONS",
    links: [
      { name: "Ecommerce Web Development", href: "/ecommerce-website-development", icon: <FaShoppingCart className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Magento Development", href: "/magento-development-services", icon: <FaShoppingCart className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Shopify Development", href: "/shopify-development-services", icon: <FaShoppingCart className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "WooCommerce Development", href: "/woocommerce-development-company-in-toronto", icon: <FaShoppingCart className="text-gray-400 mt-1 flex-shrink-0" /> },
      { name: "Wordpress Development", href: "/wordpress-development-agency", icon: <FaWordpress className="text-gray-400 mt-1 flex-shrink-0" /> },
    ]
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          <p className="hidden sm:block">
            CALL US +1-778-382-9628 | INFO@TECH2GLOBE.CA
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-sm">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/">
              <Image
                src="/images/tech2globe-logo.webp"
                alt="Tech2Globe Logo"
                width={340}
                height={168}
                className="h-8 w-auto md:h-10 lg:h-12 transition-all"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-700 text-[14px]">
            <Link href="/" className="hover:text-[#c7010c]">HOME</Link>
            <Link href="/about-us" className="hover:text-[#c7010c]">ABOUT US</Link>
            <div className="group">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#c7010c] focus:outline-none focus:text-[#c7010c]"
                aria-haspopup="true"
              >
                SERVICES
                <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              {/* Mega Menu Dropdown */}
              <div className="invisible absolute left-0 top-full z-50 w-full bg-[#2a2a2a] opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="max-w-[90rem] mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-t-2 border-[#c7010c]">
                  {servicesData.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-white font-semibold text-sm mb-4 uppercase text-[12px]">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <Link href={link.href} className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-[12px]">
                              {link.icon}
                              <span>{link.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#c7010c] focus:outline-none focus:text-[#c7010c]"
                aria-haspopup="true"
              >
                PACKAGES
                <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-[50px] z-50 min-w-[250px] bg-[#2a2a2a] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="border-t-2 border-[#c7010c] py-2">
                  {packages.map((pkg) => (
                    <Link
                      key={pkg.href}
                      href={pkg.href}
                      className="block px-5 py-3 text-[12px] text-gray-400 hover:text-white transition-colors"
                    >
                      {pkg.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#c7010c] focus:outline-none focus:text-[#c7010c]"
                aria-haspopup="true"
              >
                LOCATION
                <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-[50px] z-50 min-w-[250px] bg-[#2a2a2a] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="border-t-2 border-[#c7010c] py-2">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="block px-5 py-3 text-[12px] text-gray-400 hover:text-white transition-colors"
                    >
                      Digital Marketing {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/blog" className="hover:text-[#c7010c]">BLOGS</Link>
            <Link href="/contact-us" className="hover:text-[#c7010c]">CONTACT US</Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 px-4 pb-4">
            <nav className="flex flex-col gap-4 font-medium text-gray-700">
              <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)}>ABOUT US</Link>
              <div>
                <p
                  className="mb-2 flex items-center justify-between cursor-pointer"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  SERVICES <FaChevronDown className={`text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </p>
                {isServicesOpen && (
                  <div className="ml-4 flex flex-col gap-6 border-l border-gray-300 pl-4 text-[12px] mt-2">
                    {servicesData.map((section, idx) => (
                      <div key={idx}>
                        <p className="font-bold text-gray-800 mb-2 uppercase">{section.title}</p>
                        <div className="flex flex-col gap-3">
                          {section.links.map((link, linkIdx) => (
                            <Link
                              key={linkIdx}
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-start gap-2 text-gray-600 hover:text-[#c7010c]"
                            >
                              {link.icon}
                              <span>{link.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <p className="mb-2">PACKAGES</p>
                <div className="ml-4 flex flex-col gap-3 border-l border-gray-300 pl-4 text-[12px]">
                  {packages.map((pkg) => (
                    <Link
                      key={pkg.href}
                      href={pkg.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#c7010c]"
                    >
                      {pkg.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2">LOCATION</p>
                <div className="ml-4 flex flex-col gap-3 border-l border-gray-300 pl-4 text-[12px]">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#c7010c]"
                    >
                      Digital Marketing {location.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/blog" onClick={() => setIsOpen(false)}>BLOGS</Link>
              <Link href="/contact-us" onClick={() => setIsOpen(false)}>CONTACT US</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
