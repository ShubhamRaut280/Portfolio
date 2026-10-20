import React from 'react';
import { Trophy, Star, IdCard, ExternalLink } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import Reveal from './ui/Reveal';

interface AwardCardProps {
  icon: LucideIcon;
  title: string;
  company: string;
  year: string;
  link?: string;
  description: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ icon: Icon, title, company, year, link, description }) => (
  <article className="group rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-yellow-500/[0.03] p-5 backdrop-blur-xl transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_20px_40px_-18px_rgba(250,204,21,0.25)] sm:p-6">
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/20 ring-1 ring-yellow-400/20 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
          <h3 className="text-base font-bold sm:text-lg">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`More info about ${title} (opens in a new tab)`}
              className="inline-flex items-center gap-1 text-xs font-medium text-yellow-400 transition-colors hover:text-yellow-300 hover:underline underline-offset-4"
            >
              More Info
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
        <p className="mt-0.5 text-sm text-gray-400">
          {company} <span aria-hidden="true">•</span> {year}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-300">{description}</p>
      </div>
    </div>
  </article>
);

interface StatTileProps {
  value: string;
  label: string;
  detail?: string;
  valueClassName: string;
}

const StatTile: React.FC<StatTileProps> = ({ value, label, detail, valueClassName }) => (
  <div className="glass-card glass-card-hover flex h-full items-center gap-4 p-4 sm:flex-col sm:items-center sm:justify-start sm:gap-1 sm:text-center">
    <div className={`w-24 flex-shrink-0 font-display text-2xl font-bold sm:w-auto md:text-3xl lg:text-2xl xl:text-3xl ${valueClassName}`}>
      {value}
    </div>
    <div className="min-w-0">
      <div className="text-sm text-gray-400">{label}</div>
      {detail && <div className="mt-0.5 text-xs leading-snug text-gray-500 text-balance">{detail}</div>}
    </div>
  </div>
);

const certifications = [
  { name: 'Claude Certified Architect – Foundations', link: 'https://www.credly.com/badges/708fc779-3ff4-47cb-90e1-b9b67bb68fb2/public_url' },
  { name: 'Accenture Nordics Developer Program', link: 'https://drive.google.com/file/d/1KzjUFKgFwRoj2dWXHj9HKbljyRhAMUpI/view?usp=sharing' },
  { name: 'Postman API Fundamentals Student Expert', link: 'https://api.badgr.io/public/assertions/1fMtBEytRayXMeposAemSA' },
  { name: 'Java', link: 'https://drive.google.com/file/d/1LMBDrknzpRZ0OnbYsTMo8oOisqoqEKzi/view?usp=sharing' },
  { name: 'MySQL', link: 'https://drive.google.com/file/d/1jF3zN1Ecp5yUa-SXFu_uIQ0HhCrE6xOG/view?usp=sharing' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">About Me</p>
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Building scalable solutions for <span className="text-gradient">real-world</span> problems
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-400">
              <p>
                Software Development Engineer with hands-on experience building scalable, production-grade web and mobile applications.
                Strong background in designing microservices, real-time systems, and event-driven architectures using Redis, BullMQ, Celery, and WebSockets, and in building AI agent platforms with LLMs and MCP.
              </p>
              <p>
                Experienced in deploying and operating cloud-native applications on AWS (ECS Fargate, S3, CloudFront, ALB) and GCP Cloud Run with containerized Docker workflows.
                Comfortable working across the full stack, owning features end-to-end from API design to frontend delivery and CI/CD automation.
                Driven by a passion for solving real-world problems, writing maintainable code, and continuously learning modern engineering practices.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <StatTile value="B.E." label="Computer Science" detail="Sinhgad College" valueClassName="text-cyan-400" />
              <StatTile value="Diploma" label="Engineering" detail="Government Polytechnic Khamgaon" valueClassName="text-purple-500" />
              <StatTile value="2+" label="Years Exp." valueClassName="text-green-400" />
            </div>
          </Reveal>

          <div className="space-y-5 sm:space-y-6">
            <Reveal delay={100}>
              <AwardCard
                icon={Trophy}
                title="Customer Champion Award"
                company="Onelab Ventures"
                link="https://drive.google.com/file/d/1QUKRPD6DVNWDiajRwz1g_zjMEvZgqAC4/view?usp=sharing"
                year="2025"
                description="Recognized for strong client-first mindset and consistently exceeding customer expectations."
              />
            </Reveal>

            <Reveal delay={200}>
              <AwardCard
                icon={Star}
                title="Rising Star Award"
                company="Onelab Ventures"
                link="https://drive.google.com/file/d/1ZSSrJumJK9RBAA-hVlTycSIHmg_7dsKS/view?usp=sharing"
                year="2025"
                description="Awarded for rapid growth, initiative, and impactful early-stage contributions."
              />
            </Reveal>

            <Reveal delay={300}>
              <div className="glass-card glass-card-hover p-5 sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                  <IdCard className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                  Certifications
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <li key={cert.name} className="max-w-full">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${cert.name} certificate (opens in a new tab)`}
                        className="chip max-w-full gap-1.5 transition-colors duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white"
                      >
                        <span className="break-words">{cert.name}</span>
                        <ExternalLink className="h-3 w-3 flex-shrink-0 opacity-60" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
