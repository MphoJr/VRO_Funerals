import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (role) => {
    // Match backend endpoints: /auth/client/login and /auth/admin/login
    const endpoint =
      role === "client"
        ? "http://localhost:4000/auth/client/login"
        : "http://localhost:4000/auth/admin/login";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        // Save JWT token
        localStorage.setItem("token", data.token);
        // Navigate to dashboards
        navigate(role === "client" ? "/client-dashboard" : "/admin-dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-red-700 mb-6 text-center">
          Login
        </h1>
        {error && (
          <div className="mb-4 text-red-600 text-sm font-medium">{error}</div>
        )}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              type="button"
              onClick={() => handleLogin("client")}
              className="flex-1 bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
            >
              Client Login
            </button>
            <button
              type="button"
              onClick={() => handleLogin("admin")}
              className="flex-1 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Admin Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
