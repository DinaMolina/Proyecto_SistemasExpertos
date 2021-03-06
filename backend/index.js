var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var path = require('path');
var dataBase = require('./modules/database');
var clientesRouter = require('./routes/clientes-router');
var empresasRouter = require('./routes/empresas-router');
var loginRouter = require('./routes/login-router');



var app = express();


app.use(cors()); //permita peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('port', process.env.PORT || 8888);
app.use('/clientes', clientesRouter);
app.use('/empresas', empresasRouter);
app.use('/login', loginRouter);
app.use('/uploads', express.static(path.resolve('uploads')));

app.get('/', function(req, res){
    res.send('servidor');
 });


app.listen(app.get('port'), function(){
    console.log('Está levantado');
});