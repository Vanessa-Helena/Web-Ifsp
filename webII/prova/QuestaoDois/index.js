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
    if (numero == 0 || isNaN(numero)){
        res.send(`<h1>Valor inválido no campo Numero, digite um valor valido </h1> `)

    }else if (texto ==! 'S' || texto ==! 'P' ) { 
        res.send(`<h1>Valor inválido no campo texto, digite S ou P neste campo </h1> `)
    }else{
        res.send(`<h1>Tudo Cetto!!</h1>`)
    }
});

app.listen(80, ()=>{
    console.log("Ouvindo na porta 80")
});