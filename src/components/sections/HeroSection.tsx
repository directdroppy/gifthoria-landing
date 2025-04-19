'use client';

import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

// Özel bileşenler
import ThreeBackground from '../animations/ThreeBackground';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentGiftText, setCurrentGiftText] = useState(0);
  const { scrollY } = useScroll();

  // Değişen hediye kelimeleri - daha dengeli ve çeşitli
  const giftTexts = [
    "Mektuplar",
    "Hediyeler",
    "Duygular",
    "Fotoğraflar",
    "Hatıralar",
    "Sürprizler",
    "Anılar"
  ];

  // Paralaks efektleri için transformlar - Daha az yoğun hassasiyet
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const y2 = useTransform(scrollY, [0, 800], [0, -120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const textInterval = setInterval(() => {
      setCurrentGiftText(prev => (prev + 1) % giftTexts.length);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-14 sm:pt-20 md:pt-10 lg:pt-0"
      id="home"
    >
      {/* 3D interaktif arka plan */}
      <div className="absolute inset-0 -z-10">
        <ThreeBackground />
      </div>

      {/* Paralaks arka plan katmanları */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        <motion.div style={{ y: y1 }} className="parallax-bg absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-full blur-3xl"></motion.div>
        <motion.div style={{ y: y2 }} className="parallax-bg absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-600/10 rounded-full blur-3xl"></motion.div>
      </div>

      {/* Ana içerik */}
      <div className="container mx-auto z-10 relative pt-10 sm:pt-16 md:pt-8 lg:pt-0 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Sol Taraf - Metin */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <div className="px-0">
              <div className="mb-8">
                <h1 
                  ref={titleRef}
                  className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
                >
                  Her Anı Özel Kılan{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentGiftText}
                      className="text-primary inline-block"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {giftTexts[currentGiftText]}
                    </motion.span>
                  </AnimatePresence>
                </h1>

                <div className="backdrop-blur-sm bg-white/30 rounded-xl shadow-sm mb-6">
                  <div className="p-4 pl-0 ml-0.5">
                    <p className="hero-subtitle text-gray-800 text-base sm:text-lg md:text-xl mb-3 font-medium text-left">
                      Gifthoria'da her mektup bir duygu, her hediye bir anı…
                    </p>
                    <p className="hero-description text-gray-700 text-sm sm:text-base md:text-lg mb-0 font-medium drop-shadow-sm text-left">
                      Sevdiklerinize özel mektuplar, anlam yüklü hediyeler ve birlikte gülümsediğiniz fotoğraflarla kalplerine dokunun.
                      Şimdi ücretsiz hesabınızı oluşturun ya da hemen sipariş verin, sevgi dolu paketiniz aynı gün yola çıksın.
                    </p>
                  </div>
                </div>
              </div>

              {/* İstatistikler ve Butonlar */}
              <div className="flex flex-col justify-center items-center gap-8 mb-8 sm:-ml-8 md:-ml-10">
                {/* CTA Butonları */}
                <div className="flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-6 sm:-ml-8">
                  <Link 
                    href="https://app.gifthoria.com" 
                    className="btn btn-primary rounded-full px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-semibold text-white hover:shadow-lg flex items-center justify-center w-[140px] sm:w-[170px] text-center"
                    prefetch={false}
                  >
                    Hemen Sipariş Ver
                  </Link>

                  <Link 
                    href="https://app.gifthoria.com" 
                    className="btn btn-outline rounded-full px-3 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-medium border border-gray-300 hover:border-primary hover:text-primary w-[140px] sm:w-[170px] text-center flex flex-col items-center justify-center"
                    prefetch={false}
                  >
                    <span>Kayıt Ol</span>
                    <span className="text-xs sm:text-xs font-normal mt-0.5">(hızlı teslimat)</span>
                  </Link>
                </div>

                {/* İstatistikler */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 sm:-ml-16"
                >
                  <motion.div className="floating-badge flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm shadow-sm sm:-ml-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center text-primary text-xl sm:text-2xl mr-3 sm:mr-4">
                      <span>★</span>
                    </div>
                    <div>
                      <p className="font-bold text-xl sm:text-2xl">2000+</p>
                      <p className="text-gray-600 text-sm sm:text-base mt-0.5 sm:mt-1">Mutlu Müşteri</p>
                    </div>
                  </motion.div>

                  <motion.div className="floating-badge flex items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm shadow-sm">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center text-primary text-xl sm:text-2xl mr-3 sm:mr-4">
                      <span>✓</span>
                    </div>
                    <div>
                      <p className="font-bold text-xl sm:text-2xl">98%</p>
                      <p className="text-gray-600 text-sm sm:text-base mt-0.5 sm:mt-1">Memnuniyet</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf - Görsel */}
          <div 
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            {/* Telefon mockup'ı */}
            <div className="relative w-full flex justify-center">
              <div 
                className="relative z-10 w-[75%] sm:w-[65%] md:w-[60%] lg:w-[85%] xl:w-[80%] mx-auto will-change-transform floating"
              >
                <img
                  src="/images/app-mockup-hero.png"
                  alt="Gifthoria Mobil Uygulaması"
                  className="rounded-3xl shadow-soft-xl w-full h-auto"
                />
              </div>

              {/* Arka plan dekoratif elementler */}
              <div className="absolute top-1/4 right-[5%] sm:right-[10%] w-28 h-28 bg-primary rounded-full filter blur-xl opacity-20 z-0"></div>
              <div className="absolute left-[5%] sm:left-[10%] bottom-1/3 w-24 h-24 bg-yellow-300 rounded-full filter blur-xl opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Aşağı kaydırma işaretçisi - Konum korundu, tasarım eski haline getirildi */}
      <div
        className="hidden md:flex flex-col items-center absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <span className="text-gray-700 text-sm mb-2 font-medium">Aşağı Kaydır</span>
        <div className="w-6 h-10 border-2 border-gray-400 hover:border-primary rounded-full flex justify-center pt-1 transition-colors duration-300">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;