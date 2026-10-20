import React from 'react';
import { SiLeetcode } from 'react-icons/si';
import { Github, Linkedin } from 'lucide-react';

interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const links: SocialLink[] = [
  { href: 'https://github.com/ShubhamRaut280', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/rautshubham280/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://leetcode.com/u/Shubham223/', label: 'LeetCode', icon: SiLeetcode },
];

interface SocialsProps {
  /** Extra classes applied to each icon button. */
  className?: string;
  /** "icon" = round 48px buttons (hero); "pill" = wide pill buttons (contact card). */
  variant?: 'icon' | 'pill';
}

/** Renders a fragment of icon links so the parent controls the layout. */
const Socials: React.FC<SocialsProps> = ({ className = '', variant = 'icon' }) => {
  const shape = variant === 'pill' ? 'h-12 px-7 sm:px-9' : 'h-12 w-12';

  return (
    <>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} profile (opens in a new tab)`}
          title={label}
          className={`glass inline-flex ${shape} shrink-0 items-center justify-center rounded-full text-gray-300 transition-[color,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-400 hover:shadow-[0_10px_30px_-12px_rgba(0,217,255,0.45)] ${className}`}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </>
  );
};

export default Socials;
