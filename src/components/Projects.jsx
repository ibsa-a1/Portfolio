import ProjectCard from "./ProjectCard";
import { projectsData } from "../assets/assets";

export default function Projects() {
  return (
    <div
      id="Projects"
      className="px-6 md:px-16 lg:px-24 py-12 mt-10 md:mt-16 sm:mt-8"
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold md:mb-32 mb-16 mx-auto flex items-center justify-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          {" "}
          Showcase
        </span>
      </h1>
      {projectsData.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </div>
  );
}
