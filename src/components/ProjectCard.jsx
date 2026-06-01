import React from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Layers3,
  LayoutTemplate,
  Server,
  Star,
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

export default function ProjectCard({ project, index = 0 }) {
  const meta = categoryMeta[project.category];
  const CategoryIcon = meta.icon;

  return (
    <Motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
      className="surface-panel group overflow-hidden"
    >
      {/* Image section */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition duration-300 group-hover:via-black/10" />

        {/* Badges row */}
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="tag border-slate-200/15 bg-slate-100/60 text-slate-950 backdrop-blur-sm transition-colors duration-200 dark:border-white/15 dark:bg-black/50 dark:text-white">
            <CategoryIcon className="mr-2 h-4 w-4" />
            {meta.label}
          </span>
          <span className="tag border-slate-200/15 bg-slate-100/60 text-slate-950/80 backdrop-blur-sm transition-colors duration-200 dark:border-white/15 dark:bg-black/50 dark:text-white/80">
            {project.status}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute right-5 top-5">
            <span className="featured-badge backdrop-blur-sm">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          </div>
        )}

        {/* Bottom summary overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-sm font-medium leading-snug text-white/90">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 sm:p-7">
        <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-700/80 dark:text-white/65">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tag text-xs">
              {item}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-6 space-y-2.5">
          {project.highlights.map((point) => (
            <div
              key={point}
              className="flex gap-3 rounded-2xl border border-slate-200/8 bg-slate-100/25 px-4 py-3 text-sm leading-6 text-slate-700/75 transition-colors duration-200 group-hover:border-slate-300/30 dark:border-white/8 dark:bg-black/25 dark:text-white/68 dark:group-hover:border-white/14"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600/80 dark:text-emerald-400/70" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.code ? (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          ) : (
            <span className="secondary-btn cursor-not-allowed opacity-45">
              <Github className="h-4 w-4" />
              Private Repo
            </span>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="secondary-btn cursor-not-allowed opacity-55">
              No Live Demo
            </span>
          )}
        </div>
      </div>
    </Motion.article>
  );
}
