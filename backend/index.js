var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var dataBase = require('./modules/database');
var clientesRouter = require('./routes/clientes-router');
var empresasRouter = require('./routes/empresas-router');
var loginRouter = require('./routes/login-router');
var sitioWebRouter = require('./routes/sitioWeb-router');

var app = express();

app.use(cors()); //permita peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/clientes', clientesRouter);
app.use('/empresas', empresasRouter);
app.use('/login', loginRouter);
app.use('/sitioweb', sitioWebRouter);


app.listen(8888, function(){
    console.log('Está levantado');
});