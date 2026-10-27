import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative flex items-center p-1.5 rounded-full border transition-all duration-300 focus:outline-none ${
        isDark
          ? 'bg-neutral-900 border-neutral-700/80 text-amber-400 hover:border-neutral-500'
          : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:border-neutral-400'
      } ${className}`}
    >
      <div className="flex items-center gap-1.5 px-1.5">
        <Sun className={`w-3.5 h-3.5 transition-transform duration-300 ${!isDark ? 'text-amber-500 scale-110' : 'text-neutral-500 opacity-40'}`} />
        <Moon className={`w-3.5 h-3.5 transition-transform duration-300 ${isDark ? 'text-blue-400 scale-110' : 'text-neutral-400 opacity-40'}`} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
