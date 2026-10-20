import React from 'react';
import Reveal from './Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const centered = align === 'center';

  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-gray-400 md:text-lg">{subtitle}</p>}
    </Reveal>
  );
};

export default SectionHeader;
