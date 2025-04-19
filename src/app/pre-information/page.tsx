
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PreInformationPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">ÖN BİLGİLENDİRME FORMU</h1>
            <div className="prose prose-lg">
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. SATICI BİLGİLERİ</h2>
              <div className="space-y-4">
                <p><strong>Unvanı:</strong> Meral Güneş</p>
                <p><strong>Adresi:</strong> Konak Mah. 1.Badem Sok. Lotus Ofis No:26 B Blok Nilüfer/Bursa</p>
                <p><strong>Telefon Numarası:</strong> +90 536 923 28 25</p>
                <p><strong>MERSİS Numarası:</strong> 4341222374</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. ALICI BİLGİLERİ</h2>
              <div className="space-y-4">
                <p><strong>Adı Soyadı/Unvanı:</strong> Bu form, her müşteriye özel düzenlenmeyecek olup, alıcıya ait bilgiler sipariş sırasında tüketici tarafından beyan edilmektedir.</p>
                <p><strong>Adresi:</strong> Bu form, her müşteriye özel düzenlenmeyecek olup, alıcıya ait bilgiler sipariş sırasında tüketici tarafından beyan edilmektedir.</p>
                <p><strong>Telefon Numarası:</strong> Bu form, her müşteriye özel düzenlenmeyecek olup, alıcıya ait bilgiler sipariş sırasında tüketici tarafından beyan edilmektedir.</p>
                <p><strong>E-posta adresi:</strong> Bu form, her müşteriye özel düzenlenmeyecek olup, alıcıya ait bilgiler sipariş sırasında tüketici tarafından beyan edilmektedir.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. KONU</h2>
              <p className="mb-6">İşbu Ön Bilgilendirme Formu'nun konusu, ALICI'nın www.gifthoria.com adlı internet sitesi ("İnternet Sitesi") üzerinden satılan ve aşağıda nitelik ile satış fiyatı belirlenen mal ve hizmetlerin satışı ve teslimi ile ilgili olarak Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince bilgilendirilmesidir.</p>

              <div className="space-y-4">
                <p><strong>Ürün/Hizmet:</strong> Kişiye özel tasarlanmış hediyelik ürün ve aksesuarlar</p>
                <p><strong>Ürün/Hizmet Detayı:</strong> Ürün, alıcının isteğine göre özel olarak hazırlanan; üzerine yazı, isim, tarih, görsel ya da özel mesaj eklenmiş kişiselleştirilmiş tasarımlar içermektedir. (Örnek: İsim baskılı kupa, kişisel mesajlı tişört, özel figürlü anahtarlık, mektup vb.)</p>
                <p><strong>Ürün/Hizmet Adedi:</strong> Ürün adedi, alıcı tarafından sipariş sırasında belirlenmekte olup, sistem üzerinde belirtilen miktara göre işlem yapılmaktadır.</p>
                <p><strong>Toplam KDV:</strong> Katma Değer Vergisi (KDV), her ürün için ilgili mevzuat kapsamında hesaplanmakta ve sipariş onay ekranında tüketiciye gösterilmektedir.</p>
                <p><strong>Ürün Teslim/Kargo Ücreti:</strong> 0 TL</p>
                <p><strong>KDV Dahil Toplam Tutar:</strong> Sipariş edilen ürünün vergiler dahil nihai satış fiyatı; ürün bedeli, KDV ve varsa kargo ücreti dahil şekilde sistem tarafından hesaplanmakta ve ödeme öncesinde tüketiciye gösterilmektedir.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. ÜRÜNLERİN TESLİMATI VE ÖDEME ŞEKLİ</h2>
              <div className="space-y-4">
                <p>4.1 İnternet sitesi üzerinden hizmet satışlarında, hizmetin niteliğine göre anında ifa ve teslim gerçekleştirilir. Böyle bir durumda fatura kalıcı veri saklayıcısı aracı ile alıcıya gönderilir.</p>
                <p>4.2 İnternet sitesi üzerinden ürün satışlarında ürün, alıcının internet sitesi üzerinde belirttiği teslimat adresine veya kendisinin yönlendirdiği adresteki kişi/kuruma, faturasıyla birlikte en geç 30 gün içinde teslim edilir. Teslim, kargo masrafları alıcıya aittir.Teslim, kargo masrafları satıcıya aittir. İşbu yükümlülüğünün yerine getirilmemesi durumunda alıcı, sözleşmeyi feshedebilir. Sözleşmenin feshi durumunda, satıcı tahsil edilen tüm ödemeleri fesih bildiriminin kendisine ulaştığı tarihten itibaren 14 gün içinde alıcıya iade eder.</p>
                <p>4.3 Sipariş konusu mal ya da hizmet ediminin yerine getirilmesinin imkansızlaştığı hallerde satıcı bu durumu öğrendiği tarihten itibaren üç gün içinde alıcıya kalıcı veri saklayıcısı ile bildirecek, varsa teslimat masrafları da dâhil olmak üzere tahsil edilen tüm ödemeleri bildirim tarihinden itibaren en geç on dört gün içinde iade edecektir.</p>
                <p>4.4 Alıcı, ürünü teslim aldığı anda kontrol etmekle ve üründe kargodan kaynaklanan bir sorun gördüğünde, ürünü kabul etmemekle ve kargo firması yetkilisine tutanak tutturmakla sorumludur. Aksi halde satıcı sorumluluk kabul etmeyecektir.</p>
                <p>4.5 Alıcı, kendi anlaşmalı olduğu Bankası ile internet sitesi üzerinden kredi kartı ile taksitli alışveriş yapabilir. Bu durumdaki alışveriş, doğrudan anılan kuruluşca sağlanmış taksitli ödeme imkanıdır; bu çerçevede gerçekleşen satışlar işbu sözleşmenin tarafları yönünden taksitli satış sayılmaz.</p>

                <div className="space-y-4">
                  <p><strong>Ödeme Şekli:</strong> Kredi kartı ile ödeme</p>
                  <p><strong>Teslim Edilecek Kişi /Kurum Ad-Soyad/Unvan Bilgisi:</strong> Sipariş sırasında belirtilen alıcı adına ürün teslimi yapılacaktır. Dijital ürünlerde teslim, alıcının sipariş formunda beyan ettiği e-posta adresine gerçekleştirilir. Fiziki ürünlerde teslimat, kargo firması aracılığıyla alıcının belirttiği adrese yapılır.</p>
                  <p><strong>Teslim Edilecek Kişi/Kurum Telefon Numarası:</strong> Alıcının sipariş sırasında sisteme girdiği iletişim bilgileri kullanılır. Bu bilgiler, gerektiğinde teslimat firması veya müşteri hizmetleri tarafından iletişim sağlamak amacıyla kullanılır.</p>
                  <p><strong>Teslimat Adresi:</strong> Fiziki ürünler için, alıcının sipariş sırasında bildirdiği açık teslimat adresi esas alınır ve ürün kargo firması aracılığıyla bu adrese teslim edilir. Dijital ürünlerde fiziksel bir teslimat adresi gerekmez; ürün, elektronik ortamda alıcının e-posta adresine iletilir.</p>
                  <p><strong>Fatura Adresi:</strong> İşletmemiz yalnızca elektronik fatura (e-Fatura) düzenlemektedir. Faturalar, alıcının sipariş sırasında beyan ettiği e-posta adresine elektronik ortamda iletilir. Fiziki fatura gönderimi yapılmamaktadır.</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. GENEL HÜKÜMLER</h2>
              <div className="space-y-4">
                <p>5.1 Alıcı, internet sitesinde gösterilen ürün ve hizmetlerin temel nitelikleri, satış fiyatı, ödeme şekli ve teslimatına ilişkin ön bilgileri okuyup, bilgi sahibi olduğunu ve elektronik ortamda gerekli onayı verdiğini kabul eder.</p>
                <p>5.2 Satıcı, sözleşme konusu ürünün eksiksiz bir şekilde, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</p>
                <p>5.3 Sözleşmeye konu olan ürün veya hizmetin, internet sitesi üzerinde sahip olması gereken özellikleri taşımaması sebebiyle sözleşmeye aykırılık teşkil etmesi durumunda alıcı, satılanı geri vermeye hazır olduğunu bildirerek sözleşmeden dönme, satılanı alıkoyup ayıp oranında satış bedelinden indirim isteme, aşırı bir masraf gerektirmediği takdirde, bütün masrafları satıcıya ait olmak üzere satılanın ücretsiz onarılmasını isteme, imkân varsa, satılanın ayıpsız bir misli ile değiştirilmesini isteme seçimlik haklarından birini kullanabilir. Ücretsiz onarım veya malın ayıpsız misli ile değiştirilmesi haklarından birinin seçilmesi durumunda bu talebin satıcıya, yöneltilmesinden itibaren azami 30 iş günü içinde bu talep yerine getirilir. Alıcının sözleşmeden dönme veya ayıp oranında bedelden indirim hakkını seçtiği durumlarda, ödemiş olduğu bedelin tümü veya bedelden yapılan indirim tutarı derhâl alıcıya iade edilir. Ayıplı maldan sorumluluk, ayıp daha sonra ortaya çıkmış olsa bile, malın alıcıya teslim tarihinden itibaren iki yıllık zamanaşımına tabidir. Alıcının, sözleşmenin kurulduğu tarihte ayıptan haberdar olduğu veya haberdar olmasının kendisinden beklendiği hâllerde, sözleşmeye aykırılık söz konusu olmaz. Bunların dışındaki ayıplara karşı alıcının seçimlik hakları yukarıda belirtildiği üzere mevcuttur.</p>
                <p>5.4 Alıcı tarafından herhangi bir nedenle ürün/hizmet bedeli ödenmez veya banka kayıtlarında iptal edilir ise, satıcı ürünün/hizmetin teslimi yükümlülüğünde olmayacaktır.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. CAYMA HAKKI</h2>
              <div className="space-y-4">
                <p>6.1 Alıcı, 14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin mal/ürün satışlarına ilişkin olarak sözleşmeden cayma hakkına sahiptir. Elektronik ortamda anında ifa edilen hizmetler veya alıcıya anında teslim edilen gayrimaddi mallara ilişkin satışlarda cayma hakkı kullanılamaz.</p>
                <p>6.2 Alici 14 günlük süre içerisinde cayma hakki kullanilacak ürünleri kutusu, ambalaji, varsa standart aksesuarlari ile birlikte eksiksiz ve hasarsiz olarak teslim etmelidir. Ürün koruma bandinin sökülmesi, hasar görmesi, ürün-aksesuarlarda eksiklik olmasi ya da ürünlerin kullanilmasi, tahrip edilmesi halinde cayma hakki kullanilamaz.</p>
                <p>6.3 Alıcının cayma hakkı süresi, hizmet alımına ilişkin sözleşmelerde sözleşmenin kurulduğu gün; ürün alımına ilişkin sözleşmelerde ise alıcının veya alıcı tarafından belirlenen üçüncü kişinin malı teslim aldığı gün başlar. Aynı zamanda alıcı, sözleşmenin kurulmasından malın teslimine kadar olan süre içinde de cayma hakkını kullanabilir.</p>
                <p>6.4 Cayma hakkı süresinin belirlenmesinde; tek sipariş konusu olup ayrı ayrı teslim edilen ürünlerde, alıcının veya alıcı tarafından belirlenen üçüncü kişinin son ürünü teslim aldığı gün; birden fazla parçadan oluşan ürünlerde, alıcının veya alıcı tarafından belirlenen üçüncü kişinin son parçayı teslim aldığı gün; belirli bir süre boyunca ürünün düzenli tesliminin yapıldığı sözleşmelerde, alıcının veya alıcı tarafından belirlenen üçüncü kişinin ilk malı teslim aldığı gün esas alınır.</p>
                <p>6.5 Cayma hakkının kullanıldığına dair bildirimin cayma hakkı süresi dolmadan, kalıcı veri saklayıcısı ile satıcıya yöneltilmesi gerekmektedir. İlgili hakkınızı www.gifthoria.com internet sitemiz üzerinden, +90 536 923 28 25 telefon numarası üzerinden veya info@gifthoria.com eposta üzerinden kullanabilirsiniz.</p>
                <p>6.6 Satıcı, alıcının cayma hakkını kullandığına ilişkin bildirimin kendisine ulaştığı tarihten itibaren 14 gün içinde, varsa malın alıcıya teslim, kargo masrafları da dahil olmak üzere tahsil edilen tüm ödemeleri iade edecektir. Satıcı, söz konusu tüm geri ödemeleri, alıcının satın alırken kullandığı ödeme aracına uygun bir şekilde ve alıcıya herhangi bir masraf veya yükümlülük getirmeden tek seferde gerçekleştirecektir.</p>
                <p>6.7 Alıcı cayma hakkını kullandığına ilişkin bildirimi satıcıya yönelttiği tarihten itibaren 10 gün içinde malı satıcıya geri göndermek zorundadır.</p>
                <p>6.8 Alıcı aşağıdaki sözleşmelerde cayma hakkını kullanamaz:</p>
                <p className="pl-6">a) Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve satıcı kontrolünde olmayan mal veya hizmetlere ilişkin sözleşmeler.</p>
                <p className="pl-6">b) Alıcının istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara ilişkin sözleşmeler.</p>
                <p className="pl-6">c) Çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmeler.</p>
                <p className="pl-6">ç) Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmeler.</p>
                <p className="pl-6">d) Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallara ilişkin sözleşmeler.</p>
                <p className="pl-6">e) Malın tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemelerine ilişkin sözleşmeler.</p>
                <p className="pl-6">f) Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınların teslimine ilişkin sözleşmeler.</p>
                <p className="pl-6">g) Belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler.</p>
                <p className="pl-6">ğ) Elektronik ortamda anında ifa edilen hizmetler veya alıcıya anında teslim edilen gayrimaddi mallara ilişkin sözleşmeler.</p>
                <p className="pl-6">h) Cayma hakkı süresi sona ermeden önce, alıcının onayı ile ifasına başlanan hizmetlere ilişkin sözleşmeler.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. MÜCBİR SEBEPLER</h2>
              <div className="space-y-4">
                <p>7.1 Sözleşmenin yürürlüğe girdiği tarihte mevcut olmayan veya öngörülemeyen, tarafların kontrolleri dışında gelişen, ortaya çıkmasıyla taraflardan birinin ya da her ikisinin de sözleşme ile yüklendikleri borç ve sorumluluklarını kısmen ya da tamamen yerine getirmelerini ya da bunları zamanında yerine getirmelerini olanaksızlaştıran durumlar, mücbir sebep (Doğal afet, savaş, terör, ayaklanma, değişen mevzuat hükümleri, el koyma veya grev, lokavt, üretim ve iletişim tesislerinde önemli ölçüde arıza vb.) olarak kabul edilecektir. Mücbir sebep şahsında gerçekleşen taraf, diğer tarafa durumu en kısa sürede bildirecektir.</p>
                <p>7.2 Mücbir sebebin devamı esnasında tarafların edimlerini yerine getirememelerinden dolayı herhangi bir sorumlulukları doğmayacaktır. Mücbir sebep durumu 30 gün süreyle devam ederse, taraflardan her birinin, tek taraflı olarak fesih hakkı doğmuş olacaktır.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. UYUŞMAZLIK DURUMUNDA YETKİLİ MAHKEME</h2>
              <p>8.1 Gümrük ve Ticaret Bakanlığınca ilan edilen değere kadar Tüketici Hakem Heyetleri, aşan durumlarda alıcının ve satıcının yerleşim yerindeki Tüketici Mahkemeleri ve İcra Müdürlükleri yetkilidir.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. KABUL BEYANI</h2>
              <p>9.1 Alıcı, İnternet Sitesinde yer alan Ön Bilgilendirme Formu'nda yazılı tüm koşulları ve açıklamaları okuduğunu, satışa konu ürünler/hizmetlerin temel özellik, nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları, satıcı ve satışa konu ürünler/hizmetler ile ilgili diğer tüm hususlarda önceden bilgi sahibi olduğunu, tamamını internet sitesinde elektronik ortamda gördüğünü, okuduğunu, içeriğini kabul ettiğini ve yine tüm bunlara elektronik ortamda onay, kabul iznini vererek ürünleri/hizmetleri sipariş ile işbu hükümleri kabul ettiğini kabul ve beyan eder.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PreInformationPage;
