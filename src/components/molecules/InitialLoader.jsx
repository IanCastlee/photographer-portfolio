import React, { useState, useEffect } from 'react';
import { Camera, Aperture } from 'lucide-react';

export const InitialLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600); // Wait for transition animation
          }, 300);
          return 100;
        }
        // Random incremental step to feel organic
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-8 sm:p-12 bg-[#0b0b0c] text-white transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Top Brand Tag */}
      <div className="w-full max-w-5xl flex items-center justify-between text-xs font-mono text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>PORTFOLIO INITIALIZATION</span>
        </span>
        <span>ARCHIVE 2025–2026</span>
      </div>

      {/* Center Cinematic Aperture & Brand */}
      <div className="flex flex-col items-center text-center max-w-md mx-auto my-auto">
        <div className="relative mb-6">
          {/* Outer rotating aperture circle */}
          <div className="w-20 h-20 rounded-full border border-neutral-700 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
            <Aperture className="w-10 h-10 text-neutral-400 stroke-[1]" />
          </div>
          {/* Inner camera center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Camera className="w-5 h-5 text-white" />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-widest font-mono uppercase mb-2">
          PHOTOGRAPHER X
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-8">
          John Carter Studio • Visual Arts
        </p>

        {/* Minimalist Progress Bar */}
        <div className="w-64 sm:w-80 h-[2px] bg-neutral-800 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-white transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage Display */}
        <div className="flex items-center justify-between w-64 sm:w-80 text-xs font-mono text-neutral-400">
          <span>LOADING ASSETS</span>
          <span className="text-white font-semibold tabular-nums">{progress}%</span>
        </div>
      </div>

      {/* Bottom Shutter Technical Info */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-400 border-t border-neutral-900 pt-4">
        <span>ISO 100 • 35MM • F/1.4 • 1/500S</span>
        <span className="hidden sm:inline">"Light makes photography. Embrace light."</span>
        <span>NEW YORK / LOS ANGELES</span>
      </div>
    </div>
  );
};

export default InitialLoader;
