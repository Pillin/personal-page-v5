import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Video } from 'lucide-react';
import { Link } from '../../ui/Link';
import { Card } from '../../ui/Card';
import { GradientText } from '../../ui/GradientText';

interface SpeakingCardProps {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
  index: number;
}

export function SpeakingCard({
  title,
  event,
  date,
  location,
  description,
  videoUrl,
  slidesUrl,
  index,
}: SpeakingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <Card className="group backdrop-blur-sm">
        <div className="p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-purple-600/20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative">
            <GradientText className="text-xl font-semibold mb-2">
              {title}
            </GradientText>
            <p className="text-orange-500 dark:text-purple-400 font-medium mb-4">{event}</p>
            
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {date}
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {location}
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            
            <div className="flex gap-4">
              {videoUrl && (
                <Link 
                  href={videoUrl} 
                  className="inline-flex items-center group/link"
                >
                  <Video className="w-4 h-4 mr-2 group-hover/link:text-orange-500 dark:group-hover/link:text-purple-400 transition-colors" />
                  Watch Talk
                </Link>
              )}
              {slidesUrl && (
                <Link 
                  href={slidesUrl} 
                  className="inline-flex items-center group/link"
                >
                  <Video className="w-4 h-4 mr-2 group-hover/link:text-orange-500 dark:group-hover/link:text-purple-400 transition-colors" />
                  View Slides
                </Link>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}