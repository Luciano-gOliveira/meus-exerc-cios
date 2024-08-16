//reduce também é uma high order function igual as outras, o filter filtra a lista (transforma o array em um array menor), o map pega um array e transforma em um novo array do mesmo tamanho da forma que queremos. 
// se nenhum desses metodos não resolvem um problema especifico, podemos usar o reduce

//Em JavaScript, o método reduce é uma função de array que é usada para reduzir os elementos de um array a um único valor. Ele executa uma função de callback uma vez para cada elemento do array, recebendo quatro argumentos: acumulador, valor atual, índice atual e array original. O valor retornado pela função de callback é atribuído ao acumulador, que é passado para a próxima chamada da função de callback. O resultado final é o valor final do acumulador após a última chamada.

let ordens = [
  {cliente: 'Luciano', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
  {cliente: 'Adriano', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
  {cliente: 'Domingos', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'}
]

// let quantidadeDeOrdens = 0
// for(let i = 0; i < ordens.length; i++){
//   quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeDeOrdens)

let quantidadeDeOrdens = ordens.reduce((somaDasOrdens, ordem) => {
  // console.log('Ordem', somaDasOrdens, ordem)
  return somaDasOrdens + ordem.quantidade
}, 0)

console.log(quantidadeDeOrdens)