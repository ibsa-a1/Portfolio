import React from "react";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 text-white py-10 px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0 ml-2 md:ml-14">
        <h2 className="text-2xl font-bold  mb-2">
          Ibsa <span className="text-indigo-600">A.</span>
        </h2>
        <p className="text-gray-400">
          Software Engineering Student & Frontend Developer
        </p>
      </div>

      <div className="flex flex-col items-center md:items-end mr-2 md:mr-14">
        <button
          onClick={scrollToTop}
          className="bg-portfolio-primary/20 p-2 rounded-full hover:bg-portfolio-primary/30 transition-colors mb-4"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-14 w-14 text-[#5555FF] bg-[#242660] rounded-full" />
        </button>
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Ibsa Abera. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
