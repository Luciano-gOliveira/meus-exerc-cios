// arrow functions são funçoes anonimas tambem, elas nao vao ter nome especifico, e sao funções escritas de forma reduzida, sao boas pra simplificar a escrita das nossas funcoes

let resultadoDaSoma = (numero1, numero2) => numero1 + numero2
// quando uma func arrow tem uma linha dentro do bloco de execução podemos remover as chaves e o return
console.log(resultadoDaSoma(12,5))

// const incentivarQuester = nomeQuester => {
//   console.log('parabens ' + nomeQuester + ' voce chegou até aqui')
//   // quando tem um parametro só nao precisa colocar entre parentese
// }

// incentivarQuester('lusinaldo')