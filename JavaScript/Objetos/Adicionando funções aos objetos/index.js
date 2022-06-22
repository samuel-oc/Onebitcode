let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
        alert(this.name)
    }
}

spaceship.velocity = 0
spaceship.speedUP = function(accleration) {
    this.velocity += accleration
}

console.log(spaceship)

spaceship.speedUP(10)

console.log(spaceship)

spaceship.turnOn()