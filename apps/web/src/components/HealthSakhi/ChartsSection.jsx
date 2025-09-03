import { motion } from "motion/react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { chartData } from "../../data/mockData";
import useLanguageStore from "../../stores/languageStore";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export default function ChartsSection() {
  const { t } = useLanguageStore();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {/* Health Trends Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:col-span-2 xl:col-span-2"
      >
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E4E4E4] dark:border-[#333333] p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-black dark:text-white font-inter">
              {t('dashboard.charts.healthTrends')}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00D4B4] rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Health Queries</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData.healthTrends.labels.map((label, index) => ({
                name: label,
                value: chartData.healthTrends.datasets[0].data[index]
              }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" className="dark:stroke-gray-600" />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280" 
                  className="dark:stroke-gray-400"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280" 
                  className="dark:stroke-gray-400"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#00D4B4" 
                  strokeWidth={3}
                  dot={{ fill: '#00D4B4', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#00D4B4', strokeWidth: 2, fill: '#ffffff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Language Usage Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E4E4E4] dark:border-[#333333] p-6">
          <h3 className="text-lg font-semibold text-black dark:text-white font-inter mb-6">
            {t('dashboard.charts.languageUsage')}
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData.languageUsage.labels.map((label, index) => ({
                    name: label,
                    value: chartData.languageUsage.datasets[0].data[index]
                  }))}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.languageUsage.datasets[0].backgroundColor.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Query Frequency Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="lg:col-span-2 xl:col-span-3"
      >
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E4E4E4] dark:border-[#333333] p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-black dark:text-white font-inter">
              {t('dashboard.charts.queryFrequency')}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#3B82F6] rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Daily Queries</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData.queryFrequency.labels.map((label, index) => ({
                name: label,
                value: chartData.queryFrequency.datasets[0].data[index]
              }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" className="dark:stroke-gray-600" />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280" 
                  className="dark:stroke-gray-400"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280" 
                  className="dark:stroke-gray-400"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value" 
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </div>
  );
}