
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Code, ExternalLink, Heart } from "lucide-react";

export const Footer = () => {

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/yourprofile",
      bgColor: "bg-blue-500/20 hover:bg-blue-500/30",
      textColor: "text-blue-400 hover:text-blue-300"
    },
    {
      name: "GitHub", 
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
      bgColor: "bg-gray-500/20 hover:bg-gray-500/30",
      textColor: "text-gray-300 hover:text-white"
    },
    {
      name: "LeetCode",
      icon: <Code className="h-5 w-5" />,
      href: "https://leetcode.com/yourprofile",
      bgColor: "bg-yellow-500/20 hover:bg-yellow-500/30",
      textColor: "text-yellow-400 hover:text-yellow-300"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="py-20 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div id="contact" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="text-center space-y-6">
                <Badge variant="outline" className="border-green-400/30 text-green-300 bg-green-400/10 px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for new opportunities
                </Badge>

                <div className="flex justify-center gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-6 py-3 rounded-lg border border-white/20 ${link.bgColor} ${link.textColor} transition-all duration-200 hover:scale-105`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.replace('#', ''));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              © 2024 Full Stack Developer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
