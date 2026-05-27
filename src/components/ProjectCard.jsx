import React from "react";
import {
  ArrowUpRight,
  Github,
  Layers3,
  LayoutTemplate,
  Server,
} from "lucide-react";
import { motion as Motion } from "motion/react";

const categoryMeta = {
  frontend: {
    label: "Frontend",
    icon: LayoutTemplate,
  },
  backend: {
    label: "Backend",
    icon: Server,
  },
  fullstack: {
    label: "Fullstack",
    icon: Layers3,
  },
};

export default function ProjectCard({ project }) {
  const meta = categoryMeta[project.category];
  const CategoryIcon = meta.icon;

  return (
    <Motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="surface-panel overflow-hidden"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="tag border-slate-200/15 bg-slate-100/60 text-slate-950 transition-colors duration-200 dark:border-white/15 dark:bg-black/45 dark:text-white">
            <CategoryIcon className="mr-2 h-4 w-4" />
            {meta.label}
          </span>
          <span className="tag border-slate-200/15 bg-slate-100/60 text-slate-950/80 transition-colors duration-200 dark:border-white/15 dark:bg-black/45 dark:text-white/80">
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-600/80 dark:text-white/40">
          {project.summary}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-700/75 dark:text-white/62">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          {project.highlights.map((point) => (
            <div
              key={point}
              className="rounded-2xl border border-slate-200/8 bg-slate-100/25 px-4 py-3 text-sm leading-6 text-slate-700/70 transition-colors duration-200 dark:border-white/8 dark:bg-black/25 dark:text-white/65"
            >
              {point}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          ) : (
            <span className="secondary-btn cursor-not-allowed opacity-45">
              <Github className="h-4 w-4" />
              Private / no repo
            </span>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="primary-btn cursor-not-allowed opacity-55">
              No live demo
            </span>
          )}
        </div>
      </div>
    </Motion.article>
  );
}
