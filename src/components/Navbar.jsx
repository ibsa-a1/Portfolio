import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <h2 className="text-2xl font-bold cursor-pointer">Ibsa.dev</h2>
        <ul className="hidden md:flex gap-7 text-black">
          <a
            href="#"
            className="mt-2 cursor-pointer font-semibold hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="#"
            className="mt-2 cursor-pointer font-semibold hover:text-gray-600"
          >
            About
          </a>
          <a
            href="#"
            className="mt-2 cursor-pointer font-semibold hover:text-gray-600"
          >
            Projects
          </a>
          <a
            href="#"
            className="mt-2 cursor-pointer font-semibold hover:text-gray-600"
          >
            Contact
          </a>
          <a href="#Footer">
            <button className="hidden md:block bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-full cursor-pointer">
              Hire Me
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
