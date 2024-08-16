/* é possivel organizar as info do nosso sistema usando os arrays e objetos em conjunto... sera algo bem comum de ver no dia a dia trabalhando com programaçao
*/

let jogo2 = {
  nome: 'Fallout'
}

let videoGame = {
  nome: 'Xbox',
  valor: 3000,
  jogos: [{
            nome: 'Final fantasy'
          }, // entre as chaves é o objeto, e entre os colchetes é array
          jogo2
         ]
  //temos um array de jogos com 2 objetos de jogo dentro de um objeto videogame

  //da pra criar o objeto direto no array jogos entre chaves
}

//posso adicionar outros jogos no objeto de videogame mesmo depois de criado, sem instanciar objetos

let jogo3 = {
  nome: 'Fifa'
}

videoGame.jogos.push(jogo3)

console.log(videoGame)

//outra forma de ter um objeto dentro de um objeto

let cliente = {
  nome: 'Luciano',
  ultimoPedido: {
    produto: 'Xbox',
    valor: 3000,
    //tbm tem uma lista de jogos
    jogos: [
      {nome: 'Fifa'}
    ]
  }
}

console.log(cliente.ultimoPedido.jogos[0].nome)

//navega-se pra dentro do objeto usando o ponto quando é objeto, e indice nos colchetes quando se fala de array.

//muitas vezes vamos usar os arrays em conjuntos