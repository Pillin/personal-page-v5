import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card } from '../../ui/Card';
import { GradientText } from '../../ui/GradientText';

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  index: number;
}

export function ExperienceCard({
  title,
  company,
  date,
  description,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 to-purple-600" />
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Briefcase className="w-4 h-4 text-gradient" />
      </motion.div>
      
      <Card 
        hover={false} 
        className="group p-6 hover:shadow-orange-500/10 dark:hover:shadow-purple-600/10"
      >
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
          <GradientText className="text-xl font-semibold mb-1">
            {title}
          </GradientText>
          <p className="text-orange-500 dark:text-purple-400 font-medium">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{date}</p>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </motion.div>
      </Card>
    </motion.div>
  );
}