"use client";

import React from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// FAQ Accordian Component
const FaqItem = ({ question, answer, isOpen, toggleOpen }: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  toggleOpen: () => void 
}) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left font-semibold text-lg"
        onClick={toggleOpen}
      >
        {question}
        <span className="ml-4">
          {isOpen ? <FiMinus className="text-primary" /> : <FiPlus className="text-gray-500" />}
        </span>
      </button>
      <div className={`mt-3 text-gray-600 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FaqPage = () => {
  const [openIndices, setOpenIndices] = React.useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const generalFaqs = [
    {
      question: "Gifthoria'nın hizmetleri nelerdir?",
      answer: "Gifthoria olarak sevdiklerinize özel mektuplar, hediyeler, fotoğraflar ve daha fazlasını göndermenizi sağlıyoruz. Mektup yazma ve hediye seçme gibi hizmetlerimiz bulunmaktadır. Detaylı bilgi için 'Hizmetlerimiz' sayfasını ziyaret edebilirsiniz."
    },
    {
      question: "Siparişimi nasıl verebilirim?",
      answer: "Siparişlerinizi web sitemiz veya mobil uygulamamız üzerinden kolayca verebilirsiniz. 'Hemen Sipariş Ver' butonuna tıklayarak istediğiniz hizmeti seçebilir, kişiselleştirmelerinizi yapabilir ve ödemenizi güvenle gerçekleştirebilirsiniz. Üye olmadan da sipariş verebilirsiniz, ancak üyelik daha hızlı teslimat ve özel avantajlar sunar."
    },
    {
      question: "Üyelik oluşturmak zorunlu mu?",
      answer: "Evet, üyelik oluşturmak zorunludur. Üyelik sayesinde daha hızlı sipariş verme, sipariş geçmişinizi görüntüleme ve özel indirimlerden yararlanma gibi avantajlardan faydalanabilirsiniz."
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer: "Kredi kartı, havale ve EFT ile ödeme seçeneklerimiz bulunmaktadır. Tüm ödemeleriniz SSL protokolü ile güvence altındadır."
    },
    {
      question: "İade ve değişim politikanız nedir?",
      answer: "Ürün veya hizmetlerimizle ilgili herhangi bir memnuniyetsizlik durumunda, teslimat tarihinden itibaren 7 gün içinde iade talebinde bulunabilirsiniz. Kişiselleştirilmiş ürünlerde iade ve değişim yapılamamaktadır. Detaylı bilgi için müşteri hizmetlerimizle iletişime geçebilirsiniz."
    }
  ];

  const orderFaqs = [
    {
      question: "Siparişimin durumunu nasıl takip edebilirim?",
      answer: "Siparişinizi tamamladıktan sonra size bir takip numarası verilecektir. Bu numara ile web sitemizin 'Sipariş Takip' bölümünden veya mobil uygulamamızdan siparişinizin durumunu anlık olarak takip edebilirsiniz."
    }
  ];

  const accountFaqs = [
    {
      question: "Hesabımı nasıl oluşturabilirim?",
      answer: "Sitemizin sağ üst köşesindeki 'Kayıt Ol' butonuna tıklayarak hesap oluşturabilirsiniz. E-posta adresiniz, telefon numaranız ve belirlediğiniz şifre ile hızlıca kayıt olabilirsiniz. Sosyal medya hesaplarınızla da giriş yapabilirsiniz."
    },
    {
      question: "Şifremi unuttum, ne yapmalıyım?",
      answer: "Giriş sayfasındaki 'Şifremi Unuttum' bağlantısına tıklayarak şifre sıfırlama işlemi başlatabilirsiniz. E-posta adresinize gönderilecek bağlantı ile yeni şifrenizi belirleyebilirsiniz."
    },
    {
      question: "Kişisel bilgilerimi nasıl güncelleyebilirim?",
      answer: "Hesabınıza giriş yaptıktan sonra 'Hesabım' > 'Profil Bilgileri' bölümünden kişisel bilgilerinizi güncelleyebilirsiniz. Adres, telefon, e-posta gibi bilgilerinizi buradan değiştirebilirsiniz."
    },
    {
      question: "Hediye çeki veya indirim kodumu nasıl kullanabilirim?",
      answer: "Hediye çeki veya indirim kodunuzu sipariş aşamasında 'İndirim Kodu Kullan' bölümüne girerek kullanabilirsiniz. Kodunuz geçerli ise indirim tutarı otomatik olarak toplam tutardan düşülecektir."
    },
    {
      question: "Hesabımı nasıl silebilirim?",
      answer: "Hesabınızı silmek için 'Hesabım' > 'Ayarlar' > 'Hesabı Sil' adımlarını izleyebilirsiniz. Hesap silme işlemi geri alınamaz ve tüm verileriniz sistemimizden kaldırılır. Alternatif olarak müşteri hizmetlerimizle iletişime geçerek de bu işlemi gerçekleştirebilirsiniz."
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sıkça Sorulan Sorular</h1>
              <p className="text-xl text-gray-600">
                Gifthoria hakkında merak ettiğiniz her şey
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                  placeholder="Sorunuzu arayın..."
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Sections */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Genel Sorular</h2>
              
              <div className="mb-12">
                {generalFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndices.includes(index)}
                    toggleOpen={() => toggleFaq(index)}
                  />
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Sipariş ve Teslimat</h2>
              
              <div className="mb-12">
                {orderFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index + generalFaqs.length}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndices.includes(index + generalFaqs.length)}
                    toggleOpen={() => toggleFaq(index + generalFaqs.length)}
                  />
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Hesap ve Ödeme</h2>
              
              <div className="mb-12">
                {accountFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index + generalFaqs.length + orderFaqs.length}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndices.includes(index + generalFaqs.length + orderFaqs.length)}
                    toggleOpen={() => toggleFaq(index + generalFaqs.length + orderFaqs.length)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Sorunuzu bulamadınız mı?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Aradığınız cevabı bulamadıysanız, müşteri hizmetlerimizle iletişime geçebilirsiniz. 
              Size en kısa sürede yardımcı olmaktan memnuniyet duyarız.
            </p>
            <div className="flex justify-center">
              <a href="https://wa.me/905369232825" className="btn btn-primary rounded-full px-8 py-3 font-semibold text-white">
                İletişime Geç
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;
