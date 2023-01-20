//media com array
const notas = [10, 9, 4, 8 ,5];
const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length;
console.log(media);

//Removendo notas
console.log(notas.pop())
notas.pop();
console.log(notas)

//Adicionando notas
notas.push(20)
console.log(notas)

//Media com for e array
const notes = [10, 20, 12, 15, 20, 10]
let soma = 0;
let mediaNotes = 0;
for(let i=0;i<6;i++){
    soma = notes[i] + soma
}
console.log(soma)
mediaNotes = (soma)/notes.length
console.log(mediaNotes)

//concat() junta as arrays
let notes1 = [10, 20, 13, 15, 29, 10]
console.log(notas.concat(notes1))

const mistura = ["vodka", "kriscoff", "bala", "paiol"]
console.log(mistura.pop())
console.log(mistura.pop())
console.log(mistura.push("agua"))