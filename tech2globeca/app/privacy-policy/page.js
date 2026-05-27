import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Tech2Globe Canada",
  description:
    "Learn how Tech2Globe collects, uses, and shares information about you when you use our website, mobile application, and other online products and services.",
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <PageHeader title="Privacy Policy" breadcrumbs={breadcrumbs} />

      {/* Privacy Policy Content */}
      <section className="bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Privacy Policy
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            This privacy policy (the &ldquo;Policy&rdquo;) explains how Tech2Globe (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares information about you when you use our website, mobile application, and other online products and services (collectively, the &ldquo;Services&rdquo;). Using our Services, you agree to the collection, use, and sharing of your information as described in this Policy. If you disagree with our policies and practices, do not use our Services.
          </p>

          {/* Information We Collect */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Information We Collect
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            We collect information about you in the following ways:
          </p>
          <ul className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 ml-4 space-y-3">
            <li>
              <span className="font-semibold text-gray-800">Information you provide :</span> We may collect your information directly, such as your name, email address, and phone number.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Information we collect automatically :</span> When you use our Services, we may automatically collect certain information about your device and usage of our Services. This may include your IP address, device type, browser type, operating system, and information about your use of our Services.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Information we collect from third parties :</span> We may also receive information about you from third parties, such as social media platforms, advertising partners, and analytics providers.
            </li>
          </ul>

          {/* Use of Your Information */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Use of Your Information
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            We may use the information we collect about you for the following purposes:
          </p>
          <ul className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 ml-4 space-y-3">
            <li>
              <span className="font-semibold text-gray-800">To provide and maintain our Services :</span> We use the information we collect to provide, maintain, and improve our Services.
            </li>
            <li>
              <span className="font-semibold text-gray-800">To communicate with you :</span> We may use the information we collect to share, such as to send you updates or newsletters.
            </li>
            <li>
              <span className="font-semibold text-gray-800">To personalize your experience :</span> We may use the information we collect to personalize your experience on our Services, such as by providing customized recommendations or content.
            </li>
            <li>
              <span className="font-semibold text-gray-800">To analyze and improve our Services :</span> We may use the information we collect to analyze and improve our Services, such as by conducting market research or analyzing user behavior.
            </li>
          </ul>

          {/* Sharing Your Information */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Sharing Your Information
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            We may share the information we collect about you in the following ways:
          </p>
          <ul className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 ml-4 space-y-3">
            <li>
              <span className="font-semibold text-gray-800">With service providers :</span> We may share your information with third-party service providers that perform services on our behalf, such as hosting, analytics, and marketing.
            </li>
            <li>
              <span className="font-semibold text-gray-800">With business partners :</span> We may share your information with our business partners to provide our Services or for marketing purposes.
            </li>
            <li>
              <span className="font-semibold text-gray-800">With third parties for legal reasons :</span> We may also share your information with third parties if we believe that disclosure is reasonably necessary to comply with a law, regulation, or lawful request; to protect the safety, rights, or property of us, our users, or the public; or to detect, prevent, or otherwise address fraud, security, or technical issues.
            </li>
            <li>
              <span className="font-semibold text-gray-800">With your consent :</span> We may also share your information with third parties if you have provided your support for us to do so.
            </li>
          </ul>

          {/* Data Retention and Deletion */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Data Retention and Deletion
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            We will retain your information for as long as necessary to fulfill the purposes for which it was collected or as required by law. If you would like to request that we delete your information, please get in touch with us at the contact information below. Please note that we may be required to retain certain information for legal or regulatory purposes.
          </p>

          {/* Data Security */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Data Security
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            We take reasonable measures to protect the information we collect from loss, misuse, unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet or data storage system can be guaranteed 100% secure.
          </p>

          {/* What If The Personal Information We Have On File For You Is Incorrect? */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            What If The Personal Information We Have On File For You Is Incorrect?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            You can question the correctness or completeness of your Personal Information in our records at any time. If you successfully establish that your Personal Information in our database is incorrect or incomplete, we will make the necessary changes. If necessary, we will provide the updated information to third parties that have access to your Personal Information.
          </p>

          {/* Safeguards */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Safeguards
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            To safeguard your Personal Information from loss or theft, unauthorised access, disclosure, copying, use, or modification, we have established physical, organisational, contractual, and technological security measures. Employees with a business &lsquo;need-to-know&rsquo; or whose tasks properly need such information are the only ones who have access to your Personal Information. Secure socket layer technology is used on our website to protect credit card information input via online forms.
          </p>

          {/* How To Request Or Change Your Information? */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            How To Request Or Change Your Information?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            By contacting us, you can enquire about all of your personally identifiable information that we collect and retain online. This technique is used to better protect your information.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            You can resolve factual inaccuracies in your personally identifiable information by submitting a request that demonstrates the error credibly. We will also take reasonable steps to authenticate your identification before giving access or making modifications to preserve your privacy and security.
          </p>

          {/* Divider */}
          <hr className="border-gray-300 my-10" />

          {/* Contact Us */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 uppercase">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            If you have any questions about our Privacy Policy, please get in touch with us:
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
