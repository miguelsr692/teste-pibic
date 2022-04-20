// const b = {
//     Pacote: [
//         {
//             font: 1636511292256,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292256
//         },
//         {
//             font: 10,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292266
//         },
//         {
//             font: 9,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292275
//         },
//         {
//             font: 12,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292287
//         },
//         {
//             font: 11,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292298
//         },
//         {
//             font: 9,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292307
//         },
//         {
//             font: 10,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292317
//         },
//         {
//             font: 10,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292327
//         },
//         {
//             font: 10,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292337
//         },
//         {
//             font: 11,
//             x: 0,
//             y: 9.776309967041016,
//             z: 0.8123490214347839,
//             TimeStamp: 1636511292348
//         }
//     ]
// };

// const b = [
//     [11743, 0, 9.81, 0, 1637734886304],
//     [10, 0, 9.81, 0, 1637734886314],
//     [10, 0, 9.81, 0, 1637734886324],
//     [9, 0, 9.81, 0, 1637734886333],
//     [11, 0, 9.81, 0, 1637734886344],
//     [10, 0, 9.81, 0, 1637734886354],
//     [10, 0, 9.81, 0, 1637734886364],
//     [10, 0, 9.81, 0, 1637734886374],
//     [9, 0, 9.81, 0, 1637734886383],
//     [10, 0, 9.81, 0, 1637734886393],
//     [11, 0, 9.81, 0, 1637734886404]
// ];

// let n = 3; // limite de envio
// let m = Math.floor(b.length / n);
// let b_aux = {};


// for (var i = 0; i <= m; i++) {
//     b_aux = b.splice(0, n);

//     for (var j in b_aux) {
//         console.log(b_aux[j][0]);
//         console.log(b_aux[j][1]);
//         console.log('salvo')
//     }
//     console.log('---------------');
// }

// let index_atual = 0;
// for (var i = 0; i <= m; i++) {
//     b_aux = b.slice(index_atual,n+index_atual);
//     console.log(b_aux);
//     console.log('---------------');

//     index_atual += n;
// }

// let x = b.length;
// let y = 15;
// let z = 0;
// let w = 0;
// let b_aux = [];
// let aux = 0;
// let banco_salvou = false;

// while (z < x) {
//     while (w < y) {
//         b_aux[w] = b[z];
//         w++;
//         z++;
//         if(z>=x) break;
//     }
//     while (!banco_salvou) {
//         banco_salvou = true;
//     }
//     banco_salvou = false;
//     console.log(b_aux);
//     console.log('\n');
//     b_aux = [];
//     w = 0;
// }

// for (var i in b) {
//     console.log(b[i]);
// }

// console.log(b.length);


// const DB = require("./db");

// const Dados = DB.Mongoose.model('dados', DB.MedicaoSchema, 'dados');



// function find (name, query, cb) {
//     DB.Mongoose.connection.db.collection(name, function (err, collection) {
//         collection.find(query).toArray(cb);
//     });  
// }



// find('dados', {x : 0.0}, function (err, docs) {
//     console.dir(docs);
// });


// var mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/chatdemo');

// var connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', function () {

//     connection.db.collection("dados", function(err, collection){
//         collection.find({}).toArray(function(err, data){
//             console.log(data); // it will print your collection data
//         })
//     });

// });

// var media = require('./script');
// var db = require('./db');
// const Dado = db.Mongoose.model('dados', db.MedicaoSchema, 'dados');
// console.log(Dado.countDocuments({}));

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb+srv://UserTest:sesinho10@cluster0.dkgzg.mongodb.net/test?authSource=admin&replicaSet=atlas-viswpa-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
// var media = require('./script');
// let teste = 0;


// MongoClient.connect(url, async function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("chatdemo");
//   teste = 2;
//   //console.log(await dbo.collection("dados").countDocuments());
  
  

//   dbo.collection("dados").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     media(result);
//     if (teste == 2) console.log(teste);
//     db.close();
//   });
// });


var dado = 
"[[0.0, 9.77631, 0.812349, 10, 1650479830703], [0.0, 9.77631, 0.812349, 12, 1650479830715], [0.0, 9.77631, 0.812349, 11, 1650479830736], [0.0, 9.77631, 0.812349, 11, 1650479830819], [0.0, 9.77631, 0.812349, 11, 1650479830850], [0.0, 9.77631, 0.812349, 11, 1650479830924], [0.0, 9.77631, 0.812349, 11, 1650479830935], [0.0, 9.77631, 0.812349, 12, 1650479830956], [0.0, 9.77631, 0.812349, 11, 1650479830987], [0.0, 9.77631, 0.812349, 11, 1650479831008]]";
var dado2 = "teste"

console.log(dado.includes("[["));