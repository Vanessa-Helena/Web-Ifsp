const express = require('express');

const app = express();

//console.dir(app);

const obj = {
    nome: "Fulano",
    idade: 18,
    pais: ["Maria", "João"]
}

/*app.use((req, res)=>{
    console.log("Nova requisição HTTP");
    res.send("<h1>Olá Mundo</h1>");
});*/

app.get('/', (req, res)=>{
    res.send("<h1>Home</h1>");
});

app.get('/gato', (req, res)=>{
    res.send("<h1>Gatos</h1>");
});

app.post('/gato', (req, res)=>{
    res.send("<h1>Gatos (POST)</h1>");
});

app.get('/r/:subreddit', (req, res)=>{
    const subreddit = req.params.subreddit;
    res.send(`<h1>Navegando em ${subreddit}</h1>`);
});

app.get('/r/:subreddit/:postID', (req, res)=>{
    const {subreddit, postID} = req.params;
    res.send(`<h1>Navegando no subreddit ${subreddit} ID do post: ${postID}.</h1>`);
});

app.get('/search',(req, res)=>{
    const {q} = req.query;
    if (!q) {
        res.send("Nada foi encontrado, pois nada foi buscado");
    } else {
        res.send(`<h1>Resultado da busca para: ${q}</h1>`)
    }

    res.send("<h1>Ooops! Rota não encontrada</h1>");
});

app.get('*',(req, res)=>{
    res.send("<h1>Ooops! Rota não encontrada</h1>");
});


app.listen(80, ()=>{
    console.log("Ouvindo na porta 80");
});
