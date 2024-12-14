import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from '../../ui/Link';
import { Card } from '../../ui/Card';
import { GradientText } from '../../ui/GradientText';
import { ProjectCardProps } from './types';

export function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="group h-full hover:shadow-orange-500/10 dark:hover:shadow-purple-600/10">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="relative p-6">
          <div className="absolute -top-8 right-4 flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          <GradientText className="text-xl font-semibold mb-3">
            {title}
          </GradientText>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex gap-4">
            {demoUrl && (
              <Link 
                href={demoUrl} 
                className="inline-flex items-center hover:translate-x-1 transition-transform"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Link>
            )}
            {githubUrl && (
              <Link 
                href={githubUrl} 
                className="inline-flex items-center hover:translate-x-1 transition-transform"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}