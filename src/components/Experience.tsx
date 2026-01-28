 import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import { type Experience as ExperienceType } from '../types';

interface ExperienceCardProps extends ExperienceType { }

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  points,
  tags,
  color
}) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`h-full backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-400/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,217,255,0.2)] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl transition-all ${color}`} />
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h4 className="text-2xl font-bold mb-1">{title}</h4>
            <p className="text-cyan-400 font-medium">{company}, {location}</p>
          </div>
          <span className="px-4 py-1 rounded-full text-sm bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mt-2 md:mt-0">
            {period}
          </span>
        </div>
        <ul className="space-y-2 text-gray-400 mb-6">
          {points.map((point: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, idx: number) => (
            <span key={idx} className="px-3 py-1 rounded-full text-xs backdrop-blur-md bg-white/5 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences: ExperienceType[] = [
    {
      title: "Software Development Engineer I",
      company: "Onelab Ventures",
      location: "Pune (Onsite)",
      period: "Jun 2025 – Present",
      points: [
        "Building production-grade B2B e-commerce platform using React PWA and Node.js microservices, delivering core modules like auctions, inventory, and order workflows.",
        "Implemented asynchronous event-driven processing using Redis and BullMQ for real-time auctions, notifications, and background jobs.",
        "Designed and deployed containerized services on AWS ECS (Fargate) with auto-scaling, ALB-based traffic routing, and Docker image management via ECR.",
        "Built end-to-end CI/CD pipelines using GitLab CI/CD and deployed frontend apps on AWS S3 + CloudFront."
      ],
      tags: ["React + PWA", "Node.js", "AWS", "Postgres", "Redis", "BullMQ", "Docker", "TypeScript"],
      color: "bg-cyan-400/5 group-hover:bg-cyan-400/10"
    },
    {
      title: "Mobile Application Development Intern",
      company: "ResoluteAI Softwares",
      location: "Bangalore (Remote)",
      period: "Jan 2024 – Jun 2025",
      points: [
        "Worked on 4–5 production applications across healthcare, emergency response, and analytics domains.",
        "Improved application performance by 20% through component refactoring and UI optimization.",
        "Built secure REST APIs and modernized legacy Java modules by migrating to Kotlin.",
        "Implemented WebRTC video calling, geofenced live tracking, and health data integrations using Google Fit and Health Connect."
      ],
      tags: ["Java", "Kotlin", "Flutter", "WebRTC", "Google Fit/Health Connect", "REST APIs"],
      color: "bg-purple-500/5 group-hover:bg-purple-500/10"
    }
  ];

  return (
    <section id="experience" className="py-32 relative bg-[#111111]">
      <div className="max-w-screen mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 mb-4 tracking-widest uppercase">Work Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Professional Journey</h3>
        </div>

        <div className="max-w-screen mx-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp: ExperienceType, idx: number) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;