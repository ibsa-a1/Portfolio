import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  // Close menu if resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <h2 className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
          Ibsa A.
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-black">
          <li>
            <a
              href="#"
              className="cursor-pointer font-semibold text-gray-700 hover:text-blue-600 relative group transition-colors duration-300"
            >
              Home
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="cursor-pointer font-semibold text-gray-700 hover:text-blue-600 relative group transition-colors duration-300"
            >
              About
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="cursor-pointer font-semibold text-gray-700 hover:text-blue-600 relative group transition-colors duration-300"
            >
              Projects
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="cursor-pointer font-semibold text-gray-700 hover:text-blue-600 relative group transition-colors duration-300"
            >
              Contact
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#Contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold text-white py-2.5 px-6 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Hire Me
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden relative group">
          <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="relative w-8 h-8 cursor-pointer transition-transform duration-300 group-hover:scale-110"
            onClick={() => setShowMobileMenu(true)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-20 bg-white transform transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            alt="Close"
            className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-90"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        {/* Mobile navigation links */}
        <ul className="flex flex-col items-center gap-4 mt-8 mx-5 text-lg font-medium">
          <li>
            <a
              href="#"
              className="w-full text-center px-6 py-4 rounded-2xl text-gray-700 transition-all duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="w-full text-center px-6 py-4 rounded-2xl text-gray-700 transition-all duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="w-full text-center px-6 py-4 rounded-2xl text-gray-700 transition-all duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="w-full text-center px-6 py-4 rounded-2xl text-gray-700 transition-all duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </a>
          </li>
          <li className="mt-6">
            <a href="#Contact" onClick={() => setShowMobileMenu(false)}>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                Hire Me
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
