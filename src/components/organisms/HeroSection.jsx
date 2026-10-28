import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Camera } from 'lucide-react';
import { Button } from '../atoms/Button';
import { SectionEyebrow } from '../atoms/Typography';
import { useLightbox } from '../../context/LightboxContext';

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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-neutral-500/5 dark:bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <SectionEyebrow className="mb-2 lg:mb-2 text-[11px]">
              Visual Storyteller • Based in {profile.location}
            </SectionEyebrow>

            <h1 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-3 lg:mb-4">
              Hello, I'm <span className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-8">{profile.name}</span>, a professional photographer.
            </h1>

            <p className="text-sm sm:text-base lg:text-sm xl:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-5 lg:mb-6 font-light">
              {profile.tagline} {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-5 lg:mb-6">
              <Button
                variant="primary"
                size="md"
                onClick={(e) => handleScrollTo(e, '#works')}
                icon={ArrowUpRight}
              >
                Explore Works
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={(e) => handleScrollTo(e, '#contact')}
              >
                Get in Touch
              </Button>
            </div>

            {/* Social handles list */}
            <div className="flex items-center gap-4 pt-3.5 border-t border-neutral-200 dark:border-neutral-800/80 w-full max-w-2xl">
              <span className="text-[11px] uppercase font-mono tracking-widest text-neutral-500 dark:text-neutral-400">
                Follow:
              </span>
              <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Instagram</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">X / Twitter</span>
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Behance</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Featured Visual Collage (Photographer holding camera + Leica metadata) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-[440px] xl:max-w-[480px] 2xl:max-w-[520px]">
              {/* Primary portrait shot */}
              <div
                onClick={() => featuredProjects[0] && openLightbox(featuredProjects[0])}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[55vh] sm:max-h-[60vh] lg:max-h-[62vh] xl:max-h-[66vh] w-full bg-neutral-900 border border-neutral-300 dark:border-white/10 shadow-2xl cursor-pointer"
              >
                {/* Live Optical Corner Focus Brackets */}
                <div className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />
                <div className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />
                <div className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />
                <div className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />

                {/* Viewfinder Target Hover Reticle */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                  <div className="relative w-16 h-16 rounded-full border border-white/60 flex items-center justify-center backdrop-blur-[3px] bg-black/30 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <span className="text-white text-xs font-mono font-bold">⌖</span>
                    <span className="absolute -bottom-6 text-[9px] font-mono tracking-widest uppercase text-white/90 bg-black/75 px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                      EXPAND VIEW
                    </span>
                  </div>
                </div>

                <img
                  src={profile.cameraHolding}
                  alt={profile.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:contrast-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-300">
                      Signature Series • Master File
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold">The Monochrome Narrative</h2>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Leica M11-P • 50mm f/0.95 ASPH</p>
                </div>
              </div>

              {/* Floating secondary badge/preview card */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-neutral-900/95 text-white backdrop-blur-xl border border-white/10 p-3 sm:p-3.5 rounded-xl shadow-2xl max-w-[190px] sm:max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                    <Camera className="w-4 h-4 text-neutral-300" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-neutral-400">Master Kit</span>
                    <span className="text-xs font-bold text-neutral-200">Medium Format & Prime Glass</span>
                  </div>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute -top-4 right-0 sm:-top-5 sm:right-1 bg-white dark:bg-[#141416] text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/10 px-3.5 py-2.5 rounded-xl shadow-xl hidden sm:block">
                <div className="text-center">
                  <span className="block text-xl font-bold font-mono">12+</span>
                  <span className="text-[9px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">Years Behind Lens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
