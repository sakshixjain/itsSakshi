import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../data/portfolioData";
import {
  ArrowUpRight,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";

type ProjectCategory = "all" | "fullstack" | "mobile" | "realtime";

export default function Projects() {
  const { ref } = useReveal({ threshold: 0.1 });
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="sj-projects" className="sj-section sj-proj-section">
      <div ref={ref} className="sj-wrap reveal">
        <div className="sj-section-header">
          <div>
            <div className="sj-kicker">Portfolio &amp; Work</div>
            <h2 className="sj-section-title">Featured Projects</h2>
          </div>
          <p className="sj-section-subtitle">
            Production systems, live websites, and full-stack software built with MERN &amp; Laravel.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="sj-proj-filters">
          <button
            type="button"
            className={`sj-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects ({PROJECTS.length})
          </button>
          <button
            type="button"
            className={`sj-filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack (Laravel &amp; MERN)
          </button>
          <button
            type="button"
            className={`sj-filter-btn ${filter === "mobile" ? "active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile (React Native)
          </button>
          <button
            type="button"
            className={`sj-filter-btn ${filter === "realtime" ? "active" : ""}`}
            onClick={() => setFilter("realtime")}
          >
            Real-Time WebSockets
          </button>
        </div>

        {/* Projects Grid */}
        <div className="sj-proj-grid">
          {filteredProjects.map((proj, pIdx) => {
            const hasValidImage = proj.image && !failedImages[proj.id];
            const targetUrl = proj.liveUrl || proj.githubUrl;

            return (
              <article
                key={proj.id}
                className="sj-proj-card"
                style={{ transitionDelay: `${pIdx * 80}ms` }}
              >
                {/* Project Image Screen Banner with Hover Blur & Centered Button */}
                <div className="sj-proj-img-wrap">
                  {hasValidImage ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="sj-proj-img"
                      onError={() => handleImageError(proj.id)}
                    />
                  ) : (
                    <div className="sj-proj-img-placeholder">
                      <div className="sj-proj-placeholder-content">
                        <ImageIcon size={20} className="sj-proj-placeholder-icon" />
                        <span className="sj-proj-placeholder-text">
                          Upload image in <code>{proj.image || "public/images/"}</code>
                        </span>
                      </div>
                    </div>
                  )}

                  {proj.featured && (
                    <div className="sj-proj-badges-row">
                      <span className="sj-featured-badge">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Centered Hover Overlay with Blur and Live Demo Button */}
                  {targetUrl && (
                    <div className="sj-proj-hover-overlay">
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sj-proj-center-btn"
                        aria-label={`Live Demo of ${proj.title}`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="sj-proj-card-body">
                  {/* Tools / Languages Tags above Title */}
                  <div className="sj-proj-tags-list">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="sj-proj-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="sj-proj-card-top">
                    {/* Project Title */}
                    <h3 className="sj-proj-card-title">{proj.title}</h3>

                    {/* Project Summary Description */}
                    <p className="sj-proj-summary-text">{proj.summary}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
