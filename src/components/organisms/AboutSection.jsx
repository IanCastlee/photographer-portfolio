import React from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';
import { StatCounter } from '../molecules/StatCounter';
import { Camera, Award, Aperture, Layers } from 'lucide-react';

export const AboutSection = ({ profile, stats = [], gear = [] }) => {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-xl group">
              <img
                src={profile.portraitHero}
                alt={profile.name}
                className="w-full h-full object-cover filter grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-300 block mb-1">
                  Behind The Lens
                </span>
                <p className="text-sm font-light text-neutral-200 italic font-editorial">
                  "{profile.mission}"
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
            <SectionEyebrow>Artist Manifesto</SectionEyebrow>
            <Heading level={2} className="mb-6">
              About {profile.name}
            </Heading>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-8">
              <Paragraph size="lg">
                For over a decade, I have pursued light and shadow as architectural elements. What began as 35mm street documentation in Manhattan has evolved into an international practice serving premier luxury brands, publication covers, and contemporary art collectors.
              </Paragraph>
              <Paragraph size="md" muted>
                I believe a true photograph doesn't simply replicate reality—it isolates emotion, geometry, and atmosphere that the fleeting human eye might overlook. Every commission is approached with deliberate patience, cinematic color calibration, and profound respect for the subject.
              </Paragraph>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 mb-8">
              {stats.map((s, idx) => (
                <StatCounter key={idx} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
        </div>

        {/* Gear and Tools Section */}
        <div id="gear" className="pt-16 border-t border-neutral-200 dark:border-neutral-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <SectionEyebrow>Equipment & Precision</SectionEyebrow>
              <Heading level={3}>Selected Camera & Lighting Gear</Heading>
              <Paragraph size="sm" muted className="mt-1">
                Calibrated optical instruments chosen for medium-format fidelity, dynamic range, and tactile soul.
              </Paragraph>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gear.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-100/70 dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800/70"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center mb-4">
                  {idx === 0 && <Camera className="w-4 h-4" />}
                  {idx === 1 && <Aperture className="w-4 h-4" />}
                  {idx === 2 && <Layers className="w-4 h-4" />}
                  {idx === 3 && <Award className="w-4 h-4" />}
                </div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-900 dark:text-white mb-3">
                  {cat.category}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs text-neutral-600 dark:text-neutral-400 font-light flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
