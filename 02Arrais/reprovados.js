//Desafio: Calcular a média dos alunos e mostrar quem está
//reprovado entre os alunos: 

/*const alunos = ['antionio','mallu','bruno','pamela','jose']
const notas = [6, 4.5, 8, 7.5, 9]
let somaNotas = 0
notas.forEach((nota)=>{
    somaNotas = somaNotas + nota
})
const media = somaNotas/notas.length
const aprovadoReprovado = notas.map((notasMap)=>{
    return notasMap < 6 ? 'reprovado':'aprovado'
})
console.log(aprovadoReprovado)*/


//Usando o .filter():
const alunos = ['antionio','mallu','bruno','pamela','jose']
const notas = [6, 4.5, 8, 7.5, 9]

const aprovados = alunos.filter((_,indice)=>{ //o _ é p dizer q não tá usando
    return notas[indice] >= 6 
})
const reprovados = alunos.filter((_,indice)=>{
    return notas[indice] < 6        
})
console.log(`aprovados: ${aprovados}`)
console.log(`reprovados: ${reprovados}`)

