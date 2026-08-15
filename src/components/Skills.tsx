import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { SKILL_GROUPS } from "../data/portfolioData";
import {
  Code2,
  Database,
  Server,
  Terminal,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";

type FilterCategory = "all" | "frontend" | "backend" | "database" | "cs";

export default function Skills() {
  const { ref } = useReveal({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");

  const filteredGroups =
    selectedCategory === "all"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Code2 size={18} />;
      case "backend":
        return <Server size={18} />;
      case "database":
        return <Database size={18} />;
      case "cs":
        return <Terminal size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  return (
    <section id="sj-skills" className="sj-section sj-skills-section">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-section-header">
          <div>
            <div className="sj-kicker">Technical Arsenal</div>
            <h2 className="sj-section-title">Skills &amp; Technologies</h2>
          </div>
          <p className="sj-section-subtitle">
            Core stack spanning modern frontend frameworks, backend engines, databases, and algorithmic systems.
          </p>
        </div>

        {/* Dual Stack Showcase */}
        <div className="sj-stack-spotlight">
          <div className="sj-spotlight-item">
            <div className="sj-spotlight-icon mern">
              <Layers size={20} />
            </div>
            <div className="sj-spotlight-info">
              <span className="sj-spotlight-kicker">Full Stack Tier 1</span>
              <h3 className="sj-spotlight-name">MERN Stack</h3>
              <p className="sj-spotlight-desc">React.js · Node.js · Express · TypeScript · MongoDB / MySQL</p>
            </div>
          </div>

          <div className="sj-spotlight-divider" />

          <div className="sj-spotlight-item">
            <div className="sj-spotlight-icon laravel">
              <Cpu size={20} />
            </div>
            <div className="sj-spotlight-info">
              <span className="sj-spotlight-kicker">Full Stack Tier 2</span>
              <h3 className="sj-spotlight-name">Laravel &amp; PHP</h3>
              <p className="sj-spotlight-desc">Laravel MVC · OOP PHP · MySQL · REST APIs · Blade</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="sj-skill-filters">
          <button
            type="button"
            className={`sj-filter-btn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            All Skills
          </button>
          <button
            type="button"
            className={`sj-filter-btn ${selectedCategory === "frontend" ? "active" : ""}`}
            onClick={() => setSelectedCategory("frontend")}
          >
            Frontend &amp; Mobile
          </button>
          <button
            type="button"
            className={`sj-filter-btn ${selectedCategory === "backend" ? "active" : ""}`}
            onClick={() => setSelectedCategory("backend")}
          >
            Backend
          </button>
          <button
            type="button"
            className={`sj-filter-btn ${selectedCategory === "database" ? "active" : ""}`}
            onClick={() => setSelectedCategory("database")}
          >
            Databases &amp; Tools
          </button>
          <button
            type="button"
            className={`sj-filter-btn ${selectedCategory === "cs" ? "active" : ""}`}
            onClick={() => setSelectedCategory("cs")}
          >
            Core CS &amp; Algorithms
          </button>
        </div>

        {/* Clean Tech Grid */}
        <div className="sj-skill-groups-matrix">
          {filteredGroups.map((group, gIdx) => (
            <div
              className="sj-skill-matrix-card"
              key={group.title}
              style={{ transitionDelay: `${gIdx * 70}ms` }}
            >
              {/* Card Header */}
              <div className="sj-matrix-card-head">
                <div className="sj-matrix-head-left">
                  <div className="sj-matrix-icon-badge">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="sj-matrix-card-title">{group.title}</h3>
                </div>
                <span className="sj-matrix-count-badge">
                  {group.skills.length} Techs
                </span>
              </div>

              {/* Skills Tags Grid */}
              <div className="sj-skills-chips-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="sj-clean-skill-pill">
                    <span className="sj-clean-skill-name">{skill.name}</span>
                    {skill.badge && (
                      <span className={`sj-chip-badge ${skill.badge.toLowerCase()}`}>
                        {skill.badge}
                      </span>
                    )}
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
