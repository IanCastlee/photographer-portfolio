import React from 'react';

/**
 * ViewfinderOverlay
 * Minimal, ultra-clean cinematic framing.
 * Telemetry text, clunky cut-squares, and noisy badges removed as requested.
 * Retains subtle full-frame sensor boundary and optical registration marks.
 */
export const ViewfinderOverlay = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Subtle Anamorphic Horizontal Lens Flare Streak */}
      <div className="absolute top-[48%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/[0.08] via-white/[0.12] to-transparent blur-[0.5px]" />

      {/* 2. Full-Frame 35mm Sensor Boundary (Minimal & non-intrusive) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] max-w-[1400px] h-[85%] border border-neutral-300/30 dark:border-white/[0.04] rounded-sm">
        {/* Four Minimal Corner Optical Registration Crosshairs (+) */}
        <span className="absolute -top-2.5 -left-2.5 font-mono text-[11px] text-neutral-400/40 dark:text-white/[0.18] leading-none select-none">+</span>
        <span className="absolute -top-2.5 -right-2.5 font-mono text-[11px] text-neutral-400/40 dark:text-white/[0.18] leading-none select-none">+</span>
        <span className="absolute -bottom-2.5 -left-2.5 font-mono text-[11px] text-neutral-400/40 dark:text-white/[0.18] leading-none select-none">+</span>
        <span className="absolute -bottom-2.5 -right-2.5 font-mono text-[11px] text-neutral-400/40 dark:text-white/[0.18] leading-none select-none">+</span>

        {/* Subtle Rule-of-Thirds Axis Ticks */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-300/40 dark:bg-white/[0.08]" />
        <div className="absolute top-0 left-2/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-300/40 dark:bg-white/[0.08]" />
        <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-300/40 dark:bg-white/[0.08]" />
        <div className="absolute bottom-0 left-2/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-300/40 dark:bg-white/[0.08]" />
      </div>

      {/* 3. Subtle Ambient Light Sweep */}
      <div className="absolute inset-x-[15%] top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[0.5px] animate-laser-sweep pointer-events-none" />
    </div>
  );
};

export default ViewfinderOverlay;
