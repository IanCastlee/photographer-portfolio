import React, { useState, useMemo } from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';
import { FilterTabs } from '../molecules/FilterTabs';
import { ProjectCard } from '../molecules/ProjectCard';
import { CoverFlowCarousel } from '../molecules/CoverFlowCarousel';
import { Button } from '../atoms/Button';
import { ArrowDown, LayoutGrid, Layers } from 'lucide-react';

export const PortfolioSection = ({
  projects = [],
  categories = [],
  featuredSeries = [],
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [viewMode, setViewMode] = useState('coverflow'); // 'coverflow' or 'grid'

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [projects, activeCategory]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // Use filtered projects or featuredSeries for the coverflow view
  const coverFlowItems = filteredProjects.length > 0 ? filteredProjects : featuredSeries;

  return (
    <section id="works" className="py-20 sm:py-28 border-t border-neutral-200 dark:border-neutral-800/80">
      {/* Header Container (Constrained for optimal readability) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Selected Works</SectionEyebrow>
            <Heading level={2}>
              Browse My Latest Work
            </Heading>
            <Paragraph size="md" muted className="mt-3 max-w-xl">
              A curated archive of commercial campaigns, high-fashion editorials, architectural perspectives, and intimate portraiture.
            </Paragraph>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* View Mode Toggle Switcher */}
            <div className="inline-flex items-center p-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800">
              <button
                type="button"
                onClick={() => setViewMode('coverflow')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === 'coverflow'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Cover Flow</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  viewMode === 'grid'
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-bold shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {/* Category Filter Tabs */}
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={(cat) => {
                setActiveCategory(cat);
                setVisibleCount(6);
              }}
            />
          </div>
        </div>
      </div>

      {/* View Mode 1: Maximized Full-Width 3D Cover Flow Carousel (Spans entire screen width) */}
      {viewMode === 'coverflow' ? (
        <div className="w-full max-w-[1920px] mx-auto px-2 sm:px-6 lg:px-10">
          <CoverFlowCarousel
            items={coverFlowItems}
            showControls={true}
            autoPlay={false}
          />
        </div>
      ) : (
        /* View Mode 2: Multi-column Grid Gallery */
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={idx < 3}
              />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-14 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((prev) => prev + 3)}
                icon={ArrowDown}
              >
                Load More Projects ({filteredProjects.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
