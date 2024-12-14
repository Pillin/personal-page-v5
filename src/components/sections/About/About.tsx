import { motion } from 'framer-motion';
import { MotionWrapper } from '../../animations/MotionWrapper';
import { SocialLinks } from './SocialLinks';
import { Skills } from './Skills';
import { staggerContainer } from '../../animations/variants';
import { AboutProps } from './types';

export function About({ title, summary, experience, links, skills, funFact }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <MotionWrapper className="space-y-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {summary}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {experience}
            </p>
            <SocialLinks links={links} />
          </MotionWrapper>

          <MotionWrapper delay={0.2} className="space-y-8">
            <div className="relative">
              <motion.img
                src={funFact.img.src}
                alt={funFact.img.alt}
                className="rounded-lg shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
              >
                <p className="text-sm font-medium">{funFact.description}</p>
              </motion.div>
            </div>
            <Skills skills={skills} />
          </MotionWrapper>
        </motion.div>
      </div>
    </section>
  );
}