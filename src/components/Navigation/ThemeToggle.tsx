import { Button } from '../ui/Button';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
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
  )
}

export default ThemeToggle