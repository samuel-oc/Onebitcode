/* Criar um programa de bordo para nave

1 - Receber o nome da nave
2 - Velocidade inicial = 0
3 - Exibir menu
    a - Acelerar nave em 5km/s
    b - Desacelerar em 5km/s (a velocidade não pode ser negativa)
    c - Imprimir dados de bordo (nome da nave e velocidade atual)
    d - Sair do programa 
4 - Criar um função que exiba o menu e valide a opção escolhida
5 - Criar uma função para cada ação do menu de acelerar
6 - Encerrar o app somente quando digitar sair

    - Caso a pessoa escolha um numero invalido, exibi o menu novamente 
 */


let naveName = prompt("Qual o nome da nave ?")
let velocity = 0
menu()




function menu() {
    let option = prompt("Escolha uma opção: " + "\n 1 - Acelerar nave em 5km/s" + "\n 2 - Desacelerar em 5km/s" + "\n 3 - Visualizar dados da nave" + "\n 4 - Sair")

    switch (option) {
        case "1":
            alert("Nova velocidade: " + speedUp(velocity))
            velocity = speedUp(velocity)
            menu()
            break
        case "2":
            alert("Nova velocidade: " + speedDown(velocity))
            velocity = speedDown(velocity)
            menu()
            break
        case "3":
            alert("O nome da nave é : " + naveName + "\nVelocidade Atual : " + velocity)
            menu()
            break
        case "4":
            break
        default:
            menu()
            break
    }
}

function speedUp(velocity) {
    velocity += 5
    return velocity
}

function speedDown(velocity) {
    if (velocity >= 5) {
        velocity -= 5
    } else {
        alert("A nave já esta parada!")
    }

    return velocity
}