import { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    organizationName: "Government of Odisha - Health Department",
    defaultLanguage: "odia",
    timezone: "Asia/Kolkata",
    emergencyNumber: "+91 104",
    autoResponse: true,
    notificationEmail: "admin@healthsakhi.gov.in",
    whatsappConnected: true,
    aiModel: "gpt-4",
    responseTime: "fast",
    dataRetention: "2-years",
    backupFrequency: "daily",
  });

  const tabs = [
    { id: "general", label: "General", icon: "⚙️" },
    { id: "integrations", label: "Integrations", icon: "🔗" },
    { id: "ai", label: "AI Configuration", icon: "🤖" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "notifications", label: "Notifications", icon: "📧" },
  ];

  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "हिंदी (Hindi)" },
    { value: "odia", label: "ଓଡ଼ିଆ (Odia)" },
    { value: "bengali", label: "বাংলা (Bengali)" },
    { value: "telugu", label: "తెలుగు (Telugu)" },
    { value: "marathi", label: "मराठी (Marathi)" },
    { value: "gujarati", label: "ગુજરાતી (Gujarati)" },
    { value: "malayalam", label: "മലയാളം (Malayalam)" },
  ];

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log("Saving settings:", settings);
    alert("Settings saved successfully!");
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Organization Name
        </label>
        <input
          type="text"
          value={settings.organizationName}
          onChange={(e) =>
            handleSettingChange("organizationName", e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Default Language
        </label>
        <select
          value={settings.defaultLanguage}
          onChange={(e) =>
            handleSettingChange("defaultLanguage", e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Timezone
        </label>
        <select
          value={settings.timezone}
          onChange={(e) => handleSettingChange("timezone", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
          <option value="UTC">UTC</option>
          <option value="Asia/Dubai">Asia/Dubai (GST)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Emergency Contact Number
        </label>
        <input
          type="text"
          value={settings.emergencyNumber}
          onChange={(e) =>
            handleSettingChange("emergencyNumber", e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Auto Response
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Automatically respond to common queries
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.autoResponse}
            onChange={(e) =>
              handleSettingChange("autoResponse", e.target.checked)
            }
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
        </label>
      </div>
    </div>
  );

  const renderIntegrations = () => (
    <div className="space-y-6">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-medium text-green-800 dark:text-green-200">
                WhatsApp Business API
              </h4>
              <p className="text-sm text-green-600 dark:text-green-300">
                Connected and active
              </p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Configure
          </button>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📧</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">
                Email Notifications
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Not configured
              </p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
            Setup
          </button>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📱</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">
                SMS Gateway
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Not configured
              </p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
            Setup
          </button>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🏥</span>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200">
                Hospital Management System
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                API integrated
              </p>
            </div>
          </div>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Manage
          </button>
        </div>
      </div>
    </div>
  );

  const renderAIConfiguration = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          AI Model
        </label>
        <select
          value={settings.aiModel}
          onChange={(e) => handleSettingChange("aiModel", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          <option value="gpt-4">GPT-4 (Recommended)</option>
          <option value="gpt-3.5">GPT-3.5 Turbo</option>
          <option value="claude">Claude AI</option>
          <option value="gemini">Google Gemini</option>
        </select>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Current model: GPT-4 with health-specific training
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Response Speed
        </label>
        <select
          value={settings.responseTime}
          onChange={(e) => handleSettingChange("responseTime", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          <option value="fast">Fast (2-3 seconds)</option>
          <option value="balanced">Balanced (3-5 seconds)</option>
          <option value="accurate">Most Accurate (5-8 seconds)</option>
        </select>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
          AI Safety Protocols
        </h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm text-yellow-700 dark:text-yellow-300">
              Emergency query detection enabled
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm text-yellow-700 dark:text-yellow-300">
              Medical advice disclaimer active
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm text-yellow-700 dark:text-yellow-300">
              Human escalation triggers configured
            </span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Supported Languages
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {languages.map((lang) => (
            <div key={lang.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={lang.value}
                defaultChecked={true}
                className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={lang.value}
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                {lang.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Data Retention Period
        </label>
        <select
          value={settings.dataRetention}
          onChange={(e) => handleSettingChange("dataRetention", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          <option value="6-months">6 Months</option>
          <option value="1-year">1 Year</option>
          <option value="2-years">2 Years</option>
          <option value="5-years">5 Years</option>
          <option value="indefinite">Indefinite</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Backup Frequency
        </label>
        <select
          value={settings.backupFrequency}
          onChange={(e) =>
            handleSettingChange("backupFrequency", e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
          Security Status
        </h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm text-green-700 dark:text-green-300">
              SSL certificate active
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm text-green-700 dark:text-green-300">
              Data encryption enabled
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm text-green-700 dark:text-green-300">
              Regular security audits
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span className="text-sm text-green-700 dark:text-green-300">
              GDPR compliant
            </span>
          </div>
        </div>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
          Danger Zone
        </h4>
        <p className="text-sm text-red-600 dark:text-red-300 mb-3">
          These actions cannot be undone. Please proceed with caution.
        </p>
        <div className="space-y-2">
          <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Export All Data
          </button>
          <button className="px-4 py-2 text-sm border border-red-600 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors ml-2">
            Delete All Conversations
          </button>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Notification Email
        </label>
        <input
          type="email"
          value={settings.notificationEmail}
          onChange={(e) =>
            handleSettingChange("notificationEmail", e.target.value)
          }
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Email Notifications
        </h4>

        {[
          {
            key: "emergencyAlerts",
            label: "Emergency Query Alerts",
            description:
              "Get notified immediately when emergency queries are detected",
          },
          {
            key: "dailyReports",
            label: "Daily Reports",
            description: "Receive daily summary of chatbot activity",
          },
          {
            key: "systemAlerts",
            label: "System Alerts",
            description: "Get notified about system maintenance and updates",
          },
          {
            key: "userRegistration",
            label: "New User Registration",
            description: "Notification when new users register",
          },
        ].map((notification) => (
          <div
            key={notification.key}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div>
              <h5 className="font-medium text-gray-800 dark:text-gray-200">
                {notification.label}
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {notification.description}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={notification.key === "emergencyAlerts"}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Configure HealthSakhi system preferences and integrations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h2>
            </div>

            {/* Tab Content */}
            {activeTab === "general" && renderGeneralSettings()}
            {activeTab === "integrations" && renderIntegrations()}
            {activeTab === "ai" && renderAIConfiguration()}
            {activeTab === "security" && renderSecurity()}
            {activeTab === "notifications" && renderNotifications()}

            {/* Save Button */}
            <div className="flex justify-end mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
