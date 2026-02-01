import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Github, Server, MessageSquare, Zap, Users, Globe, AlertTriangle, Brush } from 'lucide-react';
import type { Project, ProjectLink } from '../types';
 import { FaDocker } from 'react-icons/fa';
import { SiSwagger } from 'react-icons/si';
 
interface ProjectCardProps extends Project { }

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
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 rounded-2xl overflow-hidden group hover:border-cyan-400/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`h-48 relative overflow-hidden ${gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          {tags.map((tag: string, idx: number) => (
            <span key={idx} className="px-3 py-1 rounded-full text-xs backdrop-blur-md bg-black/20 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{title}</h4>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <ul className="text-xs text-gray-500 space-y-1 mb-4">
          {points.map((point: string, idx: number) => (
            <li key={idx}>• {point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t: string, idx: number) => (
            <span key={idx} className="text-xs text-gray-400">{t}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex gap-3">
            {links.map((link: ProjectLink, idx: number) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                title={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <span className="text-xs text-gray-600">{links[0]?.type || 'Project'}</span>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "LiveThread",
      description: "Chrome extension that converts any webpage into a live discussion forum using WebSockets.",
      points: ["Socket.io & Redis Pub/Sub", "Dynamic URL-based rooms", "Real-time user presence"],
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
      points: ["Firebase backend", "Freelancer discovery", "Job request management"],
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

  return (
    <section id="projects" className="py-32 relative bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 mb-4 tracking-widest uppercase">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk']">Featured Projects</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project: Project, idx: number) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;