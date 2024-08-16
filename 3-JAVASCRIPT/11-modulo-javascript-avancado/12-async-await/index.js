//palavras chave async e await, ajudam a trabalhar com promisses, fica mais facil de trabalhar e nao precisaremos mais usar o then quando trabalhavamos só com as promises puras
//ex:

//transformar a funcao em assincrona, se essa func tivesse dentro de outra func, quem que tem que ter o assync é a funcao imediata, a func que estou chamando uma outra func que retorna uma promise
async function iniciarProcessoDeFazerCafe(){
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  // console.log(aguaFervida)
  const cafePassado = await passarCafe(aguaFervida)//o passarcafe depende da agua estar fervida
  const cafeTomado = await tomarCafe(cafePassado)
  const xicaraLavada = await lavarXicara(cafeTomado)
  if(xicaraLavada) console.log('Finalizado o ritual de tomar o café')
  // funcoes devidamente encadeadas > aguardar processamento da linha terminar, quando terminar vai atribuir o valor pra variavel e passar pra proxima linha em diante (faz o mesmo papel do then)
}

iniciarProcessoDeFazerCafe()
  //executou a funcao iniciarProcessoDeFazerCafe, chamou a funcao ferverAgua > cafepassado retorna agua fervida, restante tambem retornam um true e no final se de fato for true o resultado,  ele vai printar o console.log
  

//pra uma funcao mais demorada o await é importante para que a gente espere a funcapo ferver agua terminar de executar e nos retorne o valor que estamos esperando (que no mundo real seria um resultado maior do que um simples true), se a gente n usar o await ele vai nos retornar a prmise, e nao é oque queremos na maioria das vezes so vou conseguir usar a palavra chave await dentro da funcao se essa funcao tiver a palavra chave async

//o await vai aguardar o termino da funcao ferveragua pra passar pra proxima linha e termos o resultado da funcao que será aguafervida para que possamos continuar o fluxo do nosso projeto fazendo outras coisas, as vezes dependemos do resultado de uma func pra continuar o fluxo do nosso codigo, e como nao sabemos quanto tempo essa func vai demorar pra executar precisamos do await pra ele ficar aguardando ate que que ele tenha  o resultado e nos retorne

//entao, o await espera ate a promise estar no estado resolvida, para que peguemos o resultado pra trabalhar c ele, 