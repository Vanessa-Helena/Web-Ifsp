/*Faça uma aplicação contendo um <label> com o texto "Tamanho: ", em seguida um <input> do tipo texto, e um <button>. Faça uma aplicação que recebe um valor no <input> e altera o tamanho da fonte do <label> para o valor recebido, ao clicar no <button>. 

Faça com que o tamanho da fonte do <label> seja alterada para o valor recebido, ao pressionar a tecla "Enter" do teclado também, no <input>.*/

function alteraLabel() {
    var inLabel = document.querySelector('#inLabel')
    var inInput = document.querySelector('#inInput')

    input = inInput.value;

    inLabel.style.fontSize = input + 'px'; 

}

function alteraLabelEnter(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == 13){
        inLabel.style.fontSize = input + 'px'; 
    }
    
}

var btLabel = document.querySelector('#btLabel')
btLabel.addEventListener('click', alteraLabel)
btLabel.addEventListener('keypress', alteraLabelEnter)

