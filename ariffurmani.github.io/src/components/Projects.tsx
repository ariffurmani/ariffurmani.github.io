
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Code, Lock } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Scalable e-commerce platform built with Spring Boot microservices, featuring user management, product catalog, order processing, and payment integration.",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "GCP"],
      icon: <Database className="h-8 w-8" />,
      highlights: ["Microservices Architecture", "High Availability", "Real-time Processing"]
    },
    {
      title: "Cloud-Native Analytics Dashboard",
      description: "Real-time analytics dashboard processing millions of events daily, with interactive visualizations and automated reporting capabilities.",
      technologies: ["JavaScript", "React", "Node.js", "GCP BigQuery", "Kubernetes"],
      icon: <Cloud className="h-8 w-8" />,
      highlights: ["Real-time Analytics", "Scalable Processing", "Interactive UI"]
    },
    {
      title: "Enterprise Resource Planning System",
      description: "Comprehensive ERP solution for mid-size businesses with modules for inventory, finance, HR, and project management.",
      technologies: ["Java", "Spring Security", "PostgreSQL", "React", "Docker"],
      icon: <Code className="h-8 w-8" />,
      highlights: ["Enterprise Scale", "Security First", "Modular Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing scalable solutions and innovative approaches to complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in group h-full flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    {project.icon}
                  </div>
                  <CardTitle className="text-white text-xl">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-6 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="border-purple-400/30 text-purple-300 hover:bg-purple-400/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">Key Highlights</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 mt-auto text-gray-500 text-sm">
                  <Lock className="h-4 w-4" />
                  <span>Confidential - Client Project</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
