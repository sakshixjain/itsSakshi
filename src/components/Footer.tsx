import { PERSONAL_INFO, NAV_LINKS } from "../data/portfolioData";
import { Mail } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
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

function LinkedinIcon({ size = 18 }: { size?: number }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="sj-centered-footer">
      <div className="sj-wrap sj-centered-footer-inner">
        {/* 1. Centered Name */}
        <h3 className="sj-footer-center-name">{PERSONAL_INFO.name}</h3>

        {/* 2. Centered Nav Links */}
        <nav className="sj-footer-center-nav" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="sj-footer-center-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* 3. Centered Social Icons */}
        <div className="sj-footer-center-socials">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="sj-footer-center-icon"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="sj-footer-center-icon"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.email}
            className="sj-footer-center-icon"
            aria-label="Email Sakshi"
            title="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* 4. Centered Copyright */}
        <div className="sj-footer-center-copy">
          © {new Date().getFullYear()} – {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
