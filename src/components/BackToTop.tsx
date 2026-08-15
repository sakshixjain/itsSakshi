import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrolled > 400);
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    toggleVisible();

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`sj-back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
