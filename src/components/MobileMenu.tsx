import React from 'react';
import { motion } from 'framer-motion';
import { X, Moon, Sun } from 'lucide-react';
import { Link } from './ui/Link';
import { Button } from './ui/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import { LanguageToggle } from './LanguageToggle';

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const menuItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#speaking', label: t('nav.speaking') },
    { href: '#mentorship', label: t('nav.mentorship') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    })
  };

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      className="fixed inset-y-0 right-0 w-full sm:w-80 glass-effect shadow-2xl z-50"
    >
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200/20 dark:border-gray-800/20">
          <span className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Menu
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:rotate-90 transition-transform"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="space-y-2 px-4">
            {menuItems.map((item, i) => (
              <motion.li
                key={item.href}
                custom={i}
                variants={itemVariants}
                className="relative"
              >
                <Link
                  href={item.href}
                  variant="nav"
                  onClick={onClose}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            variants={itemVariants}
            custom={menuItems.length}
            className="mt-6 px-4 space-y-4"
          >
            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <span className="text-sm font-medium">Theme</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <span className="text-sm font-medium">Language</span>
              <LanguageToggle />
            </div>
          </motion.div>
        </nav>

        <motion.div
          variants={itemVariants}
          custom={menuItems.length + 1}
          className="p-4 border-t border-gray-200/20 dark:border-gray-800/20"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2024 Pillippa Pérez Pons
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}