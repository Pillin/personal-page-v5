import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';
import { LanguageToggle } from './LanguageToggle';
import { MobileMenuProps } from './types'
import ThemeToggle from './ThemeToggle';
import MenuItemC from './MenuItem';

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


export function MobileMenu({ onClose, menuItems }: MobileMenuProps) {
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
            {menuItems.map((item, i) => <MenuItemC {...item} i={i} onClose={onClose} />)}
          </ul>
        </nav>

        <motion.div
          custom={menuItems.length + 1}
          className="p-4 border-t border-gray-200/20 dark:border-gray-800/20"
        >
          <ThemeToggle />
          <LanguageToggle />
        </motion.div>
      </div>
    </motion.div>
  );
}