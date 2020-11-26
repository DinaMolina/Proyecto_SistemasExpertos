var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    nombreEmpresa: String,
    email: String,
    tipoEmpresa: String,
    fechaNacimiento: Date,
    password: String 
});

module.exports = mongoose.model('empresas', esquema);