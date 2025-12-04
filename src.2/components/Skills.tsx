
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Globe, Server, Cpu } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "Microservices"],
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      title: "Frontend Development", 
      icon: <Globe className="h-6 w-6" />,
      skills: ["JavaScript", "React", "HTML5", "CSS3", "TypeScript"],
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design"],
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Google Cloud Platform", "Docker", "Kubernetes", "CI/CD", "Git"],
      color: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Architecture & Design",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["System Design", "Design Patterns", "Scalable Architecture", "Performance Optimization"],
      color: "bg-pink-500/10 border-pink-500/20"
    },
    {
      title: "Programming & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Data Structures", "Algorithms", "Testing", "Agile", "Problem Solving"],
      color: "bg-cyan-500/10 border-cyan-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            5+ years of hands-on experience with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`${category.color} backdrop-blur-sm border hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
