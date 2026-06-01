import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/10 py-8 transition-colors duration-200 dark:border-white/10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-white/50">
            Ibsa Abera
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/55">
            Fullstack MERN developer — building interfaces people enjoy and
            backends they can rely on.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-white/45">
            &copy; {currentYear} All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center justify-center rounded-full border border-slate-200/10 bg-slate-100/70 p-3 text-slate-950 transition-colors duration-200 hover:bg-slate-200/70 dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
