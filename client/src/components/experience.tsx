import { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Backend Developer (Java & Node.js)",
      company: "OneTick Technologies",
      location: "On-site",
      duration: "April 9, 2024 – Present",
      type: "Full-time",
      achievements: [
        "Built RESTful APIs for smooth front-end integration",
        "Optimized MongoDB queries, cutting execution time by 40%",
        "Integrated APIs for efficient module-to-module communication"
      ],
      technologies: ["Java", "Node.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Java Intern",
      company: "Snapticminds",
      location: "Online",
      duration: "June 1, 2023 – August 31, 2023",
      type: "Internship",
      achievements: [
        "Resolved codebase errors, including logic flaws and null pointer exceptions",
        "Added logging using Log4j for better traceability and debugging",
        "Assisted team with minor feature implementations and code updates"
      ],
      technologies: ["Java", "Log4j", "Debugging", "Code Review"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional journey building scalable backend solutions and enhancing system performance
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-start transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`} 
                  style={{ transitionDelay: `${index * 400}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-slate-900 z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-20 flex-1">
                    <Card className="glass-card p-6 rounded-2xl border-slate-700/50 skill-card transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div className="mb-4 lg:mb-0">
                            <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                            <div className="flex items-center text-primary font-medium mb-2">
                              <Briefcase className="w-4 h-4 mr-2" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{exp.location}</span>
                              </div>
                              <Badge className="bg-accent/20 text-accent px-2 py-1 text-xs">
                                {exp.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-slate-300 font-medium mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-slate-300 flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-slate-300 font-medium mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                className="bg-primary/20 text-primary px-3 py-1 text-xs rounded-full"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}