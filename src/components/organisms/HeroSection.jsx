import React from 'react';
import { ArrowUpRight, Instagram, Twitter, Globe, Camera } from 'lucide-react';
import { Button } from '../atoms/Button';
import { SectionEyebrow } from '../atoms/Typography';
import { ViewfinderOverlay } from '../atoms/ViewfinderOverlay';
import { CoverFlowCarousel } from '../molecules/CoverFlowCarousel';
import { useLightbox } from '../../context/LightboxContext';

export const HeroSection = ({
  profile,
  featuredProjects = [],
  featuredSeries = [],
}) => {
  const { openLightbox } = useLightbox();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showcaseItems = featuredSeries.length > 0 ? featuredSeries : featuredProjects;

  return (
    <section id="home" className="relative min-h-screen lg:h-screen lg:max-h-screen flex items-center pt-24 pb-12 lg:pt-20 lg:pb-6 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-neutral-500/5 dark:bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Viewfinder Wireframe Squares & Cut-Square System */}
      <ViewfinderOverlay />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
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

          {/* Right Featured Visual Showcase — Interactive 3D Cover Flow Carousel */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full z-10">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
              <CoverFlowCarousel
                items={showcaseItems}
                showControls={true}
                autoPlay={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
