//Média com for each
const notas=[10,20,30,40,45]
let somanotas = 0
notas.forEach((nota)=>{
    somanotas+=nota
})
const media = somanotas/notas.length
console.log(media)