import React from "react";

export default function Plans() {
  const plans = [
    {
      name: "Plan A",
      price: "R100 PER MONTH",
      features: [
        "Tombstone",
        "Storage",
        "Caskets",
        "Grave Decoration",
        "Hearse",
        "Family Cars",
        "Radio Announcement",
        "Refreshment",
        "Programs",
        "Chairs",
        "Cash back",
      ],
    },
    {
      name: "Plan C",
      price: "R200 PER MONTH",
      features: [
        "VIP Tombstone",
        "VIP Storage",
        "VIP Caskets",
        "VIP Grave Decoration",
        "VIP Hearse",
        "VIP Family Cars",
        "VIP Refreshment",
        "VIP Programs",
        "VIP Chairs",
        "Sound system",
        "Radio Announcement",
        "Cash back",
      ],
      featured: true,
    },
    {
      name: "Plan B",
      price: "R150 PER MONTH",
      features: [
        "Tombstone",
        "Storage",
        "Caskets",
        "Grave Decoration",
        "Hearse",
        "Family Cars",
        "Radio Announcement",
        "Refreshment",
        "Programs",
        "Chairs",
        "Cash back",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-8 py-12">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-10">
        Our Plans
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 text-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md p-6 sm:p-8 transition-transform duration-200 hover:-translate-y-1 ${
              plan.featured
                ? "bg-red-700 text-white border-4 border-red-800 scale-105"
                : "bg-white"
            }`}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h2>
            <p
              className={`text-lg sm:text-xl font-semibold mb-4 ${
                plan.featured ? "text-white" : "text-gray-800"
              }`}
            >
              {plan.price}
            </p>
            <ul className="list-none space-y-2 mb-6 text-sm sm:text-base">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                plan.featured
                  ? "bg-white text-red-700 hover:bg-gray-200"
                  : "bg-red-700 text-white hover:bg-red-800"
              }`}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
