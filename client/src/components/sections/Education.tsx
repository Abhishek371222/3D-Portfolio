import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "Vellore Institute of Technology (VIT)",
    year: "Sept 2022 – May 2026",
    grade: "CGPA: 8.34/10"
  },
  {
    degree: "Class XII – Higher Secondary Education",
    school: "Kendriya Vidyalaya Rajasthan",
    year: "Apr 2020 – Apr 2021",
    grade: "Percentage: 94%"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/30 backdrop-blur-md border-white/10 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                      <GraduationCap size={24} />
                      {edu.degree}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground flex items-center bg-white/5 px-3 py-1 rounded-full">
                      <Calendar size={14} className="mr-1" />
                      {edu.year}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2 text-foreground/90">{edu.school}</h3>
                  <p className="text-muted-foreground font-medium">{edu.grade}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
