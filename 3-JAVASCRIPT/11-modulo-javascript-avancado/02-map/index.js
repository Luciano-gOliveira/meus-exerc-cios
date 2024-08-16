//o metodo map num array, transforma esse array em um outro array novo, com o mesmo numero de elementos

let pessoas = [
  { nome: 'Roberto', idade: 33},
  {nome: 'Ricardo', idade: 33},
  {nome: 'Raphael', idade: 27}
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//   nomeDasPessoas.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)

// fazer isso com Map

let nomeDasPessoas = pessoas.map(pessoa => //func de callback
    {
      return pessoa.nome + " tem " + pessoa.idade + " anos anos de idade"
    })
console.log(nomeDasPessoas)