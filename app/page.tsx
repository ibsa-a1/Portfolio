import About from "@/components/About";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </SiteShell>
  );
}
