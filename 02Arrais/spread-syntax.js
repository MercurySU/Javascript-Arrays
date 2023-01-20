//Sintaxe de Espalhamento - espalha valores
const notas = [3,5,6,7,8]
const novasNotas = [2,...notas,3,0]  //pode usar o .push tbm
console.log(`notas originais: ${notas} e novas notas: ${novasNotas}`)
//o ... não alterou o array original
