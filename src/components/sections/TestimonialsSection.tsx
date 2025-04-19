'use client';

import { useRef, useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Yorum verileri - Düzgün tip tanımlamasıyla eklendi
  const testimonials: {
    name: string;
    title: string;
    content: string;
    rating: number;
  }[] = [
    {
      name: 'Ahmet K.',
      title: 'Mektup Gönderimi Hizmeti Kullanıcısı',
      content: 'Sevdiklerimle aramızdaki mesafeyi Gifthoria sayesinde daha az hissediyorum. Gönderdiğim mektuplar tam zamanında ulaşıyor ve içlerindeki duygular eksiksiz aktarılıyor. Profesyonel ve güvenilir bir hizmet.',
      rating: 5,
    },
    {
      name: 'Merve Y.',
      title: 'Hediye Paketi Müşterisi',
      content: 'Annemin doğum gününde özel hazırlanmış hediye paketi için teşekkürler. Paket içeriğindeki kişiselleştirmeler ve detaylar harikaydı. Annem çok duygulandı, kesinlikle tekrar tercih edeceğim.',
      rating: 5,
    },
    {
      name: 'Selim T.',
      title: 'Düzenli Müşteri',
      content: 'Sevgilime ayda bir hediye gönderiyorum ve her seferinde Gifthoria\'yı tercih ediyorum. Ürün kalitesi, teslimat hızı ve müşteri hizmetleri olağanüstü. Paketler her zaman özenle hazırlanıp zamanında teslim ediliyor.',
      rating: 4,
    },
    {
      name: 'Zeynep D.',
      title: 'İlk Kez Kullanan',
      content: 'Uzaktaki arkadaşıma sürpriz yapmak istedim ve WhatsApp\'tan ulaşarak özel bir paket hazırlattım. Tüm süreç çok kolaydı ve sonuç beklentilerimi aştı. Arkadaşım hediyeyi alınca çok mutlu oldu.',
      rating: 5,
    },
    {
      name: 'Oğuz B.',
      title: 'Hediye Paketi Müşterisi',
      content: 'Eşime yıldönümümüzde sürpriz yapmak istedim, Gifthoria sayesinde harika bir hediye paketi hazırlatıp gönderebildim. Teslimat tam zamanında ve sorunsuz gerçekleşti.',
      rating: 5,
    },
    {
      name: 'Ayşe T.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Kardeşime uzun süredir mektup göndermek istiyordum ancak nasıl yapacağımı bilmiyordum. Gifthoria sayesinde çok kolay bir şekilde duygularımı ifade eden bir mektup gönderebildim.',
      rating: 5,
    },
    {
      name: 'Murat S.',
      title: 'Yeni Müşteri',
      content: 'Anneler gününde annem için özel bir hediye arayışındaydım. WhatsApp üzerinden Gifthoria ile iletişime geçtim ve beklentilerimin ötesinde bir hediye paketi hazırladılar.',
      rating: 4,
    },
    {
      name: 'Deniz Y.',
      title: 'Hediye Paketi Müşterisi',
      content: 'İş arkadaşıma doğum günü hediyesi göndermek istedim ve Gifthoria\'yı tercih ettim. Profesyonel yaklaşımları ve hızlı teslimatları sayesinde tam istediğim gibi bir sürpriz oldu.',
      rating: 5,
    },
    {
      name: 'Cem K.',
      title: 'Düzenli Müşteri',
      content: 'Annemin ve babamın evlilik yıldönümü için online araştırmalar yaparken Gifthoria\'yı keşfettim. Özel not ekleme seçeneği sayesinde onlara duygu dolu bir hediye gönderebildim.',
      rating: 5,
    },
    {
      name: 'Elif Z.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Uzaktaki sevdiğim için özel bir hediye arayışındaydım. Gifthoria ile çalışmak çok keyifliydi. Her adımda beni bilgilendirdiler ve teslimat tam vaktinde gerçekleşti.',
      rating: 5,
    },
    {
      name: 'Baran T.',
      title: 'Hediye Paketi Müşterisi',
      content: 'Arkadaşımın yeni işini kutlamak için özel bir hediye paketi göndermek istedim. Gifthoria\'nın kişiselleştirme seçenekleri sayesinde tam ona göre bir hediye seçebildim.',
      rating: 5,
    },
    {
      name: 'Selin A.',
      title: 'Yeni Müşteri',
      content: 'Uzun zamandır görmediğim kuzenime bir sürpriz yapmak istedim. Gifthoria\'nın hediye paketleri ve kolay sipariş süreci sayesinde harika bir hediye gönderebildim.',
      rating: 4,
    },
    {
      name: 'Kerem B.',
      title: 'Hediye Paketi Müşterisi',
      content: 'WhatsApp üzerinden hızlı bir şekilde sipariş verdim. İletişim süper, teslimat hızlı. Kesinlikle tekrar tercih edeceğim bir hizmet.',
      rating: 5,
    },
    {
      name: 'Zehra M.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Gifthoria ile sevdiklerime duygularımı ifade etmek çok kolay oldu. Mektup yazma ve gönderme sürecini tamamen üstlendiler, ben sadece ne demek istediğimi belirttim.',
      rating: 5,
    },
    {
      name: 'Tolga Ş.',
      title: 'Düzenli Müşteri',
      content: 'Her ay eşime farklı bir hediye göndermek istiyordum ve Gifthoria bu konuda mükemmel bir iş çıkarıyor. Her seferinde farklı ve anlamlı hediyeler hazırlıyorlar.',
      rating: 5,
    },
    {
      name: 'Melis K.',
      title: 'Hediye Paketi Müşterisi',
      content: 'Ablamın mezuniyeti için özel bir hediye arayışındaydım ve Gifthoria\'nın kişiselleştirilmiş hediye paketleri tam da aradığım şeydi. Çok teşekkürler!',
      rating: 4,
    },
    {
      name: 'Cihan D.',
      title: 'Yeni Müşteri',
      content: 'Sevgilime sürpriz yapmak için Gifthoria\'yı tercih ettim. WhatsApp üzerinden kolayca iletişim kurdum ve istediğim hediye paketi hazırlandı. Teslimat da tam zamanında oldu.',
      rating: 5,
    },
    {
      name: 'Yasemin T.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Annemin doğum gününde ona duygularımı ifade eden bir mektup göndermek istedim. Gifthoria\'nın hizmeti sayesinde bu mümkün oldu ve annem çok duygulandı.',
      rating: 5,
    },
    {
      name: 'Serkan Ö.',
      title: 'Hediye Paketi Müşterisi',
      content: 'İş arkadaşımın emekliliğini kutlamak için özel bir hediye arayışındaydım. Gifthoria\'nın önerdiği paket tam da aradığım şeydi. Teslimat hızlı ve sorunsuzdu.',
      rating: 4,
    },
    {
      name: 'Esra A.',
      title: 'Düzenli Müşteri',
      content: 'Kardeşim yurtdışında yaşıyor ve ona düzenli olarak hediyeler göndermek istiyordum. Gifthoria bu konuda bana çok yardımcı oluyor. Teslimat her zaman zamanında ve güvenilir.',
      rating: 5,
    },
    {
      name: 'Hakan Y.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Eşimle aramızdaki özel anları paylaşmak için Gifthoria\'nın mektup gönderimi hizmetini kullanıyorum. Her detayla ilgileniyorlar ve sonuç mükemmel oluyor.',
      rating: 5,
    },
    {
      name: 'Derya B.',
      title: 'Hediye Paketi Müşterisi',
      content: 'Babamın doğum günü için hazırlattığım hediye paketi için çok teşekkürler. İçeriği ve sunumu tam istediğim gibiydi. Babam çok beğendi.',
      rating: 5,
    },
    {
      name: 'Orhan K.',
      title: 'Yeni Müşteri',
      content: 'İlk kez kullandım ve gerçekten çok memnun kaldım. WhatsApp üzerinden siparişimi verdim, sorularıma hemen cevap aldım ve ürünüm zamanında teslim edildi.',
      rating: 4,
    },
    {
      name: 'Sevgi M.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Üniversite arkadaşıma özlem dolu bir mektup göndermek istedim. Gifthoria\'nın hizmeti sayesinde bu çok kolay oldu. Teşekkürler!',
      rating: 5,
    },
    {
      name: 'Burak T.',
      title: 'Hediye Paketi Müşterisi',
      content: 'Eşime evlilik yıldönümümüzde sürpriz yapmak istedim ve Gifthoria tam da aradığım hizmeti sundu. Hediye paketi çok özel ve anlamlıydı.',
      rating: 5,
    },
    {
      name: 'Özge Ç.',
      title: 'Düzenli Müşteri',
      content: 'Her ayın belirli günlerinde sevdiklerime hediyeler gönderiyorum ve Gifthoria her seferinde beklentilerimi karşılıyor. Kaliteli hizmet için teşekkürler.',
      rating: 5,
    },
    {
      name: 'Mesut K.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Uzaktaki arkadaşıma özel bir mektup göndermek istedim ve Gifthoria bu konuda harika bir iş çıkardı. Mektubum tam istediğim gibi iletildi.',
      rating: 4,
    },
    {
      name: 'Gizem A.',
      title: 'Hediye Paketi Müşterisi',
      content: 'Anneanneme doğum gününde özel bir sürpriz yapmak istedim. Gifthoria\'nın kişiselleştirilmiş hizmeti sayesinde ona özel bir hediye gönderebildim.',
      rating: 5,
    },
    {
      name: 'Emre S.',
      title: 'Yeni Müşteri',
      content: 'WhatsApp üzerinden hızlı bir şekilde sipariş verdim. İletişim süper, teslimat hızlı. Kesinlikle tekrar tercih edeceğim bir hizmet.',
      rating: 5,
    },
    {
      name: 'Aylin T.',
      title: 'Mektup Gönderimi Kullanıcısı',
      content: 'Sevgilime duygularımı ifade eden bir mektup göndermek istedim ve Gifthoria bu konuda mükemmel bir iş çıkardı. Her detay düşünülmüştü.',
      rating: 5,
    }
  ];
  
  const totalPages = Math.ceil(testimonials.length / 3);

  // Önceki sayfaya gitme fonksiyonu
  const goToPrevious = () => {
    if (carouselRef.current) {
      setCurrentPage((prev) => {
        const newPage = Math.max(0, prev - 1);
        const scrollAmount = carouselRef.current!.clientWidth;
        carouselRef.current!.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        return newPage;
      });
    }
  };

  // Sonraki sayfaya gitme fonksiyonu
  const goToNext = () => {
    if (carouselRef.current) {
      setCurrentPage((prev) => {
        const newPage = Math.min(totalPages - 1, prev + 1);
        const scrollAmount = carouselRef.current!.clientWidth;
        carouselRef.current!.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        return newPage;
      });
    }
  };

  // Belirli bir sayfaya gitme fonksiyonu
  const goToPage = (page: number) => {
    if (carouselRef.current) {
      setIsScrolling(true);
      setCurrentPage(page);
      const scrollAmount = page * carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      
      // Animasyon tamamlandıktan sonra isScrolling'i false yap
      setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Animasyon süresi
    }
  };

  // Sayfa değiştirme için Debounce ekliyorum
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current && !isScrolling) {
        // Ekran genişliği değiştiğinde doğru sayfa pozisyonuna gitmeyi sağla
        goToPage(currentPage);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, isScrolling]);

  // Scroll dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current && !isScrolling) {
        const scrollPosition = carouselRef.current.scrollLeft;
        const itemWidth = carouselRef.current.clientWidth;
        const newPage = Math.round(scrollPosition / itemWidth);
        
        // Sayfa değişimini kontrol et ve güncelle
        if (newPage !== currentPage) {
          setCurrentPage(newPage);
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      // Daha verimli scroll işleme için pasif event listener
      carousel.addEventListener('scroll', handleScroll, { passive: true });
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage, isScrolling]);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Müşterilerimiz Ne Diyor?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Gifthoria'yı tercih eden binlerce mutlu müşterimizden bazıları
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Kaydırma Okları - Sadece Web Görünümünde */}
          <div className="hidden md:block absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none border border-gray-100 transition-all duration-300 hover:shadow-xl" 
              aria-label="Önceki"
              disabled={currentPage === 0}
              style={{ opacity: currentPage === 0 ? 0.5 : 1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={goToNext}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 focus:outline-none border border-gray-100 transition-all duration-300 hover:shadow-xl" 
              aria-label="Sonraki"
              disabled={currentPage === totalPages - 1}
              style={{ opacity: currentPage === totalPages - 1 ? 0.5 : 1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Kaydırmalı Alan */}
          <motion.div
            ref={carouselRef}
            className="overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory flex space-x-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onScroll={(e) => {
              // Ekstra scroll olayı dinleyicisi
              const target = e.target as HTMLDivElement;
              const scrollPosition = target.scrollLeft;
              const itemWidth = target.clientWidth;
              const newPage = Math.round(scrollPosition / itemWidth);
              
              if (newPage !== currentPage) {
                console.log(`Direct onScroll: Page changed to ${newPage}`);
                setCurrentPage(newPage);
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card bg-white rounded-xl p-5 shadow-soft-md hover:shadow-soft-lg transition-all duration-300 border border-gray-100 flex flex-col h-full snap-start flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Yıldız derecelendirmesi */}
                <div className="flex mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-5 h-5`}
                    />
                  ))}
                </div>

                {/* Yorum içeriği - Sabit yükseklik */}
                <div className="flex-grow mb-4 h-[120px] overflow-y-auto">
                  <p className="text-gray-600 text-sm text-center">"{testimonial.content}"</p>
                </div>
                
                {/* Yazar bilgileri - Sabit format */}
                <div className="bg-gray-50 rounded-lg p-3 text-center mt-auto">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Ultra minimal kaydırma göstergesi - sadece çubuk */}
        <div className="flex justify-center mt-10 items-center">
          {/* Tıklanabilir basit ilerleme çubuğu */}
          <div 
            className="relative w-40 sm:w-56 md:w-64 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all duration-200" 
            onClick={(e) => {
              // İlerleme çubuğuna tıklandığında ilgili sayfaya gitme
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = x / rect.width;
              const targetPage = Math.floor(percentage * Math.ceil(testimonials.length / 3));
              if (targetPage !== currentPage) {
                goToPage(targetPage);
              }
            }}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300 ease-out" 
              style={{ 
                width: `${((currentPage + 1) / Math.ceil(testimonials.length / 3)) * 100}%`,
              }}
            />
          </div>
        </div>
          
        <style jsx global>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsSection;