import React, { useEffect, useRef, useState } from 'react';

/**
 * Scrollytelling / Scroll-Triggered Animation Atom
 * Triggers smooth, GPU-accelerated entrance animations (fade, slide, zoom, cascade)
 * when elements enter the viewport using IntersectionObserver.
 */
export const RevealOnScroll = ({
  children,
  className = '',
  threshold = 0.12,
  rootMargin = '0px 0px -50px 0px',
  delay = 0,
  duration = 700,
  direction = 'up', // 'up', 'down', 'left', 'right', 'zoom', 'fade'
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Graceful fallback for environments without IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold, rootMargin, once]);

  const getAnimationStyles = () => {
    if (isVisible) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }

    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-10 scale-[0.98]';
      case 'down':
        return 'opacity-0 -translate-y-10 scale-[0.98]';
      case 'left':
        return 'opacity-0 translate-x-10';
      case 'right':
        return 'opacity-0 -translate-x-10';
      case 'zoom':
        return 'opacity-0 scale-90';
      case 'fade':
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all will-change-[transform,opacity] ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
