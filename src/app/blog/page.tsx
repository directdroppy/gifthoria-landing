"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiTag, FiUser, FiArrowRight } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Sample blog posts data
const blogPosts = [
  {
    id: 'uzaktaki-sevdiklerinizle-baglanti-kurmanin-yolları',
    title: 'Uzaktaki Sevdiklerinizle Bağlantı Kurmanın Yolları',
    excerpt: 'Mesafelerin artık bir engel olmadığı günümüzde, sevdiklerinizle nasıl daha anlamlı bağlantılar kurabilirsiniz?',
    coverImage: '/images/service-letters.jpg',
    category: 'İlişkiler',
    author: 'Ayşe Demir',
    date: '15 Mart 2025',
    readTime: '5 dakika'
  },
  {
    id: 'ozel-gunlerde-ilgi-cekici-hediye-onerileri',
    title: 'Özel Günlerde İlgi Çekici Hediye Önerileri',
    excerpt: 'Doğum günleri, yıldönümleri ve diğer özel günlerde sevdiklerinizi mutlu edecek hediye fikirleri.',
    coverImage: '/images/service-gifts.jpg',
    category: 'Hediyeler',
    author: 'Mehmet Kaya',
    date: '2 Nisan 2025',
    readTime: '7 dakika'
  },
  {
    id: 'mektup-yazma-sanati-ve-kalici-etkisi',
    title: 'Mektup Yazma Sanatı ve Kalıcı Etkisi',
    excerpt: 'Dijital çağda el yazısı mektupların önemi ve sevdiklerinizi nasıl etkileyebileceği hakkında.',
    coverImage: '/images/service-letters.jpg',
    category: 'Mektuplar',
    author: 'Zeynep Yıldız',
    date: '25 Mart 2025',
    readTime: '6 dakika'
  },
  {
    id: 'sevdiklerinize-surpriz-yapmanin-puf-noktalari',
    title: 'Sevdiklerinize Sürpriz Yapmanın Püf Noktaları',
    excerpt: 'Unutulmaz sürprizler planlama ve uygulama konusunda ipuçları ve öneriler.',
    coverImage: '/images/service-gifts.jpg',
    category: 'Sürprizler',
    author: 'Ali Yılmaz',
    date: '10 Nisan 2025',
    readTime: '4 dakika'
  },
  {
    id: 'anlamlı-fotograflarin-gucu-anilari-yaşatmak',
    title: 'Anlamlı Fotoğrafların Gücü: Anıları Yaşatmak',
    excerpt: 'Fotoğrafların duygusal değeri ve onları nasıl daha anlamlı hediyeler haline getirebileceğiniz.',
    coverImage: '/images/service-photos.jpg',
    category: 'Fotoğraflar',
    author: 'Elif Kara',
    date: '5 Nisan 2025',
    readTime: '8 dakika'
  },
  {
    id: 'uzaktan-ilişki-yurutmenin-zorluklari-ve-cozumleri',
    title: 'Uzaktan İlişki Yürütmenin Zorlukları ve Çözümleri',
    excerpt: 'Uzak mesafe ilişkilerinde yaşanan zorluklar ve bu sorunları aşma yöntemleri.',
    coverImage: '/images/service-calendars.jpg',
    category: 'İlişkiler',
    author: 'Can Demir',
    date: '28 Mart 2025',
    readTime: '9 dakika'
  }
];

// Featured post for the hero section
const featuredPost = {
  id: 'sevginizi-gostermenin-5-farkli-yolu',
  title: 'Sevginizi Göstermenin 5 Farklı Yolu',
  excerpt: 'Sevgi dillerini keşfedin ve ilişkilerinizi güçlendirmek için hangi yöntemleri kullanabileceğinizi öğrenin. Bu yazımızda, sevdiklerinize olan duygularınızı ifade etmenin yaratıcı ve etkili yollarını sunuyoruz.',
  coverImage: '/images/about-us.jpg',
  category: 'İlişkiler',
  author: 'Ayşe Demir',
  date: '8 Nisan 2025',
  readTime: '10 dakika'
};

// Blog categories
const categories = [
  { name: 'Tümü', count: 12 },
  { name: 'İlişkiler', count: 5 },
  { name: 'Hediyeler', count: 4 },
  { name: 'Mektuplar', count: 3 },
  { name: 'Sürprizler', count: 2 },
  { name: 'Fotoğraflar', count: 2 }
];

const BlogPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section with Featured Post */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-gray-600">
                Hediyeler, ilişkiler ve özel anlar hakkında değerli içerikler
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
              <div className="md:col-span-2">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-medium rounded-full mb-2">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl font-bold text-white mb-2">{featuredPost.title}</h2>
                    <div className="flex items-center text-white/80 text-sm">
                      <span className="flex items-center">
                        <FiUser className="mr-1" /> {featuredPost.author}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" /> {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{featuredPost.date}</span>
                    <span className="flex items-center">
                      <FiClock className="mr-1" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.id}`} 
                    className="flex items-center text-primary font-medium hover:underline"
                  >
                    Devamını Oku <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Filters & Category Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-wrap gap-2 mb-4 sm:mb-0">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {category.name} {category.count > 0 && <span className="text-xs">({category.count})</span>}
                  </button>
                ))}
              </div>
              
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  className="w-full px-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                  placeholder="Blog yazısı ara..."
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative aspect-[16/9]">
                      <Image 
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <FiClock className="mr-1" size={14} /> {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                          <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} />
                        </div>
                        <span className="ml-2 text-sm font-medium">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="btn btn-outline rounded-full px-8 py-3 font-medium border-gray-300 hover:border-primary hover:text-primary">
                Daha Fazla Göster
              </button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Bültenimize Abone Olun</h2>
                  <p className="text-gray-600 mb-6">
                    En güncel yazılarımız, indirim fırsatlarımız ve özel duyurularımızdan haberdar olmak için e-posta listemize katılın.
                  </p>
                  <form className="flex flex-wrap md:flex-nowrap gap-3">
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                      placeholder="E-posta adresiniz"
                    />
                    <button type="submit" className="w-full md:w-auto btn btn-primary rounded-lg px-6 py-3 font-semibold text-white whitespace-nowrap">
                      Abone Ol
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-3">
                    Gizlilik Politikamızı kabul etmiş sayılırsınız. İstediğiniz zaman abonelikten çıkabilirsiniz.
                  </p>
                </div>
                <div className="relative h-60 rounded-xl overflow-hidden">
                  <Image 
                    src="/images/how-it-works.jpg"
                    alt="Abone Ol"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
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

export default BlogPage;
