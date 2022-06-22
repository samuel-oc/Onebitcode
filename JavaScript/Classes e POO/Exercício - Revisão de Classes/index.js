/*
    ~Sistema de monitoramento de uma nave espacial~

    logo que for iniciado pedir dados da nave.
        Nome, Quantidade de Tripulantes
    As naves podem ser de Batalha ou de Transporte
    Caso seja de Batalha pedir quantas armas disponiveis a nave tem
    Caso seja de Transporte pedir o numero de lugares que ela comporta
    Velocidade = 0
    Menu -> 
             1 - Acelerar a nave
             2 - Trocar a nave
             3 - Imprimir e sair
    Para acelerar é necessario pedir a aceleração
        A velocidade deve aumentar 83% da aceleração
        taxa de desaceleração é de 17%
        -> Velocidade atual + (aceleração*(1-taxa de desaceleração))
    Para trocar a nave todos os dados de cadastro serão solicitados novamente
    Impressão 
        Nome: 
        Quantidade de tripulantes:
        Velocidade atual:
*/

class nave {
    constructor(nome, QuantTripulantes) {
        this.nome = nome
        this.QuantTripulantes = QuantTripulantes
        this.velocity = 0
    }
    speedUP(acceleration) {
        let taxaDesaceleracao = 0.17
        this.velocity += (acceleration * (1 - taxaDesaceleracao))   
    }
}

class naveBatalha extends nave {
    constructor(nome, QuantTripulantes, QuantArmas) {
        super(nome, QuantTripulantes)
        this.QuantArmas = QuantArmas
    }
}

class naveTransporte extends nave {
    constructor(nome, QuantTripulantes, Quantlugares) {
        super(nome, QuantTripulantes)
        this.Quantlugares = Quantlugares
    }
}
let novaNave

function createSpaceship() {
    let naveNome = prompt("Qual o nome da nave ?")
    let naveQuantTripulantes = prompt("Qual a quantidade de tripulantes ?")
    let naveTipo = prompt("Qual o tipo da nave ? \n1 - Batalha \n2 - Transporte")
    let novaNave  
    switch (naveTipo) {
        case "1":
            let naveQuantArmas = prompt("Qual a quantidade de armas disponivel na nave ?")
            novaNave = new naveBatalha(naveNome, naveQuantTripulantes, naveQuantArmas)
            break
        case "2":
            let naveQuantLugares = prompt("Qual a quantidade de lugares disponiveis na nave ?")
            novaNave = new naveTransporte(naveNome, naveQuantTripulantes, naveQuantLugares)
            break
        default:
            alert("Opção invalida!")
            createSpaceship()
            break
    }    
    return novaNave
}

novaNave = createSpaceship()
showMenu()


function showMenu() {    
    let chosenOption  
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("O que deseja fazer ?" +
            "\n1 - Acelerar a nave" +
            "\n2 - Trocar a nave" +
            "\n3 - Imprimir e sair")
        switch (chosenOption) {
            case "1":
                let acceleration = prompt("Qual a aceleração desejada ?")
                novaNave.speedUP(acceleration)
                showMenu()
                break
            case "2":
                let trocarNave = prompt("Deseja trocar a nave, todos os dados desta nave serão perdidos." +
                    "\n1 - Trocar a nave" +
                    "\n2 - Cancelar troca de nave")
                if (trocarNave == "1") {
                    createSpaceship()
                } else {
                    showMenu()
                }
                break
            case "3":
                alert("Nome: " + novaNave.nome +
                    "\nQuantidade de tripulantes: " + novaNave.QuantTripulantes +
                    "\nVelocidade atual: " + novaNave.velocity)
                break
            default:
                showMenu()
                break
        }
    }
}


console.log("Nome: " + novaNave.nome +
    "\nQuantidade de tripulantes: " + novaNave.QuantTripulantes +
    "\nVelocidade atual: " + novaNave.velocity)