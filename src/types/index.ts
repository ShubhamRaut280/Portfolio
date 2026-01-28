// types/index.ts
export interface NavLink {
  name: string;
  href: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
  color: string;
}

export interface Skill {
  name: string;
  percentage: string;
  color: string;
}

export interface ProjectLink {
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  type: string;
}

export interface Project {
  title: string;
  description: string;
  points: string[];
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  tags: string[];
  links: ProjectLink[];
}

export interface CloudTool {
  category: string;
  items: string[];
  color: string;
}

export interface ContactInfo {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

export interface MousePosition {
  x: number;
  y: number;
}