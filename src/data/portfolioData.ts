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
  title: "Full Stack Developer",
  tagline: "builds scalable web applications, REST APIs, and database-driven solutions.",
  avatarUrl: "/images/profile.jpeg",
  resumeUrl: "/Sakshi_jain.pdf",
  bio: [
    "Full Stack Developer with experience in MERN Stack, Laravel, PHP, React.js, TypeScript, Node.js, MySQL, and MongoDB. Skilled in building scalable web applications, REST APIs, responsive UIs, authentication systems, and database-driven solutions.",
    "Recent work spans full-stack NGO management systems (Ojeev.org), enterprise CRM modules (OWSS.in), StudyNotion Ed-Tech platform, Android/iOS monitoring software, and AI-powered web tools. Passionate problem solver with 390+ DSA problems solved across LeetCode and GeeksforGeeks.",
  ],
  location: "Baghpat, UP, India",
  email: "sakshijainjain36@gmail.com",
  status: "Available for full-time roles & high-impact projects",
  socials: {
    github: "https://github.com/sakshixjain",
    linkedin: "https://www.linkedin.com/in/sakshi-jain-5616b2229/",
    email: "mailto:sakshijainjain36@gmail.com",
    resume: "/Sakshi_jain.pdf",
  },
  fastFacts: [
    { label: "Location", value: "Baghpat, UP" },
    { label: "Focus", value: "MERN Stack · Laravel · PHP" },
    { label: "Core CS", value: "DSA · OOP · REST APIs" },
    { label: "Practice", value: "390+ Problems, LeetCode & GfG" },
  ],
  terminalData: {
    frontend: "React.js, TypeScript, React Native, JavaScript, Bootstrap",
    backend: "Node.js, Express.js, Laravel, PHP, Java, C++",
    database: "MySQL, MongoDB, REST APIs",
    status: "Ready for full-time engineering roles",
  },
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    category: "frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Redux" },
      { name: "Next.js" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Material UI" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Backend",
    category: "backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Laravel" },
      { name: "PHP" },
      { name: "Java" },

      { name: "Python" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "REST APIs" },
      { name: "WebSockets" },
      { name: "C++" },
    ],
  },
  {
    title: "Android",
    category: "android",
    skills: [
      { name: "Kotlin" },
      { name: "Java" },
      { name: "Android Studio" },
      { name: "React Native" },
      { name: "XML" },
    ],
  },
  {
    title: "Others",
    category: "others",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Cursor" },
      { name: "Antigravity" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Netlify" },
      { name: "Figma" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "infoace",
    role: "Full Stack Development",
    company: "Infoace Experts pvt ltd",
    period: "Dec 25 — Present",
    location: "Noida, India",
    isCurrent: true,
    highlights: [
      "Developed a full-stack NGO Management System using Laravel, PHP and MySQL with modules for donations, volunteers, event management and user authentication.",
      "Built frontend and backend modules for Android and iOS monitoring software using MERN Stack, TypeScript and MySQL.",
      "Developed scalable CRM modules using MERN Stack and TypeScript.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "React", "Node.js", "TypeScript", "MERN Stack"],
  },
  {
    id: "30days",
    role: "Software Development",
    company: "30days Technologies",
    period: "Jan 25 — Dec 25",
    location: "Haryana, India",
    isCurrent: false,
    highlights: [
      "Developed CRM modules using PHP, Laravel and MySQL.",
      "Created responsive user interfaces using HTML, CSS, JavaScript and Bootstrap.",
      "Designed CRUD operations, authentication modules and database-driven applications.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: "drdo",
    role: "Backend Intern",
    company: "DRDO",
    period: "Sept 22 — Nov 22",
    location: "Delhi, India",
    isCurrent: false,
    highlights: [
      "Developed backend modules for an Employee Feedback System using PHP and MySQL.",
      "Worked on secure database schemas, input validation, and query performance.",
    ],
    technologies: ["PHP", "MySQL", "Backend Architecture", "Feedback Management"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "ed-tech",
    title: "StudyNotion — Ed-Tech Platform",
    category: "fullstack",
    stack: "MERN Stack · Razorpay · JWT Auth",
    summary: "Full-stack course management and e-learning platform with multi-role authentication, video learning player, and Razorpay payment gateway.",
    image: "/images/project-edtech.png",
    liveUrl: "https://studynotion-frontend.vercel.app/",
    githubUrl: "https://github.com/sakshixjain",
    tags: ["Node.js", "MongoDB", "Razorpay"],
    featured: true,
  },
  {
    id: "owss-crm",
    title: "CRM — Enterprise CRM System",
    category: "fullstack",
    stack: "MERN Stack · MySQL · TypeScript",
    summary: "Enterprise CRM platform managing client pipelines, lead communication records, granular RBAC permissions, and transactional MySQL data models.",
    image: "/images/project-crm.png",
    liveUrl: "https://owss.in/",
    githubUrl: "https://github.com/sakshixjain",
    tags: ["MySQL", "TypeScript", "Node.js"],
    featured: true,
  },
  {
    id: "ojeev-ngo",
    title: "Ojeev.org — NGO Management System",
    category: "fullstack",
    stack: "Laravel · PHP · MySQL · Bootstrap",
    summary: "Full-scale live NGO management system handling online donation campaigns, volunteer onboarding, event coordination, and automated 80G tax receipts.",
    image: "/images/project-ojeev.png",
    liveUrl: "https://ojeev.org",
    tags: ["Laravel", "PHP", "MySQL"],
    featured: true,
  },
  {
    id: "ai-interview",
    title: "AI Interview Question Generator",
    category: "fullstack",
    stack: "MERN Stack · Gemini API · TypeScript",
    summary: "Full-stack AI application generating technical and HR interview questions dynamically via Gemini API, with user data and interview history in MongoDB.",
    image: "/images/project-ai-interview.jpg",
    tags: ["TypeScript", "Node.js", "MongoDB", "Gemini API"],
    githubUrl: "https://github.com/sakshixjain",
    featured: true,
  },
  {
    id: "solo-trip",
    title: "Solo Trip — Travel & Exploration Platform",
    category: "fullstack",
    stack: "MERN Stack · MySQL · Express.js",
    summary: "Full-stack solo travel and trip planning platform built with React, Node.js, Express, and MySQL. Features curated travel destinations, custom itinerary management, secure authentication, and robust relational database architecture.",
    image: "/images/project-solotrip.png",
    liveUrl: "https://solo-trip.netlify.app/",
    githubUrl: "https://github.com/sakshixjain",
    tags: ["Next.js", "Typescript", "MySQL"],
    featured: true,
  },
  {
    id: "chat-app",
    title: "Chat Application",
    category: "realtime",
    stack: "MERN Stack · WebSockets · Socket.io",
    summary: "Real-time communication web app built with MERN Stack and WebSockets, supporting secure user authentication and seamless 1-to-1 instant messaging.",
    image: "/images/project-chat.jpg",
    tags: ["Node.js", "MongoDB", "WebSockets"],
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
    badge: "Graduated with Distinction",
    description:
      "Completed Bachelor of Technology in Computer Science & Engineering with an 8.0 CGPA. Built a rigorous foundation in core computing disciplines, focusing deeply on Data Structures & Algorithms, Object-Oriented Software Design (OOP), Relational Database Management Systems (MySQL/DBMS), Operating Systems, and full-stack Web Application Development.",
    highlights: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS & SQL)",
      "Operating Systems & Computer Networks",
      "Full-Stack Web Technologies",
    ],
  },
  {
    degree: "Diploma in Digital Electronics",
    institution: "Kasturba Institute of Technology",
    period: "Jul 2017 – Sep 2020",
    score: "CGPA 8.2 / 10",
    badge: "First Class with Honours",
    description:
      "Completed Diploma in Digital Electronics with an 8.2 CGPA. Developed strong hardware-to-software computing fundamentals, mastering low-level programming in C/C++, Microprocessor Architecture, Digital Logic Systems, and Circuit Design.",
    highlights: [
      "C & C++ Programming",
      "Microprocessor & Microcontrollers",
      "Digital Logic Design",
      "Embedded & Hardware Systems",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Data Structures & Algorithms and MERN Stack Development",
    issuer: "Codehelp",
    badge: "Verified Certification",
    highlight: true,
  },
  {
    title: "390+ Algorithmic Problems Solved",
    issuer: "LeetCode & GeeksforGeeks",
    badge: "DSA Milestone",
    highlight: true,
  },
  {
    title: "Object-Oriented Programming & REST APIs",
    issuer: "Core Computer Science",
    badge: "Architecture",
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
