var express = require('express');
var empresa = require('../models/empresa.js');
var jwt = require('jsonwebtoken');
var multer = require('../libs/multer')
var router = express.Router();
var mongoose = require('mongoose');
const SECRET_KEY = 'secretkey123456';

//Guardar un nuevo cliente
router.post( '/', multer.single('imagen'),function(req, res){
    let u = new empresa(
        {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nombreEmpresa: req.body.nombreEmpresa,
        email: req.body.email,
        tipoEmpresa: req.body.tipoEmpresa,
        password: req.body.password,  
        imagen: req.file.path
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
    
});
//Agregar un producto a la pagina web 
router.put('/:idEmpresa/productos/', multer.single('imagen'), function(req,res){
    empresa.update(
        {
            _id:req.params.idEmpresa,
    }, {
        $push:{
            "productos":{
                imagen:req.file.path,
                nombre:req.body.nombre,
                precio: req.body.precio,
                descripcion: req.body.descripcion
            }
        }    
    })
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    }); 
});

//Agregar un producto a la pagina web 
router.put('/:idEmpresa/sitioweb/', function(req,res){
    empresa.update(
        {
            _id:req.params.idEmpresa,
    }, {
        $push:{
            "sitioweb":{
                colorFondo: req.body.colorFondo,
                imagenFondo: req.body.imagenFondo,
                titulo: req.body.titulo,
                infoBloque1: req.body.infoBloque1,
                infoBloque2: req.body.infoBloque2,
                infoBloque3: req.body.infoBloque3,
                infoBloque4: req.body.infoBloque4,
                infoBloque5: req.body.infoBloque5
            }
        }    
    })
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    }); 
});

//Obtener sitio web
router.get('/:id/sitioweb', function(req,res){
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

module.exports = router;