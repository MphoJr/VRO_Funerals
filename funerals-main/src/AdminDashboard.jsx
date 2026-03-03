import React from "react";

export default function AdminDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6 text-center sm:text-left">
          Admin Dashboard
        </h1>

        {/* Overview */}
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6">
          <p className="text-gray-700 text-center sm:text-left">
            Welcome, Admin. Here you can manage clients, plans, and monitor
            system activity.
          </p>
        </div>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">
              Manage Clients
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              View, edit, or remove client accounts.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">
              Plans Management
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Create, update, or delete funeral plans.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-red-700 mb-3">
              Reports
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              View system usage and financial reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
