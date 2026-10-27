// Auto-generated Selçuk Üniversitesi Sağlık Yönetimi Bologna Data
export interface CourseWeek {
  week: number;
  topic: string;
  resources?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  semester: number;
  year: number;
  term: 'Güz' | 'Bahar';
  ects: string;
  type: string;
  instructor: string;
  objective?: string;
  weeks: CourseWeek[];
}

export const COURSES_DATA: Course[] = [
  {
    "id": "22394",
    "code": "2004101",
    "name": "ATATÜRK İLKELERİ VE İNKİLAP TARİHİ-1",
    "semester": 1,
    "year": 1,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "ÖĞR.GÖR. GÜNGÖR  TOPLU",
    "weeks": [
      {
        "week": 1,
        "topic": "Türk İnkılap Tarihi ve Atatürkçülük dersini okumanın amacı ve o dönemi ilgilendiren kavramların tanımı (İnkılap, İhtilal, Islahat, Tekamül , Batılılaşma vs. gibi )",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 2,
        "topic": "Osmanlı İmparatorluğunun  yıkılış nedenleri ve yıkılışının nedenlerinin açıklanması.",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 3,
        "topic": "Osmanlı imparatorluğunda devletin yıkılmaması için yapılan yenileşme hareketleri ve izahı",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 4,
        "topic": "Osmanlı İmparatorluğunda demokratikleşme ve cumhuriyete giden yol (Senedi İttifak,   Tanzimat Fermanı, Islahat Fermanı 1.ve II Meşrutiyet hareketleri).",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 5,
        "topic": "Osmanlı İmparatorluğunda meydan gelen düşünce akınları ve izahı (Osmanlıcılık, Türkçülük, İslamcılık, Batıcılık)",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 6,
        "topic": "Osmanlı tarihinde azınlıkların faaliyetleri özelliklede Ermeni meselesinin ortaya çıkışının ve bu güne olan yansımaları",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 7,
        "topic": "Birinci Dünya savaşının  çıkış nedenleri ve Osmanlı Devletinin savaşa katılışı",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Mondros ateşkes anlaşması hükümlerinin uygulanması ve Türkiyeye yönelik tehditler açısından değerlendirilmesi",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 10,
        "topic": "şgaller karşısında memletin durumu ve Mustafa Kemal Paşanın tepkisi",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 11,
        "topic": "Mustafa Kemal Paşanın Samsuna çıkması düşüncesinin uygulamaya başlaması ordu ve mülki idere ile temas kurması.",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 12,
        "topic": "Milli mücadele için atılan ilk adımlar:Amasya Genelgesi Erzurum ve Sivas Kongreleri ve bu kongrelerin milli mücadele içindeki yeri ve önemi",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 13,
        "topic": "Kuvayi Milliye ve Misakı Milli teşkilatlarının kurulmaları ve meydane gelen siyasi gelişmeler.",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 14,
        "topic": "TBMM açılması ve istklal savaşı yönetimini eline alması",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 15,
        "topic": "Milli mücadele de TBMM karşı meydana gelen isyanlar (1 ve II. Bozkır İsyanları, Yozgat İsyanları, Bolu ve Düzce isyanları ve diğerleri)",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      }
    ]
  },
  {
    "id": "22398",
    "code": "2004103",
    "name": "TÜRK DİLİ-1",
    "semester": 1,
    "year": 1,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "ÖĞR.GÖR.DR. EBRU  BİRKAN AKHAN",
    "weeks": [
      {
        "week": 1,
        "topic": "Dil Nedir? Dilin Özellikleri Nelerdir?",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 2,
        "topic": "Dilin Millet Hayatındaki Yeri ve Önemi Nedir?",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 3,
        "topic": "Kültür ve Dil Arasındaki İlişkiler Nedir?",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 4,
        "topic": "Yapı Bakımından Diller",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 5,
        "topic": "Köken Bakımından Diller",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 6,
        "topic": "Ses Bilgisi",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 7,
        "topic": "Noktalama İşaretleri",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 8,
        "topic": "Kompozisyon nedir? Nasıl yazılır?",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 9,
        "topic": "İmla Kuralları",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 10,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 11,
        "topic": "Komposziyonda Anlatım Şekilleri",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 12,
        "topic": "Türkçenin Dünya Dilleri Arasındaki Yeri ve Önemi",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 13,
        "topic": "Kompozisyon Uygulamaları",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 14,
        "topic": "Kompozisyon Genel Bilgileri",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 15,
        "topic": "Ses Bilgisi Uygulamalar",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 16,
        "topic": "FİNAL",
        "resources": ""
      }
    ]
  },
  {
    "id": "22399",
    "code": "2004104",
    "name": "YABANCI DİL-1 (İNGİLİZCE)",
    "semester": 1,
    "year": 1,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. NURCİHAN  BAŞIBEK",
    "weeks": [
      {
        "week": 1,
        "topic": "Giriş",
        "resources": "English for Life Elementary"
      },
      {
        "week": 2,
        "topic": "Meslekler ile ilgili soru/cevap Alfabe Aitlik Sınıf dili Tekil/çoğul isimler/ İşaret sıfatları",
        "resources": "English for Life Elementary"
      },
      {
        "week": 3,
        "topic": "Sayılar adres sorma/verme sıra sayıları Selamlaşma/ Aitlik ekleri",
        "resources": "English for Life Elementary"
      },
      {
        "week": 4,
        "topic": "Ülkeler ve milletler ?be? fiili olumlu ve soru cümleleri/ kısa cevaplar",
        "resources": "English for Life Elementary"
      },
      {
        "week": 5,
        "topic": "Soru kelimeleri unvanlar Günler saatler zamanlarla kullanılan edatlar",
        "resources": "English for Life Elementary"
      },
      {
        "week": 6,
        "topic": "Günlük rutinler sıklık bildiren zaman zarfları geniş zaman",
        "resources": "English for Life Elementary"
      },
      {
        "week": 7,
        "topic": "Geniş zaman günlük rutinler bağlaçlar (and, but, because)",
        "resources": "English for Life Elementary"
      },
      {
        "week": 8,
        "topic": "Boş zaman aktiviteleri geniş zamanda sorular/kısa cevaplar",
        "resources": "English for Life Elementary"
      },
      {
        "week": 9,
        "topic": "Hobiler yiyecek/içecek siparişi verme",
        "resources": "English for Life Elementary"
      },
      {
        "week": 10,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 11,
        "topic": "Aile üyeleri Has/have got yapısında soru ve kısa cevaplar some/any",
        "resources": "English for Life Elementary"
      },
      {
        "week": 12,
        "topic": "Nesne zamirleri",
        "resources": "English for Life Elementary"
      },
      {
        "week": 13,
        "topic": "Yer isimleri kasaba/sokak/market, vb. Tanımlık There is/are yapısı / sorular/kısa cevaplar",
        "resources": "English for Life Elementary"
      },
      {
        "week": 14,
        "topic": "Yol tarifi verme",
        "resources": "English for Life Elementary"
      },
      {
        "week": 15,
        "topic": "Mobilyalar evin bölümleri yer bildirmede kullanılan edatlar/ şimdiki zaman/ sorular/ kısa cevaplar",
        "resources": "English for Life Elementary"
      }
    ]
  },
  {
    "id": "22400",
    "code": "2004105",
    "name": "GENEL MUHASEBE-1",
    "semester": 1,
    "year": 1,
    "term": "Güz",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. FATMA ÖZLEM  YILMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "İşletme ve muhasebe ile ilgili kavramlar",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 2,
        "topic": "Muhasebe bilgilerinin üretilmesinde kullanılan kaynaklar",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 3,
        "topic": "Bilanço eşitliği",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 4,
        "topic": "Hesap kavramı",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 5,
        "topic": "Aralıklı envanter yöntemi",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 6,
        "topic": "Devamlı envanter yöntemi",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 7,
        "topic": "Sağlık kurumlarında uygulama örnekleri-II",
        "resources": ""
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Hazır değerler-I",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 10,
        "topic": "Hazır değerler-II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 11,
        "topic": "Alacaklar-I",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 12,
        "topic": "Alacaklar-II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 13,
        "topic": "Stoklar-I",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 14,
        "topic": "Stoklar-II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 15,
        "topic": "Sağlık kurumlarında uygulama örnekleri-II",
        "resources": ""
      }
    ]
  },
  {
    "id": "22401",
    "code": "2004107",
    "name": "GENEL İŞLETME",
    "semester": 1,
    "year": 1,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. ŞERİFE  GÜZEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Temel İşletmecilik Kavramları",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 2,
        "topic": "İşletmenin Amaçları ve İşletmelerin Sınıflandırılması",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 3,
        "topic": "İşletmenin Kuruluşu",
        "resources": "Şimşek, Ş., Çelik, A. (2012). İşletme Bilimine Giriş. Konya: Eğitim Kitabevi."
      },
      {
        "week": 4,
        "topic": "İşletmenin Kuruluşu",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 5,
        "topic": "İşletmenin Gelirleri ve İşletmenin Performansı",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 6,
        "topic": "Yönetim Fonksiyonu",
        "resources": "Şimşek, Ş., Çelik, A. (2012). İşletme Bilimine Giriş. Konya: Eğitim Kitabevi."
      },
      {
        "week": 7,
        "topic": "Yönetim Fonksiyonu- Devam",
        "resources": "Şimşek, Ş., Çelik, A. (2012). İşletme Bilimine Giriş. Konya: Eğitim Kitabevi."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Tedarik ve Üretim Fonksiyonu",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 10,
        "topic": "Pazarlama Fonksiyonu",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 11,
        "topic": "Finansman Fonksiyonu",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 12,
        "topic": "Muhasebe Fonksiyonu",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 13,
        "topic": "İnsan Kaynakları Fonksiyonu ve Halkla İlişkiler Fonksiyonu",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 14,
        "topic": "Ar-Ge Fonksiyonu ve Dönemin Genel Tekrarı",
        "resources": "Can, H., Tuncer, D. & Ayhan, D. Y. (2005). Genel İşletmecilik Bilgileri. Ankara: Siyasal Kitabevi"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22390",
    "code": "2004111",
    "name": "MAKRO İKTİSAT",
    "semester": 1,
    "year": 1,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "ÖĞR.GÖR. YAVUZ  ÇAKMAK",
    "weeks": [
      {
        "week": 1,
        "topic": "İktisadi Hayata Toplu Bakış, Genel Kavramlar, İktisadi Olay ve Tarafları, Kıtlık (Nedret Kanunu), İktisadi Adam Davranışı ve Tarafların Davranış Biçimleri",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 2,
        "topic": "Piyasa, Talep ve Talebi Etkileyen Unsurlar, Arz ve Arzı Etkileyen Unsurlar, Piyasa Dengesi, Piyasa Dengesinde Meydana Gelen Değişmeler,",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 3,
        "topic": "Esneklik (Elastiklik): Talep ve Arz Esneklikleri, Hesaplama Şekilleri ve Yorumları",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 4,
        "topic": "Tüketici Dengesi: Fayda Analizi, Eş-Fayda ve Bütçe fonksiyonları ile tüketici dengesinin belirlenmesi",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 5,
        "topic": "Üretim Teorisi (Üretici Dengesi): Azalan Verim Kanunu, Eş-Ürün ve Maliyet Doğrusu Fonksiyonları, Uzu Dönem Üretim Maliyetlerinin Belirlenmesi",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 6,
        "topic": "Firma Gelirleri, Firma Dengesi (Tam Rekabet Piyasasında Kısa Dönem ve Uzun Dönem Analizi)",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 7,
        "topic": "Monopol Firmanın Gelir Fonksiyonlarının Belirlenmesi ve Firma Dengesi, Tam Rekabet Piyasasındaki İşletme ile Monopol İşletmenin Karşılaştırılması",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "İktisadi Hayata Makro Bakış GSMH-Amortisman-SMH- Milli Gelir ve Milli Gelirin Temel Belirleyicilerinin Analizi",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 10,
        "topic": "MG&#180;in Hesaplama Şekilleri ve MG Yorumları MG&#180;in Toplam Arz, Toplam Talep ve Yatırım Tasarruf Açısından Denge Düzeyinin Belirlenmesi.",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 11,
        "topic": "Çarpan ve Hızlandıran mekanizmalarının Geometrik ve Cebirsel Gösterimi, Devletin Ekonomik Hayata Müdahale Gerekçe ve Şekilleri ile Milli Gelir Üzerindeki Etkileri",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 12,
        "topic": "Paranın Tarihsel Süreci, Bankacılık Kurumun Oluşum Süreci, Para Arzı ile İstihdam-Gelir ve Para Değeri Arasındaki İlişkiler",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 13,
        "topic": "Gelir Dağlımı ve Dağlımla ilgili değerlendirmeler İktisadi Büyüme, İktisadi Büyüme-Gelişme ilişkileri",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 14,
        "topic": "Uluslararası Ekonomik İlişkiler",
        "resources": "Salih Şimşek- M Kemal Aydın, İktisat Bilimine Giriş, Değişim Yayınları, İstanbul, 2004 (4.Baskı)"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22391",
    "code": "2004112",
    "name": "HUKUKUN TEMEL KAVRAMLARI",
    "semester": 1,
    "year": 1,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Giriş temel kavramlar",
        "resources": "Bilge, N.:Hukuk başlangıcı"
      },
      {
        "week": 2,
        "topic": "Sosyal düzen kuralları ve türleri",
        "resources": "Bilge, N.:Hukuk başlangıcı"
      },
      {
        "week": 3,
        "topic": "Hukuk kurallarının analizi, hukuk kurallarının unsurları",
        "resources": "Aybay,A./Aybay,R.:Hukuka Giriş"
      },
      {
        "week": 4,
        "topic": "Hukukun amaçları",
        "resources": "Aybay,A./Aybay,R.:Hukuka Giriş"
      },
      {
        "week": 5,
        "topic": "Hukukta yaptırım I",
        "resources": "Bilge, N.:Hukuk başlangıcı"
      },
      {
        "week": 6,
        "topic": "Hukukta yaptırım II",
        "resources": "Güriz, A.:Hukuk Başlangıcı"
      },
      {
        "week": 7,
        "topic": "Hukukun değişim anlamları, pozitif hukuk, doğal hukuk, objektif-subjektif hukuk ve hukuk bilimi",
        "resources": "Bilge, N.:Hukuk başlangıcı"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Pozitif hukukun kaynakları, örf-adet-gelenek hukuku",
        "resources": "Güriz, A.:Hukuk Başlangıcı"
      },
      {
        "week": 10,
        "topic": "Yazılı hukuk",
        "resources": "Güriz, A.:Hukuk Başlangıcı"
      },
      {
        "week": 11,
        "topic": "Hukuk kaynağı olarak kanunlar , geçerlilik derecesine göre türleri",
        "resources": "Aybay,A./Aybay,R.:Hukuka Giriş"
      },
      {
        "week": 12,
        "topic": "Kanunların anayasaya uygunluğunun yargısal denetimi",
        "resources": "Güriz, A.:Hukuk Başlangıcı"
      },
      {
        "week": 13,
        "topic": "Yürütme organının düzenleme alanı, tüzük ve yönetmelikler",
        "resources": "Bilge, N.:Hukuk başlangıcı"
      },
      {
        "week": 14,
        "topic": "Hukuk kurallarının türleri",
        "resources": "Güriz, A.:Hukuk Başlangıcı"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22402",
    "code": "2004201",
    "name": "ATATÜRK İLKELERİ VE İNKİLAP TARİHİ-2",
    "semester": 2,
    "year": 1,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "ÖĞR.GÖR. GÜNGÖR  TOPLU",
    "weeks": [
      {
        "week": 1,
        "topic": "KUVA-YI MİLLİYE, Doğu Cephesi, Gümrü Antlaşması (3 Aralık 1920), Güney Cephesi Gaziantep Cephesi, Maraş Cephesi, Adana Cephesi, Urfa Cephesi",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 2,
        "topic": "İTİLAF DEVLETLERİNİN TÜRKİYEYİ PAYLAŞMA PROJELERİ San Remo Konferansı, Sevr Antlaşması, Düzenli Orduya Geçiş",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 3,
        "topic": "I. İNÖNÜ SAVAŞI (6-10 Ocak 1921)  I. İnönü Savaşının Sonuçları, Londra Konferansı (21 Şubat-11 Mart 1921), Moskova Antlaşması (16 Mart 1921) , Türkiye-Afganistan İttifak Antlaşması",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 4,
        "topic": "II. İNÖNÜ SAVAŞI (31 MART-1 NİSAN 1921) AFYON-ESKİŞEHİR-KÜTAHYA SAVAŞI, Mustafa Kemal Paşanın Başkomutan Olması, Tekalif-i Mill&#238;ye Emirleri, SAKARYA SAVAŞI (23 Ağustos-13 Eylül 1921), Sakarya Savaşının Sonuçları",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 5,
        "topic": "BÜYÜK TAARRUZ Taarruza Hazırlık, Başkomutanlık Meselesi, Büyük Taarruz, Yunanistanda İhtil&#226;l, Mütareke Öncesi Türk-İngiliz Askeri Bunalım",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 6,
        "topic": "MUDANYA MÜTAREKESİ Mütarekenin Sonuçları, LOZAN BARIŞ ANDLAŞMASI Lozan Antlaşmasının Hükümleri",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 7,
        "topic": "TÜRK İNKIL&#194;BI Siyasi Alanda Yapılan İnkıl&#226;plar, Saltanatın Kaldırılması, Cumhuriyetin İlanı, Hil&#226;fetin Kaldırılması, ANAYASA HAREKETLERİ Teşkil&#194;t-ı Esasiye Kanunu, 20 Nisan 1924 Anayasası, TBMM de Kurulan Gruplar ve Siyasi Partiler, Sosyalist-Komünist Gruplaşmalar, Müdafaa-i Hukuk Grupları",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "MİLLİ MÜCADELE SONRASI SİYASİ PARTİLER ÇOK PARTİLİ DÖNEME GEÇİŞ, Halk Fırkasının Kuruluşu, Terakkiperver Cumhuriyet Fırkası, Serbest Cumhuriyet Fırkası, Diğer Bazı Parti Kurma Girişimleri",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 10,
        "topic": "REJİME KARŞI YAPILAN TEPKİLER, Şeyh Sait İsyanı, Takrir-i Sükun Kanunu, İstikl&#226;l Mahkemelerinin Yeniden Kurulması, Atatürke İzmirde Düzenlenen Suikast",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 11,
        "topic": "HUKUK ALANINDA İNKIL&#194;P, Medeni Kanunun Kabulü, EĞİTİM ALANINDA iNKIL&#194;P Tevhid-i Tedrisat Kanunu, Atatürk ve Türk Tarih Tezi, Türk Dili İnkıl&#226;bı,",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 12,
        "topic": "SOSYAL ALANDA YAPILAN İNKIL&#194;PLAR Kılık Kıyafet Değişimi ve Şapka İnkıl&#226;bı, Tekke, Zaviye ve Türbelerin Kapatılması, Saatlerin ve Takvimin Değiştirilmesi, Ölçü ve Tartıda Değişiklik, Kadın Haklarının Kabulü, Milli Bayramlar ve Tatil Günleri",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 13,
        "topic": "ATATÜRK İLKELERİ VE İNKIL&#194;PLARI Milli Hakimiyet-Egemenlik, Tam bağımsızlık, Cumhuriyetçilik, Milliyetçilik, İnkıl&#226;pçılık",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 14,
        "topic": "Laiklik, İsl&#226;m ve L&#226;iklik, Atatürk Döneminde L&#226;iklikle İlgili Düzenlemeler, Atatürk ve L&#226;iklik, Halkçılık, Devletçilik",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      },
      {
        "week": 15,
        "topic": "ATATÜRK DÖNEMİ DIŞ POLİTİKA Genel Özellikler, 1923-1930 Dönemi Dış Politika, 1930-1938 Dönemi Türk Dış Politikası, Balkan Paktı, Akdenizde İtalyan Tehlikesi, Montreux Boğazlar Sözleşmesi,  İsl&#226;m Dünyası ile Olan İlişkiler ve Sadabat Paktı, Hatay Meselesinin Çözümü",
        "resources": "1-M. K. Atatürk, Nutuk,  Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 1990, 2- Atatürk, M. K.  Atatürkün Söylev ve Demeçleri, Atatürk Kültür Dil ve Tarih Yüksek Kurumu, Ankara 3- Adıvar, H. E.. Türkün Ateşle İmtihanı. Atlas Kitabevi 1987, İstanbul 4-AKÇURA, Yusuf, Osmanlı Devletinin Dağılma Devri ,5- ARMAOĞLU, Fahir, 20. Yüzyıl Siyasi Tarihi 1914-1980, Ankara 1980 6- Semiz. Y., - Akandere O., (2013), Türkiye Cumhuriyeti Tarihi, Eğitim Kitabevi, Konya"
      }
    ]
  },
  {
    "id": "22395",
    "code": "2004203",
    "name": "TÜRK DİLİ-2",
    "semester": 2,
    "year": 1,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ YILDIRAY  ÇAVDAR",
    "weeks": [
      {
        "week": 1,
        "topic": "Sözlü Anlatım",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 2,
        "topic": "Yazılı Kompozisyon,Kompozisyonda uyulması gereken kurallar",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 3,
        "topic": "Anlatın türleri,anlatım bozuklukları",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 4,
        "topic": "Sözlü kompozisyon Türleri",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 5,
        "topic": "Mektup,İlan,Özgeçmiş",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 6,
        "topic": "Makale,deneme,eleştiri,fıkra",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 7,
        "topic": "Hatıra,gezi yazısı,biyografi,otobiyografi",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 8,
        "topic": "rapor,tutanak",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 9,
        "topic": "Röportaj,hikaye,masal,tiyatro",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 10,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 11,
        "topic": "yazı türleriyle ilgili uygulamalar",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 12,
        "topic": "Konuşma sanatı",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 13,
        "topic": "Konuşma türleri",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 14,
        "topic": "Bilimsel araştırma nasıl yapılır?",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      },
      {
        "week": 15,
        "topic": "Kompozisyon uygulamaları",
        "resources": "Üniversiteler İçin Türk Dili (Doç.Dr.Ufuk Deniz Aşçı),Orya,Konya 2013"
      }
    ]
  },
  {
    "id": "22396",
    "code": "2004204",
    "name": "YABANCI DİL -2 (İNGİLİZCE)",
    "semester": 2,
    "year": 1,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. NURCİHAN  BAŞIBEK",
    "weeks": [
      {
        "week": 1,
        "topic": "Mobilyalar evin bölümleri Şimdiki zaman",
        "resources": "English for Life Elementary"
      },
      {
        "week": 2,
        "topic": "Yardım teklif etme",
        "resources": "English for Life Elementary"
      },
      {
        "week": 3,
        "topic": "Aylar can/cant (yeterlik kipi) sorular/kısa cevaplar",
        "resources": "English for Life Elementary"
      },
      {
        "week": 4,
        "topic": "Randevu alma can/cant (yeterlik kipi) sorular/kısa cevaplar kibar istekler",
        "resources": "English for Life Elementary"
      },
      {
        "week": 5,
        "topic": "İşler ve bunlarla kullanılan fiiller/ geniş zaman-şimdiki zaman karşılaştırması",
        "resources": "English for Life Elementary"
      },
      {
        "week": 6,
        "topic": "Problemlerden bahsetme",
        "resources": "English for Life Elementary"
      },
      {
        "week": 7,
        "topic": "Yer bildiren isimler: sinema/galeri, vb. Geçmiş zaman soru/kısa cevaplar",
        "resources": "English for Life Elementary"
      },
      {
        "week": 8,
        "topic": "Was/were gelecek zaman anlamında şimdiki zaman kullanımı",
        "resources": "English for Life Elementary"
      },
      {
        "week": 9,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 10,
        "topic": "Dersler geçmiş zaman/ düzenli-düzensiz fiiller",
        "resources": "English for Life Elementary"
      },
      {
        "week": 11,
        "topic": "Haberlerle ilgili konuşma",
        "resources": "English for Life Elementary"
      },
      {
        "week": 12,
        "topic": "Vücudun kısımlar geçmiş zaman: sorular/kısa cevaplar",
        "resources": "English for Life Elementary"
      },
      {
        "week": 13,
        "topic": "Sıklık soruları (how often) ve cevapları (once, twice)",
        "resources": "English for Life Elementary"
      },
      {
        "week": 14,
        "topic": "Tatille ilgili kelimeler gelecek zaman",
        "resources": "English for Life Elementary"
      },
      {
        "week": 15,
        "topic": "Gelecek planları",
        "resources": "English for Life Elementary"
      }
    ]
  },
  {
    "id": "22397",
    "code": "2004205",
    "name": "GENEL MUHASEBE -2",
    "semester": 2,
    "year": 1,
    "term": "Bahar",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. FATMA ÖZLEM  YILMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Duran varlıklar",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 2,
        "topic": "Duran varlıklar II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 3,
        "topic": "Kısa vadeli yabancı kaynaklar",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 4,
        "topic": "Kısa vadeli yabancı kaynaklar II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 5,
        "topic": "Uzun vadeli yabancı kaynaklar",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 6,
        "topic": "Uzun vadeli yabancı kaynkaklar II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 7,
        "topic": "Özkaynaklar",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Özkaynaklar II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 10,
        "topic": "Sonuç hesapları",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 11,
        "topic": "Sonuç Hesapları II",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 12,
        "topic": "Maliyet hesapları",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 13,
        "topic": "Envanter işlemleri",
        "resources": "1. Atabey, Ata, Ali Alagöz ve Raif Parlakkaya (2024), Genel Muhasebe, Nobel Yayın, Ankara. 2. Sevilengül, Orhan (2020), Genel Muhasebe, Gazi Kitabevi, 19.Baskı, Ankara."
      },
      {
        "week": 14,
        "topic": "Sağlık kurumlarında uygulama örnekleri-I",
        "resources": ""
      },
      {
        "week": 15,
        "topic": "Sağlık kurumlarında uygulama örnekleri-II",
        "resources": ""
      }
    ]
  },
  {
    "id": "22403",
    "code": "2004208",
    "name": "YÖNETİMİN TEMEL İLKELERİ",
    "semester": 2,
    "year": 1,
    "term": "Bahar",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "PROF.DR. ŞEBNEM  YÜCEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Yönetimle İlgili Temel Kavramlar ve Konular",
        "resources": "Tengilimoğlu D., Işık O ve Akbolat M. (2012) Sağlık İşletmeleri Yönetimi. Geliştirilmiş 4. Baskı, Nobel Yayınevi, Ankara"
      },
      {
        "week": 2,
        "topic": "Yönetim Biliminin Diğer Toplumsal Bilimlerle İlişkisi",
        "resources": "The New Era of Management, Rid L. Daft, 2006"
      },
      {
        "week": 3,
        "topic": "Yönetim Fonksiyonları- Planlama",
        "resources": "Tengilimoğlu D., Işık O ve Akbolat M. (2012) Sağlık İşletmeleri Yönetimi. Geliştirilmiş 4. Baskı, Nobel Yayınevi, Ankara"
      },
      {
        "week": 4,
        "topic": "Organizasyon ve Yöneltme",
        "resources": "Tengilimoğlu D., Işık O ve Akbolat M. (2012) Sağlık İşletmeleri Yönetimi. Geliştirilmiş 4. Baskı, Nobel Yayınevi, Ankara"
      },
      {
        "week": 5,
        "topic": "Eşgüdümleme ve Kontrol",
        "resources": "Organization Theory and Design, Rid Daft, 2000"
      },
      {
        "week": 6,
        "topic": "Geleneksel Yönetim Kuramı",
        "resources": "The New Era of Management, Rid L. Daft, 2006"
      },
      {
        "week": 7,
        "topic": "Neoklasik Yönetim Kuramı",
        "resources": "Organization Theory and Design, Rid Daft, 2000"
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Modern Yönetim Kuramı",
        "resources": "Organization Theory and Design, Rid Daft, 2000"
      },
      {
        "week": 10,
        "topic": "Amaçlara Göre Yönetim ve Çatışma ve Yaratıcılığın Yönetimi, Stres ve Kriz Yönetimi",
        "resources": "The New Era of Management, Rid L. Daft, 2006"
      },
      {
        "week": 11,
        "topic": "Değişim Yönetimi ve Örgüt Geliştirme",
        "resources": "The New Era of Management, Rid L. Daft, 2006"
      },
      {
        "week": 12,
        "topic": "Kariyer Yönetimi, Takımların Yönetimi, Toplam Kalite Yönetimi",
        "resources": "Tengilimoğlu D., Işık O ve Akbolat M. (2012) Sağlık İşletmeleri Yönetimi. Geliştirilmiş 4. Baskı, Nobel Yayınevi, Ankara"
      },
      {
        "week": 13,
        "topic": "Değişim Mühendisliği, Öğrenen Örgütler, Kıyaslama, Yalın Örgütlenme, Bilgi Yönetimi",
        "resources": "Organization Theory and Design, Rid Daft, 2000"
      },
      {
        "week": 14,
        "topic": "Şebeke Örgütleri, Sanal Örgütler, Yığışım Örgütlenmesi, Adhokratik Örgütlenme, Stratejik Birlikler Oluşturma",
        "resources": "The New Era of Management, Rid L. Daft, 2006"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22392",
    "code": "2004211",
    "name": "MİKRO İKTİSAT",
    "semester": 2,
    "year": 1,
    "term": "Bahar",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Mikro İktisadın Tanımı, Kapsamı, Mikro İktisadi Analiz Metodu",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 2,
        "topic": "Piyasa mekanizması, Eğim ve Esneklik, Talebin Fiyat Esnekliği, Talebin Nokta  Esnekliği, Talebin Yay Esnekliği, Talebin Çapraz Fiyat Esnekliği",
        "resources": "Paul Krugman, Palme Yayıncılık, 2010"
      },
      {
        "week": 3,
        "topic": "Talebin Gelir Esnekliği, Özel Esneklikli Talep Eğrileri, Engel Eğrisi, Arz Esnekliği, Özel Esneklikli Arz Eğrileri, Esneklik Ve Toplam Harcama.",
        "resources": "Paul Krugman, Palme Yayıncılık, 2010"
      },
      {
        "week": 4,
        "topic": "Kısmi Denge Analizi, Statik Analiz, Mukayeseli Statik Analiz, Dinamik Analiz, Denge Fiyat Düzeyi, Devletin Piyasa Dengesine Müdahaleleri, Dolaysız",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 5,
        "topic": "Tüketici Teorisi, Optimum Tüketim Düzeyi Ve Tüketici Dengesi, Kardinal Fayda Yaklaşımı, Ordinal Fayda Yaklaşımı, Azalan Marjinal Fayda İlkesi, Gossen Kanunları, Değer Paradoksu, Farksızlık Eğrileri, Marjinal İkame Oranı, Bütçe Doğrusu",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 6,
        "topic": "Tüketici Dengesindeki Değişmeler, Gelir Etkisi, İkame Etkisi, Toplam Etki",
        "resources": "Paul Krugman, Palme Yayıncılık, 2010"
      },
      {
        "week": 7,
        "topic": "Üretim Maliyetleri, Muhasebe Maliyeti, İktisadi Maliyet, Üretim Dönemleri, Kısa Dönem Maliyet Eğrileri, Uzun Dönem Maliyet Eğrileri, Uzun Dönem Endüstri Arz Eğrileri",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Üretici Teorisi, Üretim Yöntemi, Üretim Fonksiyonu, Üretim Teknolojisi, Kısa Dönem Ve Azalan Verimler Kanunu, Uzun Dönem Ve Ölçek Ekonomileri, Eşürün Eğrileri, Eşmaliyet Doğrusu, Firmanın Genişleme Yolu Ve Ölçeğe Göre Getiri. Faktör Piyasalarında talep, arz ve denge.",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 10,
        "topic": "Piyasa Türleri, Tam Rekabet Piyasası, Tam Rekabet Piyasasının Özellikleri, Tam Rekabet Piyasasında Firma Talep Eğrisi Ve Piyasa Talep Eğrisi, Tam Rekabetçi Firmanın Kısa Dönem Dengesi, Tam Rekabetçi Firmanın Uzun Dönem Dengesi, Tam Rekabet Piyasasının İktisadi Etkinlik Açısından Değerlendirmesi",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 11,
        "topic": "Piyasa Başarısızlığı, Eksik Rekabet Piyasalarının Ortaya Çıkış Nedenleri, Kamusal Mallar, Dışsallıklar, Doğal Tekeller, Asimetrik Bilgi, Eksik Rekabet Piyasası Türleri,",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 12,
        "topic": "Monopol, Monopol Türleri, Monopolün Kısa Dönem Ve Uzun Dönem Dengesi, Monopolün Fiyat Farklılaştırması, Monopolün Etkinsizliği.",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 13,
        "topic": "Monopolcü Rekabet Piyasası, Ürün Grubu, Monopolcü Rekabet Piyasasının Kısa Dönem ve Uzun Dönem Dengesi",
        "resources": "Erdal M. Erdal Ünsal, Mikro iktisat,  İmaj Yayıncılık , 2010"
      },
      {
        "week": 14,
        "topic": "Olipopol Piyasası, Oligopol Türleri",
        "resources": "Paul Krugman, Palme Yayıncılık, 2010"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22393",
    "code": "2004212",
    "name": "SAĞLIK SOSYOLOJİSİ",
    "semester": 2,
    "year": 1,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "PROF.DR. YUNUS EMRE  ÖZTÜRK",
    "weeks": [
      {
        "week": 1,
        "topic": "Sosyoloji tanımı, gelişimi ve kurucuları",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 2,
        "topic": "Sağlık ve hastalık kavramları",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 3,
        "topic": "Sağlık Sosyolojisi tanımı ve ilgilendiği konular",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 4,
        "topic": "Sağlık sosyolojisi ve kurucuları",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 5,
        "topic": "Sağlık sosyolojisinde işlevselci yaklaşım",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 6,
        "topic": "Çatışmacı yaklaşım",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 7,
        "topic": "Yorumlayıcı yaklaşım",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 8,
        "topic": "ARA SINAV",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "İatrogenesis",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 10,
        "topic": "Tıbbileştirme",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 11,
        "topic": "Feminist yaklaşım",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 12,
        "topic": "Postmodern yaklaşım",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 13,
        "topic": "Sağlığın metalaşması",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 14,
        "topic": "Küreselleşme ve sağlık",
        "resources": "Özer, Ö., & Şantaş, F. (2019). SOSYOLOJİK BOYUTLARIYLA SAĞLIK.Nobel yayınları"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22404",
    "code": "2004301",
    "name": "TIBBİ TERMİNOLOJİ",
    "semester": 3,
    "year": 2,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ HİLAL  AKMAN DÖMBEKCİ",
    "weeks": [
      {
        "week": 1,
        "topic": "Tıbbi Terminolojiye Giriş, terim kavramı ve sağlık terminolojisi, Tıp terminolojisindeki ek, ön ek ve son ek kavramları",
        "resources": "1-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 2,
        "topic": "Tıbbi Terminolojiye Giriş, terim kavramı ve sağlık terminolojisi, Tıp terminolojisindeki ek, ön ek ve son ek kavramları",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 3,
        "topic": "Endokrin sistem ile ilgili anatomik terimleri, semptom terimlerini, ilgili laboratuar terimlerini, tanı terimlerini ve ilgili cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 4,
        "topic": "Göz, kulak, burun, boğaz ile ilgili anatomik terimler, semptom terimler, ilgili laboratuvar terimler, tanı terimlerini ve ilgili cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 5,
        "topic": "Solunum sistemi ile ilgili anatomik terimler, semptom terimleri, laboratuvar terimleri, tanı terimleri ve cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 6,
        "topic": "Kardiyovasküler sistem ile ilgili anatomik terimleri, semptom terimlerini, ilgili laboratuar terimlerini, tanı terimlerini ve ilgili cerrahi terimleri",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 7,
        "topic": "Kardiyovasküler sistem ile ilgili anatomik terimleri, semptom terimlerini, ilgili laboratuar terimlerini, tanı terimlerini ve ilgili cerrahi terimleri",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 8,
        "topic": "ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Santral sinir sistemi ile ilgili anatomik terimler, semptom terimleri, ilgili laboratuvar terimlerini, tanı terimleri ve ilgili cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 10,
        "topic": "Periferik sinir sistemi ile ilgili anatomik terimler, semptom terimleri, ilgili laboratuvar terimlerini, tanı terimleri ve ilgili cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 11,
        "topic": "Kas ve iskelet sistemine ilişkin anatomik, semptomlarla ilgili, tanısal ve cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 12,
        "topic": "Kas ve iskelet sistemine ilişkin anatomik, semptomlarla ilgili, tanısal ve cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 13,
        "topic": "Ürogenital Sisteme ilişkin anatomik, semptomlarla ilgili, tanısal ve cerrahi terimler",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 14,
        "topic": "Tedavide sık kullanılan ilaç grupları ile ilgili terminoloji",
        "resources": "-Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011  Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      },
      {
        "week": 15,
        "topic": "Sistemlere özgü radyolojik işlemler ve terimlerle, rapor içinde yer alan terimler",
        "resources": "Çağatay GÜLER Tıbbi Terminoloji, Somgür Yayıncılık, 2001. 2-Prf.Dr.İsmet DÖKMECİ , Tıp terimleri Sözlügü, 2011 Nobel kitapevi Sebahat EKİNCİ,H.Gül HATİPOĞU , 2011 Hatipoğlu yayıncılık 3-Prf.Dr.L.Bikem SÜZEN, 2005 , Birol yayınevi 4-H.Hatipoğlu ,anatomi sözlülüğü , 2010 Hatipoğlu yayıncılık"
      }
    ]
  },
  {
    "id": "22436",
    "code": "2004309",
    "name": "DAVRANIŞ BİLİMLERİ",
    "semester": 3,
    "year": 2,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Davranış bilimlerine giriş",
        "resources": "Eren,Erol,Örgütsel Davranış ve Yönetim Psikolojisi, Beta Basım Yayım, 2012."
      },
      {
        "week": 2,
        "topic": "Davranış Bilimlerinin Blimsel Temelleri",
        "resources": "Eren,Erol,Örgütsel Davranış ve Yönetim Psikolojisi, Beta Basım Yayım, 2012."
      },
      {
        "week": 3,
        "topic": "Algılama, Öğrenme ve Öğrenen Örgütler",
        "resources": "Şimşek,Ali, Davranış Bilimleri,eğitim yayınevi,2013"
      },
      {
        "week": 4,
        "topic": "İnançlar, Tutumlar",
        "resources": "A Koçel, Tamer, İşletme Yöneticiliği, İstanbul:Beta Yayınları (2010)vcıol Basım Yayın, 2004."
      },
      {
        "week": 5,
        "topic": "Psikolojinin yönetim ve organizasyondaki yeri ve önemi",
        "resources": "Şimşek,Ali, Davranış Bilimleri,eğitim yayınevi,2013"
      },
      {
        "week": 6,
        "topic": "kişilik ve kişisel farklılıkların analizi",
        "resources": "A Koçel, Tamer, İşletme Yöneticiliği, İstanbul:Beta Yayınları (2010)vcıol Basım Yayın, 2004."
      },
      {
        "week": 7,
        "topic": "motivasyon",
        "resources": "Eren,Erol,Örgütsel Davranış ve Yönetim Psikolojisi, Beta Basım Yayım, 2012."
      },
      {
        "week": 8,
        "topic": "ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "uyum sorunu ve savunma mekanizmaları",
        "resources": "A Koçel, Tamer, İşletme Yöneticiliği, İstanbul:Beta Yayınları (2010)vcıol Basım Yayın, 2004."
      },
      {
        "week": 10,
        "topic": "çatışma",
        "resources": "Eren,Erol,Örgütsel Davranış ve Yönetim Psikolojisi, Beta Basım Yayım, 2012."
      },
      {
        "week": 11,
        "topic": "örgüt kültürü",
        "resources": "A Koçel, Tamer, İşletme Yöneticiliği, İstanbul:Beta Yayınları (2010)vcıol Basım Yayın, 2004."
      },
      {
        "week": 12,
        "topic": "stres yönetimi",
        "resources": "Şimşek,Ali, Davranış Bilimleri,eğitim yayınevi,2013"
      },
      {
        "week": 13,
        "topic": "örgütsel iletişim",
        "resources": "A Koçel, Tamer, İşletme Yöneticiliği, İstanbul:Beta Yayınları (2010)vcıol Basım Yayın, 2004."
      },
      {
        "week": 14,
        "topic": "duygusal emek",
        "resources": "A Koçel, Tamer, İşletme Yöneticiliği, İstanbul:Beta Yayınları (2010)vcıol Basım Yayın, 2004."
      },
      {
        "week": 15,
        "topic": "dönem değerlendirme",
        "resources": ""
      }
    ]
  },
  {
    "id": "22437",
    "code": "2004310",
    "name": "BİLİMSEL ARAŞTIRMA YÖNTEMLERİ",
    "semester": 3,
    "year": 2,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. ŞEBNEM  YÜCEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Araştırma Yöntemlerine Giriş: Araştırmanın Temelleri",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi ."
      },
      {
        "week": 2,
        "topic": "Bilimsel Araştırmada Temel Kavramlar",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi ."
      },
      {
        "week": 3,
        "topic": "Araştırma Yaklaşımlarının Seçimi",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi ."
      },
      {
        "week": 4,
        "topic": "Araştırma Etiği",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 5,
        "topic": "Araştırmanın Evreni ve Örneklemi",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 6,
        "topic": "Nicel Araştırma Tasarımı",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 7,
        "topic": "Nicel Araştırmada Veri Toplama Araçları ve Veri Türleri",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 9,
        "topic": "Nicel Araştırmada Veri Toplama Araçları ve Ölçüm, Sunum Teknikleri Pratiği",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 10,
        "topic": "Nicel Araştırmada Geçerlilik ve Güvenilirlik, Sunum Teknikleri Pratiği",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 11,
        "topic": "Akademik Çalışma ve Raporlama Süreci: Araştırmanın Planlanması, Sunum Teknikleri Pratiği",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 12,
        "topic": "Akademik Yazım, Sunum Teknikleri Pratiği",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 13,
        "topic": "SPSS Uygulama Örnekleriyle Nicel Veri Analizi, Sunum Teknikleri Pratiği",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 14,
        "topic": "SPSS Uygulama Örnekleriyle Nicel Veri Analizi, Sunum Teknikleri Pratiği",
        "resources": "Aslan, Ş., (Ed.). (2018). Sosyal Bilimlerde Araştırma Yöntemleri, Nicel, Karma, Nitel Tasarımlar İçin Bir Rehber, (1. Baskı). Konya: Eğitim Yayınevi."
      },
      {
        "week": 15,
        "topic": "dönem değerlendirilmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22438",
    "code": "2004311",
    "name": "SAĞLIK HİZMETLERİ YÖNETİMİ",
    "semester": 3,
    "year": 2,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. YUNUS EMRE  ÖZTÜRK",
    "weeks": [
      {
        "week": 1,
        "topic": "Yönetimin tanımı ve genel özellikleri",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 2,
        "topic": "Yönetimin tarihsel gelişimi",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 3,
        "topic": "Yönetimin işlevleri",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 4,
        "topic": "Sağlık ve sağlık hizmetlerinin tanımı",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 5,
        "topic": "Sağlık hizmetlerinin özellikleri sınıflandırılması",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 6,
        "topic": "Türkiye de sağlık hizmetlerinin gelişimi",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 7,
        "topic": "Türkiye de sağlık hizmetlerinin gelişimi-II",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Türkiye de sağlık hizmetlerinin örgütlenmesi",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 10,
        "topic": "Hastane organizasyonu",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 11,
        "topic": "Hastanelerin tanımı ve özellikleri",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 12,
        "topic": "Tıp Hizmetleri Organizasyonu",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 13,
        "topic": "Özel ve kamu hastaneleri karşılaştırması",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 14,
        "topic": "Sağlık hizmetleri yönetiminde enformasyon sistemleri",
        "resources": "Prof.Dr. Şahin Kavuncubaşı, Hastane ve Sağlık Kurumları Yönetimi Ankara, 2000 2- Prof.Dr. Dilaver Tengilimoğlu Sağlık İşletmeleri Yönetimi, Ankara, 2011"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22439",
    "code": "2004312",
    "name": "BİYOİSTATİSTİK",
    "semester": 3,
    "year": 2,
    "term": "Güz",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ MÜJDAT  YEŞİLDAL",
    "weeks": [
      {
        "week": 1,
        "topic": "İstatistiğe giriş: temel kavramlar, istatistiğin tanımı ve bölümleri, evren-örneklem ayrımı, sağlık yönetiminde istatistiğin kullanım alanları",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Pagano, M., Gauvreau, K. & Mattie, H. (2022). Principles of Biostatistics (3rd ed.). Boca Raton, FL: Chapman & Hall/CRC."
      },
      {
        "week": 2,
        "topic": "Değişken türleri ve ölçme düzeyleri: sınıflayıcı, sıralayıcı, aralık ve oran ölçekleri; sağlık alanında veri kaynakları ve veri toplama araçları",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Pagano, M., Gauvreau, K. & Mattie, H. (2022). Principles of Biostatistics (3rd ed.). Boca Raton, FL: Chapman & Hall/CRC."
      },
      {
        "week": 3,
        "topic": "Verilerin düzenlenmesi ve sunumu: frekans dağılımlarının oluşturulması, tablo yapım kuralları, grafik türleri ve seçim ölçütleri",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Rosner, B. (2016). Fundamentals of Biostatistics (8th ed.). Boston, MA: Cengage Learning."
      },
      {
        "week": 4,
        "topic": "Merkez&#238; eğilim ölçüleri: aritmetik ortalama, ortanca ve tepe değer; hesaplanmaları, kullanım koşulları ve karşılaştırılması",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Rosner, B. (2016). Fundamentals of Biostatistics (8th ed.). Boston, MA: Cengage Learning."
      },
      {
        "week": 5,
        "topic": "Değişkenlik ölçüleri: değişim aralığı, varyans, standart sapma ve değişim katsayısı; dağılımın biçimi, çarpıklık ve basıklık",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Rosner, B. (2016). Fundamentals of Biostatistics (8th ed.). Boston, MA: Cengage Learning."
      },
      {
        "week": 6,
        "topic": "Olasılık kavramı ve teorik dağılımlar: normal dağılım ve standart normal dağılım, binom dağılımı, Poisson dağılımı ve sağlık verilerindeki uygulamaları",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Pagano, M., Gauvreau, K. & Mattie, H. (2022). Principles of Biostatistics (3rd ed.). Boca Raton, FL: Chapman & Hall/CRC."
      },
      {
        "week": 7,
        "topic": "Örnekleme: olasılıklı ve olasılıksız örnekleme yöntemleri, örneklem büyüklüğünün belirlenmesi, örnekleme dağılımı ve standart hata",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 8,
        "topic": "Ara Sınav (Yarıyıl Sınavı)",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 9,
        "topic": "Tahmin: nokta tahmini ve aralık tahmini, ortalama ve oran için güven aralıklarının hesaplanması ve yorumlanması",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 10,
        "topic": "Hipotez testinin mantığı: hipotezlerin kurulması, I. ve II. tip hata, anlamlılık düzeyi, p değerinin doğru yorumlanması ve testin gücü",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 11,
        "topic": "Parametrik testler I: normallik varsayımının incelenmesi, tek örneklem t testi ve bağımsız gruplarda t testi; SPSS uygulamaları",
        "resources": "Rosner, B. (2016). Fundamentals of Biostatistics (8th ed.). Boston, MA: Cengage Learning.  Field, A. (2024). Discovering Statistics Using IBM SPSS Statistics (6th ed.). London: SAGE Publications."
      },
      {
        "week": 12,
        "topic": "Parametrik testler II: bağımlı gruplarda t testi, tek yönlü varyans analizi (ANOVA) ve çoklu karşılaştırma testleri; SPSS uygulamaları",
        "resources": "Rosner, B. (2016). Fundamentals of Biostatistics (8th ed.). Boston, MA: Cengage Learning.  Field, A. (2024). Discovering Statistics Using IBM SPSS Statistics (6th ed.). London: SAGE Publications."
      },
      {
        "week": 13,
        "topic": "Parametrik olmayan testler: ki-kare testleri, Mann-Whitney U, Wilcoxon işaretli sıralar ve Kruskal-Wallis testleri; SPSS uygulamaları",
        "resources": "Daniel, W. W. & Cross, C. L. (2018). Biostatistics: A Foundation for Analysis in the Health Sciences (11th ed.). Hoboken, NJ: Wiley.  Field, A. (2024). Discovering Statistics Using IBM SPSS Statistics (6th ed.). London: SAGE Publications."
      },
      {
        "week": 14,
        "topic": "İlişki analizleri: Pearson ve Spearman korelasyon katsayıları, basit doğrusal regresyon modelinin kurulması ve katsayıların yorumlanması",
        "resources": "Rosner, B. (2016). Fundamentals of Biostatistics (8th ed.). Boston, MA: Cengage Learning.  Field, A. (2024). Discovering Statistics Using IBM SPSS Statistics (6th ed.). London: SAGE Publications."
      },
      {
        "week": 15,
        "topic": "Sağlık verileri üzerinde bütünleşik uygulama: uygun istatistiksel yöntemin seçilmesi, analiz sonuçlarının yorumlanması ve tablolar h&#226;linde raporlanması, genel değerlendirme",
        "resources": "Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.  Field, A. (2024). Discovering Statistics Using IBM SPSS Statistics (6th ed.). London: SAGE Publications."
      }
    ]
  },
  {
    "id": "22440",
    "code": "2004313",
    "name": "İLETİŞİM BECERİLERİ",
    "semester": 3,
    "year": 2,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. ŞERİFE  GÜZEL",
    "weeks": [
      {
        "week": 1,
        "topic": "İletişim ve Kişilerarası İletişimbilgiler, Genel bilgiler",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 2,
        "topic": "Kişi Algısı",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 3,
        "topic": "Sözel Mesajlar",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 4,
        "topic": "Sözel Olmayan Mesajlar",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 5,
        "topic": "Dinleme",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 6,
        "topic": "Kişilerarası İletişim ve Etik İlkeler",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 7,
        "topic": "İlişki/Etkileşim Süreci",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Etkileşim Bağlamları",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 10,
        "topic": "Değişen İlişkiler",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 11,
        "topic": "Aile ve Arkadaşlarla İletişim",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 12,
        "topic": "Yakın İlişkilerde İletişim",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 13,
        "topic": "İletişimdeki Engeller",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 14,
        "topic": "Kültürel Farklılıklar ve İletişim",
        "resources": "1. Işık, Metin, Hastanelerde Halkla İlişkiler, Eğitim Akademi Yayınları, 2011. 2. Güçdemir, Yeşim, Sanal Ortamda İletişim, Derin Yayınları, 2010. 3. Taşoğlu Nihal Paşalı, Pazarlama İletişimi, Detay Yayıncılık, 2009. 4. Tekinalp Şermin, Uzun Ruhdan, İletişim Araştırmaları ve Kuramları, Beta Basım Yayın, 2009. 5. İlgili Güncel Makale ve Kitaplar"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22441",
    "code": "2004314",
    "name": "SAĞLIK KURUMLARINDA KALİTE YÖNETİMİ",
    "semester": 3,
    "year": 2,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "kalite tanımı, amaçları, hizmet sektöründe kalite kavramı, TKY tanımı, amaçları, prensipleri",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 2,
        "topic": "Kalite planlaması",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 3,
        "topic": "Takımlar",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 4,
        "topic": "Temel Kalite Araçları",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 5,
        "topic": "İleri Kailte Araçları",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 6,
        "topic": "Kalite Kültürü ve değişim",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 7,
        "topic": "Sağlık İşletmelerinde Kıyaslama",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Hizmet kalite kriterleri (kamu ve özel hastaneler)",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 10,
        "topic": "Kalite Fonksiyon Yayılımı",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 11,
        "topic": "Hizmet Kalitesinin Ölçülmesi: Servqual",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 12,
        "topic": "ISO 9000 Standartları ve sağlıkta uygulanması",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 13,
        "topic": "Akreditasyon",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 14,
        "topic": "Altı Sigma metodolojisi",
        "resources": "Applying Quality Approach in Healthcare, Second edition: A system&#180;s Approach, Diane L. Kelly, 2006."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22407",
    "code": "2004403",
    "name": "EPİDEMİYOLOJİ",
    "semester": 4,
    "year": 2,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ MÜJDAT  YEŞİLDAL",
    "weeks": [
      {
        "week": 1,
        "topic": "Epidemiyolojinin tanımı, tarihsel gelişimi ve temel kavramları; epidemiyolojinin amaçları ve sağlık yönetimi alanındaki kullanım alanları",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 2,
        "topic": "Sağlık ve hastalık kavramı, hastalığın doğal seyri; etken-konak-çevre etkileşimi (epidemiyolojik üçgen) ve bulaşma yolları",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 3,
        "topic": "Korunma düzeyleri: primordiyal, birincil, ikincil ve üçüncül korunma; korunma düzeylerinin sağlık hizmetleri sunumundaki karşılıkları",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 4,
        "topic": "Hastalık sıklığı ölçütleri: hız, oran ve orantı kavramları; insidans ve prevalans hızlarının hesaplanması ve aralarındaki ilişki",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 5,
        "topic": "Ölüm ve doğurganlık ölçütleri; kaba ve özel hızlar, hız standardizasyonu; toplumun sağlık düzeyini gösteren temel göstergeler",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 6,
        "topic": "Epidemiyolojik araştırma tiplerinin sınıflandırılması; tanımlayıcı araştırmalar: olgu sunumu, olgu serisi ve kesitsel araştırmalar",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 7,
        "topic": "Analitik araştırmalar I: olgu-kontrol araştırmalarının tasarımı, kontrol grubunun seçimi, üstünlükleri ve sınırlılıkları",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 8,
        "topic": "Ara Sınav (Yarıyıl Sınavı)",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Analitik araştırmalar II: kohort araştırmaları; prospektif ve retrospektif kohort, izlem süreci, izlemden çıkma ve üstünlük-sınırlılıkların karşılaştırılması",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 10,
        "topic": "Müdahale (deneysel) araştırmalar: randomize kontrollü çalışmalar, randomizasyon ve körleme, saha denemeleri ve araştırma etiği ilkeleri",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 11,
        "topic": "Risk ölçütleri: rölatif risk, odds oranı ve atfedilen risk; iki-çarpı-iki tablo üzerinden hesaplama ve sonuçların yorumlanması",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 12,
        "topic": "Epidemiyolojik araştırmalarda yanlılık türleri, karıştırıcı etken ve şans faktörü; nedensellik ölçütleri ve nedensel çıkarım",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 13,
        "topic": "Tarama ve tanı testleri: duyarlılık, özgüllük, pozitif ve negatif kestirim değerleri; bir tarama programının uygunluk ölçütleri",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 14,
        "topic": "Bulaşıcı hastalık epidemiyolojisi ve sürveyans sistemleri; salgın tanımı, salgın inceleme basamakları ve kontrol önlemleri",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      },
      {
        "week": 15,
        "topic": "Kronik hastalık epidemiyolojisi ve sağlık yönetiminde uygulama: epidemiyolojik verilerin sağlık hizmeti planlaması ve karar verme süreçlerinde kullanılması, genel değerlendirme",
        "resources": "\"Celentano, D. D., Szklo, M. & Farag, Y. (2024). Gordis Epidemiology (7th ed.). Philadelphia, PA: Elsevier. Aschengrau, A. & Seage, G. R. (2025). Aschengrau & Seage&#39;s Essentials of Epidemiology in Public Health (5th ed.). Burlington, MA: Jones & Bartlett Learning. Buka, S. L. & Goedel, W. C. (2025). Friis & Sellers&#39; Epidemiology for Public Health Practice (7th ed.). Burlington, MA: Jones & Bartlett Learning. Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization. Sullivan, L. M. (2023). Essentials of Biostatistics in Public Health (4th ed.). Burlington, MA: Jones & Bartlett Learning.\""
      }
    ]
  },
  {
    "id": "22408",
    "code": "2004407",
    "name": "SAĞLIK KURUMLARINDA İNSAN KAYNAKLARI YÖNETİMİ",
    "semester": 4,
    "year": 2,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. ŞEBNEM  YÜCEL",
    "weeks": [
      {
        "week": 1,
        "topic": "İnsan Kaynaklarına Giriş",
        "resources": "İnsan Kaynakları Yönetimi, İ.Ü. İşletme Fakültesi İKY Ana Bilim Dalı, Beta Yayınları."
      },
      {
        "week": 2,
        "topic": "İnsan Kaynakları Yönetimine Tarihsel Bakış",
        "resources": "Zeyyat SABUNCUOĞLU, İnsan Kaynakları Yönetimi, Alfa Aktüel Basım"
      },
      {
        "week": 3,
        "topic": "İnsan Kaynakları Yönetimi Uygulamaları: Planlama",
        "resources": "Dursun BİNGÖL, İnsan Kaynakları Yönetimi, Beta Yayınları"
      },
      {
        "week": 4,
        "topic": "İnsan Kaynakları Yönetimi Uygulamaları: İşe Alma ve Seçme",
        "resources": "Zeyyat SABUNCUOĞLU, İnsan Kaynakları Yönetimi, Alfa Aktüel Basım"
      },
      {
        "week": 5,
        "topic": "İnsan Kaynakları Yönetimi Uygulamaları: Eğitim ve Geliştirme",
        "resources": "Dursun BİNGÖL, İnsan Kaynakları Yönetimi, Beta Yayınları"
      },
      {
        "week": 6,
        "topic": "İnsan Kaynakları Yönetimi Uygulamaları: Performans Değerleme",
        "resources": "Dursun BİNGÖL, İnsan Kaynakları Yönetimi, Beta Yayınları"
      },
      {
        "week": 7,
        "topic": "İnsan Kaynakları Yönetimi Uygulamaları: Ödüllendirme",
        "resources": "Hüseyin Özgen ve Azmi Yalçın , İnsan Kaynakları Yönetimi: Stratejik bir yaklaşım, Nobel Kitabevi"
      },
      {
        "week": 8,
        "topic": "Ara Sınav  Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Kariyer Yönetimi ve Planlaması",
        "resources": "Öznur YÜKSEL, İnsan Kaynakları Yönetimi, Gazi kitabevi"
      },
      {
        "week": 10,
        "topic": "Ücretlendirme Yönetimi",
        "resources": "Öznur YÜKSEL, İnsan Kaynakları Yönetimi, Gazi kitabevi"
      },
      {
        "week": 11,
        "topic": "İş Değerlemesi",
        "resources": "Öznur YÜKSEL, İnsan Kaynakları Yönetimi, Gazi kitabevi"
      },
      {
        "week": 12,
        "topic": "İşgören Sağlığı ve İş Güvenliği",
        "resources": "Zeyyat SABUNCUOĞLU, İnsan Kaynakları Yönetimi, Alfa Aktüel Basım"
      },
      {
        "week": 13,
        "topic": "İnsan Kaynakları Bilgi Sistemleri",
        "resources": "Zeyyat SABUNCUOĞLU, İnsan Kaynakları Yönetimi, Alfa Aktüel Basım"
      },
      {
        "week": 14,
        "topic": "İnsan Kaynakları Bilgi Sistemleri",
        "resources": "Öznur YÜKSEL, İnsan Kaynakları Yönetimi, Gazi kitabevi"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": "Hüseyin Özgen ve Azmi Yalçın , İnsan Kaynakları Yönetimi: Stratejik bir yaklaşım, Nobel Kitabevi"
      }
    ]
  },
  {
    "id": "22442",
    "code": "2004410",
    "name": "SAĞLIK İŞLETMELERİ YÖNETİMİ",
    "semester": 4,
    "year": 2,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. YUNUS EMRE  ÖZTÜRK",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık İşletmeleri Kavramı, Sağlık İşletmeleri Türleri",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 2,
        "topic": "Sağlık İşletmelerinin Özellikleri",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 3,
        "topic": "Sağlık işletmeleri Kuruluş Yeri Çalışmaları",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 4,
        "topic": "Hastanelerin tanımı, gelişimi işlevleri, sınıflandırılmaları",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 5,
        "topic": "Hastanelerin Organizasyon Açısından Özellikleri",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 6,
        "topic": "Türkiyede Hastanelerin Organizasyon Yapısı Üniversite Hastaneleri, Sağlık Bakanlığı Hastaneleri, Özel Hastaneler, Vakıf Hastaneleri",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 7,
        "topic": "Çeşitli Ülkelerde Hastanelerin Organizasyon Yapısı",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Çeşitli Ülkelerde Hastanelerin Organizasyon Yapısı",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 10,
        "topic": "Klinik hizmetleri Yönetimi",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 11,
        "topic": "Poliklinik Hizmetleri Yönetimi",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 12,
        "topic": "Klinik destek hizmetleri yönetimi",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 13,
        "topic": "Hastanelerde bina yönetimi",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 14,
        "topic": "Hastanelerde bina yönetimi",
        "resources": "Tengilimoğlu D., Işık O., Akbolat M., Sağlık İşletmeleri Yönetimi, NOBEL Yayınevi, Ankara, 2009."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22387",
    "code": "2004411",
    "name": "SAĞLIK KURUMLARINDA STRATEJİK YÖNETİM",
    "semester": 4,
    "year": 2,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. ŞERİFE  GÜZEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Stratejik Yönetim Nedir?",
        "resources": ""
      },
      {
        "week": 2,
        "topic": "Stratejik Yönetim Süreci ve Unsurları",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 3,
        "topic": "Stratejik Yönetim Süreci",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 4,
        "topic": "İşletme Analizi",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 5,
        "topic": "Dış Çevre Analizi ve Dış Çevre Unsurlarının Ölçülmesi",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 6,
        "topic": "Stratejik Yönlendirme",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 7,
        "topic": "Temel Stratejiler",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Temel Stratejiler",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 10,
        "topic": "Kurumsal Stratejiler",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 11,
        "topic": "Rekabet Stratejileri",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 12,
        "topic": "Bölüm Stratejileri",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 13,
        "topic": "Stratejilerin Uygulanması",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 14,
        "topic": "Stratejik Değerleme ve Kontrol",
        "resources": "Ülgen Hayri, Mirze Kadri, İşletmelerde Stratejik Yönetim Literatür Yayınları, 2010."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22388",
    "code": "2004412",
    "name": "SAĞLIK BİLGİ YÖNETİMİ",
    "semester": 4,
    "year": 2,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Bilgi yönetimine giriş",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 2,
        "topic": "Bilgi yönetimi döngüsü",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 3,
        "topic": "Bilgi yönetimi modelleri ve başarıya etki eden faktörler",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 4,
        "topic": "Bir kuruluşun bilgi yönetiminin değerlendirilmesi",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 5,
        "topic": "Bilgi paylaşımı",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 6,
        "topic": "Bilginin uygulanması",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 7,
        "topic": "Bilgi yönetiminde örgütsel kültürün rolü",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 8,
        "topic": "ARASINAV",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Bilgi saklama",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 10,
        "topic": "Bilgi yönetim araçları",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 11,
        "topic": "Bilgi yönetim araçları",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 12,
        "topic": "Bilgi yönetimi strateji ve ölçümleri",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 13,
        "topic": "Bilgi yönetimi ekibi",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 14,
        "topic": "Örgütsel öğrenme için bilgi yönetimi süreci: örnek olay",
        "resources": "1)Bali, R. K. (2005). Clinical knowledge management : opportunities and challenges. Hershey, PA: Idea Group Pub."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "43041",
    "code": "2005414",
    "name": "Sağlık Turizmi",
    "semester": 4,
    "year": 2,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık Turizmi: Kuramsal Bir Çerçeve",
        "resources": "Bahar M. (2009). Tıp Turizmi. Türkiye Cumhuriyeti Maliye Bakanlığı, Ankara."
      },
      {
        "week": 2,
        "topic": "Sağlık Turizminin Sınıflandırılması: Sağlık Turizmi Türleri",
        "resources": "Bahar M. (2009). Tıp Turizmi. Türkiye Cumhuriyeti Maliye Bakanlığı, Ankara."
      },
      {
        "week": 3,
        "topic": "Sağlık Turizminin Özellikleri",
        "resources": "Reisman D. (2010). Health Tourism: Social Wefare Through International Trade. Edward Elgar, Cheltenham"
      },
      {
        "week": 4,
        "topic": "Sağlık Turizminin Gelişimi ve Nedenleri",
        "resources": "Reisman D. (2010). Health Tourism: Social Wefare Through International Trade. Edward Elgar, Cheltenham"
      },
      {
        "week": 5,
        "topic": "Sağlık Turizmi Politikası ve Planlaması",
        "resources": "Aydın D, Şeker S ve Şahan S. (2011). Kamu Hastanelerinde Sağlık Turizmi ve Turistin Sağlığı Uygulama Rehberi. Sağlık Bakanlığı, Ankara."
      },
      {
        "week": 6,
        "topic": "Sağlık Turizmi Sektörü/Piyasası",
        "resources": "Aydın D, Şeker S ve Şahan S. (2011). Kamu Hastanelerinde Sağlık Turizmi ve Turistin Sağlığı Uygulama Rehberi. Sağlık Bakanlığı, Ankara."
      },
      {
        "week": 7,
        "topic": "Sağlık Turizmi Endüstrisi",
        "resources": "BAKA. (2011). Sağlık Turizmi Sektör Raporu. Batı Akdeniz Kalkınma Ajansı (BAKA), Antalya."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sağlık Turizminde Risk ve Güvenlik",
        "resources": "Bookman MZ and Bookman KR. (2010). Medical Tourism in Developing Countries. Palgrave Macmillan, New York."
      },
      {
        "week": 10,
        "topic": "Sağlık Turizminde Düzenlemeler",
        "resources": "Bookman MZ and Bookman KR. (2010). Medical Tourism in Developing Countries. Palgrave Macmillan, New York."
      },
      {
        "week": 11,
        "topic": "Avrupa Birliğinde Hastaların Serbest Dolaşımı ve Sağlık Turizmi",
        "resources": "Yıldırım HH ve Yıldırım T. (2011). Avrupa Birliği Sağlık Politikaları ve Türkiye.Gözden Geçirilmiş ve Güncellenmiş İkinci Baskı, İmaj Yayınevi, Ankara."
      },
      {
        "week": 12,
        "topic": "Türkiyede Sağlık Turizmi: Genel Bir Çerçeve ve Tıp Turizmi",
        "resources": "Bies W and Zacharia L. (2007). Medical Tourism: Outsourcing Surgery. Mathematical and Computer Modelling. 46: 1144-1159."
      },
      {
        "week": 13,
        "topic": "Türkiyede Sağlık Turizmi: Termal Turizm",
        "resources": "Yıldırım HH ve Altunkaya Ü (2006). Türkiyenin Sağlık Turizmi Potansiyeli ve Güçlükler. Hastane ve Yaşam Dergisi, 2(12): 120-123."
      },
      {
        "week": 14,
        "topic": "Türkiyede Sağlık Turizmi: Engelli ve Yaşlı Turizmi",
        "resources": "Yıldırım HH ve Altunkaya Ü (2006). Türkiyenin Sağlık Turizmi Potansiyeli ve Güçlükler. Hastane ve Yaşam Dergisi, 2(12): 120-123."
      },
      {
        "week": 15,
        "topic": "Final Sınavı",
        "resources": ""
      }
    ]
  },
  {
    "id": "22405",
    "code": "2004505",
    "name": "SAĞLIK YÖNETİMİNDE ETİK",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. ŞEBNEM  YÜCEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Etiğin Kapsamına İlişkin Kavramsal Çerçeve",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 2,
        "topic": "Etik Davranmak Neden Önemlidir?",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 3,
        "topic": "Etik Teoriler- 1: Teolojik ve Deontolojik Etik Teorileri, Erdem Etiği",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 4,
        "topic": "Etik Teoriler-2: Gertin Ahl&#226;k Teorisi, Klinik Etik Model, Ahl&#226;k&#238; Haklar Teorisi",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 5,
        "topic": "Etik Teoriler-3.1: Levinasın Etiğinde Başkası ve Başkasına Karşı Sorumluluk",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 6,
        "topic": "Etik Teoriler-3.2: Varoluşçu Etik",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 7,
        "topic": "Etik Teoriler-4: Feminist Etik, İlişkisel Etik, İnsan Hakları Teorisi",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 9,
        "topic": "Meslek&#238; Etiğin Kapsamı",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 10,
        "topic": "Sağlık Alanında Meslek&#238; Etik Kodlar",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 11,
        "topic": "Sağlık ve İşletme Alanında Güncel Etik İkilem Tartışmaları",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 12,
        "topic": "Örgütlerde Etik Kültür, Liderlik ve Etik Bakış Açısı",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 13,
        "topic": "Sağlık Yönetiminde Problem Çözme ve Etik Yaklaşım",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 14,
        "topic": "Araştırma Etiğinin Gelişim Süreci ve Araştırmalarda Etik Hassasiyet Sağlık Yönetimi Çalışmalarında Etik Araştırma ve Raporlama.",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": "Aslan, Ş. ve Ulutaş, Akarçay D. (2021), Evrensel Değerler Bağlamında Etik, Konya: Eğitim Yayınevi."
      }
    ]
  },
  {
    "id": "22414",
    "code": "2004508",
    "name": "SAĞLIK KURUMLARINDA FİNANSAL YÖNETİM",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. FATMA ÖZLEM  YILMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Temel kavramlar, finansal yöneticinin görevleri",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 2,
        "topic": "Finansal tablolar ve finansal analiz",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 3,
        "topic": "Finansal planlama",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 4,
        "topic": "Başabaş analizi",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 5,
        "topic": "Dönen varlıkların yönetimi",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 6,
        "topic": "Sabit varlıkların yönetimi",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 7,
        "topic": "Paranın zaman değeri ve faiz",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Projelerin değerlendirilmesi",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 10,
        "topic": "Kısa vadeli finansman kaynakları",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 11,
        "topic": "Uzun vadeli finansman kaynakları",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 12,
        "topic": "Özsermaye ile finansman",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 13,
        "topic": "Hisse senedi ve tahvil türleri, risk ve getiri analizi",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 14,
        "topic": "Sermaye maliyeti",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      },
      {
        "week": 15,
        "topic": "Türev ürünleri",
        "resources": "1. Prof. Dr. Osman OKKA, Finansal Yönetim Teori ve Çözümlü Problemler, Nobel Yayın 2. Öztin Akgüç, Finansal Yönetim, Avcıol Yayın"
      }
    ]
  },
  {
    "id": "22415",
    "code": "2004509",
    "name": "SAĞLIK KURUMLARINDA PAZARLAMA",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Genel giriş ve yarıyıl boyunca işlenecek konuların gözden geçirilmesi",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 2,
        "topic": "Pazarlamanın tanımı, pazarlama karması, sağlık hizmetlerinde reklama ilişkin mevzuat, sağlık hizmetlerinde pazarlama karşıtı görüşler ve farklı ülke uygulamaları",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 3,
        "topic": "Sahiplik türlerine göre sağlık kuruluşları ve pazarlama fonksiyonu ilişkisi, pazarlama organizasyonu ve sağlık kurumunda pazarlama yöneticisinin yeri ve rolü",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 4,
        "topic": "Hizmetlerin genel özellikleri ve sağlık hizmetlerini farklılaştıran yönler, sağlık tanımı, sağlık hizmetlerinde üretim faktörleri, sağlık piyasası ve ekonomik sistem ilişkisi, sağlık ve hastalık ekonomisi, sağlık hizmetlerinde değer üretimi",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 5,
        "topic": "Pazar tanımı, pazarlamanın gerçekleşmesi için gerekli şartlar, talebin ortaya çıkışı ve talep türleri, pazarlama anlayışının evrimi, sağlık işletmesinin çevre unsurları ve pazarlama uygulamaları üzerindeki etkileri",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 6,
        "topic": "Sektör tanımı, sağlık sektörünün sınırları, değer zinciri, rekabet kavramı, rekabeti belirleyen unsurlar, rekabet avantajı sağlayan stratejiler, sektörel yoğunlaşma ve yoğunlaşma ölçütleri, rekabetin düzenlenmesi",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 7,
        "topic": "Pazar bölümlendirme tanımı, düşey ve yanal pazar bölümlendirme, birleştirme ve ayrıştırma stratejileri, sağlık hizmeti uygulamaları",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 8,
        "topic": "ARA SINAV",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sağlık hizmetlerinde ürün, ürün yaşam eğrisi kavramı, türleri, sağlık kuruluşlarında hizmet karması ve ürün stratejileri",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 10,
        "topic": "Fiyat, sağlık hizmetlerinde fiyatlandırma ve türleri, fiyatlandırma stratejileri ve sağlık hizmetleri uygulaması, fiyatın konumlandırma gücü",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 11,
        "topic": "Sağlık hizmetlerinde dağıtım fonksiyonu, perakende karması, sağlık hizmetlerinde dağıtım kanalı tercihleri, dağıtımda itme ve çekme stratejileri, sağlık hizmeti uygulamaları",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 12,
        "topic": "Sağlık hizmetlerinde ürün lansmanı, tutundurma, tutundurma karması, sağlık iletişimi, pazarlamaya karşılık halkla ilişkiler ve sağlık hizmetlerinde üstlendiği rol",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 13,
        "topic": "Pazar araştırmaları ve sağlık hizmetleri uygulamaları, pazarlama faaliyetlerinde performans ölçümü, hastane pazar araştırması ve pazarlama faaliyeti örnekleri",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 14,
        "topic": "Müşteri odaklılık, sağlık kuruluşuyla hastaları arasındaki etkileşim hiyerarşisi, müşteri odaklılık değer matrisi, nasıl daha fazla müşteri odaklı olunabilir, fark yaratmanın yolları",
        "resources": "1)Dilaver Tengilimoğlu, Sağlık Hizmetleri Pazarlaması, Siyasal Kitabevi, 2011."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22416",
    "code": "2004510",
    "name": "ÖRGÜT KURAMLARI",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. ŞERİFE  GÜZEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Örgüt ve Kuram Kavramları, Örgüt Kuramının Temelleri",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 2,
        "topic": "Klasik ve Neoklasik Yaklaşımlar",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 3,
        "topic": "Fayol ve Yönetime Bakış ve Weber Açısından Sistemlere Bakış",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 4,
        "topic": "Örgüt Araştırmalarının Gelişimi",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 5,
        "topic": "Koşul Bağımlılık Kuramı, İşlem Maliyeti Kuramı",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 6,
        "topic": "İşlem Maliyeti Kuramı, Vekalet Kuramı, Kaynak Bağımlılığı Kuramı",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 7,
        "topic": "İnsan İlişkileri Kuramı ve İletişim",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Örgütsel Ekoloji, Birlikte Evrim, Kuramsal Kuram",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 10,
        "topic": "Makrokuramsal Kuram, Bütünleşmiş Örgüt Kuramları",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 11,
        "topic": "Karar verme Kuramı",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 12,
        "topic": "Sosyal Sistem Kuramı- Parsons",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 13,
        "topic": "Örgütsel Ağlar, Örgüt Çalışmalarında Kaos ve Karmaşıklık Kuramları",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 14,
        "topic": "Yeni Kuramlar Genel Sistem Kuramı, Açık Sistem Yaklaşımı, Örgütsel Öğrenme",
        "resources": "Sözen, H. C., Basım, H. N. (2012). Örgüt Kuramları. İstanbul: Beta Basım Yayım."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22417",
    "code": "2004511",
    "name": "KAMU YÖNETİMİ",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "4",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Kamu Yönetiminin Niteliği, Kamu Yönetimine Yakın Bilim Dalları",
        "resources": "1. Turgay ERGUN, Kamu Yönetimi, TODAİE Yayınları, Ankara, 2004. 2. Musa EKEN, Yönetimde Şeffaflık, Sakarya Kitabevi, Adapazarı, 2005."
      },
      {
        "week": 2,
        "topic": "Kamu Yönetimi Düşüncesinin Gelişimi/Avrupa, ABD Ve Türklerde)",
        "resources": "2. Musa EKEN, Yönetimde Şeffaflık, Sakarya Kitabevi, Adapazarı, 2005. 3. Muhittin ACAR-Hüseyin ÖZGÜR, Çağdaş Kamu Yönetimi I, Nobel Yayınları, Ankara, 2003."
      },
      {
        "week": 3,
        "topic": "Merkezden Yönetim, Yerinden Yönetim, Türk Kamu Yönetiminin Temel Özellikleri",
        "resources": "3. Muhittin ACAR-Hüseyin ÖZGÜR, Çağdaş Kamu Yönetimi I, Nobel Yayınları, Ankara, 2003. 4. Muhittin ACAR-Hüseyin ÖZGÜR, Çağdaş Kamu Yönetimi II, Nobel Yayınları, Ankara, 2004."
      },
      {
        "week": 4,
        "topic": "Merkezi Yönetimin Başkent Örgütü",
        "resources": "5. Ayşe Yıldız  ÖZSALMANLI, Bilgi Teknolojilerinin Türkiyede Kamu Personel Rejimi  Üzerine Etkileri,  6. Yayımlanmamış Doktora Tezi), DEÜ, SBE, İzmir, Mart, 2002."
      },
      {
        "week": 5,
        "topic": "Merkezi Yönetimin Taşra Örgütü",
        "resources": "7. Ayşe Yıldız  ÖZSALMANLI-İbrahim  ARAP-Aykut  ACAR, 14.10.2005 Tarihli Kamu Personel Kanunu Tasarısı  8. Taslağı Üzerine İnceleme ve Değerlendirmeler?, Mevzuat Dergisi, www. mevzuatdergisi.com, 17.12.2005."
      },
      {
        "week": 6,
        "topic": "Yerel Yönetimlerin Önemi,  Yönetimler Arası Hizmet Bölüşümü,  İl Özel İdaresi",
        "resources": "8. Taslağı Üzerine İnceleme ve Değerlendirmeler, Mevzuat Dergisi, www. mevzuatdergisi.com, 17.12.2005. 9. Onur Ender ARSLAN, Kamu Personel Rejimi, TODAİE, Mayıs, 2005."
      },
      {
        "week": 7,
        "topic": "Belediye Ve Büyükşehir Belediye Yönetimi",
        "resources": "10. Michel AGLİETTA, A Theory of Capitalist Regulation, The USA Experience, İngilizceye Çeviren: D.Fernbach, New  11. Edition Verso, NY., 2000."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Merkezi-Yerel Yönetim İlişkilerine Bakış, Yerel Yönetimlerin Gelişimi",
        "resources": "11. Edition Verso, NY., 2000. 12. Hilaria BARNETT, Consititutional and Administrative Law,  4.edition, Cavendish Pub. Limited, Londan, 2002."
      },
      {
        "week": 10,
        "topic": "Hizmet Yerinden Yönetim Kuruluşları (Üniversiteler, KİTler, Mesleki Kamu Kuruluşları, TRT, vb.)",
        "resources": "12. Hilaria BARNETT, Consititutional and Administrative Law,  4.edition, Cavendish Pub. Limited, Londan, 2002. 13. Doğan CANMAN, Çağdaş Personel Yönetimi, TODAİE Yayınları, Ankara, 1995."
      },
      {
        "week": 11,
        "topic": "Kamu Sektöründe İnsan Kaynakları Yönetimi",
        "resources": "13. Doğan CANMAN, Çağdaş Personel Yönetimi, TODAİE Yayınları, Ankara, 1995. 14. COI, The Civil Service, HMSO, London, 1995."
      },
      {
        "week": 12,
        "topic": "Kamu Yönetiminin Denetlenmesi   (Siyasi Ve İdari Denetim Yolları)",
        "resources": "15. IMF,  Good Governance, The IMFs Role,Washington DC, 1997. 16.Gülten KAZGAN, Küreselleşme ve Ulus- Devlet, 3.Baskı, Bilgi Üniversitesi Yayınları, İstanbul, 2002."
      },
      {
        "week": 13,
        "topic": "Kamu Yönetiminin Denetlenmesi  (Yargı,  Kamuoyu Denetim Yolları  Ve  Ombudsman),  Kamu Yönetiminde Etik Ve Açıklık Hakkında Bilgiler",
        "resources": "17. Cemal MIHÇIOĞLU,  ABDde Kadroların Sınıflandırılması, SBF. Yayınları, Ankara, 1958. 18. Gencay ŞAYLAN, Değişim, Küreselleşme ve Devletin Yeni İşlevi, İmge Kitabevi, Ankara, 1995."
      },
      {
        "week": 14,
        "topic": "Dönemin Değerlendirilmesi",
        "resources": "19.John BROWN, Yönetişim ya da Neo-liberalizmin Siyasi Düzeni, Çev. Tuvana Gülcan, Birikim, Sayı 158, Haziran, 2002."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22418",
    "code": "2004512",
    "name": "HALK SAĞLIĞI",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ MÜJDAT  YEŞİLDAL",
    "weeks": [
      {
        "week": 1,
        "topic": "Halk sağlığı kavramı, tanımı ve tarihsel gelişimi; koruyucu sağlık hizmetleri ile tedavi edici hizmetlerin karşılaştırılması",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 2,
        "topic": "Sağlığın belirleyicileri; sağlığın sosyal belirleyicileri, sağlık eşitsizlikleri ve eşitsizliklerin oluşum mekanizmaları",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 3,
        "topic": "Türkiye&#39;de sağlık hizmetlerinin örgütlenme yapısı; sağlık hizmetlerinin basamaklandırılması ve sevk sistemi",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 4,
        "topic": "Birinci basamak sağlık hizmetleri: aile hekimliği uygulaması, toplum sağlığı merkezleri ve sağlıklı hayat merkezlerinin işleyişi",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 5,
        "topic": "Toplumun sağlık düzeyini gösteren temel göstergeler; göstergelerin okunması ve ülkeler arası karşılaştırmalarda kullanılması",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 6,
        "topic": "Demografi ve nüfus yapısı; demografik dönüşüm, nüfusun yaşlanması ve bunun sağlık hizmeti talebine etkileri",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 7,
        "topic": "Ana-çocuk sağlığı ve üreme sağlığı hizmetlerinin kapsamı; bu alandaki ulusal programlar ve izlem göstergeleri",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 8,
        "topic": "Ara Sınav (Yarıyıl Sınavı)",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 9,
        "topic": "Bulaşıcı hastalıkların kontrolü: bağışıklama ve ulusal aşı programı, bildirim sistemi ve kontrol hizmetlerinin yönetsel gerekleri",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 10,
        "topic": "Bulaşıcı olmayan (kronik) hastalıkların kontrolü: ulusal kontrol programları ve risk etmenlerine yönelik toplum düzeyindeki politikalar",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 11,
        "topic": "Çevre sağlığı: su, hava, atık yönetimi ve gıda güvenliği; sağlık kurumları açısından çevresel riskler ve alınması gereken önlemler",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 12,
        "topic": "İş sağlığı ve güvenliği; sağlık çalışanlarının sağlığı, mesleki riskler ve sağlık kurumlarında iş güvenliği uygulamaları",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 13,
        "topic": "Sağlığın geliştirilmesi yaklaşımı ve sağlık eğitimi; davranış değişikliği modelleri ve toplum temelli sağlık eğitimi programları",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 14,
        "topic": "Sağlık politikası ve sağlık finansmanı; uluslararası sağlık kuruluşlarının rolü ve küresel sağlık gündemi",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      },
      {
        "week": 15,
        "topic": "Afetlerde sağlık hizmetleri ve toplum temelli uygulama: öncelikli sağlık sorunlarının belirlenmesi, sağlık kurumu düzeyinde koruyucu hizmet önerisi geliştirilmesi, genel değerlendirme",
        "resources": "Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning.  Bonita, R., Beaglehole, R. & Kjellström, T. (2006). Basic Epidemiology (2nd ed.). Geneva: World Health Organization."
      }
    ]
  },
  {
    "id": "22419",
    "code": "2004513",
    "name": "İŞ GÜVENLİĞİ",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "İş güvenliğinin tanımı ve tarihçesi",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 2,
        "topic": "Devletin, işverenin ve işçinin görevleri, Hukuk kavramı ve çeşitleri",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 3,
        "topic": "ş kazası kavramı, oluş sebepleri ve iş kazası çeşitleri",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 4,
        "topic": "Meslek Hastalıkları kavramı, çeşitleri ve korunma yolları",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 5,
        "topic": "Ergonomi (İşçi ve işyeri yeri koşullarının işçi sağlığına etkisi)",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 6,
        "topic": "Çalışma alanlarında elektriksiz aletlerle çalışmalarda iş güvenliği",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 7,
        "topic": "Çalışma alanlarında elektrikli aletlerde çalışmalarda iş güvenliği",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "İş güvenliğinde Koruyucular (Makine ve Kişisel Koruyucular)",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 10,
        "topic": "Bakım ve onarım işlerinde iş güvenlik kuralları",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 11,
        "topic": "Çalışma hayatında etik kurallar",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 12,
        "topic": "Kaldırma ve taşıma araçlarında iş güvenliği",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 13,
        "topic": "Yangın, Patlama, ve doğal afetlerde güvenlik önlemleri",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 14,
        "topic": "İlkyardım ve ilkyardım kuralları",
        "resources": "İş Güvenliği, Ercüment DİZDAR, ABP Yayınevi, 2010."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22420",
    "code": "2004514",
    "name": "SAĞLIK SEKTÖRÜNDE GİRİŞİMCİLİK",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "PROF.DR. ŞEBNEM  YÜCEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Girişimciliğin Temelleri",
        "resources": "Girişimcilik (2005) Anadolu Üniversitesi Yayınları"
      },
      {
        "week": 2,
        "topic": "Stratejik yönetim ve Girişimci",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 3,
        "topic": "Farklı İşletme Çeşitleri",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 4,
        "topic": "Yönetim ve Pazarlama Planı",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 5,
        "topic": "E-Ticaret ve Girişimcilik",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 6,
        "topic": "Nakit Akışını Yönetmek",
        "resources": "Girişimcilik (2005) Anadolu Üniversitesi Yayınları"
      },
      {
        "week": 7,
        "topic": "Finansman Plan Hazırlamak",
        "resources": "Girişimcilik (2005) Anadolu Üniversitesi Yayınları"
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "İş Planı Oluşturmak",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 10,
        "topic": "Borç ve Öz Sermaye Kaynakları",
        "resources": "Girişimcilik (2005) Anadolu Üniversitesi Yayınları"
      },
      {
        "week": 11,
        "topic": "Yer Seçimi ve Planlama",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 12,
        "topic": "Küresel Bakış Açısı İle Girişimcilk",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 13,
        "topic": "Büyüyen Şirketin Yönetimi",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 14,
        "topic": "Büyüyen Şirketin  Planlaması",
        "resources": "Çetindamar, Dilek, (2002) Türkiyede Girişimcilik, TÜSİAD Yayınları(Yayın No:TÜSİAD-T/2002-12/340"
      },
      {
        "week": 15,
        "topic": "Dönemin Değerlendirilmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22421",
    "code": "2004515",
    "name": "HASTALIKLAR BİLGİSİ",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ MÜJDAT  YEŞİLDAL",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık ve hastalık kavramı; hastalıkların sınıflandırma ölçütleri, hastalığın doğal seyri ve etiyoloji, patogenez, prognoz kavramları",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 2,
        "topic": "Temel tıbbi terminoloji: kök, ön ek ve son ek yapısı; organ ve sistem adlandırmaları ile hastalık adlarının çözümlenmesi",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 3,
        "topic": "Hastalıkların uluslararası sınıflandırılması: ICD sisteminin yapısı, ICD-10 ve ICD-11, tıbbi kayıt ve kodlamadaki kullanımı",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 4,
        "topic": "Enflamasyon, enfeksiyon ve bağışıklık; bulaşıcı hastalıkların etkenleri, bulaşma yolları ve korunma yaklaşımları",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 5,
        "topic": "Dolaşım sistemi hastalıkları: hipertansiyon, koroner arter hastalığı ve kalp yetmezliği; bu hastalıkların sağlık hizmeti gereksinimleri",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 6,
        "topic": "Solunum sistemi hastalıkları: kronik obstrüktif akciğer hastalığı, astım, pnömoni ve tüberküloz; hizmet gereksinimleri",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 7,
        "topic": "Sindirim sistemi ve karaciğer hastalıkları; başlıca belirtileri, seyri ve gerektirdiği tanı-tedavi hizmetleri",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 8,
        "topic": "Ara Sınav (Yarıyıl Sınavı)",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 9,
        "topic": "Endokrin sistem ve metabolizma hastalıkları: diyabet ve tiroid hastalıkları; kronik hastalıklarda uzun dönemli izlem gereksinimi",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 10,
        "topic": "Üriner sistem hastalıkları ve kronik böbrek yetmezliği; diyaliz hizmetlerinin örgütlenmesi ve kaynak yükü",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 11,
        "topic": "Sinir sistemi hastalıkları: serebrovasküler hastalıklar, demans ve epilepsi; uzun süreli bakım gereksinimi",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 12,
        "topic": "Kas-iskelet sistemi hastalıkları ve travma; rehabilitasyon hizmetlerinin kapsamı ve iş gücü kaybı boyutu",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 13,
        "topic": "Kanserler: temel kavramlar, evreleme, tarama ve tedavi süreçleri ile bu süreçlerin sağlık hizmeti karşılıkları",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 14,
        "topic": "Tanı ve tedavi süreçlerinde kullanılan başlıca tıbbi işlem ve tetkikler; hasta yolculuğu ve sağlık hizmeti basamaklarının belirlenmesi",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      },
      {
        "week": 15,
        "topic": "Hastalık gruplarının sağlık kurumları üzerindeki kaynak yükü: yatış süresi, iş gücü ve maliyet boyutu; vaka analizi ve genel değerlendirme",
        "resources": "VanMeter, K. C. & Hubert, R. J. (2023). Gould&#39;s Pathophysiology for the Health Professions (7th ed.). St. Louis, MO: Elsevier. World Health Organization. International Classification of Diseases, 11th Revision (ICD-11) for Mortality and Morbidity Statistics. Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning. World Health Organization. World Health Statistics (current year). Geneva: WHO."
      }
    ]
  },
  {
    "id": "22423",
    "code": "2004517",
    "name": "KURUMSAL İLETİŞİM YÖNETİMİ",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "PROF.DR. ŞEBNEM  YÜCEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Giriş, Dersin tanıtımı ve işleniş hakkında bilgiler, Genel bilgiler",
        "resources": "Doç. Dr. Rüveyde Akyürek, Kurumsal İletişim Yönetimi, Anadolu Üniv. Yay., 2005. Bayram Kaya, Bütünleşik Kurumsal İletişim, Siyasal Kitabevi, 2003."
      },
      {
        "week": 2,
        "topic": "Kurumsal İletişim Nedir? Kurumsal İletişimin Önemi, Kurumsal İmaj nedir? Özellikleri nelerdir?",
        "resources": "Doç. Dr. Ayla Okay, Kurum Kimliği, MediaCat Kitapları, 2005."
      },
      {
        "week": 3,
        "topic": "Kurum kimliği nedir? Kurumsal İmaj / Kurum Kimliği ve Kurumsal İletişim",
        "resources": "Doç. Dr. Rüveyde Akyürek, Kurumsal İletişim Yönetimi, Anadolu Üniv. Yay., 2005. Bayram Kaya, Bütünleşik Kurumsal İletişim, Siyasal Kitabevi, 2003."
      },
      {
        "week": 4,
        "topic": "Kurumsal İletişimi destekleyen önemli bileşenler: Kurum felsefesi, kurumsal davranış, kurumsal dizayn",
        "resources": "Filiz Balta Peltekoğlu, Halkla İlişkiler Nedir?, Beta Basım Yayım, 2009."
      },
      {
        "week": 5,
        "topic": "Kurumsal İletişimin türleri, kullandığı araçlar, kurumsal iletişim planı",
        "resources": "Doç. Dr. Ayla Okay, Kurum Kimliği, MediaCat Kitapları, 2005."
      },
      {
        "week": 6,
        "topic": "Kurum içi iletişimin kurumsal iletişimin kurgulanması amacıyla kullanımı, doğal iletişim, kanalları ve yönetimi",
        "resources": "Filiz Balta Peltekoğlu, Halkla İlişkiler Nedir?, Beta Basım Yayım, 2009."
      },
      {
        "week": 7,
        "topic": "Halkla İlişkiler tanımı, önemi, özellikleri, faydaları, hedef gruplar",
        "resources": "Doç. Dr. Rüveyde Akyürek, Kurumsal İletişim Yönetimi, Anadolu Üniv. Yay., 2005. Bayram Kaya, Bütünleşik Kurumsal İletişim, Siyasal Kitabevi, 2003."
      },
      {
        "week": 8,
        "topic": "ara sınav haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sponsorluk tanımı, önemi, özellikleri, faydaları, türleri, sponsorluk sözleşmesi",
        "resources": "Doç. Dr. Rüveyde Akyürek, Kurumsal İletişim Yönetimi, Anadolu Üniv. Yay., 2005. Bayram Kaya, Bütünleşik Kurumsal İletişim, Siyasal Kitabevi, 2003."
      },
      {
        "week": 10,
        "topic": "Kurumsal reklamcılık tanımı, önemi, özellikleri, faydaları, temel kavramlar, uygulamalar",
        "resources": "Filiz Balta Peltekoğlu, Halkla İlişkiler Nedir?, Beta Basım Yayım, 2009."
      },
      {
        "week": 11,
        "topic": "Satış ve geliştirme hedef kitle seçimi, tutundurma planlaması, etkinlik organizasyonu",
        "resources": "Doç. Dr. Ayla Okay, Kurum Kimliği, MediaCat Kitapları, 2005."
      },
      {
        "week": 12,
        "topic": "Sergi ve Fuarlar tanımı, önemi, ön hazırlık, stant tasarım, planlama, ekip yönetimi, promosyon ve tanıtım",
        "resources": "Filiz Balta Peltekoğlu, Halkla İlişkiler Nedir?, Beta Basım Yayım, 2009."
      },
      {
        "week": 13,
        "topic": "Etkinlik Yönetimi tasarım, planlama, süreç yönetimi, hizmet alma, ekip oluşturma",
        "resources": "Doç. Dr. Rüveyde Akyürek, Kurumsal İletişim Yönetimi, Anadolu Üniv. Yay., 2005. Bayram Kaya, Bütünleşik Kurumsal İletişim, Siyasal Kitabevi, 2003."
      },
      {
        "week": 14,
        "topic": "Kriz Yönetimi krizin tanımı, kriz yönetim süreci, kriz iletişim planı Stratejik İletişim Planı Tanımı, Önemi ve Hazırlanması",
        "resources": "Filiz Balta Peltekoğlu, Halkla İlişkiler Nedir?, Beta Basım Yayım, 2009."
      },
      {
        "week": 15,
        "topic": "Dönemin Değerlendirilmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "41879",
    "code": "2004519",
    "name": "YAŞLANMA VE YAŞLILIK POLİTİKALARI",
    "semester": 5,
    "year": 3,
    "term": "Güz",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. EMEL  FİLİZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Demografik dönüşüm ve dünyada yaşlı nüfus",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 2,
        "topic": "Demografik dönüşüm ve Türkiyede yaşlı nüfus",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 3,
        "topic": "Geleceğe ilişkin nüfus projeksiyonlarının  ortaya konulması",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 4,
        "topic": "Yaşli Hakları ve Hukuku/Yasal Düzenlemeler",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 5,
        "topic": "Yaşlı işgücü, emeklilik sistemi",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 6,
        "topic": "Aktif yaşlanma politikaları",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 7,
        "topic": "Aktif yaşlanma politikaları",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": "."
      },
      {
        "week": 9,
        "topic": "Yaşlı Yoksulluğu",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 10,
        "topic": "Aile ve Sosyal Politikalar Bakanlığının Yaşlılara Yönelik Hizmetleri",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 11,
        "topic": "Aile ve Sosyal Politikalar Bakanlığının Yaşlılara Yönelik Hizmetleri",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 12,
        "topic": "Yerel Yönetimlerin Yaşlılara Yönelik Hizmetleri",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 13,
        "topic": "Yaşlı Nüfusa Yönelik sağlık hizmetleri ve Sağlık Harcama Politikaları",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 14,
        "topic": "Yaşlı Nüfusa Yönelik sağlık hizmetleri ve Sağlık Harcama Politikaları",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      },
      {
        "week": 15,
        "topic": "Kurum ziyareti",
        "resources": "1. GÜRSOY ÇUHADAR, S., & Lordoğlu, K. (2016). DEMOGRAFİK DÖNÜŞÜM SÜRECİNDE TÜRKİYE&#39;DE YAŞLANMA VE SORUNLAR. Journal of Faculty of Political Science, (54). 2. Aile ve Sosyal Politikalar Bakanlığı (ASPB) Engelli ve Yaşlı Hizmetleri Genel Müdürlüğü (2017), Aktif Yaşlanma Strateji Belgesi 2017-2020. Ankara. 3. Ceylan, H. (2015), Yaşlılık ve Refah Devleti. Açılım Kitap. İstanbul."
      }
    ]
  },
  {
    "id": "22412",
    "code": "2004601",
    "name": "SAĞLIK KURUMLARINDA MALİYET MUHASEBESİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. FATMA ÖZLEM  YILMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "İşletme ve maliyet muhasebesi ile ilgili kavramlar",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 2,
        "topic": "Satışların maliyeti ve gelir tablosu",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 3,
        "topic": "Maliyet hesaplarının işleyişi ve kayıt sistemi",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 4,
        "topic": "İlk madde ve malzeme giderleri",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 5,
        "topic": "İşçilik giderleri",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 6,
        "topic": "Genel üretim giderleri I",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 7,
        "topic": "Genel üretim giderleri II",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sipariş maliyet yöntemi I",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 10,
        "topic": "Sipariş maliyet yöntemi II",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 11,
        "topic": "Safha maliyet yöntemi I",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 12,
        "topic": "Standart maliyet yöntemi I",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 13,
        "topic": "Standart maliyet yöntemi II",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 14,
        "topic": "Sağlık kurumlarında maliyet muhasebesi uygulamaları I",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      },
      {
        "week": 15,
        "topic": "Sağlık kurumlarında maliyet muhasebesi uygulamaları II",
        "resources": "1. Kamil Büyükmirza, Maliyet ve Yönetim Muhasebesi,Gazi Kitabevi 2. Akdoğan, Nalan. Maliyet Muhasebesi Uygulamaları, Gazi Kitabevi, Ankara."
      }
    ]
  },
  {
    "id": "22406",
    "code": "2004604",
    "name": "SAĞLIK POLİTİKASI VE PLANLAMASI",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık politikası ve planlaması ile ilgili kavramlar ve modeller",
        "resources": "1.T.C. Sağlık Bakanlığı (1993), Ulusal Sağlık Politikası, T.C. Sağlık Bakanlığı Yayını, Ankara."
      },
      {
        "week": 2,
        "topic": "Sağlık politikalarını etkileyen faktörler",
        "resources": "2.Balcı, Asım (2005), Kamu Hizmetleri ve Yerinden Yönetim: Sağlık Hizmet Sunumunun Yeniden Yapılandırılması, Atlas Yayıncılık, İstanbul."
      },
      {
        "week": 3,
        "topic": "Sağlık politikası belirleme süreci",
        "resources": "3.Dunston, Roger, Alison Lee, David Boud, Pat Brodie ve Mary Chiarella (2009), Co-Production and Health System Reform From Re-Imagining To Re-Making?, Australian Journal of Public Administration, Vol. 68, Issue 1, s. 39-52."
      },
      {
        "week": 4,
        "topic": "Sağlık politikası uygulama süreci",
        "resources": "4.OECD (Ekonomik İşbirliği ve Kalkınma Örgütü), (2008), OECD Sağlık Sistemi İncelemeleri: Türkiye, OECD Yayınları."
      },
      {
        "week": 5,
        "topic": "Sağlık politikalarının değerlendirilmesi",
        "resources": "5.Peabody, John W. (1996), ?Economic Reform and Health Sector Policy: Lesson From Structural Adjustment Programs?, Social Science and Medicine, Vol. 43, No. 5, s. 823-835."
      },
      {
        "week": 6,
        "topic": "Sağlık hizmetlerinde devletin rolü",
        "resources": "6.Randall, Glen E. ve A. Paul Williams (2009), ?Health-care reform and the dimensions of professional autonomy?, Canadian Public Administration, Vol. 52, No. 1, s. 51-69."
      },
      {
        "week": 7,
        "topic": "Küreselleşme ve sağlık hizmetleri",
        "resources": "7.Ramesh, M. (2008), ?Autonomy and Control in Public Hospital Reforms in Singapore?, The American Review of Public Administration, Vol. 38, No. 1, s. 62-79."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": "Ramesh, M. (2008), ?Autonomy and Control in Public Hospital Reforms in Singapore, The American Review of Public Administration, Vol. 38, No. 1, s. 62-79."
      },
      {
        "week": 9,
        "topic": "Türk sağlık politikaları",
        "resources": "8.Roberts, Marc J., William Hsiao, Peter Berman ve Michael R. Reich (2004), Getting Health Reform Right: A Guide to Improving Performance and Equity, Oxford University Press, New York."
      },
      {
        "week": 10,
        "topic": "Türk sağlık sistemi",
        "resources": "9.Saltman, Rid B. ve Joseph Figueras (1998), Avrupa Sağlık Reformu: Mevcut Stratejilerin Analizi, Sağlık Bakanlığı Sağlık Projesi Genel Koordinatörlüğü Yayını, Ankara."
      },
      {
        "week": 11,
        "topic": "Türkiyede sağlık reformları",
        "resources": "10.Sargutan, A. Erdal (1996), Türk Sağlık Politikası: Değerlendirmeler İlkeler Öneriler, 3. Baskı, Sağlık Yayınları, Ankara."
      },
      {
        "week": 12,
        "topic": "Planlama yöntemleri",
        "resources": "10.Sargutan, A. Erdal (1996), Türk Sağlık Politikası: Değerlendirmeler İlkeler Öneriler, 3. Baskı, Sağlık Yayınları, Ankara."
      },
      {
        "week": 13,
        "topic": "Planlama süreci",
        "resources": "10.Sargutan, A. Erdal (1996), Türk Sağlık Politikası: Değerlendirmeler İlkeler Öneriler, 3. Baskı, Sağlık Yayınları, Ankara."
      },
      {
        "week": 14,
        "topic": "Sağlık hizmetlerinde kapasite planlama",
        "resources": "10.Sargutan, A. Erdal (1996), Türk Sağlık Politikası: Değerlendirmeler İlkeler Öneriler, 3. Baskı, Sağlık Yayınları, Ankara."
      },
      {
        "week": 15,
        "topic": "Final Sınavı",
        "resources": "Sargutan, A. Erdal (1996), Türk Sağlık Politikası: Değerlendirmeler İlkeler Öneriler, 3. Baskı, Sağlık Yayınları, Ankara."
      }
    ]
  },
  {
    "id": "22424",
    "code": "2004609",
    "name": "SAĞLIK İŞLETMELERİNDE PERFORMANS YÖNETİMİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Performans ve performans yönetimi kavramı",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 2,
        "topic": "Performans yönetimi süreci",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 3,
        "topic": "Performans ölçme ve değerlendirme",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 4,
        "topic": "Performansa dayalı ücret",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 5,
        "topic": "Bireysel ve kurumsal performans",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 6,
        "topic": "Performans yönetiminde karşılaşılan sorunlar",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 7,
        "topic": "Sağlık hizmetlerinde performans değerlendirme modelleri",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sağlık hizmetlerinde performansa dayalı ücret sistemleri",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 10,
        "topic": "Sağlık Bakanlığı performans yönetimi modeli",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 11,
        "topic": "Sağlık Bakanlığı performans yönetimi modeli",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 12,
        "topic": "Kamu sağlık işletmelerinde performans yönetimi uygulamaları",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 13,
        "topic": "Özel sağlık işletmelerinde performans yönetimi uygulamaları",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 14,
        "topic": "Performans yönetiminde güncel konular",
        "resources": "Hamza Ateş, Harun Kırılmaz ve Sabahattin Aydın (2007), Sağlık Sektöründe Performans Yönetimi: Türkiye Örneği, Asil Yayınları, Ankara."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirilmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22425",
    "code": "2004610",
    "name": "TIBBİ DÖKÜMANTASYON",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ HİLAL  AKMAN DÖMBEKCİ",
    "weeks": [
      {
        "week": 1,
        "topic": "Doküman Tanımı",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 2,
        "topic": "Tıbbi dökümantasyon tanımı",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 3,
        "topic": "Tıbbi dökümantasyon değeri ve önemi",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 4,
        "topic": "Sağlık kayıtlarından beklenen özellikler",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 5,
        "topic": "Bireylere hasta dosyası ve kişisel sağlık kaydının açılması",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 6,
        "topic": "Örnek hastalara dosyalama işlemleri I",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 7,
        "topic": "Örnek hastalara dosyalama işlemleri II",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 8,
        "topic": "ARA SINAV",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Tıbbi dökümantasyonun tarihçesi",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 10,
        "topic": "Tıbbi dökümanların kullanımı",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 11,
        "topic": "Tıbbi dökümanların analizi",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 12,
        "topic": "Tıbbi dökümanların türleri",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 13,
        "topic": "Tıbbi dökümanların dosyada sıralanması",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 14,
        "topic": "Dosyalama",
        "resources": "Sümbüloğlu K. Sümbüloğlu V. Medical documentation"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22413",
    "code": "2004611",
    "name": "STAJ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "12",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ HİLAL  AKMAN DÖMBEKCİ",
    "weeks": [
      {
        "week": 1,
        "topic": "Günlük Rutinleri Öğrenmeye Başlamak, işleyişe yardımcı Olmak",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 2,
        "topic": "Günlük Rutinleri Öğrenmeye Başlamak, işleyişe yardımcı Olmak",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 3,
        "topic": "Hasta Kabul",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 4,
        "topic": "Evrak Kayıt",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 5,
        "topic": "Acil Hizmetler",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 6,
        "topic": "Ameliyathane",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 7,
        "topic": "Genel Cerrahi ABD.",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 8,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 9,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları Yönetmeliği"
      },
      {
        "week": 10,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları Yönetmeliği"
      },
      {
        "week": 11,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları Yönetmeliği"
      },
      {
        "week": 12,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları Yönetmeliği"
      },
      {
        "week": 13,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları Yönetmeliği"
      },
      {
        "week": 14,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları Yönetmeliği"
      },
      {
        "week": 15,
        "topic": "Uygun Tıbbi Birimler",
        "resources": "Yataklı Tedavi Kurumları Yönetmeliği"
      }
    ]
  },
  {
    "id": "22432",
    "code": "2004612",
    "name": "SAĞLIK HUKUKU",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık Hukukuna Giriş",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 2,
        "topic": "Sağlık Teşkilatı",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 3,
        "topic": "Hasta İle Hekim Arasında ilişkiler ve işbirliği",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 4,
        "topic": "Organ ve doku nakli, klinik araştırma",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 5,
        "topic": "Tıbbi Müdahalenin Hukuka Uygunluğunun Şartları",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 6,
        "topic": "Tıbbi Müdahalenin Hukuka Uygunluğunun Şartları",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 7,
        "topic": "Hekimin yükümlülükleri",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Hastanın Yükümlülükleri",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 10,
        "topic": "Hatalı Tıbbi Uygulama ve Sorumluluğu",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 11,
        "topic": "Tıbbi Müdahalenin Ceza Hukuku Bakımından Değerlendirilmesi",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 12,
        "topic": "Hekimler Tarafından İşlenebilecek Suç ve Kabahatler",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 13,
        "topic": "Hekimler Tarafından İşlenebilecek Suç ve Kabahatler",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 14,
        "topic": "Sağlık Hukukunda Kamu Görevlilerinin Sorumluluğu",
        "resources": "1.Ankara Barosu II. Sağlık Hukuku Kurultayı, 7-8 Kasım 2008, Ankara. 2.SARP, Nilgün-Cahit DOĞAN (Ed Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi III. Sağlık Hukuku Sempozyumu 25-26 Nisan 2011. 3.SARP, Nilgün (Ed)Kuzey Kıbrıs Türk Cumhuriyeti Lefke Avrupa Üniversitesi II. Sağlık Hukuku Sempozyumu 17-18 Mayıs 2010. 4.Sağlık Hukuku Digestası,  5.Ankara Barosu Yayınları, tüm sayılar."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22431",
    "code": "2004613",
    "name": "SOSYAL POLİTİKA",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Sosyal Politika Kavramı, Tanımları ve Unsurları",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 2,
        "topic": "Sosyal Politikanın Amaçları",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 3,
        "topic": "Sosyal Sorunlar, Sosyal Gelişme ve Sosyo-Ekonomik Bakımdan Güvencesiz Gruplar",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 4,
        "topic": "Sanayi Devrimi Sırasında Çalışma Koşulları ve Nedenleri",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 5,
        "topic": "Sanayi Devrimi Sırasında Çalışma Koşullarının Ekonomik, Sosyal, Siyasal ve Kültürel Sonuçları",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 6,
        "topic": "Sosyal Politikayı Ortaya Çıkaran Nedenler ve İlk Sosyal Politika Önlemleri",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 7,
        "topic": "Kamu Müdahalesi, Yasal Düzenlemeler, Kurumsal Düzenlemeler, Sosyal Planlama",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Çalışma İlişkisinin Düzenlenmesi ve Denetlenmesi",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 10,
        "topic": "Ücret, Gelir ve Fiyat Politikaları",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 11,
        "topic": "Maliye Politikaları",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 12,
        "topic": "Eğitim, Sağlık ve Konut Politikaları",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 13,
        "topic": "Sosyal Güvenlik Sistemi Tanımı, Kapsamı, Amaçları ve İşlevleri",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 14,
        "topic": "Sendikalar ve Kooperatifler",
        "resources": "1.Sami GÜVEN, Sosyal Politikanın Temelleri, Ezgi Kitabevi, Bursa, 2001. 2.Cahit TALAS, Toplumsal Politikaya Giriş, S Yayınları, Ankara, 1981. 3.Ömer Zühtü ALTAN, Sosyal Politika Dersleri, Anadolu Üniversitesi Yayınları, Eskişehir, 2004."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22434",
    "code": "2004614",
    "name": "HASTA İLİŞKİLERİ YÖNETİMİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "PROF.DR. YUNUS EMRE  ÖZTÜRK",
    "weeks": [
      {
        "week": 1,
        "topic": "Hasta İlişkileri Kavramı ve Özellikleri",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 2,
        "topic": "Hasta Tatmini ve Hasta Sadakati Yaratma",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 3,
        "topic": "Hasta İlişkileri ve İlişkisel Pazarlama",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 4,
        "topic": "Satış ve Pazarlamada Toplam Kalite Yönetimi",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 5,
        "topic": "Hasta İçin Değer Yaratma",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 6,
        "topic": "Hasta Yaşam Boyu Değeri",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 7,
        "topic": "Hasta Hizmet Kalitesi-Hasta Hizmet Sistemi",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 8,
        "topic": "ARA SINAV",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Hasta Tutma Modeli, Hasta Tutma Programlarının Geliştirilmesi",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 10,
        "topic": "Hasta Şikayetlerini Ele Alma",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 11,
        "topic": "Hasta İlişkilerinin Ölçülmesi",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 12,
        "topic": "Hasta Odaklı Kültürün Yayılması",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 13,
        "topic": "Kültür Değişimindeki Engeller",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 14,
        "topic": "Hasta Odaklı Değişim Yönetimi",
        "resources": "Odabaşı Y. Satışta ve Pazarlamada Müşteri İlişkileri Yönetimi, Sistem Yayıncılık, İstanbul, 2010"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22433",
    "code": "2004615",
    "name": "SAĞLIK İŞLETMELERİNDE LOJİSTİK YÖNETİMİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Genel giriş ve yarıyıl boyunca işlenecek konuların gözden geçirilmesi",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 2,
        "topic": "Sağlık işletmeleri lojistik yönetiminin tanımı, kapsamı ve ilintili kavramlar, sağlık hizmetlerinde malzeme döngüsü unsurları, lojistik yöneticisinin sağlık işletmesinde üstlendiği rol, lojistik hizmetlerin organizasyonu ve örgütlenme ilkeleri",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 3,
        "topic": "Sağlık ve hastalık kavramı, sağlık hizmetlerinde üretim faktörleri, sağlık hizmetlerinin genel ekonomik sistemle ilişkisi, sağlık hizmetleri arzında değer üretimi",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 4,
        "topic": "Sağlık hizmetlerinde girdi ve çıktı kavramı, sağlık hizmetlerinde kar amaçlı kuruluş ile kar amacı gütmeyen kuruluş arasındaki temel farklılıklar, sağlık hizmetlerinde çıktı ve hedeflenen sonuç ayrımı, verimlilik ve etkililik tanımları, performans kavramı",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 5,
        "topic": "Sağlık organizasyonunun kurumsal çevresi ve çevre unsurlarının tanımlanması, sağlık hizmetleri organizasyonunun paydaşları ve tedarikçilerin rolü, tedarikçi türleri, değer zinciri kavramı ve sağlık sektörü uygulamas",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 6,
        "topic": "Sağlık hizmetlerinde rekabet, sağlık hizmetleri piyasasında rekabeti belirleyen güçler, piyasa örgüt modeli, yatay ve dikey bütünleşmeler ve sağlık hizmetleri uygulaması",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 7,
        "topic": "Sağlık hizmetlerinde lojistik yönetim süreci, lojistik yönetiminin amaçları ve nihai hedefleri, lojistik faaliyetlerinin genel sağlık kurumu misyonu, vizyonu ve değerler açıklaması içinde üstlendiği rol, sağlık hizmetlerinde satın alma ahlak ilkeleri",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sağlık kurumlarında faaliyet planlaması ve ihtiyaç tespiti, piyasa araştırması, fiyat teklifi toplama, satın alma kararı ve satın alma, satın alma sonrası süreçler, sermaye malların satın alması",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 10,
        "topic": "Sağlık kuruluşlarında mal teslimi, satın alma denetimi, depolama, depo yeri seçimi ve kadrolama, sağlık kuruluşlarında depolama yöntemleri, koridor sistemleri, depoya mal girişi ve çıkış",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 11,
        "topic": "Stok kavramı ve stok yönetimi, ABC stok yönetim sistemi, stok sayımı ve fark düzeltme, yerine koyma süresi, ihtiyat stoku, ekonomik sipariş noktası hesaplaması, stok devir hızı",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 12,
        "topic": "Sağlık hizmetlerinde stok tahmini hesaplamaları, stoktan karşılama oranı, stoksuz kalmanın maliyeti, çift kova sistemi, PAR sistemi, stok muhasebesi, FIFO, LIFO ve ağırlıklı ortalama ile stok değeri hesaplaması",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 13,
        "topic": "Sağlık hizmetlerinde malzemelerin kullanıma hazırlanması, steril süreçler ve ameliyat paketleri, dağıtım, iç ve dış lojistik unsurları",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 14,
        "topic": "Lojistik yönetimi bilgi sistemi ve bileşenleri, bütünleşik kurumsal kaynak planlama, barkod uygulaması, stoksuz çalışma (JIT) kavramı ve sağlık hizmetleri uygulaması",
        "resources": "Orhan, O. Z. (2003). Dünyada ve Türkiyede Lojistik Sektörünün Gelişimi, İstanbul Ticaret Odası, Yayın No: 2003-09, Baskı Mega Ajans, İstanbul."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22435",
    "code": "2004616",
    "name": "SAĞLIK İŞLETMELERİNDE DİYETETİK",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "ÖĞR.GÖR. GÖKHAN  ESMER",
    "weeks": [
      {
        "week": 1,
        "topic": "Geçmişten günümüze, beslenme ve diyetetik biliminin gelişimi.",
        "resources": "Ders Notu"
      },
      {
        "week": 2,
        "topic": "Sağlık İşletmelerinde diyetetik hizmetlerinde; görev, yetki ve sorumluluklar.",
        "resources": "Ders Notu"
      },
      {
        "week": 3,
        "topic": "Sağlık işletmeleri mutfak alanlarında bulunması gerekli ünite ve birimler.",
        "resources": "Ders Notu"
      },
      {
        "week": 4,
        "topic": "Mutfak hizmetlerinde yönetimsel faaliyetler.",
        "resources": "Ders Notu"
      },
      {
        "week": 5,
        "topic": "Menü planlamanın önemi ve menü planlama ilkeleri.",
        "resources": "Ders Notu"
      },
      {
        "week": 6,
        "topic": "Satınalma ve mal muayene kabül işlemleri.",
        "resources": "Ders Notu"
      },
      {
        "week": 7,
        "topic": "Depolar, özellikleri ve depolama ilkeleri.",
        "resources": "Ders Notu"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Beslenme ve sağlıkla ilişkisi, yaşam için gerekli besin öğeleri ve besin grupları.",
        "resources": "Ders Notu"
      },
      {
        "week": 10,
        "topic": "Karbonhidratlar tanımı ve sınflandırılması, metabolizması, emilimi, sindirimi.",
        "resources": "Ders Notu"
      },
      {
        "week": 11,
        "topic": "Yağların tanımı, sınıflandırılması, yapısı ve metabolizması",
        "resources": "Ders Notu"
      },
      {
        "week": 12,
        "topic": "Proteinler tanımı, sınflandırılması, yapısı ve metabolizması.",
        "resources": "Ders Notu"
      },
      {
        "week": 13,
        "topic": "Vitaminler tanımı, sınıflandırılmaları ve görevleri.",
        "resources": "Ders Notu"
      },
      {
        "week": 14,
        "topic": "Mineraller tanımı, sınıflandırılmaları ve görevleri.",
        "resources": "Ders Notu"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22374",
    "code": "2004617",
    "name": "SOSYAL SORUMLULUK PROJELERİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. EMEL  FİLİZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Dersin Tanıtımı,Sosyal Sorumluluk ve Genel İlkeler",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 2,
        "topic": "Kurumsal Sosyal Sorumluluk Projeleri",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 3,
        "topic": "Bireysel Sosyal Sorumluluk Projeleri",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 4,
        "topic": "Projenin Tasarlanması",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 5,
        "topic": "Projenin Geliştirilmesi ve Yürütülmesi",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 6,
        "topic": "Projenin Değerlendirilmesi ve Raporlanması",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 7,
        "topic": "Sosyal Sorumluluk Proje Örnekleri",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sosyal Sorumluluk Proje Örnekleri",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 10,
        "topic": "Panel, Konferans, Bilgilendirme Seminerleri Düzenleme",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 11,
        "topic": "Proje Uygulama I",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 12,
        "topic": "Proje Uygulama II",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 13,
        "topic": "Proje Uygulama III",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 14,
        "topic": "Proje Sunumu ve Teslimi I",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      },
      {
        "week": 15,
        "topic": "Proje Sunumu ve Teslimi II",
        "resources": "1. Kuzucu, K., Kamer, S. T., Alabaş, R., Çitil, M., Dilek, D., & Polat, Ü. (2009). Topluma hizmet uygulamalari. Ankara: Pegem.2. Peltekoğlu, F. B., & Tozlu, E. (2017). HALKLA İLİŞKİLER VE GÖNÜLLÜLÜK EKSENİNDE TÜRKİYE’DE KURUMSAL SOSYAL SORUMLULUK PROJELERİ VE BİN YIL KALKINMA HEDEFLERİ. Selçuk İletişim, 10(1), 5-3"
      }
    ]
  },
  {
    "id": "22376",
    "code": "2004618",
    "name": "SAĞLIK TEKNOLOJİLERİNİN DEĞERLENDİRİLMESİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. FATMA ÖZLEM  YILMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık teknolojilerinin değerlendirilmesi",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 2,
        "topic": "Sağlık teknolojilerinin değerlendirilmesinin tarihçesi",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 3,
        "topic": "Sağlık teknolojilerinin değerlendirilmesine  neden ihtiyaç vardır?",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 4,
        "topic": "Sağlık teknolojilerinin değerlendirilme düzeyleri",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 5,
        "topic": "Sağlık teknolojilerinin değerlendirilmesinde kullanılan kavramlar/terimler",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 6,
        "topic": "Sağlık teknolojilerinin değerlendirilmesinde kullanılan ekonomik değerlendirme teknikleri",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 7,
        "topic": "Sağlık idarecileri için sağlık teknolojilerinin değerlendirilmesi",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "İlaç ve sağlık teknolojilerinin değerlendirilmesi",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 10,
        "topic": "Tıbbı cihaz ve sağlık teknolojilerinin değerlendirilmesi",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 11,
        "topic": "Cerrahi ve sağlık teknolojilerinin değerlendirilmesi",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 12,
        "topic": "Radyoloji ve sağlık teknolojilerinin değerlendirilmesi",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 13,
        "topic": "Uygulama örnekleri",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 14,
        "topic": "Uygulama örnekleri",
        "resources": "1. Kahveci R, Dilmaç E, 2013. Hastane Tabanlı Sağlık Teknolojileri Değerlendirme Rehberi, Ankara, ANHTA 2. Sampietro-Colom L,  Martin J, 2016. Hospital-Based Health Technology Assessment- The Next Frontier for Health Technology Assessment, Adis 3. Kahveci R, Koç E, Yılmaz F, 2022. Sağlık İdarecileri İçin Sağlık Teknolojisi Değerlendirme, Ankara, Nobel Yayıncılık"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22377",
    "code": "2004619",
    "name": "KRİZ STRES YÖNETİMİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. ŞERİFE  GÜZEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Krizin Tanımı, Türleri, Özellikleri ve Analizi",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 2,
        "topic": "Krizin Özellikleri ve Örgütsel Kriz Kaynakları",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 3,
        "topic": "Kriz Süreci, Krizin Örgütsel ve Yönetsel Düzeydeki Sonuçları",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 4,
        "topic": "Kriz Öncesinin Yönetimi",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 5,
        "topic": "Kriz Döneminin Yönetimi ve Aşamaları",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 6,
        "topic": "Krizde İnsan Kaynaklarının Yönetimi",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 7,
        "topic": "Kriz Sonrasının Yönetimi",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Kriz Döneminde Halkla İlişkiler ve İletişim",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 10,
        "topic": "Stres Kavramı, Stres ve Kriz İlişkisi, Kriz Ortamında Stres Yönetimi",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 11,
        "topic": "Strese Neden Olan Faktörler",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 12,
        "topic": "Örgütsel Stres",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 13,
        "topic": "Stresin Birey Üzerindeki Etkisi ve Sonuçları",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 14,
        "topic": "Stresle Başa Çıkma ve Yöntemleri",
        "resources": "Tutar, Hasan, Kriz ve Stres Yönetimi, Seçkin Yayıncılık"
      },
      {
        "week": 15,
        "topic": "final sınavı",
        "resources": ""
      }
    ]
  },
  {
    "id": "22378",
    "code": "2004620",
    "name": "SAĞLIK HİZMETLERİNDE ELEŞTİREL DÜŞÜNCE",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "PROF.DR. YUNUS EMRE  ÖZTÜRK",
    "weeks": [
      {
        "week": 1,
        "topic": "Tanışma ve Ders Tanıtımının Yapılması",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 2,
        "topic": "Eleştirel Düşünme ve İlgili Temel Kavramlar",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 3,
        "topic": "Eleştirel Düşünme Etkinlikleri Değer Sıralaması",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 4,
        "topic": "Eleştirel Düşünme Etkinlikleri Münazara",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 5,
        "topic": "Eleştirel Düşünme Etkinlikleri Eleştirel Makale Okuma",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 6,
        "topic": "Eleştirel Düşünme Süreci",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 7,
        "topic": "Düşünce Elemanları İçeren Sorular",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 9,
        "topic": "Eleştirel ve Yaratıcı Düşünme",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 10,
        "topic": "Eleştirel Düşünme Etkinlikleri Eleştirel ve Yaratıcı Sorun Çözme Çalışması",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 11,
        "topic": "Eleştirel Düşünme Etkinlikleri Etkili Bilgi Okur Yazarlığı",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 12,
        "topic": "Eleştirel Düşünme Etkinlikleri",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 13,
        "topic": "Eleştirel düşünme aktiviteleri hemşirelik problemleri ve beyin fırtınası yöntemiyle problem çözme",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      },
      {
        "week": 14,
        "topic": "Değerlendirme",
        "resources": "Semih ŞAHİNEL, Eleştirel Düşünme, 2. Baskı, Pegem A Yayıncılık, Ankara, E Kitap. Birsel AYBEK, Eleştirel Düşünme Rehberi, 1. Baskı, Anı Yayıncılık, Ankara, 2012. Belgin ÖZERUZ YILDIRIM, Ed. Süheyla ALTUĞ ÖZSOY, Hemşirelikte Eleştirel Düşünme, Tuna Matbaacılık, Aydın, 2010. Doğan CÜCELOĞLU, İyi Düşün Doğru Karar Ver, 50. Basım, Remzi Kitabevi, İstanbul, 2008. Yardımcı Kaynaklar: Başkent Üniversitesi İktisadi ve İdari Bilimler Fakültesi Eleştirel Yaratıcı Düşünme ve Davranış Araştırmaları Laboratuvarı ET: 15.02.2012, http://www.elyadal.org/index.htm Faruk BERBER ve Ark., Düşünme ve Eleştirel Düşünme. ET:15.02.2012, http://www.sevketkeser.net/docs/alldoc/dusunmeveelestireldusunme.pdf Birsel AYBEK, Eleştirel Düşünmenin Öğretiminde Öğretmenin Rolü. ET:15.02.2012, http://www.universite-toplum.org/pdf/pdf_UT_322.pdf Meral GÜVEN, Dilruba KÜRÜM, Ogrenme_Stilleri_Eleştirel Düşünme Arasındaki İlişkiye Genel Bir Bakış, Sosyal Bilimler Dergisi, 1, 2006."
      }
    ]
  },
  {
    "id": "41900",
    "code": "2004621",
    "name": "KARŞILAŞTIRMALI SAĞLIK SİSTEMLERİ",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ MÜJDAT  YEŞİLDAL",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık sistemi kavramı: tanımı, bir sağlık sisteminin temel işlevleri (yönetişim, finansman, kaynak üretimi, hizmet sunumu) ve bileşenleri",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 2,
        "topic": "Sağlık sistemlerinin sınıflandırılması: tipolojiler, refah devleti rejimleriyle ilişkisi ve sistemlerin karşılaştırılmasında kullanılan ölçütler",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 3,
        "topic": "Sağlık sistemlerinin finansmanı I: vergi temelli ve sosyal sigorta modelleri; kaynak toplama ve risk havuzlama yöntemleri",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 4,
        "topic": "Sağlık sistemlerinin finansmanı II: özel sigorta ve cepten ödeme; finansal koruma, katastrofik sağlık harcamaları ve yoksullaştırıcı etki",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 5,
        "topic": "Sağlık hizmeti sunum biçimleri ve hizmet satın alma yöntemleri; sağlayıcı ödeme yöntemlerinin hizmet sunumu üzerindeki etkileri",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 6,
        "topic": "Beveridge modeli: İngiltere ve İskandinav ülkelerinin sağlık sistemleri; yapı, finansman ve erişim açısından çözümlenmesi",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 7,
        "topic": "Bismarck modeli: Almanya ve Fransa sağlık sistemleri; hastalık kasaları, sigortacılık yapısı ve hizmet sunumu",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 8,
        "topic": "Ara Sınav (Yarıyıl Sınavı)",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 9,
        "topic": "Piyasa temelli sistem örneği olarak Amerika Birleşik Devletleri ve düzenlenmiş rekabet örneği olarak Hollanda sağlık sistemi",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 10,
        "topic": "Merkezi planlamaya dayalı sistemler ve düşük maliyetli sistem örnekleri; sistemlerin üstünlük ve sınırlılıklarının karşılaştırılması",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 11,
        "topic": "Asya-Pasifik örnekleri: Japonya, Güney Kore ve Singapur sağlık sistemlerinin finansman ve sunum yapısı",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 12,
        "topic": "Gelişmekte olan ülkelerin sağlık sistemleri ve evrensel sağlık kapsayıcılığına yönelik reform deneyimleri",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 13,
        "topic": "Türkiye sağlık sistemi: tarihsel gelişimi, Sağlıkta Dönüşüm Programı ve sistemin güncel yapısı",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 14,
        "topic": "Sağlık sistemlerinin performansının değerlendirilmesi: erişim, eşitlik, kalite, verimlilik ve finansal koruma ölçütleri ile gösterge kaynakları",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      },
      {
        "week": 15,
        "topic": "Karşılaştırmalı değerlendirme ve politika çıkarımları: ülke deneyimlerinden Türkiye sağlık sistemine yönelik politika önerilerinin geliştirilmesi, genel değerlendirme",
        "resources": "European Observatory on Health Systems and Policies. Health Systems in Transition (HiT) Country Reviews. Copenhagen: WHO Regional Office for Europe. https://eurohealthobservatory.who.int European Observatory on Health Systems and Policies (2022). Health Systems in Action: Türkiye. Copenhagen: WHO Regional Office for Europe. OECD. Health at a Glance (current edition). Paris: OECD Publishing. World Health Organization. World Health Statistics (current year). Geneva: WHO. Kruger, J., Moralez, A. & Siqueira, C. E. Schneider&#39;s Introduction to Public Health (7th ed.). Burlington, MA: Jones & Bartlett Learning."
      }
    ]
  },
  {
    "id": "41881",
    "code": "2004622",
    "name": "Sağlık Sigortacılığı",
    "semester": 6,
    "year": 3,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. MEHMET  YORULMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Dünyada ve ülkemizde sigortacılık",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 2,
        "topic": "Sigortacılığın gelişimi",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 3,
        "topic": "Sigortacılığın gelişimi",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 4,
        "topic": "Hukuki yapı genel ve özel şartlar",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 5,
        "topic": "İş kabul ilkeleri",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 6,
        "topic": "Fiyatlandırma ve aktuarya",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 7,
        "topic": "Fiyatlandırma ve aktuarya",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 8,
        "topic": "ara sınav",
        "resources": "mid"
      },
      {
        "week": 9,
        "topic": "Ürün çeşitleri sürelerine göre ,teminatlarına göre",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 10,
        "topic": "Yenileme esasları(Tecdit) hasarsızlık uygulamaları",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 11,
        "topic": "Aracı kuruluşların rolü ve işlevi (TPA)",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 12,
        "topic": "Reassürans teknikleri",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 13,
        "topic": "Tazminat ödemeleri(Hasar)",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 14,
        "topic": "Sigortacılığın Dünyadaki uygulamaları",
        "resources": "&#160;www.hazine.gov.tr www.tsrb.org.tr"
      },
      {
        "week": 15,
        "topic": "final sınav",
        "resources": "final"
      }
    ]
  },
  {
    "id": "22411",
    "code": "2004705",
    "name": "SAĞLIK EKONOMİSİ",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. EMEL  FİLİZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Sağlık ekonomisi kavramı ve Sağlık ekonomisinin teorik çerçevesine genel bir bakış",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 2,
        "topic": "Sağlık Ekonomisinde Hizmet üretim Olgusu ve Serbest Piyasa Yaklaşımı",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 3,
        "topic": "Sağlık Ekonomisinde Hizmet üretim Olgusu ve Serbest Piyasa Yaklaşımına karşı görüşler",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 4,
        "topic": "Sağlık Ekonomisinde Tüketim olgusu ve Ürün esnekliği ve Piyasa modeller ve eğilimler",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 5,
        "topic": "Sağlık Ekonomisinin Bileşenleri Hastane, İlaç ve Teknolojik Yenilikler",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 6,
        "topic": "İlaç Üretimi ve Pazarlanmasında kullanılan Teknikler ve Uluslararasılaşan piyasa Yapısı",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 7,
        "topic": "Küresel Sağlık Politikaları ve Birey ve bireyin Yaşam Kalitesi",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Küresel Sağlık Politikaları ve Uluslararası Kuruluşlar",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 10,
        "topic": "Dünyada Sağlık Ekonomisi Genel Trendleri",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 11,
        "topic": "Dünyada Sağlık Ekonomisinin Kurumları ve Yapısal Dönüşümler",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 12,
        "topic": "Avrupa Sağlık Dönüşümü ve Anglo-Sakson Sağlık Yaklaşımı, Sağlık Harcamaları ve Finansmanındaki Dönüşüm Süreçleri",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 13,
        "topic": "Türkiyede Sağlık Ekonomisi Genel Trendleri",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 14,
        "topic": "Türkiyede Sağlık ekonomisinin Kurumları ve Yapısal Dönüşümler",
        "resources": "1. M.Sönmez, Paran Kadar Sağlık, B.Şenathar Sağlık ekonomisi"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22426",
    "code": "2004709",
    "name": "SAĞLIK İŞLETMELERİNDE MALİ ANALİZ",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. FATMA ÖZLEM  YILMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Mali Analiz Kavramı",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 2,
        "topic": "Mali tablo türleri",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 3,
        "topic": "Bilanço ve gelir tablosu",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 4,
        "topic": "Analiz Teknikleri",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 5,
        "topic": "Yatay Analiz",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 6,
        "topic": "Dikey Analiz",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 7,
        "topic": "Oran Analizi",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 8,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Fon akım tablosu ve net çalışma sermayesi değişim tablosu",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 10,
        "topic": "Nakit akım tablosu",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 11,
        "topic": "Özkaynaklar değişim tablosu",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 12,
        "topic": "K&#226;r dağıtım tablosu",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 13,
        "topic": "Analiz sonuçlarının değerlendirilmesi ve analiz raporu",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 14,
        "topic": "Sağlık kurumlarında mali analiz uygulamaları I",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      },
      {
        "week": 15,
        "topic": "Sağlık kurumlarında mali analiz uygulamaları II",
        "resources": "1.Akgüç, Öztin (2017).Mali Tablolar Analizi, Avcıol Basın Yayın, İstanbul. 2. Çabuk, Adem ve İbrahim Lazol (2018). Mali Tablolar Analizi, Ekin Kitabevi, Bursa."
      }
    ]
  },
  {
    "id": "22427",
    "code": "2004710",
    "name": "SAĞLIK İŞLETMELERİNDE KANTİTATİF TEKNİKLER",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "5",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. ŞERİFE  GÜZEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Kantitatif karar verme tekniklerine giriş",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 2,
        "topic": "Tahmin yöntemleri",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 3,
        "topic": "Sağlık kurumlarında yönetsel karar verme",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 4,
        "topic": "Belirsizlik altında karar verme",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 5,
        "topic": "Risk altında karar verme",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 6,
        "topic": "Karar ağacı yaklaşımı",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 7,
        "topic": "Kuruluş yeri seçme kararları",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 8,
        "topic": "Ara Sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Sağlık kurumlarında bölüm yerleşim düzenlemesi",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 10,
        "topic": "Değişim mühendisliği",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 11,
        "topic": "Kadrolama",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 12,
        "topic": "İş Planlaması",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 13,
        "topic": "Verimlilik Yönetimi",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 14,
        "topic": "Sağlık hizmetlerinde verimliliğin yükseltilmesi",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      },
      {
        "week": 15,
        "topic": "Genel Değerlendirme",
        "resources": "Sağlık Kurumları Yönetiminde Sayısal Yöntemler, Prof. Dr. A. Yaşar Özcan"
      }
    ]
  },
  {
    "id": "22428",
    "code": "2004711",
    "name": "İLK YARDIM VE ACİL HİZMETLERİ YÖNETİMİ",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "6",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ HİLAL  AKMAN DÖMBEKCİ",
    "weeks": [
      {
        "week": 1,
        "topic": "Genel ilkyardım bilgileri",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 2,
        "topic": "Hasta-yaralı ve olay yeri değerlendirilmesinde kullanılan bulgu ve belirtilerin öğretilmesi",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 3,
        "topic": "Temel yaşam desteği",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 4,
        "topic": "Kanamalarda ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 5,
        "topic": "Yanık, donma ve sıcak çarpmasında ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 6,
        "topic": "Bilinç bozukluklarında ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 7,
        "topic": "Yaralanmalarda ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 8,
        "topic": "ARA SINAV",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Hayvan ısırıklarında ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 10,
        "topic": "Kulak ve buruna yabancı cisim kaçmasında ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 11,
        "topic": "Boğulmalarda ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 12,
        "topic": "Kırık, çıkık ve burkulmalarda ilkyardım",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 13,
        "topic": "Zehirlenmeler",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 14,
        "topic": "Hasta/yaralı taşıma teknikleri",
        "resources": "1)İlk Yardım Uygulayıcı Kitabı, Prof. Dr.Aytuğ Atıcı, Doç. Dr.Şebnem Atıcı, Doç. Dr.Ertan Mert, Nobel Kitabevi, Adana, 2010"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22429",
    "code": "2004712",
    "name": "KAMU MALİYESİ",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "4",
    "type": "Zorunlu",
    "instructor": "PROF.DR. HANDAN  ERTAŞ",
    "weeks": [
      {
        "week": 1,
        "topic": "Kamu Maliyesinin Konusu ve Diğer Bilim Dalları İçindeki Yeri",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 2,
        "topic": "Kamu Ekonomik Faaliyetleri",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 3,
        "topic": "Kamu Harcamaları",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 4,
        "topic": "Kamu Gelirleri",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 5,
        "topic": "Vergilerin Tasnifi",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 6,
        "topic": "Vergileme İlkeleri",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 7,
        "topic": "Vergi Yükü Ve Vergi Yansıması",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 8,
        "topic": "Ara Sınav Haftası",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Devlet Borçları",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 10,
        "topic": "Yerel Yönetimler Maliyesi",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 11,
        "topic": "Devlet Bütçesi",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 12,
        "topic": "Türk Bütçe Sistemi",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 13,
        "topic": "Maliye Politikası",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 14,
        "topic": "Uluslararası Maliye",
        "resources": "Ekrem KARAYILMAZLAR,  Kamu Maliyesi, Lisans Yayıncılık, İstanbul, 2011."
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  },
  {
    "id": "22430",
    "code": "2004713",
    "name": "DUYGUSAL ZEKA VE LİDERLİK",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "4",
    "type": "Zorunlu",
    "instructor": "PROF.DR. ŞEBNEM  YÜCEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Liderlikle ilgili kavramlar (Duygu, Zek&#226;, Duygusal Zek&#226;, Beynin Yapısı, vb)",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 2,
        "topic": "Liderlik, Yöneticilik, Liderlikte Cinsiyet ve Kültürel Faktörler",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 3,
        "topic": "Liderlikte Güç Kavramı ve Kapsamı",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 4,
        "topic": "Liderliğe Özellikler Yaklaşımı",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 5,
        "topic": "Liderliğe Davranışsal Yaklaşım",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 6,
        "topic": "Liderliğe Durumsallık Yaklaşımları",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 7,
        "topic": "Modern Liderlik Kuramları: Vizyoner, Karizmatik, Etkileşimci, Dönüşümcü Yaklaşımlar",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 8,
        "topic": "ara sınav",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 9,
        "topic": "Alternatif Liderlik Yaklaşımları, Dünyadaki Liderlerin kitaplarını Liderlik Kuramları Açısından İnceleme",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 10,
        "topic": "Alternatif Liderlik Yaklaşımları, Dünyadaki Liderlerin kitaplarını Liderlik Kuramları Açısından İnceleme",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 11,
        "topic": "Liderlik kuramlarının Dünya liderleri üzerinde incelenmesi çalışması",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 12,
        "topic": "Liderlik kuramlarının Dünya liderleri üzerinde incelenmesi çalışması",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 13,
        "topic": "Liderlik kuramlarının Dünya liderleri üzerinde incelenmesi çalışması",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 14,
        "topic": "Liderlik kuramlarının Dünya liderleri üzerinde incelenmesi çalışması",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      },
      {
        "week": 15,
        "topic": "final",
        "resources": "Aslan, Ş., (2013), Geçmişten Günümüze Liderlik Kuramları, Eğitim Kitabevi. Konya. Aslan, Ş., (2009), Duygusal Zek&#226; ve Dönüşümcü, Etkileşimci Liderlik, Nobel Yayınevi, Ankara."
      }
    ]
  },
  {
    "id": "41880",
    "code": "2004714",
    "name": "YÖNETİM MUHASEBESİ",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "4",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. FATMA ÖZLEM  YILMAZ",
    "weeks": [
      {
        "week": 1,
        "topic": "Yönetim Muhasebesi tanımı İşletmelerde Yeri ve Önemi",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 2,
        "topic": "Yönetim Muhasebesine Giriş",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 3,
        "topic": "Maliyet Yaklaşımları",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 4,
        "topic": "Maliyet-Hacim İlişkileri",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 5,
        "topic": "Maliyet-Hacim-K&#226;r Analizi",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 6,
        "topic": "Uygulama",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 7,
        "topic": "İşletmelerde Karar Verme",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 8,
        "topic": "İşletmelerde Bütçe ve Bütçeleme Süreci",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 9,
        "topic": "Uygulama",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 10,
        "topic": "Sorumluluk Muhasebesi",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 11,
        "topic": "Transfer Fiyatlaması",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 12,
        "topic": "Fiyatlama Kararları",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 13,
        "topic": "Performans Yönetimi",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 14,
        "topic": "Genel Uygulama",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      },
      {
        "week": 15,
        "topic": "Final sınavı",
        "resources": "Büyükmirza, Kamil, Maliyet ve Yönetim Muhasebesi, Gazi Kitabevi, Ankara,Shim, Jae K., Joel G. Siegel, Theory and Problems of Managerial Accounting"
      }
    ]
  },
  {
    "id": "41112",
    "code": "2004715",
    "name": "SAĞLIK HİZMETLERİNDE YENİ YÖNELİMLER",
    "semester": 7,
    "year": 4,
    "term": "Güz",
    "ects": "4",
    "type": "Zorunlu",
    "instructor": "PROF.DR. YUNUS EMRE  ÖZTÜRK",
    "weeks": [
      {
        "week": 1,
        "topic": "Tanışma: Dersin kapsamı, konuları ve işlenişi ile ilgili bilgi verme, ders materyallerinin temin edilmesi",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 2,
        "topic": "Türkiye&#39;de sağlık yönetimi eğitiminin gelişimi ve mevcut durumun değerlendirilmesi",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 3,
        "topic": "Küresel salgınlar (Yeni Koronavirüs, SARS, H1N1, Kuş Gribi, HIV vb.)",
        "resources": ". 1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 4,
        "topic": "Biyoterörizm ve küresel salgınlar bağlamında tartışılması",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 5,
        "topic": "Nüfus, yaşlanma ve sağlık harcamalarındaki artış",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 6,
        "topic": "Sağlık sektöründe etik tartışmalar (aşı karşıtlığı, organ kaçakçılığı, taşıyıcı annelik, ötenazi, organ nakli vb.)",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 7,
        "topic": "Medikalizasyon, dehümanizasyon ve sağlığın piyasalaşması",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 8,
        "topic": "Modern toplumlar ve bulaşıcı olmayan hastalıklar",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 9,
        "topic": "Ara sınav",
        "resources": ""
      },
      {
        "week": 10,
        "topic": "Sağlıkta şiddetin nedenleri ve çözüm önerileri",
        "resources": "1. . İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 11,
        "topic": "Yoksulluk, savaşlar ve sağlık problemleri",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 12,
        "topic": "İlaç firmaları kıskacında sağlık hizmetleri",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 13,
        "topic": "Sağlık sektöründe yapay zek&#226;, makine öğrenmesi, mobil sağlık uygulamaları ve tıbbın geleceği",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      },
      {
        "week": 14,
        "topic": "Türkiye&#39;de sağlık sektöründe iş fırsatları, iş arama ve bulma teknikleri",
        "resources": "1. İnternet kaynakları 2. Açık ders materyalleri 3. Haftanın kitabı ya da filmi 4. Haftanın araştırma konusu ve okuma materyalleri"
      }
    ]
  },
  {
    "id": "22409",
    "code": "2004801",
    "name": "BİTİRME PROJESİ VE SEMİNER",
    "semester": 8,
    "year": 4,
    "term": "Bahar",
    "ects": "3",
    "type": "Zorunlu",
    "instructor": "DOÇ.DR. ŞERİFE  GÜZEL",
    "weeks": [
      {
        "week": 1,
        "topic": "Araştırma Yöntemlerine Giriş ve Temel Kavramlar",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 2,
        "topic": "Bilimsel Araştırmanın Önemi",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 3,
        "topic": "Bilimsel Araştırmaya Giriş: Problem, Amaç, Önem, Varsayımlar, Sınırlılıklar, Tanımlar",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 4,
        "topic": "Bilimsel Araştırmada Literatür Taraması: Kuramsal Boyut, İlgili Kaynaklar",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 5,
        "topic": "Bilimsel Araştırmada Yöntem: Araştırma Modeli ve Türleri",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 6,
        "topic": "Bilimsel Araştırmada Yöntem: Evren ve Örneklem",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 7,
        "topic": "Bilimsel Araştırmada Yöntem",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 8,
        "topic": "ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Bilimsel Araştırmada Yöntem: Verilerin Toplanması, Nitel, Nicel Veri Toplama Yöntemleri, Ölçme ve Ölçme Aracı",
        "resources": "Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 10,
        "topic": "İstatistikte Temel Kavramlar",
        "resources": "Bas Türker, Anket, Seçkin Yayınları, Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 11,
        "topic": "Normal Dağılım Eğrisi, Standart Puanlar",
        "resources": "Bas Türker, Anket, Seçkin Yayınları, Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 12,
        "topic": "İstatistiksel Hipotezler, Doğrusal İlişkinin Ölçülmesi",
        "resources": "Bas Türker, Anket, Seçkin Yayınları, Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 13,
        "topic": "Parametrik, Non- parametrik Testler",
        "resources": "Bas Türker, Anket, Seçkin Yayınları, Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 14,
        "topic": "Parametrik, Non- parametrik Testler",
        "resources": "Bas Türker, Anket, Seçkin Yayınları, Ankara, 2010. Bas Türker, Akturan Ulun, Seçkin Yayınları, Ankara, 2008. Coşkun Recai, Bayraktaroğlu Serkan, Yıldırım Engin, Altunışık Remzi, Sosyal Bilimlerde Araştırma Yöntemleri, Sakarya Kitabevi, 2008. Karasar, Niyazi, Bilimsel Araştırma Yöntemi, Nobel Yayın Dağıtım, 2012. Remzi ALTUNIŞIK vd., Sosyal Bilimlerde Araştırma Yöntemleri, 2. Basım, Adapazarı: Sakarya Kitabevi, 2002."
      },
      {
        "week": 15,
        "topic": "Final sınavı",
        "resources": ""
      }
    ]
  },
  {
    "id": "22410",
    "code": "2004803",
    "name": "SAĞLIK KURUMLARI YÖNETİMİNDE MESLEKİ UYGULAMA",
    "semester": 8,
    "year": 4,
    "term": "Bahar",
    "ects": "27",
    "type": "Zorunlu",
    "instructor": "DR. ÖĞRETİM ÜYESİ HİLAL  AKMAN DÖMBEKCİ",
    "weeks": [
      {
        "week": 1,
        "topic": "İşletmenin tanınması ve oryantasyon eğitimi",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 2,
        "topic": "İşletmenin tanınması ve oryantasyon eğitimi",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 3,
        "topic": "Hasta Kabul",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 4,
        "topic": "Evrak Kayıt",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 5,
        "topic": "Halkla İlişkiler",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 6,
        "topic": "Satın Alma",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 7,
        "topic": "İnsan Kaynakları",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 8,
        "topic": "ara sınav",
        "resources": ""
      },
      {
        "week": 9,
        "topic": "Hasta Hakları",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 10,
        "topic": "Kalite Birimi",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 11,
        "topic": "Muhasebe Birimi",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 12,
        "topic": "İdare Amirliği",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 13,
        "topic": "Hukuk Bürosu",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 14,
        "topic": "Ayniyat Saymanlığı",
        "resources": "Yataklı Tedavi Kurumları İşletme Yönetmeliği"
      },
      {
        "week": 15,
        "topic": "Dönem Değerlendirmesi",
        "resources": ""
      }
    ]
  }
];
