import { motion } from "motion/react";
import { 
  Bell, 
  BarChart3, 
  Users, 
  MessageCircle,
  ArrowRight,
  Activity
} from "lucide-react";
import useLanguageStore from "../../stores/languageStore";

export default function QuickActions({ onPageChange }) {
  const { t } = useLanguageStore();

  const actions = [
    {
      id: 'broadcast',
      title: t('dashboard.actions.broadcastAlert'),
      description: 'Send health alerts to targeted users',
      icon: Bell,
      color: 'from-red-500 to-pink-500',
      onClick: () => onPageChange('Alerts')
    },
    {
      id: 'reports',
      title: t('dashboard.actions.viewReports'),
      description: 'Analyze health trends and patterns',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      onClick: () => onPageChange('Analytics')
    },
    {
      id: 'users',
      title: t('dashboard.actions.manageUsers'),
      description: 'Monitor active conversations',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      onClick: () => onPageChange('Users')
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E4E4E4] dark:border-[#333333] p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-[#00D4B4] to-[#2563EB] rounded-lg flex items-center justify-center">
          <Activity size={18} className="text-white" />
        </div>
        <h3 className="text-lg font-semibold text-black dark:text-white font-inter">
          Quick Actions
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          
          return (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={action.onClick}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-left transition-all duration-200 hover:shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Background Gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={24} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white">
                  {action.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {action.description}
                </p>
                
                {/* Arrow */}
                <div className="flex items-center text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                  <span className="text-xs font-medium mr-2">Go to {action.title.split(' ')[0]}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Recent Activity Indicator */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              System actively monitoring 12,847 users
            </span>
          </div>
          <button 
            onClick={() => onPageChange('Conversations')}
            className="text-sm text-[#00D4B4] hover:text-[#00B59F] transition-colors duration-150 font-medium"
          >
            View Live Feed
          </button>
        </div>
      </div>
    </motion.div>
  );
}