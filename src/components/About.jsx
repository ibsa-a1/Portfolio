import React from "react";
import { assets } from "../assets/assets";
import { Download } from "lucide-react";

const About = () => {
  return (
    <div
      className="container mx-auto items-center justify-center h-screen py-10"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold md:mb-32 mb-16 mx-auto flex items-center justify-center">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {" "}
          Me
        </span>
      </h1>
      <div className="container mx-auto justify-center flex flex-col md:flex-row items-center md:text-start md:gap-20">
        <div className="relative w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[480px] md:h-[270px] flex items-center justify-center transition-transform duration-300 hover:scale-105">
          <img
            src={assets.about_image}
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src={assets.dev_image}
            alt="Image 2"
            className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 sm:w-32 sm:h-32 rounded-full translate-x-1/4 translate-y-1/4"
          />
        </div>
        <p className="text-gray-700 mt-16 md:mt-0 text-balance md:text-start w-3/4 md:w-3/4 lg:w-1/2 ">
          Hey! I’m Ibsa, Frontend Website Developer and I absolutely love
          building things on the web. React.js is my playground, and I enjoy
          experimenting with modern technologies to bring ideas to life. I’m all
          about creating websites that are not only visually appealing but also
          smooth and easy to use. Working with APIs to make apps dynamic and
          interactive is something I genuinely enjoy, and I’m always curious to
          learn new tools and techniques that make my projects better. I’m
          currently studying Software Engineering at Addis Ababa Science and
          Technology University (AASTU), which gives me a strong foundation to
          turn my ideas into real-world solutions. When I’m not coding, I’m
          usually exploring new ideas, collaborating with others, or finding
          ways to challenge myself and grow.
        </p>
      </div>
      <div className="flex justify-center mt-8 md:mt-16">
        <a
          href={assets.resume_template}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
        >
          <Download className="w-5 h-5" />
          Get My Resume
        </a>
      </div>
    </div>
  );
};

export default About;
