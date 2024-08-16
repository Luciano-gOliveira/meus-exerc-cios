//concatenar variaveis com textos, funcoes, expressoes aritmeticas

// const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
//   return "Primeiro Nome: " + primeiroNome + "; ultimo Nome: " + ultimoNome + "; Idade " + idade;
// }

// console.log(imprimirInformacoesPessoa ("Luciano", "Oliveira", 23));

const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
  return `Primeiro Nome: ${primeiroNome}; Último Nome: ${ultimoNome}; Idade: ${idade}`
  //template literal
}

// console.log(imprimirInformacoesPessoa ("Luciano", "Oliveira", 23));

console.log(`${imprimirInformacoesPessoa("Luciano", "Oliveira", 23)}, ele é um DevQuester`)

console.log(`Soma ${10 + 20}`)