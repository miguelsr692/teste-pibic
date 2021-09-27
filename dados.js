const mongoose = require('db.js');

const DadosSchema = new mongoose.Schema( {
    font: String,
    x: String,
    y: String,
    z: String,
    TimeStamp: String,
    NewTimeStamp: String,
    Delay: String,
});

const Dados = mongoose.model('Dados', DadosSchema);

module.exports = Dados;