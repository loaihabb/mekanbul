var mongoose=require("mongoose");
require("./mekansema");
//var dbURI = 'mongodb://localhost/mekanbul'; 
//var dbURI="mongodb://Loiy:12345@ac-cramdwd-shard-00-00.qzrthyd.mongodb.net:27017,ac-cramdwd-shard-00-01.qzrthyd.mongodb.net:27017,ac-cramdwd-shard-00-02.qzrthyd.mongodb.net:27017/?ssl=true&replicaSet=atlas-25gfs4-shard-0&authSource=admin&retryWrites=true&w=majority";
var dbURI="mongodb+srv://Loiy:12345@mekanbul.qzrthyd.mongodb.net/mekanbul?retryWrites=true&w=majority"; 
mongoose.connect(dbURI);

function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });
}

process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0);
    });
})


mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağandı.");
})


mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı koptu.");
})


mongoose.connection.on("connected",function(){
    console.log("Bağlantı hatası.");
})


