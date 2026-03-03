import React from "react";

export default function GetQuote() {
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
        <form method="post" className="space-y-6">
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
