let entradaDataPartida = prompt("Digite a data de partida (ultilize o formado DD/MM/YYYY)")

let dataPartida = moment(entradaDataPartida, "DD/MM/YYYY")

let hoje = moment()

let diffData = hoje - dataPartida

let opcao = prompt("Escolha a opção para exibir o tempo de partida\n 1 - Segundos\n 2 - Minutos\n 3 - Horas\n 4 - Dias")

if(opcao == "1"){
    let segundos =  Math.round(diffData / 1000)
    alert("O tempo de vôo: " + segundos + " segundos")
} else if(opcao == "2"){
    let minutos =  Math.round(diffData / 1000 / 60)
    alert("O tempo de vôo: " + minutos + " minutos")
} else if(opcao == "3"){
    let horas =  Math.round(diffData / 1000 / 3600)
    alert("O tempo de vôo: " + horas + " horas")
} else if(opcao == "4"){
    let dias =  Math.round(diffData / 1000 / 3600 / 24)
    alert("O tempo de vôo: " + dias + " dias")
} else {
    alert("Opção inválida")
}