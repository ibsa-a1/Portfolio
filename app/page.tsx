import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <div
        id="top"
        className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-[#050505] dark:text-white"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60 dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />

        <div className="relative z-10">
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
