import { FiMapPin } from "react-icons/fi";

const locations = [
  { id: 1, name: "Toronto", icon: <FiMapPin /> },
  { id: 2, name: "Mississauga", icon: <FiMapPin /> },
  { id: 3, name: "Calgary", icon: <FiMapPin /> },
  { id: 4, name: "Ottawa", icon: <FiMapPin /> },
  { id: 5, name: "Ontario", icon: <FiMapPin /> },
  { id: 6, name: "Vancouver", icon: <FiMapPin /> },
];

export default function AvailableLocations({
  title = "We Are Available To The Nearest Of You",
  subtitle = "Empowering your brand through digital excellence"
}) {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
            {title}
          </h2>
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
          <p className="text-[#c7010c] text-lg font-medium mt-4">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group relative bg-gray-50 p-6 rounded-none border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-lg hover:shadow-red-600/10 hover:-translate-y-1 overflow-hidden flex flex-col items-center text-center justify-center"
            >
              {/* Decorative Background Element */}
              <div className="absolute -right-4 -bottom-4 text-gray-200 text-8xl transform rotate-12 transition-all duration-700 group-hover:rotate-0 group-hover:text-red-50/50 pointer-events-none">
                {location.icon}
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-[#222222] mb-3 uppercase tracking-tight">
                  {location.name}
                </h3>

                <div className="w-12 h-[2px] bg-red-100 group-hover:w-16 group-hover:bg-[#c7010c] transition-all duration-700 mb-4 rounded-none mx-auto"></div>
              </div>

              <div className="relative z-10">
                <a
                  href={`#`}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#222222] group-hover:text-[#c7010c] transition-colors uppercase tracking-widest"
                >
                  Explore Services
                  <span className="w-6 h-[1px] bg-[#222222] group-hover:bg-[#c7010c] transition-all duration-500 transform origin-left group-hover:scale-x-125"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
