const mongoose = require('db.js');

const DadosSchema = new mongoose.Schema( {
    x: String,
    y: String,
    z: String,
    delay: String,
    TimeStamp: String,
});

const Dados = mongoose.model('Dados', DadosSchema);

module.exports = Dados;