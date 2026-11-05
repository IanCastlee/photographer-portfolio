import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Linkedin, Camera, Sparkles, Sliders } from 'lucide-react';
import { SectionEyebrow } from '../atoms/Typography';
import { useLightbox } from '../../context/LightboxContext';
import hoodieCutoutImg from '../../assets/hoodie-photographer-user.png';

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
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden bg-[#f6f7f9] dark:bg-[#070709] transition-colors duration-500"
    >
      {/* ─── ATMOSPHERIC BACKGROUND SPOTLIGHT ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Electric blue radial glow directly highlighting the hoodie silhouette */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] lg:w-[900px] h-[450px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.28),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.42),transparent_65%)] blur-2xl" />
        
        {/* Soft secondary cyan halo matching image rim lighting */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-cyan-400/15 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        
        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f7f9]/90 dark:to-[#070709]/95 pointer-events-none" />
      </div>

      {/* ─── MAIN OVERLAY STAGE (LARGE IMAGE + OVERLAYING TEXTS) ─── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-20 my-auto pt-2">
        <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] flex items-center justify-center">
          
          {/* 1. MASSIVE CENTER HOODIE FIGURE (LARGE TRANSPARENT CUTOUT) */}
          <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center pointer-events-none z-10">
            <div className="relative w-[340px] sm:w-[440px] md:w-[500px] lg:w-[540px] xl:w-[600px] 2xl:w-[640px] flex items-end justify-center h-full">
              
              {/* Backlight flare behind the hood */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/30 dark:bg-blue-400/25 rounded-full blur-3xl pointer-events-none" />

              <img
                src={hoodieCutoutImg}
                alt="Photographer in black hoodie holding camera with face in shadow"
                className="relative z-10 w-full h-auto max-h-[58vh] sm:max-h-[65vh] lg:max-h-[72vh] xl:max-h-[78vh] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] filter contrast-105"
              />

              {/* Floating Camera Gear Pill Badge */}
              <div className="absolute top-[28%] -right-2 sm:right-0 bg-white/90 dark:bg-[#121318]/90 text-neutral-900 dark:text-white backdrop-blur-md border border-neutral-200 dark:border-white/10 px-3.5 py-2 rounded-2xl shadow-xl hidden sm:flex items-center gap-2.5 pointer-events-auto">
                <div className="w-7 h-7 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold leading-none">Leica M11-P</span>
                  <span className="text-[9px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">Noctilux 50mm</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. OVERLAID CONTENT GRID (LEFT HEADLINE & RIGHT BIO OVERLAYING THE STAGE) */}
          <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center pointer-events-none">
            
            {/* ─── LEFT COLUMN (OVERLAID): GREETING & PILL BUTTONS ─── */}
            <div className="lg:col-span-4 flex flex-col items-start text-left pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[11px] font-mono uppercase tracking-wider mb-3 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>Visual Storyteller • {profile.location}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-5 drop-shadow-sm">
                Hello I'm <span className="underline decoration-blue-500 underline-offset-4 decoration-2">{profile.name}</span>, a professional photographer
              </h1>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 max-w-sm hidden sm:block lg:hidden">
                {profile.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => handleScrollTo(e, '#works')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-600/35 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Explore Works</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.05] backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:border-white/30 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 active:scale-95 shadow-sm"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* SPACER FOR CENTER FIGURE */}
            <div className="hidden lg:block lg:col-span-4 h-1 pointer-events-none" />

            {/* ─── RIGHT COLUMN (OVERLAID): ABOUT BIO & SOCIAL LINKS ─── */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right pointer-events-auto">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">
                  About me
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-5 max-w-sm drop-shadow-sm">
                {profile.bio}
              </p>

              {/* Social Handles */}
              <div className="w-full max-w-sm pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-col items-start lg:items-end">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2.5">
                  Find me on:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter / X"
                    className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>

                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Behance"
                    className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  >
                    <Globe className="w-4 h-4" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900/90 dark:hover:bg-blue-600 text-neutral-700 dark:text-neutral-300 dark:hover:text-white border border-neutral-300 dark:border-neutral-800 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Status Feature Pill */}
              <div className="mt-4 flex items-center gap-2.5">
                <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  Focus:
                </span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#121318] border border-neutral-300 dark:border-white/10 shadow-sm text-xs font-mono text-neutral-800 dark:text-neutral-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Cinematic & Editorial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── "PHOTOGRAPHER" IN A STYLED RECTANGLE (ELEVATED & NOT TOUCHING THE BOTTOM) ─── */}
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 relative z-30 mb-6 sm:mb-8 lg:mb-10 mt-4">
        <div className="relative w-full rounded-2xl sm:rounded-3xl border border-neutral-300/80 dark:border-white/10 bg-white/60 dark:bg-[#111218]/70 backdrop-blur-xl py-3 sm:py-4 lg:py-5 px-6 sm:px-10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-neutral-400 dark:hover:border-white/20">
          
          {/* Subtle Corner Registration Brackets */}
          <div className="absolute top-2.5 left-3 w-3 h-3 border-t-2 border-l-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />
          <div className="absolute top-2.5 right-3 w-3 h-3 border-t-2 border-r-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />
          <div className="absolute bottom-2.5 left-3 w-3 h-3 border-b-2 border-l-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />
          <div className="absolute bottom-2.5 right-3 w-3 h-3 border-b-2 border-r-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />

          {/* Sub Header Metadata Line inside Rectangle */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-1 pointer-events-none select-none">
            <span>PORTFOLIO ARCHIVE // 2026</span>
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              MEDIUM FORMAT 100MP
            </span>
          </div>

          {/* Massive Bold Titanic Typography */}
          <h2 className="text-[7.5vw] sm:text-[7.8vw] lg:text-[7vw] xl:text-[96px] 2xl:text-[112px] font-black uppercase tracking-wider text-center leading-none bg-gradient-to-b from-neutral-800 via-neutral-900 to-black dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent select-none drop-shadow-md">
            PHOTOGRAPHER
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
