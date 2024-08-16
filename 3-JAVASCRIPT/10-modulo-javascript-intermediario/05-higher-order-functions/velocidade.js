const dobrarVelocidade = function(velocidade, imprimir){
  console.log('estou dobrando a velocidade')
  let dobroVelocidade = velocidade * 2
  imprimir(dobroVelocidade)
}

const imprimirDobro = function(pamonha){ //funcao anonima
  console.log('a velocidade agora é: ' + pamonha)
}

dobrarVelocidade(60, imprimirDobro)