function adicionarComentario() {
  let inputComentario = document.getElementsByName("novo-comentario")
  //getelementsbyname pega varios elementos, e retorna a lista deles, e para pegar o valor só do primeiro input faça:

  let textoDigitado = inputComentario[0].value;
  //agora tem acesso ao indice 0 da nossa lista de elementos com name "novo-comentario" e ao value que foi digitado no input, (o value dá acesso ao valor que o usuario digitou)
  // console.log(textoDigitado)
  let novosComentarios = document.getElementById('novos-comentarios')
  //me da acesso ao elemento(div com id) para fazer algo com ela

  //inserir o texto digitado dentro dessa div 

  //inserir algum texto ou porção de html dentro de outro elemento
  //pra que o innerHTML serve? (pega o conteudo interno do elemento html)

  //console.log(novosComentarios.innerHTML) //não retorna valor do input no console, porque o html interno do elemento(div) está vazio,mas se tiver algo na div escrito vai sim retornar no console

  //novosComentarios.innerHTML = 'bla' // se clicar em adicionar comentário vai adicionar o bla dentro da div do html no nosso index... esse codigo js manipula o html(o texto) que ja está renderizado no navegador

  //a maneira certa por fim seria essa:

  novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
  //concatena o innerHTML com um trecho de html novo
  //pesquisar pra que serve o `` = adiciona um texto dentro de outro, interpolação de string --- --- concatenou um texto "novo comentario:" com o texto que foi digitado no input
  // o + vem antes do = pra não ficar sobrescrevendo o comentário, += pega o que ja tinha e concatenar um texto novo

}