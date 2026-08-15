import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { NAV_LINKS } from "./data/portfolioData";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("sj-hero");

  // Initial loader timer with reduced motion support
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = setTimeout(() => {
      setLoading(false);
    }, prefersReduced ? 300 : 3200);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while loader is visible
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  // Section Observer for active navigation highlighting
  useEffect(() => {
    const sectionIds = ["sj-hero", ...NAV_LINKS.map((link) => link.id), "sj-contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el instanceof HTMLElement);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-76px 0px -40% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sj-root">
      <Loader loading={loading} onFinish={() => setLoading(false)} />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
