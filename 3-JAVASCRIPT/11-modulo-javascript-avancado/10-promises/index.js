//é uma forma bem moderna de trabalhar com fluxos assincronos
//a ideia é trabalhar com assincronicidade de forma sequencial e tb facilita o tratamento de excecoes no nosso codigo, caso de algum problema, = promessa, de que algo vai ser realizado (ou n)
//as promisses vieram pra resolver tb o calcback hell que  é um encadeamento de callbacks dentro do outro, e as promisses podem nos ajudar a resolver esse problema

//as promises vao ter quantro estados : 
// PENDENTE: quando a promise foi criada mas ainda n foi executada (estaod inicial de toda promise, nós q vamos realizada ou recusada); 
// REALIZADA (Resolve): quando teve sucesso na execução; 
// RECUSADA (Reject): houve  uma falha na execução da promise; 
// Estabelecida: quando foi realizada ou recusada.

//pra criar uma promise:
//a promise é uma classe (primeira letra maiuscula) e recebe uma funcao como argumento
/* vai receber dois parametros para mudar o estado da nossa promise, que sao funcoes : resolve e reject, o resolve chamamos para mudar o status da promise pra realizado quando estiver tudo ok, e o reject pra recusada quando tiver algum problema ou quiser mudar o fluxo dela pra rejeitado ou fazer alguma outra coisa, esses parametros serão importantes para ver se conseguimos fazer o fluxo que queriamos dentros da promise ou nao, se der problema vamos conseguir tratar esse erro de uma maneira mais facil para que nao de um erro generalizado no nosso codigo, com o reject vamos cosneguir tratar erros de uma forma mais facil */
// new Promise((resolve, reject) => {
//   //aqui a funcao que vai ser executada assinconamente, e isso funciona internamente dentro da promise(essa parte da execuçao assincrona)

// })//anatomia da promise

//criar uma funcao que retornaria uma promise:

// let chaleiraEstaNoFogao = true
// let fogaoEstaLigado = true

//se algum desses dois parametros for falso eu vou dizer que é necessario colocar a xaleira no fogao e ligar oi fogao para que a agua seja fervida, se nao essa agua nao vai ferver nunca
// let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
//   return new Promise((resolve, reject) => {
//     //aqui a funcao que vai ser executada assinconamente, e isso funciona internamente dentro da promise(essa parte da execuçao assincrona)
//     if(chaleiraEstaNoFogao && fogaoEstaLigado){
//       console.log('começando o processo de ferver agua')
//       resolve()//promise foi realizada de fato
//     }else{
//       console.log('é necessario ligar o fogao e colocar a chaleira no fogao para ferver a agua')
//       reject()//se um dos parametros for falso
//       //no resolve e no reject poderia passar um parametro que poderia pegar isso depois quando chamar a funçao beber agua (da pra fazer isso tbm)
//     }//nao precisa ter um return pra cada fluxo, ele ja esta ali em cima antes da promise, e dependendo do fluxo onde ele cair, ele vai retornar resolve ou reject.
//   })//anatomia da promise
// }//a func ferverAgua vai esperar dois parametros booleanos

//no final o código limpo é esse:


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if(chaleiraEstaNoFogao && fogaoEstaLigado){
      console.log('começando o processo de ferver agua')
      resolve()//promise foi realizada de fato
    }else{
      console.log('é necessario ligar o fogao e colocar a chaleira no fogao para ferver a agua')
      reject()
    }
  })
}


let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('Fazendo café')

//os dois sao verdadeiros, ele entra no if e dá o resolve visto que o retorno é verdadeiro entao a promise esta resolvida, e como essa funcao é uma promisse, o fluxo de execucao dela vai executar sem aguardar a linha de baixo executar: promise da funcao ferveragua > executa as linhas de baixo > dentro da funcao faz sua parte que tem que fazer, buscar agua de uma api por exemplo > retorna o resultado. Não espera a execucao da funcao ferverAgua pra executar o console.log... se mudar a var fogaoEstaLigado pra false e executar aparece a mensagem do else e vai mudar o status da promise pra reject, que vai dizer que deu algum erro na promisse, que vai ser tratado posteriormente