import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Thank You - Tech2Globe Canada",
  description: "Thank you for contacting Tech2Globe Canada.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f7f7]">
      <Header />

      <section className="pt-36 pb-20 px-4">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-8 md:p-12 text-center">
          <div className="flex justify-center mb-7">
            <Image
              src="/images/logo.svg"
              alt="Tech2Globe"
              width={320}
              height={96}
              priority
            />
          </div>

          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl">
            ✓
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Thank You for Contacting Us
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our team will get back to you within 1 business day.
            <br />
            Please check your junk e-mail folder and your voicemail inbox to ensure our communication is not blocked.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg px-5 py-4 text-gray-800 mb-8">
            If you do not hear from us within 1 business day, please send an email to{" "}
            <a className="font-semibold text-[#c7010c]" href="mailto:info@tech2globe.ca">
              info@tech2globe.ca
            </a>
            . We will assist you as soon as possible.
          </div>

          <Link
            href="/"
            className="inline-block bg-[#f12d1e] hover:bg-[#dd2618] text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Find out more about our services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
