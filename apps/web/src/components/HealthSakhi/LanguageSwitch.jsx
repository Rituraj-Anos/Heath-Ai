import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import useLanguageStore from "../../stores/languageStore";
import { languages } from "../../data/mockData";

export default function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguageStore();

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-white dark:bg-[#262626] border border-[#E4E4E4] dark:border-[#404040] text-black dark:text-white transition-all duration-150 hover:bg-[#F8F8F8] dark:hover:bg-[#2A2A2A] active:scale-95"
      >
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium">{currentLanguage?.flag}</span>
          <span className="text-xs text-gray-600 dark:text-gray-400">{currentLanguage?.name}</span>
        </div>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} text-gray-600 dark:text-gray-400`} 
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 right-0 bg-white dark:bg-[#262626] border border-[#E4E4E4] dark:border-[#404040] rounded-lg shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                lang.code === language
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}