import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "System Prototyping(UI)",
    description: "Developing Mockups",
  },
];

function Service() {
  return (
    <div className="bg-stone-800 text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <div key={service.id} className="bg-stone-600 px-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400">
                        {service.id}
                    </div>
                    <h3 className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-500">{service.title}</h3>
                    <p className="mt-2 text-gray-300">{service.description}</p>
                    <a href="#" className="mt-4 inline-block text-emerald-400 hover:text-sky-500">Read More ...</a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
