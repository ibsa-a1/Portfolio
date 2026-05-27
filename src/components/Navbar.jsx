import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../assets/assets";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="section-shell">
          <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-xl">
            <a href="#top" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Ibsa Abera
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/65 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-white/10 bg-white/6 p-2 text-white hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
              <a href="#contact" className="secondary-btn px-4 py-2">
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-white/10 bg-white/6 p-2 text-white hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowMobileMenu(true)}
                className="rounded-full border border-white/10 bg-white/6 p-2 text-white"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl transition ${
          showMobileMenu
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm border-l border-white/10 bg-[#0a0a0a] p-6 transition-transform duration-300 ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-12 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
              Navigation
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-white/10 bg-white/6 p-2 text-white hover:bg-white/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowMobileMenu(false)}
                className="rounded-full border border-white/10 bg-white/6 p-2 text-white"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-lg text-white/80 hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setShowMobileMenu(false)}
            className="primary-btn mt-8 w-full"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
