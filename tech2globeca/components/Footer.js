"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-white text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-[3.2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: About & Social */}
        <div className="flex flex-col gap-6">
          <Image
            src="/images/tech2globe-logo.png"
            alt="Tech2Globe Logo"
            width={320}
            height={148}
            className="w-48 h-auto"
          />
          <p className="text-gray-600 leading-relaxed">
            We specialize in digital marketing, website development and mobile development. Our team of professionals have years of experience helping businesses like yours succeed through the power of technology.
          </p>
          <div>
            <h4 className="font-semibold mb-4 uppercase text-black">Social Links</h4>
            <div className="flex gap-4 text-black">
              <a href="#" className="hover:text-[#c7010c] transition-colors"><FaFacebookF size={18} /></a>
              <a href="#" className="hover:text-[#c7010c] transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-[#c7010c] transition-colors"><FaLinkedinIn size={18} /></a>
              <a href="#" className="hover:text-[#c7010c] transition-colors"><FaInstagram size={18} /></a>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-semibold mb-6 uppercase text-black">Services</h4>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li><a href="#" className="hover:text-[#c7010c] transition-colors">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-[#c7010c] transition-colors">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-[#c7010c] transition-colors">Medical Data Entry</a></li>
            <li><a href="#" className="hover:text-[#c7010c] transition-colors">App Development</a></li>
            <li><a href="#" className="hover:text-[#c7010c] transition-colors">Amazon Marketing</a></li>
            <li><a href="#" className="hover:text-[#c7010c] transition-colors">Ecommerce Services</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links & Badges */}
        <div>
          <h4 className="font-semibold mb-6 uppercase text-black">Useful Links</h4>
          <ul className="flex flex-col gap-3 text-gray-600 mb-8">
            <li><a href="/terms-and-conditions" className="hover:text-[#c7010c] transition-colors">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-[#c7010c] transition-colors">Privacy Policy</a></li>
            <li><a href="/cookies-policy" className="hover:text-[#c7010c] transition-colors">Cookies Policy</a></li>
            <li><a href="https://tech2globe.com/career" target="_blank" className="hover:text-[#c7010c] transition-colors">Careers</a></li>
            <li><a href="/contact-us" className="hover:text-[#c7010c] transition-colors">Contact Us</a></li>
          </ul>

          <div className="flex flex-col gap-4">
            {/* Note: Placeholders for the images. You would replace src with actual paths when available */}
            <div className="flex items-center gap-2 font-semibold text-gray-700 text-xs">
              <span className="text-green-600">✔</span> TOP DIGITAL AGENCY
            </div>

            <div>
              <h5 className="font-semibold text-xs mb-2">Featured In</h5>
              <div className="flex items-center gap-4">
                {/* Using divs as placeholders for the partner/featured logos */}

                <Image
                  src="/images/chamber-logo.png"
                  alt="chamber logo"
                  width={80}
                  height={42}
                />

                <Image
                  src="/images/Nanaimo-Chamber-Certificate.jpg"
                  alt="Nanaimo Chamber Certificate"
                  width={90}
                  height={52}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="font-semibold mb-6 uppercase text-black">Contact Info</h4>
          <div className="flex flex-col gap-6 text-gray-600">
            <div>
              <p className="font-semibold text-gray-800">Canada</p>
              <p>975 Mid-Way Blvd UNIT 12,<br />Mississauga, ON L5T 2C6,<br />Canada</p>
              <p className="mt-1"><span className="font-semibold">Phone :</span> +1-516-858-4836</p>
              <p><span className="font-semibold">Email :</span> info@tech2globe.ca</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Canada</p>
              <p>3620 3rd Avenue,<br />Port Alberni V9Y 4E8</p>
              <p className="mt-1"><span className="font-semibold">Phone :</span> +1-778-382-9628</p>
              <p><span className="font-semibold">Email :</span> info@tech2globe.ca</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">USA</p>
              <p>1538, Old Country Road,<br />Plainview, New York, 11803</p>
              <p className="mt-1"><span className="font-semibold">Phone :</span> +1-516-858-5840</p>
              <p><span className="font-semibold">Email :</span> info@tech2globe.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© Copyright 2026 by Tech2Globe.ca</p>
          <div className="flex gap-2 mt-2 md:mt-0">
            <a href="/terms-and-conditions" className="hover:text-gray-800 transition-colors">Terms and Conditions</a>
            <span>|</span>
            <a href="/privacy-policy" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-gray-400 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
