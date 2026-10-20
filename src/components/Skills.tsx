import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { CloudTool } from '../types';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const Skills: React.FC = () => {
  const cloudTools: CloudTool[] = [
    { category: "Languages", items: ["Java", "JavaScript / TypeScript", "Python / C++", "SQL"], color: "text-green-400" },
    { category: "Backend", items: ["Node.js / Express.js", "FastAPI", "Spring Boot"], color: "text-blue-400" },
    { category: "Frontend", items: ["React", "Redux Toolkit", "HTML5 / CSS3", "Tailwind CSS"], color: "text-purple-400" },
    { category: "Databases", items: ["MySQL / PostgreSQL", "MongoDB", "Redis", "Firebase Firestore / Firebase RealtimeDB"], color: "text-green-400" },
    { category: "Cloud Platforms", items: ["AWS", "GCP"], color: "text-cyan-400" },
    { category: "DevOps & Tools", items: ["Docker", "GitLab CI/CD", "Git / GitHub", "Postman", "Firebase"], color: "text-purple-400" },
    { category: "AI / LLM", items: ["LLM Agents", "MCP", "LangChain", "LangGraph"], color: "text-pink-400" },
    {category: "Mobile Development", items: ["Native Android","React Native", "Flutter"], color: "text-blue-400" },
    { category: "Operating Systems", items: ["Linux / Windows"], color: "text-orange-400" }
  ];

  const renderItems = (items: string[], color: string) => (
    <ul className="space-y-2">
      {items.map((item: string) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${color}`} aria-hidden="true" />
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeader eyebrow="Technical Expertise" title="Skills & Technologies" />

        <Reveal>
          <div className="glass-card p-5 sm:p-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
              {cloudTools.map((section: CloudTool) => (
                <div key={section.category} className="min-w-0 space-y-3">
                  <div className="text-sm text-gray-400">{section.category}</div>
                  {renderItems(section.items, section.color)}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
