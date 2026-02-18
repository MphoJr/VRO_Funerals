import React from "react";
import slideImage from "./assets/slide3.jpg"; // adjust path to where your image is stored

export default function FuneralSection() {
  return (
    <div className="flex items-center flex-wrap px-6 py-12 bg-red-700">
      {/* Text Section */}
      <div className="flex-1 p-6">
        <h1 className=" text-white text-3xl md:text-4xl font-bold mb-4 ">
          VRO FUNERAL PALOUR <br /> & TOMBSTONES
        </h1>
        <p className="text-lg mb-2 text-white">In your time of grief.</p>
        <p className="text-lg mb-2 text-white">
          We offer compassionate care and personalized services to honor the
          memory of your loved one.
        </p>
        <p className="text-lg mb-6 text-white">
          Our dedicated team is here to guide you through every step, ensuring a
          meaningful and dignified farewell.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 p-6">
        <img
          src={slideImage}
          alt="Funeral Services"
          className="w-[75%] max-w-full h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
}
