import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../molecules/ThemeToggle';
import { Button } from '../atoms/Button';

export const Navbar = ({ brandName = "PHOTOGRAPHER X" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gear", href: "#gear" },
    { label: "Contact", href: "#contact" },
  ];

  // Robust scroll spy: updates activeSection as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['#home', '#works', '#services', '#about', '#gear', '#contact'];
      const scrollPosition = window.scrollY + 180; // Offset for fixed navbar

      // Check if user has scrolled near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('#contact');
        return;
      }

      // Find the current section in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.querySelector(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-white dark:bg-[#0b0b0c] border-b border-neutral-200 dark:border-neutral-800 py-3.5 shadow-xl'
          : isScrolled
          ? 'bg-white/90 dark:bg-[#0b0b0c]/90 backdrop-blur-md border-b border-neutral-200 dark:border-white/5 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-bold tracking-tighter text-lg uppercase group"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center transition-transform group-hover:scale-110">
            <Camera className="w-4 h-4" />
          </div>
          <span className="tracking-widest font-mono text-sm">{brandName}</span>
        </a>

        {/* Desktop Nav Links with Animated Active Bottom Line Indicator */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative py-1 text-xs uppercase tracking-widest font-mono transition-all duration-300 group ${
                  isActive
                    ? 'text-neutral-900 dark:text-white font-bold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white font-medium'
                }`}
              >
                <span>{link.label}</span>

                {/* Animated Bottom Line Indicator with Glow */}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
                    isActive
                      ? 'bg-neutral-900 dark:bg-white scale-x-100 opacity-100 shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:shadow-[0_0_8px_rgba(255,255,255,0.7)]'
                      : 'bg-neutral-400 dark:bg-neutral-600 scale-x-0 opacity-0 group-hover:scale-x-60 group-hover:opacity-50'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Booking CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => handleScrollTo(e, '#contact')}
            icon={ArrowUpRight}
          >
            Contact
          </Button>
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-800 dark:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-[#0b0b0c] border-t border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-5 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm uppercase tracking-wider font-mono transition-colors ${
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-black" />}
                </a>
              );
            })}
          </div>
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={(e) => handleScrollTo(e, '#contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
