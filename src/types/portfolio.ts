export interface Skill {
  name: string;
  badge?: "Expert" | "Advanced" | "Proficient" | "Core";
  level?: number;
}

export interface SkillGroup {
  title: string;
  category: "frontend" | "backend" | "android" | "others" | "database" | "cs" | string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  highlights: string[];
  technologies?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "fullstack" | "mobile" | "realtime";
  stack: string;
  summary: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  badge?: string;
  description?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badge?: string;
  highlight?: boolean;
  link?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  avatarUrl?: string;
  resumeUrl?: string;
  status: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
  fastFacts: { label: string; value: string }[];
  terminalData: {
    frontend: string;
    backend: string;
    database: string;
    status: string;
  };
}
