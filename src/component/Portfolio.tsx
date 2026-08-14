import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Menu, X, ArrowRight } from "lucide-react";

const SECTIONS = ["sj-about", "sj-experience", "sj-projects", "sj-education"];

type Skill = { name: string; level: number };

const SKILL_GROUPS: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "React Native", level: 80 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "Laravel", level: 90 },
      { name: "PHP", level: 88 },
      { name: "Java", level: 70 },
      { name: "C++", level: 68 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 88 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", level: 80 },
      { name: "OOP", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Auth Systems", level: 85 },
    ],
  },
];

type RevealProps = {
  children: ReactNode;
  style?: CSSProperties;
};

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("in");
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) show();
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && show()),
      { threshold: 0.05 }
    );
    io.observe(el);
    const fallback = setTimeout(show, 900);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return ref;
}

function Reveal({ children, style }: RevealProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={style}>
      {children}
    </div>
  );
}

function barStyle(level: number, delayMs: number): CSSProperties {
  return { ["--target" as string]: `${level}%`, transitionDelay: `${delayMs}ms` } as CSSProperties;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("sj-about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setLoading(false), prefersReduced ? 300 : 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  useEffect(() => {
    const id = "sj-font-link";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (id: string, label: string) => (
    <a
      href={`#${id}`}
      className={active === id ? "sj-nav-active" : ""}
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <div className="sj-root">
      <style>{`
        .sj-root{
          --ink: #233D4D;
          --ink-2: #3E6577;
          --ink-3: #6E8B96;
          --mint: #C1EBE9;
          --mint-pale: #EBF9F8;
          --paper: #FCFEFE;
          --line: rgba(35,61,77,0.14);
          --line-strong: rgba(35,61,77,0.28);
          --shadow: 0 20px 50px -25px rgba(35,61,77,0.35);
          --serif: 'Fraunces', Georgia, serif;
          --sans: 'Inter', system-ui, sans-serif;
          --mono: 'JetBrains Mono', ui-monospace, monospace;
          color-scheme: light only;
          position: relative;
          width: 100%;
          background: var(--mint-pale);
          color: var(--ink);
          font-family: var(--sans);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          overflow-x: hidden;
        }
        .sj-root *{ box-sizing: border-box; }
        .sj-root a{ color: inherit; text-decoration: none; }
        .sj-root ::selection{ background: var(--ink); color: var(--mint-pale); }
        .sj-root::before{
          content:''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
          opacity: 0.035; mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .sj-root > *{ position: relative; z-index: 1; }
        .sj-wrap{ max-width: 1160px; margin: 0 auto; padding: 0 40px; }
        .sj-root a:focus-visible, .sj-root button:focus-visible{
          outline: 2px solid var(--ink); outline-offset: 3px; border-radius: 4px;
        }

        .sj-scroll-progress{
          position: fixed; top:0; left:0; height: 3px;
          background: linear-gradient(90deg, var(--ink-2), var(--ink));
          z-index: 100; transition: width .12s ease-out;
        }

        .sj-loader{
          position: fixed; inset: 0; z-index: 200;
          background: var(--ink); color: var(--mint-pale);
          display:flex; align-items:center; justify-content:center; flex-direction: column;
          transition: opacity .6s ease, visibility .6s ease, transform .6s ease;
        }
        .sj-loader.done{ opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-18px); }
        .sj-loader-inner{ text-align: center; }
        .sj-loader-badge{
          width: 60px; height: 60px; border-radius: 50%; background: var(--mint); color: var(--ink);
          font-family: var(--mono); font-weight: 700; font-size: 1.05rem;
          display:flex; align-items:center; justify-content:center; margin: 0 auto 26px;
          opacity: 0; animation: sj-loader-fade .5s ease forwards;
        }
        .sj-loader-line{ font-family: var(--mono); font-size: 0.85rem; color: rgba(235,249,248,0.6); opacity: 0; animation: sj-loader-fade .5s ease forwards; }
        .sj-loader-line.l1{ animation-delay: .1s; }
        .sj-loader-line.l2{ animation-delay: .5s; margin-top: 4px; }
        .sj-loader-name{
          font-family: var(--serif); font-size: clamp(2rem, 5vw, 3rem); font-weight: 500;
          margin-top: 10px; opacity: 0; animation: sj-loader-fade .6s ease forwards; animation-delay: .9s;
        }
        @keyframes sj-loader-fade{ from{ opacity: 0; transform: translateY(6px); } to{ opacity: 1; transform: translateY(0); } }
        .sj-loader-bar{ width: 220px; height: 3px; background: rgba(235,249,248,0.15); border-radius: 999px; overflow: hidden; margin: 34px auto 0; }
        .sj-loader-bar-fill{ height: 100%; width: 0%; background: var(--mint); border-radius: 999px; animation: sj-loader-bar 1.3s cubic-bezier(.16,1,.3,1) forwards; animation-delay: .2s; }
        @keyframes sj-loader-bar{ to{ width: 100%; } }

        header.sj-header{
          position: sticky; top:0; z-index: 50;
          background: rgba(235,249,248,0.86);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        nav.sj-nav{ display:flex; align-items:center; justify-content:space-between; height: 78px; }
        .sj-logo{ font-family: var(--serif); font-weight: 600; font-size: 1.4rem; letter-spacing: -0.02em; display:flex; align-items:center; gap: 12px; }
        .sj-logo span{ color: var(--ink-2); }
        .sj-mono-badge{
          width: 34px; height: 34px; border-radius: 50%; background: var(--ink); color: var(--mint-pale);
          font-family: var(--mono); font-size: 0.72rem; font-weight: 700; display:flex; align-items:center; justify-content:center;
          letter-spacing: 0.02em;
        }
        .sj-navlinks{ display:flex; align-items:center; gap: 8px; background: rgba(255,255,255,0.5); border: 1px solid var(--line); border-radius: 999px; padding: 5px; }
        .sj-navlinks a{ font-size: 0.85rem; font-weight: 500; color: var(--ink-2); padding: 8px 18px; border-radius: 999px; transition: color .2s ease, background .2s ease; }
        .sj-navlinks a:hover{ color: var(--ink); }
        .sj-navlinks a.sj-nav-active{ color: var(--ink); background: var(--mint); font-weight: 600; }
        .sj-nav-cta{
          font-family: var(--mono); font-size: 0.78rem; font-weight: 500;
          padding: 10px 20px; border: 1px solid var(--ink); border-radius: 999px;
          background: var(--ink); color: var(--mint-pale);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .sj-nav-cta:hover{ transform: translateY(-1px); box-shadow: var(--shadow); }
        .sj-menu-btn{ display:none; background:none; border:none; cursor:pointer; color: var(--ink); }
        .sj-mobile-menu{ display:none; }
        .sj-mobile-menu.open{
          display:flex; flex-direction:column; gap: 4px; padding: 12px 40px 20px;
          border-bottom: 1px solid var(--line); background: var(--mint-pale);
        }
        .sj-mobile-menu a{ padding: 12px 0; font-size: 0.95rem; font-weight: 500; color: var(--ink-2); border-bottom: 1px solid var(--line); }
        .sj-mobile-menu a.sj-nav-active{ color: var(--ink); font-weight: 700; }

        .sj-hero{
          padding: 110px 0 96px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 72px; align-items: center;
          background:
            radial-gradient(1px 1px at 0 0, rgba(35,61,77,0.09) 1px, transparent 1.6px) 0 0/30px 30px,
            radial-gradient(900px circle at 100% -10%, rgba(193,235,233,0.65), transparent 55%),
            radial-gradient(700px circle at -10% 110%, rgba(35,61,77,0.05), transparent 50%);
        }
        .sj-eyebrow{ font-family: var(--mono); font-size: 0.8rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-2); display:flex; align-items:center; gap:10px; margin-bottom: 24px; animation: sj-fadeup .7s ease both; }
        .sj-eyebrow::before{ content:''; width:8px; height:8px; border-radius:50%; background: var(--ink-2); box-shadow: 0 0 0 4px rgba(35,61,77,0.12); }
        .sj-hero h1{ font-family: var(--serif); font-weight: 500; font-size: clamp(2.7rem, 5vw, 4.6rem); line-height: 1.02; letter-spacing: -0.02em; margin: 0 0 22px; color: var(--ink); -webkit-text-fill-color: var(--ink); opacity: 1; animation: sj-fadeup .7s ease .08s both; }
        .sj-hero h1 em{ font-style: italic; color: var(--ink-2); -webkit-text-fill-color: var(--ink-2); font-weight: 500; }
        .sj-hero p.lead{ font-size: 1.1rem; color: var(--ink-2); max-width: 46ch; margin: 0 0 36px; animation: sj-fadeup .7s ease .16s both; }
        .sj-hero-cta{ display:flex; gap:16px; flex-wrap: wrap; margin-bottom: 44px; animation: sj-fadeup .7s ease .24s both; }
        @keyframes sj-fadeup{ from{ opacity:0; transform: translateY(16px); } to{ opacity:1; transform: translateY(0); } }
        .sj-btn{ font-family: var(--sans); font-weight: 600; font-size: 0.92rem; padding: 14px 28px; border-radius: 9px; display:inline-flex; align-items:center; gap:8px; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
        .sj-btn-solid{ background: var(--ink); color: var(--mint-pale); }
        .sj-btn-solid:hover{ transform: translateY(-2px); box-shadow: var(--shadow); }
        .sj-btn-ghost{ border: 1px solid var(--line-strong); color: var(--ink); }
        .sj-btn-ghost:hover{ background: var(--mint); border-color: var(--ink); }

        .sj-terminal{ font-family: var(--mono); font-size: 0.82rem; color: var(--ink); background: var(--paper); border: 1px solid var(--line-strong); border-radius: 14px; padding: 22px 24px; max-width: 460px; box-shadow: var(--shadow); animation: sj-fadeup .7s ease .32s both; }
        .sj-terminal .tbar{ display:flex; gap:6px; margin-bottom: 16px; }
        .sj-terminal .tbar span{ width:9px; height:9px; border-radius:50%; background: var(--line-strong); display:inline-block; }
        .sj-terminal .prompt{ color: var(--ink-2); }
        .sj-terminal .val{ color: var(--ink); font-weight: 500; }
        .sj-terminal .trow{ display:flex; gap: 10px; padding: 4px 0; }
        .sj-terminal .k{ color: var(--ink-3); min-width: 92px; }
        .sj-cursor{ display:inline-block; width:7px; height:14px; background: var(--ink); margin-left:4px; animation: sj-blink 1s steps(1) infinite; vertical-align: -2px; }
        @keyframes sj-blink{ 50%{ opacity: 0; } }

        .sj-stackgraphic{ position: relative; height: 440px; display:flex; align-items:center; justify-content:center; }
        .sj-stackgraphic::before{
          content:''; position:absolute; width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(193,235,233,0.9) 0%, rgba(193,235,233,0) 70%);
          filter: blur(6px); z-index: 0;
          animation: sj-pulse 5s ease-in-out infinite;
        }
        @keyframes sj-pulse{ 0%,100%{ transform: scale(1); opacity: 1; } 50%{ transform: scale(1.08); opacity: 0.85; } }
        .sj-plate{ position:absolute; width: 300px; border-radius: 14px; border:1px solid var(--line-strong); display:flex; align-items:center; justify-content:space-between; padding: 17px 22px; font-family: var(--mono); font-size: 0.78rem; box-shadow: var(--shadow); opacity:0; transform: translateY(24px); }
        .sj-plate .tag{ color: var(--ink-3); text-transform: uppercase; letter-spacing: 0.08em; font-size:0.68rem; }
        .sj-plate .name{ font-weight: 600; margin-top: 4px; }
        .sj-plate-1{ background: var(--paper); top: 24px; z-index:3; animation: sj-rise .7s ease .15s forwards, sj-float 4.5s ease-in-out 1s infinite; }
        .sj-plate-2{ background: var(--mint); top: 158px; left: 30px; z-index:2; animation: sj-rise .7s ease .35s forwards, sj-float 4.5s ease-in-out 1.2s infinite; }
        .sj-plate-3{ background: var(--ink); color: var(--mint-pale); top: 292px; z-index:1; animation: sj-rise .7s ease .55s forwards, sj-float 4.5s ease-in-out 1.4s infinite; }
        .sj-plate-3 .tag{ color: rgba(235,249,248,0.6); }
        @keyframes sj-rise{ to{ opacity:1; transform: translateY(0); } }
        @keyframes sj-float{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-8px); } }

        .sj-root section{ padding: 100px 0; }
        .reveal{ opacity: 0.5; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.in{ opacity: 1; transform: translateY(0); }

        .sj-kicker{ font-family: var(--mono); font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-2); margin-bottom: 16px; display:flex; align-items:center; gap:10px; }
        .sj-kicker::before{ content:''; width: 22px; height:1px; background: var(--ink-2); }
        .sj-section-title{ font-family: var(--serif); font-weight: 500; font-size: clamp(2rem, 3.2vw, 2.7rem); letter-spacing: -0.01em; margin: 0 0 48px; }

        #sj-about{
          background:
            radial-gradient(650px circle at 105% -5%, rgba(193,235,233,0.55), transparent 60%),
            radial-gradient(500px circle at -5% 105%, rgba(35,61,77,0.045), transparent 55%),
            var(--paper);
          border-top:1px solid var(--line); border-bottom:1px solid var(--line);
        }
        .sj-about-grid{ display:grid; grid-template-columns: 1.3fr 1fr; gap: 72px; }
        .sj-about-grid p{ font-size: 1.08rem; color: var(--ink-2); margin: 0 0 20px; max-width: 56ch; }
        .sj-facts{ list-style:none; margin:0; padding:0; border-top: 1px solid var(--line); }
        .sj-facts li{ display:flex; justify-content: space-between; padding: 17px 0; border-bottom: 1px solid var(--line); font-size: 0.92rem; }
        .sj-facts li span:first-child{ color: var(--ink-3); font-family: var(--mono); font-size: 0.8rem; }
        .sj-facts li span:last-child{ font-weight: 500; text-align:right; }

        .sj-skill-groups{ display:grid; grid-template-columns: repeat(2, 1fr); gap: 28px; margin-top: 12px; }
        .sj-skill-card{ padding: 24px 26px; border: 1px solid var(--line); border-radius: 16px; background: var(--mint-pale); transition: border-color .2s ease, transform .2s ease; }
        .sj-skill-card:hover{ border-color: var(--line-strong); transform: translateY(-3px); }
        .sj-skill-card h3{ font-family: var(--sans); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-2); margin: 0 0 18px; font-weight: 600; }

        .sj-bar-list{ display:flex; flex-direction:column; gap: 14px; }
        .sj-bar-row{ opacity: 0; transform: translateY(8px); transition: opacity .5s ease, transform .5s ease; }
        .reveal.in .sj-bar-row{ opacity: 1; transform: translateY(0); }
        .sj-bar-label{ display:flex; justify-content:space-between; font-family: var(--mono); font-size: 0.74rem; margin-bottom: 7px; }
        .sj-bar-label span:first-child{ color: var(--ink); font-weight: 500; }
        .sj-bar-label span:last-child{ color: var(--ink-3); }
        .sj-bar-track{ height: 6px; border-radius: 999px; background: rgba(35,61,77,0.1); overflow: hidden; }
        .sj-bar-fill{
          height: 100%; width: 0; border-radius: 999px;
          background: linear-gradient(90deg, var(--ink-2), var(--ink));
          transition: width 1.1s cubic-bezier(.16,1,.3,1);
        }
        .reveal.in .sj-bar-fill{ width: var(--target); }

        #sj-experience{
          background:
            radial-gradient(600px circle at -8% -8%, rgba(35,61,77,0.05), transparent 55%),
            radial-gradient(550px circle at 108% 60%, rgba(193,235,233,0.5), transparent 55%),
            var(--mint-pale);
        }
        .sj-timeline{ position: relative; margin-top: 12px; }
        .sj-timeline::before{ content:''; position:absolute; left: 7px; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(var(--line-strong), var(--line)); }
        .sj-tl-item{ position: relative; padding: 0 0 52px 46px; opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
        .reveal.in .sj-tl-item{ opacity: 1; transform: translateY(0); }
        .sj-tl-item:nth-child(1){ transition-delay: .05s; }
        .sj-tl-item:nth-child(2){ transition-delay: .18s; }
        .sj-tl-item:nth-child(3){ transition-delay: .31s; }
        .sj-tl-item:last-child{ padding-bottom: 0; }
        .sj-tl-dot{ position:absolute; left:0; top: 6px; width: 15px; height: 15px; border-radius:50%; background: var(--paper); border: 2px solid var(--ink); }
        .sj-tl-item.current .sj-tl-dot{ background: var(--ink); box-shadow: 0 0 0 5px rgba(35,61,77,0.14); animation: sj-dotpulse 2.2s ease-in-out infinite; }
        @keyframes sj-dotpulse{ 0%,100%{ box-shadow: 0 0 0 5px rgba(35,61,77,0.14); } 50%{ box-shadow: 0 0 0 8px rgba(35,61,77,0.08); } }
        .sj-tl-date{ font-family: var(--mono); font-size: 0.78rem; color: var(--ink-2); margin-bottom: 8px; display:block; }
        .sj-tl-head{ display:flex; align-items: baseline; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 12px; }
        .sj-tl-role{ font-family: var(--serif); font-size: 1.35rem; font-weight: 500; }
        .sj-tl-role em{ font-style: italic; color: var(--ink-2); font-weight: 400; }
        .sj-tl-loc{ font-family: var(--mono); font-size: 0.78rem; color: var(--ink-3); }
        .sj-tl-item ul{ margin: 0; padding-left: 18px; color: var(--ink-2); }
        .sj-tl-item li{ margin-bottom: 7px; }

        #sj-projects{
          background:
            radial-gradient(600px circle at -6% -6%, rgba(193,235,233,0.55), transparent 60%),
            radial-gradient(520px circle at 106% 106%, rgba(35,61,77,0.045), transparent 55%),
            var(--paper);
          border-top:1px solid var(--line); border-bottom:1px solid var(--line);
        }
        .sj-proj-grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .sj-proj-card{ border: 1px solid var(--line); border-radius: 18px; padding: 28px 26px; background: var(--mint-pale); display:flex; flex-direction:column; transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .sj-proj-card:hover{ transform: translateY(-6px); box-shadow: var(--shadow); border-color: var(--line-strong); }
        .sj-proj-stack{ font-family: var(--mono); font-size: 0.72rem; color: var(--ink-2); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px; }
        .sj-proj-card h3{ font-family: var(--serif); font-size: 1.25rem; font-weight: 500; margin: 0 0 14px; }
        .sj-proj-card ul{ margin: 0 0 20px; padding-left: 18px; color: var(--ink-2); font-size: 0.92rem; flex:1; }
        .sj-proj-card li{ margin-bottom: 7px; }
        .sj-proj-link{ font-family: var(--mono); font-size: 0.8rem; font-weight: 500; border-top: 1px solid var(--line); padding-top: 16px; display:flex; align-items:center; gap:6px; transition: gap .2s ease, color .2s ease; }
        .sj-proj-link:hover{ color: var(--ink-2); gap: 10px; }

        #sj-education{
          background:
            radial-gradient(650px circle at 106% 108%, rgba(193,235,233,0.45), transparent 60%),
            radial-gradient(500px circle at -6% -6%, rgba(35,61,77,0.04), transparent 55%),
            var(--mint-pale);
        }
        .sj-strip{ display:grid; grid-template-columns: 1fr 1fr; gap: 44px; }
        .sj-strip-block h4{ font-family: var(--mono); font-size: 0.78rem; text-transform: uppercase; letter-spacing:0.1em; color: var(--ink-2); margin: 0 0 20px; }
        .sj-edu-item{ padding: 16px 0; border-bottom: 1px solid var(--line); }
        .sj-edu-item:last-child{ border-bottom: none; }
        .sj-edu-item .row1{ display:flex; justify-content: space-between; gap: 16px; }
        .sj-edu-item .deg{ font-weight: 600; font-size: 0.97rem; }
        .sj-edu-item .yr{ font-family: var(--mono); font-size: 0.78rem; color: var(--ink-3); white-space: nowrap; }
        .sj-edu-item .sch{ color: var(--ink-2); font-size: 0.89rem; margin-top: 3px; }
        .sj-cert-item{ padding: 16px 0; border-bottom: 1px solid var(--line); font-size: 0.93rem; color: var(--ink-2); }
        .sj-cert-item:last-child{ border-bottom: none; }
        .sj-cert-item b{ color: var(--ink); }

        .sj-footer{
          padding: 110px 0 52px;
          background: radial-gradient(700px circle at 50% 0%, rgba(193,235,233,0.45), transparent 60%);
        }
        .sj-contact-box{ background: var(--ink); color: var(--mint-pale); border-radius: 26px; padding: 72px 60px; text-align:center; position: relative; overflow: hidden; }
        .sj-contact-box::before{
          content:''; position:absolute; width: 480px; height: 480px; border-radius: 50%; top: -240px; right: -160px;
          background: radial-gradient(circle, rgba(193,235,233,0.16) 0%, rgba(193,235,233,0) 70%);
        }
        .sj-contact-box .sj-kicker{ color: var(--mint); justify-content: center; }
        .sj-contact-box .sj-kicker::before{ background: var(--mint); }
        .sj-contact-box h2{ font-family: var(--serif); font-weight: 500; font-size: clamp(2.1rem, 4vw, 3.1rem); margin: 0 0 22px; letter-spacing: -0.01em; position: relative; }
        .sj-contact-box p{ color: rgba(235,249,248,0.75); max-width: 46ch; margin: 0 auto 36px; position: relative; }
        .sj-contact-links{ display:flex; justify-content:center; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; position: relative; }
        .sj-contact-links a{ font-family: var(--mono); font-size: 0.85rem; padding: 13px 24px; border-radius: 999px; border: 1px solid rgba(235,249,248,0.3); display:inline-flex; align-items:center; gap:8px; transition: background .2s ease, border-color .2s ease, transform .2s ease; }
        .sj-contact-links a:hover{ background: rgba(235,249,248,0.12); border-color: var(--mint); transform: translateY(-2px); }
        .sj-foot-meta{ display:flex; justify-content: space-between; padding-top: 44px; font-size: 0.82rem; color: var(--ink-2); flex-wrap: wrap; gap: 12px; position: relative; }

        @media (max-width: 880px){
          .sj-navlinks{ display:none; }
          .sj-nav-cta{ display:none; }
          .sj-menu-btn{ display:block; }
          .sj-hero{ grid-template-columns: 1fr; padding-top: 60px; }
          .sj-stackgraphic{ height: 340px; order: -1; }
          .sj-about-grid{ grid-template-columns: 1fr; gap: 44px; }
          .sj-skill-groups{ grid-template-columns: 1fr; }
          .sj-proj-grid{ grid-template-columns: 1fr; }
          .sj-strip{ grid-template-columns: 1fr; }
          .sj-contact-box{ padding: 52px 28px; }
          .sj-wrap{ padding: 0 22px; }
          .sj-root section{ padding: 72px 0; }
        }
        @media (prefers-reduced-motion: reduce){
          .sj-root *{ animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>

      <div className={`sj-loader${loading ? "" : " done"}`} aria-hidden={!loading}>
        <div className="sj-loader-inner">
          <div className="sj-loader-badge">SJ</div>
          <div className="sj-loader-line l1">&gt; booting sakshi.dev</div>
          <div className="sj-loader-line l2">&gt; whoami</div>
          <div className="sj-loader-name">Sakshi Jain<span className="sj-cursor"></span></div>
          <div className="sj-loader-bar"><div className="sj-loader-bar-fill"></div></div>
        </div>
      </div>

      <div className="sj-scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="sj-header">
        <nav className="sj-nav sj-wrap">
          <div className="sj-logo">
            <span className="sj-mono-badge">SJ</span>
            Sakshi<span>.dev</span>
          </div>
          <div className="sj-navlinks">
            {navItem("sj-about", "About")}
            {navItem("sj-experience", "Experience")}
            {navItem("sj-projects", "Projects")}
            {navItem("sj-education", "Education")}
          </div>
          <a className="sj-nav-cta" href="#sj-contact">Say hello →</a>
          <button className="sj-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        <div className={`sj-mobile-menu${menuOpen ? " open" : ""}`}>
          {navItem("sj-about", "About")}
          {navItem("sj-experience", "Experience")}
          {navItem("sj-projects", "Projects")}
          {navItem("sj-education", "Education")}
          <a href="#sj-contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </header>

      <main>
        <section className="sj-hero sj-wrap">
          <div>
            <div className="sj-eyebrow">Available for full-time roles</div>
            <h1>Sakshi Jain<br /><em>builds full-stack products</em>, end to end.</h1>
            <p className="lead">Full-stack developer working across MERN and Laravel — from database schema to the interface people actually touch. Based in Baghpat, UP.</p>
            <div className="sj-hero-cta">
              <a className="sj-btn sj-btn-solid" href="#sj-experience">See experience</a>
              <a className="sj-btn sj-btn-ghost" href="mailto:sakshijainjain36@gmail.com">Email me</a>
            </div>
            <div className="sj-terminal">
              <div className="tbar"><span></span><span></span><span></span></div>
              <div className="trow"><span className="prompt">$</span><span className="val">whoami</span></div>
              <div className="trow"><span className="k">frontend</span><span className="val">react, react native</span></div>
              <div className="trow"><span className="k">backend</span><span className="val">node, express, laravel, php</span></div>
              <div className="trow"><span className="k">database</span><span className="val">mongodb, mysql</span></div>
              <div className="trow"><span className="k">status</span><span className="val">shipping<span className="sj-cursor"></span></span></div>
            </div>
          </div>
          <div className="sj-stackgraphic">
            <div className="sj-plate sj-plate-1">
              <div><div className="tag">Frontend</div><div className="name">React · TypeScript · Bootstrap</div></div>
            </div>
            <div className="sj-plate sj-plate-2">
              <div><div className="tag">Backend</div><div className="name">Node · Express · Laravel · PHP</div></div>
            </div>
            <div className="sj-plate sj-plate-3">
              <div><div className="tag">Database</div><div className="name">MongoDB · MySQL</div></div>
            </div>
          </div>
        </section>

        <section id="sj-about">
          <Reveal>
            <div className="sj-wrap">
              <div className="sj-kicker">About</div>
              <div className="sj-about-grid">
                <div>
                  <p>I'm a full-stack developer who enjoys turning a messy set of requirements into a clean, working system — schema, API, and the interface on top of it. I move comfortably between the MERN stack and Laravel/PHP, and I like owning a feature from end to end rather than handing it off halfway.</p>
                  <p>Recent work has ranged from an NGO management system handling donations and volunteers, to CRM modules, to a monitoring app for Android and iOS. Outside of client work, I keep sharp with data structures and algorithms — 390+ problems solved across LeetCode and GeeksforGeeks.</p>
                </div>
                <ul className="sj-facts">
                  <li><span>Location</span><span>Baghpat, Uttar Pradesh</span></li>
                  <li><span>Focus</span><span>MERN &amp; Laravel full-stack</span></li>
                  <li><span>Core CS</span><span>DSA · OOP · REST APIs</span></li>
                  <li><span>Practice</span><span>390+ problems, LeetCode &amp; GfG</span></li>
                </ul>
              </div>

              <div style={{ marginTop: 68 }}>
                <div className="sj-kicker">Skills</div>
                <div className="sj-skill-groups">
                  {SKILL_GROUPS.map((group) => (
                    <div className="sj-skill-card" key={group.title}>
                      <h3>{group.title}</h3>
                      <div className="sj-bar-list">
                        {group.skills.map((s, i) => (
                          <div className="sj-bar-row" key={s.name} style={{ transitionDelay: `${i * 90}ms` }}>
                            <div className="sj-bar-label">
                              <span>{s.name}</span>
                              <span>{s.level}%</span>
                            </div>
                            <div className="sj-bar-track">
                              <div className="sj-bar-fill" style={barStyle(s.level, i * 90)} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="sj-experience">
          <Reveal>
            <div className="sj-wrap">
              <div className="sj-kicker">Experience</div>
              <h2 className="sj-section-title">A log of where I've built things.</h2>

              <div className="sj-timeline">
                <div className="sj-tl-item current">
                  <div className="sj-tl-dot"></div>
                  <span className="sj-tl-date">Dec 2025 — Present</span>
                  <div className="sj-tl-head">
                    <div className="sj-tl-role">Infoace Experts Pvt Ltd <em>· Full Stack Development</em></div>
                    <div className="sj-tl-loc">Noida, India</div>
                  </div>
                  <ul>
                    <li>Built a full-stack NGO management system in Laravel, PHP and MySQL, with modules for donations, volunteers, event management, and user authentication.</li>
                    <li>Developed frontend and backend modules for Android and iOS monitoring software using the MERN stack, TypeScript and MySQL.</li>
                    <li>Designed responsive web interfaces with HTML, CSS, JavaScript and Bootstrap.</li>
                    <li>Built scalable CRM modules using the MERN stack and TypeScript.</li>
                  </ul>
                </div>

                <div className="sj-tl-item">
                  <div className="sj-tl-dot"></div>
                  <span className="sj-tl-date">Jan 2025 — Dec 2025</span>
                  <div className="sj-tl-head">
                    <div className="sj-tl-role">30days Technologies <em>· Software Development</em></div>
                    <div className="sj-tl-loc">Haryana, India</div>
                  </div>
                  <ul>
                    <li>Developed CRM modules using PHP, Laravel and MySQL.</li>
                    <li>Created responsive user interfaces with HTML, CSS, JavaScript and Bootstrap.</li>
                    <li>Designed CRUD operations, authentication modules, and database-driven applications.</li>
                  </ul>
                </div>

                <div className="sj-tl-item">
                  <div className="sj-tl-dot"></div>
                  <span className="sj-tl-date">Sept 2022 — Nov 2022</span>
                  <div className="sj-tl-head">
                    <div className="sj-tl-role">DRDO <em>· Backend Intern</em></div>
                    <div className="sj-tl-loc">Delhi, India</div>
                  </div>
                  <ul>
                    <li>Developed backend modules for an Employee Feedback System using PHP and MySQL.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="sj-projects">
          <Reveal>
            <div className="sj-wrap">
              <div className="sj-kicker">Projects</div>
              <h2 className="sj-section-title">Things I've shipped on my own time.</h2>
              <div className="sj-proj-grid">
                <div className="sj-proj-card">
                  <div className="sj-proj-stack">React Native</div>
                  <h3>Todo Application</h3>
                  <ul>
                    <li>Cross-platform todo app for task creation, editing, deletion and completion tracking.</li>
                    <li>State managed with React Hooks and AsyncStorage.</li>
                  </ul>
                  <a className="sj-proj-link" href="#">View project <ArrowRight size={14} /></a>
                </div>
                <div className="sj-proj-card">
                  <div className="sj-proj-stack">MERN</div>
                  <h3>Ed-Tech Platform</h3>
                  <ul>
                    <li>Full-stack platform built on MongoDB, Express, React and Node.</li>
                    <li>JWT authentication, role-based access control, and course management.</li>
                    <li>Razorpay integration for secure course purchases.</li>
                  </ul>
                  <a className="sj-proj-link" href="#">View project <ArrowRight size={14} /></a>
                </div>
                <div className="sj-proj-card">
                  <div className="sj-proj-stack">MERN · WebSockets</div>
                  <h3>Chat Application</h3>
                  <ul>
                    <li>Real-time one-to-one chat app built with the MERN stack and WebSockets.</li>
                    <li>Secure authentication and a responsive interface for seamless messaging.</li>
                  </ul>
                  <a className="sj-proj-link" href="#">View project <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="sj-education">
          <Reveal>
            <div className="sj-wrap">
              <div className="sj-kicker">Education &amp; Certifications</div>
              <h2 className="sj-section-title">Background.</h2>
              <div className="sj-strip">
                <div className="sj-strip-block">
                  <h4>Education</h4>
                  <div className="sj-edu-item">
                    <div className="row1"><span className="deg">B.Tech, Computer Science Engineering</span><span className="yr">Sep 2021 – May 2024</span></div>
                    <div className="sch">Maharshi Dayanand University · CGPA 8.0</div>
                  </div>
                  <div className="sj-edu-item">
                    <div className="row1"><span className="deg">Diploma, Digital Electronics</span><span className="yr">Jul 2017 – Sep 2020</span></div>
                    <div className="sch">Kasturba Institute of Technology · CGPA 8.2</div>
                  </div>
                </div>
                <div className="sj-strip-block">
                  <h4>Certifications &amp; Achievements</h4>
                  <div className="sj-cert-item"><b>Data Structures &amp; Algorithms and MERN Stack Development</b> — Codehelp</div>
                  <div className="sj-cert-item">390+ problems solved across <b>LeetCode</b> and <b>GeeksforGeeks</b></div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <footer className="sj-footer" id="sj-contact">
          <Reveal>
            <div className="sj-wrap">
              <div className="sj-contact-box">
                <div className="sj-kicker">Contact</div>
                <h2>Building something? Let's talk.</h2>
                <p>Open to full-time roles and freelance work — the fastest way to reach me is email.</p>
                <div className="sj-contact-links">
                  <a href="mailto:sakshijainjain36@gmail.com"><Mail size={15} /> sakshijainjain36@gmail.com</a>
                  <a href="tel:+919760472323"><Phone size={15} /> +91 97604 72323</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="sj-foot-meta">
                  <span><MapPin size={13} style={{ verticalAlign: -2, marginRight: 4 }} />Baghpat, Uttar Pradesh, India</span>
                  <span>© 2026 Sakshi Jain</span>
                </div>
              </div>
            </div>
          </Reveal>
        </footer>
      </main>
    </div>
  );
}