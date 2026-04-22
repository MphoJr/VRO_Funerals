import React, { useState, useEffect } from "react";
import ClientRegistration from "./ClientRegistration"; // 👈 import

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("quotes");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async (endpoint) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:4000/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      if (res.ok) {
        setData(result);
        setError("");
      } else {
        setError(result.error || "Failed to fetch data");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  useEffect(() => {
    if (activeTab === "quotes") fetchData("quotes");
    if (activeTab === "claims") fetchData("claims");
    if (activeTab === "contact") fetchData("contact");
    if (activeTab === "clients") fetchData("clients"); // 👈 new endpoint
  }, [activeTab]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("quotes")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "quotes" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Quotes
        </button>
        <button
          onClick={() => setActiveTab("claims")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "claims" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Claims
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "contact" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Contact Messages
        </button>
        <button
          onClick={() => setActiveTab("clients")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "clients" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Clients
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "register" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Register Client
        </button>
      </div>

      {/* Content */}
      <div className="bg-white shadow-md rounded-lg p-4">
        {activeTab === "register" ? (
          <ClientRegistration /> // 👈 embedded form
        ) : (
          <>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            {data.length === 0 ? (
              <p className="text-gray-600">No records found.</p>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-red-700 text-white">
                    {activeTab === "quotes" && (
                      <>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Contact</th>
                        <th className="p-2 text-left">Message</th>
                        <th className="p-2 text-left">Date</th>
                      </>
                    )}
                    {activeTab === "claims" && (
                      <>
                        <th className="p-2 text-left">Member</th>
                        <th className="p-2 text-left">Description</th>
                        <th className="p-2 text-left">Status</th>
                        <th className="p-2 text-left">Date</th>
                      </>
                    )}
                    {activeTab === "contact" && (
                      <>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Phone</th>
                        <th className="p-2 text-left">Message</th>
                        <th className="p-2 text-left">Date</th>
                      </>
                    )}
                    {activeTab === "clients" && (
                      <>
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Username</th>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Created At</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="border-b">
                      {activeTab === "quotes" && (
                        <>
                          <td className="p-2">{item.name}</td>
                          <td className="p-2">{item.contact}</td>
                          <td className="p-2">{item.message}</td>
                          <td className="p-2">
                            {new Date(item.createdAt).toLocaleString()}
                          </td>
                        </>
                      )}
                      {activeTab === "claims" && (
                        <>
                          <td className="p-2">{item.member?.name}</td>
                          <td className="p-2">{item.description}</td>
                          <td className="p-2">{item.status}</td>
                          <td className="p-2">
                            {new Date(item.createdAt).toLocaleString()}
                          </td>
                        </>
                      )}
                      {activeTab === "contact" && (
                        <>
                          <td className="p-2">{item.name}</td>
                          <td className="p-2">{item.email}</td>
                          <td className="p-2">{item.phone || "-"}</td>
                          <td className="p-2">{item.message}</td>
                          <td className="p-2">
                            {new Date(item.createdAt).toLocaleString()}
                          </td>
                        </>
                      )}
                      {activeTab === "clients" && (
                        <>
                          <td className="p-2">{item.id}</td>
                          <td className="p-2">{item.username}</td>
                          <td className="p-2">{item.email}</td>
                          <td className="p-2">
                            {new Date(item.createdAt).toLocaleString()}
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
}
