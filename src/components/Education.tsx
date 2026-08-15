import { useReveal } from "../hooks/useReveal";
import { CERTIFICATIONS, EDUCATION_ITEMS } from "../data/portfolioData";
import { GraduationCap, Award, Trophy, CheckCircle, Calendar, Building2 } from "lucide-react";

export default function Education() {
  const { ref } = useReveal({ threshold: 0.1 });

  return (
    <section id="sj-education" className="sj-section sj-edu-section">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-section-header">
          <div>
            <div className="sj-kicker">Academic &amp; Credentials</div>
            <h2 className="sj-section-title">Education &amp; Achievements</h2>
          </div>
          <p className="sj-section-subtitle">
            Formal engineering degree, technical diploma, and continuous algorithmic problem-solving milestones.
          </p>
        </div>

        <div className="sj-edu-grid">
          {/* Formal Education Column */}
          <div className="sj-edu-col">
            <div className="sj-col-header">
              <GraduationCap size={20} />
              <h3>Academic Background</h3>
            </div>

            <div className="sj-edu-cards">
              {EDUCATION_ITEMS.map((item) => (
                <div key={item.degree} className="sj-edu-card">
                  <div className="sj-edu-top">
                    <div className="sj-edu-degree">{item.degree}</div>
                    <span className="sj-score-badge">{item.score}</span>
                  </div>

                  <div className="sj-edu-meta">
                    <div className="sj-edu-inst">
                      <Building2 size={14} />
                      <span>{item.institution}</span>
                    </div>
                    <div className="sj-edu-period">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements Column */}
          <div className="sj-edu-col">
            <div className="sj-col-header">
              <Trophy size={20} />
              <h3>Certifications &amp; Milestones</h3>
            </div>

            <div className="sj-cert-cards">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className={`sj-cert-card ${cert.highlight ? "highlight" : ""}`}
                >
                  <div className="sj-cert-icon">
                    {cert.highlight ? <Award size={18} /> : <CheckCircle size={18} />}
                  </div>
                  <div className="sj-cert-info">
                    <div className="sj-cert-title">{cert.title}</div>
                    <div className="sj-cert-issuer">{cert.issuer}</div>
                  </div>
                </div>
              ))}

              {/* Extra Problem-Solving Highlight Box */}
              <div className="sj-leetcode-box">
                <div className="sj-lc-header">
                  <span className="sj-lc-badge">Competitive Practice</span>
                  <span className="sj-lc-count">390+ Solved</span>
                </div>
                <p className="sj-lc-desc">
                  Active problem solver on LeetCode and GeeksforGeeks covering Binary Trees, Dynamic Programming, Graphs, and Data Structure Optimizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
