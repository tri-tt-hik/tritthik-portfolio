import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle flex items-center justify-center transition-colors ${className || ''}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IconSun className="w-4 h-4 text-white hover:text-gray-300" />
      ) : (
        <IconMoon className="w-4 h-4 text-gray-400 hover:text-white" />
      )}
    </button>
  );
}
