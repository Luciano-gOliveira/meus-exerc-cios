/* funçoes anonimas são funcoes que a gente nao dá nome, e vamos fazer isso para atribuir uma func a uma variavel e retornar algo na funcao pra usar na variavel, e usar essa variavel com o valor da funçao dentro dela */

// function somar(numero1, numero2){
//   return numero1 + numero2
// }

// let resultadoDaSoma = somar(12,5)
// console.log(resultadoDaSoma)

// versão nova

let resultadoDaSoma = function(numero1, numero2){
  return numero1 + numero2
}

console.log(resultadoDaSoma(12, 5))

// chamar a variavel como se fosse uma função