import { Server, Database, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 dark:bg-slate-800/50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Crafting efficient and scalable backend solutions with modern technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <Card className="glass-card p-8 rounded-2xl border-border hover-lift">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Backend Developer with 1+ year of experience designing scalable APIs and enhancing system performance. 
                  Boosted database efficiency by 40% at OneTick Technologies, improving application speed and reliability 
                  for seamless user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in building RESTful APIs, optimizing database queries, and integrating efficient 
                  module-to-module communication. My expertise spans Java, Spring Boot, MongoDB, and modern backend 
                  development practices.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            <Card className="glass-card p-6 rounded-2xl skill-card transition-all duration-300 border-border hover:scale-105">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Server className="text-primary text-2xl mr-4 animate-float" />
                  <h4 className="text-xl font-semibold text-foreground">Backend Architecture</h4>
                </div>
                <p className="text-muted-foreground">Designing scalable microservices and API architectures</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-6 rounded-2xl skill-card transition-all duration-300 border-border hover:scale-105" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Database className="text-accent text-2xl mr-4 animate-bounce-slow" />
                  <h4 className="text-xl font-semibold text-foreground">Database Design</h4>
                </div>
                <p className="text-muted-foreground">Optimizing database performance and structure</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-6 rounded-2xl skill-card transition-all duration-300 border-border hover:scale-105" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Cloud className="text-primary text-2xl mr-4 animate-pulse-slow" />
                  <h4 className="text-xl font-semibold text-foreground">Cloud Solutions</h4>
                </div>
                <p className="text-muted-foreground">Deploying and managing cloud-based applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
