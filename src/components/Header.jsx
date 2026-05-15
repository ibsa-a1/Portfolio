import { createElement } from "react";
import {
  ArrowRight,
  Braces,
  Database,
  Download,
  Github,
  Linkedin,
  Server,
} from "lucide-react";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { motion as Motion } from "motion/react";
import Navbar from "./Navbar";
import { assets, heroStats } from "../assets/assets";

const stackIcons = [
  { label: "React", icon: SiReact, color: "#61dafb" },
  { label: "Node.js", icon: SiNodedotjs, color: "#8cc84b" },
  { label: "Express", icon: SiExpress, color: "#f5f5f5" },
  { label: "MongoDB", icon: SiMongodb, color: "#10aa50" },
  { label: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { label: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
];

const focusCards = [
  {
    icon: Braces,
    title: "Frontend polish",
    text: "React interfaces with clear UX, responsive layouts, and strong visual structure.",
  },
  {
    icon: Server,
    title: "Backend logic",
    text: "Express APIs, authentication, validation, and scalable server-side organization.",
  },
  {
    icon: Database,
    title: "Data flow",
    text: "MongoDB-backed features designed around real product workflows and clean integration.",
  },
];

const Header = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
      <Navbar />

      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="section-kicker">MERN Fullstack Developer</span>
            <h1 className="section-title">
              Building modern products across{" "}
              <span className="display-font text-white/80">
                frontend, backend, and fullstack systems.
              </span>
            </h1>
            <p className="section-copy mt-6">
              I started as a frontend developer and now build complete MERN
              experiences, from polished React interfaces to reliable Node,
              Express, and MongoDB backends. I care about how products feel,
              how they scale, and how cleanly everything connects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="primary-btn">
                View my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="secondary-btn">
                Contact me
              </a>
              <a
                href={assets.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Resume
                <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/ibsa-a1"
                target="_blank"
                rel="noopener noreferrer"
                className="tag hover:bg-white/10 hover:text-white"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
                target="_blank"
                rel="noopener noreferrer"
                className="tag hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((item) => (
                <div key={item.label} className="ghost-panel p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="surface-panel relative overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%)]" />
            <div className="relative">
              <div className="ghost-panel overflow-hidden p-3">
                <img
                  src={assets.profile_img}
                  alt="Ibsa Abera portrait"
                  className="h-[26rem] w-full rounded-[1.5rem] object-cover sm:h-[30rem]"
                />
              </div>

              <div className="mt-6 grid gap-3">
                {focusCards.map(({ icon, title, text }) => (
                  <div
                    key={title}
                    className="ghost-panel flex items-start gap-4 p-4"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/8 p-3">
                      {createElement(icon, {
                        className: "h-5 w-5 text-white",
                      })}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-white/60">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="surface-panel mt-12 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                Current Stack
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Stronger on the frontend, now shipping complete MERN workflows.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {stackIcons.map(({ label, icon, color }) => (
                <div
                  key={label}
                  className="tag min-w-[8.5rem] justify-center gap-2 px-4 py-3"
                >
                  {createElement(icon, {
                    className: "h-4 w-4",
                    color,
                  })}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Header;
