'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Camera,
  ExternalLink,
  Filter,
  Star,
  MapPin,
  Calendar,
  Eye,
  Heart
} from 'lucide-react';





interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  date: string;
  tags: string[];
  stats: { views: number; likes: number };
}

const Portfolio = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  // const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'signature', name: 'Signature Dishes' },
    { id: 'events', name: 'Special Events' },
    { id: 'desserts', name: 'Pastry & Desserts' },
    { id: 'presentations', name: 'Food Styling' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Traditional Fusion · Banquet · Fine Dining",
      category: "signature",
      description: "A modern reinterpretation of Ethiopian classics, integrating international plating and serving styles",
      // image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
      image: '/images/7.png',
      location: "Haile Resort – Hawassa",
      date: "2023",
      tags: [ "traditional", "Fine Dining"],
      stats: { views: 1250, likes: 89 }
    },
    {
      id: 2,
      title: "Food Safety · Training · Operational Menu Design",
      category: "In-House HACCP Training",
      description: "Designed a clean-menu production system for a training program. Dishes were created for safe handling, low-risk storage, and balanced nutrition.",
      image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Haile Resort – Hawassa",
      date: "2024",
      tags: [ "Tasting Menu", "Menu Design"],
      stats: { views: 2100, likes: 156 }
    },
    {
      id: 3,
      title: "Healthy Local Ingredients Showcase",
      category: "Farm-to-Kitchen Initiative",
      description: "Created balanced dishes using only locally sourced produce, demonstrating the nutritional and flavor potential of Ethiopian-grown ingredients.",
      // image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
            image: '/images/5.png',
      location: "Haile Hotels – Internal Chef Challenge",
      date: "2022",
      tags: ["Farm-to-Table · Nutrition · Sustainability"],
      stats: { views: 3500, likes: 210 }
    },
    {
      id: 4,
      title: "Holiday Special Buffet Setup",
      category: "High Volume · Buffet · Hygiene Control",
      description: "Led the preparation, team organization, and presentation of a holiday buffet service for 300+ guests, ensuring food safety compliance and high satisfaction.",
      image: '/images/6.png',
      location: "Haile Resort – Hawassa",
      date: "2021-present",
      tags: ["Christmas/New Year Celebration Buffet"],
      stats: { views: 1800, likes: 134 }
    },
    // {
    //   id: 5,
    //   title: "Michelin Presentation Workshop",
    //   category: "presentations",
    //   description: "Food styling and presentation techniques for Michelin-starred establishments",
    //   image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   location: "Culinary Institute",
    //   date: "2023",
    //   tags: ["Education", "Presentation", "Michelin"],
    //   stats: { views: 950, likes: 78 }
    // },
    // {
    //   id: 6,
    //   title: "Asian Fusion Tasting",
    //   category: "signature",
    //   description: "Contemporary Asian dishes blending Japanese, Thai, and Chinese influences",
    //   // image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
    //         image: '/images/7.png',

    //   location: "Four Seasons Maldives",
    //   date: "2022",
    //   tags: ["Asian Fusion", "Innovation", "Seasonal"],
    //   stats: { views: 1650, likes: 112 }
    // },
    // {
    //   id: 7,
    //   title: "CEO Dinner Experience",
    //   category: "events",
    //   description: "Exclusive 12-course dining experience for Fortune 500 executives",
    //   // image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   image: '/images/6.png',
    //   location: "The Ritz-Carlton Dubai",
    //   date: "2023",
    //   tags: ["Executive", "Private Dining", "Premium"],
    //   stats: { views: 2250, likes: 178 }
    // },
    // {
    //   id: 8,
    //   title: "Artisan Pastry Collection",
    //   category: "desserts",
    //   description: "Handcrafted pastries showcasing traditional French techniques with modern flair",
    //   image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   location: "The Langham London",
    //   date: "2021",
    //   tags: ["French Pastry", "Artisan", "Traditional"],
    //   stats: { views: 1400, likes: 95 }
    // }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-600 rounded-full mb-6"
          >
            <Camera className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-rose-500 to-orange-600 text-white"
                  : "hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Card className="overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Stats overlay */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {item.stats.views}
                      </div>
                      <div className="bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        {item.stats.likes}
                      </div>
                    </div>
                    
                    {/* Hover content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 hover:bg-white text-gray-900"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg group-hover:text-rose-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-rose-600">50+</div>
            <div className="text-sm text-muted-foreground">Large-Scale Service Events </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">15+</div>
            <div className="text-sm text-muted-foreground">Food Handlers Trained</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-amber-600">20+</div>
            <div className="text-sm text-muted-foreground">Internal SOPs Followed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">100%</div>
            <div className="text-sm text-muted-foreground">Sanitation Compliance on Record</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;



// todo fixed 



