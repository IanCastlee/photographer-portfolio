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
    <section id="home" className="relative min-h-screen lg:h-screen lg:max-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-6 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-neutral-500/5 dark:bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-[11px] font-mono mb-3 lg:mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-neutral-700 dark:text-neutral-300">{profile.availability}</span>
            </div>

            <SectionEyebrow className="mb-2 lg:mb-2 text-[11px]">
              Visual Storyteller • Based in {profile.location}
            </SectionEyebrow>

            <h1 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-3 lg:mb-4">
              Hello, I'm <span className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-8">{profile.name}</span>, a professional photographer.
            </h1>

            <p className="text-sm sm:text-base lg:text-sm xl:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-5 lg:mb-6 font-light">
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
            <div className="flex items-center gap-4 pt-3.5 border-t border-neutral-200 dark:border-neutral-800/80 w-full max-w-xl">
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

          {/* Right Featured Visual Collage (Matches the photographer photo + camera collage from screenshot) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-[400px] xl:max-w-[440px]">
              {/* Primary portrait shot constrained to viewport */}
              <div
                onClick={() => featuredProjects[0] && openLightbox(featuredProjects[0])}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[55vh] sm:max-h-[60vh] lg:max-h-[62vh] xl:max-h-[66vh] w-full bg-neutral-900 border border-neutral-300 dark:border-white/10 shadow-2xl cursor-pointer"
              >
                <img
                  src={profile.cameraHolding}
                  alt={profile.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:contrast-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-300">
                      Signature Series
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold">The Monochrome Narrative</h2>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Leica M11-P • 50mm f/0.95</p>
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
              <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 bg-white dark:bg-[#141416] text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/10 px-3.5 py-2.5 rounded-xl shadow-xl hidden sm:block">
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
