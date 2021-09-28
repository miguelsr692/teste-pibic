const mongoose = require('mongoose');

/* local */
//mongoose.connect('mongodb://localhost:27017/chatdemo');

/* cloud */
// const credencias = require('./credentials');
// const user = credencias.user;
// const password = credencias.password;
// const url = 'mongodb+srv://' + user + ':' + password + '@cluster0.dkgzg.mongodb.net/chatdemo'
const MONGODB_URI = "mongodb+srv://UserTest:sesinho10@cluster0.dkgzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/chatdemo', { 
    useNewUrlParse: true,
    useUnifiedTopology: true
});
 
const medicaoSchema = new mongoose.Schema({
    medicao: {
        type: Object,
        ref: 'Dados',
    }
}, { collection: 'dados' }
);
 
module.exports = { Mongoose: mongoose, MedicaoSchema: medicaoSchema }