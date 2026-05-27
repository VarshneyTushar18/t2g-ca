import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Cookies Policy | Tech2Globe Canada",
  description:
    "Learn about how Tech2Globe uses cookies on our website, what types of cookies we use, and your choices regarding cookies.",
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

export default function CookiesPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <PageHeader title="Cookies Policy" breadcrumbs={breadcrumbs} />

      {/* Cookies Policy Content */}
      <section className="bg-white py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            COOKIES POLICY
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Our company, Tech2Globe, and its affiliates (collectively, &ldquo;us,&rdquo; &ldquo;we,&rdquo; or &ldquo;our&rdquo;) use cookies on the website{" "}
            <Link
              href="https://tech2globe.ca/"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tech2globe.ca/
            </Link>
            . By using the [website], you consent to the use of cookies. Our Cookies Policy explains what cookies are, how we use cookies, how third parties we may partner with may use cookies on the{" "}
            <Link
              href="https://tech2globe.ca/"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tech2globe.ca/
            </Link>
            , your choices regarding cookies, and further information about cookies.
          </p>

          {/* What Are Cookies */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            What Are Cookies
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Cookies are small text sent by your web browser on a website you visit. A cookie file is stored in your browser and allows the Service or a third party to recognize you and make your next visit easier and the Service more useful.
          </p>

          {/* Persistent or Session Cookies */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Cookies Can Be &ldquo;Persistent&rdquo; Or &ldquo;Session&rdquo; Cookies.
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-2">
            How Tech2Globe uses cookies?
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
            When you use and access our site, we may place many cookies in your web browser.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base leading-relaxed mb-6 ml-4 space-y-1">
            <li>To enable certain functions of the website</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable ad delivery and behavioural advertising</li>
          </ul>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            We use both session and persistent cookies on the{" "}
            <Link
              href="https://tech2globe.ca/"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tech2globe.ca/
            </Link>
            , and we use different types of cookies to run the website:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base leading-relaxed mb-8 ml-4 space-y-1">
            <li>
              Essential cookies. We may use necessary cookies to authenticate users and prevent fraudulent use of user accounts.
            </li>
          </ul>

          {/* Using Third Party Cookies */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Using Third Party Cookies
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            We may also use third-party cookies on the site for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base leading-relaxed mb-8 ml-4 space-y-1">
            <li>To track the success of our marketing campaigns</li>
            <li>To serve targeted advertisements to you</li>
          </ul>

          {/* Your Choices Regarding Cookies */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            What Are Your Choices Regarding Cookies?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display correctly.
          </p>

          {/* Children's Information */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Children&apos;s Information
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            Our Service does not address anyone under 13 (&ldquo;Children&rdquo;).
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            We do not knowingly collect personally identifiable information from anyone under 13. Please get in touch with us if you are a parent or guardian and know that your Children have provided us with Personal Data. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
          </p>

          {/* Changes to this Cookies Policy */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            Changes to this Cookies Policy
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            We encourage you to review this Cookies Policy periodically for any changes. Changes to this Cookies Policy are effective when posted on this page.
          </p>

          {/* Divider */}
          <hr className="border-gray-300 my-10" />

          {/* Contact Us */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 uppercase">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            If you have any questions about our Cookies Policy, please get in touch with us:
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
