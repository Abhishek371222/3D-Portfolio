import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Python", "Redis"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"] },
  { category: "Tools", items: ["VS Code", "Figma", "Postman", "Jest", "Webpack", "Vite"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-white/5 h-full hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span 
                        key={item} 
                        className="px-3 py-1 text-sm rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
