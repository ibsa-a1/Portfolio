import { Contact } from "lucide-react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
