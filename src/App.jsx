import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
