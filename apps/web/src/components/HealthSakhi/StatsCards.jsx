import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  MessageCircle, 
  AlertTriangle, 
  Target,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { statsData } from "../../data/mockData";
import useLanguageStore from "../../stores/languageStore";

const iconMap = {
  'users': Users,
  'message-circle': MessageCircle,
  'alert-triangle': AlertTriangle,
  'target': Target
};

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const endValue = typeof end === 'string' ? parseFloat(end) : end;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(endValue * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{typeof end === 'string' && end.includes('%') ? `${count}%` : count.toLocaleString()}</span>;
}

export default function StatsCards() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { t } = useLanguageStore();

  const translatedStats = statsData.map(stat => ({
    ...stat,
    title: t(`dashboard.stats.${stat.id === 'users' ? 'activeUsers' : 
              stat.id === 'messages' ? 'messagesToday' :
              stat.id === 'emergencies' ? 'emergencyAlerts' :
              'responseAccuracy'}`)
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
      {translatedStats.map((stat, index) => {
        const Icon = iconMap[stat.icon];
        const isHovered = hoveredCard === stat.id;
        
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
            }}
            onMouseEnter={() => setHoveredCard(stat.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative overflow-hidden"
          >
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E4E4E4] dark:border-[#333333] p-6 transition-all duration-200 cursor-pointer">
              {/* Background Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-5 transition-opacity duration-300 rounded-xl"
                style={{ background: stat.gradient }}
              />
              
              {/* Icon and Title Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: isHovered ? stat.gradient : `${stat.gradient}20` }}
                  >
                    <Icon 
                      size={24} 
                      className={`transition-colors duration-200 ${
                        isHovered ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 font-inter">
                      {stat.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Main Value */}
              <div className="mb-3">
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white font-sora tracking-tight">
                  <AnimatedCounter end={stat.value} />
                </div>
              </div>

              {/* Change Indicator */}
              <div className="flex items-center gap-2">
                <div 
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                      : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  <span>{stat.change}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">vs last month</span>
              </div>

              {/* Sparkline Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-20" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}