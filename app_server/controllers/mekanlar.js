var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render('anasayfa', 
  {"baslik": "Anasayfa",
    "sayfaBaslik" : {
      "siteAd" :"MekanBul",
      "slogan" : "Civardaki mekanları keşfet!"
     },
     "mekanlar" :[
      {
        "ad":"Starbucks",
        "adres":"Sdü Batı Kampüsü",
        "puan":"4",
        "mesafe":"2km",
        "imkanlar":["Kahve "," Tavla " , " Pasta"]

      },
      {
        "ad":"Gloria Jeans",
        "adres":"Sdü Doğu Kampüsü",
        "puan":"3",
        "mesafe":"5km",
        "imkanlar":["Kahve "," Tavla ", " Pasta"]

      }



     ]
   });
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi',
  { "baslik": 'Mekan bilgisi',
    "mekanBaslik" : "Starbucks",
    "mekanDetay" : {
     "ad": "Starbucks",
     "adres" : "Centrum Garden",
     "puan" : "4",
     "saatler" : [
      {
        "gunler" : "Pazartesi-Cuma",
        "acilis" : "9:00",
        "kapanis" : "23:00",
        "kapali" : false
      },
      {
        "gunler" : "Cumartesi-Pazar",
        "acilis" : "10:00",
        "kapanis" : "22:00",
        "kapali" : false
      }

     ],

     "imkanlar" : ["Kahve ", " Tavla ", " Çay"],
     "koordinatlar" : {
      "enlem": "37.7",
      "boylam": "30.5"
     },
    "yorumlar" :[
      {
        "yorumYapan" : " Loiy Habeeb",
        "puan" :"1",
        "tarih" :"20 Ekim 2022",
        "yorumMetni" : "ÇOK BERBAT"
      },
      {
        "yorumYapan" : " Büşra",
        "puan" :"5",
        "tarih" :"20 Ekim 2022",
        "yorumMetni" : "Güzel"
      }
    ]
     
    }

});
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
}



module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle,
  
}