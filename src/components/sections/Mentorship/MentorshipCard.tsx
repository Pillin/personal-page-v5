import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from '../../ui/Link';
import { Card } from '../../ui/Card';
import { GradientText } from '../../ui/GradientText';

interface MentorshipCardProps {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
  index: number;
}

export function MentorshipCard({
  title,
  organization,
  date,
  description,
  link,
  index,
}: MentorshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="group overflow-visible">
        <div className="p-6 relative">
          <div className="absolute -top-3 -right-3 bg-gradient-to-br from-orange-500 to-purple-600 p-[1px] rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
            <div className="bg-white dark:bg-gray-900 px-3 py-1 rounded-lg">
              <p className="text-sm font-medium">{date}</p>
            </div>
          </div>
          
          <GradientText className="text-xl font-semibold mb-2" animate={false}>
            {title}
          </GradientText>
          <p className="text-orange-500 dark:text-purple-400 mb-1">{organization}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          
          {link && (
            <Link 
              href={link} 
              target='_blank'
              className="inline-flex items-center group/link"
            >
              <span className="group-hover/link:translate-x-1 transition-transform">
                Learn more
              </span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </Card>
    </motion.div>
  );
}