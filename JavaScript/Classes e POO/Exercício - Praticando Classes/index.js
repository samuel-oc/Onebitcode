/*
    * Lista de naves engatadas
    * Cada nave possui: Nome, Quantidade de tripulantes, engatada(true or false), Portas de entradas(Abertas ou Fechadas)
    * Menu (1 - Realizar engate -> nessa opção cadastrar a nave com o nome e o numero de tripulantes, apos o cadastro engatar 
        a nave, quando a nave é engatada suas portas sao abertas.
        2 - Imprimir as Naves com um alert e 3 - Sair do programa
    * Criar apenas a classe para a espaçonave
        deve ter um metodo para engatar a nave
    * Criar um array para armazenar as espaçonaves
    * O programa deve ser encerrado somente quando o usuario digitar a opção para sair
        Se digitar opção invalida, mostre o menu novamente
*/

class spaceship {
    constructor(nome, quantTripulantes) {
        this.nome = nome
        this.quantTripulantes = quantTripulantes
        this.engatada = false
        this.portasAbertas = false
    }
    //Metodo
    engatar() {
        this.engatada = true
    }
    abrirPortas() {
        this.portasAbertas = true
    }

}

let navesEngatadas = []
let nomesNave = []

function listarNaves() {
    navesEngatadas.forEach(function (naves, index) {
        nomesNave += index + 1 + " - " + naves.nome + " (" + naves.quantTripulantes + "Tripulantes)\n"
    })
    return nomesNave
}

function engatarNave() {
    let nome = prompt("Qual o nome da nave ?")
    let quantTripulantes = prompt("Quantos tripulantes cabe na nave ?")
    let novaNave = new spaceship(nome, quantTripulantes)
    novaNave.abrirPortas()
    novaNave.engatar()
    navesEngatadas.push(novaNave)
    console.log("Nome: " + novaNave.nome + "\nTripulantes: " + novaNave.quantTripulantes +
        "\nEngate: " + novaNave.engatada + "\nPortas Abertas: " + novaNave.portasAbertas)
}


function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja: \n1 - Realizar Engate \n2 - Imprimir Naves \n3 - Sair")
        switch (chosenOption) {
            case "1":
                engatarNave()
                break
            case "2":
                alert(listarNaves().concat(" "))
                break
            case "3":
                break
            default:
                break
        }
    } while (chosenOption != "3")
}

console.log(navesEngatadas)
showMenu()