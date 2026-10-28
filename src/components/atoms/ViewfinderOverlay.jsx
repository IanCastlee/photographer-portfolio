import React from 'react';

/**
 * ViewfinderOverlay
 * Subtle, ethereal camera viewfinder wireframe squares with varying sizes,
 * corner-cut focus brackets, chamfered notched squares, and optic ticks.
 * Perfectly calibrated for high-end photography aesthetic without overpowering content.
 */
export const ViewfinderOverlay = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Large 35mm Frame / Full Sensor Wireframe (Centered Ambient Frame) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1360px] h-[78%] border border-neutral-400/[0.08] dark:border-white/[0.04] rounded-sm">
        {/* Four Corner Registration Ticks */}
        <span className="absolute -top-1.5 -left-1.5 text-[10px] font-mono text-neutral-400/30 dark:text-white/[0.12] leading-none">+</span>
        <span className="absolute -top-1.5 -right-1.5 text-[10px] font-mono text-neutral-400/30 dark:text-white/[0.12] leading-none">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 text-[10px] font-mono text-neutral-400/30 dark:text-white/[0.12] leading-none">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 text-[10px] font-mono text-neutral-400/30 dark:text-white/[0.12] leading-none">+</span>

        {/* Micro Viewfinder Specs */}
        <div className="absolute top-2 left-3 flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400/25 dark:text-white/[0.1]">
          <span>RAW 14-BIT</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">FRAME 3:2</span>
        </div>
        <div className="absolute bottom-2 right-3 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400/25 dark:text-white/[0.1]">
          ISO 100 • 50MM
        </div>
      </div>

      {/* 2. Top-Left Wireframe Square (Solid, Large 280px) */}
      <div className="absolute -top-10 left-[3%] sm:left-[6%] w-60 h-60 sm:w-72 sm:h-72 border border-neutral-400/[0.1] dark:border-white/[0.05] rounded-none">
        {/* Subtle inner corner guide */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-neutral-400/30 dark:border-white/15" />
      </div>

      {/* 3. Top-Right "Cut Square" (Autofocus 4-Corner Bracket Box — 200px) */}
      {/* Positioned right behind / floating near the hero camera shot */}
      <div className="absolute top-12 right-[6%] sm:right-[12%] w-48 h-48 sm:w-56 sm:h-56">
        {/* 4 Cut Corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neutral-400/40 dark:border-white/20" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neutral-400/40 dark:border-white/20" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neutral-400/40 dark:border-white/20" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neutral-400/40 dark:border-white/20" />
        {/* Center Target Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-neutral-400/30 dark:text-white/15 text-xs font-mono select-none">+</span>
        </div>
      </div>

      {/* 4. Chamfered / Diagonal Corner-Cut Square (Geometric Notched Wireframe — SVG 190px) */}
      {/* Positioned near the bottom-left text area */}
      <div className="absolute bottom-6 left-[1%] sm:left-[8%] w-44 h-44 sm:w-48 sm:h-48 opacity-75">
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
          {/* Square with top-right corner cut diagonally */}
          <path
            d="M 1,1 L 125,1 L 159,35 L 159,159 L 1,159 Z"
            stroke="currentColor"
            strokeWidth="1"
            className="text-neutral-400/30 dark:text-white/[0.08]"
          />
          {/* Inner small echo notch */}
          <path
            d="M 120,6 L 154,40"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
            className="text-neutral-400/25 dark:text-white/[0.06]"
          />
        </svg>
      </div>

      {/* 5. Mid-Left Broken / Interrupted Cut Square (110px) */}
      {/* Has deliberate cut / gap in its borders */}
      <div className="absolute top-[38%] left-[2%] sm:left-[4%] w-24 h-24 sm:w-28 sm:h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {/* Broken border paths */}
          <path
            d="M 0,25 L 0,0 L 40,0 M 60,0 L 100,0 L 100,30 M 100,70 L 100,100 L 65,100 M 35,100 L 0,100 L 0,65"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-neutral-400/35 dark:text-white/[0.1]"
          />
          {/* Tiny center dot */}
          <circle cx="50" cy="50" r="1.5" className="fill-neutral-400/40 dark:fill-white/20" />
        </svg>
      </div>

      {/* 6. Medium Dashed Wireframe Square (Right-Center 160px) */}
      <div className="absolute bottom-16 right-[2%] sm:right-[5%] w-36 h-36 sm:w-44 sm:h-44 border border-dashed border-neutral-400/25 dark:border-white/[0.06] rounded-none">
        {/* Tiny coordinate label */}
        <span className="absolute bottom-1.5 left-2 text-[8px] font-mono text-neutral-400/30 dark:text-white/[0.08]">
          [AF-ZONE]
        </span>
      </div>

      {/* 7. Micro Target Focus Box (42px) near the availability badge */}
      <div className="absolute top-28 left-[38%] sm:left-[42%] w-10 h-10 border border-neutral-400/30 dark:border-white/[0.08] hidden sm:block">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-[1px] bg-neutral-400/40 dark:bg-white/20" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-[1px] bg-neutral-400/40 dark:bg-white/20" />
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 h-2 w-[1px] bg-neutral-400/40 dark:bg-white/20" />
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 h-2 w-[1px] bg-neutral-400/40 dark:bg-white/20" />
      </div>

      {/* 8. Fine Viewfinder Grid Intersections (Crosshairs) */}
      <div className="absolute top-[22%] left-[28%] text-neutral-400/20 dark:text-white/[0.08] font-mono text-xs hidden lg:block">
        +
      </div>
      <div className="absolute top-[68%] right-[32%] text-neutral-400/20 dark:text-white/[0.08] font-mono text-xs hidden lg:block">
        +
      </div>
    </div>
  );
};

export default ViewfinderOverlay;
