import * as React from "react";
import { ExternalLink, Github, Truck, AlertCircle, BarChart2, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Custom SVG for complaint icon
const ComplaintIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" {...props}>
    <circle cx="15" cy="18" r="7" fill="#60A5FA" />
    <ellipse cx="15" cy="32" rx="10" ry="5" fill="#CBD5E1" />
    <circle cx="28" cy="14" r="4" fill="#F87171" />
    <text x="27" y="16" textAnchor="middle" fontSize="2.2em" fontWeight="bold" fill="#fff">!</text>
  </svg>
);

// SVG for Complaint/Grievance (group of people)
const ComplaintGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" {...props}>
    {/* Main person */}
    <circle cx="20" cy="18" r="6" fill="#60A5FA" />
    <ellipse cx="20" cy="32" rx="9" ry="5" fill="#93C5FD" />
    {/* Left person */}
    <circle cx="10" cy="22" r="4" fill="#FBBF24" />
    <ellipse cx="10" cy="32" rx="5" ry="3" fill="#FDE68A" />
    {/* Right person */}
    <circle cx="30" cy="22" r="4" fill="#F472B6" />
    <ellipse cx="30" cy="32" rx="5" ry="3" fill="#FBCFE8" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: "TMS (Transporter Management System)",
      description: "Currently developing a comprehensive transporter management system to optimize logistics and fleet operations with real-time tracking, automated invoicing, and customer management features.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Spring Boot", "Java", "MongoDB"],
      colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-green-500/20 text-green-400"]
    },
    {
      title: "Samadhan – Grievance Portal",
      description: "The grievance portal facilitates complaint submission, tracking, and resolution, with streamlined member management and enhanced user administration features for improved usability.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Spring Boot", "Java", "REST APIs"],
      colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-yellow-500/20 text-yellow-400"]
    },
    {
      title: "Logipod",
      description: "E-way bill creation and management system integrated with the GSTIN portal. Developed 6 modules for creating and managing e-way bills, automating 30% of operations with task schedulers.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "GSTIN API", "Task Schedulers"],
      colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-red-500/20 text-red-400"]
    },
  ];

  const iconPulse = {
    initial: { filter: 'drop-shadow(0 0 0px #3b82f6)' },
    animate: {
      filter: [
        'drop-shadow(0 0 0px #3b82f6)',
        'drop-shadow(0 0 12px #3b82f6)',
        'drop-shadow(0 0 0px #3b82f6)'
      ],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
    hover: {
      rotateY: 180,
      filter: 'drop-shadow(0 0 24px #3b82f6)',
      transition: { duration: 0.6, type: 'spring' }
    }
  };

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
          {projects.map((project, index) => {
            let ProjectIcon;
            if (project.title.includes("Transporter")) ProjectIcon = Truck;
            else if (project.title.includes("Grievance")) ProjectIcon = ComplaintGroupIcon;
            else ProjectIcon = FileText;
            return (
              <Card key={index} className="glass-card rounded-2xl overflow-hidden skill-card transition-all duration-300 border-slate-700/50">
                <div className="flex items-center justify-center w-full h-48 bg-gradient-to-br from-slate-800/60 to-slate-700/40">
                  <motion.span
                    variants={iconPulse}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="inline-block"
                    style={{ perspective: 600 }}
                  >
                    <ProjectIcon className="w-20 h-20 text-primary drop-shadow-lg" />
                  </motion.span>
                </div>
                <CardContent className="p-6">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
