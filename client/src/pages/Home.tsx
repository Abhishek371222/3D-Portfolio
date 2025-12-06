import Scene from "@/components/canvas/Scene";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      {/* 3D Background */}
      <Scene />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5 bg-black/40 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Abhishek A. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
