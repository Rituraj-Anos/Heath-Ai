const AnalyticsPage = () => {
  const keyMetrics = [
    {
      title: "Total Queries",
      value: "45,231",
      change: "+15.2%",
      trend: "up",
      icon: "💬",
    },
    {
      title: "Avg Response Time",
      value: "2.3s",
      change: "-8.1%",
      trend: "down",
      icon: "⚡",
    },
    {
      title: "User Satisfaction",
      value: "4.8/5",
      change: "+5.2%",
      trend: "up",
      icon: "⭐",
    },
    {
      title: "Emergency Escalations",
      value: "127",
      change: "+12.1%",
      trend: "up",
      icon: "🚨",
    },
  ];

  const demographicsData = [
    { category: "Age 18-30", percentage: 35, color: "bg-cyan-500" },
    { category: "Age 31-45", percentage: 28, color: "bg-blue-500" },
    { category: "Age 46-60", percentage: 22, color: "bg-indigo-500" },
    { category: "Age 60+", percentage: 15, color: "bg-purple-500" },
  ];

  const queryCategories = [
    { category: "General Health", count: 12450, color: "bg-green-500" },
    { category: "Emergency", count: 8230, color: "bg-red-500" },
    { category: "Maternal Care", count: 7890, color: "bg-pink-500" },
    { category: "Child Health", count: 6780, color: "bg-yellow-500" },
    { category: "Mental Health", count: 5640, color: "bg-blue-500" },
    { category: "Vaccination", count: 4241, color: "bg-purple-500" },
  ];

  const topPerformingRegions = [
    { region: "Bhubaneswar", queries: 8945, satisfaction: 4.9 },
    { region: "Cuttack", queries: 7234, satisfaction: 4.8 },
    { region: "Puri", queries: 6789, satisfaction: 4.7 },
    { region: "Berhampur", queries: 5432, satisfaction: 4.6 },
    { region: "Sambalpur", queries: 4567, satisfaction: 4.5 },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive insights into HealthSakhi chatbot performance and user
          engagement
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {keyMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{metric.icon}</span>
              <span
                className={`text-sm font-semibold ${
                  metric.trend === "up"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {metric.title}
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* User Demographics */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            User Demographics
          </h3>
          <div className="space-y-4">
            {demographicsData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Query Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Query Categories
          </h3>
          <div className="space-y-3">
            {queryCategories.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.category}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance by Region */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Top Performing Regions
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                  Region
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                  Total Queries
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                  Satisfaction
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody>
              {topPerformingRegions.map((region, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                    {region.region}
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {region.queries.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        {region.satisfaction}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                          style={{
                            width: `${(region.satisfaction / 5) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {Math.round((region.satisfaction / 5) * 100)}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
