// File: apps/web/src/app/page.jsx

import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import Sidebar from "../components/HealthSakhi/Sidebar";
import Header from "../components/HealthSakhi/Header";
import Dashboard from "../pages/Dashboard";
import Conversations from "../pages/Conversations";
import Analytics from "../pages/Analytics";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Alerts from "../pages/Alerts";
import ChatBot from "../pages/ChatBot";
import useThemeStore from "../stores/themeStore";
import useLanguageStore from "../stores/languageStore";

const MockPage = ({ title }) => (
  <div className="p-8 flex items-center justify-center min-h-[400px]">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        This page is coming soon!
      </p>
    </div>
  </div>
);

export default function HealthSakhiApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const { theme, setTheme } = useThemeStore();
  const { language } = useLanguageStore();

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("healthsakhi-theme");
      const initial = saved ? JSON.parse(saved).state.theme : "light";
      setTheme(initial);
    }
  }, [setTheme]);

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard onPageChange={setActivePage} />;
      case "Conversations":
        return <Conversations />;
      case "Alerts":
        return <Alerts />;
      case "Analytics":
        return <Analytics />;
      case "Users":
        return <Users />;
      case "Settings":
        return <Settings />;
      case "ChatBot":
        return <ChatBot />;
      default:
        return <Dashboard onPageChange={setActivePage} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F3F3F3] dark:bg-[#0A0A0A] transition-colors duration-200">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&family=Sora:wght@400;600;700&display=swap");
        .font-inter {
          font-family: "Inter", sans-serif;
        }
        .font-plus-jakarta {
          font-family: "Plus Jakarta Sans", sans-serif;
        }
        .font-sora {
          font-family: "Sora", sans-serif;
        }
        :root {
          --primary-green: #00d4b4;
          --primary-blue: #2563eb;
          --secondary-teal: #14b8a6;
          --emergency-red: #ef4444;
          --warning-orange: #f59e0b;
          --success-green: #10b981;
          --info-blue: #3b82f6;
        }
        * {
          transition-property:
            color, background-color, border-color, text-decoration-color, fill,
            stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}</style>

      <Toaster position="top-right" richColors theme={theme} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar
          onClose={() => setSidebarOpen(false)}
          activePage={activePage}
          onPageChange={setActivePage}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          activePage={activePage}
        />
        <div className="flex-1 overflow-y-auto">{renderPage()}</div>
      </div>
    </div>
  );
}
