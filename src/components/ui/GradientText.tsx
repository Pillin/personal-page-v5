import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ 
  children, 
  className,
  animate = true 
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        'bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent',
        animate && 'animate-glow',
        className
      )}
      whileHover={animate ? { scale: 1.05 } : undefined}
    >
      {children}
    </motion.span>
  );
}