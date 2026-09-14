import { useReveal } from "../hooks/useReveal";
import { CERTIFICATIONS, EDUCATION_ITEMS } from "../data/portfolioData";
import {
  GraduationCap,
  Award,
  Calendar,
  Building2,
  Sparkles,
  Flame,
  CheckCircle2,
  Binary,
} from "lucide-react";

export default function Education() {
  const { ref } = useReveal({ threshold: 0.1 });

  return (
    <section id="sj-education" className="sj-section sj-edu-section">
      <div ref={ref} className="sj-wrap reveal">
        {/* Section Header */}
        <div className="sj-section-header">
          <div>
            <div className="sj-kicker">Academic &amp; Credentials</div>
            <h2 className="sj-section-title">Education &amp; Achievements</h2>
          </div>
          <p className="sj-section-subtitle">
            Formal engineering degree, technical diploma, and verified competitive problem-solving milestones.
          </p>
        </div>

        {/* Vertical Stacked Flow: Education Top, Certifications & DSA Bottom */}
        <div className="sj-edu-stack-flow">
          {/* 1. Academic Background Block (Top - Animates in from Left) */}
          <div className="sj-edu-block sj-anim-slide-left">
            <div className="sj-block-heading">
              <div className="sj-col-icon-wrap academic">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="sj-col-title">Academic Background</h3>
                <p className="sj-col-subtitle">Formal technical engineering degrees</p>
              </div>
            </div>

            <div className="sj-degrees-grid">
              {EDUCATION_ITEMS.map((item, idx) => (
                <div
                  key={item.degree}
                  className="sj-degree-card"
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="sj-edu-card-top">
                    <div>
                      {item.badge && (
                        <span className="sj-edu-badge">{item.badge}</span>
                      )}
                      <h4 className="sj-edu-degree">{item.degree}</h4>
                    </div>
                    <div className="sj-edu-score-pill">
                      <Sparkles size={12} />
                      <span>{item.score}</span>
                    </div>
                  </div>

                  <div className="sj-edu-meta-row">
                    <div className="sj-edu-meta-item">
                      <Building2 size={14} className="sj-meta-icon" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="sj-edu-meta-item">
                      <Calendar size={14} className="sj-meta-icon" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="sj-edu-paragraph">{item.description}</p>
                  )}


                </div>
              ))}
            </div>
          </div>

          {/* 2. Problem Solving & Certifications Block (Bottom - Animates in from Right) */}
          <div className="sj-edu-block sj-anim-slide-right">
            <div className="sj-block-heading">
              <div className="sj-col-icon-wrap trophy">
                <Flame size={20} />
              </div>
              <div>
                <h3 className="sj-col-title">Problem Solving &amp; Certifications</h3>
                <p className="sj-col-subtitle">Algorithmic milestones &amp; verified programs</p>
              </div>
            </div>

            <div className="sj-credentials-grid">
              {/* DSA Problem-Solving Spotlight Hero Box */}
              <div className="sj-dsa-hero-card">
                <div className="sj-dsa-top">
                  <div className="sj-dsa-badge-row">
                    <span className="sj-dsa-fire-badge">
                      <Flame size={14} />
                      Competitive Programming
                    </span>
                    <span className="sj-dsa-count">390+ Solved</span>
                  </div>
                  <h4 className="sj-dsa-title">LeetCode &amp; GeeksforGeeks</h4>
                </div>

                <p className="sj-dsa-desc">
                  Demonstrated analytical ability with 390+ algorithmic problems solved covering data structures, algorithmic complexity optimization, and dynamic problem solving.
                </p>

                {/* Progress Breakdown Bars */}
                <div className="sj-dsa-breakdown">
                  <div className="sj-dsa-stat-box">
                    <span className="sj-dsa-stat-num">140+</span>
                    <span className="sj-dsa-stat-lbl">Arrays &amp; Strings</span>
                  </div>
                  <div className="sj-dsa-stat-box">
                    <span className="sj-dsa-stat-num">160+</span>
                    <span className="sj-dsa-stat-lbl">Trees &amp; Graphs</span>
                  </div>
                  <div className="sj-dsa-stat-box">
                    <span className="sj-dsa-stat-num">90+</span>
                    <span className="sj-dsa-stat-lbl">DP &amp; Recursion</span>
                  </div>
                </div>

                <div className="sj-dsa-topics-grid">
                  <span className="sj-dsa-topic">Dynamic Programming</span>
                  <span className="sj-dsa-topic">Binary Trees &amp; BST</span>
                  <span className="sj-dsa-topic">Graphs &amp; BFS/DFS</span>
                  <span className="sj-dsa-topic">Recursion &amp; Backtracking</span>
                  <span className="sj-dsa-topic">HashMaps &amp; Sets</span>
                  <span className="sj-dsa-topic">Binary Search</span>
                </div>
              </div>

              {/* Certifications Cards Column */}
              <div className="sj-certs-column">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <div
                    key={cert.title}
                    className={`sj-cert-item-card ${cert.highlight ? "highlighted" : ""}`}
                    style={{ transitionDelay: `${cIdx * 90}ms` }}
                  >
                    <div className="sj-cert-left-icon">
                      {cert.highlight ? <Award size={18} /> : <CheckCircle2 size={18} />}
                    </div>

                    <div className="sj-cert-content">
                      <div className="sj-cert-head-row">
                        <h4 className="sj-cert-name">{cert.title}</h4>
                        {cert.badge && (
                          <span className="sj-cert-badge-tag">{cert.badge}</span>
                        )}
                      </div>
                      <div className="sj-cert-issuer-row">
                        <Binary size={13} />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
