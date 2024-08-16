//eventlistener pro botao

document.getElementById('tirar-carta').addEventListener('click', () => {
  tirarUmaCartaAleatoriaDoBaralho()
})

//como fazer uma requisiçao get para uma API utilizando o fetch
//o fetch no JS é um método que vai servir para trabalhar com APIs e ele vai nos retornar uma promise e no resolve dessa promise, vai ter o obj do retorno dessa api
//ele é bom pq é bem abstraído e vai ser bem facil trabalhar c ele
//sempre ler como a api funciona, oq ela faz, como usar os endpoints
//trabalhar com uma api de cartas

//criar e embaralhar o baraio
async function criarBaralhoEmbaralhado() {
  //chamar o endpoint atraves da var url
  const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  const resposta = await fetch(url)
  // console.log(resposta)
  // const json = await resposta.json()
  return await resposta.json()//ao inves de criar um objeto json eu posso retornar direto esse resposta.json q retorna o objeto q vimos no console
  // o .json tb vai retornar uma promise, ele é bem importante pra q consigamos pegar de fato o objt que queremos, ele transforma o corpo do obj js(no caso, a resposta) e esse objeto vamos usar pra pegar o ID do baralho, com ele q vamos conseguir tirar uma carta.
  /*console.log(json)*/ //ver q ele retorna uma promise, e fica pendente pois a var json ta sem await
  //essa resposta é um obj e conseguimos usar alguns metopdos desse obj, um deles é o .json
}

//o fetch vai retornar uma promise, internamente ele faz  todo esse controle e retorna uma promise quando ele terminar de buscar os dados, quando ele resolve a promise, inicialmente (sem o await) a promise fica com o status de pendente

// criarBaralhoEmbaralhado()

//inicialmente, , vai ter alguns campos, propriedades com alguns valores desse resultado, mas ainda nao serve muito, temos que transformar isso em um resultado que conseguimos trabalhar

async function tirarUmaCarta(deck_id){
  //preciso trocar o deck_id usando um objeto literal (template literal ou interpolar string) pra fazer essa troca
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2` //a interpolacao de strings é muito importante e bastante usada quando precisamos passar parametros pra uma url de uma API por exemplo
  const resposta = await fetch(url) // url e resposta tem o mesmo nome de variavel mas estao em funcoes diferentes entao cada uma vai respeitar o corpo da funcao, isso é o escopo local da funcao 
  return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho(){
  const baralho = await criarBaralhoEmbaralhado()
  // console.log(baralho)// o resultado na chamada da func é o obj do baralho que precisamos pra pegar o ID
  //como resposta.json é uma promise precisamos colocar o await e async na func

  // console.log(baralho)

  //acontecendo na pratica
  const carta = await tirarUmaCarta(baralho.deck_id)
  //a magica do await: pra tirar uma carta preciso passar o deckID pra carta e preciso ir na API e buscar o deckID pelo endPoint da func criarBaralhoEmbaralhado
  // console.log(carta.cards[0].image)
  const imagemCarta = carta.cards[0].image
  document.getElementById('carta').src = imagemCarta
  // console.log(carta)
}

tirarUmaCartaAleatoriaDoBaralho()

console.log('Segue o fluxo sem esperar')//esse código ta completamente assincrono e ele funfa separadamente num fluxo proprio dele