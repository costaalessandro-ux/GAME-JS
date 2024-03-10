

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

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

/*Abaixo foi criada para gerar um numero aleatoriao */
// essa função possui retorno
function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   //abixo metodo criado para verificar o tamanha da array;
   let quantElementosNaLista = listaDeNumerosSorteados.length;
   if(quantElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
    //metodo includes verifica se um numero já foi utilizado.
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
    }else{
      //metodo push insere número dentro da array.
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = "";
}

function reiniciar(){
  numeroAleatorio = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}




