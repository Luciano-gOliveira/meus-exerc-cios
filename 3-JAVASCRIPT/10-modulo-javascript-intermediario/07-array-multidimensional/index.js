// da pra ter um array dentro de um array ao infinito, mas vamos mais ver array bidimensional (um array dentro de um array)

let filmes = [
                ['Vingadores', 4.5, true ], 
                ['Mulher Maravilha', 4.6, false, ['Gal Gadot', 29]],
                ['Sexo 2', false, 3000]
             ]

console.table(filmes[2][2])