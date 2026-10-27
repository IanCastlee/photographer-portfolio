import React from 'react';

export const TextArea = ({
  label,
  id,
  rows = 4,
  placeholder,
  value,
  onChange,
  required = false,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs uppercase font-mono tracking-wider text-neutral-600 dark:text-neutral-400"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-400 focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all duration-200 text-sm resize-y ${
          error ? 'border-rose-500 focus:border-rose-500' : ''
        }`}
        {...props}
      />
      {error && <span className="text-xs text-rose-500">{error}</span>}
    </div>
  );
};

export default TextArea;
