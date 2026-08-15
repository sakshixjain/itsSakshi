import { useReveal } from "../hooks/useReveal";
import { EXPERIENCES } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const { ref } = useReveal({ threshold: 0.1 });

  return (
    <section id="sj-experience" className="sj-section sj-exp-section">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-section-header">
          <div>
            <div className="sj-kicker">Career Path</div>
            <h2 className="sj-section-title">Where I've Built Software</h2>
          </div>
          <p className="sj-section-subtitle">
            A chronological timeline of my professional roles, engineering contributions, and key accomplishments.
          </p>
        </div>

        <div className="sj-timeline">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className={`sj-tl-item ${exp.isCurrent ? "current" : ""}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="sj-tl-dot-wrapper">
                <div className="sj-tl-dot" />
                {exp.isCurrent && <div className="sj-tl-pulse" />}
              </div>

              <div className="sj-tl-content">
                <div className="sj-tl-meta">
                  <div className="sj-tl-date-badge">
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="sj-tl-loc">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="sj-tl-head">
                  <div className="sj-tl-role-box">
                    <h3 className="sj-tl-role">{exp.role}</h3>
                    <div className="sj-tl-company">
                      <Briefcase size={14} className="sj-role-icon" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  {exp.isCurrent && (
                    <span className="sj-current-pill">
                      <span className="sj-pulse-dot" />
                      Present
                    </span>
                  )}
                </div>

                <ul className="sj-tl-list">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="sj-tl-point">
                      <CheckCircle2 size={15} className="sj-point-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="sj-tl-tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="sj-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
