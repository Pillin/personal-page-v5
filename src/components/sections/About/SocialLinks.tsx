import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe } from 'lucide-react';
import { Link } from '../../ui/Link';
import { useLanguage } from '../../../contexts/LanguageContext';

export function SocialLinks() {
  const { t } = useLanguage();
  
  const links = [
    { icon: Linkedin, href: `https://linkedin.com/in/${t('contact.linkedin')}`, label: 'LinkedIn' },
    { icon: Github, href: `https://github.com/${t('contact.github')}`, label: 'GitHub' },
    { icon: Globe, href: 'https://pillippa.dev', label: 'Website' },
  ];

  return (
    <div className="flex space-x-4">
      {links.map(({ icon: Icon, href, label }) => (
        <motion.div
          key={label}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <Link
            href={href}
            variant="default"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Icon className="w-5 h-5" />
            <span className="sr-only">{label}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}