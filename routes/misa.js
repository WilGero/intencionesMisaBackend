const express=require('express');
const ruta=express.Router();
const controllermisa=require('../controllers/misaController')
ruta.get('/', controllermisa.listado);
ruta.post('/',controllermisa.agregar);
ruta.put('/',controllermisa.actualiza);
ruta.delete('/',controllermisa.borrar);


module.exports=ruta;