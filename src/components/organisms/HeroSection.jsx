import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Linkedin, Camera, Aperture, Sparkles } from 'lucide-react';
import { SectionEyebrow } from '../atoms/Typography';
import { useLightbox } from '../../context/LightboxContext';
import hoodiePhotographerImg from '../../assets/hoodie-photographer.jpg';

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
      {/* ─── ATMOSPHERIC BACKGROUND SPOTLIGHT (Matches Reference Radial Glow) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center blue/cyan radial glow behind hoodie character */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] sm:h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.38),transparent_70%)] blur-2xl" />
        {/* Subtle secondary ambient rim */}
        <div className="absolute top-1/4 right-[15%] w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        {/* Deep dark vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f7f9] dark:to-[#070709] opacity-80" />
      </div>

      {/* ─── MAIN STAGE CONTAINER (3-COLUMN SPLIT: LEFT TEXT | CENTER HOODIE | RIGHT BIO) ─── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ─── LEFT COLUMN: GREETING & PILL CTA ─── */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-20 order-1">
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 dark:border-white/15 bg-white/70 dark:bg-white/[0.04] backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/40 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 active:scale-95 shadow-sm"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* ─── CENTER COLUMN: BADASS BLACK HOODIE PHOTOGRAPHER (HEAD DOWN / NAKA-YOKO) ─── */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative z-20 order-2 sm:order-2 my-2 lg:my-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[370px] xl:max-w-[420px] mx-auto group">
              
              {/* Backlight Aura around the hood */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/25 dark:bg-blue-400/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/35 transition-all duration-700" />

              {/* Character Image Wrapper with seamless bottom vignette fade */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-neutral-300/60 dark:border-white/10 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
                <img
                  src={hoodiePhotographerImg}
                  alt="Photographer in black hoodie looking down"
                  className="w-full h-auto max-h-[50vh] sm:max-h-[55vh] lg:max-h-[58vh] xl:max-h-[62vh] object-cover object-top filter contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Micro Badge on image */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>STEALTH OPERATOR</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-300">
                      LEICA M11-P NOCTILUX
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">RAW • DNG</span>
                </div>
              </div>

              {/* Floating Badge (12+ Years Behind Lens - matching reference side badge) */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white dark:bg-[#121318] text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 px-3.5 py-2 rounded-2xl shadow-xl hidden sm:flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                  ★
                </div>
                <div>
                  <span className="block text-xs font-bold leading-none">12+ Years</span>
                  <span className="text-[9px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">Behind Lens</span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: ABOUT BIO & SOCIALS (Matches Reference Right Column) ─── */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-6 z-20 order-3">
            {/* About us / me title */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold">
                About me
              </h2>
            </div>

            {/* Paragraph Bio */}
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light mb-6">
              {profile.bio}
            </p>

            {/* Find me on: Socials List (Round icon buttons matching reference) */}
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

            {/* Interactive Feature Pill (Matching reference: "What is [toggle pill] UI/UX Design") */}
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

      {/* ─── MASSIVE METALLIC TITANIC WORDMARK: "PHOTOGRAPHER" (Matching "DESIGNER" in reference) ─── */}
      <div className="w-full relative z-10 flex items-center justify-center overflow-hidden pt-4 select-none pointer-events-none">
        <h2 className="text-[12vw] sm:text-[11vw] lg:text-[10vw] xl:text-[135px] 2xl:text-[165px] font-black uppercase tracking-tight text-center leading-none bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-600 dark:from-white/95 dark:via-neutral-300/80 dark:to-neutral-700/25 bg-clip-text text-transparent drop-shadow-sm opacity-90 transition-all duration-500">
          PHOTOGRAPHER
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
