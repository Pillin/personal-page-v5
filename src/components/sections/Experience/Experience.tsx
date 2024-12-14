import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { staggerContainer } from '../../animations/variants';
import { ExperienceProps } from './types';

export function Experience({ title, experiences }: ExperienceProps) {
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
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
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