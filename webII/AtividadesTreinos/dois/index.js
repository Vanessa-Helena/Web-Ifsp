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
    const {ladoA, ladoB, ladoC, altura, base} = req.query;
    const perimetroTriangulo = ladoA * ladoB * ladoC;
    const perimetroRetangulo = (base * 2) + (altura * 2);
    //res.render('resposta.ejs', {ladoA, ladoB, ladoC, altura, base});
    if (perimetroTriangulo > 0){
        res.send(`<h1>Triangulo</h1> <br> <h2>Perimetro: ${perimetroTriangulo}</h2>`)

    }else if (perimetroRetangulo) { 
        res.send(`<h1>Retangulo</h1> <br> <h2>Perimetro: ${perimetroRetangulo}</h2>`)
    }else{
        res.send(`<h1>Erro</h1> `)
    }
});

app.get('/resposta/:figuraGeometrica', (req, res)=>{
    const {ladoA, ladoB, ladoC, altura, base} = req.query;
    const triangulo = {ladoA, ladoB, ladoC};
    const retangulo = {altura, base}; 

    if ('/resposta/:figuraGeometrica' == triangulo){
        res.send(`<h1>Triangulo</h1>`)

    }else {
        res.send(`<h1>Triangulo</h1>`)
    }
    res.render('resposta.ejs', {ladoA, ladoB, ladoC, altura, base});
});



app.listen(80, ()=>{
    console.log("Ouvindo na porta 80")
});