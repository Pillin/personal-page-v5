import React from 'react';
import { cn } from '../../utils/cn';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'nav' | 'underline';
  children: React.ReactNode;
  className?: string;
}

export function Link({
  variant = 'default',
  children,
  className,
  ...props
}: LinkProps) {
  const baseStyles = 'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';
  
  const variants = {
    default: 'text-orange-500 dark:text-purple-400 hover:text-orange-600 dark:hover:text-purple-500',
    nav: 'text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-purple-400',
    underline: 'relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-current after:transform after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left',
  };

  return (
    <a
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}