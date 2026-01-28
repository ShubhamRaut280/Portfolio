 import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { type NavLink } from '../types';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'opacity-90' : ''}`}>
      <div className="mx-4 mt-4 rounded-2xl px-6 py-4 max-w-7xl mx-auto backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08]">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter font-['Space_Grotesk']">
            SR<span className="text-cyan-400">.</span>
          </a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {navLinks.map((link: NavLink) => (
              <a 
                key={link.name}
                href={link.href} 
                className="relative hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <a 
            href="#contact"
            className="hidden md:flex px-6 py-2 rounded-full border border-white/20 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all text-sm font-medium items-center gap-2 group"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
            {navLinks.map((link: NavLink) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;