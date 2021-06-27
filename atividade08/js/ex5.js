/*5. Faça uma página de cadastro de dados pessoais de uma pessoa: nome, idade, cidade natal, telefone. Formatar o formulário para ser responsivo, com Bootstrap. Customize cores dos elementos da página e suas fontes. Apresentar os dados cadastrados na própria página.*/

function cadastro() {
    inNome = document.querySelector('#inNome');
    inIdade = document.querySelector('#inIdade');
    inCidade = document.querySelector('#inCidade');
    inTelefone = document.querySelector('#inTelefone');

    outNome = document.querySelector('#outNome');
    outIdade = document.querySelector('#outIdade');
    outCidade = document.querySelector('#outCidade');
    outTelefone = document.querySelector('#outTelefone');

    nome = inNome.value;
    idade = Number(inIdade.value);
    cidade = inCidade.value;
    telefone = Number(inTelefone.value);

    outNome.textContent = 'Seu no é: ' + nome;
    outIdade.textContent = 'Sua idade é: ' + idade;
    outCidade.textContent = 'Sua cidade natal: ' + cidade;
    outTelefone.textContent = 'Seu telefone é: ' + telefone;

}
var btCadastrar = document.querySelector('#btCadastrar');
btCadastrar.addEventListener('click', cadastro);

