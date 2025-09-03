// Mock data for HealthSakhi Dashboard

export const statsData = [
  {
    id: 'users',
    title: 'Active Users',
    value: 12847,
    change: '+12.5%',
    trend: 'up',
    icon: 'users',
    color: 'blue',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
  },
  {
    id: 'messages',
    title: 'Messages Today',
    value: 3452,
    change: '+8.2%',
    trend: 'up',
    icon: 'message-circle',
    color: 'green',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
  },
  {
    id: 'emergencies',
    title: 'Emergency Alerts',
    value: 23,
    change: '-5.1%',
    trend: 'down',
    icon: 'alert-triangle',
    color: 'red',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
  },
  {
    id: 'accuracy',
    title: 'Response Accuracy',
    value: '94.7%',
    change: '+2.3%',
    trend: 'up',
    icon: 'target',
    color: 'purple',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
  }
];

export const conversationData = [
  {
    id: 'conv_001',
    user: {
      name: 'Priya Sharma',
      phone: '+91 98765 43210',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Bhubaneswar, Odisha'
    },
    language: 'or',
    status: 'active',
    urgency: 'high',
    lastMessage: 'ମୋର ପିଲାଙ୍କର ଜ୍ୱର ଆସୁଛି',
    botResponse: 'ଦୟାକରି ଆପଣଙ୍କ ଶିଶୁର ତାପମାତ୍ରା ମାପନ୍ତୁ',
    timestamp: new Date(Date.now() - 300000),
    messageCount: 12,
    resolved: false
  },
  {
    id: 'conv_002',
    user: {
      name: 'Rajesh Kumar',
      phone: '+91 98765 43211',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Patna, Bihar'
    },
    language: 'hi',
    status: 'active',
    urgency: 'medium',
    lastMessage: 'मुझे सिरदर्द हो रहा है',
    botResponse: 'क्या आपको बुखार भी है? कृपया अपना तापमान चेक करें।',
    timestamp: new Date(Date.now() - 600000),
    messageCount: 8,
    resolved: false
  },
  {
    id: 'conv_003',
    user: {
      name: 'Fatima Begum',
      phone: '+91 98765 43212',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Dhaka, Bangladesh'
    },
    language: 'bn',
    status: 'waiting',
    urgency: 'low',
    lastMessage: 'আমার পেটে ব্যথা হচ্ছে',
    botResponse: 'কখন থেকে এই ব্যথা শুরু হয়েছে? আপনি কি কিছু খেয়েছেন?',
    timestamp: new Date(Date.now() - 900000),
    messageCount: 5,
    resolved: false
  },
  {
    id: 'conv_004',
    user: {
      name: 'John Smith',
      phone: '+91 98765 43213',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Mumbai, Maharashtra'
    },
    language: 'en',
    status: 'resolved',
    urgency: 'medium',
    lastMessage: 'Thank you for the help with my vaccination schedule',
    botResponse: 'You\'re welcome! Remember to get your booster shot in 6 months.',
    timestamp: new Date(Date.now() - 1200000),
    messageCount: 15,
    resolved: true
  },
  {
    id: 'conv_005',
    user: {
      name: 'Sunita Devi',
      phone: '+91 98765 43214',
      avatar: 'https://images.pexels.com/photos/774091/pexels-photo-774091.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      location: 'Lucknow, Uttar Pradesh'
    },
    language: 'hi',
    status: 'active',
    urgency: 'high',
    lastMessage: 'मेरी माँ को सांस लेने में तकलीफ हो रही है',
    botResponse: 'यह गंभीर है। तुरंत नजदीकी अस्पताल जाएं। क्या आप 108 पर कॉल कर सकते हैं?',
    timestamp: new Date(Date.now() - 120000),
    messageCount: 3,
    resolved: false
  }
];

export const chartData = {
  healthTrends: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Health Queries',
      data: [1200, 1900, 3000, 5000, 2000, 3000],
      borderColor: '#00D4B4',
      backgroundColor: 'rgba(0, 212, 180, 0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  languageUsage: {
    labels: ['English', 'Hindi', 'Odia', 'Bengali'],
    datasets: [{
      data: [35, 28, 25, 12],
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
      borderWidth: 0
    }]
  },
  queryFrequency: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Queries',
      data: [450, 520, 380, 690, 450, 320, 280],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderRadius: 8
    }]
  },
  demographics: {
    labels: ['18-25', '26-35', '36-45', '46-60', '60+'],
    datasets: [{
      data: [22, 35, 28, 12, 3],
      backgroundColor: ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
      borderWidth: 0
    }]
  }
};

export const recentActivity = [
  {
    id: 1,
    type: 'conversation',
    message: 'New high-priority conversation from Priya Sharma',
    timestamp: new Date(Date.now() - 300000),
    severity: 'high'
  },
  {
    id: 2,
    type: 'alert',
    message: 'Health alert broadcasted to 2,500 users in Odisha',
    timestamp: new Date(Date.now() - 600000),
    severity: 'medium'
  },
  {
    id: 3,
    type: 'system',
    message: 'System accuracy improved to 94.7%',
    timestamp: new Date(Date.now() - 900000),
    severity: 'low'
  },
  {
    id: 4,
    type: 'conversation',
    message: 'Emergency intervention required for patient in Bihar',
    timestamp: new Date(Date.now() - 1200000),
    severity: 'high'
  }
];

export const alertTypes = [
  { id: 'outbreak', name: 'Disease Outbreak', color: '#EF4444' },
  { id: 'vaccination', name: 'Vaccination Drive', color: '#3B82F6' },
  { id: 'tips', name: 'Health Tips', color: '#10B981' },
  { id: 'emergency', name: 'Emergency Alert', color: '#F59E0B' }
];

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }
];