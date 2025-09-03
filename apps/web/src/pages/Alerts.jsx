import { useState } from "react";

const AlertsPage = () => {
  const [selectedAlertType, setSelectedAlertType] = useState("outbreak");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [alertMessage, setAlertMessage] = useState("");
  const [priority, setPriority] = useState("medium");

  const alertTypes = [
    {
      id: "outbreak",
      label: "Disease Outbreak",
      icon: "🦠",
      color: "text-red-600 dark:text-red-400",
    },
    {
      id: "vaccination",
      label: "Vaccination Drive",
      icon: "💉",
      color: "text-green-600 dark:text-green-400",
    },
    {
      id: "health-tips",
      label: "Health Tips",
      icon: "💡",
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      id: "emergency",
      label: "Emergency Notice",
      icon: "🚨",
      color: "text-red-700 dark:text-red-300",
    },
  ];

  const languages = [
    { id: "english", label: "English", flag: "🇺🇸" },
    { id: "hindi", label: "हिंदी (Hindi)", flag: "🇮🇳" },
    { id: "odia", label: "ଓଡ଼ିଆ (Odia)", flag: "🇮🇳" },
    { id: "bengali", label: "বাংলা (Bengali)", flag: "🇧🇩" },
    { id: "telugu", label: "తెలుగు (Telugu)", flag: "🇮🇳" },
    { id: "marathi", label: "मराठी (Marathi)", flag: "🇮🇳" },
    { id: "gujarati", label: "ગુજરાતી (Gujarati)", flag: "🇮🇳" },
    { id: "malayalam", label: "മലയാളം (Malayalam)", flag: "🇮🇳" },
  ];

  const alertHistory = [
    {
      id: 1,
      type: "Disease Outbreak",
      title: "Dengue Fever Alert - Bhubaneswar District",
      language: "English, Hindi, Odia",
      sentAt: "2024-01-15 14:30",
      recipients: 12450,
      opened: 9876,
      priority: "high",
      status: "sent",
    },
    {
      id: 2,
      type: "Vaccination Drive",
      title: "COVID-19 Booster Shot Campaign",
      language: "All Languages",
      sentAt: "2024-01-12 09:00",
      recipients: 45230,
      opened: 38901,
      priority: "medium",
      status: "sent",
    },
    {
      id: 3,
      type: "Health Tips",
      title: "Winter Health Precautions",
      language: "English, Hindi",
      sentAt: "2024-01-10 16:45",
      recipients: 28745,
      opened: 23456,
      priority: "low",
      status: "sent",
    },
    {
      id: 4,
      type: "Emergency Notice",
      title: "Hospital Emergency Services Update",
      language: "Odia, Bengali",
      sentAt: "2024-01-08 11:20",
      recipients: 15678,
      opened: 14234,
      priority: "high",
      status: "sent",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30";
      case "medium":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30";
      case "low":
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30";
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30";
    }
  };

  const handleSendAlert = () => {
    if (!alertMessage.trim()) {
      alert("Please enter an alert message");
      return;
    }
    // In a real app, this would send the alert via API
    alert("Alert sent successfully!");
    setAlertMessage("");
  };

  const AlertCreationForm = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Create New Alert
      </h3>

      {/* Alert Type Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Alert Type
        </label>
        <div className="grid grid-cols-2 gap-3">
          {alertTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedAlertType(type.id)}
              className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                selectedAlertType === type.id
                  ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20"
                  : "border-gray-300 dark:border-gray-600 hover:border-cyan-300 dark:hover:border-cyan-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{type.icon}</span>
                <span
                  className={`text-sm font-medium ${selectedAlertType === type.id ? type.color : "text-gray-700 dark:text-gray-300"}`}
                >
                  {type.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Language
        </label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        >
          {languages.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Priority Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Priority Level
        </label>
        <div className="flex space-x-3">
          {["low", "medium", "high"].map((level) => (
            <button
              key={level}
              onClick={() => setPriority(level)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                priority === level
                  ? getPriorityColor(level)
                      .replace("text-", "bg-")
                      .replace("dark:text-", "dark:bg-")
                      .replace("bg-", "text-white bg-")
                  : "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Alert Message
        </label>
        <textarea
          value={alertMessage}
          onChange={(e) => setAlertMessage(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          placeholder="Enter your health alert message here..."
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {alertMessage.length}/500 characters
        </p>
      </div>

      {/* Send Button */}
      <button
        onClick={handleSendAlert}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
      >
        Send Alert
      </button>
    </div>
  );

  const AlertPreview = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Alert Preview
      </h3>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">HS</span>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              HealthSakhi
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Official Health Alert
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xl">
              {alertTypes.find((type) => type.id === selectedAlertType)?.icon}
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {alertTypes.find((type) => type.id === selectedAlertType)?.label}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}
            >
              {priority.toUpperCase()}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {alertMessage || "Your alert message will appear here..."}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>
              Language:{" "}
              {languages.find((lang) => lang.id === selectedLanguage)?.flag}{" "}
              {languages.find((lang) => lang.id === selectedLanguage)?.label}
            </span>
            <span>Now</span>
          </div>
        </div>
      </div>
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">
          Delivery Info
        </h4>
        <p className="text-sm text-blue-600 dark:text-blue-300">
          This alert will be sent to all registered users who have selected{" "}
          {languages.find((lang) => lang.id === selectedLanguage)?.label} as
          their preferred language.
        </p>
      </div>
    </div>
  );

  const AlertHistory = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Alert History
        </h3>
        <button className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                Alert
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                Language
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                Sent
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                Recipients
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                Engagement
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            {alertHistory.map((alert) => (
              <tr
                key={alert.id}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {alert.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {alert.type}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm">
                  {alert.language}
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm">
                  {alert.sentAt}
                </td>
                <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                  {alert.recipients.toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        style={{
                          width: `${(alert.opened / alert.recipients) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {Math.round((alert.opened / alert.recipients) * 100)}%
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(alert.priority)}`}
                  >
                    {alert.priority.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Health Alert Center
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create and manage health alerts for communities across Odisha
        </p>
      </div>

      {/* Alert Creation and Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AlertCreationForm />
        <AlertPreview />
      </div>

      {/* Alert History */}
      <AlertHistory />
    </div>
  );
};

export default AlertsPage;
