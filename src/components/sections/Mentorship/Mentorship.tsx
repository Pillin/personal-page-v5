import React from 'react';
import { motion } from 'framer-motion';
import { MentorshipCard } from './MentorshipCard';
import { useMentorshipData } from './mentorshipData';
import { useLanguage } from '../../../contexts/LanguageContext';

export function Mentorship() {
  const { t } = useLanguage();
  const mentorshipData = useMentorshipData();

  return (
    <section id="mentorship" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('mentorship.title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentorshipData.map((item, index) => (
            <MentorshipCard 
              key={item.id} 
              {...item} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}