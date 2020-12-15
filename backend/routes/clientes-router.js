var express = require('express');
var cliente = require('../models/clientes');
var jwt = require('jsonwebtoken');
var router = express.Router();
var mongoose = require('mongoose');
const SECRET_KEY = 'secretkey123456';


//Guardar un nuevo cliente
router.post('/', function(req, res){
    let u = new cliente(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            fechaNacimiento: req.body.fechaNacimiento,
            password: req.body.password,
            compras: []
    });
    u.save()
    .then(result=>{
    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: result.id }, SECRET_KEY, { expiresIn: expiresIn });
    const dataUser = {
            nombre: result.nombre,
            pagina: 'ventas',
            accessToken: accessToken,
            expiresIn: expiresIn
    }
    res.send({dataUser});
        
       // res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});



//Obtener un cliente
router.get('/:id', function(req,res){
    cliente.find(
        {
            _id:mongoose.Types.ObjectId(req.params.id)}
    )
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
    cliente.find()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    
});

//Agregar un producto al cliente
router.put('/:idCliente/compras',  function(req,res){
    cliente.update(
        {
            _id:req.params.idCliente,
    }, {
        $push:{
            "compras":{
                imagen:req.body.imagen,
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


module.exports = router;