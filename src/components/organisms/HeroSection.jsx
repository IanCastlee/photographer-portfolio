import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Linkedin, Camera, Sparkles } from 'lucide-react';
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
      className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between pt-20 pb-4 lg:pt-20 lg:pb-5 overflow-hidden bg-[#f6f7f9] dark:bg-[#070709] transition-colors duration-500"
    >
      {/* ─── ATMOSPHERIC BACKGROUND SPOTLIGHT ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Electric blue radial glow directly highlighting the hoodie silhouette */}
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] lg:w-[850px] h-[400px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.38),transparent_65%)] blur-2xl" />
        
        {/* Soft secondary cyan halo matching image rim lighting */}
        <div className="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-cyan-400/15 dark:bg-cyan-500/12 rounded-full blur-3xl" />
        
        {/* Subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f7f9]/90 dark:to-[#070709]/95 pointer-events-none" />
      </div>

      {/* ─── MAIN OVERLAY STAGE (FITS IN VIEWPORT ON DESKTOP & FLUID ON MOBILE) ─── */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 w-full relative z-20 my-auto flex-1 flex items-center">
        
        {/* DESKTOP 3-COLUMN OVERLAY STAGE (lg:grid) */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-center w-full relative min-h-[440px] xl:min-h-[480px]">
          
          {/* 1. LARGE CENTER HOODIE FIGURE (LAYERED DIRECTLY IN THE STAGE) */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10">
            <div className="relative w-[380px] lg:w-[420px] xl:w-[470px] 2xl:w-[500px] flex items-end justify-center h-full">
              
              {/* Backlight flare behind the hood */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 xl:w-56 xl:h-56 bg-blue-500/25 dark:bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

              <img
                src={hoodieCutoutImg}
                alt="Photographer in black hoodie holding camera with face in shadow"
                className="relative z-10 w-full h-auto max-h-[50vh] xl:max-h-[55vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter contrast-105"
              />

              {/* Floating Camera Gear Pill Badge */}
              <div className="absolute top-[22%] right-[-15px] bg-white/90 dark:bg-[#121318]/90 text-neutral-900 dark:text-white backdrop-blur-md border border-neutral-200 dark:border-white/10 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 pointer-events-auto">
                <div className="w-6 h-6 rounded-md bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                  <Camera className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold leading-none">Leica M11-P</span>
                  <span className="text-[8px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">Noctilux 50mm</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. LEFT OVERLAID COLUMN: GREETING & PILL BUTTONS */}
          <div className="col-span-5 xl:col-span-4 flex flex-col items-start text-left z-20 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-mono uppercase tracking-wider mb-2.5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Visual Storyteller • {profile.location}</span>
            </div>

            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-4 drop-shadow-sm">
              Hello I'm <span className="underline decoration-blue-500 underline-offset-4 decoration-2">{profile.name}</span>, a professional photographer
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#works')}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.05] backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:border-white/30 font-medium text-xs tracking-wide transition-all duration-300 active:scale-95 shadow-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* SPACER FOR CENTER FIGURE */}
          <div className="col-span-2 xl:col-span-4 h-1 pointer-events-none" />

          {/* 3. RIGHT OVERLAID COLUMN: ABOUT BIO & SOCIAL LINKS */}
          <div className="col-span-5 xl:col-span-4 flex flex-col items-end text-right z-20 pointer-events-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <h2 className="text-[11px] uppercase font-mono tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">
                About me
              </h2>
            </div>

            <p className="text-xs xl:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-4 max-w-sm drop-shadow-sm">
              {profile.bio}
            </p>

            {/* Social Handles */}
            <div className="w-full max-w-sm pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-col items-end">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                Find me on:
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

            {/* Status Feature Pill */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                Focus:
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-[#121318] border border-neutral-300 dark:border-white/10 shadow-sm text-[11px] font-mono text-neutral-800 dark:text-neutral-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Cinematic & Editorial</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET CLEAN STACK (< lg) */}
        <div className="lg:hidden flex flex-col items-center text-center w-full py-4 space-y-5">
          {/* Eyebrow & Headline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-mono uppercase tracking-wider mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Visual Storyteller • {profile.location}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-tight">
              Hello I'm <span className="underline decoration-blue-500 underline-offset-4 decoration-2">{profile.name}</span>, a professional photographer
            </h1>
          </div>

          {/* Large Centered Hoodie Figure */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] mx-auto">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/25 rounded-full blur-2xl pointer-events-none" />
            <img
              src={hoodieCutoutImg}
              alt="Photographer in black hoodie holding camera with face in shadow"
              className="relative z-10 w-full h-auto max-h-[38vh] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={(e) => handleScrollTo(e, '#works')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-600/30"
            >
              <span>Explore Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 text-xs font-medium"
            >
              Get in Touch
            </button>
          </div>

          {/* Short Bio & Socials */}
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light max-w-md px-2">
            {profile.bio}
          </p>

          <div className="flex items-center gap-2.5 pt-1">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
              <Globe className="w-3.5 h-3.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ─── "PHOTOGRAPHER" RECTANGLE (100% IN VIEWPORT ON DESKTOP & BALANCED ON MOBILE) ─── */}
      <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 relative z-30 mb-2 lg:mb-3">
        <div className="relative w-full rounded-xl sm:rounded-2xl border border-neutral-300/80 dark:border-white/10 bg-white/70 dark:bg-[#111218]/80 backdrop-blur-xl py-2 sm:py-2.5 lg:py-2.5 px-4 sm:px-8 overflow-hidden shadow-xl transition-all duration-500 hover:border-neutral-400 dark:hover:border-white/20">
          
          {/* Subtle Corner Registration Brackets */}
          <div className="absolute top-2 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />
          <div className="absolute top-2 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />
          <div className="absolute bottom-2 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />
          <div className="absolute bottom-2 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-neutral-400/40 dark:border-white/20 pointer-events-none" />

          {/* Sub Header Metadata Line inside Rectangle */}
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-0.5 pointer-events-none select-none">
            <span>PORTFOLIO ARCHIVE // 2026</span>
            <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
              <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
              MEDIUM FORMAT 100MP
            </span>
          </div>

          {/* Bold Titanic Typography Perfectly Scaled to Stay in View */}
          <h2 className="text-[6.5vw] sm:text-[6.8vw] lg:text-[5.5vw] xl:text-[68px] 2xl:text-[76px] font-black uppercase tracking-wider text-center leading-none bg-gradient-to-b from-neutral-800 via-neutral-900 to-black dark:from-white dark:via-neutral-200 dark:to-neutral-500 bg-clip-text text-transparent select-none drop-shadow-md">
            PHOTOGRAPHER
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
