const { application } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('viwes', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.get('/resposta', (req, res)=>{
    const {numero, texto} = req.query;
    if (texto == 'S'){
        
        var soma = Number(numero); 
        var resultado = soma; 
        for (var i = 1; i < soma; i++) {
            resultado += i; 
        }

        res.send(`<h1>A soma dos numeros inteiros até ${numero} é ${resultado} </h1> `)

    }else if (texto == 'P') { 

        var produto = Number(numero); 
        var resultado = produto; 
        for (var i = 1; i < produto; i++) {
            resultado *= i; 
        }
        res.send(`<h1>O produto dos numeros inteiros até ${numero} é ${resultado} </h1> `)
    }else{
        res.send(`<h1>Erro</h1>`)
    }
});

app.listen(80, ()=>{
    console.log("Ouvindo na porta 80")
});