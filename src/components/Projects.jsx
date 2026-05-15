import React from "react";
import ProjectCard from "./ProjectCard";
import { projectCategories, projectsData } from "../assets/assets";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-12">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">
            Portfolio now organized around{" "}
            <span className="display-font text-white/80">
              frontend, backend, and fullstack work.
            </span>
          </h2>
          <p className="section-copy mt-6">
            Real shipped work across all three disciplines — polished frontend
            interfaces, production-grade REST APIs, and end-to-end MERN
            applications built with real users and real constraints.
          </p>
        </div>

        <div className="space-y-10">
          {projectCategories.map((category) => {
            const groupedProjects = projectsData.filter(
              (project) => project.category === category.id
            );

            return (
              <section key={category.id} className="surface-panel p-6 sm:p-8">
                <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                      {category.eyebrow}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                      {category.label} Projects
                    </h3>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-white/60">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                  {groupedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
