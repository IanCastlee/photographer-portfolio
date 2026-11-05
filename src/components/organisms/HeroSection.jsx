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
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-4 sm:pt-28 sm:pb-6 overflow-hidden bg-[#f6f7f9] dark:bg-[#070709] transition-colors duration-500"
    >
      {/* ─── ATMOSPHERIC BACKGROUND SPOTLIGHT (Matches Reference Radial Glow) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center blue/cyan radial glow behind hoodie character */}
        <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] sm:h-[620px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.28),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.46),transparent_70%)] blur-2xl" />
        {/* Subtle secondary ambient rim */}
        <div className="absolute top-1/4 right-[15%] w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        {/* Deep dark vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f7f9] dark:to-[#070709] opacity-80" />
      </div>

      {/* ─── MAIN STAGE CONTAINER (3-COLUMN SPLIT: LEFT TEXT | CENTER HOODIE | RIGHT BADGE & SOCIALS) ─── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ─── LEFT COLUMN: GREETING & PILL CTA (Elevated higher on desktop) ─── */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-30 order-1 lg:-translate-y-10 xl:-translate-y-16 2xl:-translate-y-20 transition-transform duration-300">
            <SectionEyebrow className="mb-3 text-[11px] text-blue-600 dark:text-blue-400">
              Visual Storyteller • {profile.location}
            </SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-5">
              Hello I'm <span className="underline decoration-blue-500 underline-offset-4 decoration-2">{profile.name}</span>, a professional photographer
            </h1>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6 max-w-sm hidden sm:block lg:hidden">
              {profile.tagline}
            </p>

            {/* Vibrant Pill Action Buttons (Matches reference "Download CV" pill) */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#works')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
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

          {/* ─── CENTER COLUMN: ENLARGED CUTOUT HOODIE PHOTOGRAPHER (LAYERED IN BACKGROUND BEHIND TEXT) ─── */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative z-10 order-2 sm:order-2 my-2 lg:my-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[540px] mx-auto group flex items-center justify-center">
              
              {/* Backlight Aura matching the cyan rim lighting on the hoodie */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/25 dark:bg-blue-500/35 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/45 transition-all duration-700" />

              {/* Enlarged Seamless Cutout Figure */}
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={hoodiePhotographerImg}
                  alt="Photographer in black hoodie holding camera"
                  className="w-auto h-auto max-h-[56vh] sm:max-h-[62vh] lg:max-h-[68vh] xl:max-h-[74vh] 2xl:max-h-[78vh] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] filter contrast-105 transition-transform duration-700 group-hover:scale-[1.03] select-none"
                />
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: 12+ YEARS BADGE & SOCIALS (Elevated on desktop) ─── */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-6 z-30 order-3 lg:-translate-y-8 xl:-translate-y-12 2xl:-translate-y-16 transition-transform duration-300">
            
            {/* 12+ Years Behind Lens Card (Transferred to right side as requested) */}
            <div className="inline-flex items-center gap-3.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-white/80 dark:bg-[#121318]/90 backdrop-blur-md border border-neutral-200/80 dark:border-white/10 shadow-xl mb-6 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base shadow-inner">
                ★
              </div>
              <div>
                <span className="block text-base sm:text-lg font-black tracking-tight text-neutral-900 dark:text-white leading-none">
                  12+ Years
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono mt-1 block">
                  Behind the Lens
                </span>
              </div>
            </div>

            {/* Find me on: Socials List */}
            <div className="w-full pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                Find me on:
              </span>
              <div className="flex items-center gap-2.5">
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

            {/* Interactive Feature Pill */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                Discipline:
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#121318] border border-neutral-300 dark:border-white/10 shadow-sm text-xs font-mono text-neutral-800 dark:text-neutral-200">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Cinematic Visuals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MASSIVE METALLIC TITANIC WORDMARK: "PHOTOGRAPHER" (IN FRONT OF IMAGE FOR MAXIMUM VISIBILITY) ─── */}
      <div className="w-full relative z-20 flex items-center justify-center overflow-hidden -mt-10 sm:-mt-14 lg:-mt-20 xl:-mt-28 2xl:-mt-32 select-none pointer-events-none">
        <h2 className="text-[12.5vw] sm:text-[11.5vw] lg:text-[10.5vw] xl:text-[150px] 2xl:text-[180px] font-black uppercase tracking-tight text-center leading-none bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-500/40 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] opacity-95 transition-all duration-500">
          PHOTOGRAPHER
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
