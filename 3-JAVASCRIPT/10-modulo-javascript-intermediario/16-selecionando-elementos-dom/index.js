//console.log(document)

//tentando acessar um metodo do document pra acessar alguma coisa

let p = document.getElementById('paragrafo1')

//buscar o elemento por ID e atribuindo esse elemento buscado dentro de uma variavel

console.log(p)

//essa é a forma correta de buscar um elemento quando eu quero buscar ele pelo ID

//outro metodo

// let inputsPorClasse = document.getElementsByClassName('tag-de-input');

// console.log(inputsPorClasse[0])

//retorna uma lista com os inputs


//outra forma de buscar elementos na tela
// let inputPorTag = document.getElementsByTagName('input') //da pra fazer com h1 e etc

// console.log(inputPorTag[0].name)


//selecionando um elemento pelo atributo name:
let inputPorName = document.querySelectorAll("input[name='email']")
//consultar qualquer elemento que seja da tag input e entre colchetes passar o atributo que a gente quer, pra buscar todos os inputs q tenham o atributo name igual a email
//busca todos os elementos a partir de uma query, uma consulta

console.log(inputPorName[1])
