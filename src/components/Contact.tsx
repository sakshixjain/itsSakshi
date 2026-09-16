import { useState, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  Mail,
  FileText,
  ArrowRight,
  Check,
  Code2,
  Users,
  Rocket,
  Zap,
  Heart,
  Star,
} from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LeetCodeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Contact() {
  const { ref } = useReveal({ threshold: 0.1 });
  const [copied, setCopied] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fireConfetti = () => {
    setConfettiActive(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      vRot: number;
      alpha: number;
    }> = [];

    const colors = ["#3B82F6", "#60A5FA", "#93C5FD", "#2563EB", "#F8FAFC", "#34D399"];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: canvas.width * 0.25,
        y: canvas.height * 0.4,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 12,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 12,
        alpha: 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.rotation += p.vRot;
        p.alpha -= 0.02;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(animate);
      } else {
        setConfettiActive(false);
      }
    };

    requestAnimationFrame(animate);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      fireConfetti();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="sj-contact" className="sj-section sj-contact-section">
      <canvas
        ref={canvasRef}
        className={`sj-confetti-canvas ${confettiActive ? "active" : ""}`}
        aria-hidden="true"
      />

      <div ref={ref} className="sj-wrap sj-contact-wrap reveal">
        {/* Main 2-Column Showcase */}
        <div className="sj-contact-grid">
          {/* Left Column: Heading, Bio, Actions, Socials */}
          <div className="sj-contact-left-col">
            {/* Opportunities Badge */}
            <div className="sj-opp-badge">
              <span className="sj-opp-dot" />
              <span>OPEN FOR OPPORTUNITIES</span>
            </div>

            {/* Title */}
            <h2 className="sj-connect-title">
              Have an opportunity <br />
              in mind? <br />
              <span className="sj-connect-highlight">
                Let's start a conversation.
              </span>
            </h2>

            {/* Subtitle / Description */}
            <p className="sj-connect-desc">
              I am actively seeking full-time Full Stack Software Engineering
              roles where I can contribute to high-impact products. Let's talk
              about how we can build something great together!
            </p>

            {/* Action Buttons Row */}
            <div className="sj-connect-actions">
              <div className="sj-email-btn-wrapper">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="sj-btn-email-primary"
                  onClick={() => {
                    copyEmail();
                  }}
                >
                  <Mail size={16} />
                  <span>{PERSONAL_INFO.email}</span>
                  <ArrowRight size={15} className="sj-btn-arrow" />
                </a>
                {copied && (
                  <span className="sj-copied-toast">
                    <Check size={13} /> Copied!
                  </span>
                )}
              </div>

              {PERSONAL_INFO.resumeUrl && (
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sj-btn-resume-outline"
                >
                  <FileText size={16} />
                  <span>Download Resume</span>
                  <ArrowRight size={15} className="sj-btn-arrow" />
                </a>
              )}
            </div>

            {/* Social Channels Strip */}
            <div className="sj-social-section">
              <div className="sj-social-divider">
                <span className="sj-social-label">ALSO FIND ME ON</span>
              </div>
              <div className="sj-social-row">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sj-social-circle-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sj-social-circle-btn"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href="https://leetcode.com/u/sakshixjain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sj-social-circle-btn"
                  title="LeetCode Profile"
                  aria-label="LeetCode"
                >
                  <LeetCodeIcon size={18} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="sj-social-circle-btn"
                  title="Direct Email"
                  aria-label="Email"
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Exact 3D Laptop Showcase with Floating Cards */}
          <div className="sj-contact-right-col">
            <div className="sj-laptop-visual-wrapper">
              {/* Handwritten Accent Top Right */}
              <div className="sj-handwritten-note">
                <span>Good</span>
                <span>Ideas</span>
                <span>Build</span>
                <span className="sj-hw-emphasis">Great Things</span>
              </div>

              {/* The Laptop Visual with Screen Typography */}
              <div className="sj-laptop-crop-box">
                <img
                  src="/images/contact-laptop.png"
                  alt="Build Learn Collaborate Grow Workspace"
                  className="sj-laptop-hero-img"
                  loading="lazy"
                />
                <div className="sj-laptop-screen-text" aria-hidden="true">
                  <span>Build</span>
                  <span>Learn</span>
                  <span className="sj-screen-highlight">Collaborate</span>
                  <span>Grow</span>
                  <span className="sj-screen-dash">—</span>
                </div>
              </div>

              {/* Floating Card 1: Open to Roles (Top Left) */}
              <div className="sj-float-card sj-float-card-roles">
                <div className="sj-float-icon-box">
                  <Users size={17} />
                </div>
                <div className="sj-float-card-body">
                  <div className="sj-float-card-label">Open to</div>
                  <div className="sj-float-card-title">Full-time Roles</div>
                  <div className="sj-float-card-tags">
                    <span>REMOTE</span>
                    <span className="sj-tag-sep">/</span>
                    <span>ONSITE</span>
                    <span className="sj-tag-sep">/</span>
                    <span>HYBRID</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: High-Impact Products (Top Right) */}
              <div className="sj-float-card sj-float-card-products">
                <div className="sj-float-icon-box">
                  <Rocket size={17} />
                </div>
                <div className="sj-float-card-body">
                  <div className="sj-float-card-label">Interested in</div>
                  <div className="sj-float-card-title">High-Impact Products</div>
                  <div className="sj-float-card-tags">
                    <span>BUILD</span>
                    <span className="sj-tag-sep">·</span>
                    <span>SCALE</span>
                    <span className="sj-tag-sep">·</span>
                    <span>INNOVATE</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Something Amazing (Bottom Right) */}
              <div className="sj-float-card sj-float-card-create">
                <div className="sj-float-icon-box">
                  <Code2 size={17} />
                </div>
                <div className="sj-float-card-body">
                  <div className="sj-float-card-label">Let's Create</div>
                  <div className="sj-float-card-title">Something Amazing</div>
                  <div className="sj-float-card-tags">
                    <span>IDEAS</span>
                    <span className="sj-tag-sep">·</span>
                    <span>PEOPLE</span>
                    <span className="sj-tag-sep">·</span>
                    <span>IMPACT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Value Strip */}
        <div className="sj-connect-bottom-strip">
          <div className="sj-pillar-item">
            <div className="sj-pillar-icon zap">
              <Zap size={18} />
            </div>
            <div className="sj-pillar-text">
              <div className="sj-pillar-title">Problem Solver</div>
              <div className="sj-pillar-subtitle">TURNING IDEAS INTO SOLUTIONS</div>
            </div>
          </div>

          <div className="sj-pillar-divider" />

          <div className="sj-pillar-item">
            <div className="sj-pillar-icon team">
              <Users size={18} />
            </div>
            <div className="sj-pillar-text">
              <div className="sj-pillar-title">Team Player</div>
              <div className="sj-pillar-subtitle">COLLABORATE · LEARN · GROW</div>
            </div>
          </div>

          <div className="sj-pillar-divider" />

          <div className="sj-pillar-item">
            <div className="sj-pillar-icon heart">
              <Heart size={18} />
            </div>
            <div className="sj-pillar-text">
              <div className="sj-pillar-title">Product Focused</div>
              <div className="sj-pillar-subtitle">USER-FIRST APPROACH</div>
            </div>
          </div>

          <div className="sj-pillar-divider" />

          <div className="sj-pillar-item">
            <div className="sj-pillar-icon star">
              <Star size={18} />
            </div>
            <div className="sj-pillar-text">
              <div className="sj-pillar-title">Always Learning</div>
              <div className="sj-pillar-subtitle">BETTER EVERY DAY</div>
            </div>
          </div>

          <div className="sj-pillar-connect-note">
            <span>Let's Connect!</span>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sj-note-arrow"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
