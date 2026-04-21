import React, { useState } from "react";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    title: "",
    plan: "",
    cell: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.title} ${formData.name} ${formData.surname}`,
          contact: `${formData.cell} | ${formData.email}`,
          message: `${formData.plan} - ${formData.message}`,
        }),
      });

      if (response.ok) {
        alert("Quote submitted successfully!");
        setFormData({
          name: "",
          surname: "",
          title: "",
          plan: "",
          cell: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to submit quote.");
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div
        className="w-full h-40 sm:h-52 bg-red-700 bg-cover bg-center flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-10"
        style={{ backgroundImage: "url('your-image-url.jpg')" }}
      >
        Get a Quote
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold uppercase tracking-wide mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name here"
              className="w-full border-2 border-red-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Surname */}
          <div>
            <label
              htmlFor="surname"
              className="block text-sm font-semibold uppercase tracking-wide mb-2"
            >
              Surname
            </label>
            <input
              id="surname"
              type="text"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your surname here"
              className="w-full border-2 border-red-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold uppercase tracking-wide mb-2"
            >
              Title
            </label>
            <select
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border-2 border-red-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <option value="">Select</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Mrs">Mrs</option>
              <option value="Mr">Mr</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          {/* Plan */}
          <div>
            <label
              htmlFor="plan"
              className="block text-sm font-semibold uppercase tracking-wide mb-2"
            >
              Plan
            </label>
            <select
              id="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full border-2 border-red-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <option value="">Select</option>
              <option value="Plan A">Plan A</option>
              <option value="Plan B">Plan B</option>
              <option value="Plan C">Plan C</option>
            </select>
          </div>

          {/* Cell Number */}
          <div>
            <label
              htmlFor="cell"
              className="block text-sm font-semibold uppercase tracking-wide mb-2"
            >
              Cell Number
            </label>
            <input
              id="cell"
              type="text"
              value={formData.cell}
              onChange={handleChange}
              placeholder="Enter your Cell Number here"
              className="w-full border-2 border-red-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold uppercase tracking-wide mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email here"
              className="w-full border-2 border-red-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold uppercase tracking-wide mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here"
              className="w-full border-2 border-red-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-700"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center sm:justify-end">
            <button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 rounded-md uppercase tracking-wide hover:bg-red-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
