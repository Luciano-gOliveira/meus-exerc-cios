//nos permite representar um numerto indefinido de argumentos que vamos passar para uma função, rest vai ser interpretado como um array nessa funçao

//function(a, b, ...args) args vai ser o restando dos parametros passado na funcao e o monta na forma de um array {
//  // ...
//} rest vai ser passado pra funcao como um argumento q vai ser interpretado como um array

function incentivarQuester(mensagem, ...nomesQuesters){
  //importante o parametro rest estar sempre por ultimo parametro da funcao
  // console.log(nomesQuesters)
  //usar o map pra incentivar um por um com a funçao de callback nomeQuester
  nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por ter chego até aqui', 'João', 'Pedro', 'Rafael', 1, true)

//parametro Rest é muito bom caso eu nao saiba quantos parametros quero passar pra funçao ou caso eu nao queira usar um array nessa func
