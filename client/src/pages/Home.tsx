import Scene from "@/components/canvas/Scene";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { Github, Linkedin } from "lucide-react";

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
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://github.com/Abhishek371222" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhishek-a-72965b342" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Abhishek. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
