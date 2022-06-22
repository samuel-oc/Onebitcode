let nameSpaceship = prompt("Digite o nome da nave")
let typeSpaceship = prompt("Digite o tipo da nave")
let maxVelSpaceship = prompt("Digite a velocidade máxima da nave")
let velocitySpaceship = 0
let nave = {
    name: nameSpaceship,
    type: typeSpaceship,
    velocity: velocitySpaceship,
    maxVel: maxVelSpaceship,
    speedUP: function(aceleration) {        
        velocidade = this.velocity + aceleration
        if(velocidade > this.maxVel) {
            alert("A nave não pode acelerar tudo isso")
            menu()
        } else {
            this.velocity = velocidade
            alert("A velocidade da nave agora é: " + this.velocity)
            menu()
        }
    },
    stop: function() {
        alert("Nome da nave: " + this.name + 
              "\nTipo da nave: " + this.type +
              "\nUltima velocidade: " + this.velocity)
              this.velocity = 0
    }
}

menu()

function menu () {
    let menu = prompt("Digite uma opção: \n1 - Acelerar \n2 - Parar")
    let escolha = parseInt(menu)

    switch(escolha) {
        case 1:
            let aceleration = prompt("Digite a velocidade que deseja acelerar")
            aceleration = parseInt(aceleration)
            nave.speedUP(aceleration)            
            break
        case 2:
            nave.stop()
            break
        default:
            alert("Escolha uma opção valida")
            break
    }
}
