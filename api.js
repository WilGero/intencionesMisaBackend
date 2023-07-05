const express=require('express');
const dotenv=require('dotenv').config();
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();

var corsOptions={
    origin:['http://127.0.0.1.:8080','http://localhost:8080'],
    optionSuccessStatus:200
}
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(cors(corsOptions));
app.use(require('./routes/index'));
app.use('/intencion',require('./routes/intencion'));
app.use('/misa',require('./routes/misa'));
app.use('/user',require('./routes/usuario'));



app.listen(process.env.PORT,()=>{
    console.log('ya funciona el servidor');
});