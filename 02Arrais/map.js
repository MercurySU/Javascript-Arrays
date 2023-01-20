//ponto extra na notas sem ultrapassar 10:
const notas = [10, 10, 8, 7, 6]
const notasAtualizadas = notas.map((nota)=>{
    return nota + 1 >=10 ? 10 : nota + 1
})
console.log(notasAtualizadas)
//usei o metodo .map para alterar todo o array e o 
//operador ternário para a condição de não ultrapassar
//10 pontos