import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-700">
          VRO Funeral Parlour
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 font-bold border-b-2 border-red-700"
                    : "hover:text-red-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 font-bold border-b-2 border-red-700"
                    : "hover:text-red-700"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/plans"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 font-bold border-b-2 border-red-700"
                    : "hover:text-red-700"
                }
              >
                Plans
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 font-bold border-b-2 border-red-700"
                    : "hover:text-red-700"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 font-bold border-b-2 border-red-700"
                    : "hover:text-red-700"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/get-quote"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 font-bold border-b-2 border-red-700"
                    : "hover:text-red-700"
                }
              >
                Get A Quote
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-700 font-bold border-b-2 border-red-700"
                    : "hover:text-red-700"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
