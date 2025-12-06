import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-mono mb-6 border border-primary/20">
            Hello, I'm
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
            Abhishek
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-light mb-8">
            Full-Stack Engineer <span className="text-primary">|</span> AI/ML Enthusiast
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground/80 mb-10 leading-relaxed">
            Building intelligent web solutions with a passion for algorithms, data structures, and problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[160px] text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px] text-base border-white/20 hover:bg-white/5">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
