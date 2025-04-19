'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiClock
} from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  // Animasyon için container variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Animasyon için item variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  // Footer linkleri
  const footerLinks = {
    company: [
      { name: 'Hakkımızda', href: '/about' },
      { name: 'Hizmetlerimiz', href: '/services' },
      { name: 'Blog', href: '/blog' },
      { name: 'Kariyer', href: '/careers' },
      { name: 'Basın', href: '/press' },
    ],
    support: [
      { name: 'SSS', href: '/faq' },
      { name: 'İletişim', href: '/contact' },
      { name: 'Canlı Destek', href: '/support' },
      { name: 'Sipariş Takibi', href: '/order-tracking' },
      { name: 'Yardım Merkezi', href: '/help-center' },
    ],
    legal: [
      { name: 'Kullanım', href: '/terms' },
      { name: 'Üyelik', href: '/membership' },
      { name: 'Ön Bilgi', href: '/pre-information' },
      { name: 'İade', href: '/return-policy' },
      { name: 'KVKK', href: '/kvkk' },
      { name: 'Çerez', href: '/cookies' },
      { name: 'Mesafeli Satış', href: '/distance-sales' },
    ],
  };

  // Sosyal medya linkleri
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Şirket Bilgileri */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo_black3.png" 
                alt="Gifthoria" 
                width={225} 
                height={75}
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Sevdiğiniz herkesin kalbine dokunacak tasarımlar ve hediye fikirleri için en kolay ve güvenilir yol. Siz dijital ortamda hazırlayın, biz teslim edelim.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Şirket Linkleri */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative">
              Şirket
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destek Linkleri */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative">
              Destek
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* İletişim Bilgileri */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative">
              İletişim
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="mr-3 text-primary mt-1" />
                <span className="text-gray-400">Konak Mah. Lefkoşe Cad. Barış(120) Sok. Ofis + Plaza No:3 Kat:1 Daire No:10 Nilüfer/BURSA</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mr-3 text-primary mt-1" />
                <span className="text-gray-400">+90 536 923 28 25</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mr-3 text-primary mt-1" />
                <span className="text-gray-400">info@gifthoria.com</span>
              </li>
              <li className="flex items-start">
                <FiClock className="mr-3 text-primary mt-1" />
                <span className="text-gray-400">Pazartesi - Cuma: 09:00 - 18:00</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Alt Footer */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gifthoria. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors duration-300 mb-2 md:mb-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;