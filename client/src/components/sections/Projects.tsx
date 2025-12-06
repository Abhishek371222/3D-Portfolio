import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, ExternalLink, Folder, TrendingUp, MessageSquare, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Stock Price Prediction",
    period: "Sept 2025 – Nov 2025",
    description: "Built predictive model for stock price forecasting using LSTM and Random Forest on historical market data. Implemented preprocessing, feature engineering (technical indicators), and model evaluation achieving 85%+ accuracy. Created interactive dashboard for visualization and trend analysis.",
    tags: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "Data Visualization"],
    links: { demo: "#", github: "#" },
    icon: <TrendingUp size={24} />
  },
  {
    title: "Sentiment Analysis System",
    period: "Jan 2023 – Apr 2023",
    description: "Achieved 92% sentiment classification accuracy on 10,000+ social media posts. Implemented NLP pipeline: preprocessing, tokenization, TF-IDF vectorization. Trained and compared multiple ML models (SVM, Naive Bayes, Random Forest).",
    tags: ["Python", "NLTK", "Scikit-Learn", "NLP", "Machine Learning"],
    links: { demo: "#", github: "#" },
    icon: <MessageSquare size={24} />
  },
  {
    title: "Personal Portfolio Website",
    period: "Aug 2024 – Sept 2024",
    description: "Developed responsive portfolio with modern UI/UX; scored 95+ on Lighthouse. Built interactive galleries, forms, animations; deployed to GitHub Pages.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "GitHub Pages"],
    links: { demo: "#", github: "#" },
    icon: <Layout size={24} />
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
                      {project.icon}
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
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono block mb-2">{project.period}</span>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-base mb-6 leading-relaxed text-muted-foreground/90">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs font-mono bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                        {tag}
                      </Badge>
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
