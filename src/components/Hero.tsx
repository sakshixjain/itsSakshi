import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Code2,
  Cpu,
  CheckCircle2,
  FileText,
  User,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const ROLES = [
  "builds full-stack products, end to end.",
  "engineers MERN & Laravel web systems.",
  "solves complex DSA problems (390+ solved).",
  "crafts responsive, accessible interfaces.",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  // 3D Card Tilt state for Hero graphic
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const graphicRef = useRef<HTMLDivElement | null>(null);

  // Typewriter effect for rotating roles
  useEffect(() => {
    const currentFullText = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
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

  const handleCopyCode = () => {
    const codeSnippet = `const developer = {
  name: "${PERSONAL_INFO.name}",
  role: "Full Stack Developer",
  stack: ["MERN", "Laravel", "TypeScript", "MySQL", "MongoDB"],
  dsa: "390+ Solved (LeetCode & GfG)",
  email: "${PERSONAL_INFO.email}"
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        {/* Unified Status Pill with Avatar */}
        <div className="sj-hero-status-pill">
          <div className="sj-status-avatar-circle">
            {!imageError && PERSONAL_INFO.avatarUrl ? (
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="sj-status-avatar-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <User size={13} />
            )}
            <span className="sj-status-dot-pulse" />
          </div>
          <span className="sj-status-badge-text">Available for full-time roles</span>
          <span className="sj-status-sparkle">✦</span>
        </div>

        <h1 className="sj-hero-title">
          <span className="sj-name-line">{PERSONAL_INFO.name}</span>
          <span className="sj-sub-line">
            <em>{displayText}</em>
            <span className="sj-cursor" />
          </span>
        </h1>

        {/* Sleek Modern Interactive Code Terminal */}
        <div className="sj-code-console">
          <div className="sj-console-head">
            <div className="sj-tbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="sj-console-tab">
              <Code2 size={13} className="sj-ts-icon" />
              <span>developer.config.ts</span>
            </div>

            <div className="sj-console-actions">
              {PERSONAL_INFO.resumeUrl && (
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sj-console-resume-btn"
                  title="View / Download Resume"
                >
                  <FileText size={12} />
                  <span>Resume</span>
                  <ArrowUpRight size={11} />
                </a>
              )}

              <button
                type="button"
                className="sj-console-copy-btn"
                onClick={handleCopyCode}
                title="Copy snippet"
                aria-label="Copy code snippet"
              >
                {copied ? <Check size={12} className="copied" /> : <Copy size={12} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          <div className="sj-console-body">
            <div className="sj-code-line">
              <span className="sj-line-num">1</span>
              <span className="sj-code-keyword">const</span>{" "}
              <span className="sj-code-var">developer</span> = &#123;
            </div>
            <div className="sj-code-line sj-indent">
              <span className="sj-line-num">2</span>
              <span className="sj-code-prop">name:</span>{" "}
              <span className="sj-code-str">"Sakshi Jain",</span>
            </div>
            <div className="sj-code-line sj-indent">
              <span className="sj-line-num">3</span>
              <span className="sj-code-prop">role:</span>{" "}
              <span className="sj-code-str">"Full Stack Dev",</span>
            </div>
            <div className="sj-code-line sj-indent">
              <span className="sj-line-num">4</span>
              <span className="sj-code-prop">stack:</span> [
              <span className="sj-code-str">"MERN",</span>{" "}
              <span className="sj-code-str">"Laravel",</span>{" "}
              <span className="sj-code-str">"MySQL"</span>],
            </div>
            <div className="sj-code-line sj-indent">
              <span className="sj-line-num">5</span>
              <span className="sj-code-prop">dsaSolved:</span>{" "}
              <span className="sj-code-highlight">"390+ Problems",</span>
            </div>
            <div className="sj-code-line sj-indent">
              <span className="sj-line-num">6</span>
              <span className="sj-code-prop">openForRoles:</span>{" "}
              <span className="sj-code-bool">true</span>
            </div>
            <div className="sj-code-line">
              <span className="sj-line-num">7</span>
              &#125;;
            </div>
          </div>

          <div className="sj-console-foot">
            <div className="sj-console-foot-item">
              <span className="sj-git-branch-dot" />
              <span>main*</span>
            </div>
            <div className="sj-console-foot-item sj-foot-version">
              <span>TypeScript 5.4</span>
            </div>
            <div className="sj-console-foot-item highlight">
              <span>Ready 🚀</span>
            </div>
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
