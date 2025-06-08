import { useEffect, useState } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
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

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "MVN University",
      duration: "2020 – 2024",
      cgpa: "CGPA: 8.2",
      description: "Comprehensive study of computer science fundamentals including data structures, algorithms, and software engineering principles."
    },
    {
      degree: "Senior Secondary Education",
      institution: "Aggarwal Public School, Ballabgarh",
      duration: "2018 – 2020",
      cgpa: "Score: 70%",
      description: "Strong foundation in mathematics and science with focus on analytical thinking and problem-solving skills."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and analytical thinking
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`glass-card p-8 rounded-2xl border-slate-700/50 skill-card transition-all duration-700 transform ${
                isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
              }`} 
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center text-slate-400 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="text-accent font-semibold">{edu.cgpa}</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}