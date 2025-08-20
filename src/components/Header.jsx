import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="container mx-auto h-screen bg-cover bg-center flex items-center justify-center w-full flex-col-reverse md:flex-row">
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mt-10 mb-5">
          FRONT-END WEBSITE DEVELOPER
        </h1>
        <p className="font-semibold w-1/2 md:w-3/4 2xl:w-1/2 text-gray-700 mb-5">
          Hello👋 I'm Ibsa, a Frontend Developer based at Addis Ababa, Ethiopia.
          <button className="border border-green-700  rounded-2xl font-semibold text-green-700 mx-2 py-1 px-4 hover:bg-green-700 hover:text-white transition-colors duration-300">
            {""} Open to work
          </button>
        </p>
      </div>
      <img src={assets.profile} alt="profile" className="h-80 lg:h-96" />

      <Navbar />
    </div>
  );
};

export default Header;
