//é um conceito bastante importante no javascript, e pode ser ate perguntado em entrevistas muitas vezes

//o interpretador do js faz varias operações nos bastidores, e uma delas é o hoisting

// a melhor maneira de pensar no comportamento das variaveis do js é separar isso em duas partes: declaração da variavel; e inicialização ou atribuição dessa variavel

// var pais //declaração
// pais = 'Brasil' //atribuição

// var pais = 'Brasil' //declarando e atribuindo, não é tudo acontecendo na mesma linha, o mecanismo do js trata isso como duas instruções separadas

//ja se sabe que cada variavel declarada dentro de um escopo pertence a aquele escopo, mas não importa onde essas variaveis sao dentro de um escopo, todas as declarações sao movidas pro topo desse escopo, seja ele global ou local, isso se chama de hoisting ou içamento, e ele só move a declaração, não move a atribuição, a atribuição é deixada no lugar onde foi atribuida
// console.log(pais)
// var pais = 'Brasil'
// a declaraçao(pais) foi pro topo e a declaraçao('Brasil') ficou onde esta --- Dessa forma: 
// var pais
// console.log(pais)
// pais = 'Brasil'
// por isso a saída é undefined 
//a var n é movida fisicamente, o hoisting é só o modelo que descreve o que o mecanismo do js vai fazer ali nos bastidores 

// testando hoisting com let:
// console.log(pais)
// let pais = 'Brasil'

//retorna um erro, não é possovel acessar pais antes da inicialização, porque as variaveis com let. nao podem ser lidas ou escritas até que sejam totalmente inicializadas, elas sao totalmente inicializadas onde elas são declaradas no código, a declaraçao da variave let é içada só que nao é atribuída com valor nenhum... isso nos garamte uma melhor prática de codificação, o hoisting nos obriga a declarar uma variavel let antes de usar
// let pais declarando
// console.log(pais) tentando imprimir 
// pais = 'Brasil' depois atribuindo

//agora está declarada e pode dar console.log(pais).

//declarando e atribuindo ao mesmo tempo:

let pais = 'Brasil'
console.log(pais)

//teremos a saída esperada

//Resumo: Hoisting é um comportamento em Javascript em que as declarações de variáveis e funções são movidas para o topo do escopo durante a compilação, permitindo o acesso a elas antes mesmo de sua declaração no código fonte
