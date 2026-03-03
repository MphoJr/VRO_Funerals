import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-red-700">
          VRO Funeral Parlour
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-red-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-700 font-medium p-4 md:p-0">
            {[
              { to: "/", label: "Home" },
              { to: "/gallery", label: "Gallery" },
              { to: "/plans", label: "Plans" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact Us" },
              { to: "/get-quote", label: "Get A Quote" },
              { to: "/login", label: "Login" },
            ].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-700 font-bold border-b-2 border-red-700"
                      : "hover:text-red-700"
                  }
                  onClick={() => setIsOpen(false)} // close menu on link click
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
