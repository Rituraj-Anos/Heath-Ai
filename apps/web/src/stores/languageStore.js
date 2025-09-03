import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const translations = {
  en: {
    dashboard: {
      title: "HealthSakhi Dashboard",
      welcome: "Welcome back, Dr. Smith",
      stats: {
        activeUsers: "Active Users",
        messagesToday: "Messages Today", 
        emergencyAlerts: "Emergency Alerts",
        responseAccuracy: "Response Accuracy"
      },
      charts: {
        healthTrends: "Health Query Trends",
        languageUsage: "Language Usage",
        queryFrequency: "Query Frequency"
      },
      actions: {
        broadcastAlert: "Broadcast Alert",
        viewReports: "View Reports",
        manageUsers: "Manage Users"
      }
    },
    conversations: {
      title: "Live Conversations",
      filter: "Filter by",
      urgency: {
        high: "High",
        medium: "Medium", 
        low: "Low"
      },
      actions: {
        intervene: "Intervene",
        escalate: "Escalate",
        resolve: "Resolve"
      }
    },
    alerts: {
      title: "Health Alert Center",
      create: "Create Alert",
      types: {
        outbreak: "Disease Outbreak",
        vaccination: "Vaccination Drive",
        tips: "Health Tips",
        emergency: "Emergency Alert"
      }
    },
    analytics: {
      title: "Analytics Dashboard",
      demographics: "User Demographics",
      patterns: "Query Patterns",
      accuracy: "Response Accuracy"
    },
    common: {
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      loading: "Loading...",
      error: "Error occurred"
    }
  },
  hi: {
    dashboard: {
      title: "हेल्थसाखी डैशबोर्ड",
      welcome: "वापसी पर स्वागत है, डॉ. स्मिथ",
      stats: {
        activeUsers: "सक्रिय उपयोगकर्ता",
        messagesToday: "आज के संदेश",
        emergencyAlerts: "आपातकालीन अलर्ट",
        responseAccuracy: "प्रतिक्रिया सटीकता"
      },
      charts: {
        healthTrends: "स्वास्थ्य प्रश्न रुझान",
        languageUsage: "भाषा उपयोग",
        queryFrequency: "प्रश्न आवृत्ति"
      },
      actions: {
        broadcastAlert: "अलर्ट प्रसारित करें",
        viewReports: "रिपोर्ट देखें",
        manageUsers: "उपयोगकर्ता प्रबंधन"
      }
    },
    conversations: {
      title: "लाइव बातचीत",
      filter: "फिल्टर करें",
      urgency: {
        high: "उच्च",
        medium: "मध्यम",
        low: "कम"
      },
      actions: {
        intervene: "हस्तक्षेप",
        escalate: "बढ़ाना",
        resolve: "हल करना"
      }
    },
    alerts: {
      title: "स्वास्थ्य अलर्ट केंद्र",
      create: "अलर्ट बनाएं",
      types: {
        outbreak: "रोग प्रकोप",
        vaccination: "टीकाकरण अभियान",
        tips: "स्वास्थ्य सुझाव",
        emergency: "आपातकालीन अलर्ट"
      }
    },
    analytics: {
      title: "एनालिटिक्स डैशबोर्ड",
      demographics: "उपयोगकर्ता जनसांख्यिकी",
      patterns: "प्रश्न पैटर्न",
      accuracy: "प्रतिक्रिया सटीकता"
    },
    common: {
      save: "सेव करें",
      cancel: "रद्द करें",
      edit: "संपादित करें",
      delete: "हटाएं",
      loading: "लोड हो रहा है...",
      error: "त्रुटि हुई"
    }
  },
  or: {
    dashboard: {
      title: "ହେଲ୍ଥସାଖୀ ଡ୍ୟାସବୋର୍ଡ",
      welcome: "ସ୍ୱାଗତ, ଡାକ୍ତର ସ୍ମିଥ",
      stats: {
        activeUsers: "ସକ୍ରିୟ ଉପଯୋଗକର୍ତ୍ତା",
        messagesToday: "ଆଜିର ସନ୍ଦେଶ",
        emergencyAlerts: "ଜରୁରୀକାଳୀନ ଚେତାବନୀ",
        responseAccuracy: "ପ୍ରତିକ୍ରିୟା ସଠିକତା"
      },
      charts: {
        healthTrends: "ସ୍ୱାସ୍ଥ୍ୟ ପ୍ରଶ୍ନ ଧାରା",
        languageUsage: "ଭାଷା ବ୍ୟବହାର",
        queryFrequency: "ପ୍ରଶ୍ନ ଆବୃତ୍ତି"
      },
      actions: {
        broadcastAlert: "ଚେତାବନୀ ପ୍ରସାରଣ",
        viewReports: "ରିପୋର୍ଟ ଦେଖନ୍ତୁ",
        manageUsers: "ଉପଯୋଗକର୍ତ୍ତା ପରିଚାଳନା"
      }
    },
    conversations: {
      title: "ଜୀବନ୍ତ କଥାବାର୍ତ୍ତା",
      filter: "ଫିଲ୍ଟର କରନ୍ତୁ",
      urgency: {
        high: "ଉଚ୍ଚ",
        medium: "ମଧ୍ୟମ",
        low: "କମ୍"
      },
      actions: {
        intervene: "ହସ୍ତକ୍ଷେପ",
        escalate: "ବୃଦ୍ଧି",
        resolve: "ସମାଧାନ"
      }
    },
    alerts: {
      title: "ସ୍ୱାସ୍ଥ୍ୟ ଚେତାବନୀ କେନ୍ଦ୍ର",
      create: "ଚେତାବନୀ ସୃଷ୍ଟି କରନ୍ତୁ",
      types: {
        outbreak: "ରୋଗ ପ୍ରକୋପ",
        vaccination: "ଟୀକାକରଣ ଅଭିଯାନ",
        tips: "ସ୍ୱାସ୍ଥ୍ୟ ପରାମର୍ଶ",
        emergency: "ଜରୁରୀକାଳୀନ ଚେତାବନୀ"
      }
    },
    analytics: {
      title: "ବିଶ୍ଳେଷଣ ଡ୍ୟାସବୋର୍ଡ",
      demographics: "ଉପଯୋଗକର୍ତ୍ତା ଜନସଂଖ୍ୟା",
      patterns: "ପ୍ରଶ୍ନ ପଦ୍ଧତି",
      accuracy: "ପ୍ରତିକ୍ରିୟା ସଠିକତା"
    },
    common: {
      save: "ସେଭ୍ କରନ୍ତୁ",
      cancel: "ବାତିଲ",
      edit: "ସମ୍ପାଦନା",
      delete: "ବିଲୋପ",
      loading: "ଲୋଡ୍ ହେଉଛି...",
      error: "ତ୍ରୁଟି ଘଟିଛି"
    }
  },
  bn: {
    dashboard: {
      title: "হেলথসাখী ড্যাশবোর্ড",
      welcome: "স্বাগতম, ডাঃ স্মিথ",
      stats: {
        activeUsers: "সক্রিয় ব্যবহারকারী",
        messagesToday: "আজকের বার্তা",
        emergencyAlerts: "জরুরি সতর্কতা",
        responseAccuracy: "প্রতিক্রিয়া নির্ভুলতা"
      },
      charts: {
        healthTrends: "স্বাস্থ্য প্রশ্ন প্রবণতা",
        languageUsage: "ভাষা ব্যবহার",
        queryFrequency: "প্রশ্ন ফ্রিকোয়েন্সি"
      },
      actions: {
        broadcastAlert: "সতর্কতা প্রচার",
        viewReports: "রিপোর্ট দেখুন",
        manageUsers: "ব্যবহারকারী ব্যবস্থাপনা"
      }
    },
    conversations: {
      title: "লাইভ কথোপকথন",
      filter: "ফিল্টার করুন",
      urgency: {
        high: "উচ্চ",
        medium: "মাঝারি",
        low: "কম"
      },
      actions: {
        intervene: "হস্তক্ষেপ",
        escalate: "বৃদ্ধি",
        resolve: "সমাধান"
      }
    },
    alerts: {
      title: "স্বাস্থ্য সতর্কতা কেন্দ্র",
      create: "সতর্কতা তৈরি করুন",
      types: {
        outbreak: "রোগ প্রাদুর্ভাব",
        vaccination: "টিকাদান প্রচেষ্টা",
        tips: "স্বাস্থ্য পরামর্শ",
        emergency: "জরুরি সতর্কতা"
      }
    },
    analytics: {
      title: "অ্যানালিটিক্স ড্যাশবোর্ড",
      demographics: "ব্যবহারকারী জনতত্ত্ব",
      patterns: "প্রশ্ন প্যাটার্ন",
      accuracy: "প্রতিক্রিয়া নির্ভুলতা"
    },
    common: {
      save: "সংরক্ষণ",
      cancel: "বাতিল",
      edit: "সম্পাদনা",
      delete: "মুছুন",
      loading: "লোড হচ্ছে...",
      error: "ত্রুটি ঘটেছে"
    }
  }
};

const useLanguageStore = create(
  persist(
    (set, get) => ({
      language: 'en',
      translations,
      setLanguage: (language) => set({ language }),
      t: (path) => {
        const keys = path.split('.');
        let value = get().translations[get().language];
        
        for (const key of keys) {
          value = value?.[key];
        }
        
        return value || path;
      }
    }),
    {
      name: 'healthsakhi-language',
    }
  )
);

export default useLanguageStore;