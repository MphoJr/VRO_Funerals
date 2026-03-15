import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="w-full h-40 sm:h-48 bg-red-700 flex items-center justify-center text-white text-3xl sm:text-5xl font-bold text-center">
        Contact Us
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-red-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-xl">
            We’re here to answer your questions and provide support. Reach out
            to us through any of the following channels:
          </p>
          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            <li>
              <span className="font-semibold">Phone:</span> +27 12 345 6789
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              info@vrofunerals.co.za
            </li>
            <li>
              <span className="font-semibold">Address:</span> Thavhani Mall,
              Limpopo, South Africa
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/vroFuneralsAndTombstones?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-800 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/vro_funeral_parlour?igsh=OXFkZDNpcXpraGIx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-800 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@@vro_funerals?_t=ZS-8ybDJY2aMm9&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-800 transition"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-2xl sm:text-4xl font-semibold text-red-700 mb-6">
            Send Us a Message
          </h2>
          {status && (
            <div className="mb-4 text-center text-sm font-medium text-red-700">
              {status}
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-base sm:text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-700 focus:border-red-700"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base sm:text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-700 focus:border-red-700"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-base sm:text-lg font-medium text-gray-700"
              >
                Phone (optional)
              </label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-700 focus:border-red-700"
                placeholder="+27..."
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base sm:text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-700 focus:border-red-700"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
