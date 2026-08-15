import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText, Send } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className={`sj-header-outer ${scrolled ? "sj-header-scrolled" : ""}`}>
      <header className="sj-header-floating">
        <nav className="sj-nav-inner" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a
            href="#top"
            className="sj-logo"
            onClick={(e) => handleNavClick(e, "sj-hero")}
          >
            <div className="sj-logo-badge">
              <span className="sj-logo-text-initials">SJ</span>
              <span className="sj-logo-pulse" />
            </div>
            <span className="sj-logo-brand">
              Sakshi<span className="sj-logo-dot">.dev</span>
            </span>
          </a>

          {/* Desktop Navlinks */}
          <div className="sj-navlinks-pill" role="menubar">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`sj-nav-item ${isActive ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  role="menuitem"
                >
                  <span>{link.label}</span>
                  {isActive && <span className="sj-active-indicator" />}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="sj-nav-actions">

            <a
              className="sj-nav-btn sj-nav-btn-contact"
              href="#sj-contact"
              onClick={(e) => handleNavClick(e, "sj-contact")}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} className="sj-arrow-hover" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="sj-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        <div className={`sj-mobile-dropdown ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
          <div className="sj-mobile-links-grid">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`sj-mobile-nav-item ${activeSection === link.id ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={15} />
              </a>
            ))}

            <div className="sj-mobile-actions-row">
              {PERSONAL_INFO.resumeUrl && (
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sj-mobile-action-btn resume"
                  onClick={() => setMenuOpen(false)}
                >
                  <FileText size={15} />
                  <span>Resume</span>
                </a>
              )}

              <a
                href="#sj-contact"
                className="sj-mobile-action-btn contact"
                onClick={(e) => handleNavClick(e, "sj-contact")}
              >
                <Send size={15} />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
