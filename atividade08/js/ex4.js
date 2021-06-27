/*4. Faça um programa para deslocar um botão na tela utilizando as setas do teclado.*/
var btnX = 15,  btnY = 15;
var cima = 39, baixo = 40, esquerda = 37, direita = 38;
  
function fujaBotao(event) {
    var tecla = event.keyCode;
    
    if(tecla === esquerda) {
        btnX--;
     // seta pra ESQUERDA
        
    } else if(tecla === cima) {
     // seta pra CIMA
        btnX++;
        
    } else if(tecla === direita) {
     // seta pra DIREITA
        btnY--;
        
    } else if(tecla === baixo) {
     // seta pra BAIXO
        btnY++;
    }
    render();
}

btFuja = document.querySelector('#btFuja');
btFuja.addEventListener('keydown',fujaBotao);

function render() {
    btFuja.style.marginLeft = btnX + 'px';
    btFuja.style.marginTop = btnY + 'px';
}