import React from "react";
import { assets } from "../assets/assets";
import { Download } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="min-h-screen pt-16 pb-0 px-4 sm:px-6 lg:px-8" id="About">
      <div className="max-w-7xl mx-auto">
        {" "}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="underline underline-offset-8 decoration-4 decoration-blue-600 font-light">
              Me
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
          {" "}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative group">
              <div className="relative w-[300px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[450px] md:h-[300px] lg:w-[480px] lg:h-[320px] transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={assets.about_image}
                    alt="About me"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0  rounded-full "></div>
                    <img
                      src={assets.dev_img}
                      alt="Developer badge"
                      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full shadow-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 max-w-4xl mx-auto lg:mx-0">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-blue-600 font-medium text-sm">
                    Frontend Developer
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Hey!{" "}
                  <span className="text-blue-600 font-semibold">
                    I'm Ibsa, Frontend Website Developer
                  </span>{" "}
                  and I absolutely love building things on the web.{" "}
                  <span className="text-blue-600 font-semibold">React.js</span>{" "}
                  is my playground, and I enjoy experimenting with modern
                  technologies to bring ideas to life.
                </p>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  I'm all about creating websites that are not only visually
                  appealing but also smooth and easy to use. Working with{" "}
                  <span className="text-blue-600 font-semibold">APIs</span> to
                  make apps dynamic and interactive is something I genuinely
                  enjoy, and I'm always curious to learn new tools and
                  techniques that make my projects better.
                </p>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  <span className="text-blue-600 font-semibold">
                    I'm currently studying Software Engineering at Addis Ababa
                    Science and Technology University (AASTU),
                  </span>{" "}
                  which gives me a strong foundation to turn my ideas into
                  real-world solutions. When I'm not coding, I'm usually
                  exploring new ideas, collaborating with others, or finding
                  ways to challenge myself and grow.
                </p>
                <div className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "JavaScript",
                      "Frontend",
                      "APIs",
                      "UI/UX",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-block">
            <a
              href={assets.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="relative w-5 h-5 group-hover:animate-bounce" />
              <span className="relative">Get My Resume</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
