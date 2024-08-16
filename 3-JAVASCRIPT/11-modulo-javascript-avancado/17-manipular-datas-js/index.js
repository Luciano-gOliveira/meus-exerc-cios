const dataAtual = new Date();

// // console.log(dataAtual)

// const umDiaDepois = new Date(dataAtual);

// umDiaDepois.setDate(dataAtual.getDate() + 1);

// console.log(umDiaDepois)

// const umMesAtras = new Date(dataAtual);

// umMesAtras.setMonth(umMesAtras.getMonth() - 1);

// console.log(umMesAtras)

// const opcoes = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric'
// }

// const dataFormatada = dataAtual.toLocaleDateString('pt-br', opcoes);

// console.log(dataFormatada)

const opcoes = {
  weekday:  'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

const formatador = new Intl.DateTimeFormat('pt-br', opcoes)

const dataFormatada = formatador.format(dataAtual)

console.log(dataFormatada)