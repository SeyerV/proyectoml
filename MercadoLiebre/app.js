//requiere express

const express = require('express');

//requerir path 

const path= require('path');
//ejecutar express
const app = express();
//usar recursos estaticos
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve('./views/home.html'));
})
app.get('/register', (req,res)=>{
    res.sendFile(path.resolve('./views/register.html'));
})
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve('./views/login.html'));
})

app.listen (process.env.PORT || 3030, function() {
    console.log('Server runing at port 3030');
})