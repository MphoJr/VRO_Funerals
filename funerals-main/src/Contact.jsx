import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="w-full h-48 bg-red-700 flex items-center justify-center text-white text-5xl font-bold">
        Contact Us
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-semibold text-red-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 text-xl">
            We’re here to answer your questions and provide support. Reach out
            to us through any of the following channels:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold text-xl">Phone:</span> +27 12 345
              6789
            </li>
            <li>
              <span className="font-semibold text-xl">Email:</span>{" "}
              info@vrofunerals.co.za
            </li>
            <li>
              <span className="font-semibold text-xl">Address:</span> Thavhani
              Mall, Limpopo, South Africa
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/vroFuneralsAndTombstones?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-800"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/vro_funeral_parlour?igsh=OXFkZDNpcXpraGIx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-800"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@@vro_funerals?_t=ZS-8ybDJY2aMm9&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white hover:bg-red-800"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-semibold text-red-700 mb-6">
            Send Us a Messagen
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-700 focus:border-red-700"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-red-700 focus:border-red-700"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
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
