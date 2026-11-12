import React, { useEffect, useState } from 'react';

/**
 * Scrollytelling Progress Bar
 * Tracks vertical scroll percentage and renders an ambient glowing filament
 * at the top of the viewport.
 */
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-neutral-200/20 dark:bg-neutral-800/30 overflow-hidden"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
