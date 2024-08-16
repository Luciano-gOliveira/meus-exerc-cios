// coisas importantes pra trabalhar com arrays:
// array é um objeto, entao ele terá propriedades e métodos
// como iterar sobre um array
// iterar é repetir uma ação
// vamos repetir uma ação dentro dos itens do array


// propriedades
let frutas = ['Abobora', 'Melancia', 'Banana', 'Manga']
// iterar todos os nomes do array
// let frutasTamanho = frutas.length

// for(let i = 0; i < frutasTamanho; i++){
//   console.log('Fruta: ' + frutas[i])
// }

frutas.forEach(function(item, indice, array){
  // console.log(array)
  console.log('Fruta: ' + frutas[indice])
  // console.log('Fruta: ' + item)
})

// foreach vai iterar tambem sobre um array igual o for só que é muito melhor e mais legivel e nos dá muita coisa PermissionStatus, sempre optar por usar ele 

// metodos 

// push vai adicionar um elemto no array 

frutas.push('sifude') //adiciona elementos no array

frutas.pop() //retira o ultimo elemento do array

frutas.shift() //remove o primeiro elemento do array

frutas.unshift("Lula") //adiciona um elemento no começo do array

let posicaoLaranja = frutas.indexOf('Banana') //procura o indice de um item no array, a posição

// console.log('A posição do item é: ' + posicaoLaranja)
// console.log(frutas)