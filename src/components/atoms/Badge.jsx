import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) => {
  const base = "inline-flex items-center rounded-full font-mono uppercase tracking-wider transition-colors duration-200";

  const sizes = {
    xs: "text-[10px] px-2.5 py-0.5",
    sm: "text-xs px-3 py-1",
    md: "text-sm px-3.5 py-1.5"
  };

  const variants = {
    default: "bg-neutral-200/80 text-neutral-800 dark:bg-white/10 dark:text-neutral-300 border border-neutral-300/60 dark:border-white/10 backdrop-blur-md",
    subtle: "bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800",
    outline: "border border-neutral-400/50 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300",
    numbered: "w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white"
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
