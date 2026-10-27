import React from 'react';

export const IconButton = ({
  icon: Icon,
  onClick,
  label,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const base = "rounded-full flex items-center justify-center transition-all duration-300 active:scale-90 focus:outline-none";

  const sizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg"
  };

  const variants = {
    default: "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 dark:bg-white/10 dark:text-neutral-200 dark:hover:bg-white/20 dark:hover:text-white border border-neutral-300/50 dark:border-white/10 backdrop-blur-md",
    outline: "border border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white",
    ghost: "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/60",
    solidDark: "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <Icon className="w-4 h-4 shrink-0" />
    </button>
  );
};

export default IconButton;
