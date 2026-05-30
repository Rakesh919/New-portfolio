import * as React from "react";
import { ExternalLink, Github, Truck, BarChart3, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Meghalaya Government Citizen Portal",
    description: "Built a dashboard that aggregates citizen registrations, verified users, applied schemes, and survey participation into a clear summary view.",
    image: "https://images.unsplash.com/photo-1555952517-8f4e19f2b8aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: BarChart3,
    technologies: ["React", "TypeScript", "REST APIs"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-green-500/20 text-green-400"]
  },
  {
    title: "Chhattisgarh Government Master Data Workflow",
    description: "Implemented master data flow with maker, checker, and approver stages, including return, approval, and rejection controls.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Layers,
    technologies: ["Java", "Spring Boot", "Workflow Automation"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-yellow-500/20 text-yellow-400"]
  },
  {
    title: "Logipod",
    description: "E-way bill creation and management system integrated with the GSTIN portal. Developed 6 modules for creating and managing e-way bills with task automation.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Truck,
    technologies: ["Java", "GSTIN API", "Task Schedulers"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-red-500/20 text-red-400"]
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  hover: { y: -10, rotateX: 6, rotateY: 6, scale: 1.02, transition: { duration: 0.3, type: 'spring', stiffness: 240, damping: 20 } }
};

const iconPulse = {
  initial: { filter: 'drop-shadow(0 0 0px rgba(59, 130, 246, 0.65))' },
  animate: {
    filter: [
      'drop-shadow(0 0 0px rgba(59, 130, 246, 0.65))',
      'drop-shadow(0 0 18px rgba(59, 130, 246, 0.55))',
      'drop-shadow(0 0 0px rgba(59, 130, 246, 0.65))'
    ],
    transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
  },
  hover: {
    rotate: 12,
    scale: 1.05,
    filter: 'drop-shadow(0 0 28px rgba(59, 130, 246, 0.75))',
    transition: { duration: 0.35, type: 'spring', stiffness: 260, damping: 18 }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-slate-800/30 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-12 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute right-0 bottom-10 w-80 h-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-float-delayed" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of government dashboards, workflow automation, and refined backend solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card rounded-[2rem] overflow-hidden border border-slate-700/40 shadow-2xl shadow-slate-950/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-56 overflow-hidden bg-slate-950/90">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-950/95" />
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
                  <div className="absolute left-6 bottom-6 w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
                  <motion.div
                    variants={iconPulse}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="relative z-10 flex h-full items-center justify-center"
                    style={{ perspective: 800 }}
                  >
                    <ProjectIcon className="w-24 h-24 text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.75)]" />
                  </motion.div>
                </div>
                <CardContent className="p-6 pb-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">{project.title}</h3>
                  <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className={`${project.colors[techIndex]} px-3 py-1 rounded-full text-xs`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-primary hover:text-blue-300 transition-colors">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-primary hover:text-blue-300 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                    <span className="ml-auto text-xs uppercase tracking-[0.25em] text-slate-500">Live preview soon</span>
                  </div>
                </CardContent>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
