//Padronizar uma lista de array para letras maiusculas:
const nomes = ['suzana','robertão','carlão']
const nomesPadrao = nomes.map((nome)=>{
    return nome.toLocaleUpperCase()
})
console.log(nomesPadrao)