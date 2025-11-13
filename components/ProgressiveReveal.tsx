"use client";

import React, { useEffect, useRef, useState } from "react";

interface ProgressiveRevealProps {
  children: React.ReactNode;
  className?: string;
}

const ProgressiveReveal: React.FC<ProgressiveRevealProps> = ({
  children,
  className = "",
}) => {
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate opacity based on intersection ratio
        // Start at 25% (0.25) and reach full opacity at 40% (0.4)
        if (entry.intersectionRatio < 0.25) {
          setOpacity(0);
        } else if (entry.intersectionRatio > 0.4) {
          setOpacity(1);
        } else {
          // Linear interpolation between 0.25 and 0.4
          const progress = (entry.intersectionRatio - 0.25) / (0.4 - 0.25);
          setOpacity(progress);
        }
      },
      {
        root: null,
        // Create multiple threshold points for smoother transition
        threshold: [0, 0.1, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5],
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{ opacity }} className={className}>
      {children}
    </div>
  );
};

export default ProgressiveReveal;
