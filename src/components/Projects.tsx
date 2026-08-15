import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../data/portfolioData";
import {
  ArrowUpRight,
  Sparkles,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";

type ProjectCategory = "all" | "fullstack" | "mobile" | "realtime";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

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

            return (
              <article
                key={proj.id}
                className="sj-proj-card"
                style={{ transitionDelay: `${pIdx * 80}ms` }}
              >
                {/* Project Image Banner */}
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

                  <div className="sj-proj-badges-row">

                    {proj.featured && (
                      <span className="sj-featured-badge">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="sj-proj-card-body">
                  <div className="sj-proj-card-top">
                    {/* <span className="sj-proj-stack-label">{proj.stack}</span> */}
                    <h3 className="sj-proj-card-title">{proj.title}</h3>
                    <p className="sj-proj-summary-text">{proj.summary}</p>
                  </div>

                  <div className="sj-proj-card-bottom">
                    {/* Tags List */}
                    <div className="sj-proj-tags-list">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="sj-proj-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="sj-proj-actions">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sj-proj-btn-live"
                          aria-label={`Visit ${proj.title} live website`}
                        >
                          <ExternalLink size={13} />
                          <span>Live Site</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sj-proj-btn-code"
                          aria-label={`View ${proj.title} on GitHub`}
                        >
                          <GithubIcon size={14} />
                          <span>GitHub</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
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
