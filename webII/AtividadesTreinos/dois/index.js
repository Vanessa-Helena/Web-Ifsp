const { application } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('viwes', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.render('home.ejs');
});

app.listen(80, ()=>{
    console.log("Ouvindo na porta 80")
});