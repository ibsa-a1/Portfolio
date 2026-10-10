"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { motion as Motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import { projectCategories, projectsData } from "../lib/data";

const GITHUB_URL = "https://github.com/ibsa-a1?tab=repositories";

// Full-stack first, since those are the projects that best show end-to-end work.
const categoryOrder = ["fullstack", "backend", "frontend"];

interface ProjectsProps {
  /** "featured" = home page (full-stack only). "all" = the /projects page. */
  mode?: "featured" | "all";
}

export default function Projects({ mode = "featured" }: ProjectsProps) {
  const isAll = mode === "all";
  const categories = categoryOrder
    .map((id) => projectCategories.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))
    .filter((c) => isAll || c.id === "fullstack");

  return (
    <section id="projects" className={isAll ? "pb-24 pt-32 sm:pb-28" : "py-24 sm:py-28"}>
      {!isAll && <div className="section-divider mb-24" />}

      <div className="section-shell">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-kicker">{isAll ? "All projects" : "Projects"}</span>
          <h2 className="section-title">
            {isAll ? (
              <>
                Everything I&apos;ve{" "}
                <span className="display-font text-slate-900/80 dark:text-white/80">
                  built so far.
                </span>
              </>
            ) : (
              <>
                Full-stack work that{" "}
                <span className="display-font text-slate-900/80 dark:text-white/80">
                  ships end to end.
                </span>
              </>
            )}
          </h2>
          <p className="section-copy mt-6">
            {isAll
              ? "Full-stack, backend and frontend projects, grouped by type."
              : "A selection of full-stack projects, from database and API to the interface people use."}
          </p>
        </Motion.div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => {
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

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {isAll ? (
            <>
              <Link href="/" className="secondary-btn">
                Back to home
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                <Github className="h-4 w-4" />
                View more on GitHub
              </a>
            </>
          ) : (
            <>
              <Link href="/projects" className="primary-btn">
                View more projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
