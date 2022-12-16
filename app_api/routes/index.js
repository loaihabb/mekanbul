var express=require("express");
const jwt = require("express-jwt");
var router=express.Router();
const auth = jwt.expressjwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["sha1", "RS256", "HS256"]
});
var ctrlMekanlar = require("../controllers/mekanlar");
var ctrlYorumlar = require("../controllers/yorumlar");
const ctrlDogrulama = require('../controllers/dogrulama');


router
.post('/kayitol', ctrlDogrulama.kayitOl)
.post('/girisyap', ctrlDogrulama.girisYap);

router
.route("/mekanlar/:mekanid")
.get(ctrlMekanlar.mekanGetir)
.put(auth, ctrlMekanlar.mekanGuncelle)
.delete(auth, ctrlMekanlar.mekanSil);

router
.route("/mekanlar")
.get(ctrlMekanlar.mekanlariListele)
.post(auth, ctrlMekanlar.mekanEkle);

router
.route("/mekanlar/:mekanid/yorumlar")
.post(auth, ctrlYorumlar.yorumEkle);

router
.route("/mekanlar/:mekanid/yorumlar/:yorumid")
.get(ctrlYorumlar.yorumGetir)
.put(auth, ctrlYorumlar.yorumGuncelle)
.delete(auth, ctrlYorumlar.yorumSil);

 



module.exports=router;
