"use client";

import React from 'react';

import Link from 'next/link';
import { FiGift, FiMail, FiCamera, FiPackage, FiHeart, FiCalendar } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const services = [
  {
    id: 'mektuplar',
    icon: <FiMail className="text-3xl text-primary" />,
    title: 'Mektuplar',
    description: 'Kelimelerin gücüyle kalplere dokunan, el yazısı veya dijital baskı mektuplarla sevgi bağlarınızı güçlendirin.',
    image: '/images/gift-box.jpg',
    features: [
      'El yazısı veya dijital baskı mektup seçeneği',
      'Özel kağıt ve zarf seçenekleri',
      'Farklı temalarda tasarımlar'
    ]
  },
  {
    id: 'hediyeler',
    icon: <FiGift className="text-3xl text-primary" />,
    title: 'Hediyeler',
    description: 'Özenle seçilmiş, kişiselleştirilmiş hediyelerle özel anlarınızı değerli kılın.',
    image: '/images/valentine-cards.jpg',
    features: [
      'Çeşitli kategori ve fiyat seçenekleri',
      'Kişiselleştirilebilir ürünler',
      'Özel paketleme seçenekleri'
    ]
  },
  {
    id: 'fotograflar',
    icon: <FiCamera className="text-3xl text-primary" />,
    title: 'Fotoğraflar',
    description: 'En değerli anılarınızı sanatsal dokunuşlarla ölümsüzleştirin ve duygularınızı görsellerle anlatın.',
    image: '/images/photo.jpg',
    features: [
      'Dijital fotoğraflarınızdan baskı',
      'Özel albüm tasarımları',
      'Çerçeve seçenekleri',
      'Kolaj ve düzenleme hizmetleri'
    ]
  },
  {
    id: 'ozel-paketler',
    icon: <FiPackage className="text-3xl text-primary" />,
    title: 'Özel Paketler',
    description: 'Duygu dolu mektup, özel hediye ve anlamlı fotoğrafları bir araya getiren benzersiz hediye deneyimleri.',
    image: '/images/IMG-20250411-WA0028.jpg',
    features: [
      'Özelleştirilebilir içerikler',
      'Temalı paketler (doğum günü, yıldönümü vb.)',
      'Premium kutu seçenekleri'
    ]
  },
  {
    id: 'surpriz-hizmetler',
    icon: <FiHeart className="text-3xl text-primary" />,
    title: 'Sürpriz Hizmetler',
    description: 'Beklenmedik anlarda sevdiklerinizin yüzünde unutulmaz bir tebessüm bırakacak sürpriz dokunuşlar.',
    image: '/images/IMG-20250411-WA0026.jpg',
    features: [
      'Kişiye özel temalar',
      'Özel hatırlatma servisi',
      'Tamamen gizli planlama'
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hizmetlerimiz</h1>
              <p className="text-xl text-gray-600">
                Sevdiklerinizi mutlu etmek için sunduğumuz özel hizmetlerimiz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={`/services#${service.id}`} className="text-primary font-medium hover:underline">
                    Detaylı Bilgi
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`py-12 ${index !== services.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="relative">
                    <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-lg absolute inset-0"
                      />
                    </div>
                    <div className={`absolute -z-10 ${index % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} w-48 h-48 bg-primary/10 rounded-full`}></div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>

                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3">Özellikler</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">

                      <Link
                        href={`/order?service=${service.title}`}
                        className="btn btn-primary rounded-full px-6 py-3 text-white font-medium text-center"
                      >
                        Hemen Sipariş Ver
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Özel İstek ve Talepleriniz mi var? */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Özel İstek ve Talepleriniz mi var?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                  Standart hizmetlerimiz dışında farklı ihtiyaçlarınız için bizimle iletişime geçebilirsiniz. 
                  Size özel çözümler sunabilir veya özel isteklerinizi yerine getirebiliriz.
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://wa.me/905369232825"
                    className="btn btn-primary rounded-full px-8 py-3 text-white font-medium text-center hover:bg-primary/90 transition-all duration-300"
                  >
                    İletişime Geç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;