'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Quote,
  Star,
  MapPin,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Melaku Gudeta",
      title: "Ex-Operational Manager",
      company: "Haile Resort Hawassa",
      location: "Hawassa, UAE",
      image: "/images/user.png",
      rating: 5,
      testimonial: "Chef Meaza, congratulations on being named Third Best Supervisor of the Year! Your hard work, leadership, and positive attitude inspire us every day. Even after the busiest shifts, your dedication and smile never fade. Thank you for making our team stronger and our workplace brighter. Well deserved—we’re so proud of you!.",
      relationship: "Ex-Operational Manager",
      duration: "3+ years working together"
    },
    {
      id: 2,
      name: "Chef Getachew Kebede",
      title: "Executive Chef",
      company: "Haile Resort – Hawassa",
      location: "Hawassa, Ethiopia",
      image: "/images/user.png",
      rating: 5,
      testimonial: "Meaza consistently delivers food production excellence while maintaining top-tier hygiene and safety standards. Her dedication to training and mentoring our kitchen team has made her one of our most reliable chefs. She's a true asset to our culinary operation.",
      // relationship: "Former Colleague",
      // duration: "2+ years collaboration"
    },
    {
      id: 3,
      name: "Chef Biruk",
      title: "Executive Chef",
      company: "Rori Hotel",
      location: "Hawassa, Ethiopia",
      image: "/images/user.png",
      rating: 5,
      testimonial: "I’ve seen Meaza’s growth in both her technical skill and leadership ability. She brings structure, clarity, and an exceptional eye for kitchen detail. Her ability to manage high-volume kitchen operations while fostering a positive team environment is unmatched.",
      relationship: "Professional Mentor",
      duration: "Industry Reference"
    },
    {
      id: 4,
      name: "Chef Yonas Gelaye",
      title: "Executive Chef",
      company: "Haile Hotels & Resorts",
      location: "Hawassa, Ethiopia",
      image: "/images/user.png",
      rating: 5,
      testimonial: "Chef Meaza is a committed and passionate professional. She always puts food integrity first and leads by example. Her initiative in applying HACCP and food safety systems has raised the standard in our kitchen operations.",
      relationship: "Senior Culinary Leader",
      duration: "Overseen her performance for several years"
    },
    // {
    //   id: 5,
    //   name: "Ahmed Hassan",
    //   title: "Sous Chef",
    //   company: "The Ritz-Carlton Dubai",
    //   location: "Dubai, UAE",
    //   image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
    //   rating: 5,
    //   testimonial: "Chef Elena is not just a leader but a mentor who truly cares about developing her team. Under her guidance, I've grown from a junior cook to sous chef. Her patience, knowledge, and willingness to share her expertise have shaped my entire career. She creates an environment where everyone can excel.",
    //   relationship: "Team Member",
    //   duration: "4+ years mentorship"
    // },
    // {
    //   id: 6,
    //   name: "Victoria Chen",
    //   title: "Food & Wine Editor",
    //   company: "Food & Wine Magazine",
    //   location: "New York, USA",
    //   image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
    //   rating: 5,
    //   testimonial: "Elena's commitment to sustainability without compromising on luxury is remarkable. Her innovative use of local, seasonal ingredients has redefined what fine dining can be in the modern era. She's a true pioneer who leads by example in creating a more responsible culinary industry.",
    //   relationship: "Industry Observer",
    //   duration: "Regular coverage since 2019"
    // }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6"
          >
            <Quote className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-white to-indigo-50/30 dark:from-gray-800 dark:to-indigo-950/30">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  <Quote className="w-12 h-12 text-indigo-500 mb-4" />
                  
                  <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed italic">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-indigo-600 font-medium mb-2">
                      {testimonials[currentIndex].title}
                    </p>
                    <p className="font-medium text-muted-foreground mb-3">
                      {testimonials[currentIndex].company}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {testimonials[currentIndex].location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {testimonials[currentIndex].relationship}
                      </div>
                    </div>
                    
                    <Badge variant="outline" className="mt-3">
                      {testimonials[currentIndex].duration}
                    </Badge>
                  </div>
                </div>
                
                {/* Author Image */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-indigo-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-medium text-indigo-600">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-muted-foreground">Client Testimonials</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">15+</div>
              <div className="text-sm text-muted-foreground">Industry Leaders</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber-600">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;