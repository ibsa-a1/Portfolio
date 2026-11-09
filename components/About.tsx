"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Download } from "lucide-react";
import { motion as Motion } from "motion/react";
import { assets, expertiseAreas, serviceHighlights } from "../lib/data";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-divider mb-24" />

      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="surface-panel flex flex-col overflow-hidden p-4 sm:p-5"
          >
            <div className="relative min-h-[26rem] flex-1 overflow-hidden rounded-[1.75rem]">
              <Image
                src={assets.about_image}
                alt="Ibsa Abera at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full min-h-[26rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-slate-200/10 bg-slate-100/40 p-5 backdrop-blur-md transition-colors duration-200 dark:border-white/10 dark:bg-black/40">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-600/80 dark:text-white/45">
                  Now focused on
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  Full-stack features with Next.js, TypeScript, Express and PostgreSQL.
                </h3>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="section-kicker">About Me</span>
              <h2 className="section-title">
                From frontend roots to{" "}
                <span className="display-font text-slate-900/80 dark:text-white/80">
                  production full-stack work.
                </span>
              </h2>
              <div className="section-copy mt-6 space-y-5">
                <p>
                  I&apos;m a software engineering student at Addis Ababa
                  Science and Technology University, building production
                  software with Node.js, Express, React and PostgreSQL.
                </p>
                <p>
                  I completed a full-stack internship at Everline Technologies, shipping features on a live production SaaS codebase. I&apos;m now on the IT team at AASTU Gibigubae, where I started as a backend developer. I&apos;m comfortable moving between frontend, backend and infrastructure, with hands-on Docker and Linux experience.
                </p>
                <p>
                  I&apos;m looking to bring the same speed and ownership to a team
                  building real products, not just prototypes.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertiseAreas.map((item, i) => (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="surface-panel interactive-panel p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700/75 dark:text-white/65">
                    {item.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="surface-panel mx-auto mt-8 max-w-4xl p-6 text-center sm:p-8"
        >
          <h3 className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-500/80 dark:text-indigo-400/60">
            How I Can Help
          </h3>
          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            {serviceHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600/80 dark:text-emerald-400/70" />
                <p className="text-sm leading-7 text-slate-700/80 dark:text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/Ibsa_Abera_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn mt-8"
          >
            Download Resume
            <Download className="h-4 w-4" />
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
