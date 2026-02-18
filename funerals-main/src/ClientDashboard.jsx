import React from "react";

const ClientDashboard = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:5000/client/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching dashboard:", err);
  }
};
export default function ClientDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-red-700 mb-6">
          Client Dashboard
        </h1>

        {/* Welcome */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <p className="text-gray-700">
            Welcome back! Here you can manage your funeral plans, view services,
            and request quotes.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-4">
              My Plans
            </h2>
            <p className="text-gray-600">
              View and manage your subscribed funeral plans.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-4">
              Services
            </h2>
            <p className="text-gray-600">
              Browse available services and add-ons.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-700 mb-4">
              Get a Quote
            </h2>
            <p className="text-gray-600">
              Request a personalized funeral plan quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
