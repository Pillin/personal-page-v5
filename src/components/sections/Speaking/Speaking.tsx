import React from 'react';
import { SpeakingEvent } from './SpeakingEvent';
import { speakingData } from './speakingData';

export function Speaking() {
  return (
    <section id="speaking" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Speaking</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing knowledge and experiences through conference talks and workshops.
          </p>
        </div>
        <div className="space-y-8">
          {speakingData.map((event) => (
            <SpeakingEvent key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}