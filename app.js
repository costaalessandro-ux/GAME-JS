
/* Abaixo foi utilizado querySelector para buscar a informações do Html*/
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do número secreto";
let primeiroParagrafo = document.querySelector('p');
primeiroParagrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

/*Abaixo foi criado uma função passando parametros */
// Essa função tem apenas parametros

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
/*Abaixo foi criada para gerar um numero aleatoriao */
// essa função possui retorno
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = "";
}

function reiniciar(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disable',true);
}

/*Abaixo foi criado uma função para o botão e para o input*/
// Essa função não tem parametro e nem retorno
function verificarChute(){
  let chute = document.querySelector('input').value;
  if(chute == numeroAleatorio){
    exibirTextoNaTela('h1', 'Acertou');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else if(chute > numeroAleatorio){
    exibirTextoNaTela('p', 'Número secreto é menor!');
  }else{
    exibirTextoNaTela('p', 'Número secreto é maior!');
  }
  tentativas++;
  limparCampo();
}



