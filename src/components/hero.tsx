import * as React from "react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { motion } from "framer-motion";
import Hero3DParticles from "./Hero3DParticles";

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-0">
      {/* 3D background — sits behind everything */}
      <Hero3DParticles />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-slow" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating decorative shapes */}
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-accent/20 rounded-full animate-bounce-slow" />
      <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-accent/30 animate-rotate" />

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
            >
              <span className="gradient-text">Rakesh Sharma</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
            >
              Backend Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              Backend Developer with 1+ year of experience designing scalable APIs and
              enhancing system performance. Boosted database efficiency by 40%, improving
              application speed and reliability for seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center"
            >
              <Button
                onClick={() => scrollTo("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>

              <a href="/assets/Rakesh_resume.pdf" download className="inline-block">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}