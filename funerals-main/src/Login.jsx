import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (role) => {
    const endpoint =
      role === "client"
        ? "http://localhost:5000/client/login"
        : "http://localhost:5000/admin/login";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        // Save token in localStorage
        localStorage.setItem("token", data.token);

        // Redirect to dashboard
        navigate(role === "client" ? "/client-dashboard" : "/admin-dashboard");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <form className="space-y-4">
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => handleLogin("client")}
          className="flex-1 bg-red-700 text-white py-2 rounded"
        >
          Client Login
        </button>
        <button
          type="button"
          onClick={() => handleLogin("admin")}
          className="flex-1 bg-gray-700 text-white py-2 rounded"
        >
          Admin Login
        </button>
      </div>
    </form>
  );
}
