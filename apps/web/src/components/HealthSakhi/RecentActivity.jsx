import { motion } from "motion/react";
import { 
  MessageCircle, 
  Bell, 
  Activity, 
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";
import { recentActivity } from "../../data/mockData";

const activityIcons = {
  conversation: MessageCircle,
  alert: Bell,
  system: Activity,
  emergency: AlertTriangle
};

const severityStyles = {
  high: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
  medium: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
  low: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800'
};

function formatTimestamp(timestamp) {
  const now = new Date();
  const diffInMinutes = Math.floor((now - timestamp) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
}

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E4E4E4] dark:border-[#333333] p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[#00D4B4] to-[#2563EB] rounded-lg flex items-center justify-center">
            <Activity size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-black dark:text-white font-inter">
            Recent Activity
          </h3>
        </div>
        <button className="text-sm text-[#00D4B4] hover:text-[#00B59F] transition-colors duration-150 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentActivity.map((activity, index) => {
          const Icon = activityIcons[activity.type];
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg border ${severityStyles[activity.severity]} flex items-center justify-center`}>
                <Icon size={18} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed">
                  {activity.message}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {formatTimestamp(activity.timestamp)}
                    </span>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${severityStyles[activity.severity]}`}>
                    {activity.severity === 'high' ? 'High Priority' : 
                     activity.severity === 'medium' ? 'Medium Priority' : 
                     'Low Priority'}
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex-shrink-0">
                {activity.severity === 'high' ? (
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                ) : (
                  <CheckCircle size={16} className="text-green-500" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="mt-6 text-center">
        <button className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150 text-sm font-medium">
          Load More Activity
        </button>
      </div>
    </motion.div>
  );
}