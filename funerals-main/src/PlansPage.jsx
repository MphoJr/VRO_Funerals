import React from "react";

export default function PlansPage() {
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

  const banks = [
    {
      title: "First National Bank",
      details: {
        "Bank Name": "First National Bank",
        "Acc Holder": "VRO Funeral Parlour",
        "Acc Type": "Business Account",
        "Acc No": "62924664221",
        "Branch Name": "Thavhani Mall",
        "Branch No": "210853",
      },
    },
    {
      title: "Capitec Business",
      details: {
        "Bank Name": "Capitec Business",
        "Acc Holder": "VRO Funeral Parlour",
        "Acc Type": "Business Account",
        "Acc No": "1053007922",
        "Branch Name": "Relationship Suite",
        "Branch No": "450105",
      },
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div
        className="w-full h-32 sm:h-52 bg-red-700 bg-cover bg-center flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-8"
        style={{ backgroundImage: "url('your-image-url.jpg')" }}
      >
        PLANS
      </div>

      {/* Plans Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow-md p-6 text-center transition-transform duration-200 hover:-translate-y-1 ${
              plan.featured
                ? "bg-red-700 text-white scale-105"
                : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">{plan.name}</h2>
            <p
              className={`text-lg sm:text-xl font-semibold mb-4 ${
                plan.featured ? "text-white" : "text-gray-700"
              }`}
            >
              {plan.price}
            </p>
            <ul className="space-y-2 text-sm sm:text-base">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bank Details Section */}
      <div className="bg-white max-w-4xl mx-auto rounded-lg shadow-md p-6 sm:p-8 mb-16">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-5xl font-bold text-red-700">
            BANK DETAILS
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">MONTHLY REMINDER</p>
          <p className="text-gray-600 text-sm sm:text-base">
            REF: Surname and Initials with the first 4 ID number
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {banks.map((bank, idx) => (
            <div key={idx} className="border rounded-lg p-4 sm:p-6 text-left">
              <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-red-700">
                {bank.title}
              </h2>
              {Object.entries(bank.details).map(([label, value], i) => (
                <p key={i} className="text-sm sm:text-lg mb-2">
                  <span className="font-semibold">{label}:</span> {value}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
