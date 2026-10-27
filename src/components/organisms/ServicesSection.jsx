import React from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';
import { ServiceCard } from '../molecules/ServiceCard';
import { Button } from '../atoms/Button';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection = ({ services = [], onSelectService }) => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-neutral-50/50 dark:bg-[#0e0e10]/60 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionEyebrow>Capabilities & Packages</SectionEyebrow>
            <Heading level={2}>
              Our Services —
            </Heading>
            <Paragraph size="md" muted className="mt-3 max-w-xl">
              From creative direction to final master post-production, we engineer tailored visual solutions designed to leave a lasting impact.
            </Paragraph>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={handleScrollToContact}
              icon={ArrowUpRight}
            >
              Request Rate Card
            </Button>
          </div>
        </div>

        {/* 4-column Services Grid (as in Webflow preview) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => onSelectService && onSelectService(service.title)}
            />
          ))}
        </div>

        {/* Production Guarantee Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-neutral-200/50 dark:bg-[#141416] border border-neutral-300/60 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                Worldwide On-Location & Studio Productions
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                Full-service team available: digital tech, gaffer, hair & makeup, stylist, and studio rental management.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleScrollToContact}
          >
            Inquire Production
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
