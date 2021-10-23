async function alteraCorUm(cor) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            var boatoUm = document.getElementById('botaoUm');
            
            boatoUm.style.background = cor; 
            resolve();
        }, 1000);          
    });
    
}

function alteraCorDois(cor) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            var boatoDois = document.getElementById('botaoDois');

            boatoDois.style.background = cor;
            resolve();
        }, 1000);          
    });
    
}

var cores = ["blue", "orange", "gree", "yellow", "red", "black", "white"];

async function alterarCores() {
    await alteraCorUm("blue")
    await alteraCorUm("orange")
    await alteraCorUm("yellow")
    await alteraCorUm("black")
    await alteraCorUm("white")
    await alteraCorUm("red")
    await alteraCorUm("gree")

    await alteraCorDois("blue")
    await alteraCorDois("orange")
    await alteraCorDois("yellow")
    await alteraCorDois("black")
    await alteraCorDois("white")
    await alteraCorDois("red")
    await alteraCorDois("gree")
}

// cores.forEach(alteraCorUm("blue").then(alteraCorUm("orange")))
// cores.forEach(alteraCorDois())


alterarCores();



/* 
1º alterar a cor de fundo de dois botões sete vezes, uma vez a cada segundo
2º As sete alterações do botão 1 devem acontecer antes das alterações do botão 2
3º Utilizar Promises para sincronizar esta ordem. 

*/
// 1- Alterar o exemplo que muda as cores do body, apresentado em aula, para alterar a cor de fundo de dois botões sete vezes, uma vez a cada segundo. As sete alterações do botão 1 devem acontecer antes das alterações do botão 2. Utilizar Promises para sincronizar esta ordem. 

// Opcional: Use um array com uma quantidade fixa de cores, e use o forEach() para percorrer o array de cores, pintando os botões com elas.