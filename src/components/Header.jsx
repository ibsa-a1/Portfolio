import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiChakraui,
} from "react-icons/si";
import { Code } from "lucide-react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="container mx-auto h-screen bg-cover bg-center flex items-center justify-center w-full flex-col-reverse md:flex-row">
      <Navbar />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"
      >
        <h1 className="text-2xl md:text-3xl font-bold mt-10 mb-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          FRONT-END WEBSITE DEVELOPER
        </h1>
        <p className="font-semibold w-full sm:w-4/5 md:w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3 text-gray-700 text-base md:text-lg leading-relaxed">
          <span className="inline-block mr-2 text-2xl">👋</span>
          Hello! I'm <span className="font-bold text-gray-900">Ibsa Abera</span>
          , a{" "}
          <span className="font-bold text-blue-600">Frontend Developer</span>{" "}
          based in{" "}
          <span className="font-semibold text-gray-800">
            Addis Ababa, Ethiopia
          </span>
          .
        </p>
        <div className="inline-flex items-center my-3">
          <div className="relative">
            <button className="group relative overflow-hidden border-2 border-green-600 rounded-full font-bold text-green-700 px-6 py-2 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Open to work
              </span>
            </button>
          </div>
        </div>
        {/* Enhanced social links */}
        <div className="flex md:gap-6 md:mb-8 gap-3 mb-4">
          <a
            href="https://github.com/ibsa-a1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={assets.github_icon}
              alt="GitHub"
              className="relative h-12 w-12 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 rounded-full bg-white p-1 shadow-lg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              className="relative h-12 w-12 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 rounded-full bg-white p-1 shadow-lg"
            />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 md:gap-8 mb-5 ">
          <p className="text-xl mt-2 text-gray-600 font-semibold">
            Tech Stack <span className="hidden xl:inline">|</span>{" "}
          </p>{" "}
          <div className="flex gap-4 md:gap-8 mt-2 mb-5">
            <div className="relative group">
              <SiHtml5
                color="#E34F26"
                className="h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                HTML5
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>

            <div className="relative group">
              <SiCss3
                color="#1572B6"
                className="h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                CSS3
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>

            <div className="relative group">
              <SiJavascript
                color="#F7DF1E"
                className="h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                JavaScript
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>

            <div className="relative group">
              <SiTailwindcss
                color="#06B6D4"
                className="h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                TailwindCSS
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>

            <div className="relative group">
              <SiChakraui className="text-teal-400 h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                Chakra-UI
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>

            <div className="relative group">
              <SiReact
                color="#61DAFB"
                className="h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                React
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>

            <div className="relative group">
              <img
                src={assets.vite_logo}
                className="h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                Vite
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>

            <div className="relative group">
              <SiGit
                color="#F05032"
                className="h-8 w-6 md:h-10 md:w-8 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-3"
              />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2  px-2 py-1 text-xs text-white bg-gray-800/90 rounded-md shadow-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100  transition-all duration-300 whitespace-nowrap">
                Git
                {/* Small arrow */}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800/90 rotate-45"></span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mt-48 sm:mt-28 md:mt-0"
      >
        <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
          <img
            src={assets.profile_img}
            alt="Ibsa Abera - Frontend Developer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
          <Code className="w-8 h-8 text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
