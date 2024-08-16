// o que é um objeto, e um array, quando usar um  e quando usar o outro

// um array é uma estrutura de dados que funciona muito bem quando eu quero trabalhar com listas, qnd a gnt precisa colocar varios elementos dentro de uma lista e trabalhar c essa lista

//o objeto nos ajuda a aproximar o nosso codigo do mundo real, batemos o olho no codigo e fica mais facil de entender o que ele ta fazendo

let frutas = ['Uva', 'Banana', 'Melão']

let videoGame = {
  nome: 'Xbox',
  valor: 3000
}

let videoGame2 = {
  nome: 'Playstation',
  valor: 5000
}

//comum de ver em site de ecomerce, vai ter provavelmente varios objetos desses vindo do backend com essas informaçoes(nome, valor, descrição) e elas provavel tambem, esses objetos vao estar dentro de um array, ent é através  desse array de vários objetos, que vamos conseguir apresentar cada um desses  videogames la na tela, e mostrar as info.

//como add varios objetos dentro de um array:

let videoGames = [videoGame, videoGame2]

// um array de videoGames e dentro desse array coloquei meus objetos

console.log(videoGames)

//pegar o nome do videoGame2

console.log(videoGames[1].nome)

//navegou dentro do array usando o indice e dentro dos objetos do array usando o ponto

//os objetos vamos usar quando queremos agrupar informaçoes caracteristicas de produtos, itens, qualquer coisas do nosso sistema aproximando essse nosso codigo do mundo real o maximo possivel, para q a gente consiga dar manutenção de uma forma melhor, e usamos o array para manipular uma lista de valores, pode ser strings, numeros ou de varios objetos e cada um terem varias propriedades

//é importante saber quando usar um e quando o outro e tb quando usar os dois em conjunto para que meu código faça bastante sentido, coeso e fácil de dar manutenção
