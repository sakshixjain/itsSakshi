import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Sparkles, Award, Compass, Database, User } from "lucide-react";

export default function About() {
  const { ref } = useReveal({ threshold: 0.15 });
  const [imageError, setImageError] = useState(false);

  return (
    <section id="sj-about" className="sj-section">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-kicker">About Me</div>
        <h2 className="sj-section-title">
          Engineering scalable web systems with clean architecture.
        </h2>

        <div className="sj-about-grid">
          {/* Left Column: Clean Portrait Image Only */}
          <div className="sj-about-photo-wrap">
            <div className="sj-clean-portrait-card">
              {!imageError && PERSONAL_INFO.avatarUrl ? (
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="sj-clean-portrait-img"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="sj-about-portrait-fallback">
                  <User size={56} />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Bio Story & Core Capabilities */}
          <div className="sj-about-content">
            <div className="sj-about-bio">
              {PERSONAL_INFO.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>

            <div className="sj-about-chips">
              <div className="sj-chip">
                <Sparkles size={15} />
                <span>Full-Cycle Product Development</span>
              </div>
              <div className="sj-chip">
                <Award size={15} />
                <span>Clean Code &amp; SOLID Principles</span>
              </div>
              <div className="sj-chip">
                <Compass size={15} />
                <span>Scalable RESTful API Design</span>
              </div>
              <div className="sj-chip">
                <Database size={15} />
                <span>Relational (MySQL) &amp; NoSQL (MongoDB)</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
