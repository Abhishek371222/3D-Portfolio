import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Full-Stack Engineer",
    period: "2023 - Present",
    description: "Leading a team of 5 developers in building enterprise-grade React applications. Improved performance by 40% and reduced build times by 50%."
  },
  {
    company: "Digital Innovations",
    role: "Frontend Developer",
    period: "2021 - 2023",
    description: "Developed responsive UI components using React and TypeScript. Collaborated with designers to implement pixel-perfect designs."
  },
  {
    company: "StartUp Hub",
    role: "Junior Web Developer",
    period: "2019 - 2021",
    description: "Assisted in backend development using Node.js and Express. Maintained legacy codebases and fixed critical bugs."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                  <Calendar size={14} className="mr-1" />
                  {exp.period}
                </div>
              </div>
              
              <div className="text-lg font-medium text-primary mb-3 flex items-center">
                <Briefcase size={16} className="mr-2" />
                {exp.company}
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
