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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";

    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      return saved as Theme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [isThemeChosen, setIsThemeChosen] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = window.localStorage.getItem("theme");
    return saved === "light" || saved === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    window.document.body.classList.remove("dark", "light");
    window.document.body.classList.add(theme);
    root.style.colorScheme = theme;

    if (isThemeChosen) {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme, isThemeChosen]);

  useEffect(() => {
    if (isThemeChosen) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener?.("change", handleChange);

    return () => media.removeEventListener?.("change", handleChange);
  }, [isThemeChosen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    setIsThemeChosen(true);
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
