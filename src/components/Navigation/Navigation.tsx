import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';
import { LanguageToggle } from './LanguageToggle';
import { MobileMenu } from './MobileMenu';
import CatPattern from '../patterns/CatPattern'
import { cn } from '../../utils/cn';
import ThemeToggle from './ThemeToggle';
import { NavigationProps } from './types'
import MenuItemC from './MenuItem';

export function Navigation({ menuItems }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className={cn(
        'glass-effect border-b border-gray-200/20 dark:border-gray-800/20',
        'transition-colors duration-300'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-full">
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
                <CatPattern />
              </Link>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => <MenuItemC {...item} />)}
              <LanguageToggle />
              <ThemeToggle />
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
          <MobileMenu onClose={() => setIsMenuOpen(false)} menuItems={menuItems} />
        )}
      </AnimatePresence>
    </nav>
  );
}