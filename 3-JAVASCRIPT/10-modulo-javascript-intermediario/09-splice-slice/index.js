// mais dois metodos importantes do array: splice e splice
// slice significa fatiar, com ele vamos tirar um pedaço do array, e ele fará uma cópia desses itens que tiramos do array sem afetar o array original

let frutas = ['banana', 'maçã', 'laranja', 'uva']

// let frutasExtraidas = frutas.slice(1,3) //extrair da um a 3, ele vai ate o 3 mas nao inclui o 3, se colocar só 1 ele vai de maçã ate uva, ou seja, do 1 ate o final

// console.log(frutasExtraidas)

// console.log(frutas)

//SPLICE

//splice significa remendar ou costurar, vamos conseguir remover um item pela posiçao do indice desse item, e vai gerar um array novo, bom quando queremos add ou remov itens do meio do array, pois com push e pop só conseguimos trabalhar com o inicio e fim do array

// frutas.splice(indice, numero de elementos a remover)
// let frutasExtraidas = frutas.splice(1, 2)
// console.log(frutasExtraidas)

//console.log(frutas) //esse remove de fato os elementos do array

//podemos tambem remover elementos e adicionar outros no lugar ao mesmo tempo usando splice

let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'abacaxi', 'pera')

console.log(frutas)