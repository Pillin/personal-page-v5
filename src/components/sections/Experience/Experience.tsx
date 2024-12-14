import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { ExperienceCard } from './ExperienceCard';
import { staggerContainer } from '../../animations/variants';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('exp.doordash.title'),
      company: t('exp.doordash.company'),
      date: t('exp.doordash.date'),
      description: t('exp.doordash.description'),
    },
    {
      title: t('exp.smartbiz.title'),
      company: t('exp.smartbiz.company'),
      date: t('exp.smartbiz.date'),
      description: t('exp.smartbiz.description'),
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12">{t('exp.title')}</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} {...exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}