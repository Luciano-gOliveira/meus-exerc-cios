//a desestruturacao é uma expressao js que nos permite extrair variaveis de objetos ou arrays

let pessoa = { nome: 'Roberto', sobrenome: 'Dias', idade: 33 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)


// let { nome: nome, idade: idade, sobrenome: sobrenome } = pessoa

//da pra tirar o nome da propriedade (em laranja) e deixar só a declaraçao da variavel caso a var tiver nome igual da propriedade de um objeto

//ex:
let { nome, idade, sobrenome: sobrenomeDaPessoa } = pessoa

// declarar duas variaveis na mesma linha

console.log(nome)
console.log(idade)
console.log(sobrenomeDaPessoa)

//destruturacao de array

const numeros = [1, 2, "três"]

//cria a variavel se baseando nos indices do array

const [ um, dois, tres ] = numeros

console.log(um)
console.log(dois)
console.log(tres)