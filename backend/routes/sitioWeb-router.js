var express = require('express');
var sitioWeb = require('../models/sitioWeb');
var router = express.Router();
var mongoose = require('mongoose');

//Obtener la página web
router.get('/:idEmpresa/', function(req,res){
    sitioWeb.find(
        {
            idEmpresa: req.params.idEmpresa
        })
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});


//Crear una página web
router.post('/', function(req, res){
    let u = new sitioWeb(
        {
            idEmpresa: req.body.idEmpresa,
            colorFondo: req.body.colorFondo,
            imagenFondo: req.body.imagenFondo,
            titulo: req.body.titulo,
            infoBloque1: req.body.infoBloque1,
            infoBloque2: req.body.infoBloque2,
            infoBloque3: req.body.infoBloque3,
            infoBloque4: req.body.infoBloque4,
            infoBloque5: req.body.infoBloque5,
            productos:[]
        },
    );
    u.save()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

//Editar la página web
router.put('/:idEmpresa/', function(req, res){
    sitioWeb.update(
        {
            idEmpresa: req.params.idEmpresa
        },
            {
                colorFondo: req.body.colorFondo,
                imagenFondo: req.body.imagenFondo,
                titulo: req.body.titulo,
                infoBloque1: req.body.infoBloque1,
                infoBloque2: req.body.infoBloque2,
                infoBloque3: req.body.infoBloque3,
                infoBloque4: req.body.infoBloque4,
                infoBloque5: req.body.infoBloque5
            }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

//Agregar un producto a la pagina web 
router.put('/:idEmpresa/productos/', function(req,res){
    sitioWeb.update(
        {
            idEmpresa:req.params.idEmpresa,
    }, {
        $push:{
            "productos":{
                imagen:req.body.imagen,
                nombre:req.body.nombre,
                precio: req.body.precio
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

module.exports = router;