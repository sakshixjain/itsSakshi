import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Code2,
  Cpu,
  CheckCircle2,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Zap,
  Layers,
  Database,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const ROLES = [
  "MERN Stack & Laravel Applications",
  "Scalable REST APIs & Web Architecture",
  "Algorithmic Problem Solving (390+ DSA)",
  "Database Systems (MySQL & MongoDB)",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Card Tilt state for Hero graphic
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const graphicRef = useRef<HTMLDivElement | null>(null);

  // Continuous Typewriter effect for rotating roles
  useEffect(() => {
    const currentFullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 22 : 45;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 400);
        }
      } else {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!graphicRef.current) return;
    const rect = graphicRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = -(e.clientY - rect.top - rect.height / 2) / 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="sj-hero sj-wrap" id="sj-hero">
      <div className="sj-hero-content">
        {/* Availability Badge */}
        <div className="sj-hero-status-pill">
          <span className="sj-pulse-dot" />
          <span className="sj-status-badge-text">Available for full-time roles</span>
          <span className="sj-status-sparkle">✦</span>
        </div>

        {/* Main Title & Dynamic Role Subtitle */}
        <div className="sj-hero-heading-group">
          <div className="sj-hero-kicker-tag">Full Stack Developer</div>
          <h1 className="sj-hero-title">
            <span className="sj-name-line">{PERSONAL_INFO.name}</span>
          </h1>

          <div className="sj-hero-typewriter-line">
            <span className="sj-typewriter-label">Building</span>{" "}
            <span className="sj-typewriter-text">{displayText}</span>
            <span className="sj-cursor" />
          </div>
        </div>

        {/* Concise Hero Bio */}
        <p className="sj-hero-bio">
          Full-Stack Software Developer building scalable web applications, robust REST APIs, and database-driven solutions with <strong>MERN Stack</strong>, <strong>Laravel</strong>, and <strong>MySQL</strong>.
        </p>

        {/* Primary Call to Action Buttons (Explore Projects & Resume only) */}
        <div className="sj-hero-cta">
          <a href="#sj-projects" className="sj-btn sj-btn-primary">
            <Sparkles size={16} />
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </a>

          {PERSONAL_INFO.resumeUrl && (
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sj-btn sj-btn-resume"
            >
              <FileText size={15} />
              <span>Resume</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        {/* Hero Micro Stats Badges */}
        <div className="sj-hero-stats-bar">
          <div className="sj-stat-badge">
            <Zap size={14} className="sj-stat-icon zap" />
            <span className="sj-stat-val">390+ DSA</span>
            <span className="sj-stat-sub">LeetCode &amp; GfG</span>
          </div>
          <div className="sj-stat-badge">
            <Layers size={14} className="sj-stat-icon stack" />
            <span className="sj-stat-val">MERN &amp; Laravel</span>
            <span className="sj-stat-sub">Core Stack</span>
          </div>
          <div className="sj-stat-badge">
            <Database size={14} className="sj-stat-icon db" />
            <span className="sj-stat-val">MySQL &amp; Mongo</span>
            <span className="sj-stat-sub">Databases</span>
          </div>
        </div>
      </div>

      {/* Floating 3D Stack Graphic with Mouse Tilt */}
      <div
        className="sj-hero-graphic"
        ref={graphicRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      >
        <div className="sj-ambient-glow" />
        <div
          className="sj-plate-container"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <div className="sj-plate sj-plate-1">
            <div className="sj-plate-icon">
              <Code2 size={20} />
            </div>
            <div className="sj-plate-text">
              <div className="sj-plate-tag">Frontend Ecosystem</div>
              <div className="sj-plate-name">React.js · TypeScript · React Native</div>
            </div>
            <CheckCircle2 size={16} className="sj-plate-badge" />
          </div>

          <div className="sj-plate sj-plate-2">
            <div className="sj-plate-icon">
              <Cpu size={20} />
            </div>
            <div className="sj-plate-text">
              <div className="sj-plate-tag">Backend &amp; APIs</div>
              <div className="sj-plate-name">Node.js · Express · Laravel · PHP</div>
            </div>
            <CheckCircle2 size={16} className="sj-plate-badge" />
          </div>

          <div className="sj-plate sj-plate-3">
            <div className="sj-plate-icon">
              <Sparkles size={20} />
            </div>
            <div className="sj-plate-text">
              <div className="sj-plate-tag">Databases &amp; Systems</div>
              <div className="sj-plate-name">MySQL · MongoDB · REST APIs</div>
            </div>
            <CheckCircle2 size={16} className="sj-plate-badge" />
          </div>
        </div>
      </div>
    </section>
  );
}
