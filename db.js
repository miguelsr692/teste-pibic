const mongoose = require('mongoose');

/* local */
// const url = 'mongodb://localhost:27017/chatdemo'

/* cloud direto */
const url = process.env.MONGODB_URI

/* cloud com arquivo secreto e credenciais */
// const credencias = require('./credentials');
// const url = 'mongodb+srv://' + credencias.user + ':' + credencias.password + '@cluster0.dkgzg.mongodb.net/chatdemo'


mongoose.connect(url);

 
const medicaoSchema = new mongoose.Schema({
    medicao: {
        type: Object,
        ref: 'Dados',
    }
}, { collection: 'dados' }
);
 
module.exports = { Mongoose: mongoose, MedicaoSchema: medicaoSchema }