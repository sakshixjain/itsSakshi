import { useReveal } from "../hooks/useReveal";
import { SKILL_GROUPS } from "../data/portfolioData";
import { TechIcon } from "./TechIcons";

export default function Skills() {
  const { ref } = useReveal({ threshold: 0.1 });

  return (
    <section id="sj-skills" className="sj-section sj-skills-section">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-section-header">
          <div>
            <div className="sj-kicker">Technical Stack</div>
            <h2 className="sj-section-title">Skills &amp; Technologies</h2>
          </div>
          <p className="sj-section-subtitle">
            Modern frontend frameworks, robust backend systems, mobile development, and core tools.
          </p>
        </div>

        {/* Compact 4-Card Skills Showcase Grid */}
        <div className="sj-skill-showcase-grid">
          {SKILL_GROUPS.map((group, gIdx) => (
            <div
              className="sj-skill-showcase-card"
              key={group.title}
              style={{ transitionDelay: `${gIdx * 80}ms` }}
            >
              <h3 className="sj-skill-card-title">{group.title}</h3>

              {/* Centered Skills Chips Wrap */}
              <div className="sj-skill-chips-wrap">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="sj-tech-chip">
                    <TechIcon name={skill.name} size={18} className="sj-tech-chip-icon" />
                    <span className="sj-tech-chip-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
