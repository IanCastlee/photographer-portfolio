import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Linkedin } from 'lucide-react';
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
      className="relative min-h-screen flex flex-col justify-between pt-20 pb-0 sm:pt-24 overflow-hidden bg-[#f6f7f9] dark:bg-[#070709] transition-colors duration-500"
    >
      {/* ─── ATMOSPHERIC BACKGROUND SPOTLIGHT ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center blue/cyan radial glow behind hoodie character */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[950px] h-[450px] sm:h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.28),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.48),transparent_70%)] blur-2xl" />
        {/* Secondary subtle rim lights */}
        <div className="absolute top-1/4 right-[12%] w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-[10%] w-72 h-72 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        {/* Deep dark vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f7f9] dark:to-[#070709] opacity-80" />
      </div>

      {/* ─── CENTER HOODIE FIGURE ANCHORED FLUSH TO VERY BOTTOM (SAGAD SA BOTTOM) ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-end justify-center pointer-events-none w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[500px] xl:max-w-[580px] 2xl:max-w-[640px]">
        {/* Backlight Aura matching the cyan rim lighting on the hoodie */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/25 dark:bg-blue-500/35 rounded-full blur-3xl pointer-events-none" />

        <img
          src={hoodiePhotographerImg}
          alt="Photographer in black hoodie holding camera"
          className="w-auto h-auto max-h-[62vh] sm:max-h-[70vh] lg:max-h-[80vh] xl:max-h-[85vh] 2xl:max-h-[88vh] object-contain object-bottom select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] filter contrast-105"
        />
      </div>

      {/* ─── MAIN STAGE CONTAINER (TOP-ALIGNED DUAL SIDES: TOP-LEFT GREETING | TOP-RIGHT STATS) ─── */}
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 w-full relative z-30 pt-2 sm:pt-4 lg:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* ─── LEFT COLUMN: TOP-LEFT GREETING & PILL CTA (Placed high at top-left, not in middle) ─── */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-30 order-1">
            <SectionEyebrow className="mb-2 text-[11px] text-blue-600 dark:text-blue-400 font-semibold tracking-widest">
              Visual Storyteller • {profile.location}
            </SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.06] mb-5">
              Hello I'm <span className="underline decoration-blue-500 underline-offset-4 decoration-2">{profile.name}</span>, a professional photographer
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 max-w-sm hidden sm:block lg:hidden">
              {profile.tagline}
            </p>

            {/* Vibrant Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#works')}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 dark:border-white/15 bg-white/70 dark:bg-white/[0.04] backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:border-white/40 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 active:scale-95 shadow-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* ─── MIDDLE SPACER COLUMN (Unobstructed stage for the hoodie) ─── */}
          <div className="hidden lg:block lg:col-span-4 min-h-[100px] pointer-events-none" />

          {/* ─── RIGHT COLUMN: TOP-RIGHT STATS & SOCIALS ─── */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end z-30 order-2 lg:order-3">
            
            {/* Top Eyebrow to balance the left side */}
            <SectionEyebrow className="mb-2 text-[11px] text-blue-600 dark:text-blue-400 font-semibold tracking-widest lg:text-right">
              Studio & Creative Direction
            </SectionEyebrow>

            {/* 12+ Years & Studio Experience Card (Visually balances the left headline) */}
            <div className="w-full max-w-sm p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#121318] border border-neutral-200 dark:border-white/10 shadow-xl backdrop-blur-md mb-4 text-left transition-all duration-300 hover:border-blue-500/40">
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg shrink-0 shadow-inner">
                  ★
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black tracking-tight text-neutral-900 dark:text-white leading-none">
                    12+ Years
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono mt-1 block">
                    Behind the Lens
                  </span>
                </div>
              </div>

              {/* Studio Key Stats Sub-grid */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-200/80 dark:border-white/10">
                <div>
                  <span className="block text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-mono leading-tight">
                    50+
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
                    Global Campaigns
                  </span>
                </div>
                <div>
                  <span className="block text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-mono leading-tight">
                    100MP
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
                    Medium Format
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Social Links & Discipline Pill (Balances left action buttons) */}
            <div className="w-full max-w-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-neutral-200 dark:border-neutral-800/80">
              {/* Discipline Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#121318] border border-neutral-200 dark:border-white/10 shadow-sm text-xs font-mono text-neutral-800 dark:text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px]">Cinematic Visuals</span>
              </div>

              {/* Social Icon Pills */}
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

      {/* ─── MASSIVE METALLIC TITANIC WORDMARK: "PHOTOGRAPHER" (ANCHORED DIRECTLY OVER BOTTOM OF IMAGE) ─── */}
      <div className="w-full relative z-20 flex items-center justify-center overflow-hidden pb-0 select-none pointer-events-none">
        <h2 className="text-[12.5vw] sm:text-[11.5vw] lg:text-[10.5vw] xl:text-[150px] 2xl:text-[180px] font-black uppercase tracking-tight text-center leading-none bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-600 dark:from-white dark:via-neutral-200 dark:to-neutral-500/30 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] opacity-95 transition-all duration-500">
          PHOTOGRAPHER
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
