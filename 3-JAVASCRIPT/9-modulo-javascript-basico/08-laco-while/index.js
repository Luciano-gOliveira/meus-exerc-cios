//anatomia:
//while(condicao){
//  <bloco de execucao>
//}
// ----- "enquanto essa condicao for verdadeira, execute o bloco de executao ate ela ser falsa"

let a = 10
let b = 15

while(a < b){
  // console.log("incrementando a variavel a " + a)
  a++;
}

// 15 nao é menor que 15, por isso para no 14

// No while primeiro testa a condicao, no do while é no final.
// É um laco de repeticao com o teste logico no final

// do{
//  <bloco de execucao>    
// }while(condicao)

var i =1 

do{
  console.log("entrou " + i)
  i++
}while(i <=5)

