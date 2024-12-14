import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {language.toUpperCase()}
      </Button>
    </motion.div>
  );
}