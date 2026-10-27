import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../molecules/ThemeToggle';
import { Button } from '../atoms/Button';

export const Navbar = ({ brandName = "PHOTOGRAPHER X" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gear", href: "#gear" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0b0b0c]/85 backdrop-blur-md border-b border-neutral-200 dark:border-white/5 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-neutral-900 dark:text-white font-bold tracking-tighter text-lg uppercase group"
        >
          <div className="w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black flex items-center justify-center transition-transform group-hover:scale-110">
            <Camera className="w-4 h-4" />
          </div>
          <span className="tracking-widest font-mono text-sm">{brandName}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs uppercase tracking-widest font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
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
            className="p-2 rounded-lg text-neutral-800 dark:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-[#0b0b0c]/98 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm uppercase tracking-wider font-mono text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <Button
              variant="primary"
              size="md"
              className="w-full"
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
