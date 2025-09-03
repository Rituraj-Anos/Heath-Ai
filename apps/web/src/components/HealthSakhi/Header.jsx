import { useState } from "react";
import { Search, Bell, MessageCircle, Menu, Plus } from "lucide-react";
import useLanguageStore from "../../stores/languageStore";

export default function Header({ onMenuClick, activePage }) {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { t } = useLanguageStore();

  const getPageTitle = () => {
    switch (activePage) {
      case 'Dashboard':
        return t('dashboard.title');
      case 'Conversations':
        return t('conversations.title');
      case 'Alerts':
        return t('alerts.title');
      case 'Analytics':
        return t('analytics.title');
      default:
        return t('dashboard.title');
    }
  };

  return (
    <div className="h-16 bg-[#F3F3F3] dark:bg-[#1A1A1A] flex items-center justify-between px-4 md:px-6 flex-shrink-0 border-b border-[#E4E4E4] dark:border-[#404040]">
      {/* Left side - Mobile menu button and page title */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg transition-all duration-150 hover:bg-[#F5F5F5] dark:hover:bg-[#1E1E1E] active:bg-[#EEEEEE] dark:active:bg-[#2A2A2A] active:scale-95"
        >
          <Menu size={20} className="text-[#4B4B4B] dark:text-[#B0B0B0]" />
        </button>

        <div>
          <h1 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight font-inter">
            {getPageTitle()}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 hidden md:block">
            {t('dashboard.welcome')}
          </p>
        </div>
      </div>

      {/* Right side - Search, Action buttons and profile area */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Search field */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search conversations, alerts, users..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className={`w-[250px] h-10 pl-10 pr-4 rounded-full bg-white dark:bg-[#1E1E1E] border transition-all duration-200 font-inter text-sm text-black dark:text-white placeholder-[#6E6E6E] dark:placeholder-[#888888] placeholder-opacity-80 ${
              isSearchFocused
                ? "border-[#00D4B4] dark:border-[#00D4B4] ring-2 ring-[#00D4B4]/20"
                : "border-[#E5E5E5] dark:border-[#333333] hover:border-[#D0D0D0] dark:hover:border-[#444444]"
            }`}
          />
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[#6E6E6E] dark:text-[#888888]"
          />
        </div>

        {/* Mobile search button */}
        <button className="md:hidden w-10 h-10 rounded-full bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333333] flex items-center justify-center transition-all duration-150 hover:bg-[#F8F8F8] dark:hover:bg-[#262626] hover:border-[#D0D0D0] dark:hover:border-[#444444] active:bg-[#F0F0F0] dark:active:bg-[#2A2A2A] active:scale-95">
          <Search size={18} className="text-[#4B4B4B] dark:text-[#B0B0B0]" />
        </button>

        {/* Quick Action Button */}
        <button className="hidden sm:flex items-center gap-2 h-10 px-4 md:px-6 rounded-full bg-gradient-to-r from-[#00D4B4] to-[#2563EB] text-white font-semibold text-sm transition-all duration-150 hover:shadow-lg hover:shadow-[#00D4B4]/25 active:scale-95 font-inter">
          <Plus size={16} />
          <span className="hidden md:inline">Quick Alert</span>
        </button>

        {/* Notification Bell */}
        <button className="relative w-10 h-10 rounded-full bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333333] flex items-center justify-center transition-all duration-150 hover:bg-[#F8F8F8] dark:hover:bg-[#262626] hover:border-[#D0D0D0] dark:hover:border-[#444444] active:bg-[#F0F0F0] dark:active:bg-[#2A2A2A] active:scale-95">
          <Bell size={18} className="text-[#4B4B4B] dark:text-[#B0B0B0]" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-[#1A1A1A]"></div>
        </button>

        {/* Message Circle - Hidden on small screens */}
        <button className="hidden sm:flex w-10 h-10 rounded-full bg-white dark:bg-[#1E1E1E] border border-[#E5E5E5] dark:border-[#333333] items-center justify-center transition-all duration-150 hover:bg-[#F8F8F8] dark:hover:bg-[#262626] hover:border-[#D0D0D0] dark:hover:border-[#444444] active:bg-[#F0F0F0] dark:active:bg-[#2A2A2A] active:scale-95">
          <MessageCircle
            size={18}
            className="text-[#4B4B4B] dark:text-[#B0B0B0]"
          />
        </button>

        {/* User Avatar with Status */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
            alt="Dr. Smith Avatar"
            className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-[#333333] transition-all duration-150 hover:ring-[#E0E0E0] dark:hover:ring-[#444444] cursor-pointer object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-[#1A1A1A]"></div>
        </div>
      </div>
    </div>
  );
}