import { useEffect, useState } from "react";

interface LoaderProps {
  loading: boolean;
  onFinish?: () => void;
}

export default function Loader({ loading, onFinish }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progressive counter over ~2.8s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 4) + 2; // steady smooth increments
        const next = Math.min(prev + step, 100);
        return next;
      });
    }, 65);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`sj-loader ${!loading ? "done" : ""}`}
      aria-hidden={!loading}
      onTransitionEnd={() => {
        if (!loading && onFinish) onFinish();
      }}
    >
      {/* Background ambient lighting */}
      <div className="sj-loader-bg-glow" />

      <div className="sj-loader-inner sj-loader-minimal">
        {/* Holographic Glowing Badge */}
        <div className="sj-loader-badge-container">
          <div className="sj-loader-ring sj-loader-ring-outer" />
          <div className="sj-loader-ring sj-loader-ring-inner" />
          <div className="sj-loader-badge">
            <span>SJ</span>
          </div>
        </div>

        {/* Clean Name & Title */}
        <div className="sj-loader-title-wrap">
          <h1 className="sj-loader-name">Sakshi Jain</h1>
          <p className="sj-loader-sub-clean">
            <span>Full Stack Developer</span>
          </p>
        </div>

        {/* Minimalist Progress Meter */}
        <div className="sj-loader-meter-wrap">
          <div className="sj-loader-meter-line">
            <div
              className="sj-loader-meter-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="sj-loader-counter-row">
            <span className="sj-loader-status-tag">
              {progress >= 100 ? "Ready" : "Loading Experience"}
            </span>
            <span className="sj-loader-percent-num">
              {progress.toString().padStart(2, "0")}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
