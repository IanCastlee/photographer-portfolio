import React from 'react';

export const StatCounter = ({ label, value }) => {
  return (
    <div className="flex flex-col border-l border-neutral-300 dark:border-neutral-800 pl-4 py-1">
      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
        {value}
      </span>
      <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
        {label}
      </span>
    </div>
  );
};

export default StatCounter;
