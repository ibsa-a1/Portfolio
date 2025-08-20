import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiGit,
} from "react-icons/si";

const Header = () => {
  return (
    <div className="container mx-auto h-screen bg-cover bg-center flex items-center justify-center w-full flex-col-reverse md:flex-row">
      <Navbar />
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mt-10 mb-5">
          FRONT-END WEBSITE DEVELOPER
        </h1>
        <p className="font-semibold w-1/2 sm:w-1/3 md:w-3/4 2xl:w-1/2 text-gray-700 mb-5">
          Hello👋 I'm Ibsa Abera, a Frontend Developer based at Addis Ababa,
          Ethiopia.
          <button className="border border-green-700  rounded-2xl font-bold text-green-700 mx-2 py-1 px-4 hover:bg-green-700 hover:text-white transition-colors duration-300">
            {""} Open to work
          </button>
        </p>
        <div className="flex gap-4 mb-2">
          <a
            href="https://github.com/ibsa-a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.github_icon} alt="GitHub" className="h-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.linkedin_icon} alt="LinkedIn" className="h-10" />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 md:gap-2 mb-5 ">
          <p className="text-2xl mt-2 text-gray-700 font-semibold">
            Tech Stack <span className="hidden md:inline">|</span>{" "}
          </p>{" "}
          <div className="flex gap-4 mt-2 mb-5">
            <SiHtml5
              color="#E34F26"
              className="h-10 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            />
            <SiCss3
              color="#1572B6"
              className="h-10 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            />
            <SiJavascript
              color="#F7DF1E"
              className="h-10 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            />
            <SiReact
              color="#61DAFB"
              className="h-10 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            />
            <SiTailwindcss
              color="#06B6D4"
              className="h-10 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            />
            <SiVite
              color="#BD34FE"
              className="h-10 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            />
            <SiGit
              color="#F05032"
              className="h-10 w-8 transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
      <img src={assets.profile} alt="profile" className="h-80 lg:h-96 mt-14" />
    </div>
  );
};

export default Header;
