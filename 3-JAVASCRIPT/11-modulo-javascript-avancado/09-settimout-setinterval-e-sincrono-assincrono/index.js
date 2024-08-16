//settimout e setinterval, como funcionam esses metodos, são duas funcoes basicas pra executar codigo assincronamente, apos um determinado periodo passado ou em um intervalo de tempo (a cada dois 2 seg por ex.)
//elas são higher order functions pois recebem func como parametros (callbacks)
//diferença entre elas: o settimout executa um bloco de código especifico depois de um determinado periodo de tempo, e o setinterval vai exercut um bloco repetivamente em um intervalo de tempo, e podemos definir esse intervalo

//eles são metodos do objeto window, entao podemos chamar ela sem declaram uma funcao, e eles recebem uma funcao como parametro tambem

// setTimeout(() => {
//   alert('uatizape2')
// }, 3000);

// setInterval(() => {
//   console.log('hello t')
// }, 3000);

//settimout e o setinterval sao metodos assincronos, se tiver um codigo depois do setInterval por exemplo, ele vai ser executado primeiro que o setinterval e etc

// setTimeout(() => {
//   console.log('console dentro do settimout')
// }, 4000);

// console.log('console depois do settimout')

// conseguimos parar a execuçao do sett interval e etc 

// let idDoIntervalo = setInterval(() => {
//                       console.log('executando a cada 2 seg')
//                     }, 2000);
// console.log(idDoIntervalo)  
// clearInterval(idDoIntervalo)
// nunca vai imprimir o texto pois limpamos        

//--------------------------X--------------------------------

//codigo sincrono e assincrono e qual a diferença
//sincrono segue um fluxo linear de execução(de cima pra baixo), executa uma instrução do arquivo JS depois que a anterior for executada, como se fosse uma dependencia de uma linha pra outra(no assincrono nao temos isso)

//assincrono se descola desse fluxo e nao espera a execuçao da linha do anterior para que ela execute

//exemplo de assincronicidade é fazer café: ferver agua e adiantar outras coisas do café, sem esperar necessariamente a agua esquentar... geralmente quando uso um metodo assincrono, vou querer executar outros trechos de codigo só quando esse metodo assincrono terminar, pq mts vezes dependo dele pra continuar fazendo outras coisas, e nao sei quando aquele codigo assincrono vai terminar de executar (ex: para que eu possa terminar de passar o café eu preciso que a agua esteja quente, e isso leva um tempo e varia dependendo de varios fatores/variaveis)

//primeira func
function colocarAguaPraFerver(){
  console.log('colocar água pra ferver')

  setTimeout(() => {
    //aqui teremos o corpo da nossa funcao
    console.log('água ferveu')
    passarOCafe()
  }, 5000) /*trabalha com milisegundos*/ 
}

//segunda funcao
function prepararPraPassarOCafe(){
  console.log('pegar o pé de café')
  console.log('pegar o filtro de café')
  console.log('colocar o café no filtro')
  console.log('colocar o filtro em cima da xicara')
}

//terceira funcao
function passarOCafe(){
  console.log('passando o café')
}

colocarAguaPraFerver()
prepararPraPassarOCafe()
// passarOCafe()

//esse era um código sincrono