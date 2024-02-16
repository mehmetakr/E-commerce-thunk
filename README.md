#

1. Subscribe : Reduxta durum değişikliği olduğunda çağrılıcak bir geri çağrı fonksiyonudur. Store da herhangi büir güncelleme oldugunda çağırılma işlemidir

2. Unsubscribe : Abonliği iptal etme işlemidir.

<h1>Proje Gif</h1>

<img src="proje.gif">

# State yönetimi

- State :Uygulamadaki bileşnlerimizin sahip oldugu bilgi ve özelliklerdir.

- Prop Drilling : Bileşenlerin yukarıdan aşşağıya veri taşıması

- Context APİ : Uygulamadaki state'i olşturduğumuz merkezlerden yönettiğimiz state yönetim aracı .

- Redux :Bileşenlerin sahip oldugu ve merkezi olarak tutulması gereken state'lerin yönetildiği merkezi state yönetim aracı

  # Neden Redux

  - Kod tekrarını azaltır
  - Orta ve büyük ölçekli işlerde kullanılır.
  - Hata ayıklama daha kolaydır.
  - Bileşen içersindeki karışıklığı azaltır..
  - Performansı arttırır..

    # Redux ile ilgili bilinmesi gerekenler

    1.  Store :Uygulamanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposudur.

    2.  Reducer : Aksiyondan aldıgı talimata göre store' da tutulan state'in nasıl değişeceğine karar veren fonksiyon .

  3. Action : Storede daki statei güncellemek için reducer'a gönderdiğimiz emir / haber

     Action 2 değere sahip bir objedir

     1. type
     2. payload

     - type : Actionnun görevini tanımlayan emir adı burada bulunur("ad_ekle")

     - payload : Gönderilen eylemin verisi

     3. Dispatch

     - Olusturdugumuz emirleri kararları karar mekanızmasına ( YANI REDUCERA ) ileten methoddur.

     4. Subscribe ( abone olma ) : Bileşenlerin store da tutulan verilere erişimini sağlama ( usecontext, useselector)

     5. Provider (sağlayıcı) : Storeda tutulan verileri uygulamaya sağlar .

     # GERCEK HAYATTAN ÖRNEK

1.  STORE : OKULUN BİNASI

2.  REDUCER : OKULUUN YÖNETİCİ EKİBİ (MÜDÜR, MÜDÜR, YARDIMCISI)

3.  ACTİON : ÖĞRENCİNİN SINAVI GEÇMESİ /YENİ KAYIT YAPMASI / KAYDINI SİLİNMESİ / OKULDAN ATILMASI / OKULA KAYDI GÜNCELLEMESİ

4.  DİSPATCH (SEVKETMEK) : SEKRETER / NÖBETÇİ ÖGRENCİ / ÖĞRETMEN / SINIF ANNESİ. OLAYLARI BİLDİRİR.

5.  SUBSCRİBE (ABONE OLMA ) :E-OKUL VERİLERE ERİŞİM SAĞLAMA

6.  PROVİDER (SAĞLAYICI) : OKULDAKİ ORGANİZASYON VEYA HİZMET SAĞLAYICI .. # Redux_CRUD

# ALTIN KURAL

-Verilerin apiden geldiği senaryoda api istekleri başarılı olmadan store u güncellememeliyiz .

-Ancak APİ isteği başarılı olduktan sonra store güncellemeli.

-Yani storeun güncellemesi api isteğini sonucuna bağımlı olmalı
# E-commerce-thunk
