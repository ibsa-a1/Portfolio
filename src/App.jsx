import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
