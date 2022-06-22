let distanciaAnosLuz = prompt("Informe a distancia em Anos-luz")
let opcao = prompt("Para qual unidade deseja converter ?\n 1 - Parsec(pc)\n 2 - Unidade astronômica(AU)\n 3 - Quilômetros(km)" +
                    "\n\n Digite a opção escolhida")

let pc = distanciaAnosLuz * 0.306601
let au = distanciaAnosLuz * 63241.1
let km = distanciaAnosLuz * 9.5 * Math.pow(10,12)

switch(opcao) {
    case "1":
        alert("Distância em Anos-luz: " + distanciaAnosLuz +
        "\n Parsec(pc): " + pc)
        break
    case "2":
        alert("Distância em Anos-luz: " + distanciaAnosLuz +
        "\n Unidade astronômica(AU): " + au)
        break
    case "3":
        alert("Distância em Anos-luz: " + distanciaAnosLuz +
        "\n Quilômentros(km): " + km)
        break
    default:
        alert("Distância em Anos-luz: " + distanciaAnosLuz +
        "\n Unidade não indentificada: conversão fora do escopo")
        break
}