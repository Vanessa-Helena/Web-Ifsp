const express = require('express')
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res)=>{
    const num = Math.floor(Math.random()*10)
    res.render('home', {num});
});

app.listen(80, ()=>{
    console.log("Servidor ativo na porta 80")
});