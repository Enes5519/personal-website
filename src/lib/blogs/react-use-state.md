---
title: React'te useState nedir? Nasıl efektif kullanabiliriz?
excerpt: React'te useState hookunu nasıl kullanırız. Kullandığımız useState'leri nasıl daha performanslı hale getirebiliriz.
image: /posters/react-use-state.png
date: 2020-12-19
category:
  - react
  - yazilim
---

Öncelikle herkese merhabalar. Bu ilk yazımda size useState nedir, nasıl daha efektif kullanabiliriz gibi soruların
yanıtlarına bakacağız.

## State nedir?

JavaScript'de bir değer saklayacağımız zaman öncelikle bir değişken oluşturuyoruz ve bunu daha sonradan okuyup değiştiriyoruz.
React'te de state aynı bunun gibi fakat tek bir farkla biz değişkenin değerini değiştirdiğimiz zaman Componentimiz de hemen
kendini renderlayarak o değişkeni kullandığımız her yeri güncelliyor.

## React useState nedir?

React'te fonksiyonel componentlerde de state oluşturmak için yapılmış bir hooktur. Aşağıdaki kod örnek bir kullanımdır.

```javascript
const [state, setState] = useState(initialValue);
```

useState bize bir array döndürür bunların ilk elemanı `state` ve ikinci elemanı ise stateimizi update edebilmek için `setState`.
useState'in içine yazdığımız parametre ise stateimizin başlangıç değerini belirtir.

> React'in setState fonksiyonu her zaman kimliğini tutar. Bundan dolayı useEffect veya useCallback gibi hooklarda **bağımlı değişkenlere (dependencies)** yazmanıza gerek yoktur.

## Nasıl update ederiz?

useState'den dönen ikinci elemanı kullanarak stateimizi update edebiliriz. Yukarıdaki örnekte ben ismini `setState` yaptığım için
herhangi bir güncelleme yapacağım zaman:

```javascript
setState(newValue);
```

yazmam yeterli olacaktır.

> Eğer update için verilen değer aynı ise **yeniden render** işlemi olmaz.

## Fonksiyon kullanarak update etme

setState fonksiyonumuzun içine fonksiyon kullanarak değişkenimizi güncelleyebiliriz. Bu fonksiyonumuzun parametresi state'in değerini alır.

```javascript
setState((oldValue) => {
	return oldValue + 1;
});
```

### Peki neden böyle bir şeyi kullanalım?

Fonksiyonlu güncelleme işlemimizi yapmamızın sebebi `setState`'in asenkron olarak çalışmasıdır. Yani sizin `state` değişkeniniz
_anında güncellenmez_. Bu yüzden fonksiyon kullanarak güncelleme yapmamız gerekir. Aşağıda bir örnek kullanım görebilirsiniz.

```javascript className=text-xs
function Counter({ initialCount }) {
	const [count, setCount] = useState(initialCount);
	return (
		<>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
		</>
	);
}
```

## Performans

Yazının başlarında başlangıç değeri nasıl belirleriz göstermiştim. Fakat bu belirlediğimiz değer ağır bir işlem hesaplanarak yapılıyorsa
yani kod için maliyetli bir işlem ise bunu tembel (lazy) olarak verebiliriz.

```javascript
const [state, setState] = useState(() => {
	const initialState = baziMaliyetliHesaplamalar();
	return initialState;
});
```

Bugün ilk yazımı yazdığım için çok memnunum. Bu arada ilk yazım tam da doğum günüme denk geldi. Sizde arkadaşlarınızla paylaşarak bilginin çoğalmasını sağlayabilirsiniz.
