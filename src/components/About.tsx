import { useReveal } from "../hooks/useReveal";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Award, Compass, MapPin, Sparkles } from "lucide-react";

export default function About() {
  const { ref } = useReveal({ threshold: 0.15 });

  return (
    <section id="sj-about" className="sj-section">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-kicker">About Me</div>
        <h2 className="sj-section-title">
          Engineering scalable web systems with clean architecture.
        </h2>

        <div className="sj-about-grid">
          <div className="sj-about-story">
            {PERSONAL_INFO.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}

            <div className="sj-about-chips">
              <div className="sj-chip">
                <Sparkles size={14} />
                <span>Full-Cycle Development</span>
              </div>
              <div className="sj-chip">
                <Award size={14} />
                <span>Clean Code &amp; SOLID Principles</span>
              </div>
              <div className="sj-chip">
                <Compass size={14} />
                <span>Relational &amp; NoSQL Architecture</span>
              </div>
            </div>
          </div>

          <div className="sj-about-aside">
            <div className="sj-facts-card">
              <div className="sj-facts-header">
                <MapPin size={16} />
                <span>Fast Facts</span>
              </div>
              <ul className="sj-facts-list">
                {PERSONAL_INFO.fastFacts.map((fact) => (
                  <li key={fact.label} className="sj-fact-item">
                    <span className="sj-fact-label">{fact.label}</span>
                    <span className="sj-fact-value">{fact.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sj-metric-grid">
              <div className="sj-metric-box">
                <div className="sj-metric-number">390+</div>
                <div className="sj-metric-label">LeetCode &amp; GfG Solved</div>
              </div>
              <div className="sj-metric-box">
                <div className="sj-metric-number">2+</div>
                <div className="sj-metric-label">Ecosystems (MERN / PHP)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
