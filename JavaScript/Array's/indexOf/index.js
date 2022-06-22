//Procurar inteiro em array
let numeros = [5, 10, 15]
console.log(numeros.indexOf(10))

//Procurar string dentro de um array de strings
let frutas = ['Pera', 'Laranja', 'Maça']
console.log(frutas.indexOf("Laranja"))

//Procurando uma string dentro de outra 
let texto = "um texto para teste"
console.log(texto.indexOf("teste"))

//Procurando uma string dentro de outra a partir da tal posição
let texto2 = "um texto para teste, vamos ver se o teste da certo"
console.log(texto2.indexOf("teste", 15))

let filtro = "A"
let cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo']
let coresFiltradas = cores.filter( (cor) => {
    if(cor.indexOf(filtro) !== -1){
        return cor
    }
})
console.log(coresFiltradas)