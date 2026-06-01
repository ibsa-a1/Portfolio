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
    title: "Product-minded UI",
    text: "React interfaces that stay clear, responsive, and easy to use across devices.",
  },
  {
    icon: Server,
    title: "Reliable APIs",
    text: "Express services with authentication, validation, and practical backend structure.",
  },
  {
    icon: Database,
    title: "Connected data",
    text: "MongoDB-backed workflows designed around how the product actually operates.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Header = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
      <Navbar />

      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Availability indicator */}
            <Motion.div variants={fadeUp} custom={0} className="mb-6 flex items-center gap-3">
              <span className="section-kicker mb-0">
                <span className="status-dot mr-1" />
                Open to opportunities
              </span>
            </Motion.div>

            {/* Personal greeting */}
            <Motion.p
              variants={fadeUp}
              custom={1}
              className="mb-3 text-lg font-medium text-slate-700 dark:text-white/70 sm:text-xl"
            >
              Hi, I&apos;m Ibsa Abera —
            </Motion.p>

            <Motion.h1 variants={fadeUp} custom={2} className="section-title">
              I turn ideas into{" "}
              <span className="display-font text-slate-900/80 dark:text-white/80">
                fullstack web products people actually use.
              </span>
            </Motion.h1>

            <Motion.p variants={fadeUp} custom={3} className="section-copy mt-6">
              MERN developer who started in frontend and grew into building
              complete applications. I connect polished React interfaces with
              secure Node/Express APIs and MongoDB — focused on clean UX,
              dependable backends, and shipping real products.
            </Motion.p>

            <Motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-3">
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
            </Motion.div>

            <Motion.div variants={fadeUp} custom={5} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/ibsa-a1"
                target="_blank"
                rel="noopener noreferrer"
                className="tag hover:bg-slate-200/80 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
                target="_blank"
                rel="noopener noreferrer"
                className="tag hover:bg-slate-200/80 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Motion.div>

            <Motion.div
              variants={fadeUp}
              custom={6}
              className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
            >
              {heroStats.map((item, i) => (
                <Motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                  className="ghost-panel p-4 hover:-translate-y-1 hover:bg-slate-100/60 dark:hover:bg-white/8"
                >
                  <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-white/55">
                    {item.label}
                  </p>
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="surface-panel interactive-panel relative overflow-hidden p-6 sm:p-8"
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
                {focusCards.map(({ icon, title, text }, i) => (
                  <Motion.div
                    key={title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="ghost-panel flex items-start gap-4 p-4 hover:-translate-y-1 hover:bg-slate-100/60 dark:hover:bg-white/8"
                  >
                    <div className="rounded-2xl border border-slate-200/10 bg-slate-100/8 p-3 transition-colors duration-200 dark:border-white/10 dark:bg-white/8">
                      {createElement(icon, {
                        className: "h-5 w-5 text-slate-950 dark:text-white",
                      })}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-700/75 dark:text-white/65">
                        {text}
                      </p>
                    </div>
                  </Motion.div>
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
          className="surface-panel interactive-panel mt-12 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600/80 dark:text-white/45">
                Current Stack
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white sm:text-3xl">
                Frontend craft backed by real fullstack implementation.
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
