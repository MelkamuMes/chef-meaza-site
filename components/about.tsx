'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Globe, 
  Heart,
  Users,
  TrendingUp,
  ChefHat,
  BookOpen
} from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      institution: "Selam TVET College & Hawassa Polytechnic College",
      degree: "Graduated with 10+4 Diploma in Food Production Supervision",
      year: "2008",
      description: "Advanced French culinary techniques and classical cooking methods"
    },
    // {
    //   institution: "Johnson & Wales University",
    //   degree: "Bachelor's in Culinary Arts Management",
    //   year: "2006",
    //   description: "Business management and culinary leadership"
    // },
    // {
    //   institution: "Instituto Culinario de México",
    //   degree: "Certificate in Latin American Cuisine",
    //   year: "2010",
    //   description: "Traditional and contemporary Latin American cooking"
    // }
  ];

  const personalValues = [
    {
      icon: Heart,
      title: "Passion",
      description: "Dedication to culinary excellence and continuous learning"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong teams and mentoring young chefs"
    },
    {
      icon: Globe,
      title: "Cultural Fusion",
      description: "Pushing culinary boundaries while respecting traditions"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Blending tradition with creative modern cuisine"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20" />
      
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6"
          >
            <ChefHat className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative w-[40vw] h-50">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                 src='/images/maedit3h.png'
                  // src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chef Meaza in kitchen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-200/50 dark:border-amber-800/50">
                <blockquote className="text-foreground italic text-lg">
                  "{t('about.mission')}"
                </blockquote>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  International Cuisine
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  Luxury Hotels
                </Badge>
                <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  Team Leadership
                </Badge>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Menu Development
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                          <Badge variant="outline">{edu.year}</Badge>
                        </div>
                        <p className="text-amber-600 font-medium mb-2">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Values */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Core Values</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {personalValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <value.icon className="w-8 h-8 text-amber-600 mb-3" />
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievement highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-amber-600">50+</div>
            <div className="text-sm text-muted-foreground">Luxury Hotels</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">25+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-red-600">100+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-yellow-600">15+</div>
            <div className="text-sm text-muted-foreground">Awards</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;