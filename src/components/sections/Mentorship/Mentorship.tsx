import { motion } from 'framer-motion';
import { MentorshipCard } from './MentorshipCard';
import { MentorshipProps } from './types'

export function Mentorship({ title, volunteers }: MentorshipProps) {
  return (
    <section id="mentorship" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteers.map((item, index) => (
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