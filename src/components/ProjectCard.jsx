import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  const highlightTech = (text) => {
    const techs = [
      "React",
      "Tailwind CSS",
      "Chakra UI",
      "Framer Motion",
      "Toastify",
      "Web3",
      "Piston API",
      "TMDB API",
      "Leaflet",
      "OpenStreetMap",
      "JavaScript",
      "HTML",
      "CSS",
      "local storage",
      "startup",
    ];
    const parts = text.split(new RegExp(`(${techs.join("|")})`, "gi"));

    return parts.map((part, index) =>
      techs.includes(part) ? (
        <span key={index} className="text-blue-600 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section
      className={`flex flex-col items-center gap-6 my-12 md:my-16
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <a
          href={project.code}
          alt={project.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={project.image}
            className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] curson-pointer"
            loading="lazy"
          />
        </a>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>

        <p className="mt-3 text-sm md:text-base text-gray-600">
          {highlightTech(project.description)}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex gap-4">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 flex rounded-xl border border-gray-300 hover:border-gray-600 text-white bg-gray-800
                      hover:bg-white hover:text-gray-800 transition"
          >
            <FaGithub className="w-5 h-5 mr-1" />
            Source Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 flex rounded-xl border border-gray-600 hover:border-gray-300 text-gray-800
                      bg-white transition hover:bg-gray-800 hover:text-white cursor-pointer"
          >
            <FiExternalLink className="w-5 h-5 mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
