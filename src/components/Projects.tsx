import React from 'react';
import { Github, Server, MessageSquare, Zap, Users, Globe, AlertTriangle, Brush, FlaskConical } from 'lucide-react';
import type { Project, ProjectLink } from '../types';
import { FaDocker } from 'react-icons/fa';
import { SiSwagger } from 'react-icons/si';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  points,
  tech,
  links,
  icon: Icon,
  gradient,
  tags
}) => {
  return (
    <article className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden">
      {/* Compact header: project gradient + icon + tags */}
      <div className="relative h-28 overflow-hidden sm:h-32">
        <div
          aria-hidden="true"
          className={`absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 ${gradient}`}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_120%,rgba(255,255,255,0.12),transparent_60%)]"
        />
        <div className="relative flex h-full items-end justify-between gap-3 p-4 sm:p-5">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex max-w-[75%] flex-wrap content-end justify-end gap-1.5">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="chip border-white/15 bg-black/30 px-2.5 py-0.5 text-[11px] text-gray-100 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 font-display text-lg font-bold leading-snug transition-colors group-hover:text-cyan-400 md:text-xl">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-400">{description}</p>
        <ul className="mb-5 space-y-1.5 text-sm text-gray-400">
          {points.map((point: string, idx: number) => (
            <li key={idx} className="flex gap-2.5 leading-relaxed">
              <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400/80" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <ul className="mb-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {tech.map((t: string) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/5 pt-4">
            <div className="-ml-2 flex gap-1">
              {links.map((link: ProjectLink, idx: number) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/5 hover:text-cyan-400 focus-visible:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                  title={link.label}
                  aria-label={`${title} – ${link.label}`}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <span className="text-xs text-gray-500">{links[0].type}</span>
          </div>
        )}
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "LiveThread",
      description: "Chrome extension that converts any webpage into a live discussion forum using WebSockets.",
      points: ["Socket.io & Redis Pub/Sub", "Dynamic URL-based rooms", "Real-time user presence", "Node.js + MongoDB backend on Docker Hub"],
      tech: ["React", "TypeScript", "Node.js", "Redis", "MongoDB"],
      icon: MessageSquare,
      gradient: "bg-gradient-to-br from-purple-900/50 to-blue-900/50",
      tags: ["Web", "Real-time"],
      links: [
        { url: "https://github.com/ShubhamRaut280/liveThread-frontend", icon: Github, label: "Frontend", type: "Chrome Extension" },
        { url: "https://github.com/ShubhamRaut280/liveThread-backend", icon: Server, label: "Backend", type: "Backend" },
        { url: "https://hub.docker.com/r/shubham9689/livethread-backend", icon: FaDocker, label: "Docker Image", type: "Docker" }
      ]
    },
    {
      title: "AI-Powered Retrosynthesis Platform",
      description: "AI platform for molecule synthesis planning, built at Onelab Ventures, with LLM agents, async pipelines and ML services.",
      points: [
        "Event-driven microservices: FastAPI, Celery queues per workload, ML services on GCP Cloud Run",
        "MCP tool server exposing platform capabilities to an LLM orchestrator agent",
        "Async job orchestration with self-healing worker pools",
        "Real-time streaming (SSE) with save-first persistence and prefetching",
        "Self-hosted transformer-based reaction prediction service",
        "Redux Toolkit / RTK Query state and interactive graph visualizations"
      ],
      tech: ["FastAPI", "Celery", "Redis", "PostgreSQL", "React", "TypeScript", "LLM Agents", "MCP", "GCP"],
      icon: FlaskConical,
      gradient: "bg-gradient-to-br from-emerald-900/50 to-cyan-900/50",
      tags: ["AI", "Full Stack"],
      links: []
    },
    {
      title: "ElectroRoute",
      description: "EV Charging Station Management system with geo-based search and JWT authentication.",
      points: ["Spring Boot REST APIs", "Geo-location search", "Docker containerization"],
      tech: ["Java", "Spring Boot", "MySQL", "Docker"],
      icon: Zap,
      gradient: "bg-gradient-to-br from-green-900/50 to-teal-900/50",
      tags: ["Backend", "Java"],
      links: [
        { url: "https://github.com/ShubhamRaut280/electro-route", icon: Github, label: "Source", type: "EV Tech" },
        { url: "https://hub.docker.com/r/shubham9689/electro-route", icon: FaDocker, label: "Docker Image", type: "Docker" },
        { url: "https://electro-route-latest.onrender.com/docs", icon: SiSwagger, label: "API Docs", type: "Documentation" }
      ]
    },
    {
      title: "SkillSphere",
      description: "Freelancing platform connecting clients with service providers. Real-time notifications and review systems.",
      points: ["Firebase backend", "Freelancer discovery", "Job request management", "Profiles with past work, reviews and ratings"],
      tech: ["React", "Node.js", "Firebase"],
      icon: Users,
      gradient: "bg-gradient-to-br from-orange-900/50 to-red-900/50",
      tags: ["Full Stack", "Firebase"],
      links: [
        { url: "https://github.com/ShubhamRaut280/skillsphere", icon: Github, label: "Source", type: "Marketplace" },
        { url: "https://local-services.web.app/", icon: Globe, label: "Live Demo", type: "Demo" }
      ]
    },
    {
      title: "Collaborative Canvas App",
      description: "A real-time collaborative drawing app where users can create or join rooms via room codes, enabling synchronized canvas interactions and live messaging powered entirely by Firebase.",
      points: [
        "Real-time collaborative canvas and stroke sync",
        "Live room-based chat for instant user communication",
        "Real-time data sync using Firebase Realtime Database",
        "Push notifications for messages, invites, and join requests using FCM",

      ],
      tech: [
        "React Native",
        "Firebase Realtime Database",
        "Firestore",
        "Firebase Auth",
        "FCM"
      ],
      icon: Brush,
      gradient: "bg-gradient-to-br from-indigo-900/60 to-cyan-900/60",
      tags: ["Mobile", "Real-Time", "Collaboration", "Chat"],
      links: [
        {
          url: "https://github.com/ShubhamRaut280/collaborative-canvas",
          icon: Github,
          label: "Frontend",
          type: "Collaborative App"
        },
        // {
        //   url: "https://github.com/ShubhamRaut280/canva-app-backend",
        //   icon: Github,
        //   label: "Backend",
        //   type: "Realtime Services"
        // }
      ]
    }

    ,
    {
      title: "Alertmate Application",
      description: "Android application for emergency support, designed for real-time assistance during critical situations.",
      points: ["Family management with member addition", "Live location tracking via Firebase Realtime Database", "Crash detection using accelerometer data", "Emergency trigger via power button (4 presses)"],
      tech: ["Java", "Kotlin", "Firebase"],
      icon: AlertTriangle,
      gradient: "bg-gradient-to-br from-red-900/50 to-yellow-900/50",
      tags: ["Android", "Emergency"],
      links: [
        { url: "https://github.com/ShubhamRaut280/Alertmate", icon: Github, label: "Source", type: "Safety App" }
      ]
    },
    // {
    //   title: "PC Unlock Trigger",
    //   description: "Windows security monitoring application that captures photos on PC unlock and sends instant Telegram alerts for remote device monitoring.",
    //   points: [
    //     "Automatic camera capture on Windows startup/unlock",
    //     "Real-time Telegram notifications with photo evidence",
    //     "Timestamp-based photo organization and logging",
    //     "Windows Registry integration for auto-startup",
    //   ],
    //   tech: ["Python", "Telegram Bot API"],
    //   icon: Camera,
    //   gradient: "bg-gradient-to-br from-blue-900/50 to-purple-900/50",
    //   tags: ["Windows", "Security", "Monitoring"],
    //   links: [
    //     {
    //       url: "https://github.com/ShubhamRaut280/PcUnlockTrigger",
    //       icon: Github,
    //       label: "Source",
    //       type: "Security Monitor"
    //     }
    //   ]
    // },
    {
      title: "RAG PDF Bot",
      description: "Retrieval-Augmented Generation API that lets you upload PDFs and ask questions about their content using FastAPI and Google Gemini.",
      points: [
        "PDF parsing and text extraction with pypdf",
        "Text chunking with LangChain RecursiveCharacterTextSplitter",
        "Vector embeddings with SentenceTransformers",
        "Pinecone serverless vector database for similarity search",
        "Gemini-powered Q&A with cited sources"
      ],
      tech: ["FastAPI", "Python", "Pinecone", "Google Gemini", "LangChain", "SentenceTransformers"],
      icon: Globe,
      gradient: "bg-gradient-to-br from-cyan-900/50 to-blue-900/50",
      tags: ["AI", "Backend", "RAG"],
      links: [
        {
          url: "https://github.com/ShubhamRaut280/rag-based-doc-bot",
          icon: Github,
          label: "Source",
          type: "AI API"
        },
        {
          url: "https://hub.docker.com/r/shubham9689/rag-bot",
          icon: FaDocker,
          label: "Docker Image",
          type: "Docker"
        }
      ]
    },

  ];

  // Grouped by card length so each grid row holds similar-height cards (fewer empty gaps)
  const displayOrder = [
    "AI-Powered Retrosynthesis Platform", "Collaborative Canvas App", "RAG PDF Bot",
    "LiveThread", "SkillSphere", "Alertmate Application",
    "ElectroRoute",
  ];
  const rank = (title: string) => {
    const i = displayOrder.indexOf(title);
    return i === -1 ? displayOrder.length : i;
  };
  const orderedProjects = [...projects].sort((a, b) => rank(a.title) - rank(b.title));

  return (
    <section id="projects" className="section bg-ink-raised">
      <div className="container-page">
        <SectionHeader eyebrow="Portfolio" title="Featured Projects" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orderedProjects.map((project: Project, idx: number) => (
            <Reveal key={project.title} delay={Math.min(idx * 90, 500)} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;