import { FiBook, FiHome, FiShoppingCart } from "react-icons/fi";
import { FaHeartbeat, FaBus, FaStore, FaUtensils, FaPlane } from "react-icons/fa";

const defaultIndustries = [
  { id: 1, title: "Financial & Accounting", icon: <FiBook className="text-[#c7010c] text-4xl" /> },
  { id: 2, title: "Medical & Healthcare", icon: <FaHeartbeat className="text-[#c7010c] text-4xl" /> },
  { id: 3, title: "Transportation", icon: <FaBus className="text-[#c7010c] text-4xl" /> },
  { id: 4, title: "Retail Industry", icon: <FaStore className="text-[#c7010c] text-4xl" /> },
  { id: 5, title: "Real Estate", icon: <FiHome className="text-[#c7010c] text-4xl" /> },
  { id: 6, title: "Ecommerce", icon: <FiShoppingCart className="text-[#c7010c] text-4xl" /> },
  { id: 7, title: "Food & Restaurant", icon: <FaUtensils className="text-[#c7010c] text-4xl" /> },
  { id: 8, title: "Travel & Transportation", icon: <FaPlane className="text-[#c7010c] text-4xl" /> }
];

export default function Industries({
  industries = defaultIndustries,
  title = "Industries We Served",
  subtitle
}) {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#222222]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#c7010c] text-base md:text-lg font-medium mb-4 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-[3px] bg-[#c7010c] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
          {industries.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 transition-transform group-hover:scale-110 duration-300">
                {item.icon}
              </div>
              <h3 className="text-gray-700 text-sm md:text-base font-medium px-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
