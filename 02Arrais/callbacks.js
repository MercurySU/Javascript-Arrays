const nomes = ['suzana', 'suzana','suzana', 'suzana']
nomes.forEach((nomes) =>  {
    console.log(nomes)
})
const nOmes = ['joao','joao','joao','joao',]
//functon callback externo: 
function imprimeNome(nome){
    console.log(nome)
}
nOmes.forEach(imprimeNome)


