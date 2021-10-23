const readline = require('readline-sync')

const areaPerimetro = () => {
    console.log("Digite os valores abaixo para encontrar a area e o perimetro do retangulo\n")

    const base = readline.question("Digite a Base: ")  
    const altura = readline.question("Digite a altura: ")  

    console.log("\nA area do retangalo é: ", base * altura)
    console.log("O perimetro do retangalo é: ", (base * 2) + (altura * 2))
};

module.exports.areaPerimetro = areaPerimetro;