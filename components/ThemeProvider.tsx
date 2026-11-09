"use client";

import { useEffect, useState, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./use-theme";

type Theme = "dark" | "light";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Light is the default. Only an explicit choice (saved on toggle) overrides it.
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    try {
      return window.localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    window.document.body.classList.remove("dark", "light");
    window.document.body.classList.add(theme);
    root.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      window.localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme={theme}
        toastClassName="custom-toast"
      />
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
