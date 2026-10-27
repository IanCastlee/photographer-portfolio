import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-8 rounded-2xl bg-neutral-100/90 dark:bg-[#141416] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-6 right-6 text-neutral-300 dark:text-neutral-800/60 pointer-events-none group-hover:text-neutral-400 dark:group-hover:text-neutral-700 transition-colors">
        <Quote className="w-12 h-12 stroke-[1]" />
      </div>

      <p className="text-base sm:text-lg font-editorial italic text-neutral-800 dark:text-neutral-200 leading-relaxed mb-6 z-10">
        "{testimonial.quote}"
      </p>

      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/60 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
            {testimonial.author}
          </h4>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
