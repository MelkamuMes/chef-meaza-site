// 'use client';

// import { motion } from 'framer-motion';
// import { useLanguage } from '@/components/language-provider';
// import { 
//   ChefHat,
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Instagram,
//   Twitter,
//   Facebook,
//   Heart,
//   ArrowUp,
//   Globe,
//   Award,
//   Star
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Footer = () => {
//   const { t } = useLanguage();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const quickLinks = [
//     { href: '#home', label: t('nav.home') },
//     { href: '#about', label: t('nav.about') },
//     { href: '#experience', label: t('nav.experience') },
//     { href: '#skills', label: t('nav.skills') },
//     { href: '#portfolio', label: t('nav.portfolio') },
//     { href: '#achievements', label: t('nav.achievements') },
//     { href: '#contact', label: t('nav.contact') }
//   ];

//   const services = [
//     "Executive Chef Consulting",
//     "Menu Development",
//     "Culinary Team Training",
//     "Restaurant Operations",
//     "Event Catering",
//     "Food Styling"
//   ];

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       name: "LinkedIn",
//       // url: "https://linkedin.com/in/elena-martinez-chef",
//       color: "hover:text-blue-600"
//     },
//     {
//       icon: Instagram,
//       name: "Instagram",
//       // url: "https://instagram.com/chef.elena.martinez",
//       color: "hover:text-pink-600"
//     },
//     {
//       icon: Twitter,
//       name: "Twitter",
//       // url: "https://twitter.com/chef_elena_m",
//       color: "hover:text-sky-600"
//     },
//     {
//       icon: Facebook,
//       name: "Facebook",
//       // url: "https://facebook.com/chef.elena.martinez",
//       color: "hover:text-blue-700"
//     }
//   ];

//   const achievements = [
//     "9+ Years Experience",
//     "Haile International Hotels and Resorts",
//     // "25+ Countries",
//     "Michelin Recognition"
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500 to-purple-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Main Footer Content */}
//         <div className="py-16 grid lg:grid-cols-4 gap-12">
//           {/* Brand Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-1 space-y-6"
//           >
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
//                 <ChefHat className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold font-playfair bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
//                   Meaza Mesene
//                 </h3>
//                 <p className="text-sm text-gray-400">International Culinary Expert</p>
//               </div>
//             </div>
            
//             <p className="text-gray-300 leading-relaxed">
//               {t('footer.tagline')}
//             </p>
            
//             {/* Contact Info */}
//             <div className="space-y-3">
//               <div className="flex items-center gap-3 text-sm">
//                 <Mail className="w-4 h-4 text-amber-500" />
//                 <span className="text-gray-300">meaza.mesene@gmail.com</span>
//               </div>
//               <div className="flex items-center gap-3 text-sm">
//                 <Phone className="w-4 h-4 text-amber-500" />
//                 <span className="text-gray-300">+251949030695</span>
//               </div>
//               <div className="flex items-center gap-3 text-sm">
//                 <MapPin className="w-4 h-4 text-amber-500" />
//                 <span className="text-gray-300">Ethiopia, Hawassa</span>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
//                 >
//                   <social.icon className="w-5 h-5" />
//                   <span className="sr-only">{social.name}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="space-y-6"
//           >
//             <h4 className="text-lg font-semibold text-white">Quick Links</h4>
//             <nav className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.href}
//                   whileHover={{ x: 5 }}
//                   className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </nav>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h4 className="text-lg font-semibold text-white">Services</h4>
//             <div className="space-y-3">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ x: 5 }}
//                   className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm cursor-pointer"
//                 >
//                   {service}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Achievements & Newsletter */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="space-y-6"
//           >
//             <h4 className="text-lg font-semibold text-white">Achievements</h4>
//             <div className="space-y-3">
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="flex items-center gap-2 text-sm">
//                   <Star className="w-4 h-4 text-amber-500" />
//                   <span className="text-gray-300">{achievement}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Awards Badge */}
//             <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4 border border-amber-500/30">
//               <div className="flex items-center gap-2 mb-2">
//                 <Award className="w-5 h-5 text-amber-500" />
//                 <span className="font-semibold text-amber-400">Award Winner</span>
//               </div>
//               <p className="text-xs text-gray-300">
//                 World Culinary Awards - Chef of the Year 2023
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="border-t border-gray-700 py-8"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <span>© 2024 Meaza Mesene.</span>
//               <span>{t('footer.rights')}</span>
//             </div>
            
//             <div className="flex items-center gap-6 text-sm text-gray-400">
//               <a href="#" className="hover:text-amber-400 transition-colors duration-300">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-amber-400 transition-colors duration-300">
//                 Terms of Service
//               </a>
//               <div className="flex items-center gap-1">
//                 <span>Made with</span>
//                 <Heart className="w-4 h-4 text-red-500" />
//                 <span>in Ethiopia</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Scroll to Top Button */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="absolute bottom-8 right-8"
//         >
//           <Button
//             onClick={scrollToTop}
//             size="sm"
//             className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
//           >
//             <ArrowUp className="w-5 h-5" />
//             <span className="sr-only">Scroll to top</span>
//           </Button>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// todo

'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/language-provider';
import { 
  ChefHat,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Heart,
  ArrowUp,
  Globe,
  Award,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#achievements', label: t('nav.achievements') },
    { href: '#contact', label: t('nav.contact') }
  ];

  const services = [
    "Executive Chef Consulting",
    "Menu Development",
    "Culinary Team Training",
    "Restaurant Operations",
    "Event Catering",
    "Food Styling"
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/elena-martinez-chef",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/chef.elena.martinez",
      color: "hover:text-pink-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/chef_elena_m",
      color: "hover:text-sky-600"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/chef.elena.martinez",
      color: "hover:text-blue-700"
    }
  ];

  const achievements = [
    "9+ Years Experience",
    "Haile International Hotels and Resorts",
    // "25+ Countries",
    "Michelin Recognition"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500 to-purple-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-playfair bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Meaza Mesene
                </h3>
                <p className="text-sm text-gray-400">International Culinary Expert</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              {t('footer.tagline')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">meaza.mesene@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">+251949030695</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-gray-300">Ethiopia, Hawassa</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm cursor-pointer"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Achievements</h4>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Awards Badge */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4 border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="font-semibold text-amber-400">Award Winner</span>
              </div>
              <p className="text-xs text-gray-300">
                Best Supervisor of the Year - 2023
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© 2024 Meaza Mesene.</span>
              <span>{t('footer.rights')}</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in Ethiopia</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-8 right-8"
        >
          <Button
            onClick={scrollToTop}
            size="sm"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0"
          >
            <ArrowUp className="w-5 h-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;