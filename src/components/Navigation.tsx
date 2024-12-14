import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/Button';
import { Link } from './ui/Link';
import { LanguageToggle } from './LanguageToggle';
import { MobileMenu } from './MobileMenu';
import { cn } from '../utils/cn';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#speaking', label: t('nav.speaking') },
    { href: '#mentorship', label: t('nav.mentorship') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className={cn(
        'glass-effect border-b border-gray-200/20 dark:border-gray-800/20',
        'transition-colors duration-300'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <Link 
                href="/" 
                className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
              >
                PP
              </Link>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link 
                    href={item.href} 
                    variant="nav"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <LanguageToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 rounded-full"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(true)}
                className="p-2"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
}