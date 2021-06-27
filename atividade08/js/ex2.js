/*2. Altere a aplicação da questão 1 para fazer conversões de graus Celsius para Kelvin, e vice-versa. A página HTML não deve conter elementos em seu código, todos os elementos devem ser criados em JavaScript.*/

var elemento_input = document.createElement('input');;
var elemento_h1 = document.createElement('h1');
var elemento_pai = document.body;
var text_h1 = document.createElement('p');
var text_h3 = document.createElement('h3');
var elemento_button = document.createElement('button')

elemento_h1.innerHTML = "Conversor de Graus";
document.body.appendChild(elemento_h1);

document.body.appendChild(elemento_h1);

text_h1.innerHTML = "Insira um numero";
document.body.appendChild(text_h1);

document.body.appendChild(elemento_input);

elemento_button.innerHTML = "Converter";
document.body.appendChild(elemento_button);

document.body.appendChild(text_h3);

function convertKelvin(){
    inp = document.querySelector('input')
    outConvertido = document.querySelector('h3')

    valor = Number(inp.value);

    var conversao = valor + 273.15;

    outConvertido.textContent = "O grau em Kelvin e: " + conversao;
}

btConversao = document.querySelector('button');
btConversao.addEventListener('click', convertKelvin);












