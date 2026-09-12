import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { DevOps } from "@/components/DevOps";
import { GitHubCta } from "@/components/GitHubCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg light:bg-bg-light text-text light:text-text-light font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevOps />
        <GitHubCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
