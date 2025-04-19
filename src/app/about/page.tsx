"use client";

import React from 'react';

import { FiUsers, FiPackage, FiHeart, FiAward } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
              <p className="text-xl text-gray-600">
                Sevdiklerinizin özel anlarını değerli kılmak için varız.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
                <p className="text-gray-600 mb-4">
                  Bazı duygular vardır; mesafelere sığmaz, ekrana yazılamaz, telefonda anlatılamaz…
                  İşte Gifthoria, tam da bu duygular için doğdu.
                </p>
                <p className="text-gray-600 mb-4">
                  2024 yılında, kalpler arasındaki uzaklıkları sevgiyle kısaltmak için yola çıktık.
                  Bazen bir mektubun satırlarında bir özlem gizlidir…
                  Bazen küçük bir hediyenin içinde, "seni hiç unutmadım" duygusu saklıdır.
                </p>
                <p className="text-gray-600 mb-4">
                  Gifthoria, sevdiklerine kalpten gelen mektuplar, kişiye özel hediyeler ve anlam dolu fotoğraflar gönderebileceğiniz modern bir hediyeleşme platformudur.
                  Kullanıcı dostu mobil uygulamamız ve web sitemiz sayesinde; ister şehir dışındaki annenize, ister cezaevindeki bir kardeşinize, ister yurtdışından Türkiye'deki bir dosta…
                  Kelimelerle anlatılamayan duyguları, özenle hazırladığımız kutularla ulaştırıyoruz.
                </p>
                <p className="text-gray-600 mb-4">
                  Teknolojiyi insan emeğiyle buluşturarak, her hediyeyi titizlikle hazırlıyor ve sevgiyle yola çıkarıyoruz. Çünkü bizce;
                  Her mektup bir kalbin sesi, her hediye bir sarılmanın yerini tutar.
                </p>
                <p className="text-gray-600 mb-4">
                  Gifthoria, yalnızca bir platform değil.
                  O, özlemle bekleyen bir annenin gözyaşı,
                  Yıllardır sarılamadığı kardeşine mektup gönderen bir ablanın kalp çarpıntısıdır.
                  O, uzaklardan gelen en yakın hislerin adıdır.
                </p>
              </div>
              <div className="relative">
                <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                  <img 
                    src="/images/christmas-gift.jpg" 
                    alt="Gifthoria Hediyeler"
                    className="w-full h-full object-cover rounded-xl absolute inset-0 shadow-inner"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Değerlerimiz</h2>
              <p className="text-gray-600">
                Gifthoria olarak bizi biz yapan temel değerlerimiz her zaman rehberimiz olmuştur.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <FiHeart className="text-primary text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3">Samimiyet</h3>
                <p className="text-gray-600">Her hediyeyi, kendi sevdiklerimize gönderiyormuş gibi özenle hazırlıyor ve sunuyoruz.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <FiAward className="text-primary text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3">Kalite</h3>
                <p className="text-gray-600">Her ürünümüzün en yüksek kalite standartlarını karşılamasını sağlıyoruz.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <FiUsers className="text-primary text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3">Müşteri Odaklılık</h3>
                <p className="text-gray-600">Müşterilerimizin ihtiyaçlarını ve beklentilerini her zaman ön planda tutuyoruz.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <FiPackage className="text-primary text-2xl" />
                </div>
                <h3 className="font-bold text-xl mb-3">Güvenilirlik</h3>
                <p className="text-gray-600">Verdiğimiz sözleri tutuyor ve hediyelerinizin zamanında ulaşmasını sağlıyoruz.</p>
              </div>
            </div>
          </div>
        </section>
        
        
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/90 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Gifthoria Ailesine Katılın</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Sevdiklerinize özel anlar yaratmak için hemen ücretsiz hesap oluşturun ve ayrıcalıklı fırsatlardan yararlanın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.gifthoria.com" className="btn bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
                Ücretsiz Hesap Oluştur
              </a>
              <a href="https://app.gifthoria.com" className="btn bg-white/20 border border-white text-white hover:bg-white/30 rounded-full px-8 py-3 font-semibold">
                Hemen Sipariş Ver
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
