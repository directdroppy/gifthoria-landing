
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const KVKKPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">6698 SK kapsamında Aydınlatma Bildirimi</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-4">Son Güncelleme: 17.04.2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Veri Sorumlusu Kimliği</h2>
              <p className="mb-6">
                Meral Güneş<br />
                İletişim adresi: info@gifthoria.com
              </p>

              <p className="mb-6">
                İşbu aydınlatma metni www.gifthoria.com adresini ziyaret eden ve kullanan ilgili kişilerin kişisel verilerini konu edinmektedir.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
              <p className="mb-6">
                www.gifthoria.com adresi üzerinden kişisel verileriniz şu amaçlarla işlenir:
              </p>
              <p className="mb-6">
                Web sitemizde kullanıcı deneyimini geliştirmek, istatistiksel analizler yapmak ve hizmetlerimizi iyileştirmek amacıyla çerez (cookie) kullanımı bulunmaktadır. Çerezler hakkında detaylı bilgiye www.gifthoria.com adresinde yer alan Çerez Politikası metni üzerinden ulaşılabilir.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
              <p className="mb-6">
                Kişisel verilerin aktarılmaması ve açıklanmaması önceliğimizdir. Bununla birlikte şirketimiz, hizmet sunumunun gereği olarak bazı kişisel verileri üçüncü taraf gerçek veya tüzel kişilerle paylaşmaktadır. Bu paylaşımlar, KVKK'nın 8. ve 9. maddeleri uyarınca ve yalnızca aşağıdaki amaçlar doğrultusunda gerçekleştirilmektedir:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Kargo / Lojistik Şirketleri: Sipariş teslimatının yapılabilmesi amacıyla ad, soyad, adres ve iletişim bilgileri paylaşılır.</li>
                <li>Muhasebe / Finans Firmaları: Fatura düzenleme ve yasal kayıtların tutulması amacıyla vergi dairesi, fatura bilgileri gibi veriler işlenebilir.</li>
                <li>E-Fatura Sistemleri / Entegratörler: Elektronik fatura gönderimi için e-posta adresi ve fatura detayları paylaşılır.</li>
                <li>Barındırma / Web Sunucu Hizmeti Sağlayıcıları: Web sitesinin çalışmasını sağlayan hizmet sağlayıcılarda sistemsel olarak bazı veriler işlenebilir.</li>
                <li>Pazarlama ve Analiz Araçları: Kullanıcı davranışları ve ziyaret bilgileri anonimleştirilmiş şekilde analiz amaçlı paylaşılabilir.</li>
                <li>Ödeme Kuruluşları: Online ödeme işlemlerinin gerçekleştirilmesi amacıyla gerekli bilgiler aktarılır.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
              <p className="mb-6">
                Verileriniz adı geçen adreste yer alan ilgili alanları işleyerek gönder butonuna tıklamanızla birlikte web-adresi ara yüzüne yüklenmektedir.
              </p>
              <p className="mb-6">
                Verilerinizi işlerken Gifthoria olarak kişisel verileri işlerken aşağıdaki hukuki sebeplere dayanmaktayız:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (KVKK m.5/2-c)</li>
                <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi (KVKK m.5/2-ç)</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması (KVKK m.5/2-e)</li>
                <li>İlgili kişinin açık rızasının bulunması (KVKK m.5/1)</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">İlgili Kişinin Hakları</h2>
              <p className="mb-6">
                İlgili kişilerin 6698 Sayılı Kanun'da yer alan haklarını yukarıdaki yazışma adresine başvuruda bulunarak her zaman işletebilirler.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default KVKKPage;
