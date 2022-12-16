const passport = require("passport");
const mongoose = require("mongoose");
const Kullanici = mongoose.model("kullanici");

const giris = function (req, res) {
    res.render('giris', { title: 'Giris' });
    if (req.auth.eposta && req.auth.sifre) {
        Kullanici
            .findOne({ eposta: req.auth.eposta })
            .exec((hata, kullanici) => {
                if (!kullanici) {
                    return res
                        .status(404)
                        .json({ "hata": "Kullanıcı bulunamadı!" });
                } else if (hata) {
                    return res
                        .status(404)
                        .json(hata);
                }
                callback(req, res, kullanici.adsoyad);
            });
    } else {
        return res
            .status(404)
            .json({ "hata": "Kullanıcı bulunamadı!" })
    }
}

module.exports = {
    giris,
}
