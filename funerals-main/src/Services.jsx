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
    <div className="px-8 py-12 bg-gray-100">
      <h2 className="text-6xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:bg-red-700 hover:shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center transition-colors duration-300 hover:text-white">
              <h3 className="text-4xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-xl leading-relaxed  hover:text-white">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
