import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Linkedin, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionEyebrow } from '../atoms/Typography';
import { useLightbox } from '../../context/LightboxContext';
import hoodiePhotographerImg from '../../assets/hoodie-photographer.png';

export const HeroSection = ({ profile, featuredProjects = [] }) => {
  const { openLightbox } = useLightbox();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-4 sm:pt-28 sm:pb-8 overflow-hidden bg-[#f6f7f9] dark:bg-[#070709] transition-colors duration-500"
    >
      {/* ─── ATMOSPHERIC BACKGROUND SPOTLIGHT ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Center blue/cyan radial glow behind hoodie character */}
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.40),transparent_70%)] blur-2xl" />
        {/* Subtle secondary ambient rim */}
        <div className="absolute top-1/4 right-[12%] w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        {/* Deep dark vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f7f9] dark:to-[#070709] opacity-80" />
      </div>

      {/* ─── MAIN STAGE CONTAINER (3-COLUMN SPLIT: LEFT TEXT | CENTER HOODIE CUTOUT | RIGHT BIO) ─── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ─── LEFT COLUMN: GREETING & PILL CTA (z-30: In front and clickable) ─── */}
          <div className="lg:col-span-4 flex flex-col items-start text-left relative z-30 order-1 lg:-translate-y-10 xl:-translate-y-14 2xl:-translate-y-16 transition-transform duration-300">
            <SectionEyebrow className="mb-3 text-[11px] text-blue-600 dark:text-blue-400">
              Visual Storyteller • {profile.location}
            </SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-5">
              Hello I'm <span className="underline decoration-blue-500 underline-offset-4 decoration-2">{profile.name}</span>, a professional photographer
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 max-w-sm hidden sm:block lg:hidden">
              {profile.tagline}
            </p>

            {/* Vibrant Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#works')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 dark:border-white/15 bg-white/70 dark:bg-white/[0.04] backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/40 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 active:scale-95 shadow-sm cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* ─── CENTER COLUMN: CUTOUT BLACK HOODIE PHOTOGRAPHER (z-10: Behind PHOTOGRAPHER text) ─── */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative z-10 order-2 sm:order-2 my-2 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] 2xl:max-w-[540px] mx-auto group flex items-center justify-center">
              
              {/* Backlight Aura around the head and shoulders */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />

              {/* Character Transparent Cutout Image */}
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={hoodiePhotographerImg}
                  alt="Professional photographer in black hoodie looking down"
                  className="w-full h-auto max-h-[55vh] sm:max-h-[62vh] lg:max-h-[68vh] xl:max-h-[72vh] 2xl:max-h-[76vh] object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none select-none"
                />
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: BALANCED EDITORIAL CREDENTIALS & CONNECT (z-30: In front and clickable) ─── */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-6 relative z-30 order-3 lg:-translate-y-10 xl:-translate-y-14 2xl:-translate-y-16 transition-transform duration-300 w-full max-w-md">
            
            {/* Top Stat Cards Row */}
            <div className="flex flex-wrap items-center gap-3 mb-4 w-full">
              {/* 12+ Years Behind Lens Badge */}
              <div className="bg-white/90 dark:bg-[#121318]/95 backdrop-blur-md text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-3 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 rounded-xl bg-blue-500/15 dark:bg-blue-400/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm shadow-inner">
                  ★
                </div>
                <div>
                  <span className="block text-sm font-bold leading-tight">12+ Years</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono">Behind Lens</span>
                </div>
              </div>

              {/* Master Gear Pill */}
              <div className="bg-white/80 dark:bg-[#121318]/90 backdrop-blur-md text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 px-3.5 py-2.5 rounded-2xl shadow-sm flex items-center gap-2.5">
                <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <div>
                  <span className="block text-xs font-semibold leading-tight">Leica & Hasselblad</span>
                  <span className="text-[9px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">Prime Glass</span>
                </div>
              </div>
            </div>

            {/* Editorial Statement & Disciplines Card */}
            <div className="w-full bg-white/70 dark:bg-neutral-900/50 border border-neutral-200/90 dark:border-white/[0.08] backdrop-blur-md rounded-2xl p-4 mb-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    Worldwide Commissions
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">2026 Season</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-3">
                Crafting atmospheric imagery where shadow meets emotion. Specializing in high-fashion editorials and geometric architecture.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/70 dark:border-white/5">
                {['High-Fashion', 'Editorial', 'Monochrome', 'Architectural'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-white/[0.05] text-[10px] font-mono text-neutral-700 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Connect Row */}
            <div className="w-full pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Behance"
                  className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── MASSIVE METALLIC TITANIC WORDMARK: "PHOTOGRAPHER" (z-20: IN FRONT OF THE HOODIE IMAGE) ─── */}
      <div className="w-full relative z-20 flex items-center justify-center overflow-hidden lg:-mt-24 xl:-mt-32 2xl:-mt-40 select-none pointer-events-none">
        <h2 className="text-[12.5vw] sm:text-[11.5vw] lg:text-[10.5vw] xl:text-[145px] 2xl:text-[180px] font-black uppercase tracking-tight text-center leading-none bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-600 dark:from-white/95 dark:via-neutral-200/90 dark:to-neutral-500/25 bg-clip-text text-transparent drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)] opacity-95 transition-all duration-500">
          PHOTOGRAPHER
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
