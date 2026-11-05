import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Linkedin, Camera } from 'lucide-react';
import { SectionEyebrow } from '../atoms/Typography';
import { useLightbox } from '../../context/LightboxContext';
import hoodieCutoutImg from '../../assets/hoodie-cutout.jpg';

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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden bg-[#f4f5f8] dark:bg-[#070709] transition-colors duration-500"
    >
      {/* ─── 1. THE MAIN FRAMED RECTANGLE STAGE ─── */}
      <div className="relative w-full max-w-[1440px] rounded-3xl lg:rounded-[40px] bg-[#0c0d14] text-white border border-neutral-300/30 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden min-h-[660px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[800px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 xl:p-16">
        
        {/* Ambient Backlight Glow inside the Rectangle */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Central Blue Spotlight behind hoodie head */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] lg:w-[900px] h-[450px] sm:h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.32),transparent_70%)] blur-3xl" />
          {/* Subtle cyan accent glow */}
          <div className="absolute top-[25%] right-[20%] w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl" />
          {/* Soft corner vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-[#0c0d14]/60 pointer-events-none" />
        </div>

        {/* ─── 2. LAYER Z-[1]: TITANIC WORDMARK "PHOTOGRAPHER" INSIDE RECTANGLE ─── */}
        {/* Adjusted with safe bottom clearance so it NEVER touches the bottom edge */}
        <div className="absolute inset-x-0 bottom-12 sm:bottom-16 lg:bottom-20 flex items-center justify-center pointer-events-none select-none z-[1]">
          <h2 className="text-[12vw] sm:text-[11vw] lg:text-[10vw] xl:text-[132px] 2xl:text-[156px] font-black uppercase tracking-tight text-center leading-none bg-gradient-to-b from-white/95 via-neutral-300/80 to-neutral-600/30 bg-clip-text text-transparent drop-shadow-lg opacity-90 transition-all duration-500">
            PHOTOGRAPHER
          </h2>
        </div>

        {/* ─── 3. LAYER Z-[2]: HUGE HOODIE CHARACTER (NO BACKGROUND, NO BOX, SCALED UP) ─── */}
        {/* Positioned directly in center, behind the text columns (z-index lower than z-10) */}
        <div className="absolute inset-x-0 bottom-0 top-4 sm:top-8 flex items-end justify-center pointer-events-none z-[2] overflow-hidden select-none">
          <div className="relative h-full w-full flex items-end justify-center">
            {/* Soft head halo glow */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

            <img
              src={hoodieCutoutImg}
              alt="Photographer in black hoodie looking down"
              className="h-[88%] sm:h-[94%] lg:h-[98%] max-h-[760px] w-auto max-w-[90vw] sm:max-w-none object-contain object-bottom filter contrast-110 brightness-105 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            />
          </div>
        </div>

        {/* ─── 4. LAYER Z-10: FOREGROUND CONTENT (LEFT GREETING & RIGHT BIO/SOCIALS) ─── */}
        {/* Floating clearly in front of the hoodie character so text is 100% readable and clickable */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto w-full">
          
          {/* Left Column: Greeting, Role & Pill Buttons */}
          <div className="lg:col-span-5 flex flex-col items-start text-left max-w-md sm:max-w-lg z-20">
            <SectionEyebrow className="mb-3 text-[11px] text-blue-400">
              Visual Storyteller • {profile.location}
            </SectionEyebrow>

            <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-tight text-white leading-[1.08] mb-5">
              Hello I'm <span className="underline decoration-blue-500 underline-offset-4 decoration-2">{profile.name}</span>, a professional photographer
            </h1>

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6 max-w-sm hidden sm:block lg:hidden">
              {profile.tagline}
            </p>

            {/* Pill Action Buttons (Matches reference "Download CV" pill) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#works')}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-600/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Explore Works</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-neutral-200 hover:text-white hover:border-white/40 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 active:scale-95"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Center Column Spacer (Allows huge hoodie silhouette to breathe) */}
          <div className="hidden lg:block lg:col-span-2 pointer-events-none" />

          {/* Right Column: About Bio, Socials & Discipline Pill */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start text-left max-w-md sm:max-w-lg lg:ml-auto z-20">
            {/* About us / me title */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-semibold">
                About me
              </h2>
            </div>

            {/* Paragraph Bio */}
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
              {profile.bio}
            </p>

            {/* Find me on: Socials List (Round icon buttons matching reference) */}
            <div className="w-full pt-4 border-t border-white/10">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Find me on:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 text-neutral-200 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 text-neutral-200 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Behance"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 text-neutral-200 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Globe className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 text-neutral-200 hover:text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Interactive Feature Pill (Matching reference: "What is [toggle pill] UI/UX Design") */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-[11px] font-mono text-neutral-400">
                Discipline:
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-sm text-xs font-mono text-white">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Cinematic Visuals</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. BOTTOM RECTANGLE TELEMETRY / STATUS BAR ─── */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <Camera className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-widest text-neutral-300">
              MEDIUM FORMAT & 35MM PRIME
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-widest text-neutral-300">
              AVAILABLE FOR COMMISSIONS 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
