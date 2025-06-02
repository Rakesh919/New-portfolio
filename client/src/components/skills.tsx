import { useEffect, useState } from 'react';
import { SiJavascript, SiSpring, SiMongodb, SiGit } from "react-icons/si";
import { Code, Database, Server, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Java", icon: Code, level: 95, color: "from-orange-500 to-red-600" },
    { name: "Spring Boot", icon: SiSpring, level: 90, color: "from-green-500 to-emerald-600" },
    { name: "MongoDB", icon: SiMongodb, level: 85, color: "from-green-400 to-green-700" },
    { name: "JavaScript", icon: SiJavascript, level: 75, color: "from-yellow-400 to-orange-500" },
    { name: "Node.js", icon: Server, level: 70, color: "from-green-600 to-green-800" },
    { name: "SQL", icon: Database, level: 88, color: "from-blue-500 to-blue-700" },
    { name: "REST APIs", icon: Globe, level: 92, color: "from-cyan-500 to-blue-600" },
    { name: "Git", icon: SiGit, level: 80, color: "from-red-500 to-pink-600" }
  ];

  const stats = [
    { label: 'Years Experience', value: '1+', icon: Zap },
    { label: 'Projects Completed', value: '3+', icon: Server },
    { label: 'API Endpoints Built', value: '50+', icon: Globe },
    { label: 'Database Optimization', value: '40%', icon: Database }
  ];

  return (
    <section id="skills" className="py-32 bg-muted/30 dark:bg-slate-800/30 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse-slow animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-rotate"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">Technical Skills</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies and frameworks I work with to build powerful backend solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index} 
                className={`glass-card rounded-2xl skill-card transition-all duration-700 border-slate-700/50 hover:border-slate-500/50 group transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                  
                  {/* Skill Level Progress */}
                  <div className="relative mb-2">
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${800 + (index * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{skill.level}%</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className={`glass-card text-center p-6 rounded-xl hover-lift transition-all duration-700 border-border transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} 
                style={{ transitionDelay: `${800 + (index * 100)}ms` }}
              >
                <CardContent className="p-0">
                  <IconComponent className="w-8 h-8 mx-auto mb-3 text-primary animate-bounce-slow" style={{ animationDelay: `${index * 0.3}s` }} />
                  <div className="text-3xl font-black text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
