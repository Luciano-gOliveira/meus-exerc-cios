// funcoes que recebem outras funcoes como parametro ou retornam outras funcoes

// passar uma funcao como param pra outra função se chama callback 

// ex:
const calcularAnoDeNascimento = function(idade, mesdDeNascimento, imprimir){ //dois numeros e uma funçao
  const mesAtual = 2
  let anoDeNascimento = 2021 - idade
  if(mesdDeNascimento > mesAtual) anoDeNascimento--
  imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascido => {
  console.log('Seu ano de nascimento é: ' + anoDeNascido)
}

calcularAnoDeNascimento(33, 3, imprimirAnoDeNascimento)


// funcao que retorna uma funcao 

function multiplicar(multiplicador){
  return function(numero){
    return numero * multiplicador
  }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))