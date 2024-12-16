import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { fadeIn, slideIn } from '../../animations/variants';
import { HeroProps } from './types'

export function Hero({ title, greeting, subtitle, ctaButton: { label, onClick } }: HeroProps ) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 grid grid-cols-6 gap-4 p-4"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-square rounded-full bg-gradient-to-br from-orange-500/20 to-purple-600/20 dark:from-orange-500/10 dark:to-purple-600/10"
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="space-y-6 relative"
        >
          <motion.h1 
            variants={slideIn}
            data-text={greeting}
            className="glowing-text text-5xl sm:text-7xl font-bold text-balance"
          >
            {greeting}
          </motion.h1>
          
          <motion.p 
            variants={slideIn}
            className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300"
          >
            {title}
          </motion.p>

          <motion.p 
            variants={slideIn}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {subtitle}
          </motion.p>

          {onClick && (
            <motion.div
            variants={fadeIn}
            className="pt-4"
          >
            <Button
              size="lg"
              className="group"
              onClick={onClick}
            >
              {label}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}