function conversaoFahrenheit() {
    inCelcius = document.querySelector('#inCelcius');
    outConversao = document.querySelector('#outConversao')

    outConversao.textContent = "";
    celcius = Number(inCelcius.value);

    if (celcius == 0 || isNaN(celcius)) {
        alert("Insira um número maior que zero");
        inCelcius.value = "";
        inCelcius.focus();
        return
    } 
    
    if (celcius > 0) {
        calculo = 1.8*celcius + 32
        outConversao.textContent = "O grau em Fahrenheit é: " + calculo;
    } 

    inCelcius.value = "";
    
}
btConversao = document.querySelector("#btConversao");
btConversao.addEventListener('click', conversaoFahrenheit)