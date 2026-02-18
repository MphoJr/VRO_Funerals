import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">
            VRO Funeral Parlour
          </h2>
          <p className="text-sm">FSP NO: 54916</p>
          <p className="text-sm">Serving with dignity and compassion</p>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li>
            <a href="/" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-white">
              Gallery
            </a>
          </li>
          <li>
            <a href="/plans" className="hover:text-white">
              Plans
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/get-quote" className="hover:text-white">
              Get A Quote
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/vroFuneralsAndTombstones?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/vro_funeral_parlour?igsh=OXFkZDNpcXpraGIx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@@vro_funerals?_t=ZS-8ybDJY2aMm9&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-500 text-white"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} VRO Funeral Parlour & Tombstones. All
        rights reserved.
      </div>
    </footer>
  );
}
