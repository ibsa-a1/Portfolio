import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-white/6 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-slate-400/10 blur-[180px]" />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
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

export default App;
