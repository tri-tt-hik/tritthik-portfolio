import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-surface-strong hover:bg-gold-soft transition-colors flex items-center justify-center border border-line"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IconSun className="w-5 h-5 text-gold" />
      ) : (
        <IconMoon className="w-5 h-5 text-ink" />
      )}
    </button>
  );
}
