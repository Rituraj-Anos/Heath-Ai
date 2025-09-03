import { Sun, Moon } from "lucide-react";
import useThemeStore from "../../stores/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white dark:bg-[#262626] border border-[#E4E4E4] dark:border-[#404040] text-black dark:text-white transition-all duration-150 hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] active:scale-95"
    >
      {theme === 'light' ? (
        <Moon size={16} className="text-gray-600 dark:text-gray-400" />
      ) : (
        <Sun size={16} className="text-gray-600 dark:text-gray-400" />
      )}
      <span className="text-sm font-medium">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </button>
  );
}