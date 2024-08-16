//com esse conseguimos expandir os elementos de um objeto iteravel (array ou string), objetos que podem ser percorridos

// const pessoas = ['Luciano', 'Adriano', 'Domingos']
// console.log(pessoas)

//usando o operador spread pra expandir a variavel pessoas no console log
const pessoas = ['Luciano', 'Adriano', 'Domingos']
console.log('Expandindo um array:')
console.log(...pessoas)

//retorna cada item do array separadamente

/*concatenar dois arrays*/

let pessoas1 = ['Luciano', 'Adriano', 'Domingos']
let pessoas2 = ['Rick', 'Pedro', 'Leozin']

// pessoas1 = pessoas1.concat(pessoas2)concat(pessoas3)etc

pessoas1 = /*criou um array novo assim*/[ ...pessoas1, ...pessoas2 ]
//criou um array novo com os dois elementos dentro, mais facil concatenar dessa forma

console.log('concatenando dois arrays:')
console.log(pessoas1)

//clonar um objeto

const pessoa1 = {nome: 'Luciano', idade: 23}
// const pessoa2 = {nome: 'Adriano', idade: 15}

const objetoClonado = { ...pessoa1 }
console.log('criando um objeto novo:')
console.log(objetoClonado) /* clone*/ 
console.log(pessoa1) /* objeto original*/






