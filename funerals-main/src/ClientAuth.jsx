import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientAuth({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/auth/client/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);

        if (onLoginSuccess) {
          onLoginSuccess(); // update parent state
        }

        navigate("/client/dashboard"); // 👈 redirect here
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Client login error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Client Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-red-700 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
