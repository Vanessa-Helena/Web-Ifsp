const express = require('express')
const app = express();

const path = require('path');
const dadosReddit = require('./dados.json');

app.use(express.static(path.join(__dirname, 'public')));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res)=>{
    const num = Math.floor(Math.random()*10)
    const val = "Texto de Servidor!"
    res.render('home', {num, val});
});


app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    const dados = dadosReddit['subreddit'];

    if(dados){
        res.render('subreddit', {...dados}); //esta pegando todos os dados pegos na variavel dados
    }else {
        res.send('<h1>URL Não Encontrada</h1>')
    }
});

app.listen(80, ()=>{
    console.log("Servidor ativo na porta 80")
});