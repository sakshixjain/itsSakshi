import { useState, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight, Sparkles, FileText, MapPin } from "lucide-react";

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

    const colors = ["#3B82F6", "#60A5FA", "#93C5FD", "#2563EB", "#F8FAFC"];
    for (let i = 0; i < 36; i++) {
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
    <section id="sj-contact" className="sj-section sj-contact-section">
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
              Have an opportunity in mind? <br />
              <em>Let's start a conversation.</em>
            </h2>

            <p className="sj-contact-desc">
              I am actively seeking full-time Full Stack Software Engineering roles where I can contribute to high-impact products. Let's talk!
            </p>

            <div className="sj-contact-actions">
              {/* Primary Email Pill with Copy & Direct Mail */}
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
                    <span>Download Resume</span>
                    <ArrowUpRight size={14} className="sj-arrow-icon" />
                  </a>
                </div>
              )}
            </div>

            {/* Quick Status / Availability Strip */}
            <div className="sj-contact-availability-strip">
              <div className="sj-avail-pill">
                <span className="sj-pulse-dot" />
                <span>Available for Immediate Joining</span>
              </div>
              <div className="sj-avail-loc">
                <MapPin size={13} />
                <span>{PERSONAL_INFO.location} · Remote / Onsite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
