import { motion } from "framer-motion";
import { Calendar, Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    company: "One Stop Global",
    role: "Intern (Remote)",
    location: "Gurgaon",
    period: "Oct 2024 – Dec 2024",
    description: [
      "Improved task efficiency by 15% with optimized workflows.",
      "Organized 500+ files and reports to improve accessibility.",
      "Attended workshops, increasing project knowledge by 30%.",
      "Used strong communication to coordinate with the team."
    ]
  },
  {
    company: "Cvent",
    role: "Volunteer",
    location: "New Delhi",
    period: "May 2023 – July 2023",
    description: [
      "Assisted in event planning and execution with the Event Management team.",
      "Communicated with attendees, resulting in positive feedback.",
      "Enhanced teamwork and coordination skills."
    ]
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
              
              <div className="flex flex-wrap items-center gap-3 text-lg font-medium text-primary mb-3">
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-2" />
                  {exp.company}
                </div>
                <div className="flex items-center text-sm text-muted-foreground/80">
                   <MapPin size={14} className="mr-1" />
                   {exp.location}
                </div>
              </div>
              
              <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
