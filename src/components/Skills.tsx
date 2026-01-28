 import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle } from 'lucide-react';
import type { CloudTool } from '../types';
 
 
const Skills: React.FC = () => {
  const [ref, isVisible] = useScrollReveal();



  const cloudTools: CloudTool[] = [
    { category: "Languages", items: ["Java", "JavaScript / TypeScript", "Python / C++", "SQL"], color: "text-green-400" },
    { category: "Backend", items: ["Node.js / Express.js", "FastAPI", "Spring Boot"], color: "text-blue-400" },
    { category: "Frontend", items: ["React", "HTML5 / CSS3", "Tailwind CSS"], color: "text-purple-400" },
    { category: "Databases", items: ["MySQL / PostgreSQL", "MongoDB", "Redis", "Firebase Firestore / Firebase RealtimeDB"], color: "text-green-400" },
    { category: "Cloud Platforms", items: ["AWS ECS (Fargate)", "EC2 / ECR / S3", "CloudFront / ALB", "Aurora / ElastiCache"], color: "text-cyan-400" },
    { category: "DevOps & Tools", items: ["Docker", "GitLab CI/CD", "Git / GitHub", "Postman", "Firebase",], color: "text-purple-400" },
    {category: "Mobile Development", items: ["Native Android","React Native", "Flutter"], color: "text-blue-400" },
    { category: "Operating Systems", items: ["Linux / Windows"], color: "text-orange-400" }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 mb-4 tracking-widest uppercase">Technical Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Skills & Technologies</h3>
        </div>
        <div
          ref={ref}
          className={`mt-8 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 rounded-2xl p-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        > 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cloudTools.map((section: CloudTool, idx: number) => (
              <div key={idx} className="space-y-4">
                <div className="text-sm text-gray-400 mb-2">{section.category}</div>
                <div className="space-y-2">
                  {section.items.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${section.color}`} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;