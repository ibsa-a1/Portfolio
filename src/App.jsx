import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
