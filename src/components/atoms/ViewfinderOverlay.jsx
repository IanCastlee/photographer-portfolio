import React from 'react';

/**
 * ViewfinderOverlay
 * Next-level cinematic camera viewfinder HUD and geometric wireframe cut-square system.
 * Inspired by ARRI Alexa, RED Komodo, Leica M11-P rangefinder reticles, and high-fashion editorial grids.
 */
export const ViewfinderOverlay = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* ─── 1. ANAMORPHIC HORIZONTAL LENS STREAK (Subtle Cine Flare) ─── */}
      <div className="absolute top-[48%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/[0.12] via-white/[0.18] to-transparent blur-[0.5px]" />

      {/* ─── 2. MASTER 35MM FULL-FRAME SENSOR BOUNDARY ─── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[1400px] h-[82%] border border-neutral-400/[0.12] dark:border-white/[0.06] rounded-sm">
        {/* Four Corner Registration Optical Marks (+) */}
        <span className="absolute -top-2 -left-2 font-mono text-xs text-neutral-500/40 dark:text-white/[0.2] leading-none">+</span>
        <span className="absolute -top-2 -right-2 font-mono text-xs text-neutral-500/40 dark:text-white/[0.2] leading-none">+</span>
        <span className="absolute -bottom-2 -left-2 font-mono text-xs text-neutral-500/40 dark:text-white/[0.2] leading-none">+</span>
        <span className="absolute -bottom-2 -right-2 font-mono text-xs text-neutral-500/40 dark:text-white/[0.2] leading-none">+</span>

        {/* Perimeter Rule-of-Thirds Axis Ticks */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-400/30 dark:bg-white/[0.15]" />
        <div className="absolute top-0 left-2/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-400/30 dark:bg-white/[0.15]" />
        <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-400/30 dark:bg-white/[0.15]" />
        <div className="absolute bottom-0 left-2/3 -translate-x-1/2 w-[1px] h-2 bg-neutral-400/30 dark:bg-white/[0.15]" />
        <div className="absolute left-0 top-1/3 -translate-y-1/2 h-[1px] w-2 bg-neutral-400/30 dark:bg-white/[0.15]" />
        <div className="absolute left-0 top-2/3 -translate-y-1/2 h-[1px] w-2 bg-neutral-400/30 dark:bg-white/[0.15]" />
        <div className="absolute right-0 top-1/3 -translate-y-1/2 h-[1px] w-2 bg-neutral-400/30 dark:bg-white/[0.15]" />
        <div className="absolute right-0 top-2/3 -translate-y-1/2 h-[1px] w-2 bg-neutral-400/30 dark:bg-white/[0.15]" />

        {/* Live Top HUD Telemetry */}
        <div className="absolute top-2.5 left-4 flex items-center gap-4 text-[9px] font-mono tracking-[0.22em] uppercase">
          {/* Blinking REC indicator */}
          <div className="flex items-center gap-1.5 text-rose-500 dark:text-rose-400 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span>REC</span>
          </div>
          <span className="text-neutral-400/50 dark:text-white/20">00:24:18:02</span>
          <span className="hidden md:inline text-neutral-400/40 dark:text-white/20">•</span>
          <span className="hidden md:inline text-neutral-500 dark:text-neutral-400">24.00 FPS</span>
          <span className="hidden lg:inline text-neutral-400/40 dark:text-white/20">•</span>
          <span className="hidden lg:inline text-neutral-500 dark:text-neutral-400">LOG-C4 / PRORES 4444</span>
        </div>

        {/* Top-Right Shutter & Exposure Telemetry */}
        <div className="absolute top-2.5 right-4 hidden sm:flex items-center gap-3 text-[9px] font-mono tracking-[0.18em] uppercase text-neutral-600 dark:text-neutral-400">
          <span className="text-amber-500 dark:text-amber-400 font-bold">1/8000s</span>
          <span className="text-neutral-400/40 dark:text-white/20">|</span>
          <span className="text-cyan-500 dark:text-cyan-400 font-bold">f/0.95</span>
          <span className="text-neutral-400/40 dark:text-white/20">|</span>
          <span>ISO 64</span>
          <span className="text-neutral-400/40 dark:text-white/20">|</span>
          <span className="text-emerald-500 dark:text-emerald-400">AF-LOCK ■</span>
        </div>

        {/* Bottom Sensor & Lens Metadata */}
        <div className="absolute bottom-2.5 left-4 hidden sm:flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          <span>LEICA M11-P MONOCHROM</span>
          <span className="text-neutral-400/40 dark:text-white/20">•</span>
          <span>NOCTILUX-M 50MM F/0.95 ASPH</span>
        </div>
        <div className="absolute bottom-2.5 right-4 text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400/50 dark:text-white/25">
          ASPECT 3:2 • 60.3 MP
        </div>
      </div>

      {/* ─── 3. ROTATING DUAL-LAYER RETICLE WITH CUT-SQUARE BRACKETS (Behind Camera Shot) ─── */}
      <div className="absolute top-8 right-[4%] sm:right-[10%] w-60 h-60 sm:w-72 sm:h-72">
        {/* Outer Square with Bold Cut Corners (Autofocus Target Box) */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neutral-400/50 dark:border-white/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neutral-400/50 dark:border-white/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neutral-400/50 dark:border-white/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neutral-400/50 dark:border-white/30" />
        </div>

        {/* Rotating Circular Lens Degree Dial */}
        <div className="absolute inset-4 rounded-full border border-dashed border-neutral-400/20 dark:border-white/[0.08] animate-reticle-spin flex items-center justify-center">
          <span className="absolute -top-2 text-[8px] font-mono text-neutral-400/40 dark:text-white/20">0°</span>
          <span className="absolute -bottom-2 text-[8px] font-mono text-neutral-400/40 dark:text-white/20">180°</span>
          <span className="absolute -left-3 text-[8px] font-mono text-neutral-400/40 dark:text-white/20">270°</span>
          <span className="absolute -right-2 text-[8px] font-mono text-neutral-400/40 dark:text-white/20">90°</span>
        </div>

        {/* Counter-Rotating Inner Dashed Square */}
        <div
          className="absolute inset-10 border border-neutral-400/20 dark:border-white/[0.07] animate-reticle-rev"
          style={{ transformOrigin: 'center' }}
        />

        {/* Center Precision Target Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-8 h-8 flex items-center justify-center animate-focus-pulse">
            <span className="text-cyan-500/60 dark:text-cyan-400/40 text-sm font-mono leading-none">⌖</span>
            <div className="absolute inset-0 border border-neutral-400/30 dark:border-white/20 rounded-full scale-75" />
          </div>
        </div>

        {/* Corner HUD Label */}
        <span className="absolute -top-4 right-0 text-[8px] font-mono tracking-widest uppercase text-neutral-400/50 dark:text-white/20">
          [RETICLE: AF-ZONE-01]
        </span>
      </div>

      {/* ─── 4. GEOMETRIC NOTCHED / CHAMFERED "CUT SQUARE" (Bottom-Left) ─── */}
      <div className="absolute bottom-4 left-[2%] sm:left-[6%] w-48 h-48 sm:w-56 sm:h-56">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          {/* Main Chamfered Square: Cut at Top-Right AND Bottom-Left */}
          <path
            d="M 40,1 L 160,1 L 199,40 L 199,160 L 160,199 L 40,199 L 1,160 L 1,40 Z"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-neutral-400/40 dark:text-white/[0.12]"
          />
          {/* Inner Dashed Frame */}
          <path
            d="M 45,15 L 155,15 L 185,45 L 185,155 L 155,185 L 45,185 L 15,155 L 15,45 Z"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            className="text-neutral-400/25 dark:text-white/[0.06]"
          />
          {/* Optical Alignment Lines */}
          <line x1="100" y1="2" x2="100" y2="20" stroke="currentColor" strokeWidth="1" className="text-neutral-400/50 dark:text-white/25" />
          <line x1="100" y1="180" x2="100" y2="198" stroke="currentColor" strokeWidth="1" className="text-neutral-400/50 dark:text-white/25" />
          <line x1="2" y1="100" x2="20" y2="100" stroke="currentColor" strokeWidth="1" className="text-neutral-400/50 dark:text-white/25" />
          <line x1="180" y1="100" x2="198" y2="100" stroke="currentColor" strokeWidth="1" className="text-neutral-400/50 dark:text-white/25" />
        </svg>

        {/* Micro Telemetry Text */}
        <div className="absolute bottom-2 left-6 text-[8px] font-mono tracking-widest text-neutral-400/40 dark:text-white/20">
          <span>OPTIC MATRIX // 02</span>
        </div>
      </div>

      {/* ─── 5. INTERRUPTED / BROKEN CUT SQUARE (Mid-Left, Behind Heading) ─── */}
      <div className="absolute top-[32%] left-[1%] sm:left-[3%] w-28 h-28 sm:w-36 sm:h-36">
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
          {/* Broken border paths with deliberate open cut sections */}
          <path
            d="M 0,35 L 0,0 L 45,0 M 75,0 L 120,0 L 120,40 M 120,80 L 120,120 L 70,120 M 35,120 L 0,120 L 0,75"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-neutral-400/45 dark:text-white/[0.14]"
          />
          {/* Inner focus cross */}
          <line x1="50" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="1" className="text-neutral-400/40 dark:text-white/20" />
          <line x1="60" y1="50" x2="60" y2="70" stroke="currentColor" strokeWidth="1" className="text-neutral-400/40 dark:text-white/20" />
          {/* Corner tick mark */}
          <rect x="8" y="8" width="6" height="6" className="fill-neutral-400/30 dark:fill-white/10" />
        </svg>
      </div>

      {/* ─── 6. VERTICAL EV EXPOSURE METER (Far Right Margin) ─── */}
      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-5 hidden xl:flex flex-col items-center gap-2 text-[8px] font-mono text-neutral-400/40 dark:text-white/25">
        <span className="text-[7px]">EV</span>
        <span>+2</span>
        <span className="w-2 h-[1px] bg-neutral-400/30 dark:bg-white/20" />
        <span>+1</span>
        <span className="w-2 h-[1px] bg-neutral-400/30 dark:bg-white/20" />
        <span className="text-emerald-500 dark:text-emerald-400 font-bold">► 0</span>
        <span className="w-2 h-[1px] bg-neutral-400/30 dark:bg-white/20" />
        <span>-1</span>
        <span className="w-2 h-[1px] bg-neutral-400/30 dark:bg-white/20" />
        <span>-2</span>
      </div>

      {/* ─── 7. MICRO FOCUS BOXES & GOLDEN RATIO TICKS ─── */}
      <div className="absolute top-24 left-[34%] w-8 h-8 border border-neutral-400/30 dark:border-white/[0.1] hidden md:block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-amber-400/50 rounded-full animate-ping" />
        </div>
      </div>

      <div className="absolute bottom-28 right-[30%] w-12 h-12 border border-dashed border-neutral-400/25 dark:border-white/[0.08] hidden lg:block">
        <span className="absolute top-0.5 right-1 text-[7px] font-mono text-neutral-400/40 dark:text-white/20">F/1.4</span>
      </div>

      {/* ─── 8. LASER FOCUS SCANLINE (Subtle Cinematic Sweep) ─── */}
      <div className="absolute inset-x-[8%] top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/20 via-white/30 to-transparent blur-[0.5px] animate-laser-sweep pointer-events-none" />
    </div>
  );
};

export default ViewfinderOverlay;
