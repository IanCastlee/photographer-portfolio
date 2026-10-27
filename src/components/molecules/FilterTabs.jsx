import React from 'react';

export const FilterTabs = ({
  categories = [],
  activeCategory = 'All',
  onSelectCategory,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-tight transition-all duration-300 ${
              isActive
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'bg-neutral-200/60 text-neutral-600 hover:text-neutral-900 dark:bg-neutral-900/60 dark:text-neutral-400 dark:hover:text-white border border-neutral-300/40 dark:border-neutral-800'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
