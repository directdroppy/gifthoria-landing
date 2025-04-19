
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Kullanım Koşulları</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-4">Son Güncelleme: 17.04.2025</p>
              
              <p className="mb-6">
                Kullanım Koşulları, www.gifthoria.com ve bu internet sitesi ve Gifthoria mobil uygulaması (iOS ve Android) dahil olmak üzere, tüm dijital platformlar üzerinden gerçekleştirilen erişim ve işlemleri kapsar.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Mahremiyet ve Kişisel Verilerin Korunması</h2>
              <p className="mb-6">
                Bahsi geçen platformlar üzerinden kişisel verileriniz işlenir. Bu konuda ziyaretçiler ve kullanıcılar için hazırladığımız Aydınlatma Bildirimine istediğiniz zaman erişim sağlayabilirsiniz. Bu Bildirimi okumayı unutmayınız.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Fikri Mülkiyet</h2>
              <p className="mb-6">
                Kullanım Koşullarının konu edildiği platform, Meral Güneş tarafından veya onun adına yayınlanan tüm metin, kod, grafikler, logolar, resimler, marka, patent, tasarım, yöntem gibi tescilli veya tescilsiz tüm fikri mülkiyet hakları Meral Güneş tüzel kişiliğine aittir. Yazılı izin olmaksızın bunların çoğaltılması veya kopyalanması kesinlikle yasaktır.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Genel Hükümler</h2>
              <p className="mb-6">
                Ziyaretçiler ve kullanıcılar, platform kullanımını yalnızca hukuka uygun amaçlarla gerçekleştireceklerini ve üçüncü kişilerin haklarına tecavüz teşkil edecek nitelikteki herhangi bir faaliyette bulunmayacaklarını kabul ederler.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Sorumluluğun Sınırlandırılması</h2>
              <p className="mb-6">
                Adreslerin kullanımından doğan zararlara ilişkin Meral Güneş sorumluluğu, kast ve ağır ihmal ile sınırlıdır.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Uyuşmazlık Çözümü</h2>
              <p className="mb-6">
                Kullanım Şartlarının uygulanmasından veya yorumlanmasından doğacak her türlü uyuşmazlığın çözümünde, Türkiye Cumhuriyeti yasaları (Türk Hukuku) uygulanır. İşbu Kullanım Koşulları ile ilgili ortaya çıkabilecek uyuşmazlıkların çözümünde, Bursa Merkez Mahkemeleri ve İcra Daireleri münhasır yetkilidir.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
