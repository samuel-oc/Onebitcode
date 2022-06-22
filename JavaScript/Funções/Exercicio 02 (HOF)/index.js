let menu = prompt("O que deseja fazer ? \n1 - Acelerar a Nave \n2 - Desacelerar a Nave \n3 - Exibir velocidade atual")
let newVelocity
let startVelocity = 600
let currentVelocity

function menu() {
    switch (menu) {
        case "1":
            newVelocity = prompt("Qual a velocidade desejada ?")
            currentVelocity = speedUp(startVelocity, velocity => {
                console.log("Velocidade da nave: " + velocity)
            })
            break
        case "2":
            newVelocity = prompt("Qual a velocidade desejada ?")
            currentVelocity = slowDown(startVelocity, velocity => {
                console.log("Velocidade da nave: " + velocity)
            })
            break
        case "3":
            console.log("Velocidade Atual: " + velocity)
            break
        default:
            alert("escolha uma opção valida!")
    }
}


function slowDown(velocity, printer) {
    if (startVelocity == 0) {
        console.log("A nave já esta parada!")
    }

    while (velocity > newVelocity) {
        printer(velocity)
        velocity -= 20
        if (velocity < 0) {
            velocity = newVelocity
        }
    }


    if (velocity == 0) {
        console.log("A nave esta parada. As comportas podem ser abertas.")
    }
}

function speedUp(velocity, printer) {
    while (velocity < newVelocity) {
        printer(velocity)
        velocity += 20
    }
    if (velocity != newVelocity) {
        velocity = newVelocity
    }
    console.log("A nave chegou a " + velocity + "km/s")
}









