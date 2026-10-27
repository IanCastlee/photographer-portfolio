import React, { useState, useMemo } from 'react';
import { SectionEyebrow, Heading, Paragraph } from '../atoms/Typography';
import { FilterTabs } from '../molecules/FilterTabs';
import { ProjectCard } from '../molecules/ProjectCard';
import { Button } from '../atoms/Button';
import { ArrowDown } from 'lucide-react';

export const PortfolioSection = ({ projects = [], categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [projects, activeCategory]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section id="works" className="py-24 sm:py-32 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionEyebrow>Selected Works</SectionEyebrow>
            <Heading level={2}>
              Browse My Latest Work
            </Heading>
            <Paragraph size="md" muted className="mt-3 max-w-xl">
              A curated archive of commercial campaigns, high-fashion editorials, architectural perspectives, and intimate portraiture.
            </Paragraph>
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

        {/* Gallery Grid */}
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
    </section>
  );
};

export default PortfolioSection;
