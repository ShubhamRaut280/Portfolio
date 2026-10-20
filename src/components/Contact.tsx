import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import Socials from './Socials';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';

const EMAIL = 'rautshubham280@gmail.com';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let's work together"
            subtitle="Available for freelance projects and full-stack opportunities."
          />

          <Reveal delay={100} className="relative isolate">
            {/* Soft gradient glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-10 left-1/4 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl sm:h-64 sm:w-64" />
              <div className="absolute -bottom-10 right-1/4 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl sm:h-64 sm:w-64" />
            </div>

            <div className="glass-card rounded-3xl p-5 sm:p-8 md:p-12">
              {/* Email */}
              <div className="mb-5 flex justify-center">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex w-full max-w-md items-center gap-3 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10 sm:w-auto sm:gap-4 sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 sm:h-14 sm:w-14 text-cyan-400 transition-transform group-hover:scale-110">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="mb-1 block text-sm text-gray-500">Email</span>
                    <span className="block break-words text-[13px] font-medium min-[400px]:text-base">{EMAIL}</span>
                  </span>
                </a>
              </div>

              {/* Socials */}
              <Reveal delay={200} className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                <Socials variant="pill" />
              </Reveal>

              {/* Location */}
              <Reveal delay={300} className="border-t border-white/10 pt-8 text-center">
                <p className="mb-2 text-gray-500">Location</p>
                <p className="flex items-center justify-center gap-2 text-lg font-medium">
                  <MapPin className="h-5 w-5 text-green-400" aria-hidden="true" />
                  Pune, India
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
