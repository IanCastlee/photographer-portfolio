import React, { useState, useEffect, useRef } from 'react';
import { Bookmark, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useLightbox } from '../../context/LightboxContext';

/**
 * CoverFlowCarousel
 * High-impact Maximized-Width 3D Cover Flow Photo Carousel.
 * - Center elevated card with thick contrast border, rounded corners, and deep drop shadow.
 * - Layered side cards spanning across the full available width matching editorial spreads.
 * - Non-blocking vertical scroll (touch-pan-y) ensuring smooth page scrolling on all devices.
 */
export const CoverFlowCarousel = ({
  items = [],
  className = '',
  showControls = true,
  autoPlay = true,
  autoPlayInterval = 3500,
}) => {
  const { openLightbox } = useLightbox();
  const [activeIndex, setActiveIndex] = useState(() => Math.floor(items.length / 2));
  const [bookmarkedIds, setBookmarkedIds] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchEndRef = useRef({ x: 0, y: 0 });
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

  // Safe Touch Handlers — allows vertical page scrolling without interception
  const onTouchStart = (e) => {
    touchStartRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
    touchEndRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchMove = (e) => {
    touchEndRef.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchEnd = () => {
    const deltaX = touchStartRef.current.x - touchEndRef.current.x;
    const deltaY = touchStartRef.current.y - touchEndRef.current.y;
    // Only trigger horizontal navigation if horizontal gesture is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Auto-scroll loop with pause on hover and reset on interaction
  useEffect(() => {
    if (!autoPlay || total <= 1 || isHovered) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, total, autoPlayInterval, isHovered, activeIndex]);

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex];
  const activeItemId = activeItem?.id || activeIndex;
  const isCurrentBookmarked = !!bookmarkedIds[activeItemId];

  return (
    <div
      className={`relative w-full touch-pan-y select-none overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Edge Vignette Gradient Fades (Softly dissolves outer cards into background) */}
      <div className="absolute left-0 inset-y-0 w-12 sm:w-24 lg:w-44 xl:w-56 bg-gradient-to-r from-[#f8f9fa] dark:from-[#0b0b0c] to-transparent pointer-events-none z-30 transition-colors" />
      <div className="absolute right-0 inset-y-0 w-12 sm:w-24 lg:w-44 xl:w-56 bg-gradient-to-l from-[#f8f9fa] dark:from-[#0b0b0c] to-transparent pointer-events-none z-30 transition-colors" />

      {/* Floating Bookmark Button at top-right of the carousel area (Matches user screenshot) */}
      <div className="absolute top-2 right-4 sm:top-4 sm:right-8 lg:right-12 z-40">
        <button
          type="button"
          onClick={(e) => toggleBookmark(e, activeItemId)}
          aria-label="Bookmark photo"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-neutral-900/70 dark:bg-neutral-800/80 hover:bg-neutral-900 dark:hover:bg-neutral-700 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl transition-all active:scale-95 group"
        >
          <Bookmark
            className={`w-4 h-4 transition-all duration-300 ${
              isCurrentBookmarked
                ? 'fill-amber-400 text-amber-400 scale-110'
                : 'text-neutral-200 group-hover:scale-110'
            }`}
          />
        </button>
      </div>

      {/* Maximized 3D Cover Flow Cards Canvas (Screen-height optimized) */}
      <div className="relative w-full h-[46vh] sm:h-[50vh] md:h-[54vh] lg:h-[56vh] min-h-[340px] max-h-[520px] flex items-center justify-center">
        {items.map((item, idx) => {
          // Circular offset calculation
          let offset = idx - activeIndex;
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;

          const isCenter = offset === 0;
          const isImmediate = Math.abs(offset) === 1;
          const isFar = Math.abs(offset) === 2;
          const isHidden = Math.abs(offset) > 2;

          if (isHidden) return null;

          // Wide horizontal displacement spanning across the screen
          let translateX = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 20;

          if (isCenter) {
            translateX = 0;
            scale = 1.05;
            opacity = 1;
            zIndex = 30;
          } else if (isImmediate) {
            // Cards immediately adjacent to center
            translateX = offset * 86; // percentage offset
            scale = 0.90;
            opacity = 0.72;
            zIndex = 20;
          } else if (isFar) {
            // Outermost cards spreading across the wide screen width
            translateX = offset * 168; // percentage offset
            scale = 0.76;
            opacity = 0.40;
            zIndex = 10;
          }

          const itemId = item.id || idx;

          return (
            <div
              key={itemId}
              onClick={() => handleSelect(idx)}
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                zIndex,
                opacity,
              }}
              className={`absolute transition-all duration-500 ease-out cursor-pointer group ${
                isCenter ? 'cursor-pointer' : 'hover:opacity-90 hover:scale-[0.93]'
              }`}
            >
              {/* Card Shell — Viewport-height constrained so it never gets cut off at top or bottom */}
              <div
                className={`relative h-[42vh] sm:h-[46vh] md:h-[49vh] lg:h-[51vh] min-h-[300px] max-h-[470px] aspect-[3/4] w-auto overflow-hidden transition-all duration-500 ${
                  isCenter
                    ? 'rounded-3xl border-4 border-neutral-900 dark:border-white shadow-[0_25px_60px_rgba(0,0,0,0.65)]'
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
                      ? 'contrast-105 group-hover:scale-105'
                      : 'contrast-95 brightness-95'
                  }`}
                />

                {/* Card Vignette Shadow */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isCenter
                      ? 'bg-gradient-to-t from-black/85 via-black/10 to-black/20'
                      : 'bg-black/30'
                  }`}
                />

                {/* Active Card Bottom Overlay (Editorial Title & Specs) */}
                {isCenter && (
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white transition-opacity duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-neutral-300">
                        {item.category || 'Editorial Series'}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold truncate leading-tight">
                      {item.title || 'Verve Autumn Campaign'}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-300 font-light truncate mt-0.5">
                      {item.cameraInfo || 'Fujifilm GFX 100 II • GF 110mm f/2 • ISO 100'}
                    </p>
                  </div>
                )}

                {/* Active Card Quick Expand Prompt */}
                {isCenter && (
                  <div className="absolute top-3.5 left-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-white border border-white/20 flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Full View</span>
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
        <div className="relative z-40 mt-3 sm:mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-neutral-300 dark:hover:bg-neutral-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Bullet Dot Indicators */}
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? 'w-7 h-2 bg-neutral-900 dark:bg-white'
                    : 'w-2 h-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-neutral-300 dark:hover:bg-neutral-800 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CoverFlowCarousel;
