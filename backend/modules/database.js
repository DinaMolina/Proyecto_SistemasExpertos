var mongoose = require('mongoose');
//nombre de la base
let bd = 'espacio';
const port = '27017';
let host ='localhost';

class Database{
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(process.env.MONGODB_URI ||`mongodb://${host}:${port}/${bd}`)
        .then(result=>console.log(result))
        .catch(error=>console.log(error));
    }
}

module.exports = new Database();