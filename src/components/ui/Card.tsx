import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  blend?: boolean;
}

export function Card({ 
  children, 
  className,
  hover = true,
  blend = false,
  ...props 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        'bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg',
        blend && 'mix-blend-difference',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}