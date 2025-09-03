import { useState } from "react";
import { motion } from "motion/react";
import { 
  Filter, 
  Search, 
  MessageCircle, 
  Clock, 
  MapPin,
  Phone,
  MoreHorizontal,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";
import { conversationData, languages } from "../data/mockData";
import useLanguageStore from "../stores/languageStore";

const urgencyColors = {
  high: 'bg-red-500',
  medium: 'bg-orange-500', 
  low: 'bg-blue-500'
};

const statusColors = {
  active: 'bg-green-500',
  waiting: 'bg-yellow-500',
  resolved: 'bg-gray-500'
};

function formatTimestamp(timestamp) {
  const now = new Date();
  const diffInMinutes = Math.floor((now - timestamp) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
}

export default function Conversations() {
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [filterUrgency, setFilterUrgency] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguageStore();

  const filteredConversations = conversationData.filter(conv => {
    const matchesLanguage = filterLanguage === 'all' || conv.language === filterLanguage;
    const matchesUrgency = filterUrgency === 'all' || conv.urgency === filterUrgency;
    const matchesSearch = searchTerm === '' || 
      conv.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesLanguage && matchesUrgency && matchesSearch;
  });

  const handleAction = (conversationId, action) => {
    console.log(`${action} conversation ${conversationId}`);
    // Here you would implement the actual action logic
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-6 lg:p-8"
    >
      {/* Header with Filters */}
      <div className="mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
              {t('conversations.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Monitor and manage real-time health conversations
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">{filteredConversations.length} Active</span>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations, users, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00D4B4] focus:border-transparent"
            />
          </div>

          <select
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00D4B4] focus:border-transparent"
          >
            <option value="all">All Languages</option>
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>

          <select
            value={filterUrgency}
            onChange={(e) => setFilterUrgency(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#00D4B4] focus:border-transparent"
          >
            <option value="all">All Urgency</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Conversations List */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredConversations.map((conversation, index) => (
          <motion.div
            key={conversation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-[#1E1E1E] rounded-xl border border-[#E4E4E4] dark:border-[#333333] p-6 hover:shadow-lg transition-shadow duration-200"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {conversation.user.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin size={14} />
                    <span>{conversation.user.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${urgencyColors[conversation.urgency]}`}></div>
                <div className={`w-3 h-3 rounded-full ${statusColors[conversation.status]}`}></div>
              </div>
            </div>

            {/* Language Badge */}
            <div className="mb-3">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                {languages.find(lang => lang.code === conversation.language)?.name || conversation.language}
              </span>
            </div>

            {/* Messages */}
            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">User:</p>
                <p className="text-sm text-gray-900 dark:text-white">{conversation.lastMessage}</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm text-blue-700 dark:text-blue-400 font-medium mb-1">HealthSakhi:</p>
                <p className="text-sm text-gray-900 dark:text-white">{conversation.botResponse}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{formatTimestamp(conversation.timestamp)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={12} />
                  <span>{conversation.messageCount} messages</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAction(conversation.id, 'intervene')}
                  className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-lg text-xs font-medium hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors duration-150"
                >
                  {t('conversations.actions.intervene')}
                </button>
                <button
                  onClick={() => handleAction(conversation.id, 'escalate')}
                  className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-xs font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-150"
                >
                  {t('conversations.actions.escalate')}
                </button>
                {!conversation.resolved && (
                  <button
                    onClick={() => handleAction(conversation.id, 'resolve')}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-150"
                  >
                    {t('conversations.actions.resolve')}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredConversations.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No conversations found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search terms</p>
        </div>
      )}
    </motion.div>
  );
}