import { motion } from 'framer-motion';
import { Link } from '../ui/Link';
import { MenuItem, MenuItemProps } from './types'


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

const MenuItemC = ({ href, label, onClose, i }: MenuItem & MenuItemProps) => {
  return (
    <motion.li
      key={href}
      custom={i}
      variants={itemVariants}
      className="relative"
    >
      <Link
        href={href}
        variant="nav"
        onClick={onClose}
        className="block py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {label}
      </Link>
    </motion.li>
  )
}


export default MenuItemC