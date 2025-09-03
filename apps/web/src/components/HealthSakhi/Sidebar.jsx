// File: apps/web/src/components/HealthSakhi/Sidebar.jsx

import { useState } from "react";
import {
  LayoutDashboard,
  MessageCircle,
  Bell,
  BarChart3,
  Users,
  Settings,
  ChevronDown,
  Activity,
} from "lucide-react";
import useLanguageStore from "../../stores/languageStore";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar({ onClose, activePage, onPageChange }) {
  const [expandedMenus, setExpandedMenus] = useState({});
  const { t } = useLanguageStore();

  const toggleSubmenu = (item) => {
    setExpandedMenus((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleItemClick = (name, hasSubmenu) => {
    if (hasSubmenu) toggleSubmenu(name);
    else onPageChange(name);
    if (onClose && window.innerWidth < 1024) onClose();
  };

  const navigationItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      hasSubmenu: false,
      badge: null,
    },
    {
      name: "Conversations",
      icon: MessageCircle,
      hasSubmenu: false,
      badge: { count: 23, color: "red" },
    },
    {
      name: "Alerts",
      icon: Bell,
      hasSubmenu: false,
      badge: { count: 5, color: "orange" },
    },
    { name: "Analytics", icon: BarChart3, hasSubmenu: false, badge: null },
    {
      name: "Users",
      icon: Users,
      hasSubmenu: false,
      badge: { count: 1247, color: "blue" },
    },
    { name: "Settings", icon: Settings, hasSubmenu: false, badge: null },
    { name: "ChatBot", icon: Activity, hasSubmenu: false, badge: null },
  ];

  return (
    <div className="w-60 bg-[#F3F3F3] dark:bg-[#1A1A1A] flex-shrink-0 flex flex-col h-full">
      {/* Brand Logo */}
      <div className="p-4 flex justify-start">
        <div className="w-12 h-12 bg-gradient-to-br from-[#00D4B4] to-[#2563EB] rounded-full border border-[#E4E4E4] dark:border-[#404040] flex items-center justify-center">
          <Activity size={24} className="text-white" />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.name;
            const isExpanded = expandedMenus[item.name];

            return (
              <div key={item.name}>
                <button
                  onClick={() => handleItemClick(item.name, item.hasSubmenu)}
                  className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-white dark:bg-[#262626] border border-[#E4E4E4] dark:border-[#404040] text-black dark:text-white"
                      : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 active:bg-white/70 dark:active:bg-white/15 active:scale-[0.98]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className={
                        isActive
                          ? "text-black dark:text-white"
                          : "text-black/70 dark:text-white/70"
                      }
                    />
                    <span
                      className={`font-medium text-sm font-plus-jakarta ${
                        isActive
                          ? "text-black dark:text-white"
                          : "text-black/70 dark:text-white/70"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          item.badge.color === "red"
                            ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                            : item.badge.color === "orange"
                              ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                              : item.badge.color === "blue"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {item.badge.count}
                      </span>
                    )}
                    {item.hasSubmenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        } ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-black/70 dark:text-white/70"
                        }`}
                      />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Utility Actions */}
      <div className="p-4 space-y-4">
        <LanguageSwitch />
        <ThemeToggle />
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-medium">System Online</span>
        </div>
      </div>
    </div>
  );
}
