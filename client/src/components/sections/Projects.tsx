import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    links: { demo: "#", github: "#" },
    featured: true
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform leveraging OpenAI's API to help marketers generate blog posts and social media content.",
    tags: ["Next.js", "Tailwind", "OpenAI API", "Stripe"],
    links: { demo: "#", github: "#" },
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop kanban boards and team chat.",
    tags: ["Vue.js", "Firebase", "Vuex"],
    links: { demo: "#", github: "#" },
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col bg-card/40 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                      <Folder size={24} />
                    </div>
                    <div className="flex gap-2">
                      <a href={project.links.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.links.demo} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-6">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-primary/80">
                        {tag}
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
