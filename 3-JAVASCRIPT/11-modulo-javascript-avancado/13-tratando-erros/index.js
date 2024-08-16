//na func ferveragua quero evitar que seja enviada uma variavel pra ela que não seja um booleano, se ela receber algo diferente de booleano eu lanço uma excecao

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

    if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleando é aceito" //no throw podemos retornar numeros, booleano, qualquer tipo de variavel e ate uma funcao ou usar construtores do proprio js pra dar o throw de algum erro especifico

    if(chaleiraEstaNoFogao && fogaoEstaLigado){
      console.log('começando o processo de ferver agua')
      resolve()//promise foi realizada de fato
    }else{
      console.log('é necessario ligar o fogao e colocar a chaleira no fogao para ferver a agua')
      reject()
    }
  })
}

//como tratar os erros da nossa aplicacao, uma habilidade vital pra qualquer programador


//pra isso inicialmente usar o try e o catch

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe(){
  try{ //tente executar tudo dentro do try, e qualquer erro que ele pegar aqui, ele vai redirecionar pro catch
  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  // console.log(aguaFervida)
  const cafePassado = await passarCafe(aguaFervida)//o passarcafe depende da agua estar fervida
  const cafeTomado = await tomarCafe(cafePassado)
  const xicaraLavada = await lavarXicara(cafeTomado)

  // throw "Mensagem de erro"
  // if(xicaraLavada) console.log('Finalizado o ritual de tomar o café')//pode ser erro error etc
  }catch(err){
    console.log(err) 
}finally{
  console.log('Finalizado o ritual de tomar o café')
}

//se trocar fogaoLigado pra false vai dar reject no fluxo do do else dentro do ferveragua
}//daí ele vai pegar o reject e atribuir a mensagem de erro no ERR pois qualquer erro é redirecionado pro cath, como o reject por exemplo. tratar o erro com o trycatch não dá um erro fatal e não para meu programa, o código nao para de executar. depois do try catch, o finaly. depois dos otros executarem, ele vai executar no final independente se o try o catch forem executados... 

//outra coisa dos tratamentos de erro, o throw(arremeçar ou jogar), pois vamos jogar um erro pro catch pegar, chamamos esses erros de execoes, via codigo podemos gerar isso

iniciarProcessoDeFazerCafe()

//como tratar erros nos js, trycatch vai funcionar pra qualquer tipo de codigo
