/*Desafio: média geral de salas diferentes*/
const salaJS = [4,5,8,3,4,7]
const salaJava = [4,8,6,4,5,7]
const salaPython = [3,0,8,6,3,2]

function calculaMedia(notasSala){
    const somaNotas = notasSala.reduce((acumulador, nota)=>{
        return acumulador + nota
    }, 0)

    const media = somaNotas/notasSala.length
    return media
}
console.log(`A média da sala Javascript é ${calculaMedia(salaJS).toFixed(2)}`)
console.log(`A média da sala Java é ${calculaMedia(salaJava).toFixed(2)}`)
console.log(`A média da sala Python é ${calculaMedia(salaPython).toFixed(2)}`)