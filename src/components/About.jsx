import React from "react";
import { CheckCircle2, Download } from "lucide-react";
import { motion as Motion } from "motion/react";
import { assets, expertiseAreas, serviceHighlights } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="surface-panel overflow-hidden p-4 sm:p-5"
          >
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src={assets.about_image}
                alt="Ibsa Abera at work"
                className="h-full min-h-[26rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-slate-200/10 bg-slate-100/40 p-5 backdrop-blur-md transition-colors duration-200 dark:border-white/10 dark:bg-black/40">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-600/80 dark:text-white/45">
                  Now focused on
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                  Fullstack web products with React, Node, Express, and MongoDB.
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
                From frontend beginnings to{" "}
                <span className="display-font text-slate-900/80 dark:text-white/80">
                  fullstack product building.
                </span>
              </h2>
              <div className="section-copy mt-6 space-y-5">
                <p>
                  I originally built portfolio sites, landing pages, and
                  UI-heavy React projects. That frontend foundation still shapes
                  the way I work today: I care about clarity, usability, and
                  visual polish.
                </p>
                <p>
                  Now I build across the full stack with MERN, creating React
                  clients, Express APIs, MongoDB-backed features, authentication
                  flows, and dashboards that connect smoothly from database to
                  UI.
                </p>
                <p>
                  I&apos;m especially motivated by projects where good product
                  thinking matters just as much as code quality, whether that
                  means shipping admin tools, customer-facing platforms, or
                  scalable service layers behind the scenes.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertiseAreas.map((item) => (
                <div key={item.title} className="surface-panel p-5">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700/70 dark:text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="surface-panel p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600/80 dark:text-white/45">
                How I Can Help
              </p>
              <div className="mt-5 grid gap-4">
                {serviceHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-slate-950 dark:text-white" />
                    <p className="text-sm leading-7 text-slate-700/70 dark:text-white/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={assets.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn mt-6"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
