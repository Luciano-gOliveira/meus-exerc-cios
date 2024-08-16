//pegando o elemento pelo ID com o id tirar-carta da tag button, depois adiciona um "escutador de evento" pra esse botao, e no click do botao vou chamar a funcao tirarUmaCartaAleatoriaDoBaralho, passando os parametros, o evento : 'click', e o callback, criado com uma arrow function, dentro do callback adiciono o tirarUmaCartaAleatoriaDoBaralho
document.getElementById('tirar-carta').addEventListener('click', () => {
  tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbaralhado() {
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  const resposta = await fetch(url)
  return await resposta.json()
}


//funcao pra tirar de fato uma carta do baralho, usando o endPoint
//pra tirar uma carta precisamos do deckID e o deckID a gente tem na variavel baralho, eu posso passar ele como um parametro pra funcao tirar uma carta
async function tirarUmaCarta(deck_id){
  //O PARAMETRO VAI SER PASSADO NA URL PRA FUNCAO RECONHECER O VALOR ATRIBUÍDO COMO O OBJETO DA CARTA RANDOMICA 
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1` 
  //agr posso usar essa variavel (deckID), dentro da url e chamar a url pra pegar a carta
  //finalemnte criar o fetch
  const resposta = await fetch(url)  
  return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho(){
  const baralho = await criarBaralhoEmbaralhado()
  //como o resposta.json do criarBaralhoEmbaralhado é uma promise, é preciso colocar await na frent e async na func

  //criar uma var carta
  const carta = await tirarUmaCarta(baralho.deck_id)
  //busquei o deckid pelo endpoint do tirar uma carta (AQUI QUE É PASSADO O DECKID COMO ARGUMENTO PRO PARAMETRO DE TIRAR UMA CARTA) => a parte de deckid da url pra tirar carta vai ser substituida
  //pegar a url da imagem dentro do objeto carta, usando a variavel carta que contem o deckid do baralho, acessa o array de cards e pega o primneiro pelo indice 0, e pega a imagem com .image, agora temos o endereço da carta
  // atribuindo isso a uma variavel
  const imagemCarta = carta.cards[0].image
  //pegando elemento pelo id com o id da imagem da carta, .src = a variavel imagemCarta que contem a url da imagem da carta, isso vai setar o url dinamicamente no src da tag img
  document.getElementById('carta').src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()

//esse metodo das cartas ta assincrono, nosso código pode seguir o fluxo sem problemas e esse código das cartas ia executar quando ele pudesse/conseguisse
// console.log('Segue o fluxo sem esperar')
//vai printar primeiro o log enquanto o código da carta vai na api e nos retorna

//esse foi um exemplo de como funciona o fetch, um método muito bom e simples pra trabalhar com APIs no JS

//DESAFIO CRIAR O BARALHO FORA DO FLUXO DO TIRARUMACARTA (criar o baralho, embaralhar e depois só tirar as cartas dele), criar o baralho separadamente e depois passar ele de alguma forma pro Tirarumacarta, sem que ele esteja dentro do tirarumacartaaleatoriadobaralho