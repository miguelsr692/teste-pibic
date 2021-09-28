const mongoose = require('mongoose');

/* local */
//mongoose.connect('mongodb://localhost:27017/chatdemo');

/* cloud */
const credencias = require('./credentials');
const user = credencias.user;
const password = credencias.password;
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://' + user + ':' + password + '@cluster0.dkgzg.mongodb.net/chatdemo', { 
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