
let velocity = 0


let pilotName = prompt("Qual o seu nome ?")
let desiredVelocity = prompt(pilotName + " em qual velocidade deseja ir ?")
let confirmVelocity = confirm("Realmente deseja ir a " + desiredVelocity + " ?")

if(confirmVelocity){
    velocity = desiredVelocity
}

if(velocity <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity < 80){
    alert("Parece uma boa velocidade para manter")
} else if (velocity < 100){
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automatico forçado")
}

alert("Piloto " + pilotName + "\nEsta na velocidade de " + velocity)

