import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  // Stagger siblings by passing increasing delays (ms)
  delay?: number;
  as?: 'div' | 'li' | 'article' | 'section';
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return React.createElement(
    Tag,
    {
      ref,
      className: `reveal ${isVisible ? 'is-visible' : ''} ${className}`,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
};

export default Reveal;
