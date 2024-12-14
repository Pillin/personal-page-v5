import { motion } from 'framer-motion';
import { Link } from '../../ui/Link';
import { SocialLinksProps } from './types'

export function SocialLinks({ links }: SocialLinksProps) {
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