// components/Hero.tsx
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Briefcase, Code2, Award, Globe, Smartphone, Cloud, Database, Linkedin } from 'lucide-react';
import CanvasBackground from './CanvasBackground';
import { useMousePosition } from '../hooks/useMousePosition';
import { SiLeetcode } from "react-icons/si";

interface HeroCard {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

const Hero: React.FC = () => {
  const { x, y } = useMousePosition();
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;

    const animate = (): void => {
      setCursorPos(prev => ({
        x: prev.x + (x - prev.x) * 0.1,
        y: prev.y + (y - prev.y) * 0.1
      }));
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [x, y]);

  const cards: HeroCard[] = [
    { icon: Globe, label: 'Web', value: 'React/Node', color: 'text-cyan-400' },
    { icon: Smartphone, label: 'Mobile', value: 'Kotlin/Flutter/React Native', color: 'text-green-400' },
    { icon: Cloud, label: 'Cloud', value: 'AWS', color: 'text-orange-400' },
    { icon: Database, label: 'Backend', value: 'Java/Node.js/Python', color: 'text-purple-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div
        className="hidden md:block fixed w-[300px] h-[300px] pointer-events-none z-40 transition-opacity duration-300"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,217,255,0.15) 0%, transparent 70%)'
        }}
      />

      <CanvasBackground />

      <div className="relative z-10 max-w-8xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-[#111111]/70 border border-cyan-400/20 text-xs font-medium text-cyan-400 animate-[float_6s_ease-in-out_infinite]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            SDE I at Onelab Ventures
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight font-['Space_Grotesk']">
            Shubham<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient-x_5s_ease_infinite]">
              Raut
            </span>
          </h1>

          <p className="mt-2 text-gray-500 text-2xl md:text-3xl lg:text-4xl font-['Space_Grotesk']">
            Full Stack Web & Mobile Dev
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Results-driven Software Development Engineer experienced in shipping production-grade features in fast-paced environments. Strong background in full-stack development, cloud infrastructure, and real-time systems.          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-cyan-400 hover:scale-105 transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/ShubhamRaut280"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] hover:border-cyan-400/50 transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
            </a>
            <a href='https://www.linkedin.com/in/rautshubham280/'
              target='_blank'
              rel='noopener noreferrer'
              className="px-8 py-4 rounded-full backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] hover:border-cyan-400/50 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a href='https://leetcode.com/u/Shubham223/'
              target='_blank'
              rel='noopener noreferrer'
              className="px-8 py-4 rounded-full backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] hover:border-cyan-400/50 transition-all flex items-center gap-2"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
          </div>
 
        </div>

        <div className="space-y-8 relative hidden md:block">
          <div className="relative w-full  max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-purple-500/20 to-green-400/20 rounded-full blur-3xl animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            <div className="relative backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] rounded-3xl p-8 h-full flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all" />

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-1">
                  <p><span className="text-purple-500">const</span> <span className="text-cyan-400">developer</span> = {'{'}</p>
                  <p className="pl-4">name: <span className="text-green-400">'Shubham Raut'</span>,</p>
                  <p className="pl-4">role: <span className="text-green-400">'SDE I'</span>,</p>
                  <p className="pl-4">location: <span className="text-green-400">'Pune, India'</span>,</p>
                  <p className="pl-4">stack: [<span className="text-green-400">'Java'</span>, <span className='text-green-400'>'Python'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'React'</span> ],</p>
                  <p className="pl-4">awards: [<span className="text-green-400">'Customer Champion'</span>, <span className="text-green-400">'Rising Star'</span>]</p>
                  <p>{'}'};</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {cards.map((item: HeroCard, idx: number) => (
                  <div key={idx} className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/5 rounded-xl p-4 text-center hover:border-cyan-400/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,217,255,0.2)] transition-all">
                    <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                    <div className="text-xs text-gray-400">{item.label}</div>
                    <div className="font-bold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;