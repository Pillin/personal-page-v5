import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Server } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Frontend', items: ['JavaScript', 'TypeScript', 'React'] },
  { icon: Server, label: 'Backend', items: ['Python', 'Django', 'Node.js'] },
  { icon: Globe, label: 'Other', items: ['Git', 'GraphQL', 'Accessibility'] },
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {skills.map(({ icon: Icon, label, items }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
        >
          <div className="flex items-center space-x-2 mb-3">
            <Icon className="w-5 h-5 text-orange-500 dark:text-purple-400" />
            <h3 className="font-medium">{label}</h3>
          </div>
          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}