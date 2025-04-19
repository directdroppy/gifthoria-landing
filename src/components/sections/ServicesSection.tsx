'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiBox, FiGift, FiPackage, FiShieldOff, FiStar, FiThumbsUp } from 'react-icons/fi';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });
  
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    if (isTitleInView) {
      titleControls.start('visible');
    }
    if (isCardsInView) {
      cardsControls.start('visible');
    }
  }, [isTitleInView, isCardsInView, titleControls, cardsControls]);

  const services = [
    {
      title: 'Mektup Gönderimi',
      description: 'Duygularınızı ifade eden kişisel mektuplar yazın, biz sizin için basıp gönderelim.',
      image: '/images/IMG-20250411-WA0025.jpg',
      features: [
        'Dijital ortamda yazım',
        'Fotoğraf ekleme seçeneği',
        'Özel kağıt ve zarf',
        'Tüm cezaevlerine teslimat',
      ],
      price: '39.90',
    },
    {
      title: 'Hediye Paketleri',
      description: 'Sevdiklerinize özel olarak hazırlanan hediye paketleri ile yüzlerinde bir tebessüm bırakın.',
      image: '/images/IMG-20250411-WA0035.jpg',
      features: [
        'Kişiselleştirilmiş içerik',
        'Çeşitli ürün seçenekleri',
        'Özel not/mektup ekleme imkânı',
        'Güvenli teslimat',
      ],
      price: '49.90',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden z-10"
      id="services"
    >
      <div className="absolute inset-0 pointer-events-none -z-1">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-50 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-red-50 rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          ref={titleRef}
          className="text-center mb-12 md:mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={titleControls}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-red-50 text-primary font-medium text-xl mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Sevdiklerinize <span className="text-primary">hediye göndermek</span> çok kolay
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Güvenilir ve hızlı hizmet anlayışımızla, hediyeleriniz sevdiklerinize özenle ulaştırılır. 
            Anında sipariş oluşturun veya hesap açarak daha hızlı teslimat seçeneklerinden yararlanın.
          </p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 services-grid"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          animate={cardsControls}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="service-card bg-white rounded-xl p-4 sm:p-6 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-0">
                <div className="lg:col-span-2 relative h-48 sm:h-64 lg:h-full rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>

                <div className="lg:col-span-3 p-2 sm:p-4 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                  
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">Özellikler:</h4>
                  <ul className="mb-4 sm:mb-5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs sm:text-sm text-gray-600 mb-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col space-y-2">
                    <Link href={`/order?service=${service.title}`} className="btn btn-primary rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white">
                      Hemen Sipariş Ver
                    </Link>
                    <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-500 mt-1 px-2">
                      <span>• Anında sipariş</span>
                      <span>• Üyelik gerekmez</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-soft-lg text-center relative overflow-hidden mt-10 sm:mt-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Özel istek ve talepleriniz mi var?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Standart hizmetlerimiz dışında farklı ihtiyaçlarınız için bizimle iletişime geçebilirsiniz. 
              Size özel çözümler sunabilir veya özel isteklerinizi yerine getirebiliriz.
            </p>
            <div className="flex justify-center">
              <Link href="https://wa.me/905369232825" className="btn btn-primary rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white">
                Özel Sipariş Ver
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
