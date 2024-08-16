/* FUNÇÕES NO JAVASCRIPT
    estamos falando de criar um escopo pra executar um determinado codigo, e essa funçao que executa codigo vai ser nomeada e podera ser usada onde quisermos
    podemos ter funções que retornam um valor no final dela, e funções que não retornam nada
*/

/* 
    anatomia:
    fuction nomeDaFuncao(){
        <bloco de execução>
    }

    abrir e fechar chaves vai determinar o escopo da minha função

    é importante criar uma função que faça só uma coisa, ou seja, tenha só uma responsabilidade, e nomear bem ela

    pra chamar ela basta escrever ela(invocar/chamar ela) :
    nomeDaFUncao()

    função que tem parametro:
    function nomeDaFuncao(parametro1, parametro2){
      <bloco de execuçao>
      dentro do bloco de execuçao a func vai usar esses parametro pra fazer algo, e retornar ou nao um result
    }

    nomeDaFuncao(parametro1, parametro2)

    o parametro pode ser numero, string, boolean
*/

// function incentivarLuciano(){
//   alert('Muito Bem, você chegou ao JS, continue assim!')
// }

// incentivarLuciano()

//function soma(numero1, numero2){
//  return numero1 + numero2 //ele apenas esta retornando, nao mostra nada no navegador nem no console. mas esta funcionando

  // console.log(numero1 + numero2)
  // alert(numero1 + numero2)
//}

// soma(4, 4)

//atribuindo essa funçao a uma variavel
//let resultadoDaSoma = soma(4, 4)
//console.log(resultadoDaSoma)//8

//reatribuindo o let resultado da soma
//resultadoDaSoma = soma(resultadoDaSoma, 10)
//console.log(resultadoDaSoma)//18

//podemos definir valores padroes para nossa funçao cada eu nao mande um parametro pra ela na hora de invocar essa funcao

function incentivarLuciano(nomeQuester = "Quester"){

  alert('Muito Bem ' + nomeQuester + ', você chegou ao JS, continue assim!')
}

incentivarLuciano('Domingos')

// se nao passar um parametro o alert vai dizer "muito bem undefined" ou seja, é indefinida

//pra resolver isso podemos atribuir um valor ao meu parametro nomeQuester para ficar como valor default, que vai sobrescrever quando eu não passar nenhum parametro quando eu estiver invocando aquela funcao

//agora a funcao esta parametrizada mas pode tambem receber valores sem parametro, e se eu passar um '' vazio ele printa um lugar vazio no texto