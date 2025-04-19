'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiTarget, FiSmile, FiHeart } from 'react-icons/fi';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconBoxRef = useRef<HTMLDivElement>(null);
  const statBoxRef = useRef<HTMLDivElement>(null);

  // Intersection Observer için kullanılacak hook'lar
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isIconBoxInView = useInView(iconBoxRef, { once: true, amount: 0.3 });

  // Animasyon kontrolleri
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const iconBoxControls = useAnimation();

  // Mouse pozisyonu state'i
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // İstatistik kutusu için mouse takibi
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (statBoxRef.current) {
        const rect = statBoxRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse x position within the element
        const y = e.clientY - rect.top;  // mouse y position within the element
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Normalize position (-1 to 1)
        const normalizedX = (x - centerX) / centerX;
        const normalizedY = (y - centerY) / centerY;

        setMousePosition({ x: normalizedX, y: normalizedY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Gradient değerini hesapla
  const getGradientDirection = () => {
    // Default direction is top-right
    if (Math.abs(mousePosition.x) < 0.1 && Math.abs(mousePosition.y) < 0.1) {
      return 'to right top';
    }

    // Calculate angle based on mouse position
    const angle = Math.atan2(mousePosition.y, mousePosition.x) * (180 / Math.PI);
    const adjustedAngle = (angle + 360) % 360; // Normalize to 0-360

    return `${adjustedAngle}deg`;
  };

  // Animasyonların görünürse başlaması için
  useEffect(() => {
    if (isTextInView) {
      textControls.start('visible');
    }
    if (isImageInView) {
      imageControls.start('visible');
    }
    if (isIconBoxInView) {
      iconBoxControls.start('visible');
    }
  }, [isTextInView, isImageInView, isIconBoxInView, textControls, imageControls, iconBoxControls]);

  // Değerlerimiz verileri
  const values = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Misyonumuz',
      description: 'Duyguların ifade edilmesini kolaylaştırmak, mesafeleri sevgiyle yakınlaştırmak. Kullanıcılarımıza, sevdiklerine mektup, hediye ve fotoğraf gibi anlam yüklü içerikleri hızlı, güvenli ve özenli bir şekilde ulaştırabilecekleri bir platform sunmak.',
      color: 'bg-red-100 text-primary',
    },
    {
      icon: <FiSmile className="w-6 h-6" />,
      title: 'Vizyonumuz',
      description: "Gifthoria'yı, dünyanın dört bir yanındaki insanların duygularını paylaşabildiği, özel anlar yaratabildiği ve bağlarını güçlendirebildiği global bir duygusal iletişim markasına dönüştürmek. Mektup ve hediyeleşme kültürünü dijital dünyada yeniden canlandırmak.",
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: 'Değerlerimiz',
      description: 'Dürüstlük, gizlilik, güvenilirlik ve müşteri memnuniyeti odaklı hizmet anlayışımız en önemli değerlerimizdir.',
      color: 'bg-green-100 text-green-600',
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden z-10"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sol taraf - Görsel */}
          <motion.div
            ref={imageRef}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate={imageControls}
            transition={{ duration: 0.8 }}
            className="about-image relative h-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft-xl h-full max-h-[700px]">
              <Image
                src="/images/gifthoria1.jpeg"
                alt="Gifthoria Hakkında"
                width={700}
                height={800}
                className="w-full h-full object-cover rounded-3xl"
              />
              
              {/* İstatistik kutusu - görsele ortalı ve responsive */}
              <div 
                ref={statBoxRef}
                className="absolute bottom-6 left-0 right-0 mx-auto max-w-md w-[85%] backdrop-blur-sm py-2 px-4 rounded-xl shadow-soft-sm z-20 border border-white/10 hover:scale-105 transition-transform duration-300" 
                style={{
                  background: `linear-gradient(${getGradientDirection()}, rgba(255,255,255,0.2), rgba(255,255,255,0.1), rgba(255,255,255,0.03))`,
                  boxShadow: '0 2px 8px rgba(255,255,255,0.05), inset 0 1px 1px rgba(255,255,255,0.2)'
                }}
              >
                <div className="flex justify-between items-center text-center">
                  <div className="text-center px-2 mx-auto">
                    <p className="text-white text-[10px] font-medium uppercase tracking-wider text-center">Teslimat</p>
                    <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md leading-tight text-center">2000+</p>
                    <p className="text-white text-[10px] opacity-80 text-center">mutlu müşteri</p>
                  </div>
                  <div className="h-10 w-0.5 bg-white/20 rounded-full"></div>
                  <div className="text-center px-2 mx-auto">
                    <p className="text-white text-[10px] font-medium uppercase tracking-wider text-center">Başarı</p>
                    <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md leading-tight text-center">98%</p>
                    <p className="text-white text-[10px] opacity-80 text-center">memnuniyet</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sağ taraf - İçerik */}
          <div ref={textRef}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={textControls}
              transition={{ duration: 0.5 }}
            >
              <h2 className="about-title text-3xl md:text-4xl font-bold mb-6">
                Sevdiklerinizle Aranızdaki <span className="text-primary">Mesafeleri Kaldırıyoruz</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Gifthoria, sevdiklerinize kalpten gelen mektuplar, kişiye özel hediyeler ve anlam dolu fotoğraflar gönderebileceğiniz modern bir hediyeleşme platformudur.
              </p>
              <p className="text-gray-600 mb-6">
                2024 yılında, insanların sevdikleriyle olan bağlarını güçlendirmek ve özlemlerini bir nebze olsun hafifletmek amacıyla kurulan bir teknoloji girişimiyiz.
                Amacımız; duyguları dijital dünyanın olanaklarıyla bir araya getirerek, mesafeleri sevgiyle kısaltmak.
              </p>
              <p className="text-gray-600 mb-6">
                Kullanıcı dostu mobil uygulamamız ve web sitemiz sayesinde, ister cezaevindeki bir yakınınıza, ister uzaklarda yaşayan bir sevdiğinize; mektup, hediye ve fotoğraf gibi özel anılarınızı kolayca ulaştırabilirsiniz.
              </p>
              <p className="text-gray-600 mb-10">
                Teknolojiyle insan emeğini birleştirerek, hızlı, güvenilir ve özenli teslimat hizmetleri sunuyoruz. Çünkü bizce her duygu, en özel ilgiyi hak eder.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Değerlerimiz Bölümü - Hakkımızda bölümünün dışında, tamamen alt kısmında */}
      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2.5 rounded-full bg-red-50 text-primary font-medium text-xl mb-4">
            Değerlerimiz
          </span>
          <p className="text-gray-600 max-w-3xl mx-auto">Gifthoria olarak, müşterilerimize en iyi hizmeti sunmak için temel değerlerimize bağlı kalıyoruz.</p>
        </div>
        
        <motion.div
          ref={iconBoxRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                delay: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate={iconBoxControls}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="feature-card bg-white rounded-xl overflow-hidden shadow-soft-md hover:shadow-soft-xl transition-all duration-300 p-6 md:p-8 flex flex-col h-full"
            >
              <div className={`${value.color} w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}>
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
