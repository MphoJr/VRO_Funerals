import React from "react";
import service1 from "./assets/service1.jpg";
import service2 from "./assets/service2.jpg";
import service3 from "./assets/service3.jpg";
import service4 from "./assets/service4.jpg";
import service7 from "./assets/service7.jpg";
import service6 from "./assets/service6.jpg";

export default function Services() {
  const services = [
    {
      image: service1,
      title: "Transportation & Repatriation",
      description:
        "We handle the transport of the deceased locally or internationally, ensuring all legal and logistical aspects are covered.",
    },
    {
      image: service2,
      title: "Policies",
      description:
        "Plan ahead with our prepaid funeral services to ease the financial and emotional burden on your family.",
    },
    {
      image: service3,
      title: "Casket Selection",
      description:
        "A variety of high-quality caskets to suit different traditions, preferences, and budgets.",
    },
    {
      image: service4,
      title: "Funeral Planning & Coordination",
      description:
        "We provide complete funeral planning services, ensuring a smooth and respectful farewell for your loved one.",
    },
    {
      image: service7,
      title: "Tombstones & Grave Markers",
      description:
        "Customizable headstones, plaques, and grave markers in various materials and designs.",
    },
    {
      image: service6,
      title: "Memorial & Burial",
      description:
        "We offer dignified burial and personalized memorial services, including tribute videos, photo displays, and special arrangements to honor your loved one’s legacy.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 py-12 bg-gray-100">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Text content */}
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-red-700 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
