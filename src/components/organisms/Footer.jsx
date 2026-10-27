import React from 'react';
import { Camera, ArrowUp, Instagram, Twitter, Globe } from 'lucide-react';

export const Footer = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-100 dark:bg-[#080809] text-neutral-800 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 font-bold tracking-wider text-neutral-900 dark:text-white uppercase font-mono text-base">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center">
                <Camera className="w-4 h-4" />
              </div>
              <span>{profile.brandName}</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-sm">
              Capturing light, shadow, and untold narratives with uncompromising visual discipline. Available worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2 text-neutral-600 dark:text-neutral-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center hover:text-black dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center hover:text-black dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center hover:text-black dark:hover:text-white transition-colors"
                aria-label="Behance"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-900 dark:text-white">
              Navigation
            </h5>
            <ul className="space-y-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <li><a href="#works" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Services & Rates</a></li>
              <li><a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About & Bio</a></li>
              <li><a href="#gear" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Camera Equipment</a></li>
              <li><a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Book Shoot</a></li>
            </ul>
          </div>

          {/* Studio Location */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-neutral-900 dark:text-white">
              Studio Locations
            </h5>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              <strong className="text-neutral-900 dark:text-white block font-medium">New York City:</strong>
              740 Broadway, 9th Floor, Soho, NY 10003
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              <strong className="text-neutral-900 dark:text-white block font-medium">Los Angeles:</strong>
              820 S Santa Fe Ave, Arts District, LA 90021
            </p>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          <p>© {new Date().getFullYear()} {profile.brandName}. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
