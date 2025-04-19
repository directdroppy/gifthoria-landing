
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const DistanceSalesPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">MESAFELİ SATIŞ SÖZLEŞMESİ</h1>
            <div className="prose prose-lg">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. TANIMLAR</h2>
                <p><strong>Satıcı:</strong> Kamu tüzel kişileri de dahil olmak üzere ticari veya mesleki amaçlarla tüketiciye mal sunan ya da mal sunanın adına ya da hesabına hareket eden gerçek veya tüzel kişiyi,</p>
                <p><strong>Tüketici, Alıcı:</strong> Ticari veya mesleki olmayan amaçlarla hareket eden gerçek veya tüzel kişiyi,</p>
                <p><strong>Mal/Ürün:</strong> Alışverişe konu olan; taşınır eşya, konut veya tatil amaçlı taşınmaz mallar ile elektronik ortamda kullanılmak üzere hazırlanan yazılım, ses, görüntü ve benzeri her türlü gayri maddi malları,</p>
                <p><strong>Hizmet:</strong> Bir ücret veya menfaat karşılığında yapılan ya da yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici işleminin konusunu,</p>
                <p><strong>Mesafeli Sözleşme:</strong> Satıcı ile tüketicinin eş zamanlı fiziksel varlığı olmaksızın, mal veya hizmetlerin uzaktan pazarlanmasına yönelik olarak oluşturulmuş bir sistem çerçevesinde, taraflar arasında sözleşmenin kurulduğu ana kadar ve kurulduğu an da dahil olmak üzere uzaktan iletişim araçlarının kullanılması suretiyle kurulan sözleşmeleri,</p>
                <p><strong>Kalıcı Veri Saklayıcısı:</strong> Tüketicinin gönderdiği veya kendisine gönderilen bilgiyi, bu bilginin amacına uygun olarak makul bir süre incelemesine elverecek şekilde kaydedilmesini ve değiştirilmeden kopyalanmasını sağlayan ve bu bilgiye aynen ulaşılmasına imkân veren kısa mesaj, elektronik posta, internet, disk, CD, DVD, hafıza kartı ve benzeri her türlü araç veya ortamı ifade eder.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. SÖZLEŞMENİN KONUSU VE TARAFLAR</h2>
                <p>2.1 İşbu sözleşme, aşağıda detay bilgileri bulunan ALICI'nın, SATICI tarafından işletilmekte olan www.gifthoria.com (bundan sonra İNTERNET SİTESİ olarak anılacaktır) internet sitesi üzerinden yapmış olduğu ürün ve hizmetlerin satışı ve ürünlerin teslimat adresine gönderimi ile ilgili olarak Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak, hukuk ve yükümlülüklerini belirler. Sözleşmede hüküm bulunmayan hallerde yasal mevzuat hükümleri uygulanır.</p>
                <p>2.2 Alıcı, satışa konu mal veya hizmetlerin temel nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları ve satışa konu mal veya hizmetler ile ilgili tüm ön bilgiler ve cayma hakkı konusunda bilgi sahibi olduğunu, bu ön bilgileri elektronik ortamda teyit ettiğini ve sonrasında mal veya hizmetleri sipariş verdiğini iş bu sözleşme hükümlerince kabul ve beyan eder. İnternet sitesinin ödeme sayfasında yer alan ön bilgilendirme formu ve fatura işbu sözleşmenin ayrılmaz parçalarıdır.</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Satıcı Bilgileri</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div><strong>Unvanı:</strong></div>
                  <div>Meral Güneş</div>
                  
                  <div><strong>Adresi:</strong></div>
                  <div>Konak Mah. 1.Badem Sok. Lotus Ofis No:26 B Blok Nilüfer/Bursa</div>
                  
                  <div><strong>Telefon Numarası:</strong></div>
                  <div>+90 536 923 28 25</div>
                  
                  <div><strong>MERSİS Numarası:</strong></div>
                  <div>4341222374</div>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">2.4 Alıcı Bilgileri</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div><strong>Adı Soyadı/Unvanı:</strong></div>
                  <div>Sipariş işlemi esnasında alıcı tarafından sistem üzerinde beyan edilen ad, soyad ya da unvan esas alınır.</div>
                  
                  <div><strong>Adresi:</strong></div>
                  <div>Teslimat ve fatura adresi, alıcı tarafından sipariş sırasında sistemde girilen bilgilere göre belirlenir.</div>
                  
                  <div><strong>Telefon Numarası:</strong></div>
                  <div>Teslimatın sağlıklı bir şekilde gerçekleştirilebilmesi amacıyla, sipariş esnasında alıcı tarafından sağlanan iletişim numarasıdır.</div>
                  
                  <div><strong>E-posta adresi:</strong></div>
                  <div>Tüm dijital teslimatlar ve e-fatura gönderimi için kullanılacak olan e-posta adresi, alıcı tarafından sipariş sırasında beyan edilir.</div>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. SÖZLEŞME KONUSU ÜRÜN VE HİZMETLER</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div><strong>Ürün/Hizmet:</strong></div>
                  <div>Satışa konu ürün veya hizmet, alıcının talebine göre özelleştirilen hediyelik ürünler, dijital tasarımlar veya baskılı kişisel ürünlerdir.</div>
                  
                  <div><strong>Ürün/Hizmet Detayı:</strong></div>
                  <div>Sipariş edilen ürün/hizmet; alıcının talebi doğrultusunda kişiselleştirilen, üzerinde özel isim, tarih, mesaj veya görsel gibi unsurlar bulunan fiziksel ya da dijital tasarım ürünleridir.</div>
                  
                  <div><strong>Ürün/Hizmet Adedi:</strong></div>
                  <div>Adet bilgisi, sipariş sürecinde alıcı tarafından sistem üzerinden belirlenmektedir.</div>
                  
                  <div><strong>Toplam KDV:</strong></div>
                  <div>Satışa konu ürün veya hizmetin KDV tutarı, yürürlükteki vergi mevzuatı uyarınca hesaplanmakta olup, sipariş öncesinde alıcıya açıkça bildirilmektedir.</div>
                  
                  <div><strong>Ürün Teslim/Kargo Ücreti:</strong></div>
                  <div>0 TL</div>
                  
                  <div><strong>KDV Dahil Toplam Tutar:</strong></div>
                  <div>Sipariş edilen ürünün vergiler dahil nihai satış fiyatı; ürün bedeli, KDV ve varsa kargo ücreti dahil şekilde sistem tarafından hesaplanmakta ve ödeme öncesinde tüketiciye gösterilmektedir.</div>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. TESLİMAT</h2>
                <p>4.1 İnternet sitesi üzerinden hizmet satışlarında, hizmetin niteliğine göre anında ifa ve teslim gerçekleştirilir. Böyle bir durumda fatura kalıcı veri saklayıcısı aracı ile alıcıya gönderilir.</p>
                <p>4.2 İnternet sitesi üzerinden ürün satışlarında ürün, alıcının internet sitesi üzerinde belirttiği teslimat adresine veya kendisinin yönlendirdiği adresteki kişi/kuruma, faturasıyla birlikte en geç 30 gün içinde teslim edilir. Teslim, kargo masrafları alıcıya aittir. İşbu yükümlülüğünün yerine getirilmemesi durumunda alıcı, sözleşmeyi feshedebilir. Sözleşmenin feshi durumunda, satıcı tahsil edilen tüm ödemeleri fesih bildiriminin kendisine ulaştığı tarihten itibaren 14 gün içinde alıcıya iade eder.</p>
                <p>4.3 Sipariş konusu mal ya da hizmet ediminin yerine getirilmesinin imkansızlaştığı hallerde satıcı bu durumu öğrendiği tarihten itibaren üç gün içinde alıcıya kalıcı veri saklayıcısı ile bildirecek, varsa teslimat masrafları da dâhil olmak üzere tahsil edilen tüm ödemeleri bildirim tarihinden itibaren en geç on dört gün içinde iade edecektir.</p>
                <p>4.4 Alıcı, ürünü teslim aldığı anda kontrol etmekle ve üründe kargodan kaynaklanan bir sorun gördüğünde, ürünü kabul etmemekle ve kargo firması yetkilisine tutanak tutturmakla sorumludur. Aksi halde satıcı sorumluluk kabul etmeyecektir.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. ÖDEME ŞEKLİ</h2>
                <p>5.1 Alıcı, kendi anlaşmalı olduğu Bankası ile internet sitesi üzerinden kredi kartı ile taksitli alışveriş yapabilir. Bu durumdaki alışveriş, doğrudan anılan kuruluşca sağlanmış taksitli ödeme imkanıdır; bu çerçevede gerçekleşen satışlar işbu sözleşmenin tarafları yönünden taksitli satış sayılmaz.</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div><strong>Ödeme Şekli:</strong></div>
                  <div>Kredi kartı ile ödeme</div>
                  
                  <div><strong>Teslim Edilecek Kişi/Kurum Ad-Soyad/Unvan Bilgisi:</strong></div>
                  <div>Teslim edilecek kişi, sipariş işlemi sırasında sistem üzerinde alıcı tarafından belirtilen kişidir.</div>
                  
                  <div><strong>Teslim Edilecek Kişi/Kurum Telefon Numarası:</strong></div>
                  <div>Teslimatla ilgili doğabilecek gecikme, yönlendirme veya bilgilendirme amacıyla alıcı tarafından beyan edilen numaradır.</div>
                  
                  <div><strong>Teslimat Adresi:</strong></div>
                  <div>Fiziki ürünlerde, teslimat adresi alıcı tarafından sipariş sırasında sisteme girilen adrestir. Dijital ürünlerde, teslimat elektronik ortamda e-posta aracılığıyla yapılır.</div>
                  
                  <div><strong>Fatura Adresi:</strong></div>
                  <div>İşbu sözleşme kapsamında yalnızca e-fatura düzenlenmektedir. Faturalar, alıcının beyan ettiği e-posta adresine elektronik ortamda gönderilir.</div>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. GENEL HÜKÜMLER</h2>
                <p>6.1 Alıcı, internet sitesinde gösterilen ürün ve hizmetlerin temel nitelikleri, satış fiyatı, ödeme şekli ve teslimatına ilişkin ön bilgileri okuyup, bilgi sahibi olduğunu ve elektronik ortamda gerekli onayı verdiğini kabul eder.</p>
                <p>6.2 Satıcı, sözleşme konusu ürünün eksiksiz bir şekilde, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</p>
                <p>6.3 Sözleşmeye konu olan ürün veya hizmetin, internet sitesi üzerinde sahip olması gereken özellikleri taşımaması sebebiyle sözleşmeye aykırılık teşkil etmesi durumunda alıcı, satılanı geri vermeye hazır olduğunu bildirerek sözleşmeden dönme, satılanı alıkoyup ayıp oranında satış bedelinden indirim isteme, aşırı bir masraf gerektirmediği takdirde, bütün masrafları satıcıya ait olmak üzere satılanın ücretsiz onarılmasını isteme, imkân varsa, satılanın ayıpsız bir misli ile değiştirilmesini isteme seçimlik haklarından birini kullanabilir. Ücretsiz onarım veya malın ayıpsız misli ile değiştirilmesi haklarından birinin seçilmesi durumunda bu talebin satıcıya, yöneltilmesinden itibaren azami 30 iş günü içinde bu talep yerine getirilir. Alıcının sözleşmeden dönme veya ayıp oranında bedelden indirim hakkını seçtiği durumlarda, ödemiş olduğu bedelin tümü veya bedelden yapılan indirim tutarı derhâl alıcıya iade edilir. Ayıplı maldan sorumluluk, ayıp daha sonra ortaya çıkmış olsa bile, malın alıcıya teslim tarihinden itibaren iki yıllık zamanaşımına tabidir. Alıcının, sözleşmenin kurulduğu tarihte ayıptan haberdar olduğu veya haberdar olmasının kendisinden beklendiği hâllerde, sözleşmeye aykırılık söz konusu olmaz. Bunların dışındaki ayıplara karşı alıcının seçimlik hakları yukarıda belirtildiği üzere mevcuttur.</p>
                <p>6.4 Alıcı tarafından herhangi bir nedenle ürün/hizmet bedeli ödenmez veya banka kayıtlarında iptal edilir ise, satıcı ürünün/hizmetin teslimi yükümlülüğünde olmayacaktır.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. CAYMA HAKKI</h2>
                <p>7.1 Alıcı, 14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin mal/ürün satışlarına ilişkin olarak sözleşmeden cayma hakkına sahiptir. Elektronik ortamda anında ifa edilen hizmetler veya alıcıya anında teslim edilen gayrimaddi mallara ilişkin satışlarda cayma hakkı kullanılamaz.</p>
                <p>7.2 Alıcı 14 günlük süre içerisinde cayma hakkı kullanılacak ürünleri kutusu, ambalajı, varsa standart aksesuarları ile birlikte eksiksiz ve hasarsız olarak teslim etmelidir. Ürün koruma bandının sökülmesi, hasar görmesi, ürün-aksesuarlarda eksiklik olması ya da ürünlerin kullanılması, tahrip edilmesi halinde cayma hakkı kullanılamaz.</p>
                <p>7.3 Alıcının cayma hakkı süresi, hizmet alımına ilişkin sözleşmelerde sözleşmenin kurulduğu gün; ürün alımına ilişkin sözleşmelerde ise alıcının veya alıcı tarafından belirlenen üçüncü kişinin malı teslim aldığı gün başlar. Aynı zamanda alıcı, sözleşmenin kurulmasından malın teslimine kadar olan süre içinde de cayma hakkını kullanabilir.</p>
                <p>7.4 Cayma hakkı süresinin belirlenmesinde; tek sipariş konusu olup ayrı ayrı teslim edilen ürünlerde, alıcının veya alıcı tarafından belirlenen üçüncü kişinin son ürünü teslim aldığı gün; birden fazla parçadan oluşan ürünlerde, alıcının veya alıcı tarafından belirlenen üçüncü kişinin son parçayı teslim aldığı gün; belirli bir süre boyunca ürünün düzenli tesliminin yapıldığı sözleşmelerde, alıcının veya alıcı tarafından belirlenen üçüncü kişinin ilk malı teslim aldığı gün esas alınır.</p>
                <p>7.5 Cayma hakkının kullanıldığına dair bildirimin cayma hakkı süresi dolmadan, kalıcı veri saklayıcısı ile satıcıya yöneltilmesi gerekmektedir. İlgili hakkınızı www.gifthoria.com internet sitemiz üzerinden, +90 536 923 28 25 telefon numarası üzerinden veya info@gifthoria.com eposta üzerinden kullanabilirsiniz.</p>
                <p>7.6 Satıcı, alıcının cayma hakkını kullandığına ilişkin bildirimin kendisine ulaştığı tarihten itibaren 14 gün içinde, varsa malın alıcıya teslim, kargo masrafları da dahil olmak üzere tahsil edilen tüm ödemeleri iade edecektir. Satıcı, söz konusu tüm geri ödemeleri, alıcının satın alırken kullandığı ödeme aracına uygun bir şekilde ve alıcıya herhangi bir masraf veya yükümlülük getirmeden tek seferde gerçekleştirecektir.</p>
                <p>7.7 Alıcı cayma hakkını kullandığına ilişkin bildirimi satıcıya yönelttiği tarihten itibaren 10 gün içinde malı satıcıya geri göndermek zorundadır.</p>
                <p>7.8 Alıcı aşağıdaki sözleşmelerde cayma hakkını kullanamaz:</p>
                <ul className="list-[lower-alpha] pl-6 space-y-2">
                  <li>Fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak değişen ve satıcı kontrolünde olmayan mal veya hizmetlere ilişkin sözleşmeler.</li>
                  <li>Alıcının istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara ilişkin sözleşmeler.</li>
                  <li>Çabuk bozulabilen veya son kullanma tarihi geçebilecek malların teslimine ilişkin sözleşmeler.</li>
                  <li>Tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların teslimine ilişkin sözleşmeler.</li>
                  <li>Tesliminden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan mallara ilişkin sözleşmeler.</li>
                  <li>Malın tesliminden sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olması halinde maddi ortamda sunulan kitap, dijital içerik ve bilgisayar sarf malzemelerine ilişkin sözleşmeler.</li>
                  <li>Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi süreli yayınların teslimine ilişkin sözleşmeler.</li>
                  <li>Belirli bir tarihte veya dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama, yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş zamanın değerlendirilmesine ilişkin sözleşmeler.</li>
                  <li>Elektronik ortamda anında ifa edilen hizmetler veya alıcıya anında teslim edilen gayrimaddi mallara ilişkin sözleşmeler.</li>
                  <li>Cayma hakkı süresi sona ermeden önce, alıcının onayı ile ifasına başlanan hizmetlere ilişkin sözleşmeler.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. MÜCBİR SEBEPLER</h2>
                <p>8.1 Sözleşmenin yürürlüğe girdiği tarihte mevcut olmayan veya öngörülemeyen, tarafların kontrolleri dışında gelişen, ortaya çıkmasıyla taraflardan birinin ya da her ikisinin de sözleşme ile yüklendikleri borç ve sorumluluklarını kısmen ya da tamamen yerine getirmelerini ya da bunları zamanında yerine getirmelerini olanaksızlaştıran durumlar, mücbir sebep (Doğal afet, savaş, terör, ayaklanma, değişen mevzuat hükümleri, el koyma veya grev, lokavt, üretim ve iletişim tesislerinde önemli ölçüde arıza vb.) olarak kabul edilecektir. Mücbir sebep şahsında gerçekleşen taraf, diğer tarafa durumu en kısa sürede bildirecektir.</p>
                <p>8.2 Mücbir sebebin devamı esnasında tarafların edimlerini yerine getirememelerinden dolayı herhangi bir sorumlulukları doğmayacaktır. Mücbir sebep durumu 30 gün süreyle devam ederse, taraflardan her birinin, tek taraflı olarak fesih hakkı doğmuş olacaktır.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. DELİL ANLAŞMASI</h2>
                <p>9.1 İşbu sözleşmeden doğabilecek her türlü uyuşmazlığın çözümünde satıcı kayıtları (bilgisayar, ses kayıtları gibi manyetik ortamdaki kayıtlar dahil) kesin delil oluşturur.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">10. UYUŞMAZLIK DURUMUNDA YETKİLİ MAHKEME</h2>
                <p>10.1 Gümrük ve Ticaret Bakanlığınca ilan edilen değere kadar Tüketici Hakem Heyetleri, aşan durumlarda alıcının ve satıcının yerleşim yerindeki Tüketici Mahkemeleri ve İcra Müdürlükleri yetkilidir.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">11. KABUL BEYANI</h2>
                <p>11.1 Alıcı, İnternet Sitesinde yer alan ve işbu Sözleşme'de ve ayrılmaz parçasını oluşturan Ön Bilgilendirme Formu'nda yazılı tüm koşulları ve açıklamaları okuduğunu, satışa konu ürünler/hizmetlerin temel özellik, nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları, satıcı ve satışa konu ürünler/hizmetler ile ilgili diğer tüm hususlarda önceden bilgi sahibi olduğunu, tamamını internet sitesinde elektronik ortamda gördüğünü, okuduğunu, içeriğini kabul ettiğini ve yine tüm bunlara elektronik ortamda onay, kabul iznini vererek ürünleri/hizmetleri sipariş ile işbu Sözleşme hükümlerini kabul ettiğini kabul ve beyan eder.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">12. YÜRÜRLÜK</h2>
                <p>12.1 İşbu Sözleşme, taraflarca okunarak, alıcı tarafından elektronik ortamda onaylanmak ve olumlu bir fiili hareket olarak ödeme yapmak suretiyle akdedilmiş ve yürürlüğe girmiştir.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DistanceSalesPage;
