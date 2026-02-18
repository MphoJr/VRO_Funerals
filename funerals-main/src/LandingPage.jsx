import React from "react";
import bannerImage from "./assets/Banner.jpg"; // adjust path if needed
import {
  HeartIcon,
  UserGroupIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import FuneralSection from "./funsec";
import Services from "./Services";
import Plans from "./Plans";

export default function LandingPage() {
  return (
    <div className="landing-page  bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative h-[60vh] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-6xl md:text-6xl font-bold mb-4">
              WE GUARANTEE <br />
              CLIENT SATISFACTION
            </h1>
            <h4 className="text-2xl md:text-2xl font-light leading-relaxed">
              GRIEF IS THE PRICE WE PAY FOR LOVE. <br />
              LOVE IS ETERNAL <br />
              WITH THE BURIAL PLAN — THE FINAL GOODBYE <br />
              MEMORY REMAINS ETERNAL
            </h4>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex flex-wrap justify-center gap-6 px-12 mt-12 mb-12 bg-gray-100">
        {/* Example Card */}
        <div className="flex-1 min-w-[300px] max-w-[350px] h-[300px] bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:bg-red-700 hover:text-white">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <HeartIcon className="h-10 w-10 text-red-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-white">
            Benefits
          </h2>
          <p className="text-gray-600 mt-4 text-xl leading-relaxed transition-colors duration-300 hover:text-white">
            NO Joining Fee, No Age limit. No Waiting Period & No Medical
            Examination
          </p>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[350px] h-[300px] bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:bg-red-700 hover:text-white">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserGroupIcon className="h-10 w-10 text-red-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-white">
            Reliable Service
          </h2>
          <p className="text-gray-600 mt-4 text-xl leading-relaxed transition-colors duration-300 hover:text-white">
            Unbeatable Reliability: Trustworthy Solutions for All Your Needs.
            Try us today.
          </p>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[350px] h-[300px] bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:bg-red-700 hover:text-white">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCardIcon className="h-10 w-10 text-red-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-white">
            Affordable Plans
          </h2>
          <p className="text-gray-600 mt-4 text-xl leading-relaxed transition-colors duration-300 hover:text-white">
            All our covers are affordable and we always make sure you save your
            money.
          </p>
        </div>
      </div>

      <section className="py-12">
        <FuneralSection />
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <Services />
      </section>

      {/* Plans Preview */}
      <section className="py-12">
        <Plans />
      </section>
    </div>
  );
}
