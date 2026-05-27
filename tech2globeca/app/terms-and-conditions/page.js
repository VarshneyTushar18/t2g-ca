import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Tech2Globe Canada",
  description:
    "Read the terms and conditions for using Tech2Globe Canada website and services. Understand your rights, responsibilities, and our policies.",
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Terms And Conditions", href: "/terms-and-conditions" },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <PageHeader title="Terms And Conditions" breadcrumbs={breadcrumbs} />

      {/* Terms and Conditions Content */}
      <section className="bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Introduction
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            These terms and conditions (the &ldquo;Terms&rdquo;) apply to your use of this website (&ldquo;
            <Link
              href="https://tech2globe.ca/"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tech2globe.ca/
            </Link>
            &rdquo;) and all services and products available through the Site. You agree to be bound by these Terms by accessing and using the Site. Please do not use the Site if you disagree with these Terms.
          </p>

          {/* Changes to the Terms */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Changes to the Terms
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            We reserve the right to update and change these Terms from time to time without notice. Any changes will be effective immediately upon posting to{" "}
            <Link
              href="https://tech2globe.ca/"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tech2globe.ca/
            </Link>
            . Your continued use of the Site after such changes constitutes your acceptance of the new Terms.
          </p>

          {/* Eligibility */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Eligibility
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            The Site is intended for users 18 years or older. By using the Site, you represent and warrant that you are 18 years of age or older and have the legal capacity to enter into a binding agreement.
          </p>

          {/* Use of the Site */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Use of the Site
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            You may use the Site and its content only for lawful purposes and following these Terms. You agree not to use the Site:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base leading-relaxed mb-8 ml-4 space-y-2">
            <li>For any fraudulent or unlawful purpose</li>
            <li>To transmit or distribute a virus or any other harmful component.</li>
            <li>To trouble, abuse, or harm another person.</li>
            <li>To violate any applicable local, provincial, national, or international law.</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
          </ul>

          {/* Intellectual Property */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Intellectual Property
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            The Site and its content, including but not limited to text, graphics, logos, images, and software, are the property of Tech2Globe Canada and are protected by Canadian and international copyright and trademark laws. You may not use any content on the Site for commercial purposes without the express written consent of Tech2Globe Canada.
          </p>

          {/* User Submissions */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            User Submissions
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Any information or materials you submit to the Site, including but not limited to comments, reviews, and suggestions (collectively, &ldquo;User Submissions&rdquo;), will be treated as non-confidential and non-proprietary. By submitting User Submissions to the Site, you grant Tech2Globe Canada a perpetual, irrevocable, royalty-free, transferable right and licence to use, copy, modify, delete in its entirety, adapt, publish, translate, create derivative works from, or sell or distribute such User Submissions or incorporate such User Submissions into any form, medium, or technology throughout the world without compensation to you.
          </p>

          {/* Disclaimer of Warranties */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Disclaimer of Warranties
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            The Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Tech2Globe Canada makes no representations or warranties, express or implied, regarding the{" "}
            <Link
              href="https://tech2globe.ca/"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tech2globe.ca/
            </Link>
            {" "}operation or the information, content, materials, or products included. Tech2Globe Canada does not warrant that the Site or its content will be uninterrupted or error-free.
          </p>

          {/* Limitation of Liability */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Limitation of Liability
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Tech2Globe Canada will not be liable for any damages arising from the Site&apos;s users, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
          </p>

          {/* Indemnification */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Indemnification
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            You agree to indemnify and hold Tech2Globe Canada and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorney&apos;s fees, made by any third party due to or arising out of your use of the Site, your violation of these Terms, or your violation of any rights of another.
          </p>

          {/* Governing Law */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Governing Law
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            These Terms and your use of{" "}
            <Link
              href="https://tech2globe.ca/"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tech2globe.ca/
            </Link>
            {" "}will be governed by and construed per the laws of the Province of Ontario.
          </p>

          {/* Divider */}
          <hr className="border-gray-300 my-10" />

          {/* Contact Us */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 uppercase">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            If you have any questions about our Terms and Conditions, please get in touch with us:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Canada - Mississauga */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Canada</h4>
              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-1">
                <p>
                  <span className="font-semibold">By email :</span>{" "}
                  <Link
                    href="mailto:info@tech2globe.ca"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@tech2globe.ca
                  </Link>
                </p>
                <p>
                  <span className="font-semibold">By phone number :</span>{" "}
                  +1-516-858-4836
                </p>
                <p>
                  <span className="font-semibold">Address :</span> 975 Mid-Way Blvd UNIT 12, Mississauga,
                </p>
                <p>ON L5T 2C6, Canada</p>
              </div>
            </div>

            {/* Canada - Port Alberni */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Canada</h4>
              <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-1">
                <p>
                  <span className="font-semibold">By email :</span>{" "}
                  <Link
                    href="mailto:info@tech2globe.ca"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@tech2globe.ca
                  </Link>
                </p>
                <p>
                  <span className="font-semibold">By phone number :</span>{" "}
                  +1-778-382-9628
                </p>
                <p>
                  <span className="font-semibold">Address :</span> 3108 2nd Avenue, Port Alberni,
                </p>
                <p>V9Y 4C3, Canada</p>
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
