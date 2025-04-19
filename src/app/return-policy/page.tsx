
"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ReturnPolicyPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">İade Politikası</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Son Güncelleme: 17.04.2025</p>
            
            <p className="text-gray-600 mb-6">
              Sitemiz, tüketicilerin haklarını korumayı en önemli prensiplerinden biri olarak kabul etmektedir. 
              Eğer herhangi bir sebepten dolayı satın almış olduğunuz ürünlerden memnun kalmazsanız, 
              lütfen endişelenmeyin. Müşteri memnuniyeti bizim için çok önemlidir ve bu nedenle iade 
              prosedürümüz sizin için geçerlidir.
            </p>

            <p className="text-gray-600 mb-6">
              İade prosedürümüz, alışveriş deneyiminizi sorunsuz hale getirmeyi amaçlar. 
              Sizin memnuniyetiniz, bizim için önceliklidir ve bu doğrultuda hareket ederiz. 
              Ürünlerimizi aldığınızda tam anlamıyla memnun kalmamanız durumunda, iade etme 
              seçeneğiniz bulunmaktadır.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">İade Şartları</h2>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-600">
              <li>
                Almış olduğunuz ürünü, tahrip etmeden, bozmadan, ürünü kullanmadan teslim 
                tarihinden itibaren 14 (on dört) günlük süre içinde teslim aldığınız şekliyle 
                iade edebilirsiniz.
              </li>
              <li>İade etmek istediğiniz ürün/ürünler ayıplı ise kargo ücreti firmamız tarafından karşılanmaktadır.</li>
              <li>
                Sevkiyat sırasında zarar gördüğünü düşündüğünüz paketleri teslim aldığınız firma 
                yetkilisi önünde açıp kontrol ediniz. Eğer üründe herhangi bir zarar varsa kargo 
                firmasına tutanak tutturarak ürünü teslim almayınız.
              </li>
              <li>Kullanılmış, tahrip edilmiş ürünlerin iadesi kabul edilmez.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Cayma Hakkının Kullanılamayacağı Durumlar</h2>
            <p className="text-gray-600 mb-4">
              Mesafeli Satış Sözleşmeleri Yönetmeliği uyarınca aşağıdaki şartlarda cayma hakkınız 
              bulunmamaktadır:
            </p>
            <ul className="list-[lower-alpha] pl-6 mb-6 space-y-3 text-gray-600">
              <li>Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve satıcı kontrolünde olmayan mal veya hizmetlere ilişkin sözleşmeler.</li>
              <li>Alıcının istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara ilişkin sözleşmeler.</li>
              <li>Çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmeler.</li>
              <li>Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmeler.</li>
              <li>Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallara ilişkin sözleşmeler.</li>
              <li>Malın tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemelerine ilişkin sözleşmeler.</li>
              <li>Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınların teslimine ilişkin sözleşmeler.</li>
              <li>Belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler.</li>
              <li>Elektronik ortamda anında ifa edilen hizmetler veya alıcıya anında teslim edilen gayri maddi mallara ilişkin sözleşmeler.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">İade Süreci</h2>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-600">
              <li>
                Ürünü teslim edildiği andaki durumu ile geri vermekle yükümlüsünüz. Ürünü iade 
                etmeniz veya cayma hakkınızı kullanmanız halinde, cayma hakkının kullanılmasından 
                itibaren 14 gün içerisinde tek seferde ürün bedeli iade edilir.
              </li>
              <li>
                Ödemeyi kredi kartı ile yapmış olmanız halinde, bizim tarafımızdan kredi kartına 
                iade edilen tutarın Banka tarafından hesabınıza yansıtılmasına ilişkin ortalama 
                sürecin 2 (iki) ile 3 (üç) haftayı bulabileceğini, bu tutarın bizim tarafımızdan 
                bankaya iadesinden sonra sizin hesaplarınıza yansıması halinin tamamen banka işlem 
                süreci ile ilgili olduğunu vurgulamak isteriz.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">İletişim</h2>
            <p className="text-gray-600 mb-6">
              İade süreçlerine ilişkin her türlü talep, şikâyet ve sorularınızı{' '}
              <a href="mailto:info@gifthoria.com" className="text-primary hover:underline">
                info@gifthoria.com
              </a>{' '}
              adresine iletebilirsiniz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReturnPolicyPage;
