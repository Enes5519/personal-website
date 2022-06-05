---
title: Google'da profesyonel şekilde arama yapın
excerpt: Google'da nasıl daha efektif bir şekilde arama yapabiliriz. Aradığımız cevaba nasıl hızlı ulaşırız. Google'u daha profesyonel kullanmak.
image: /posters/google-profesyonel-arama.png
date: 2022-06-05
category:
- pratik-bilgi
---

Öncelikle herkese merhabalar. Uzun bir aradan sonra tekrar güzel bir blog ile geri döndüm. Bugünkü konumuz herkesin sıkça kullandığı bir arama motoru olan Google'u nasıl daha efektif kullanabileceğimize dair bilgiler vereceğim. Vakit kaybetmeden hemen başlayalım.

## Temel arama sembolleri
Muhtemelen en çok işinize yarayacaklardan biri bu sembolleri öğrenmek olacaktır.

|  Sembol  | Açıklama                                                                                                                              | Örnek                     |
|:--------:|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
|    -     | Belirli terimi içeren sonuçları hariç tutar.                                                                                          | telefon -apple            |
|  &#124;  | Her iki tarafındaki eşleşen arama sonuçlarını döndürür.                                                                               | telefon &#124; bilgisayar |
|    *     | Yıldız işaretinin yerine herhangi bir kelimenin eşleşebileceği arama sonuçlarını döndürür. Genellikle kelimeyi unuttuğumda kullanırım | Steve * Apple             |
|    ()    | Arama terimlerini gruplamak için kullanılır.                                                                                          | (iyi &#124; mükemmel) ev  |
|    $     | Fiyat araştırması yapmak için kullanılıyor                                                                                            | telefon $2000             |
|    ..    | İki sayının arasına yerleştirildiğinde o aralıkla eşleşen sonuçları döndürür                                                          | iller 55..61              |

## Kelimesi kelimesine aratma
Aradığımız kelimeler bazen bize parça parça sonuç verebiliyor. Örneğin iki kelimeden fazla bir şey aratıyorsunuz fakat her kelime her sayfada olmayabiliyor. Bunu çözmek için sadece arattığınız kelimenin başına ve sonuna `"` koymanız yeterli.

> "okul" tatil mi?

yukarıdakini arattığınız takdirde içinde `okul` içermeyen sonuç çıkmayacaktır.

## Dosya uzantısı belirtme
Arama sonuçlarında istediğimiz bir dosya uzantısı olabilir. Örneğin bir PDF dosyası aratmak istiyoruz. Bunun için şunu yapmamız yeterli:

> kitap filetype:pdf

## Benzer siteleri bulma
Belirli bir websitesine "benzer" olan web sayfalarını listeler.

> related:google.com

## Aradığımız sonuçları belirli sitelerden almak
Eğer aramanıza `site` sorgusunu eklerseniz Google sonuçlarını verilen etki alanları ile kısıtlar.

> yeşil çay site:com

Mesela yukarıdaki şekilde bir aratma yaparsanız size sadece `com` uzantısına sahip web sayfalarını listeleyecektir. Eğer daha da spesifik yapmak istersek:

> yeşil çay site:trendyol.com

## Site içindeki yazılarda kelime arama
Örneğin biz site içindeki yazılarda **baş ağrısı** diye aratmak istiyoruz. Bunun için:

> intext:baş ağrısı

yazarak aratabilirsiniz. Ama `intext` sadece önüne gelen ilk kelimeyi alır yani bizim durumumuzda sadece `baş` kelimesini aratacaktır. Tüm kelimeyi aratmak istersek:

> allintext:baş ağrısı

### Tırnak içine almaktan farkı ne?
Eğer **"baş ağrısı"** diye aratırsakta istediğimize kavuşmaz mıyız? Neden `intext` veya `allintext` diye mevzuyu uzatıyoruz diyebilirsiniz. Fakat ikisinin arasındaki fark tırnak içinde yazarsak `baş ağrısı` kelimesini aynı olduğu gibi arar fakat `intext`'de sadece yazıda geçmesi yeterli olacaktır ikisinin yan yana olmasına gerek yoktur.

## Sitenin başlığında kelime aratma
Örneğin biz sitenin başlığında spesifik bir kelime aratmak istiyoruz.

> intitle:mide bulantısı

yazarak aratabiliriz fakat `intitle` sadece önüne gelen ilk kelimeyi alıyor yani bizim durumumuzda sadece `mide` kelimesini aratacaktır. Tüm kelimeleri aratmak istersek: 

> allintitle:mide bulantısı

## Sitenin URL'sinde kelime arama
Biliyorum bu bir tık psikopatça olabilir fakat profesyonel bir aratma istiyorsanız bilmekte yarar var. Örneğin sitenin URL'si içinde `mide bulantısı` kelimesini aratacağız.

> inurl:mide bulantısı

yazarak aratabiliriz fakat `inurl` sadece önüne gelen ilk kelimeyi alıyor yani bizim durumumuzda sadece `mide` kelimesini aratacaktır. Tüm kelimeleri aratmak istersek: 

> allinurl:mide bulantısı

## Haber kaynaklarında aratma
Aradığımız kelimenin sadece belirli bir haber kaynağından sınırlandırmak istiyorsak:

> korona source:milliyet

## Sitenin en son önbelleğini görmek
Belirtilen bir web sayfasının önbelleğini görmek neden isteyelim diyebilirsiniz fakat bu gerçekten faydalı bir şey çünkü Google'ın web sitenize baktığında ne gördüğünü sitenizin en son tarandığı tarih ve saatle birlikte gösterir. Ayrıca, bir sitenin salt metin sürümünü ve mevcut kaynağını görüntülemenizi sağlar.

> site:akspro.com.tr

## Kelimenin sözlük tanımına bakma
Bir kelimenin veya ifadenin sözlük tanımlarını gösterir. Bu sizi TDK'ye girme zahmetinden kurtarabilir.

> define:ramazan

## Şirketin hisse senedi fiyatlarını öğrenmek
Belirli bir şirketin hisse fiyatlarını görmek için başına sadece `stocks:` yazmanız yeterli.

> stocks:turkcell

## Harita sonuçlarını listeleme
Bu işlev, yalnızca belirli konum için harita sonuçlarını almanızı sağlar. 

> map:samsun

## Hava durumu
Belirli bir konuödaki hava durumunu gösterir. Önümüzdeki birkaç gün için tahmini görmek istiyorsanız, çekinmeyin sorun.

> weather:Istanbul