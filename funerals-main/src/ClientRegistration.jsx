import React, { useState } from "react";

export default function ClientRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get admin token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in as an admin to register clients.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4000/auth/client/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // send admin JWT
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      if (response.ok) {
        alert("Client registered successfully!");
        setFormData({ name: "", surname: "", email: "", password: "" });
      } else {
        alert(data.error || "Failed to register client.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Register Client (Admin Only)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            id="surname"
            value={formData.surname}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
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
          Register Client
        </button>
      </form>
    </div>
  );
}
