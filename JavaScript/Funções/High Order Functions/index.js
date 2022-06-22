function doubleVelocity(velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = velocity * 2 
    printer(newVelocity)
    return newVelocity
}

//Jeito Comum
/* let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + "km/s")
}

let newVelocity = doubleVelocity(80, printVelocity)
console.log(newVelocity) */


//Simplificado
/* let anotherVelocity = doubleVelocity(100, function(velocity) {
    console.log("Outra velocidade: " + velocity)
}) */

//Mais Simplificado
let anotherVelocity = doubleVelocity(50, velocity => {
    console.log("Outra velocidade: " + velocity)
})