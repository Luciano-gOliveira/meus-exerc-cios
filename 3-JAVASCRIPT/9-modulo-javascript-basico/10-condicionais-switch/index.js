// switch serve pra quando se tem muitos cases
/*anatomia: 
  switch(parametro){
    case valor 1:
      <bloco de declaracao>
      break
    case valor 2:
      <bloco de declaracao>  
      break
  }
*/

// var nomeFilme = 'CU'

// switch(nomeFilme){
//   case 'Vingadores':
//     console.log('É o filme dos Vingadores')
//     break
//   case 'Batman vs Superman':
//     console.log('É o filme do Batman vs Superman')
//     break  
//   case 'Senhor dos Aneis':
//     console.log('É o filme do Senhor dos Aneis')
//     break
//   default:
//     console.log('É outro filme')
//     break     
// }

// outra particularidade do switch : multicaso, define varios cases ao mesmo tempo e se achar um desses ele imprime pra gente

let avaliacao = 0

switch(avaliacao){
  case 1:
  case 2:
    console.log('Filme ruim')
    break
  case 3:
  case 4:
    console.log('Filme mediano')
    break
  case 5:
    console.log('Filme excelente')
    break
  default:
    console.log('Nota inválida')      
}