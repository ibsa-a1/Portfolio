import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="container mx-auto items-center justify-center py-10">
      <h1 className="text-3xl font-bold md:mb-32 mb-16 mx-auto flex flex-col items-center justify-center  ">
        About Me
      </h1>
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-center text-center">
        <div className="relative w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[250px]">
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
        <p className="text-gray-700 mt-16 md:mt-5 text-balance md:text-start md:pl-32 w-3/4 md:w-3/4 lg:w-1/2 ">
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
    </div>
  );
};

export default About;
