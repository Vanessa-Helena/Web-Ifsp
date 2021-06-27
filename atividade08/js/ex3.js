/*3. Faça um programa para apresentar um botão na página. Assim que o mouse entrar na área do botão ele deve se deslocar para uma posição aleatória na página, fazendo-o "fugir" do mouse.
*/

const fuja = function () {
    const aleatoria =  Math.floor(Math.random() * 300);
    return `${aleatoria}`;
 }

function fujaBotao() {
    this.style.margin = fuja() + 'px';
}

btFuja = document.querySelector('#btFuja');
btFuja.addEventListener('mouseenter',fujaBotao);
