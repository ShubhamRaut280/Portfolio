// components/Contact.tsx
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import type { ContactInfo } from '../types';

interface ContactLinkProps extends ContactInfo {}

const ContactLink: React.FC<ContactLinkProps> = ({ href, icon: Icon, label, value, color }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
  >
    <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
      <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-').replace('/10', '')} inherit`}/>
    </div>
    <div>
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  </a>
);

const Contact: React.FC = () => {
  const [ref, isVisible] = useScrollReveal();

  const contacts: ContactInfo[] = [
    {
      href: "mailto:rautshubham280@gmail.com",
      icon: Mail,
      label: "Email",
      value: "rautshubham280@gmail.com",
      color: "bg-cyan-400/10"
    },
    {
      href: "tel:+919689438141",
      icon: Phone,
      label: "Phone",
      value: "+91 9689438141",
      color: "bg-purple-500/10"
    },
    {
      href: "https://linkedin.com/in/rautshubham280",
      icon: Linkedin,
      label: "LinkedIn",
      value: "rautshubham280",
      color: "bg-blue-500/10"
    },
    {
      href: "https://github.com/ShubhamRaut280",
      icon: Github,
      label: "GitHub",
      value: "ShubhamRaut280",
      color: "bg-gray-500/10"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 mb-4 tracking-widest uppercase">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6">Let's work together</h3>
          <p className="text-gray-400">Available for freelance projects and full-stack opportunities.</p>
        </div>

        <div 
          ref={ref}
          className={`backdrop-blur-xl bg-[#111111]/70 border border-white/[0.08] rounded-3xl p-8 md:p-12 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contacts.slice(0, 2).map((contact: ContactInfo, idx: number) => (
              <ContactLink key={idx} {...contact} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contacts.slice(2, 4).map((contact: ContactInfo, idx: number) => (
              <ContactLink key={idx} {...contact} />
            ))}
          </div>

          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-500 mb-2">Location</p>
            <p className="text-lg font-medium flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-green-400" />
              Pune, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;