import { useState, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Mail, MapPin, Copy, Check, ArrowUpRight, Sparkles, Send, FileText } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
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

function LinkedinIcon({ size = 16 }: { size?: number }) {
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

    const colors = ["#10B981", "#38BDF8", "#818CF8", "#F8FAFC", "#F59E0B"];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 0.7) * 10,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        alpha: 1,
      });
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.rotation += p.vRot;
        p.alpha -= 0.02;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(p.alpha, 0);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      frame++;
      if (alive && frame < 70) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setConfettiActive(false);
      }
    };

    requestAnimationFrame(animate);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      fireConfetti();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <footer id="sj-contact" className="sj-footer">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-contact-box">
          <canvas
            ref={canvasRef}
            className={`sj-confetti-canvas ${confettiActive ? "active" : ""}`}
            aria-hidden="true"
          />
          <div className="sj-contact-glow" />

          <div className="sj-contact-content">
            <div className="sj-kicker sj-contact-kicker">
              <Sparkles size={14} />
              <span>Let's Collaborate</span>
            </div>

            <h2 className="sj-contact-title">
              Building something high-impact? <br />
              <em>Let's start a conversation.</em>
            </h2>

            <p className="sj-contact-desc">
              Whether you have an open full-time engineering role, an enterprise project, or simply want to connect — my inbox is always open.
            </p>

            <div className="sj-contact-actions">
              {/* Email Pill with Copy & Mailto */}
              <div className="sj-contact-card">
                <a
                  href={PERSONAL_INFO.socials.email}
                  className="sj-contact-action-btn"
                >
                  <Mail size={16} />
                  <span>{PERSONAL_INFO.email}</span>
                  <ArrowUpRight size={14} className="sj-arrow-icon" />
                </a>
                <button
                  type="button"
                  className="sj-copy-btn"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email)}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check size={15} className="sj-copied-icon" />
                  ) : (
                    <Copy size={15} />
                  )}
                  <span className="sj-tooltip">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>

              {/* Direct Resume Download Card */}
              {PERSONAL_INFO.resumeUrl && (
                <div className="sj-contact-card sj-contact-resume-card">
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sj-contact-action-btn"
                  >
                    <FileText size={16} />
                    <span>Download CV / Resume</span>
                    <ArrowUpRight size={14} className="sj-arrow-icon" />
                  </a>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="sj-social-links">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sj-social-pill"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sj-social-pill"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry`}
                className="sj-social-pill highlight"
              >
                <Send size={15} />
                <span>Send Quick Note</span>
              </a>
            </div>

            {/* Footer Bottom Meta */}
            <div className="sj-foot-meta">
              <div className="sj-location-info">
                <MapPin size={14} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="sj-copyright">
                <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
