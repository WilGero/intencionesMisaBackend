const express=require('express');
const ruta=express.Router();
const controllerInte=require('../controllers/intencionController')
ruta.get('/', controllerInte.listado);
ruta.post('/',controllerInte.agregar);
ruta.put('/',controllerInte.actualiza);
ruta.delete('/',controllerInte.borrar);

module.exports=ruta;