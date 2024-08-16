function alterarCorDeFundoPrimeiroPost(){
  let posts = document.getElementsByClassName('post')

  let primeiroPost = posts[0];
  primeiroPost.style.backgroundColor = 'crimson'; 
  primeiroPost.style.color = 'white';
}

function aumentarFonteSegundoPost(){
  let textoPosts = document.getElementsByClassName('texto-post')

  console.log(textoPosts[1].classList)
  textoPosts[1].classList.add('fonte-grande')
  //adicionou ao elemento de classe texto-post uma nova classe 'fonte-grande' e ela acessa o style que existia no header, alterando instantaneamente ao clicar em Aumentar fonte do segundo post

  //checar se a classe nova foi adicionada
  console.log(textoPosts[1].classList)
  //assim, podemos adicionar uma classe atraves do javascript e alterar as propriedades CSS de estilização dos elementos
}

// function marcarRadio(genero) {
//   vou ter acesso ao F ou M atraves desse genero
//   console.log(genero)
//   sempre pensar qual elemento a gente quer alterar
//   let radioMasculino = document.getElementById('genero-masculino');

//   let radioFeminino = document.getElementByID('genero-feminino');
//   agora tem acesso aos dois radios
//   para alterar o atrubuto checked
//   if(genero === 'M'){
//     radioMasculino.checked = true;
//   }else if(genero === 'F'){
//     radioFeminino = true;
//   }
// }

//recriar essa function

function marcarRadio(genero){
  let radioMasculino = document.getElementById('genero-masculino');
  let radioFeminino = document.getElementById('genero-feminino');
  if(genero === 'M'){
    radioMasculino.checked = true;
  } else if(genero === 'F'){
    radioFeminino.checked = true;
  }
}