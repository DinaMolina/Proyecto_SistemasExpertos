var express = require('express');
var clientes = require('../models/clientes');
var router = express.Router();


//Guardar un nuevo cliente
router.post('/', function(req, res){
    let u = new cliente(
        {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        fechaNacimiento: req.body.fechaNacimiento,
    });
    u.save()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    res.send({codigoResultado:1,mensaje:'Registo guardado'});
});

//Obtener un cliente
router.get('/:id', function(req,res){
    usuario.find({_id:req.params.id})
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
    clientes.find()
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