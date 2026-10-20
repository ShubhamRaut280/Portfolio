// components/Hero.tsx
import React from 'react';
import { ArrowDown, ChevronDown, Globe, Smartphone, Cloud, Database } from 'lucide-react';
import CanvasBackground from './CanvasBackground';
import Socials from './Socials';

interface HeroCard {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

const cards: HeroCard[] = [
  { icon: Globe, label: 'Web', value: 'React/Node', color: 'text-cyan-400' },
  { icon: Smartphone, label: 'Mobile', value: 'Kotlin/Flutter/React Native', color: 'text-green-400' },
  { icon: Cloud, label: 'Cloud', value: 'AWS', color: 'text-orange-400' },
  { icon: Database, label: 'Backend', value: 'Java/Node.js/Python', color: 'text-purple-400' },
];

/** Stagger helper for the on-load entrance animation. */
const delay = (ms: number): React.CSSProperties => ({ animationDelay: `${ms}ms` });

const Str: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-green-400">'{children}'</span>
);

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-28 pb-16 sm:pb-24 md:min-h-[100svh] lg:pt-32"
    >
      <CanvasBackground />

      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Intro */}
        <div className="min-w-0">
          <div
            className="glass inline-flex animate-fade-up items-center gap-2 rounded-full border-cyan-400/20 px-4 py-2 text-xs font-medium text-cyan-400"
            style={delay(0)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            SDE I at Onelab Ventures
          </div>

          <h1
            className="mt-6 animate-fade-up font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            style={delay(100)}
          >
            Shubham
            <br />
            <span className="text-gradient">Raut</span>
          </h1>

          <p
            className="mt-4 animate-fade-up font-display text-2xl text-gray-400 sm:text-3xl lg:text-4xl"
            style={delay(200)}
          >
            Full Stack Web &amp; Mobile Dev
          </p>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-gray-400 sm:text-lg"
            style={delay(300)}
          >
            Results-driven Software Development Engineer experienced in shipping production-grade features in
            fast-paced environments. Strong background in full-stack development, cloud infrastructure, real-time
            systems, and AI agent platforms.
          </p>

          <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-4" style={delay(400)}>
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-black shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-[0_14px_36px_-12px_rgba(0,217,255,0.6)]"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <div className="flex items-center gap-3">
              <Socials />
            </div>
          </div>
        </div>

        {/* Code card: hidden on small phones where the code lines can't fit */}
        <div className="relative hidden w-full animate-fade-up sm:block" style={delay(550)}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-cyan-400/20 via-purple-500/20 to-green-400/20 blur-3xl animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            <div className="glass relative overflow-hidden rounded-3xl p-6 lg:p-8">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-500/90" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
                <span className="h-3 w-3 rounded-full bg-green-500/90" />
              </div>

              <div className="mt-5 space-y-1 font-mono text-[13px] leading-relaxed text-gray-300 lg:text-sm">
                <p>
                  <span className="text-purple-500">const</span> <span className="text-cyan-400">developer</span> ={' '}
                  {'{'}
                </p>
                <p className="pl-4">
                  name: <Str>Shubham Raut</Str>,
                </p>
                <p className="pl-4">
                  role: <Str>SDE I</Str>,
                </p>
                <p className="pl-4">
                  location: <Str>Pune, India</Str>,
                </p>
                <p className="pl-4">
                  stack: [<Str>Java</Str>, <Str>Python</Str>, <Str>Node</Str>, <Str>React</Str>],
                </p>
                <p className="pl-4">
                  awards: [<Str>Customer Champion</Str>, <Str>Rising Star</Str>]
                </p>
                <p>{'};'}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {cards.map((item) => (
                  <div
                    key={item.label}
                    title={item.value}
                    className="glass-card glass-card-hover flex flex-col items-center rounded-xl p-4 text-center"
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <span className="mt-2 text-xs font-medium tracking-wide text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator: only on wider, taller viewports where it can't overlap content */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute inset-x-0 bottom-6 mx-auto hidden w-max flex-col items-center gap-1 text-gray-500 transition-colors hover:text-cyan-400 [@media(min-width:768px)_and_(min-height:760px)]:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
