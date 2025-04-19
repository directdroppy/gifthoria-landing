'use client';

import { useRef, useEffect } from 'react';

import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FiMail, 
  FiClock, 
  FiCamera, 
  FiCalendar, 
  FiGift, 
  FiShield 
} from 'react-icons/fi';

const FeaturesSection = () => {
  const featuresRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);
  
  // Intersection Observer için hook'lar
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });
  const isDescInView = useInView(descriptionRef, { once: true, amount: 0.2 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  
  // Animasyon kontrolleri
  const titleControls = useAnimation();
  const descControls = useAnimation();
  const cardsControls = useAnimation();
  
  useEffect(() => {
    if (isTitleInView) {
      titleControls.start('visible');
    }
    if (isDescInView) {
      descControls.start('visible');
    }
    if (isCardsInView) {
      cardsControls.start('visible');
    }
  }, [isTitleInView, isDescInView, isCardsInView, titleControls, descControls, cardsControls]);

  // Özellik verileri
  const features = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Özel Mektuplar',
      description: 'Dijital ortamda hazırladığınız kişisel mesajları kağıt mektuba dönüştürüp teslim ediyoruz.',
      color: 'bg-red-100 text-primary',
    },
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: 'Fotoğraf Baskı',
      description: 'Dijital fotoğraflarınızı yüksek kalitede basıp sevdiklerinize ulaştırıyoruz.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: 'Takvim Oluşturma',
      description: 'Kişiselleştirilmiş, fotoğraflı takvimler oluşturup sevdiklerinize gönderiyoruz.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <FiGift className="w-6 h-6" />,
      title: 'Hediye Paketi',
      description: 'Sizin fikirlerinizle şekillenen, sevdiklerinize özel hediye paketleri hazırlıyoruz.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Hızlı Teslimat',
      description: 'Türkiye geneli tüm illere 3-5 iş günü içerisinde teslimat.',
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Güvenli Hizmet',
      description: 'Kişisel verileriniz yüksek güvenlikle korunur, gizlilik ilkelerine bağlı kalırız.',
      color: 'bg-teal-100 text-teal-600',
    },
  ];

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section 
      className="py-20 bg-gray-50 relative overflow-hidden z-10"
      id="features"
    >
      {/* Arka plan dekoratif elementler */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-1">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-50 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-50 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Başlık */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2.5 rounded-full bg-red-50 text-primary font-medium text-xl mb-4">
            Özellikler
          </span>
          <motion.h2 
            ref={titleRef}
            className="features-title text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-600"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={titleControls}
            transition={{ duration: 0.8 }}
          >
            Hediye Seçimini Kolaylaştıran Özellikler
          </motion.h2>
          <motion.p 
            ref={descriptionRef}
            className="features-description text-gray-600 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={descControls}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Gifthoria ile hediye seçimi artık çok daha kolay. Yapay zeka destekli öneriler, kişiselleştirilmiş seçenekler ve kullanıcı dostu arayüz ile mükemmel hediyeyi bulmanıza yardımcı oluyoruz.
          </motion.p>
        </div>

        {/* Özellikler Grid */}
        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          animate={cardsControls}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
              className="feature-card bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-xl transition-all duration-300 p-6 md:p-8 flex flex-col h-full will-change-transform"
            >
              <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Ekstra Bilgi Kısmı */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-white rounded-2xl shadow-soft-lg overflow-hidden will-change-transform"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                Üç adımda hediyelerinizi gönderin
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 text-primary flex items-center justify-center font-semibold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Kayıt olun</h4>
                    <p className="text-gray-600">Mobil uygulamayı indirin ve kolayca hesap oluşturun.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Hediyenizi oluşturun</h4>
                    <p className="text-gray-600">Mektup yazın, hediyenizi tasarlayın veya fotoğraf yükleyin.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-semibold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Gönderimi tamamlayın</h4>
                    <p className="text-gray-600">Teslimat adresini girin, ödeme yapın ve biz sizin için gönderelim.</p>
                  </div>
                </li>
              </ul>
              <button className="mt-8 btn btn-primary rounded-full px-8 py-3 w-full sm:w-auto">
                Şimdi Başla
              </button>
            </div>
            <div className="relative lg:h-auto h-80">
              <img
                src="/images/IMG-20250411-WA0027.jpg"
                alt="Gifthoria Nasıl Çalışır?"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
