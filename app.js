
/* Abaixo foi utilizado querySelector para buscar a informações do Html*/
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";
let primeiroParagrafo = document.querySelector('p');
primeiroParagrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

/*Abaixo foi criado uma função para os botões*/
// Essa função não tem parametro e nem retorno
function verificarChute(){
  console.log(numeroAleatorio);
}

/*Abaixo foi criado uma função passando parametros */
// Essa função tem apenas parametros
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


let numeroAleatorio = gerarNumeroAleatorio();
/*Abaixo foi criada para gerar um numero aleatoriao */
// essa função possui retorno
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
