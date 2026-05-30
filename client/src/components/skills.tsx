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
    { icon: Code, name: "Java", category: "Programming Language", color: "text-orange-400", level: 90 },
    { icon: SiJavascript, name: "JavaScript", category: "Programming Language", color: "text-yellow-400", level: 70 },
    { icon: SiSpring, name: "Spring Boot", category: "Framework", color: "text-green-400", level: 95 },
    { icon: SiSpring, name: "Spring MVC", category: "Framework", color: "text-green-500", level: 85 },
    { icon: Database, name: "JPA/Hibernate", category: "ORM", color: "text-purple-400", level: 80 },
    { icon: Server, name: "Node.js/Express", category: "Runtime/Framework", color: "text-green-600", level: 70 },
    { icon: SiMongodb, name: "MongoDB", category: "NoSQL Database", color: "text-green-500", level: 90 },
    { icon: Database, name: "SQL Databases", category: "Relational DB", color: "text-blue-400", level: 85 },
    { icon: SiGit, name: "Git/GitHub", category: "Version Control", color: "text-red-500", level: 85 },
    { icon: Server, name: "RESTful APIs", category: "Web Services", color: "text-cyan-400", level: 95 },
    { icon: Server, name: "Microservices", category: "Architecture", color: "text-indigo-400", level: 80 },
    { icon: Code, name: "Data Structures", category: "Core Concepts", color: "text-pink-400", level: 85 },
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card 
                key={index} 
                className={`glass-card p-6 rounded-xl text-center skill-card transition-all duration-700 border-border transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative mb-4">
                    <IconComponent className={`text-4xl ${skill.color} mx-auto animate-float hover:scale-110 transition-transform duration-300`} style={{ animationDelay: `${index * 0.2}s` }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary transition-colors duration-300">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.category}</p>
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
