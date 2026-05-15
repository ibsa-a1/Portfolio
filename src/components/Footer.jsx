import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Ibsa Abera
          </p>
          <p className="mt-2 text-sm text-white/55">
            Fullstack developer building MERN products with strong frontend
            craft.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-white/45">
            &copy; {currentYear} All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/6 p-3 text-white hover:bg-white/10"
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
