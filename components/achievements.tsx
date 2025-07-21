// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useState } from 'react'; // Add this with other imports
// import { useLanguage } from '@/components/language-provider';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { 
//   Trophy,
//   Award,
//   Star,
//   Medal,
//   Crown,
//   Calendar,
//   MapPin,
//   ExternalLink,
//   X,
//   FileText,
//   FileBadge,
//   FileImage,
//   Download
// } from 'lucide-react';

// const Achievements = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { t } = useLanguage();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const majorAwards = [
//     {
//       title: "Top Performer Recognition",
//       year: "2023",
//       organization: "Haile Resort Management",
//       location: "Ethiopia, Hawassa",
//       description: "Awarded for outstanding kitchen performance, food safety excellence, and team mentorship",
//       // category: "International",
//       icon: Crown,
//       color: "text-yellow-600",
//       bgColor: "bg-yellow-100 dark:bg-yellow-900/20"
//     },
//     {
//       title: "Certified HACCP & Food Safety Leader",
//       year: "2024",
//       organization: "Haile Resort – Hawassa",
//       location: "Ethiopia, Hawassa",
//       description: "For consistently applying HACCP standards and training new staff in compliance and best practices.",
//       // category: "Michelin",
//       icon: Star,
//       color: "text-red-600",
//       bgColor: "bg-red-100 dark:bg-red-900/20"
//     },
//     {
//       title: "Kitchen Operations Team",
//       year: "2019",
//       organization: "Haile Grand International",
//       // location: "New York, USA",
//       description: "Recognized for supporting junior chefs and production staff, improving efficiency and staff engagement.",
//       category: "National",
//       icon: Award,
//       color: "text-blue-600",
//       bgColor: "bg-blue-100 dark:bg-blue-900/20"
//     },
//     {
//       title: "Third Best Supervisor of the Year",
//       year: "2024",
//       organization: "Haile Resort – Hawassa",
//       location: "Ethiopia, Hawassa",
//       description: "Outstanding contribution to elevating traditional culinary , Involvement in special event menu planning",
//       // category: "Government",
//       icon: Trophy,
//       color: "text-green-600",
//       bgColor: "bg-green-100 dark:bg-green-900/20"
//     }
//   ];

//   // const professionalRecognitions = [
//   //   {
//   //     title: "Featured Chef - Conde Nast Traveler",
//   //     year: "2023",
//   //     type: "Media Recognition"
//   //   },
//   //   {
//   //     title: "Top 40 Under 40 Chefs - Food & Wine",
//   //     year: "2021",
//   //     type: "Industry Recognition"
//   //   },
//   //   {
//   //     title: "Sustainable Seafood Champion",
//   //     year: "2022",
//   //     type: "Environmental Award"
//   //   },
//   //   {
//   //     title: "Best Fine Dining Experience - Time Out Dubai",
//   //     year: "2023",
//   //     type: "Local Recognition"
//   //   },
//   //   {
//   //     title: "International Culinary Educator",
//   //     year: "2022",
//   //     type: "Educational Honor"
//   //   },
//   //   {
//   //     title: "Women in Hospitality Leadership Award",
//   //     year: "2021",
//   //     type: "Leadership Recognition"
//   //   }
//   // ];

//   // const mediaFeatures = [
//   //   {
//   //     outlet: "CNN Travel",
//   //     title: "Dubai's Rising Culinary Stars",
//   //     year: "2023",
//   //     type: "International Feature"
//   //   },
//   //   {
//   //     outlet: "Food Network",
//   //     title: "Masters of Mediterranean Cuisine",
//   //     year: "2022",
//   //     type: "TV Documentary"
//   //   },
//   //   {
//   //     outlet: "BBC Good Food",
//   //     title: "Sustainable Luxury Dining",
//   //     year: "2023",
//   //     type: "Print Feature"
//   //   },
//   //   {
//   //     outlet: "The World's 50 Best",
//   //     title: "Emerging Talent Spotlight",
//   //     year: "2021",
//   //     type: "Industry Publication"
//   //   }
//   // ];


//   const certificates = [
//   {
//     title: "HACCP Certification",
//     year: "2024",
//     proofType: "Certificate",
//     organization: "Food Safety Authority",
//     description: "Certified in Hazard Analysis and Critical Control Points for food safety management.",
//     imageUrl: "/images/c1.png", // Add this
//     downloadUrl: "/images/docs/c1-1.pdf",
//     icon: FileBadge,
//     color: "text-purple-600",
//     bgColor: "bg-purple-100 dark:bg-purple-900/20",
//     verificationUrl: "#" // Optional verification link
//   },
//   {
//     title: "Culinary Arts Diploma",
//     year: "2018",
//     proofType: "Certificate",
//     organization: "International Culinary Institute",
//     description: "Professional diploma in culinary arts with specialization in international cuisine.",
//     imageUrl: "/images/c2.png", // Add this
//     downloadUrl: "/images/docs/c1-2.pdf", // Add this
//     icon: FileText,
//     color: "text-blue-600",
//     bgColor: "bg-blue-100 dark:bg-blue-900/20"
//   },
//   {
//     title: "Culinary Arts Diploma",
//     year: "2018",
//     proofType: "Certificate",
//     organization: "International Culinary Institute",
//     description: "Professional diploma in culinary arts with specialization in international cuisine.",
//     imageUrl: "/images/c3.png", // Add this
//     downloadUrl: "/images/docs/c1-3.pdf", // Add this
//     icon: FileText,
//     color: "text-blue-600",
//     bgColor: "bg-blue-100 dark:bg-blue-900/20"
//   },
//   {
//     title: "Culinary Arts Diploma",
//     year: "2018",
//     proofType: "Certificate",
//     organization: "International Culinary Institute",
//     description: "Professional diploma in culinary arts with specialization in international cuisine.",
//     imageUrl: "/images/c4.png", // Add this
//     downloadUrl: "/images/docs/c1-4.pdf",// Add this
//     icon: FileText,
//     color: "text-blue-600",
//     bgColor: "bg-blue-100 dark:bg-blue-900/20"
//   },
//   {
//     title: "Culinary Arts Diploma",
//     year: "2018",
//     proofType: "Certificate",
//     organization: "International Culinary Institute",
//     description: "Professional diploma in culinary arts with specialization in international cuisine.",
//     imageUrl: "/images/c5.png", // Add this
//     downloadUrl: "/images/docs/c1-5.pdf",// Add this
//     icon: FileText,
//     color: "text-blue-600",
//     bgColor: "bg-blue-100 dark:bg-blue-900/20"
//   },
//   {
//     title: "Culinary Arts Diploma",
//     year: "2018",
//     proofType: "Certificate",
//     organization: "International Culinary Institute",
//     description: "Professional diploma in culinary arts with specialization in international cuisine.",
//     imageUrl: "/images/c6.png", // Add this
//     downloadUrl: "/images/docs/c1-6.pdf", // Add this
//     icon: FileText,
//     color: "text-blue-600",
//     bgColor: "bg-blue-100 dark:bg-blue-900/20"
//   },
//   // Add more certificates as needed
// ];

//   return (
//     <section id="achievements" className="py-20 lg:py-32 relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-amber-50/50 dark:from-yellow-950/20 dark:to-amber-950/20" />
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-6"
//           >
//             <Trophy className="w-8 h-8 text-white" />
//           </motion.div>
          
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4">
//             {t('achievements.title')}
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             {t('achievements.subtitle')}
//           </p>
//         </motion.div>

//         {/* Major Awards */}
//         <div className="mb-20">
//           <motion.h3
//             initial={{ opacity: 0, x: -30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-2xl font-bold mb-8 text-center"
//           >
//             Major Awards & Honors
//           </motion.h3>
          
//           <div className="grid lg:grid-cols-2 gap-8">
//             {majorAwards.map((award, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500">
//                   <CardContent className="p-8">
//                     <div className="flex items-start gap-4">
//                       <div className={`p-3 rounded-full ${award.bgColor}`}>
//                         <award.icon className={`w-8 h-8 ${award.color}`} />
//                       </div>
                      
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between mb-2">
//                           <Badge variant="outline" className="mb-2">
//                             {award.category}
//                           </Badge>
//                         </div>
                        
//                         <h4 className="text-xl font-bold text-foreground mb-2">
//                           {award.title}
//                         </h4>
                        
//                         <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
//                           <div className="flex items-center gap-1">
//                             <Calendar className="w-4 h-4" />
//                             {award.year}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <MapPin className="w-4 h-4" />
//                             {award.location}
//                           </div>
//                         </div>
                        
//                         <p className="text-yellow-600 font-medium mb-3">
//                           {award.organization}
//                         </p>
                        
//                         <p className="text-muted-foreground text-sm leading-relaxed">
//                           {award.description}
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Certificates with Proof */}
// <div className="mb-20">
//   <motion.h3
//     initial={{ opacity: 0, x: -30 }}
//     animate={inView ? { opacity: 1, x: 0 } : {}}
//     transition={{ delay: 0.8, duration: 0.6 }}
//     className="text-2xl font-bold mb-8 text-center"
//   >
//     Certificates & Proof
//   </motion.h3>
  
//   <div className="grid lg:grid-cols-2 gap-8">
//     {certificates.map((cert, index) => (
//       <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
//         whileHover={{ scale: 1.02 }}
//       >
//         <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
//           <CardContent className="p-8">
//             <div className="flex items-start gap-4">
//               <div className={`p-3 rounded-full ${cert.bgColor}`}>
//                 <cert.icon className={`w-8 h-8 ${cert.color}`} />
//               </div>
              
//               <div className="flex-1">
//                 <h4 className="text-xl font-bold text-foreground mb-2">
//                   {cert.title}
//                 </h4>
                
//                 <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
//                   <div className="flex items-center gap-1">
//                     <Calendar className="w-4 h-4" />
//                     {cert.year}
//                   </div>
//                   <Badge variant="outline" className="text-xs">
//                     {cert.proofType}
//                   </Badge>
//                 </div>
                
//                 <p className="text-purple-600 font-medium mb-3">
//                   {cert.organization}
//                 </p>
                
//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                   {cert.description}
//                 </p>
                
//                 <div className="flex gap-3 flex-wrap">
//                  <button
//                     onClick={() => {
//                       setSelectedImage(cert.imageUrl);
//                       setIsModalOpen(true);
//                     }}
//                     className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 transition-colors px-3 py-1.5 rounded-md bg-purple-50 dark:bg-purple-900/30"
//                   >
//                     <FileImage className="w-4 h-4" />
//                     View Proof
//                   </button>
//   {/* In your certificates section JSX, change this: */}
// <a 
//   href={cert.proofUrl} 
//   download
//   className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800"
// >
//   <Download className="w-4 h-4" />
//   Download
// </a>

// {/* To this: */}
// <a 
//   href={cert.downloadUrl} 
//   download
//   className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800"
// >
//   <Download className="w-4 h-4" />
//   Download
// </a>
//                   {/* {cert.verificationUrl && (
//                     <a 
//                       href={cert.verificationUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800 dark:hover:text-green-400 transition-colors px-3 py-1.5 rounded-md bg-green-50 dark:bg-green-900/20"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       Verify
//                     </a>
//                   )} */}
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     ))}
//   </div>
// </div>

//         {/* Professional Recognitions */}
//         {/* <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <Card className="h-full">
//               <CardContent className="p-8">
//                 <div className="flex items-center gap-3 mb-6">
//                   <Medal className="w-8 h-8 text-purple-600" />
//                   <h3 className="text-2xl font-bold">Professional Recognition</h3>
//                 </div>
                
//                 <div className="space-y-4">
//                   {professionalRecognitions.map((recognition, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={inView ? { opacity: 1, x: 0 } : {}}
//                       transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
//                       className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200/50 dark:border-purple-800/50"
//                     >
//                       <div>
//                         <h4 className="font-semibold text-foreground">
//                           {recognition.title}
//                         </h4>
//                         <p className="text-sm text-muted-foreground">
//                           {recognition.type}
//                         </p>
//                       </div>
//                       <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
//                         {recognition.year}
//                       </Badge>
//                     </motion.div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <Card className="h-full">
//               <CardContent className="p-8">
//                 <div className="flex items-center gap-3 mb-6">
//                   <ExternalLink className="w-8 h-8 text-blue-600" />
//                   <h3 className="text-2xl font-bold">Media Features</h3>
//                 </div>
                
//                 <div className="space-y-4">
//                   {mediaFeatures.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={inView ? { opacity: 1, x: 0 } : {}}
//                       transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
//                       className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200/50 dark:border-blue-800/50 hover:shadow-md transition-shadow duration-300"
//                     >
//                       <div className="flex items-center justify-between mb-2">
//                         <h4 className="font-semibold text-blue-600">
//                           {feature.outlet}
//                         </h4>
//                         <Badge variant="outline" className="text-xs">
//                           {feature.year}
//                         </Badge>
//                       </div>
//                       <p className="font-medium text-foreground mb-1">
//                         {feature.title}
//                       </p>
//                       <p className="text-sm text-muted-foreground">
//                         {feature.type}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div> */}

//         {/* Achievement Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 1.2, duration: 0.8 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-yellow-200/50 dark:border-yellow-800/50"
//         >
//           <div className="space-y-2">
//             <Trophy className="w-8 h-8 text-yellow-600 mx-auto" />
//             <div className="text-3xl font-bold text-yellow-600">3+</div>
//             <div className="text-sm text-muted-foreground">Major Internal Awards</div>
//           </div>
//           <div className="space-y-2">
//             <Star className="w-8 h-8 text-amber-600 mx-auto" />
//             <div className="text-3xl font-bold text-amber-600">5+</div>
//             <div className="text-sm text-muted-foreground">Acknowledgements by Haile Resort Management</div>
//           </div>
//           <div className="space-y-2">
//             <Medal className="w-8 h-8 text-orange-600 mx-auto" />
//             <div className="text-3xl font-bold text-orange-600">10+</div>
//             <div className="text-sm text-muted-foreground">Industry Trainings & Certifications</div>
//           </div>
//           <div className="space-y-2">
//             <Crown className="w-8 h-8 text-red-600 mx-auto" />
//             <div className="text-3xl font-bold text-red-600">7+</div>
//             <div className="text-sm text-muted-foreground">Years of Professional Culinary Experience</div>
//           </div>
//         </motion.div>
//       </div>
//       {/* Image Modal */}
//     {isModalOpen && selectedImage && (
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
//         <div className="relative max-w-4xl w-full mx-4">
//           <button
//             onClick={() => setIsModalOpen(false)}
//             className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50"
//           >
//             <X className="w-8 h-8" />
//           </button>
//           <img 
//             src={selectedImage} 
//             alt="Certificate" 
//             className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
//           />
//         </div>
//       </div>
//     )}
//     </section>
//   );
// };

// export default Achievements;


// todo


'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy,
  Award,
  Star,
  Medal,
  Crown,
  Calendar,
  MapPin,
  ExternalLink,
  X,
  FileText,
  FileBadge,
  FileImage,
  Download
} from 'lucide-react';

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const majorAwards = [
    {
      title: "Top Performer Recognition",
      year: "2023",
      organization: "Haile Resort Management",
      location: "Ethiopia, Hawassa",
      description: "Awarded for outstanding kitchen performance, food safety excellence, and team mentorship",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20"
    },
    {
      title: "Certified HACCP & Food Safety Leader",
      year: "2024",
      organization: "Haile Resort – Hawassa",
      location: "Ethiopia, Hawassa",
      description: "For consistently applying HACCP standards and training new staff in compliance and best practices.",
      icon: Star,
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/20"
    },
    {
      title: "Kitchen Operations Team",
      year: "2019",
      organization: "Haile Grand International",
      description: "Recognized for supporting junior chefs and production staff, improving efficiency and staff engagement.",
      category: "National",
      icon: Award,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "Third Best Supervisor of the Year",
      year: "2024",
      organization: "Haile Resort – Hawassa",
      location: "Ethiopia, Hawassa",
      description: "Outstanding contribution to elevating traditional culinary, Involvement in special event menu planning",
      icon: Trophy,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    }
  ];

  const certificates = [
    {
      title: "HACCP Certification",
      year: "2024",
      organization: "Food Safety Authority",
      description: "Certified in Hazard Analysis and Critical Control Points for food safety management.",
      imageUrl: "/images/c1.png",
      downloadUrl: "/images/docs/c1-1.pdf",
      proofType: "Certificate",
      icon: FileBadge,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      verificationUrl: "#"
    },
    {
      title: "Culinary Arts Diploma",
      year: "2018",
      organization: "International Culinary Institute",
      description: "Professional diploma in culinary arts with specialization in international cuisine.",
      imageUrl: "/images/c2.png",
      downloadUrl: "/images/docs/c1-2.pdf",
      proofType: "Diploma",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "Advanced Culinary Certificate",
      year: "2018",
      organization: "International Culinary Institute",
      description: "Advanced techniques in international cuisine.",
      imageUrl: "/images/c3.png",
      downloadUrl: "/images/docs/c1-3.pdf",
      proofType: "Certificate",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "Food Safety Certification",
      year: "2018",
      organization: "International Culinary Institute",
      description: "Advanced food safety and hygiene practices.",
      imageUrl: "/images/c4.png",
      downloadUrl: "/images/docs/c1-4.pdf",
      proofType: "Certificate",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "Supervisory Skills Certification",
      year: "2018",
      organization: "International Culinary Institute",
      description: "Leadership and management in culinary environments.",
      imageUrl: "/images/c5.png",
      downloadUrl: "/images/docs/c1-5.pdf",
      proofType: "Certificate",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "Menu Planning Certification",
      year: "2018",
      organization: "International Culinary Institute",
      description: "Advanced menu design and costing.",
      imageUrl: "/images/c6.png",
      downloadUrl: "/images/docs/c1-6.pdf",
      proofType: "Certificate",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    }
  ];

  return (
    <section id="achievements" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-amber-50/50 dark:from-yellow-950/20 dark:to-amber-950/20" />
      
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full mb-6"
          >
            <Trophy className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair mb-4">
            {t('achievements.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('achievements.subtitle')}
          </p>
        </motion.div>

        {/* Major Awards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Major Awards & Honors
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {majorAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${award.bgColor}`}>
                        <award.icon className={`w-8 h-8 ${award.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        {award.category && (
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="mb-2">
                              {award.category}
                            </Badge>
                          </div>
                        )}
                        
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {award.title}
                        </h4>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {award.year}
                          </div>
                          {award.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {award.location}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-yellow-600 font-medium mb-3">
                          {award.organization}
                        </p>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates with Proof */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Certificates & Proof
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${cert.bgColor}`}>
                        <cert.icon className={`w-8 h-8 ${cert.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {cert.title}
                        </h4>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {cert.year}
                          </div>
                          {cert.proofType && (
                            <Badge variant="outline" className="text-xs">
                              {cert.proofType}
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-purple-600 font-medium mb-3">
                          {cert.organization}
                        </p>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {cert.description}
                        </p>
                        
                        <div className="flex gap-3 flex-wrap">
                          <button
                            onClick={() => {
                              setSelectedImage(cert.imageUrl);
                              setIsModalOpen(true);
                            }}
                            className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 transition-colors px-3 py-1.5 rounded-md bg-purple-50 dark:bg-purple-900/30"
                          >
                            <FileImage className="w-4 h-4" />
                            View Proof
                          </button>
                          <a 
                            href={cert.downloadUrl}
                            download
                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                          {cert.verificationUrl && (
                            <a 
                              href={cert.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800 dark:hover:text-green-400 transition-colors px-3 py-1.5 rounded-md bg-green-50 dark:bg-green-900/20"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Verify
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl p-8 border border-yellow-200/50 dark:border-yellow-800/50"
        >
          <div className="space-y-2">
            <Trophy className="w-8 h-8 text-yellow-600 mx-auto" />
            <div className="text-3xl font-bold text-yellow-600">3+</div>
            <div className="text-sm text-muted-foreground">Major Internal Awards</div>
          </div>
          <div className="space-y-2">
            <Star className="w-8 h-8 text-amber-600 mx-auto" />
            <div className="text-3xl font-bold text-amber-600">5+</div>
            <div className="text-sm text-muted-foreground">Acknowledgements by Haile Resort Management</div>
          </div>
          <div className="space-y-2">
            <Medal className="w-8 h-8 text-orange-600 mx-auto" />
            <div className="text-3xl font-bold text-orange-600">10+</div>
            <div className="text-sm text-muted-foreground">Industry Trainings & Certifications</div>
          </div>
          <div className="space-y-2">
            <Crown className="w-8 h-8 text-red-600 mx-auto" />
            <div className="text-3xl font-bold text-red-600">7+</div>
            <div className="text-sm text-muted-foreground">Years of Professional Culinary Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/default-certificate.png';
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;