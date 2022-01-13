const mongoose = require('mongoose');

/* local */
//mongoose.connect('mongodb://localhost:27017/chatdemo');

/* cloud com arquivo secreto e credenciais */
// const credencias = require('./credentials');
// const user = credencias.user;
// const password = credencias.password;
// const url = 'mongodb+srv://' + user + ':' + password + '@cluster0.dkgzg.mongodb.net/chatdemo'

/* cloud direto */
mongoose.connect(process.env.MONGODB_URI);

 
const medicaoSchema = new mongoose.Schema({
    medicao: {
        type: Object,
        ref: 'Dados',
    }
}, { collection: 'dados' }
);
 
module.exports = { Mongoose: mongoose, MedicaoSchema: medicaoSchema }