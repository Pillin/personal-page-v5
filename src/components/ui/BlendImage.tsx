import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface BlendImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  blendMode?: 'difference' | 'overlay' | 'color-dodge' | 'exclusion';
  hover?: boolean;
}

export function BlendImage({ 
  blendMode = 'overlay',
  hover = true,
  className,
  ...props 
}: BlendImageProps) {
  return (
    <motion.img
      whileHover={hover ? { scale: 1.05 } : undefined}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        'rounded-lg',
        `blend-${blendMode}`,
        className
      )}
      {...props}
    />
  );
}