"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import { motion as Motion } from "motion/react";
import { experience } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-divider mb-24" />

      <div className="section-shell">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-kicker">Experience</span>
          <h2 className="section-title">
            Shipping on{" "}
            <span className="display-font text-slate-900/80 dark:text-white/80">
              real products today.
            </span>
          </h2>
        </Motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((item, i) => (
            <Motion.article
              key={item.role + item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-panel interactive-panel p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-slate-200/10 bg-slate-100/8 p-3 dark:border-white/10 dark:bg-white/8">
                  <Briefcase className="h-5 w-5 text-slate-950 dark:text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700/80 dark:text-white/65">
                    {item.company}
                  </p>
                </div>
                <span className="tag ml-auto shrink-0 px-3 py-1 text-xs">
                  {item.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700/80 dark:text-white/65">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span key={tech} className="tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
