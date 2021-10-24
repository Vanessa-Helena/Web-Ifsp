const { application } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));// pega informações vindas da web sendo elas vindas de qualquer variavel
app.use(express.json());// transforma as informações em json

app.set('view engine', 'ejs');
app.set('viwes', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.get('/resposta', (req, res)=>{
    const { numero, resultado } = req.body;
    res.render('resposta.ejs', {numero, resultado});
});

app.listen(80, ()=>{
    console.log("Ouvindo na porta 80")
});