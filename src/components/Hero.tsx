import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Terminal as TerminalIcon,
  Sparkles,
  Code2,
  Cpu,
  CheckCircle2,
  Play,
  RotateCcw,
  FileText,
  User,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

const ROLES = [
  "builds full-stack products, end to end.",
  "engineers MERN & Laravel web systems.",
  "solves complex DSA problems (390+ solved).",
  "crafts responsive, accessible interfaces.",
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"overview" | "stack" | "stats" | "interactive">("overview");
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cliInput, setCliInput] = useState("");
  const [imageError, setImageError] = useState(false);
  const [cliHistory, setCliHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: "sakshi --status", output: "Ready for full-time engineering roles & scalable challenges." },
  ]);

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

  // Handle Interactive CLI commands
  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = cliInput.trim().toLowerCase();
    if (!trimmed) return;

    let output = "";
    switch (trimmed) {
      case "help":
        output = "Available commands: whoami, skills, projects, contact, resume, clear";
        break;
      case "whoami":
        output = `${PERSONAL_INFO.name} — Full Stack Developer (MERN & Laravel), based in ${PERSONAL_INFO.location}.`;
        break;
      case "skills":
        output = "React, React Native, Node.js, Express, Laravel, PHP, TypeScript, MongoDB, MySQL, DSA.";
        break;
      case "projects":
        output = "1. Todo App (React Native)  2. Ed-Tech Platform (MERN)  3. Chat App (WebSockets).";
        break;
      case "resume":
        output = "Resume available: click the 'Resume' button in navigation or header CTA.";
        break;
      case "contact":
        output = `Email: ${PERSONAL_INFO.email} | GitHub: github.com/sakshixjain | LinkedIn: linkedin.com/in/sakshi-jain`;
        break;
      case "clear":
        setCliHistory([]);
        setCliInput("");
        return;
      default:
        output = `Command not found: '${trimmed}'. Type 'help' for available commands.`;
    }

    setCliHistory((prev) => [...prev, { cmd: cliInput, output }]);
    setCliInput("");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!graphicRef.current) return;
    const rect = graphicRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="sj-hero sj-wrap" id="sj-hero">
      <div className="sj-hero-content">
        <div className="sj-hero-top-row">
          <div className="sj-eyebrow">
            <span className="sj-pulse-dot" />
            <span>Available for full-time roles</span>
          </div>

          {/* Profile Photo / Avatar Slot */}
          <div className="sj-hero-avatar-wrap">
            {!imageError && PERSONAL_INFO.avatarUrl ? (
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="sj-hero-avatar-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="sj-hero-avatar-placeholder" title="Add your photo to public/images/profile.jpg">
                <User size={20} />
              </div>
            )}
            <span className="sj-avatar-online" />
          </div>
        </div>

        <h1 className="sj-hero-title">
          <span className="sj-name-line">{PERSONAL_INFO.name}</span>
          <span className="sj-sub-line">
            <em>{displayText}</em>
            <span className="sj-cursor" />
          </span>
        </h1>

        <p className="sj-hero-lead">
          Full-stack developer architecting scalable web applications across the <strong>MERN stack</strong> and <strong>Laravel / PHP</strong> — from robust database schema design to responsive, accessible user interfaces.
        </p>

        <div className="sj-hero-cta">
          <a className="sj-btn sj-btn-solid" href="#sj-experience">
            <span>Explore Experience</span>
            <ArrowRight size={16} />
          </a>

          {PERSONAL_INFO.resumeUrl && (
            <a
              className="sj-btn sj-btn-resume"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          )}

          <a className="sj-btn sj-btn-ghost" href="#sj-projects">
            <span>View Projects</span>
          </a>
        </div>

        {/* Interactive Terminal Widget */}
        <div className="sj-terminal">
          <div className="sj-terminal-header">
            <div className="sj-tbar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="sj-term-tabs">
              <button
                type="button"
                className={`sj-term-tab ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                <TerminalIcon size={12} />
                <span>whoami.sh</span>
              </button>
              <button
                type="button"
                className={`sj-term-tab ${activeTab === "stack" ? "active" : ""}`}
                onClick={() => setActiveTab("stack")}
              >
                <Code2 size={12} />
                <span>stack.json</span>
              </button>
              <button
                type="button"
                className={`sj-term-tab ${activeTab === "stats" ? "active" : ""}`}
                onClick={() => setActiveTab("stats")}
              >
                <Cpu size={12} />
                <span>metrics.log</span>
              </button>
              <button
                type="button"
                className={`sj-term-tab interactive ${activeTab === "interactive" ? "active" : ""}`}
                onClick={() => setActiveTab("interactive")}
              >
                <Play size={11} />
                <span>terminal.exe</span>
              </button>
            </div>
          </div>

          <div className="sj-terminal-body">
            {activeTab === "overview" && (
              <div className="sj-term-screen">
                <div className="sj-trow">
                  <span className="sj-prompt">$</span>
                  <span className="sj-val cmd">sakshi --role</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">title</span>
                  <span className="sj-val highlight">Full Stack Developer</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">stack</span>
                  <span className="sj-val">MERN (React/Node) + Laravel/PHP</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">location</span>
                  <span className="sj-val">{PERSONAL_INFO.location}</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">status</span>
                  <span className="sj-val status">
                    ready_to_ship
                    <span className="sj-cursor" />
                  </span>
                </div>
              </div>
            )}

            {activeTab === "stack" && (
              <div className="sj-term-screen">
                <div className="sj-trow">
                  <span className="sj-prompt">$</span>
                  <span className="sj-val cmd">cat tech_stack.json</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">frontend</span>
                  <span className="sj-val">{PERSONAL_INFO.terminalData.frontend}</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">backend</span>
                  <span className="sj-val">{PERSONAL_INFO.terminalData.backend}</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">database</span>
                  <span className="sj-val">{PERSONAL_INFO.terminalData.database}</span>
                </div>
              </div>
            )}

            {activeTab === "stats" && (
              <div className="sj-term-screen">
                <div className="sj-trow">
                  <span className="sj-prompt">$</span>
                  <span className="sj-val cmd">fetch --achievements</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">problem_solving</span>
                  <span className="sj-val highlight">390+ DSA (LeetCode &amp; GfG)</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">education</span>
                  <span className="sj-val">B.Tech CSE (CGPA 8.0)</span>
                </div>
                <div className="sj-trow">
                  <span className="sj-k">experience</span>
                  <span className="sj-val">Enterprise CRM &amp; NGO Systems</span>
                </div>
              </div>
            )}

            {activeTab === "interactive" && (
              <div className="sj-term-screen sj-cli-mode">
                <div className="sj-cli-welcome">
                  <span>Interactive Terminal (type 'help' or click quick pills):</span>
                  <button
                    type="button"
                    className="sj-cli-clear"
                    onClick={() => setCliHistory([])}
                    title="Clear terminal"
                  >
                    <RotateCcw size={12} />
                  </button>
                </div>

                <div className="sj-quick-pills">
                  {["whoami", "skills", "projects", "resume", "contact", "clear"].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      className="sj-quick-pill"
                      onClick={() => {
                        setCliInput(cmd);
                        setTimeout(() => {
                          const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
                          handleCliSubmit(fakeEvent);
                        }, 50);
                      }}
                    >
                      {cmd}
                    </button>
                  ))}
                </div>

                <div className="sj-cli-logs">
                  {cliHistory.map((item, idx) => (
                    <div key={idx} className="sj-cli-entry">
                      <div className="sj-trow">
                        <span className="sj-prompt">$</span>
                        <span className="sj-val cmd">{item.cmd}</span>
                      </div>
                      <div className="sj-cli-output">{item.output}</div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleCliSubmit} className="sj-cli-form">
                  <span className="sj-prompt">$</span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder="type a command (e.g. skills, resume)..."
                    className="sj-cli-input"
                  />
                </form>
              </div>
            )}
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
              <div className="sj-plate-name">MongoDB · MySQL · REST · WebSockets</div>
            </div>
            <CheckCircle2 size={16} className="sj-plate-badge" />
          </div>
        </div>
      </div>
    </section>
  );
}
