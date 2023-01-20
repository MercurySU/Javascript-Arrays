//.slice() --> divide a array 
//quero remover karla da lista de amigos
alunos = ['suzana', 'biel','marcus','regina','bruna','karla']
const sala = alunos.slice(0, 5)//1 parametro inicie o fatiamento
console.log(sala)

//para deixar o código mais dinâmico, posso usar o .length/2 para dividir a array
alunos1 = ['suzana', 'biel','marcus','regina','bruna','karla']
const sala1 = alunos1.slice(alunos1.length/2)
console.log(sala1)
//(0,alunos1.length/2) --> mostra os 3 primeiros 

//dividir array por 2 e adicionar um elemento: 
alunos2 = ['suzana', 'biel','marcus','regina','bruna','karla']
let sala2 = alunos2.slice(0, alunos2.length/2)
console.log(sala2)
sala2.push('fred')
console.log(sala2)

console.log(" ")

//desafio 1: criar uma lista de alunos e atualizar de acordo com as mudanças
const alunos3 = ['ana','rafa','joao','milena','fred','bianca']
//trocar rafa por maria e atualizar a lista com método splice()
alunos3.splice(1, 1, 'maria')//3 parametro substitui o elemento removido
console.log(alunos3)
 
console.log(" ")
//desafio 2: Juntas duas turmas e exibir uma única lista
let turmaA = ['ana','rafa','milena','luana','bruna','bianca']
let turmaB = ['suzana', 'biel','marcus','regina','sayure']
const listaTurmas = turmaA.concat(turmaB)
console.log(listaTurmas)    

//desafio 3: Lista com 2 dimensões -> lista com nomes e lista com médias 
let nomeAlunos = ['suzana', 'biel','marcus','regina',]
let mediaAlunos = [7, 10, 8, 4]
const notaFinal = [nomeAlunos, mediaAlunos]
console.log(notaFinal)
//se quiser pegar apenas 1 elemento da lista, posição de Biel:
console.log(`Biel está com média de: ${notaFinal[1][1]}`) 
console.log(`O top 1 do ranking é o aluno: ${notaFinal[0][1]}`) 

console.log(" ")
console.log(" ")

//Lista com 3 dimensões
const funcionarios = ['suzana','bruno', 'antonio','jose','pamela','malu']
const faculdade = [true, true, true, false, true, true]
const idade = [19, 40, 40, 22, 27, 26]
const listaSpace = [funcionarios, idade, faculdade]
console.log(listaSpace)
console.log(`A funcionária ${listaSpace[0][5]} com idade ${listaSpace[1][5]} anos tem faculdade? ${listaSpace[2][5]}`)

console.log(" ")
console.log(" ")

/*Desafio 4: crie uma função que receba o nome de um aluno como argumeto, verificar 
se o aluno está presente na lista e retorne a média final que se encotra no mesmo índice, 
caso o nome do aluno não esteja na lista, retorne uma mensagem indicando qye o aluno não 
foi encontrado:*/

const nomeList = ['rodrigo','josemar','simone','david']
const mediaList = [4, 5, 6, 3]
const searchCompleta = [nomeList, mediaList]    
    function searchList(nomeAluno, mediaAluno){
        
    if(alunos.includes(nomeAluno) && searchCompleta[1].includes(mediaAluno)){
        console.log(`aluno encontrado`)
    } else{
        console.log(`aluno não encontrado`)
    }
}
searchList('rodrigo', 4);

//sintaxe para lista dimensional:
/*const nomeList = ['rodrigo','josemar','simone','david']
const mediaList = [4, 5, 6, 3]
const searchCompleta = [nomeList, mediaList]   
const [nomeList, mediaList] = searchCompleta
console.log(searchCompleta)*/ 

//Desafio 9: Imprima o indice e a lista com os seguintes numeros
//100, 200, 300, 400, 500, 600

const numberes = [100, 200, 300, 400, 500, 600]
    for(let i=0;i<numberes.length;i++){
        console.log(numberes[i])
    }

//Desafio Média:
const notas1 = [10, 3, 6, 9, 4, 7]
let somaNotas1 = 0;
    for(let indice=0;indice<notas1.length;indice++){
        somaNotas1 = somaNotas1 + notas1[indice]
    }
    console.log(somaNotas1)
        const mediaNotas1 = somaNotas1/notas1.length
        console.log(mediaNotas1)

//MEDIA FOR OFF
const nome =['karla']
for(let ind=0;ind>=100;ind++){
    console.log(nome)
}
