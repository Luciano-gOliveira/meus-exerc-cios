'use strict'
//o this funciona com escopos, global e local, e o this pode existir nos dois

// console.log(this)

// o this ja existe em um contexto global, quando nao criamos nenhuma funçao ou escopo

//existe tambem um obj global de nome window

// console.log(window === this)

//pode ter tambem o this num escopo local

// this.name = 'Luciano'
//aqui o this.name ta vazando do escopo global pra dentro do escopo local da function saudar

//pra resolver isso usamos o conceito do js que é o modo estrito, colocando " 'use strict' " no topo, a primeira linha do nosso arquivo JS, após isso o this dentro da função não vai mais printar o this do objeto global com valor 'luciano'.. o this ficou undefined dentro do escopo da função, pois o this dentro do escopo da funçao nao é o mesmo que o de fora (o global)

// function saudar(){
//   console.log('this no contexto da funcao', this)
//   console.log('Olá ' + this.name)
// }

//o use strict é importante por isso, evita escopos vazando pra dentro do outro, e proibe algumas sintaxes, é interessante usar caso tenha necessidade, com casos de problemas de escopo

//lembrete: usar '()' pra poder chamar uma func
// saudar()
//só de chamar ela ja vai executar todo o console.log

// o this pode existir dentro de um método também

// let usuario = {
//   nome: 'Lusiano',
//   saudar: function(){
//     console.log('this no contexto do metodo ', this)

//     console.log('this.name no contexto do metodo ', this.name)
//   }
// }

//lembrete : metodo é uma funcao dentro de um obj. e nesse contexto do metodo, no escopo desse objeto usuario, o this passa a ser o proprio obj usuario

//sempre avaliar o escopo que queremos usar o thi

// usuario.saudar()

let comida = {
  nome: 'Brocolis',
  temperatura: 0
  //dentro do objeto a formatação da função cozinhar seria assim:

  // cozinhar: function(temperaturaDeCozimento){
  //   console.log('this no contexto do objeto comida', this)
  //   this.temperatura =
  //   temperaturaDeCozimento;
  // }
}

//da pra adicionar uma propriedade depois que o objeto for instanciado, dá pra fazer isso com um método tambem

//quando começar a cozinhar quero que a temperatura aumente

//amtes : sem o this
// comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento){
//   comidaParaCozinhar.temperatura =
//   temperaturaDeCozimento;
// }

comida.cozinhar = function(temperaturaDeCozimento){
  console.log('this no contexto do objeto comida', this)
  this.temperatura =
  temperaturaDeCozimento;
  //a funcao cozinhar esta dentro do escopo do objeto comida, usando o this nessa funçao ele automaticamente transforma o this no objeto comida
}

console.log(comida)

comida.cozinhar(//comida,
100)
//agora só preciso passar a temperatura, a chamada da funçao e a criaçao da funçao ficou mais facil

console.log(comida)

//até aqui foi visto: o que  é o this, e os 3 escopos q ele pode existir, escopo global, escopo de uma função e escopo de um metodo, também vimos um pouco sobre o modo estrito