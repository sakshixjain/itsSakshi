import type { JSX } from "react";

export interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 18, className = "" }: TechIconProps): JSX.Element {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // HTML5
  if (norm.includes("html")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4.14 2L2 20.89 12 23.66l10-2.77L19.86 2H4.14z" fill="#E44D26" />
        <path d="M12 21.68l8.22-2.28 1.7-15.6H12v17.88z" fill="#F16529" />
        <path d="M12 7.74H7.83l.26 2.92H12v-2.92zm0 5.84h-2.2l-.15-1.68H7.39l.3 3.36H12v-1.68zm0 4.3v-1.74l-.02.01-2.12-.57-.14-1.52H7.43l.27 3.03L12 17.88z" fill="#EBEBEB" />
        <path d="M12 7.74v2.92h3.9l-.37 4.14-3.53.95v1.73l5.25-1.46.73-8.28H12zm0 5.84v-1.68h3.76l-.14 1.68H12z" fill="#FFFFFF" />
      </svg>
    );
  }

  // CSS3
  if (norm.includes("css")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4.14 2L2 20.89 12 23.66l10-2.77L19.86 2H4.14z" fill="#1572B6" />
        <path d="M12 21.68l8.22-2.28 1.7-15.6H12v17.88z" fill="#33A9DC" />
        <path d="M12 7.74H7.83l.26 2.92H12v-2.92zm0 5.84h-2.2l-.15-1.68H7.39l.3 3.36H12v-1.68zm0 4.3v-1.74l-.02.01-2.12-.57-.14-1.52H7.43l.27 3.03L12 17.88z" fill="#EBEBEB" />
        <path d="M12 7.74v2.92h3.9l-.37 4.14-3.53.95v1.73l5.25-1.46.73-8.28H12zm0 5.84v-1.68h3.76l-.14 1.68H12z" fill="#FFFFFF" />
      </svg>
    );
  }

  // JavaScript
  if (norm.includes("javascript") || norm === "js") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7.5 18.5c-.8 0-1.5-.4-1.9-1.1l1.4-.9c.2.4.4.6.7.6.4 0 .6-.2.6-.7v-5.4h1.7v5.5c0 1.3-.9 2-2.5 2zm7.6 0c-1.7 0-2.8-.9-2.8-2.3 0-1.5 1-2.1 2.2-2.6l.5-.2c.6-.3.9-.5.9-.9 0-.4-.3-.7-.9-.7-.5 0-.9.3-1.1.7l-1.3-.8c.5-.9 1.4-1.4 2.5-1.4 1.6 0 2.6.9 2.6 2.2 0 1.4-1 2-2.1 2.5l-.5.2c-.6.3-.9.5-.9.9 0 .4.4.7 1 .7.6 0 1.1-.3 1.3-.8l1.3.8c-.5 1-1.4 1.5-2.8 1.5z" fill="#000000" />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5.5 11.5h6v1.5H9.2v5.5H7.7V13H5.5v-1.5zm8 7c-1.5 0-2.5-.8-2.5-2.1 0-1.3.9-1.9 2-2.3l.5-.2c.5-.2.8-.4.8-.8 0-.4-.3-.6-.8-.6-.5 0-.8.2-1 .6l-1.2-.7c.4-.8 1.2-1.3 2.2-1.3 1.4 0 2.3.8 2.3 2 0 1.2-.9 1.8-1.9 2.2l-.5.2c-.5.2-.8.4-.8.8 0 .4.3.6.9.6.5 0 1-.3 1.2-.7l1.2.7c-.5.9-1.3 1.4-2.5 1.4z" fill="#FFFFFF" />
      </svg>
    );
  }

  // React / React Native
  if (norm.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  // Redux
  if (norm.includes("redux")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M16.5 6.5C14.5 4.5 11 5 9 7.5S6.5 14 8.5 16s5.5 1.5 7.5-1 2.5-6.5.5-8.5zm-5 7.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#764ABC" />
        <path d="M8.2 8.2c-2.3 2.3-1.8 5.8.7 7.8 2.5 2 6 1.5 8.3-.8s1.8-5.8-.7-7.8c-2.5-2-6-1.5-8.3.8z" stroke="#764ABC" strokeWidth="1.2" />
      </svg>
    );
  }

  // Next.js
  if (norm.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#444" strokeWidth="1" />
        <path d="M15.5 8.5v7l-5.5-7v7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Bootstrap
  if (norm.includes("bootstrap")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path d="M8 6h4.5c1.8 0 2.8.9 2.8 2.2 0 .9-.5 1.6-1.3 1.9 1.1.3 1.8 1.1 1.8 2.2 0 1.5-1.2 2.7-3.2 2.7H8V6zm2.3 3.6h2c.6 0 1-.3 1-.8 0-.6-.4-.8-1-.8h-2v1.6zm0 3.8h2.3c.7 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.2-.9h-2.3v1.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M6 10c1.5-3 4-4.5 7.5-4.5 4.5 0 6 3 7.5 4.5s2.5 1.5 4.5 1.5c-1.5 3-4 4.5-7.5 4.5-4.5 0-6-3-7.5-4.5S8 10 6 10z" fill="#38BDF8" />
        <path d="M1.5 16c1.5-3 4-4.5 7.5-4.5 4.5 0 6 3 7.5 4.5s2.5 1.5 4.5 1.5c-1.5 3-4 4.5-7.5 4.5-4.5 0-6-3-7.5-4.5S3.5 16 1.5 16z" fill="#0EA5E9" />
      </svg>
    );
  }

  // Material UI
  if (norm.includes("material")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M2 6.5l10-5.8 10 5.8v11l-10 5.8-10-5.8v-11z" fill="#007FFF" />
        <path d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6v-9.2l8-4.6z" fill="#0059B2" />
        <path d="M12 6.5l5 2.9v5.8l-5 2.9-5-2.9v-5.8l5-2.9z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Node.js
  if (norm.includes("node")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#339933" />
        <path d="M12 6.5l5 2.9v5.2l-5 2.9-5-2.9v-5.2l5-2.9z" fill="#FFFFFF" />
        <path d="M12 9l2.5 1.5v3L12 15l-2.5-1.5v-3L12 9z" fill="#339933" />
      </svg>
    );
  }

  // Express.js
  if (norm.includes("express")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#222222" />
        <text x="5" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="system-ui, sans-serif">ex</text>
      </svg>
    );
  }

  // Laravel
  if (norm.includes("laravel")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3.5 6.5L12 2l8.5 4.5v11L12 22l-8.5-4.5v-11z" fill="#FF2D20" />
        <path d="M12 4.5l6 3.2v6.4l-6 3.2-6-3.2V7.7l6-3.2z" fill="#E02418" />
        <path d="M12 7l3.5 1.9v3.8L12 14.6l-3.5-1.9V8.9L12 7z" fill="#FFFFFF" />
      </svg>
    );
  }

  // PHP
  if (norm.includes("php")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" />
        <text x="6" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="system-ui, sans-serif">PHP</text>
      </svg>
    );
  }

  // Java
  if (norm.includes("java") && !norm.includes("script")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M9 19c3.5 0 7-.5 7-1.5s-3.5-1.5-7-1.5-7 .5-7 1.5 3.5 1.5 7 1.5z" fill="#5382A1" />
        <path d="M8 15c2.5 0 5-.3 5-1s-2.5-1-5-1-5 .3-5 1 2.5 1 5 1z" fill="#E76F00" />
        <path d="M10 6c1 1.5 0 3-1 4.5 1.5-.5 3-1.5 2-3.5-1-1.5 0-3 1-4-1.5.5-3 1.5-2 3z" fill="#E76F00" />
      </svg>
    );
  }

  // C++
  if (norm.includes("c++") || norm === "cpp" || norm === "c") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#00599C" />
        <text x="5.5" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="system-ui, sans-serif">C++</text>
      </svg>
    );
  }

  // Python
  if (norm.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M11.9 2C8.6 2 6.7 3.4 6.7 5.6v2.3h5.4v.8H4.4C2.3 8.7 2 10.6 2 12.8s.3 4.1 2.4 4.1h1.4v-2c0-2.3 1.9-4.2 4.2-4.2h5.4c1.9 0 3.4-1.5 3.4-3.4V5.6c0-2.2-1.9-3.6-6.9-3.6zm-1.8 1.7c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" fill="#3776AB" />
        <path d="M12.1 22c3.3 0 5.2-1.4 5.2-3.6v-2.3h-5.4v-.8h7.7c2.1 0 2.4-1.9 2.4-4.1s-.3-4.1-2.4-4.1h-1.4v2c0 2.3-1.9 4.2-4.2 4.2H8.6c-1.9 0-3.4 1.5-3.4 3.4v1.7c0 2.2 1.9 3.6 6.9 3.6zm1.8-1.7c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z" fill="#FFD43B" />
      </svg>
    );
  }

  // MySQL
  if (norm.includes("mysql")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path d="M6 14.5c2-4 6-6 10-4.5 1 .4 2 1 2 1s-1.5 2-4 1.5c-3-.6-5 1-6 2z" fill="#F29111" />
        <text x="4" y="18" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="system-ui, sans-serif">MySQL</text>
      </svg>
    );
  }

  // MongoDB
  if (norm.includes("mongo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C11.5 3 6 8.5 6 14c0 4 3 7 6 8 3-1 6-4 6-8 0-5.5-5.5-11-6-12z" fill="#47A248" />
        <path d="M12 2v20c3-1 6-4 6-8 0-5.5-5.5-11-6-12z" fill="#4CAF50" />
        <path d="M12 7v13c.3 0 .7-.1 1-.2V7h-1z" fill="#FFFFFF" opacity="0.6" />
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes("postgres") || norm.includes("psql")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15.5c-2.5 0-4.5-1.5-4.5-3.5h2c0 1 1 1.5 2.5 1.5s2.5-.5 2.5-1.5c0-.8-.6-1.2-1.8-1.5l-1.4-.4C11 11.6 10 10.8 10 9.5c0-1.7 1.5-3 3.5-3s3.5 1.3 3.5 3h-2c0-.8-.7-1.2-1.5-1.2s-1.5.4-1.5 1.2c0 .7.6 1.1 1.7 1.4l1.4.4c1.5.4 2.4 1.3 2.4 2.7 0 2-1.8 3.5-4.5 3.5z" fill="#336791" />
      </svg>
    );
  }

  // Firebase
  if (norm.includes("firebase")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4.5 17.5L7 3.5l3.5 6.5L4.5 17.5z" fill="#FFA000" />
        <path d="M19.5 17.5L16 6.5l-2.5 4.5 6 6.5z" fill="#F57C00" />
        <path d="M13.5 11l-3-6-6 12.5L12 21l7.5-3.5L13.5 11z" fill="#FFCA28" />
      </svg>
    );
  }

  // Supabase
  if (norm.includes("supabase")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.5 2L3 14.5h8.5L9.5 22 21 9.5h-7.5L13.5 2z" fill="#3ECF8E" />
      </svg>
    );
  }

  // Android Studio / Android
  if (norm.includes("studio")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#3DDC84" />
        <path d="M7 17l5-10 5 10H7zm5-3.5l1.6-3.2h-3.2L12 13.5z" fill="#073042" />
      </svg>
    );
  }

  // Kotlin
  if (norm.includes("kotlin")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M22 2H2v20h20L12 12 22 2z" fill="url(#kotlin-grad)" />
        <path d="M12 12L2 22V2l10 10z" fill="url(#kotlin-grad-2)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="22" y1="2" x2="2" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E4485D" />
            <stop offset="50%" stopColor="#C711E1" />
            <stop offset="100%" stopColor="#7F52FF" />
          </linearGradient>
          <linearGradient id="kotlin-grad-2" x1="2" y1="2" x2="12" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0095D5" />
            <stop offset="100%" stopColor="#7F52FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // XML
  if (norm.includes("xml")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#E44D26" />
        <text x="3.5" y="16" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
      </svg>
    );
  }

  // Cursor AI
  if (norm.includes("cursor")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#18181B" stroke="#38BDF8" strokeWidth="0.8" />
        <path d="M6 5l12 7-6.5 1.5-1.5 6.5L6 5z" fill="#38BDF8" />
      </svg>
    );
  }

  // Antigravity AI
  if (norm.includes("antigravity")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#0B0F19" stroke="#818CF8" strokeWidth="1.2" />
        <path d="M12 4.5l5 9H7l5-9z" stroke="#38BDF8" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(56, 189, 248, 0.15)" />
        <circle cx="12" cy="11" r="2.2" fill="#A855F7" />
        <path d="M8 17.5h8" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Android
  if (norm.includes("android")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M6 14h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6zm-1-1a7 7 0 0114 0H5zm3.5-4.5L7 6m9.5 2.5L18 6" stroke="#3DDC84" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="11" r="1" fill="#3DDC84" />
        <circle cx="15" cy="11" r="1" fill="#3DDC84" />
      </svg>
    );
  }

  // Flutter
  if (norm.includes("flutter")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13.5 2.5L4 12l3 3 12.5-12.5h-6zM13.5 12.5L8.5 17.5l3 3 3-3 5-5h-6z" fill="#42A5F5" />
        <path d="M11.5 20.5l3 3h6l-6-6-3 3z" fill="#0D47A1" />
      </svg>
    );
  }

  // Git
  if (norm === "git") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.7 10.7L13.3 2.3c-.4-.4-1.1-.4-1.5 0L9.7 4.4l3.1 3.1c.3-.1.7 0 1 .2.6.6.6 1.6 0 2.2-.4.4-1 .6-1.5.4l-2.4 2.4c.2.5 0 1.1-.4 1.5-.6.6-1.6.6-2.2 0s-.6-1.6 0-2.2c.4-.4 1-.6 1.5-.4l2.3-2.3v-4L2.3 10.7c-.4.4-.4 1.1 0 1.5l8.4 8.4c.4.4 1.1.4 1.5 0l9.5-9.5c.4-.4.4-1.1 0-1.4z" fill="#F05032" />
      </svg>
    );
  }

  // GitHub
  if (norm.includes("github")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 13.5c.8 3.5 4 6 8.5 6 6 0 9.5-4 10-8.5-1-.5-2.5-.5-3.5 0-.5-2-2.5-3.5-5-3.5v1.5H11V7H9V9H7v2H5v2.5H3z" fill="#2496ED" />
        <rect x="5" y="11" width="1.5" height="1.5" fill="#FFFFFF" />
        <rect x="7.5" y="11" width="1.5" height="1.5" fill="#FFFFFF" />
        <rect x="10" y="11" width="1.5" height="1.5" fill="#FFFFFF" />
        <rect x="7.5" y="8.5" width="1.5" height="1.5" fill="#FFFFFF" />
        <rect x="10" y="8.5" width="1.5" height="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Figma
  if (norm.includes("figma")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M8 12a4 4 0 118 0 4 4 0 01-8 0z" fill="#1ABCFE" />
        <path d="M12 2a4 4 0 00-4 4 4 4 0 004 4h4V2h-4z" fill="#F24E1E" />
        <path d="M8 6a4 4 0 014-4v8H8a4 4 0 010-8z" fill="#FF7262" />
        <path d="M8 18a4 4 0 014-4v4a4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4z" fill="#0ACF83" />
        <path d="M16 10a4 4 0 00-4-4v8h4a4 4 0 000-8z" fill="#A259FF" />
      </svg>
    );
  }

  // Netlify
  if (norm.includes("netlify")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L3.5 12l8.5 10 8.5-10L12 2z" fill="#00C7B7" />
        <path d="M12 6.5l-4.5 5.5 4.5 5.5 4.5-5.5-4.5-5.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Postman
  if (norm.includes("postman")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M8 12l7-4-3 5 4 1-8 2z" fill="#FFFFFF" />
      </svg>
    );
  }

  // VS Code
  if (norm.includes("code") || norm.includes("vscode")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M17.5 2.5L6.5 11l-4-3.5L1 9l4.5 3L1 15l1.5 1.5 4-3.5 11 8.5 4-2V4.5l-4-2zm0 4.5v10l-6-5 6-5z" fill="#007ACC" />
      </svg>
    );
  }

  // Vercel
  if (norm.includes("vercel")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 3l10 18H2L12 3z" fill="#FFFFFF" />
      </svg>
    );
  }

  // LeetCode
  if (norm.includes("leetcode")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M14.5 3.5l-6 6c-1.5 1.5-1.5 4 0 5.5l5 5c1.5 1.5 4 1.5 5.5 0l2.5-2.5" stroke="#FFA116" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M9.5 12h11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // DSA / Algorithms / CS
  if (norm.includes("dsa") || norm.includes("algorithm") || norm.includes("data") || norm.includes("cs")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="5" r="3" fill="#3B82F6" />
        <circle cx="6" cy="18" r="3" fill="#60A5FA" />
        <circle cx="18" cy="18" r="3" fill="#A855F7" />
        <path d="M12 8v4l-4 3m4-3l4 3" stroke="#CBD5E1" strokeWidth="1.5" />
      </svg>
    );
  }

  // REST APIs
  if (norm.includes("api") || norm.includes("rest")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#0EA5E9" />
        <path d="M6 12h12m-4-4l4 4-4 4" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // WebSockets
  if (norm.includes("socket")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#F59E0B" />
      </svg>
    );
  }

  // Authentication / JWT / Security
  if (norm.includes("auth") || norm.includes("jwt") || norm.includes("security")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3zm0 6a2.5 2.5 0 012.5 2.5c0 1-.6 1.9-1.5 2.3v3.2h-2v-3.2c-.9-.4-1.5-1.3-1.5-2.3A2.5 2.5 0 0112 8z" fill="#818CF8" />
      </svg>
    );
  }

  // OOP / Architecture
  if (norm.includes("oop") || norm.includes("crud") || norm.includes("architecture")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="3" width="8" height="8" rx="2" fill="#8B5CF6" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="#3B82F6" />
        <rect x="3" y="13" width="8" height="8" rx="2" fill="#0284C7" />
        <rect x="13" y="13" width="8" height="8" rx="2" fill="#F59E0B" />
      </svg>
    );
  }

  // AI / Gemini
  if (norm.includes("ai") || norm.includes("gemini")) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#60A5FA" />
      </svg>
    );
  }

  // Default Fallback
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="#3B82F6" strokeWidth="2" fill="rgba(59, 130, 246, 0.2)" />
      <circle cx="12" cy="12" r="3" fill="#60A5FA" />
    </svg>
  );
}
