var express = require('express');
var empresa = require('../models/empresa.js');
var jwt = require('jsonwebtoken');
var router = express.Router();
const SECRET_KEY = 'secretkey123456';

//Guardar un nuevo cliente
router.post('/', function(req, res){
    let u = new empresa(
        {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nombreEmpresa: req.body.nombreEmpresa,
        email: req.body.email,
        tipoEmpresa: req.body.tipoEmpresa,
        password: req.body.password,  
    });
    u.save()
    .then(result=>{
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: result.id }, SECRET_KEY, { expiresIn: expiresIn });
        const dataUser = {
                nombre: result.nombre,
                pagina: 'admin-companies',
                accessToken: accessToken,
                expiresIn: expiresIn
        }
        res.send({dataUser});
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//Obtener una empresa
router.get('/:id', function(req,res){
    empresa.find({_id:req.params.id})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    
});

//Obtener todos los clientes
router.get('/', function(req,res){
    empresa.find()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    
})

module.exports = router;