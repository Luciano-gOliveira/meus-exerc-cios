//filter é uma func q aceita outra func como parametro e filtra elementos desse nosso array

//array de objetos
let pessoas = [
  {nome: 'Luciano', idade: 23},
  {nome: 'Adriano', idade: 15},
  {nome: 'Domingos', idade: 11}
]


// let pessoasComIdadeDe23Anos = []

// for(let i = 0; i < pessoas.length; i++){
//   if(pessoas[i].idade === 23){
//     pessoasComIdadeDe23Anos.push(pessoas[i])
//   }
// }

// console.log(pessoasComIdadeDe23Anos)


//fazer o mesmo com metodo filter que recebe uma func como parametro(callback)

// let pessoasComIdadeDe23Anos = pessoas.filter(function(pessoa){
//   return pessoa.idade === 23 
// })

//MENOR AINDA

let pessoasComIdadeDe23Anos = pessoas.filter((pessoa) => pessoa.idade === 23)

//tem uma linha só, pode tirar as chaves e o return

console.log(pessoasComIdadeDe23Anos)