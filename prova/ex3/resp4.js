
var elemento_pai = document.body;
var label = document.createElement('label');
var input = document.createElement('input');
var botao = document.createElement("button");

label.innerHTML = "Tamanho: ";
document.body.appendChild(label); 

document.body.appendChild(input);

botao.innerHTML = "Alterar Label";
document.body.appendChild(botao);


function alteraLabel() {
    var inLabel = document.querySelector('label')
    var inInput = document.querySelector('input')

    input = inInput.value;

    inLabel.style.fontSize = input + 'px'; 

}

function alteraLabelEnter(event) {
    var inLabel = document.querySelector('label')
    var inInput = document.querySelector('input')

    input = inInput.value;
    
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13){
        inLabel.style.fontSize = input + 'px'; 
    }
}

var btLabel = document.querySelector('button')
btLabel.addEventListener('click', alteraLabel)
btLabel.addEventListener('keypress', alteraLabelEnter)
