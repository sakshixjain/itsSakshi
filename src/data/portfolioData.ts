import type {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  PersonalInfo,
  ProjectItem,
  SkillGroup,
} from "../types/portfolio";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Sakshi Jain",
  title: "Full-Stack Developer",
  tagline: "builds full-stack products, end to end.",
  avatarUrl: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  bio: [
    "I'm a full-stack developer who enjoys building robust web systems from database architecture and RESTful APIs to polished user interfaces. I specialize across the MERN stack and Laravel / PHP ecosystem.",
    "My recent work includes Ojeev.org (a complete NGO management platform in Laravel/MySQL), enterprise CRM workflows, and cross-platform mobile apps. I also maintain algorithmic problem-solving with 390+ DSA problems solved across LeetCode & GeeksforGeeks.",
  ],
  location: "Baghpat, Uttar Pradesh, India",
  email: "sakshijainjain36@gmail.com",
  status: "Available for full-time roles & high-impact projects",
  socials: {
    github: "https://github.com/sakshixjain",
    linkedin: "https://www.linkedin.com/in/sakshi-jain-5616b2229/",
    email: "mailto:sakshijainjain36@gmail.com",
    resume: "/resume.pdf",
  },
  fastFacts: [
    { label: "Location", value: "Baghpat, Uttar Pradesh" },
    { label: "Focus", value: "MERN & Laravel Full-Stack" },
    { label: "Core CS", value: "DSA · OOP · REST APIs" },
    { label: "Practice", value: "390+ Problems, LeetCode & GfG" },
  ],
  terminalData: {
    frontend: "React, React Native, TypeScript, Bootstrap",
    backend: "Node.js, Express, Laravel, PHP",
    database: "MySQL, MongoDB",
    status: "Shipping production web systems",
  },
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    category: "frontend",
    skills: [
      { name: "React.js", badge: "Expert" },
      { name: "React Native", badge: "Advanced" },
      { name: "TypeScript", badge: "Advanced" },
      { name: "JavaScript (ES6+)", badge: "Expert" },
      { name: "HTML5 / CSS3", badge: "Expert" },
      { name: "Bootstrap & Tailwind", badge: "Advanced" },
    ],
  },
  {
    title: "Backend Engineering",
    category: "backend",
    skills: [
      { name: "Laravel", badge: "Expert" },
      { name: "PHP", badge: "Expert" },
      { name: "Node.js", badge: "Advanced" },
      { name: "Express.js", badge: "Advanced" },
      { name: "Java", badge: "Proficient" },
      { name: "C++", badge: "Proficient" },
    ],
  },
  {
    title: "Databases & Tools",
    category: "database",
    skills: [
      { name: "MySQL", badge: "Expert" },
      { name: "MongoDB", badge: "Advanced" },
      { name: "Git & GitHub", badge: "Advanced" },
      { name: "Postman", badge: "Advanced" },
      { name: "Vite & Modern Tooling", badge: "Advanced" },
      { name: "REST APIs", badge: "Expert" },
    ],
  },
  {
    title: "Core CS & Algorithms",
    category: "cs",
    skills: [
      { name: "Data Structures & Algorithms", badge: "Expert" },
      { name: "390+ LeetCode & GfG Solved", badge: "Expert" },
      { name: "Object Oriented Design (OOP)", badge: "Expert" },
      { name: "Authentication (JWT, RBAC)", badge: "Advanced" },
      { name: "WebSockets & Realtime", badge: "Advanced" },
      { name: "System Design Basics", badge: "Proficient" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "infoace",
    role: "Full Stack Developer",
    company: "Infoace Experts Pvt Ltd",
    period: "Dec 2025 — Present",
    location: "Noida, India",
    isCurrent: true,
    highlights: [
      "Architected and deployed Ojeev.org NGO management system using Laravel, PHP, and MySQL, featuring donation workflows, volunteer rosters, and role-based access control.",
      "Engineered frontend interfaces and backend microservices for enterprise CRM sub-systems and device monitoring apps using MERN stack, TypeScript, and MySQL.",
      "Crafted responsive user interfaces with HTML5, CSS3, modern JavaScript, and Bootstrap.",
      "Designed and delivered scalable database schemas and optimized SQL queries.",
    ],
    technologies: ["Laravel", "PHP", "React", "Node.js", "TypeScript", "MySQL", "MongoDB"],
  },
  {
    id: "30days",
    role: "Software Developer",
    company: "30days Technologies",
    period: "Jan 2025 — Dec 2025",
    location: "Haryana, India",
    isCurrent: false,
    highlights: [
      "Built feature-rich enterprise CRM modules using PHP, Laravel framework, and MySQL database.",
      "Created highly responsive and intuitive web interfaces utilizing HTML5, CSS3, JavaScript, and Bootstrap.",
      "Implemented comprehensive CRUD operations, robust session/token authentication, and relational database schemas.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "REST APIs"],
  },
  {
    id: "drdo",
    role: "Backend Intern",
    company: "Defence Research and Development Organisation (DRDO)",
    period: "Sept 2022 — Nov 2022",
    location: "Delhi, India",
    isCurrent: false,
    highlights: [
      "Developed secure backend modules and database schemas for an internal Employee Feedback Management System using PHP and MySQL.",
      "Collaborated with senior engineers on security audits, input sanitization, and database query optimizations.",
    ],
    technologies: ["PHP", "MySQL", "Backend Architecture", "Security Auditing"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "ojeev-ngo",
    title: "Ojeev.org — NGO Platform",
    category: "fullstack",
    stack: "Laravel · PHP · MySQL · Bootstrap",
    summary: "Full-scale live NGO management system handling online donation campaigns, volunteer onboarding, and automated 80G tax exemption receipts.",
    image: "/images/project-ojeev.jpg",
    liveUrl: "https://ojeev.org",
    tags: ["Laravel", "PHP", "MySQL", "NGO", "Live Site"],
    featured: true,
  },
  {
    id: "enterprise-crm",
    title: "Enterprise CRM System",
    category: "fullstack",
    stack: "MERN Stack · MySQL · TypeScript",
    summary: "Comprehensive customer relationship management software managing sales pipelines, lead communications, RBAC user guards, and analytics.",
    image: "/images/project-crm.jpg",
    tags: ["React", "Node.js", "Express", "MySQL", "TypeScript"],
    githubUrl: "https://github.com/sakshixjain",
    featured: true,
  },
  {
    id: "todo-app",
    title: "Mobile Task Manager",
    category: "mobile",
    stack: "React Native · AsyncStorage · TypeScript",
    summary: "Offline-first cross-platform mobile productivity application with task categorization, real-time search, and smooth native gestures.",
    image: "/images/project-todo.jpg",
    tags: ["React Native", "AsyncStorage", "Mobile", "TypeScript"],
    githubUrl: "https://github.com/sakshixjain",
    featured: false,
  },
  {
    id: "ed-tech",
    title: "Ed-Tech Learning Platform",
    category: "fullstack",
    stack: "MERN Stack · Razorpay · JWT",
    summary: "Interactive course marketplace and e-learning platform with Razorpay payment processing, video player, and instructor management.",
    image: "/images/project-edtech.jpg",
    tags: ["React", "Node.js", "MongoDB", "Razorpay"],
    githubUrl: "https://github.com/sakshixjain",
    featured: false,
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    category: "realtime",
    stack: "MERN Stack · WebSockets · Socket.io",
    summary: "High-performance instant messaging web app featuring bidirectional real-time communication, typing status, and message history.",
    image: "/images/project-chat.jpg",
    tags: ["WebSockets", "Socket.io", "React", "Node.js"],
    githubUrl: "https://github.com/sakshixjain",
    featured: false,
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Maharshi Dayanand University",
    period: "Sep 2021 – May 2024",
    score: "CGPA 8.0 / 10",
  },
  {
    degree: "Diploma in Digital Electronics",
    institution: "Kasturba Institute of Technology",
    period: "Jul 2017 – Sep 2020",
    score: "CGPA 8.2 / 10",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Data Structures & Algorithms and MERN Stack Development",
    issuer: "Codehelp",
    highlight: true,
  },
  {
    title: "390+ Algorithmic Problems Solved",
    issuer: "LeetCode & GeeksforGeeks",
    highlight: true,
  },
  {
    title: "Object-Oriented Programming & Database Design",
    issuer: "Specialized Training",
    highlight: false,
  },
];

export const NAV_LINKS = [
  { id: "sj-about", label: "About" },
  { id: "sj-skills", label: "Skills" },
  { id: "sj-experience", label: "Experience" },
  { id: "sj-projects", label: "Projects" },
  { id: "sj-education", label: "Education" },
];
