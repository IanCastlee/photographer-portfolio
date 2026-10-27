import React from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';
import { ContactForm } from '../molecules/ContactForm';
import { Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';

export const ContactSection = ({ profile, selectedService = '' }) => {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Studio Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionEyebrow>Bookings & Commissions</SectionEyebrow>
              <Heading level={2} className="mb-4">
                Let's Create Something Timeless.
              </Heading>
              <Paragraph size="md" muted className="mb-8">
                Currently taking commercial bookings, lookbooks, and private gallery commissions worldwide. Reach out directly or complete the brief form.
              </Paragraph>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profile.contactEmail}`}
                      className="text-sm font-semibold text-neutral-900 dark:text-white hover:underline"
                    >
                      {profile.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400 block">
                      Studio Phone
                    </span>
                    <a
                      href={`tel:${profile.contactPhone}`}
                      className="text-sm font-semibold text-neutral-900 dark:text-white hover:underline"
                    >
                      {profile.contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400 block">
                      Primary Studio
                    </span>
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">
                      {profile.studioAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability info card */}
            <div className="p-5 rounded-2xl bg-neutral-100 dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>Response Turnaround</span>
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300">
                All production inquiries receive responses within 24–48 hours, including preliminary moodboards and scheduling options.
              </p>
            </div>
          </div>

          {/* Right Commission Form */}
          <div className="lg:col-span-7">
            <ContactForm defaultService={selectedService} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
