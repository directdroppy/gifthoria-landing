"use client";

import React from 'react';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiSend } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
              <p className="text-xl text-gray-600">
                Sorularınız ve önerileriniz için bizimle iletişime geçin
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info and Form Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold mb-8">Bize Ulaşın</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="mt-1 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiPhone className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">Telefon</h3>
                      <p className="text-gray-600">+90 536 923 28 25</p>
                      <p className="text-gray-500 text-sm mt-1">Pazartesi - Cuma 09:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">E-posta</h3>
                      <p className="text-gray-600">info@gifthoria.com</p>
                      <p className="text-gray-500 text-sm mt-1">7/24 destek</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">Adres</h3>
                      <p className="text-gray-600">
                        Gifthoria A.Ş.<br />
                        Konak Mah. Lefkoşe Cad. Barış(120) Sok.<br />
                        Ofis + Plaza No:3 Kat:1 Daire No:10<br />
                        Nilüfer/BURSA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiMessageSquare className="text-primary text-xl" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">WhatsApp Destek</h3>
                      <p className="text-gray-600">Tüm sorularınız için WhatsApp üzerinden bizimle iletişime geçebilirsiniz. <a href="https://wa.me/905369232825" className="text-primary hover:underline">WhatsApp'tan yazın</a></p>
                      <p className="text-gray-500 text-sm mt-1">Hızlı yanıt, kolay çözüm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <h3 className="font-semibold text-lg mb-4">Bizi Takip Edin</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <svg width="24" height="24" className="text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <svg width="24" height="24" className="text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <svg width="24" height="24" className="text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                      <svg width="24" height="24" className="text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                
                
              </div>
              
              {/* Contact Form */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold mb-8">Mesaj Bırakın</h2>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <form>
                    <div className="mb-4">
                      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                        Ad Soyad
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                        placeholder="Ad ve soyadınızı giriniz"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        E-posta
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Telefon
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                        placeholder="Telefon numaranız"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Konu
                      </label>
                      <select 
                        id="subject" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="">Konu seçiniz</option>
                        <option value="general">Genel Bilgi</option>
                        <option value="order">Sipariş Bilgisi</option>
                        <option value="support">Destek</option>
                        <option value="partnership">İş Birliği</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Mesajınız
                      </label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                        placeholder="Mesajınızı buraya yazın..."
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-primary" />
                        <span className="ml-2 text-sm text-gray-700">
                          Kişisel verilerimin işlenmesine ilişkin <a href="#" className="text-primary hover:underline">aydınlatma metnini</a> okudum ve onaylıyorum.
                        </span>
                      </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-full rounded-lg px-6 py-3 font-semibold text-white flex items-center justify-center">
                      <FiSend className="mr-2" />
                      Mesajı Gönder
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ and Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Sık Sorulan Sorular</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Bize ulaşmadan önce sık sorulan sorular sayfamızı inceleyebilirsiniz. 
              Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/faq" className="btn btn-outline rounded-full px-8 py-3 font-semibold border-gray-300 hover:border-primary hover:text-primary">
                Sıkça Sorulan Sorular
              </a>
              <a href="https://app.gifthoria.com" className="btn btn-primary rounded-full px-8 py-3 font-semibold text-white">
                Ücretsiz Hesap Oluştur
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
