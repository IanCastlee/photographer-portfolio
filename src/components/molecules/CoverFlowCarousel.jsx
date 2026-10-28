import React, { useState, useEffect, useRef } from 'react';
import { Bookmark, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { useLightbox } from '../../context/LightboxContext';

/**
 * CoverFlowCarousel
 * High-fashion 3D Cover Flow / Center-Stacked Photo Carousel.
 * Center card is elevated with a thick rounded border, deep drop-shadow, and active focus.
 * Side cards scale down with subtle opacity and edge vignette fade.
 * Fully responsive on Mobile, Tablet, and Desktop with drag/swipe and click-to-center support.
 */
export const CoverFlowCarousel = ({
  items = [],
  className = '',
  aspectRatio = 'portrait', // 'portrait' (3/4 or 4/5)
  showControls = true,
  autoPlay = false,
  autoPlayInterval = 4500,
  variant = 'hero', // 'hero' (contained) or 'full' (wide 5-card spread)
}) => {
  const { openLightbox } = useLightbox();
  const [activeIndex, setActiveIndex] = useState(() => Math.floor(items.length / 2));
  const [bookmarkedIds, setBookmarkedIds] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);

  const total = items.length;

  const handlePrev = (e) => {
    e?.stopPropagation?.();
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e) => {
    e?.stopPropagation?.();
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleSelect = (index) => {
    if (index === activeIndex) {
      if (items[index]) {
        openLightbox(items[index]);
      }
    } else {
      setActiveIndex(index);
    }
  };

  const toggleBookmark = (e, id) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Touch Swipe Handlers for Mobile & Tablet
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Optional Autoplay
  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoPlayInterval);
    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, total, autoPlayInterval]);

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`relative w-full select-none ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Edge Vignette Gradient Fades (Creates the ethereal fade seen on left/right in screenshot) */}
      <div className="absolute left-0 inset-y-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-light-bg via-light-bg/80 dark:from-[#0b0b0c] dark:via-[#0b0b0c]/80 to-transparent pointer-events-none z-30 transition-colors" />
      <div className="absolute right-0 inset-y-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-light-bg via-light-bg/80 dark:from-[#0b0b0c] dark:via-[#0b0b0c]/80 to-transparent pointer-events-none z-30 transition-colors" />

      {/* Top Right Floating Bookmark Button (Matches screenshot) */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-40">
        <button
          type="button"
          onClick={(e) => toggleBookmark(e, items[activeIndex]?.id || activeIndex)}
          aria-label="Bookmark photo"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-neutral-900/60 dark:bg-neutral-800/80 hover:bg-neutral-900 dark:hover:bg-neutral-700 text-white backdrop-blur-md border border-white/15 flex items-center justify-center shadow-lg transition-all active:scale-95 group"
        >
          <Bookmark
            className={`w-4 h-4 transition-all duration-300 ${
              bookmarkedIds[items[activeIndex]?.id || activeIndex]
                ? 'fill-amber-400 text-amber-400 scale-110'
                : 'text-neutral-200 group-hover:scale-110'
            }`}
          />
        </button>
      </div>

      {/* 3D Cover Flow Cards Container */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[480px] flex items-center justify-center overflow-hidden">
        {items.map((item, idx) => {
          // Calculate circular distance from activeIndex
          let offset = idx - activeIndex;
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;

          const isCenter = offset === 0;
          const isImmediate = Math.abs(offset) === 1;
          const isFar = Math.abs(offset) === 2;
          const isHidden = Math.abs(offset) > 2;

          if (isHidden) return null;

          // Compute responsive horizontal displacement (in px or %)
          // Tighter spacing on mobile, expanded on desktop
          let translateX = offset * 42; // percentage offset
          let scale = 1;
          let opacity = 1;
          let zIndex = 20;

          if (isCenter) {
            scale = 1.08;
            opacity = 1;
            zIndex = 30;
          } else if (isImmediate) {
            scale = 0.88;
            opacity = 0.72;
            zIndex = 20;
          } else if (isFar) {
            scale = 0.74;
            opacity = 0.38;
            zIndex = 10;
          }

          return (
            <div
              key={item.id || idx}
              onClick={() => handleSelect(idx)}
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                zIndex,
                opacity,
              }}
              className={`absolute transition-all duration-500 ease-out cursor-pointer group ${
                isCenter
                  ? 'cursor-pointer'
                  : 'hover:opacity-90 hover:scale-[0.92]'
              }`}
            >
              {/* Card Shell */}
              <div
                className={`relative w-[210px] sm:w-[250px] md:w-[280px] lg:w-[300px] aspect-[3/4] overflow-hidden transition-all duration-500 ${
                  isCenter
                    ? 'rounded-3xl border-4 border-neutral-900 dark:border-white shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                    : 'rounded-2xl border border-neutral-300 dark:border-white/10 shadow-xl'
                }`}
              >
                {/* Photo Image */}
                <img
                  src={item.coverImage || item.image || item}
                  alt={item.title || `Photo ${idx + 1}`}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isCenter
                      ? 'contrast-105 group-hover:scale-105 filter'
                      : 'contrast-95 brightness-95'
                  }`}
                />

                {/* Subtle vignette gradient on card */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isCenter
                      ? 'bg-gradient-to-t from-black/80 via-transparent to-black/10'
                      : 'bg-black/25'
                  }`}
                />

                {/* Center Card Metadata Overlay */}
                {isCenter && (
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white transition-opacity duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-300">
                        {item.category || 'Editorial Series'}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold truncate leading-tight">
                      {item.title || 'Monochrome Narrative'}
                    </h3>
                    <p className="text-[11px] text-neutral-300 font-light truncate mt-0.5">
                      {item.cameraInfo || 'Leica M11-P • 50mm f/0.95 ASPH'}
                    </p>
                  </div>
                )}

                {/* Center Hover Expand Icon */}
                {isCenter && (
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[9px] font-mono uppercase tracking-wider text-white border border-white/20 flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" />
                      <span>View</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls & Dot Indicators */}
      {showControls && (
        <div className="relative z-40 mt-3 sm:mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-neutral-300 dark:hover:bg-neutral-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Bullet Dot Indicators */}
          <div className="flex items-center gap-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? 'w-6 h-2 bg-neutral-900 dark:bg-white'
                    : 'w-2 h-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-neutral-300 dark:hover:bg-neutral-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CoverFlowCarousel;
