//soma de arrays com .reduce: 
/*const salaJS = [4,5,8,3,4,7]

function adicao(notaSala){
    const somaDasNotas = notaSala.reduce((acumulador, nota)=>{
        return acumulador + nota
    },0)
        console.log(somaDasNotas)
}
adicao(salaJS)*/

//ou
const salaJS = [4,5,8,3,4,7]

function adicao(notaSala){
    const somaDasNotas = notaSala.reduce((acumulador, nota)=>acumulador + nota
    ,0)
        console.log(somaDasNotas)
}
adicao(salaJS)
