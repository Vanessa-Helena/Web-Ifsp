function Validacoes() {
    var inTexto = document.querySelector('#inTexto')
    var inNumero = document.querySelector('#inNumero')

    var texto = inTexto.value;
    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Número Inválido...");
        inNumero.focus();
        return;
    }

    if (texto =! 'S' || 'P') {
        alert("Texto Inválido...");
        inNumero.focus();
        return;
    }


}
var btEnviar = document.querySelector('#btEnviar')
btEnviar.addEventListener('click', Validacoes)