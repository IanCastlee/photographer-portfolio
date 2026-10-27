import React from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';
import { TestimonialCard } from '../molecules/TestimonialCard';

export const TestimonialsSection = ({ testimonials = [] }) => {
  return (
    <section className="py-24 sm:py-32 bg-neutral-50/50 dark:bg-[#0e0e10]/60 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-9">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow className="justify-center">Press & Endorsements</SectionEyebrow>
          <Heading level={2}>What Creative Directors Say</Heading>
          <Paragraph size="md" muted className="mt-3">
            Honored to partner with forward-thinking editors, directors, and independent brands.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
