// components/Skills.tsx
import React, { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Globe, Smartphone, Cloud, CheckCircle, type LucideIcon } from 'lucide-react';
import type { Skill, CloudTool } from '../types';

interface SkillBarProps extends Skill {
  delay: number;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color, delay, isVisible }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && barRef.current) {
      const timer = setTimeout(() => {
        if (barRef.current) {
          barRef.current.style.width = percentage;
        }
      }, delay * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  const gradientColors: Record<string, string> = {
    'text-blue-400': 'from-blue-500 to-cyan-300',
    'text-green-400': 'from-green-500 to-emerald-300',
    'text-cyan-400': 'from-cyan-500 to-blue-300',
    'text-purple-400': 'from-purple-500 to-pink-300'
  };

  return (
    <div>
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-gray-300">{name}</span>
        <span className={color}>{percentage}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full rounded-full transition-all duration-1500 ease-out w-0 bg-gradient-to-r ${gradientColors[color] || 'from-cyan-500 to-blue-300'}`}
        />
      </div>
    </div>
  );
};

interface SkillsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: Skill[];
  tags: string[];
  colorClass: string;
  iconColor: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  icon: Icon,
  title,
  description,
  skills,
  tags,
  colorClass,
  iconColor
}) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 rounded-2xl p-8 hover:${colorClass} transition-all group`}
    >
      <div className={`w-14 h-14 rounded-xl ${iconColor.replace('text-', 'bg-')}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="space-y-4">
        {skills.map((skill: Skill, idx: number) => (
          <SkillBar key={idx} {...skill} delay={idx} isVisible={isVisible} />
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

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