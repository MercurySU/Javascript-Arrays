//percorre todo o array
const notas = [10, 20, 30, 40]
let somaNotas = 0
for(let nota of notas){
    somaNotas += nota
}
console.log(`a soma é ${somaNotas}`)
const media = somaNotas/notas.length
console.log(`a média é ${media}`)

//Numeros pares com array
const numerosPares = []
for(let i=0;i<=100;i=i+2){
    numerosPares.push(i)
}
console.log(numerosPares)

