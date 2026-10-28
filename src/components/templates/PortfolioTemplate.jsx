import React, { useState } from 'react';
import { Navbar } from '../organisms/Navbar';
import { HeroSection } from '../organisms/HeroSection';
import { PortfolioSection } from '../organisms/PortfolioSection';
import { ServicesSection } from '../organisms/ServicesSection';
import { AboutSection } from '../organisms/AboutSection';
import { TestimonialsSection } from '../organisms/TestimonialsSection';
import { ContactSection } from '../organisms/ContactSection';
import { Footer } from '../organisms/Footer';
import { LightboxModal } from '../organisms/LightboxModal';

export const PortfolioTemplate = ({ data }) => {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0b0b0c] text-neutral-900 dark:text-[#f4f4f5] transition-colors duration-300">
      {/* Navigation */}
      <Navbar brandName={data.profile.brandName} />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          profile={data.profile}
          featuredProjects={data.projects.filter((p) => p.featured)}
          featuredSeries={data.featuredSeries || []}
        />

        <PortfolioSection
          projects={data.projects}
          categories={data.categories}
          featuredSeries={data.featuredSeries || []}
        />

        <ServicesSection
          services={data.services}
          onSelectService={handleSelectService}
        />

        <AboutSection
          profile={data.profile}
          stats={data.stats}
          gear={data.gear}
        />

        <TestimonialsSection
          testimonials={data.testimonials}
        />

        <ContactSection
          profile={data.profile}
          selectedService={selectedServiceForBooking}
        />
      </main>

      {/* Footer */}
      <Footer profile={data.profile} />

      {/* Interactive Lightbox Viewer */}
      <LightboxModal />
    </div>
  );
};

export default PortfolioTemplate;
