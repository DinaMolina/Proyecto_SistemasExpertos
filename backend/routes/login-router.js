var express = require('express');
var cliente = require('../models/clientes');
var empresa = require('../models/empresa');
var jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretkey123456';
var router = express.Router();


router.post('/', function(req, res){
    const userData = {
        email: req.body.email,
        password: req.body.password, 
        tipoUsuario: req.body.tipoUsuario
      }
      if (userData.tipoUsuario == 0) {
        cliente.findOne({ email: userData.email }, (err, user) => {
          if (err) return res.status(500).send('Server error!');
          if (!user) {
            // email does not exist
            res.status(409).send({ message: 'Something is wrong' });
          } else {
           var resultPassword = false
           if (userData.password == user.password) {
               resultPassword = true;
           }
            if (resultPassword) {
              const expiresIn = 24 * 60 * 60;
              const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
              const dataUser = {
                nombre: user.nombre,
                pagina: 'ventas',
                accessToken: accessToken,
                expiresIn: expiresIn
              }
              res.send({ dataUser });
            } else {
              // password wrong
              res.status(409).send({ message: 'Password is wrong' });
            }
          }
        });    
      }
      if (userData.tipoUsuario == 1) {
        empresa.findOne({ email: userData.email }, (err, user) => {
          if (err) return res.status(500).send('Server error!');
          if (!user) {
            // email does not exist
            res.status(409).send({ message: 'Something is wrong' });
          } else {
           var resultPassword = false
           if (userData.password == user.password) {
               resultPassword = true;
           }
            if (resultPassword) {
              const expiresIn = 24 * 60 * 60;
              const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
              const dataUser = {
                nombre: user.nombre,
                pagina: 'admin-companies',
                accessToken: accessToken,
                expiresIn: expiresIn
              }
              res.send({ dataUser });
            } else {
              // password wrong
              res.status(409).send({ message: 'Password is wrong' });
            }
          }
        });
      }
      
  
});


module.exports = router;