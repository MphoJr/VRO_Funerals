import React from "react";
import slideImage from "./assets/slide3.jpg"; // adjust path to where your image is stored

export default function FuneralSection() {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 sm:px-6 py-10 sm:py-12 bg-red-700">
      {/* Text Section */}
      <div className="flex-1 p-4 sm:p-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          VRO FUNERAL PARLOUR <br /> & TOMBSTONES
        </h1>
        <p className="text-base sm:text-lg mb-2 text-white">
          In your time of grief.
        </p>
        <p className="text-base sm:text-lg mb-2 text-white">
          We offer compassionate care and personalized services to honor the
          memory of your loved one.
        </p>
        <p className="text-base sm:text-lg mb-6 text-white">
          Our dedicated team is here to guide you through every step, ensuring a
          meaningful and dignified farewell.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 p-4 sm:p-6 flex justify-center">
        <img
          src={slideImage}
          alt="Funeral Services"
          className="w-full max-w-md md:max-w-lg h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
}
