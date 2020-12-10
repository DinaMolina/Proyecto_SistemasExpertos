var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    idEmpresa: String,
    colorFondo: String,
    imagenFondo: String,
    titulo: String,
    infoBloque1: String,
    infoBloque2: String,
    infoBloque3: String,
    infoBloque4: String,
    infoBloque5: String,
    productos: Array  
});

module.exports = mongoose.model('sitiowebs', esquema);