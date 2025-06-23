'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Meaza Mesene',
    'hero.title': 'International Culinary Expert',
    'hero.subtitle': 'Passionate chef with 11+ years of experience in luxury hotels and resorts worldwide',
    'hero.cta.resume': 'Download Resume',
    'hero.cta.contact': 'Get in Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Culinary Journey & Passion',
    'about.description': 'With over 15 years of experience in international culinary arts, I have dedicated my career to creating exceptional dining experiences in luxury hotels and resorts across the globe. My passion for cooking began in my grandmother\'s kitchen and has evolved into a professional journey that spans multiple continents and cuisines.',
    'about.mission': 'My mission is to blend traditional techniques with modern innovation, creating memorable culinary experiences that celebrate both local ingredients and international flavors.',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'Career Highlights',
    
    // Skills Section
    'skills.title': 'Culinary Expertise',
    'skills.subtitle': 'Skills & Specializations',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Signature Creations',
    
    // Achievements Section
    'achievements.title': 'Awards & Recognition',
    'achievements.subtitle': 'Professional Accomplishments',
    
    // Testimonials Section
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What Others Say',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s Create Something Amazing Together',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Crafting exceptional culinary experiences worldwide.',
  },
  am: {
    // Navigation (Amharic)
    'nav.home': 'ቤት',
    'nav.about': 'ስለ እኔ',
    'nav.experience': 'ልምድ',
    'nav.skills': 'ክህሎቶች',
    'nav.portfolio': 'ስራዎች',
    'nav.achievements': 'ስኬቶች',
    'nav.contact': 'ግንኙነት',
    
    // Hero Section (Amharic)
    'hero.greeting': 'ሰላም፣ እኔ',
    'hero.name': 'መአዛ መሰኔ',
    'hero.title': 'ዓለም አቀፍ የምግብ ዝግጅት ባለሙያ',
    'hero.subtitle': 'በዓለም ዙሪያ በሚገኙ የቅንጦት ሆቴሎች እና ሪዞርቶች ውስጥ ከ15+ ዓመታት በላይ ልምድ ያለው ጠበቃ ሼፍ',
    'hero.cta.resume': 'ሪዙሜ አውርድ',
    'hero.cta.contact': 'አግኙኝ',
    
    // About Section (Amharic)
    'about.title': 'ስለ እኔ',
    'about.subtitle': 'የምግብ ዝግጅት ጉዞ እና ፍቅር',
    'about.description': 'ከ15 ዓመታት በላይ በዓለም አቀፍ የምግብ ዝግጅት ጥበብ ውስጥ ያለኝ ልምድ፣ ሙያዬን በዓለም ዙሪያ በሚገኙ የቅንጦት ሆቴሎች እና ሪዞርቶች ውስጥ ልዩ የመመገቢያ ተሞክሮዎችን ለመፍጠር ሰጥቼአለሁ። የምግብ ዝግጅት ፍቅሬ በእናቴ አያቴ ወላጅ ቤተ ሙከራ ውስጥ ጀምሮ ወደ ብዙ አህጉራት እና ምግቦችን የሚሸፍን ሙያዊ ጉዞ ሆኗል።',
    'about.mission': 'ተልእኮዬ ባለ ፈጠራ ሜቶዶችን በቀላል ቴክኒኮች ማቀላቀል፣ አገር በቀል ንጥረ ነገሮችን እና ዓለም አቀፍ ቀመሞችን የሚያከብሩ የማይረሱ የምግብ ዝግጅት ተሞክሮዎችን መፍጠር ነው።',
    
    // Experience Section (Amharic)
    'experience.title': 'ሙያዊ ልምድ',
    'experience.subtitle': 'የሙያ ጉዞ ዋና ዋና ነጥቦች',
    
    // Skills Section (Amharic)
    'skills.title': 'የምግብ ዝግጅት ባለሙያነት',
    'skills.subtitle': 'ክህሎቶች እና ስፔሻላይዜሽኖች',
    
    // Portfolio Section (Amharic)
    'portfolio.title': 'የስራ ናሙና',
    'portfolio.subtitle': 'ተለይተው የተዘጋጁ ስራዎች',
    
    // Achievements Section (Amharic)
    'achievements.title': 'ሽልማቶች እና እውቅና',
    'achievements.subtitle': 'ሙያዊ ስኬቶች',
    
    // Testimonials Section (Amharic)
    'testimonials.title': 'ምስክርነ',
    'testimonials.subtitle': 'ሌሎች የሚሉት',
    
    // Contact Section (Amharic)
    'contact.title': 'ያግኙኝ',
    'contact.subtitle': 'አስደናቂ ነገር በጋራ እንፍጠር',
    'contact.form.name': 'ስምዎ',
    'contact.form.email': 'ኢሜይል አድራሻ',
    'contact.form.subject': 'ርዕስ',
    'contact.form.message': 'መልእክት',
    'contact.form.send': 'መልእክት ላክ',
    
    // Footer (Amharic)
    'footer.rights': 'ሁሉም መብቶች የተጠበቁ ናቸው።',
    'footer.tagline': 'በዓለም ዙሪያ ልዩ የምግብ ዝግጅት ተሞክሮዎችን መፍጠር።',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}