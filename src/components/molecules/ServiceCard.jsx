import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const ServiceCard = ({ service, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="group relative p-7 rounded-2xl bg-neutral-100/80 dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Number badge */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-mono tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-200">
            {service.number}
          </span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-200/50 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
            <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>

        {/* Title & Desc */}
        <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 font-light">
          {service.description}
        </p>
      </div>

      {/* Deliverables tags */}
      <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800/80">
        <div className="space-y-1.5">
          {service.deliverables?.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <Check className="w-3 h-3 text-neutral-700 dark:text-neutral-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
