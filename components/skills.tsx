'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat,
  Globe,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Utensils,
  Coffee
} from 'lucide-react';

const Skills = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: "French Cuisine", level: 95, icon: "🇫🇷", color: "bg-blue-500" },
    { name: "Mediterranean", level: 90, icon: "🫒", color: "bg-green-500" },
    { name: "Asian Fusion", level: 85, icon: "🥢", color: "bg-red-500" },
    { name: "Seafood Specialization", level: 98, icon: "🐟", color: "bg-cyan-500" },
    { name: "Pastry & Desserts", level: 80, icon: "🧁", color: "bg-pink-500" },
    { name: "Molecular Gastronomy", level: 75, icon: "⚗️", color: "bg-purple-500" },
    { name: "Farm-to-Table", level: 88, icon: "🌱", color: "bg-green-600" },
    { name: "Wine Pairing", level: 82, icon: "🍷", color: "bg-red-600" }
  ];

  const managementSkills = [
    { name: "Team Leadership", level: 95 },
    { name: "Menu Development", level: 92 },
    { name: "Cost Control", level: 88 },
    { name: "Quality Assurance", level: 96 },
    { name: "Staff Training", level: 90 },
    { name: "Event Management", level: 85 }
  ];

  const certifications = [
    {
      title: "ServSafe Food Protection Manager",
      issuer: "National Restaurant Association",
      year: "2023",
      icon: Award
    },
    {
      title: "HACCP Certification",
      issuer: "International HACCP Alliance",
      year: "2022",
      icon: BookOpen
    },
    {
      title: "Wine & Spirit Education Trust Level 3",
      issuer: "WSET",
      year: "2021",
      icon: Coffee
    },
    {
      title: "Sustainable Seafood Certification",
      issuer: "Marine Stewardship Council",
      year: "2023",
      icon: Globe
    }
  ];

  const cuisineExpertise = [
    { name: "French Classical", years: 15, flag: "🇫🇷" },
    { name: "Mediterranean", years: 12, flag: "🇮🇹" },
    { name: "Japanese", years: 8, flag: "🇯🇵" },
    { name: "Middle Eastern", years: 10, flag: "🇱🇧" },
    { name: "Indian", years: 6, flag: "🇮🇳" },
    { name: "Latin American", years: 9, flag: "🇲🇽" },
    { name: "Thai", years: 7, flag: "🇹🇭" },
    { name: "Modern American", years: 11, flag: "🇺🇸" }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6"
          >
            <Utensils className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Culinary Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ChefHat className="w-8 h-8 text-purple-600" />
                  <h3 className="text-2xl font-bold">Culinary Expertise</h3>
                </div>
                
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={0} className="h-2" />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                          className={`absolute top-0 left-0 h-2 rounded-full ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Management Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold">Leadership & Management</h3>
                </div>
                
                <div className="space-y-6">
                  {managementSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={0} className="h-2" />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    Recent Certifications
                  </h4>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                      >
                        <cert.icon className="w-5 h-5 text-amber-600 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{cert.title}</p>
                          <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Cuisine Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold">International Cuisine Expertise</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {cuisineExpertise.map((cuisine, index) => (
                  <motion.div
                    key={cuisine.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{cuisine.flag}</div>
                    <h4 className="font-semibold text-sm mb-1">{cuisine.name}</h4>
                    <p className="text-xs text-muted-foreground">{cuisine.years} years</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-200/50 dark:border-purple-800/50"
        >
          <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Michelin-Star Standards",
              "International Team Leadership",
              "Menu Innovation",
              "Cost Optimization",
              "Sustainable Practices",
              "Cultural Fusion",
              "Fine Dining Excellence",
              "Training & Development"
            ].map((competency, index) => (
              <motion.div
                key={competency}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-all duration-300"
                >
                  {competency}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;