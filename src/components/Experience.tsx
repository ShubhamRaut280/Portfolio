import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import { type Experience as ExperienceType } from '../types';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

interface ExperienceCardProps extends ExperienceType {
  delay?: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  points,
  tags,
  color,
  delay = 0,
}) => {
  const isCurrent = period.includes('Present');

  return (
    <Reveal as="li" delay={delay} className="relative">
      {/* Timeline dot, centred on the vertical line */}
      <span
        className="absolute -left-5 top-7 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center md:-left-[30px] md:top-10 md:h-4 md:w-4"
        aria-hidden="true"
      >
        {isCurrent && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/60" />}
        <span
          className={`relative inline-flex h-full w-full rounded-full border-2 border-ink-raised ${
            isCurrent
              ? 'bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,0.6)]'
              : 'bg-purple-500 shadow-[0_0_10px_2px_rgba(168,85,247,0.45)]'
          }`}
        />
      </span>

      <article className="glass-card glass-card-hover group relative overflow-hidden p-5 md:p-8">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl transition-colors duration-500 ${color}`}
          aria-hidden="true"
        />
        <div className="relative">
          <header className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="min-w-0">
              <h3 className="text-xl font-bold leading-snug md:text-2xl">{title}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-medium text-cyan-400 md:text-base">
                <span>{company},</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                  {location}
                </span>
              </p>
            </div>
            <span className="inline-flex w-fit flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400 md:px-4 md:text-sm">
              {isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />}
              {period}
            </span>
          </header>

          <ul className="mb-6 space-y-2.5 text-sm leading-relaxed text-gray-400 md:text-base">
            {points.map((point: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <ChevronRight className="mt-[3px] h-4 w-4 flex-shrink-0 text-cyan-400 md:mt-1" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2" aria-label={`Technologies used at ${company}`}>
            {tags.map((tag: string) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
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
        "Built and maintained a production-grade B2B e-commerce platform that processed ₹650+ crore in orders and payments within the first 6 months of launch.",
        "Building an AI-powered retrosynthesis platform for molecule synthesis planning, with LLM agents, an MCP tool server, async Celery pipelines and ML services on GCP Cloud Run.",
        "Delivered real-time result streaming (SSE) and an AI-assisted quoting system that turns synthesis routes into cost and timeline quotes.",
        "Developed a multi-market analytics platform consolidating operational, sales, and marketing data into unified dashboards with drill-down reporting by market, channel, and business segment.",
        "Built an AI-driven assignment evaluation platform featuring role-based workflows, timed assessments, automated submissions, rubric-based scoring, and review pipelines.",
        "Implemented asynchronous event-driven architectures using Redis and BullMQ for notifications, background jobs, and real-time business workflows.",
        "Designed and deployed cloud-native infrastructure on AWS ECS (Fargate), ECR, S3, CloudFront, ALB, Aurora, and ElastiCache, while establishing CI/CD pipelines using GitLab CI/CD and AWS Amplify."
      ],
      tags: ["React + PWA", "Node.js", "TypeScript", "FastAPI", "Celery", "LLM Agents", "MCP", "AWS", "GCP", "Postgres", "Redis", "BullMQ", "Docker"],
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
    <section id="experience" className="section bg-ink-raised">
      <div className="container-page">
        <SectionHeader eyebrow="Work Experience" title="Professional Journey" />

        <ol className="relative mx-auto max-w-4xl space-y-8 pl-8 md:space-y-10 md:pl-12">
          {/* Vertical timeline line */}
          <span
            className="pointer-events-none absolute bottom-0 left-3 top-2 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-[18px]"
            aria-hidden="true"
          />
          {experiences.map((exp: ExperienceType, idx: number) => (
            <ExperienceCard key={`${exp.company}-${exp.title}`} {...exp} delay={idx * 100} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
