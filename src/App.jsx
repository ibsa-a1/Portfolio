import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-[#050505] dark:text-white"
    >
      <div className="pointer-events-none absolute inset-10 opacity-70">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-slate-200/50 blur-[180px] dark:bg-white/10" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-slate-300/10 blur-[180px] dark:bg-slate-400/10" />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme={theme}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />

      <div className="relative z-10">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
