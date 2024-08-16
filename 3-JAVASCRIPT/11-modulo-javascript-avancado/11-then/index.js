//com as promisses tudo fica mais facil pois teremos o then = entao: significa que quando uma func terminar de executar ENTAO a gente vai fazer alguma coisa, com isso temos ctz que a funcao terminou  de executar e temos tudo pronto pra continuar o fluxo do nosso código

//ex:

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
let passarCafe = () => console.log('passando cafe')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)// com o then a gente pode encadear dessa maneira, entendemos como o then funciona entao podemos ver como melhorar a questao do callback hell
//eu posso usar o then pq essa funcao ferveragua me retorna uma promise (ex: depois que a agua ferver, ENTAO vou passar o cafe)
console.log('Fazendo café')

//then é bom pra encadear promisses que dependem uma da outra pra executar, o codigo fica legivel em forma linear e facil de entender e dar manutençao, facilita o trabalho quando estamos lidando com funções encadeadas