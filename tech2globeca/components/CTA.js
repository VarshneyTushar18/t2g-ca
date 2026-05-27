export default function CTA() {
  return (
    <section className="bg-[#c7010c] py-[2.4rem]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-8">
          Discover How We Can Help Your Business Grow
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:info@tech2globe.ca"
            className="px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-[#c7010c] transition-colors"
          >
            SEND A MAIL
          </a>
          <a
            href="tel:+1-516-858-5840"
            className="px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-[#c7010c] transition-colors"
          >
            GIVE A CALL
          </a>
        </div>
      </div>
    </section>
  );
}
