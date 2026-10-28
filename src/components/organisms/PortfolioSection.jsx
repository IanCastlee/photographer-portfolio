import React, { useState, useMemo } from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';
import { FilterTabs } from '../molecules/FilterTabs';
import { CoverFlowCarousel } from '../molecules/CoverFlowCarousel';

export const PortfolioSection = ({
  projects = [],
  categories = [],
  featuredSeries = [],
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [projects, activeCategory]);

  // Use filtered projects or featuredSeries for the coverflow view
  const coverFlowItems = filteredProjects.length > 0 ? filteredProjects : featuredSeries;

  return (
    <section id="works" className="py-20 sm:py-28 border-t border-neutral-200 dark:border-neutral-800/80">
      {/* Header Container (Constrained for optimal readability) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Selected Works</SectionEyebrow>
            <Heading level={2}>
              Browse My Latest Work
            </Heading>
            <Paragraph size="md" muted className="mt-3 max-w-xl">
              A curated archive of commercial campaigns, high-fashion editorials, architectural perspectives, and intimate portraiture.
            </Paragraph>
          </div>

          {/* Clean Category Filter Tabs — No clutter, perfectly aligned */}
          <div className="flex items-center shrink-0">
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={(cat) => setActiveCategory(cat)}
            />
          </div>
        </div>
      </div>

      {/* Maximized Full-Width 3D Cover Flow Carousel */}
      <div className="w-full max-w-[1920px] mx-auto px-2 sm:px-6 lg:px-10">
        <CoverFlowCarousel
          items={coverFlowItems}
          showControls={true}
          autoPlay={false}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
