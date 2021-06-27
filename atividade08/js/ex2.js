/*2. Altere a aplicação da questão 1 para fazer conversões de graus Celsius para Kelvin, e vice-versa. A página HTML não deve conter elementos em seu código, todos os elementos devem ser criados em JavaScript.*/

var elemento_pai = document.body;
var titulo = document.createElement('h1');
var texto = document.createElement('p');
var input = document.createElement('input');
var botao = document.createElement("button");
var result = document.createElement("h3");

titulo.innerHTML = "Conversor de Graus";
document.body.appendChild(titulo);

texto.innerHTML = "Digite quantos graus: ";
document.body.appendChild(texto); 

document.body.appendChild(input);

botao.innerHTML = "Converter";
document.body.appendChild(botao);

document.body.appendChild(result);

function converteKelvin(){

    inp = document.querySelector("input");
    outResult = document.querySelector("h3");

    valor = Number(inp.value);

    var convertido = valor + 273.15;

    outResult.textContent = "Convertido fica assim: " + convertido;
}

var btBotao = document.querySelector("button");
btBbotao = addEventListener("click", converteKelvin);