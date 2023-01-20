//Desafio: Removendo duplicatas de um array
const meuSet = new Set([6,6,6,6,7,8,8]); //set é um conjunto que não pode repetir elementos 
console.log(meuSet)

const nomes = ['suzana','suzana','biel']
const nomesNaoRepetidos = [...new Set(nomes)]
console.log(nomesNaoRepetidos)
console.log(nomes)

/*more about Set() -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set */