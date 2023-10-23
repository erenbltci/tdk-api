# tdk-api
Türk Dil Kurumu API

-> Eğer paket ile ilgili bir sorun yaşıyorsanız discord üzerinden technoeren#7608 ile iletişime geçebilirsiniz.

## Yükleme

[Npm](https://www.npmjs.com/) aracılığı ile ya da [Yarn](https://classic.yarnpkg.com/) aracılığı ile şu komutlarla indirebilirsiniz :

```
npm install @technoeren/tdk-api
```

```
yarn add @technoeren/tdk-api
```
## Başlama
Paketi tanımlayarak başlıyoruz:

```js
const TDKAPI = require('@technoeren/tdk-api')

const tdkapi = new TDKAPI();
```

## Kelime Arama

```js
tdkapi.getWord("esenlik").then(response => {

console.log(response)
})
```

Çıktı:

```
{
  anlamlar: [
    {
      anlam: 'Esen olma durumu, sağlık, afiyet, sıhhat, selamet, hastalık karşıtı',
      ornek: 'Kendini böyle sağa sola dağıttıkça tadına varılmaz bir mutluluk, esenlik duyuyordu'
    }
  ],
  atasozu_deyim: null
}

```

## Kelimenin Olup Olmadığını Kontrol Etme

```js
tdkapi.checkWord("esenlik").then(response => {

console.log(response)
})
```

Çıktı:

```js
true
```

```js
tdkapi.checkWord("asdasdasdasd").then(response => {

console.log(response)
})
```

Çıktı:

```js
false
```

## Kelimeden Atasözü Ya da Deyim Arama

```js
tdkapi.getProVerbs("keyif").then(response => {

console.log(response)
})
```

Çıktı: 

```
{
  proverbs: [
    {
      soz: "keyif benim, köy Mehmet Ağa'nın",
      tur: 'Atasözü',
      anlam: 'hiçbir şeyi tasa etmiyorum, işlerim yolunda.'
    },
    {
      soz: 'keyif çatmak',
      tur: 'Deyim',
      anlam: "keyfetmek:<i> 'Türkü söylüyorsun, keyif çatıyorsun.' -</i>P. Safa."
    },
    {
      soz: 'keyif sormak',
      tur: 'Deyim',
      anlam: "1) birine 'iyi misiniz, nasılsınız' sorularını yönelterek sağlığı hakkında bilgi almak; 2) saygı göstermek."
    },
    {
      soz: 'keyif sürmek',
      tur: 'Deyim',
      anlam: 'sıkıntısız, rahat yaşamak.'
    },
    {
      soz: 'keyif vermek',
      tur: 'Deyim',
      anlam: "neşe vermek, sarhoş etmek:<i> 'Bize hakaret eden, bize utangaçlık yükleyen bu zincir şarkıları, düşmanın kulağına keyif verecektir.' -</i>R. E. Ünaydın."
    }
  ]
}
```
