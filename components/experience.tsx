'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  MapPin, 
  Calendar,
  Star,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Executive Chef",
      company: "The Ritz-Carlton Dubai",
      location: "Dubai, UAE",
      duration: "2020 - Present",
      type: "Full-time",
      description: "Leading a team of 45+ culinary professionals across 6 restaurants and banquet operations. Responsible for menu development, cost control, and maintaining Michelin-starred standards.",
      achievements: [
        "Increased restaurant revenue by 35% through innovative menu design",
        "Achieved 95% customer satisfaction rating",
        "Mentored 20+ junior chefs to senior positions",
        "Implemented sustainable sourcing practices"
      ],
      skills: ["Team Leadership", "Menu Development", "Cost Control", "Quality Assurance"],
      image: "https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Senior Sous Chef",
      company: "Four Seasons Resort Maldives",
      location: "Maldives",
      duration: "2017 - 2020",
      type: "Full-time",
      description: "Managed multiple dining venues including overwater restaurants and private dining experiences. Specialized in fusion cuisine combining Asian and Mediterranean flavors.",
      achievements: [
        "Launched signature tasting menu featured in Conde Nast",
        "Managed kitchen operations for 300+ guests daily",
        "Developed sustainable seafood sourcing program",
        "Trained local staff in advanced culinary techniques"
      ],
      skills: ["Fusion Cuisine", "Seafood Specialization", "Staff Training", "Event Management"],
      image: "https://images.pexels.com/photos/3298641/pexels-photo-3298641.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Chef de Cuisine",
      company: "Le Bernardin New York",
      location: "New York, USA",
      duration: "2014 - 2017",
      type: "Full-time",
      description: "Worked under renowned Chef Eric Ripert at this 3-Michelin starred restaurant. Specialized in contemporary French seafood cuisine and maintained the highest culinary standards.",
      achievements: [
        "Contributed to maintaining 3-Michelin star rating",
        "Led lunch service team of 15 chefs",
        "Developed seasonal menu items featuring sustainable fish",
        "Participated in James Beard Foundation events"
      ],
      skills: ["French Cuisine", "Precision Cooking", "Seafood Mastery", "Fine Dining"],
      image: "https://images.pexels.com/photos/3298638/pexels-photo-3298638.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Junior Sous Chef",
      company: "The Langham London",
      location: "London, UK",
      duration: "2011 - 2014",
      type: "Full-time",
      description: "Developed expertise in classical European cuisine while managing pastry and main kitchen operations. Gained experience in high-volume luxury hotel dining.",
      achievements: [
        "Assisted in earning AA Rosette recognition",
        "Managed afternoon tea service for 200+ guests daily",
        "Developed artisanal bread program",
        "Led kitchen efficiency improvements"
      ],
      skills: ["European Cuisine", "Pastry Arts", "Volume Production", "Quality Systems"],
      image: "https://images.pexels.com/photos/3298640/pexels-photo-3298640.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Chef de Partie",
      company: "Restaurant Le Bernardin (Training)",
      location: "Paris, France",
      duration: "2008 - 2011",
      type: "Apprenticeship",
      description: "Completed comprehensive culinary training program, rotating through all kitchen stations. Gained foundational expertise in classical French cooking techniques.",
      achievements: [
        "Completed advanced French culinary certification",
        "Mastered all fundamental cooking techniques",
        "Worked with Michelin-starred chefs",
        "Developed passion for seafood preparation"
      ],
      skills: ["Classical French", "Fundamental Techniques", "Sauce Making", "Butchery"],
      image: "https://images.pexels.com/photos/3298639/pexels-photo-3298639.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6"
          >
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 items-center ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-background shadow-lg z-10" />
                
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600 mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Star className="w-3 h-3 text-amber-500 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Core Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Image */}
                <div className={`mt-6 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1 lg:row-start-1'}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={exp.image}
                      alt={`${exp.title} at ${exp.company}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Floating stats */}
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-xl p-3 shadow-lg"
                    >
                      <div className="text-center">
                        <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-xs text-muted-foreground">Team Size</div>
                        <div className="text-lg font-bold text-blue-600">
                          {index === 0 ? '45+' : index === 1 ? '30+' : index === 2 ? '15+' : index === 3 ? '25+' : '12+'}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Career stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto" />
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <Users className="w-8 h-8 text-purple-600 mx-auto" />
            <div className="text-3xl font-bold text-purple-600">150+</div>
            <div className="text-sm text-muted-foreground">Team Members Led</div>
          </div>
          <div className="space-y-2">
            <Award className="w-8 h-8 text-amber-600 mx-auto" />
            <div className="text-3xl font-bold text-amber-600">12</div>
            <div className="text-sm text-muted-foreground">Industry Awards</div>
          </div>
          <div className="space-y-2">
            <Star className="w-8 h-8 text-green-600 mx-auto" />
            <div className="text-3xl font-bold text-green-600">5</div>
            <div className="text-sm text-muted-foreground">Michelin Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;