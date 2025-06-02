import { ExternalLink, Github, Truck, MessageSquare, FileText, Server, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "TMS (Transporter Management System)",
      description: "Currently developing a comprehensive transporter management system to optimize logistics and fleet operations with real-time tracking, automated invoicing, and customer management features.",
      icon: Truck,
      gradient: "from-blue-500 to-blue-700",
      technologies: ["Spring Boot", "Java", "MongoDB"],
      colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-green-500/20 text-green-400"]
    },
    {
      title: "Samadhan – Grievance Portal",
      description: "The grievance portal facilitates complaint submission, tracking, and resolution, with streamlined member management and enhanced user administration features for improved usability.",
      icon: MessageSquare,
      gradient: "from-green-500 to-green-700",
      technologies: ["Spring Boot", "Java", "REST APIs"],
      colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-yellow-500/20 text-yellow-400"]
    },
    {
      title: "Logipod",
      description: "E-way bill creation and management system integrated with the GSTIN portal. Developed 6 modules for creating and managing e-way bills, automating 30% of operations with task schedulers.",
      icon: FileText,
      gradient: "from-purple-500 to-purple-700",
      technologies: ["Java", "GSTIN API", "Task Schedulers"],
      colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-red-500/20 text-red-400"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of backend solutions and architectures I've built
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card rounded-2xl overflow-hidden skill-card transition-all duration-300 border-slate-700/50">
              <div className="p-8 pb-0">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-2xl`}>
                  <project.icon className="w-12 h-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6 pt-0">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={`${project.colors[techIndex]} px-3 py-1 rounded-full text-xs`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-primary hover:text-blue-400 transition-colors">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-primary hover:text-blue-400 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
