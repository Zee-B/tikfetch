// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black fixed w-full top-0 z-50 border-b border-gray-800">
      {/* Logo */}
      <div className="text-xl font-bold text-pink-500">TikFetch</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        <li>
          <a
            href="#features"
            className="transition-colors duration-300 hover:text-pink-500"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="transition-colors duration-300 hover:text-pink-500"
          >
            Pricing
          </a>
        </li>
        <li>
          <Link
            to="/coming-soon"
            className="transition-colors duration-300 hover:text-pink-500"
          >
            API Docs
          </Link>
        </li>
      </ul>

      {/* CTA (Sign In) */}
      <Link
        to="/coming-soon"
        className="hidden md:block font-bold text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-sm transition-all duration-300"
      >
        Sign In
      </Link>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {open ? (
          <X
            className="w-6 h-6 cursor-pointer text-gray-300"
            onClick={() => setOpen(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 cursor-pointer text-gray-300"
            onClick={() => setOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col space-y-4 p-6 md:hidden text-gray-300">
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="hover:text-pink-500 transition-colors duration-300"
          >
            Pricing
          </a>
          <Link
            to="/coming-soon"
            onClick={() => setOpen(false)}
            className="hover:text-pink-500 transition-colors duration-300"
          >
            API Docs
          </Link>
          <Link
            to="/coming-soon"
            onClick={() => setOpen(false)}
            className="font-bold text-white bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-center transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
