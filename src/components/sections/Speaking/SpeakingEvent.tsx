import React from 'react';
import { Calendar, MapPin, Video } from 'lucide-react';
import { Link } from '../../ui/Link';

interface SpeakingEventProps {
  title: string;
  event: string;
  date: string;
  location: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
}

export function SpeakingEvent({
  title,
  event,
  date,
  location,
  description,
  videoUrl,
  slidesUrl,
}: SpeakingEventProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <p className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {date}
            </p>
            <p className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              {location}
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 flex flex-col space-y-2">
          {videoUrl && (
            <Link href={videoUrl} variant="default" className="inline-flex items-center">
              <Video className="w-4 h-4 mr-2" />
              Watch Talk
            </Link>
          )}
          {slidesUrl && (
            <Link href={slidesUrl} variant="default" className="inline-flex items-center">
              <Video className="w-4 h-4 mr-2" />
              View Slides
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}