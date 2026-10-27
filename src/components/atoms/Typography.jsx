import React from 'react';

export const SectionEyebrow = ({ children, className = '' }) => (
  <div className={`flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-neutral-500 dark:text-neutral-400 mb-3 ${className}`}>
    <span className="w-6 h-px bg-neutral-400 dark:bg-neutral-600 inline-block" />
    <span>{children}</span>
  </div>
);

export const Heading = ({
  level = 2,
  children,
  className = '',
  serif = false,
  ...props
}) => {
  const fontClass = serif ? 'font-editorial font-medium' : 'font-sans font-bold tracking-tight';

  const styles = {
    1: `text-4xl sm:text-6xl lg:text-7xl leading-[1.08] ${fontClass}`,
    2: `text-3xl sm:text-4xl lg:text-5xl leading-[1.15] ${fontClass}`,
    3: `text-2xl sm:text-3xl leading-[1.25] ${fontClass}`,
    4: `text-xl sm:text-2xl leading-snug ${fontClass}`,
    5: `text-lg font-semibold ${fontClass}`,
  };

  const Component = `h${level}`;

  return (
    <Component
      className={`text-neutral-900 dark:text-neutral-100 ${styles[level]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Paragraph = ({
  children,
  size = 'md',
  className = '',
  muted = false,
  ...props
}) => {
  const sizes = {
    sm: "text-xs leading-relaxed",
    md: "text-sm sm:text-base leading-relaxed",
    lg: "text-base sm:text-lg leading-relaxed font-light",
    xl: "text-lg sm:text-xl leading-relaxed font-light"
  };

  const color = muted
    ? "text-neutral-600 dark:text-neutral-400"
    : "text-neutral-800 dark:text-neutral-200";

  return (
    <p className={`${sizes[size]} ${color} ${className}`} {...props}>
      {children}
    </p>
  );
};
