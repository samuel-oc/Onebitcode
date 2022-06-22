/*
* Pesquisar sobre funções
    createElement
    setAttribute
    removeChild
    parentNode
*/

/* function addCasa() {
    var novaLinha = document.createElement("tr")
    var novaColuna = novaLinha.document.createElement("td")

    // Pegar os campos de input
    let inputs = document.querySelectorAll("div#cadastro input")
    var numero = inputs[0].value
    var bairro = inputs[1].value
    var cidade = inputs[2].value
    var areaCasa = inputs[3].value
    console.log(numero + " " + bairro + " " + cidade + " " + areaCasa)

    novaLinha.appendChild(numero)
    novaLinha.appendChild(bairro)
    novaLinha.appendChild(cidade)
    novaLinha.appendChild(areaCasa)

    const lista = document.getElementById("lista")
    for (let i = 0; i < 4; i++) {
        lista.insertBefore(novaLinha, novaLinha.children[i])
    }
} */


function addCasa() {
    const lista = document.getElementById("lista")
    let novaLinhaPossition = lista.children.length + 1
    var novaLinha = document.createElement("p")  //Crio o elemento P
    let inputs = document.querySelectorAll("div#cadastro input") //Seleciono todos os input's dentro da div id adastro
    var Logradouro = inputs[0].value
    var numero = inputs[1].value
    var bairro = inputs[2].value
    var cidade = inputs[3].value
    var areaCasa = inputs[4].value
    let conteudo = document.createTextNode(Logradouro + " Nº " + numero + " Bairro: " + bairro + " Cidade: " + cidade + " Área da casa: " + areaCasa)
    
    let id = "id" + novaLinhaPossition
    
    novaLinha.setAttribute("id", id)
    novaLinha.appendChild(conteudo)

    

    var button = document.createElement("input")
    button.setAttribute("onclick", "removeCasa(this)")  
    button.setAttribute("type", "submit")  
    button.setAttribute("value", "Remover")    
    button.setAttribute("id", id)    
    document.body.appendChild(button)     
    
    lista.insertBefore(novaLinha, novaLinha.children[0]) 
    

    const botao = document.getElementById(id)
    botao.insertBefore(button, button.children[0])
   
}

function removeCasa(elemento) {       
    let element = document.getElementById(elemento.id)
    element.remove()
 
}





/*
    // Retornar o nome da tag que esta acima da citada 
    let elemento = document.getElementById("paragrafo").parentNode.nodeName
    console.log(elemento)
*/

/*
    // Muda o atributo valor do elemento selecionado
    let element = document.querySelector("input")
    element.setAttribute("value", 100)    
*/

/* 
    // Remove o primeiro elemento de uma lista
    const element = document.getElementById("lista")
    element.removeChild(element.firstElementChild)    
*/

/*
    // Cria em qualquer lugar
    var divNova = document.createElement("li")
    var conteudo = document.createTextNode("Computador")
    document.body.appendChild(conteudo)

*/

/*
    // Cria dentro de um elemento
    var divNova = document.createElement("li")
    var conteudo = document.createTextNode("Computador")
    document.getElementById("lista").appendChild(conteudo)
*/


/*
    // Cria o novo elemento dentro do li
    var divNova = document.createElement("li") 
    var conteudo = document.createTextNode("Computador")   
    divNova.appendChild(conteudo)

    const lista = document.getElementById("lista")
    lista.insertBefore(divNova, divNova.children[0])

*/