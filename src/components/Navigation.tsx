import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X, Download, Eye } from 'lucide-react';
import { type NavLink } from '../types';
import resumePdf from '../assets/resume.pdf';

const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));
const SCROLLED_THRESHOLD = 24;
const MOBILE_MENU_ID = 'mobile-menu';
const MD_QUERY = '(min-width: 768px)';

const focusRing =
  'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400';

/** Returns the id of the section currently under the "reading line" (~35% down the viewport). */
const getActiveSection = (): string => {
  const doc = document.documentElement;
  // At the very bottom the last (often short) section can never reach the reading line.
  if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
    const last = SECTION_IDS[SECTION_IDS.length - 1];
    if (document.getElementById(last)) return last;
  }

  const line = window.innerHeight * 0.35;
  let current = '';
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= line) current = id;
  }
  return current;
};

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const progressRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((): void => setIsMobileMenuOpen(false), []);

  // Scroll-driven state: progress bar, compact bar, active section — rAF-throttled.
  useEffect(() => {
    let frame = 0;

    const update = (): void => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      setIsScrolled(window.scrollY > SCROLLED_THRESHOLD);
      setActiveSection(getActiveSection());
    };

    const onScroll = (): void => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Mobile menu side effects: body scroll lock, Escape to close.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Close the mobile menu when the viewport grows to md+.
  useEffect(() => {
    const mql = window.matchMedia(MD_QUERY);
    const onChange = (event: MediaQueryListEvent): void => {
      if (event.matches) setIsMobileMenuOpen(false);
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  const isActive = (href: string): boolean => href.slice(1) === activeSection;

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-0.5 overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 to-purple-500 will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div
        className={`px-4 transition-[padding] duration-300 ease-out ${isScrolled ? 'pt-2' : 'pt-4'}`}
      >
        <div
          className={`mx-auto max-w-6xl rounded-2xl border backdrop-blur-xl transition-all duration-300 ease-out ${
            isScrolled
              ? 'border-white/[0.1] bg-ink-raised/85 px-4 py-2 shadow-lg shadow-black/40 sm:px-5'
              : 'border-white/[0.08] bg-ink-raised/70 px-4 py-3 shadow-none sm:px-6 md:py-4'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a
              href="#"
              aria-label="Shubham Raut — back to top"
              onClick={closeMenu}
              className={`rounded-md font-display text-2xl font-bold tracking-tighter ${focusRing}`}
            >
              SR<span className="text-cyan-400">.</span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 text-sm font-medium md:flex lg:gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-current={active ? 'location' : undefined}
                      className={`group relative block rounded-full px-3 py-2 transition-colors duration-200 ${focusRing} ${
                        active ? 'bg-cyan-400/[0.08] text-cyan-400' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 bottom-1 h-px origin-left bg-cyan-400 transition-transform duration-300 ease-out ${
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-white/40'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop resume actions */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume (opens PDF in a new tab)"
                className={`flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition-colors duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 ${focusRing}`}
              >
                Resume
                <Eye className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={resumePdf}
                download="Shubham_Raut_Resume.pdf"
                aria-label="Download resume (PDF)"
                title="Download resume"
                className={`group rounded-full border border-white/20 p-2 transition-colors duration-200 hover:border-cyan-400 hover:bg-cyan-400/10 ${focusRing}`}
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              ref={toggleRef}
              type="button"
              className={`-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray-300 transition-colors hover:bg-white/5 hover:text-white md:hidden ${focusRing}`}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls={MOBILE_MENU_ID}
            >
              <span className="relative h-6 w-6">
                <Menu
                  aria-hidden="true"
                  className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                    isMobileMenuOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <X
                  aria-hidden="true"
                  className={`absolute inset-0 h-6 w-6 transition-all duration-200 ${
                    isMobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
                  }`}
                />
              </span>
            </button>
          </div>

          {/* Mobile menu — grid-rows trick animates height without measuring */}
          <div
            id={MOBILE_MENU_ID}
            inert={!isMobileMenuOpen}
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
              isMobileMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div
                className={`mt-3 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain border-t border-white/10 pt-3 pb-1 transition-transform duration-300 ease-out ${
                  isMobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
                }`}
              >
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={closeMenu}
                          aria-current={active ? 'location' : undefined}
                          className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-base font-medium transition-colors ${focusRing} ${
                            active
                              ? 'bg-cyan-400/[0.08] text-cyan-400'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`h-1.5 w-1.5 rounded-full transition-colors ${
                              active ? 'bg-cyan-400' : 'bg-white/15'
                            }`}
                          />
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    aria-label="View resume (opens PDF in a new tab)"
                    className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 px-3 text-sm font-medium text-white transition-colors hover:border-cyan-400 hover:bg-cyan-400/10 ${focusRing}`}
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" /> View Resume
                  </a>
                  <a
                    href={resumePdf}
                    download="Shubham_Raut_Resume.pdf"
                    onClick={closeMenu}
                    aria-label="Download resume (PDF)"
                    className={`flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-3 text-sm font-semibold text-ink transition-colors hover:bg-cyan-300 ${focusRing}`}
                  >
                    <Download className="h-4 w-4" aria-hidden="true" /> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
