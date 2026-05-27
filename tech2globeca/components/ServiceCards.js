import React from 'react';



const colClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

const ServiceCards = ({ services = [], columns = 3 }) => {
  return (
    <section className="pt-0 pb-[3.2rem] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`grid ${colClasses[columns] ?? colClasses[3]} gap-6`}>
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 p-8 flex flex-col items-center text-center transition-all hover:shadow-lg duration-300"
            >
              <div className="mb-4 flex justify-center items-center">
                <div className="w-32 h-32 rounded-full bg-[#f8f9fa] flex items-center justify-center">
                  <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#c7010c] flex items-center justify-center shadow-md">
                    {service.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-[1.35rem] font-semibold text-[#c7010c] mb-3">
                {service.title}
              </h3>

              <p className="text-[#444444] text-[15px] leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
