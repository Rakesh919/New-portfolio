import * as React from "react";
import { SiSpring, SiMongodb, SiGit } from "react-icons/si";
import { Code2, Database, Server, Zap, Globe, Layers, TreePine, Share2, Link2, Network, Rocket, Layout } from 'lucide-react';
import { motion } from "framer-motion";

// SVG for JavaScript logo
const JsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#F7DF1E" />
    <text x="8" y="23" fontFamily="monospace" fontWeight="bold" fontSize="16" fill="#222">JS</text>
  </svg>
);

// SVG for Java (official logo, black)
const JavaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    <path d="M24 44c-8.837 0-16-1.79-16-4 0-1.21 3.13-2.27 8.06-2.89M24 44c8.837 0 16-1.79 16-4 0-1.21-3.13-2.27-8.06-2.89M24 44V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 36c-4.418 0-8-1.343-8-3s3.582-3 8-3 8 1.343 8 3-3.582 3-8 3z" stroke="currentColor" strokeWidth="2" />
    <path d="M24 28c-2.21 0-4-1.343-4-3s1.79-3 4-3 4 1.343 4 3-1.79 3-4 3z" stroke="currentColor" strokeWidth="2" />
    <path d="M24 20c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" stroke="currentColor" strokeWidth="2" />
    <path d="M24 12c0-2 2-4 2-4s-2-2-2-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// SVG for Data Structures (binary tree with nodes and edges)
const DataStructuresTree = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="none" {...props}>
    {/* Edges */}
    <line x1="24" y1="10" x2="12" y2="24" stroke="currentColor" strokeWidth="2" />
    <line x1="24" y1="10" x2="36" y2="24" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="24" x2="8" y2="38" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="24" x2="16" y2="38" stroke="currentColor" strokeWidth="2" />
    <line x1="36" y1="24" x2="32" y2="38" stroke="currentColor" strokeWidth="2" />
    <line x1="36" y1="24" x2="40" y2="38" stroke="currentColor" strokeWidth="2" />
    {/* Nodes */}
    <circle cx="24" cy="10" r="3" fill="currentColor" />
    <circle cx="12" cy="24" r="3" fill="currentColor" />
    <circle cx="36" cy="24" r="3" fill="currentColor" />
    <circle cx="8" cy="38" r="3" fill="currentColor" />
    <circle cx="16" cy="38" r="3" fill="currentColor" />
    <circle cx="32" cy="38" r="3" fill="currentColor" />
    <circle cx="40" cy="38" r="3" fill="currentColor" />
  </svg>
);

// SVG for Spring Boot (green circle, white curve and dot - leaf style)
const SpringBootLeaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" fill="none" {...props}>
    <circle cx="20" cy="20" r="16" fill="#22c55e" />
    <path d="M27 13c-3 0-7 3-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 20c0-4 4-7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <circle cx="27" cy="13" r="1.5" fill="#fff" />
  </svg>
);

const skills = [
  { icon: JavaLogo, name: "Java", category: "Programming Language", color: "#fb923c", level: 90 },
  { icon: JsLogo, name: "JavaScript", category: "Programming Language", color: "#facc15", level: 70 },
  { icon: SiSpring, name: "Spring Boot", category: "Framework", color: "#22c55e", level: 95 },
  { icon: Rocket, name: "Spring MVC", category: "Framework", color: "#16a34a", level: 85 },
  { icon: Link2, name: "JPA/Hibernate", category: "ORM", color: "#a78bfa", level: 80 },
  { icon: Server, name: "Node.js/Express", category: "Runtime/Framework", color: "#22d3ee", level: 70 },
  { icon: SiMongodb, name: "MongoDB", category: "NoSQL Database", color: "#10b981", level: 90 },
  { icon: Database, name: "SQL Databases", category: "Relational DB", color: "#60a5fa", level: 85 },
  { icon: SiGit, name: "Git/GitHub", category: "Version Control", color: "#ef4444", level: 85 },
  { icon: Share2, name: "RESTful APIs", category: "Web Services", color: "#06b6d4", level: 95 },
  { icon: Network, name: "Microservices", category: "Architecture", color: "#818cf8", level: 80 },
  { icon: DataStructuresTree, name: "Data Structures", category: "Core Concepts", color: "#f472b6", level: 85 },
];

const stats = [
  { label: 'Years Experience', value: '1+', icon: 'Zap' },
  { label: 'Projects Completed', value: '3+', icon: 'Server' },
  { label: 'API Endpoints Built', value: '50+', icon: 'Globe' },
  { label: 'Database Optimization', value: '40%', icon: 'Database' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, type: 'spring', bounce: 0.2 }
  })
};

const iconFloat = {
  animate: {
    y: [0, -8, 0, 8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 dark:bg-slate-800/30 relative overflow-hidden min-h-[70vh]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and frameworks I work with to build powerful backend solutions
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-xl border border-slate-700/40 p-8 flex flex-col items-center justify-center min-h-[170px] min-w-[220px] w-full group transition-transform duration-300"
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.07, boxShadow: `0 8px 32px 0 ${skill.color}33` }}
              >
                <motion.span
                  variants={iconFloat}
                  animate="animate"
                  className="flex items-center justify-center rounded-full mb-4 shadow-lg"
                  style={{ background: skill.color + '22', width: 44, height: 44 }}
                >
                  <Icon className="text-2xl" style={{ color: skill.color, width: '1.5em', height: '1.5em' }} />
                </motion.span>
                <div className="text-lg font-semibold text-white text-center mb-1 drop-shadow-sm">{skill.name}</div>
                <div className="text-xs text-slate-400 text-center">{skill.category}</div>
              </motion.div>
            );
          })}
        </div>
        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-7">
            {stats.map((stat, idx) => {
              const Icon = { Zap: Zap, Server: Server, Globe: Globe, Database: Database }[stat.icon] as React.ElementType;
              return (
                <motion.div
                  key={stat.label}
                  className="bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-xl border border-slate-700/40 p-8 flex flex-col items-center justify-center min-h-[170px] group hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.1, type: 'spring', bounce: 0.2 }}
                >
                  {Icon ? (
                    <motion.span
                      variants={iconFloat}
                      animate="animate"
                      className="inline-block"
                    >
                      <Icon className="w-9 h-9 mb-4 text-blue-400" />
                    </motion.span>
                  ) : null}
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-base text-slate-400 text-center">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
