// components/Footer.tsx
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="border-t border-white/10 py-8 text-sm text-gray-500">
    <div className="container-page flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
      <p>&copy; {new Date().getFullYear()} Shubham Raut.</p>
      <a
        href="#"
        className="group inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 transition-colors hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
      >
        Back to top
        <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default Footer;
