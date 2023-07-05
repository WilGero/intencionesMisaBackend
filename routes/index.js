const express=require('express');
const ruta=express.Router();

ruta.get('/',(req,res)=>{
    res.status(200).send('SERVIDOR API');
});

module.exports=ruta;