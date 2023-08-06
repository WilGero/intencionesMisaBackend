const express=require('express');
const dotenv=require('dotenv').config();
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
const prueba =require('./controllers/usuarioController');
var corsOptions={
    origin:['http://127.0.0.1.:8080','http://localhost:8080'],
    optionSuccessStatus:200
}
app.use(cors('*'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(require('./routes/index'));
app.use('/intencion',require('./routes/intencion'));
app.use('/misa',require('./routes/misa'));
app.use('/user',require('./routes/usuario'));



app.listen(process.env.PORT,()=>{   
    console.log('ya funciona el servidor');
});