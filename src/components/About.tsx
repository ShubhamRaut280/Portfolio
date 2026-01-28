import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Trophy, Star, IdCard } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface AwardCardProps {
  icon: LucideIcon;
  title: string;
  company: string;
  year: string;
  link?: string;
  description: string;
} 
const AwardCard: React.FC<AwardCardProps> = ({ icon: Icon, title, company, year, link, description }) => (
  <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-yellow-400" />
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{company} • {year}</p>
        {link && (
          <a href={link} className="text-sm text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        )}
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  const [ref1, isVisible1] = useScrollReveal();
  const [ref2, isVisible2] = useScrollReveal();



  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            ref={ref1}
            className={`transition-all duration-800 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-sm font-semibold text-cyan-400 mb-4 tracking-widest uppercase">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-['Space_Grotesk']">
              Building scalable solutions for <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">real-world</span> problems
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Software Development Engineer with hands-on experience building scalable, production-grade web and mobile applications.
                Strong background in designing microservices, real-time systems, and event-driven architectures using Redis, BullMQ, and WebSockets.              </p>              <p>
                Experienced in deploying and operating cloud-native applications on AWS using ECS (Fargate), S3, CloudFront, ALB, and containerized Docker workflows.
                Comfortable working across the full stack, owning features end-to-end from API design to frontend delivery and CI/CD automation.
                Driven by a passion for solving real-world problems, writing maintainable code, and continuously learning modern engineering practices.              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">B.E.</div>
                <div className="text-sm text-gray-500">Computer Science</div>
                <div className="text-xs text-gray-600">Sinhgad College</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">Diploma</div>
                <div className="text-sm text-gray-500">Engineering</div>
                <div className="text-xs text-gray-600">Government Polytechnic Khamgaon</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">2+</div>
                <div className="text-sm text-gray-500">Years Exp.</div>
              </div>
            </div>
          </div>

          <div
            ref={ref2}
            className={`space-y-6 transition-all duration-800 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <AwardCard
              icon={Trophy}
              title="Customer Champion Award"
              company="Onelab Ventures"
              link='https://drive.google.com/file/d/1QUKRPD6DVNWDiajRwz1g_zjMEvZgqAC4/view?usp=sharing'
              year="2025"
              description="Recognized for strong client-first mindset and consistently exceeding customer expectations."
            />

            <AwardCard
              icon={Star}
              title="Rising Star Award"
              company="Onelab Ventures"
              link='https://drive.google.com/file/d/1ZSSrJumJK9RBAA-hVlTycSIHmg_7dsKS/view?usp=sharing'
              year="2025"
              description="Awarded for rapid growth, initiative, and impactful early-stage contributions."
            />

            <div className="backdrop-blur-xl bg-[#111111]/70 border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <IdCard className="w-5 h-5 text-cyan-400" />
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Accenture Nordics Developer', link: 'https://drive.google.com/file/d/1KzjUFKgFwRoj2dWXHj9HKbljyRhAMUpI/view?usp=sharing' },
                  { name: 'Postman API Expert', link: 'https://api.badgr.io/public/assertions/1fMtBEytRayXMeposAemSA' },
                  { name: 'Java', link: 'https://drive.google.com/file/d/1LMBDrknzpRZ0OnbYsTMo8oOisqoqEKzi/view?usp=sharing' },
                  { name: 'MySQL', link: 'https://drive.google.com/file/d/1jF3zN1Ecp5yUa-SXFu_uIQ0HhCrE6xOG/view?usp=sharing' },
                  { name: 'GitHub Foundations', link: 'https://drive.google.com/file/d/1X3HARMh4VaWnRau8UqEa5lfnjTw9ZLat/view' }
                ].map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all"
                  >
                    {cert.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;