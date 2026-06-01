import React from "react";
import { motion as Motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { projectCategories, projectsData } from "../assets/assets";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-divider mb-24" />

      <div className="section-shell">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">
            Work that shows what I can{" "}
            <span className="display-font text-slate-900/80 dark:text-white/80">
              build, ship, and deliver.
            </span>
          </h2>
          <p className="section-copy mt-6">
            From polished React interfaces to secure REST APIs and complete MERN
            products — each project represents real problem-solving, not just
            code exercises.
          </p>
        </Motion.div>

        <div className="space-y-12">
          {projectCategories.map((category, catIndex) => {
            const groupedProjects = projectsData.filter(
              (project) => project.category === category.id,
            );

            return (
              <Motion.section
                key={category.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: catIndex * 0.08 }}
                className="surface-panel p-6 sm:p-8"
              >
                <div className="mb-8 flex flex-col gap-4 border-b border-slate-200/15 pb-6 lg:flex-row lg:items-end lg:justify-between dark:border-white/10">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-500/80 dark:text-indigo-400/60">
                      {category.eyebrow}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
                        {category.label}
                      </h3>
                      <span className="tag px-3 py-1 text-xs">
                        {groupedProjects.length}{" "}
                        {groupedProjects.length === 1 ? "project" : "projects"}
                      </span>
                    </div>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-slate-700/75 dark:text-white/60">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                  {groupedProjects.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                    />
                  ))}
                </div>
              </Motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
