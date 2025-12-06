import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2855&auto=format&fit=crop" 
                alt="Abhishek" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Full-stack engineer with experience in Python, JavaScript, ML, NLP, and web development. 
                Worked on predictive modeling, sentiment analysis, and building production-ready web interfaces.
              </p>
              <p>
                Strong foundation in algorithms, data structures, and problem-solving. 
                Experienced in teamwork through internships, event management, and AI/ML club roles.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-card/50 rounded-lg border border-white/5">
                <div className="text-3xl font-bold text-primary mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="p-4 bg-card/50 rounded-lg border border-white/5">
                <div className="text-3xl font-bold text-primary mb-1">8.34</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
