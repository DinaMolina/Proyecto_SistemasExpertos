var mongoose = require('mongoose');


var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    fechaNacimiento: Date,
    password: String
});


module.exports = mongoose.model('clientes', esquema);