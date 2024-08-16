// serve para que consigamos validar dados ou verificar condições

// == ---- igual ---- a==b  ---- verdadeiro se a for igual a b

// const a = 3
// const b = 3

// console.log(a==b)

// == compara o valor === compara o valor e o tipo do dado
// != e !== compara se os valores não são diferentes ou não identicos

// < --- menor que -- verdadeiro quando x for menor que y
// <= -- menor ou igual
// > -- maior que
// >= maior ou igual

// console.log(a>=b)

const a = 2

const b = 2


// && se uma coisa é verdadeira e a outra tambem o resultado me retorna como verdadeiro
console.log(a === b && a <=b)
// V e V = V

console.log(a === b && a <b)
// V e F = F

console.log(a > b && a < b)
// F e F = F

console.log(a > b && a == b)
//F e V = F

// || -- ou(or)

console.log(a === b || a <= b)
//V ou V = V

console.log(a === b || a < b)
//V ou V = V

console.log(a > b || a === b)
//F ou V = V

console.log(a > b || a < b)
//F ou F = F

// NOT -- inverte a expressao, o que for vdd vai ser falso e vice versa

console.log(!(a === b)) //false

console.log(!(a < b)) //true
