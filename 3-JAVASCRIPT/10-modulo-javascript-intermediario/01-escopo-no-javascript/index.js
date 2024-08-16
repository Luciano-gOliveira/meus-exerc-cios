
// if(true){
//   const mensagem = 'ola'
//   console.log(mensagem)
// }

// o bloco de codigo if cria um escopo pra variavel mensagem(em const), e a variavel mensagem pode ser acessada somente dentro desse escopo

//porque a acessibilidade é limitada pelo escopo onde elas são criadas, pelo bloco que são criadas

// console.log(mensagem)
//nao da pra imprimir fora do escopo do const
//fica inassessivel fora do escopo

//tipos de escopo que existem no javascript

//escopo de BLOCO, define um escopo pra variaveis criadas com const e let

//bloco de codigo autonomo ----

{
  //aqui tem um bloco de código autonomo
  // const mensagem = 'ola'
  // console.log(mensagem)
  //mesmo pra let
}

// console.log(mensagem)

//se for um var, fica acessível tanto dentro quanto fora do bloco de código(escopo), mas um bloco de uma função vai criar um escopo pra uma variável var, abaixo o exemplo

//uma função javascript define um escopo pra variaveis criadas com let const e var

// function falar(){
//   var mensagem = 'ola mundo'
//   console.log(mensagem)
//   a de dentro vai passar a mensagem, pois o escopo da funçao falar cria um escopo pra variavel mensagem e ela fica acessivel no escopo dentro da função
//   existe a diferença entre o bloco de codigo e a funçao quando vamos usar a variavel VAR
// }
// falar()
// console.log(mesnagem)
//a de fora não vai passar a mensagem



//se eu tiver uma funçao dentro de uma funçao, ela tambem vai ficar presa dentro daquele escopo
function falar(){
  var mensagem = 'ola mundo'
  console.log(mensagem)
  function falarOutraCoisa(){

  }

  falarOutraCoisa()
  console.log(falarOutraCoisa) 
}

falar()
// console.log(mensagem)
// console.log(falarOutraCoisa)
//elas dão o erro de que a função não é definida, pois foi chamada fora do escopo, a função dentro da outra funçao só fica acessivel ao escopo da funçao onde foi criada.

//ESCOPO GLOBAL --- é o escopo mais externo de todos, e vai ser acessivel a partir de qualquer outro escopo, tanto local, como função etc.

// aqui irei imprimir no console o texto da variavel meuCarroFavorito criada no outro documento html

console.log(meuCarroFavorito)

let numero = 123
//essa é uma variavel acessivel de qualquer lugar deste index.js

//o escopo é uma politica que gerencia a disponibilidade das variaveis no JS, uma variavel criada dentro de um escopo é acessível apenas a aquele escopo, mas é inacessivel fora.

//apois isso será falado sobre um conceito bem importante do javas cript q é o Hoisting, que é ate abordado em entrevistas