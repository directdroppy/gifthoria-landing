
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const CookiesPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Çerez Bildirimi</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-4">Son Güncelleme: 17.04.2025</p>
              
              <p className="mb-6">
                Çerez bildirimi, www.gifthoria.com adresini ziyaret eden ve kullanan kişileri bilgilendirmek amacıyla hazırlanmıştır.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Çerez Nedir?</h2>
              <p className="mb-6">
                Çerezler, bir internet sitesini ziyaret ettiğiniz zaman bilgisayar veya mobil cihazınızda saklanan ve söz konusu cihazın tespit edilmesine olanak sağlayan, çoğunlukla harf veya sayılardan oluşan küçük metin dosyalarıdır.
              </p>

              <p className="mb-6">
                Yukarıda bahsedilen adresin ziyaretçileri ve kullanıcılarıyla ilgili çerezler işleriz. Bununla birlikte adresler üzerinde hem birinci parti çerezler (doğrudan bizim tarafımızdan yerleştirilen) hem de üçüncü parti çerezler (bizim haricimizdeki sunucular tarafından yerleştirilen) kullanılmaktadır. Kullandığımız ve sorumluluğunu üstlendiğimiz birinci parti çerez türleri şu şekildedir:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Zorunlu (Temel) Çerezler</h3>
              <p className="mb-6">
                Adreste yer alan fonksiyonların düzgün bir şekilde çalışabilmesi ve adres üzerinden sunulan hizmetin eksiksiz yerine getirilebilmesi için kullanımı zorunlu olan çerezlerdir. Örneğin, adreste oturum açtığınızda devreye giren kimlik doğrulama çerezleri, bir sayfadan diğerine geçişinizde etkin olan oturumunuzun devam etmesini sağlamaktadır. Bu çerezlerin devre dışı bırakılması fonksiyonların kullanılamaz hale gelmesine neden olabilir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Kalıcı Çerezler</h3>
              <p className="mb-6">
                Adresin işlevselliğini artırmak, ziyaretçilerimize daha hızlı ve iyi bir hizmet sunmak amacıyla kullanılan ve tarayıcılar vasıtasıyla tarafınızca silininceye dek veya son kullanım tarihine kadar geçerliliğini koruyan çerezlerdir. Bu tür çerezler, yaptığınız tercihleri hatırlamak ve kullanımınızı kişiselleştirmek için kullanır. Bu çerezler, kullanım parolanızı kaydeden ve oturumunuzun sürekli açık kalmasını sağlayan, böylece her ziyaretinizde birden fazla kez parola girme zahmetinden kurtaran, adresi daha sonraki ziyaretlerinizde sizi hatırlayan ve tanıyan çerezleri içerir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">İşlevsel ve Analitik Çerezler</h3>
              <p className="mb-6">
                Adrese nereden bağlandığınız, hangi içeriği görüntülediğiniz ve ziyaretinizin süresi gibi adresi nasıl kullandığınızı belirlemek için kullanılan çerezlerdir.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Hangi Çerezler Hangi Amaçlar ile Kullanılmaktadır?</h2>
              <p className="mb-6">
                Gifthoria / Meral Güneş olarak yukarıda bahsi geçen adreslerde aşağıda belirtilen amaçlar ile sınırlı olmak kaydıyla Çerez Bildirimine konu adreslerde çerez verileri işlemekteyiz:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Adresin çalışması için gerekli temel fonksiyonları gerçekleştirmek,</li>
                <li>Adresi analiz etmek ve performansını arttırmak.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Çerez Kullanımını Nasıl Kontrol Edebilirsiniz?</h2>
              <p className="mb-6">
                Adresimizi ziyaret etmek ve kullanmak için çerezlerin işlenmesi zorunlu değildir; tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkânına sahipsiniz. Tarayıcınızı çerezleri engelleyecek şekilde ayarlamanız halinde, adresleri kullanmaya devam edebilirsiniz; ancak bu durumda adreslerdeki tüm fonksiyonlara erişiminiz sınırlı olabilir, kullanıcı deneyiminizin kalitesi düşebilir.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div><strong>Google Analytics:</strong></div>
                <div><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></div>
                
                <div><strong>Google Chrome:</strong></div>
                <div><a href="http://www.google.com/support/chrome/bin/answer.py?hl=enanswer=95647" className="text-primary hover:underline">http://www.google.com/support/chrome/bin/answer.py?hl=enanswer=95647</a></div>
                
                <div><strong>Internet Explorer:</strong></div>
                <div><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-primary hover:underline">https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies</a></div>
                
                <div><strong>Mozilla Firefox:</strong></div>
                <div><a href="http://support.mozilla.com/en-US/kb/Cookies" className="text-primary hover:underline">http://support.mozilla.com/en-US/kb/Cookies</a></div>
                
                <div><strong>Opera:</strong></div>
                <div><a href="http://www.opera.com/browser/tutorials/security/privacy/" className="text-primary hover:underline">http://www.opera.com/browser/tutorials/security/privacy/</a></div>
                
                <div><strong>Safari:</strong></div>
                <div><a href="https://support.apple.com/kb/ph19214?locale=tr_TR" className="text-primary hover:underline">https://support.apple.com/kb/ph19214?locale=tr_TR</a></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiesPage;
