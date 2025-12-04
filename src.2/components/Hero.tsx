import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Code, ExternalLink } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div className="animate-fade-in">
            <div className="mb-4">
              <p className="text-lg md:text-xl text-purple-300 font-medium tracking-wide">
                Hello, I'm
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Furmani Arif Y.
              </h2>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Software
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Engineer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              5+ years of experience crafting scalable solutions with Java, Spring, MySQL, JavaScript, and GCP. 
              Passionate about building robust applications that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('skills')}
              variant="outline" 
              size="lg" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg"
            >
              My Skills
              <Code className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6 pt-8 animate-fade-in">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6 text-blue-400" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6 text-gray-300" />
            </a>
            <a 
              href="https://leetcode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Code className="h-6 w-6 text-yellow-400" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2 animate-fade-in">
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10 shadow-2xl">
              {/* Placeholder - replace with your actual image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <Code className="w-12 h-12 text-purple-300" />
                  </div>
                  <p className="text-white/70 text-sm">Your Photo Here</p>
                </div>
              </div>
              
              {/* You can replace the above div with an actual image like this: */}
              {/* <img 
                src="/path-to-your-image.jpg" 
                alt="Software Engineer" 
                className="w-full h-full object-cover"
              /> */}
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-8 w-8 text-purple-400" />
      </button>
    </section>
  );
};
