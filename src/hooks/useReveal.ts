import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
  once?: boolean;
}

export function useReveal(options: RevealOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", delayMs = 0, once = true } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if prefers-reduced-motion is active
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      el.classList.add("in");
      return;
    }

    const show = () => {
      if (delayMs > 0) {
        setTimeout(() => {
          setIsVisible(true);
          el.classList.add("in");
        }, delayMs);
      } else {
        setIsVisible(true);
        el.classList.add("in");
      }
    };

    // If already in viewport on load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      if (once) return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            if (once) observer.unobserve(el);
          } else if (!once) {
            setIsVisible(false);
            el.classList.remove("in");
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    // Fallback safety trigger in case intersection observer delays
    const fallbackTimer = setTimeout(show, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold, rootMargin, delayMs, once]);

  return { ref, isVisible };
}

export default useReveal;
