/*condicionais
  são um funil de escolhas
  eles vão determinar se o código vai ser direcionado
  por um determinado fluxo ou por outro, baseado em uma expressao de logica, uma condiçao
*/

let nomeFilme = "Vingadores"

if(nomeFilme === "Vingadores"){
  console.log('É o filme dos vingadores')
}else if(nomeFilme == 'Batman vs Superman'){
  console.log('É o filme do batman vs superman')
  //bloco de execuçao
}else if(nomeFilme === "Watizape"){
  console.log("É suco de limonaations hahaha!")
}else{
  console.log("É outro filme")
}

console.log('Boa tarde')

// forma de escrever o if de uma forma menos verbosa, usando operador ternário, pra isso vamos ter a anatomia: condicao ? os valores, primeiro fluxo é "quando a condicao for true", ou seja, "condicao ?  console.log('true') : console.log('false')"

// false  ? console.log('condição verdadeira') : console.log('condição falsa')

nomeFilme === 'Vingadores' ? console.log('É o filme dos vingadores') : console.log('É outro filme')

// quando a condicao for verdadeira, o primeiro fluxo é executado, quando falsa, o segundo é executado

//isso é o operador ternário, if e else em uma linha só, da pra fazer else if também, e o ideal é usar isso em trechos de codigo que tenham if e else q nao sejam muito complexos, sem expressoes de verificaçao e glocos de execuçao muito extensos, fica mais legivel do modo tradicional