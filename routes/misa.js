const express=require('express');
const ruta=express.Router();
const controllermisa=require('../controllers/misaController')
ruta.get('/', controllermisa.listado);
ruta.post('/agregar',controllermisa.agregar);
ruta.post('/modificar',controllermisa.actualiza);
ruta.post('/borrar',controllermisa.borrar);


module.exports=ruta;