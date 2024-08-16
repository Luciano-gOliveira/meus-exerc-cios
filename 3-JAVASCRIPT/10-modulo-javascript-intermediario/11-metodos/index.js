// metodo nada mais é do q uma função só que dentro do contexto de um objeto

//adicionando funções a objetos

let usuario = {
  //popridade
  nome1: 'Lula',
  nome2: 'Bolsonaro',
  //metodo 
  engravidar: function() {
    //é uma funcao anonima
    console.log('O usuário ' + this.nome1 + ' engravidou ' + this.nome2)
  }
 }

 //chamar um metodo de um objeto
 // acessando um objeto / metodo do objeto
 usuario.engravidar()