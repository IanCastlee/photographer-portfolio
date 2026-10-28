import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe } from 'lucide-react';
import { Button } from '../atoms/Button';
import { SectionEyebrow } from '../atoms/Typography';
import { ViewfinderOverlay } from '../atoms/ViewfinderOverlay';
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

      {/* Clean Minimal Viewfinder Overlay (Distracting telemetry & cut-squares removed) */}
      <ViewfinderOverlay />

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

          {/* Right Featured Visual — Cinematic Editorial Master Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-[440px] xl:max-w-[470px]">
              {/* Multi-tone Ambient Backlight Aura */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/15 via-white/[0.04] to-amber-500/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Precision Master Chassis with Beveled Double-Border */}
              <div
                onClick={() => featuredProjects[0] && openLightbox(featuredProjects[0])}
                className="group relative rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-neutral-800/90 via-neutral-900/95 to-black/95 dark:from-neutral-900/90 dark:via-[#111113]/95 dark:to-black/95 border border-neutral-300 dark:border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.7),0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-2xl cursor-pointer transition-transform duration-500 hover:-translate-y-1"
              >
                {/* Inner Card Frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[56vh] sm:max-h-[60vh] lg:max-h-[64vh] w-full bg-neutral-950">
                  {/* Optical Lens Glass Sheen Sweep Effect on Hover */}
                  <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                    <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                  </div>

                  {/* Corner Precision Optical L-Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/40 group-hover:border-white group-hover:scale-110 transition-all z-20 pointer-events-none" />

                  {/* Top Live Sensor Pill Badge */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20 pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider text-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>MASTER ARCHIVE // NOCTILUX 50MM</span>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Center Target Focus Crosshair on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                    <div className="relative w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-[2px] bg-black/40 shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                      <span className="text-white text-base font-mono leading-none">⌖</span>
                      <span className="absolute -bottom-7 text-[9px] font-mono tracking-widest uppercase text-white/90 bg-black/80 px-2.5 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                        EXPAND VIEW
                      </span>
                    </div>
                  </div>

                  {/* High-Impact Master Image */}
                  <img
                    src={profile.cameraHolding}
                    alt={profile.name}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:contrast-115 group-hover:brightness-105"
                  />

                  {/* Vignette Shadow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 z-10" />

                  {/* Bottom Integrated Editorial Glass Card (Clean & uncluttered) */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white z-20">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-300 font-semibold">
                        Signature Series • Master File
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                      The Monochrome Narrative
                    </h2>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 mt-1">
                      <span>Leica M11-P</span>
                      <span>•</span>
                      <span>50mm f/0.95 ASPH</span>
                      <span>•</span>
                      <span className="text-amber-400/90">60.3 MP</span>
                    </div>
                  </div>
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
