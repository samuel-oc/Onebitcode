class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity) {
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos à nave.")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class DiscoveySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de descoberta")
    }
}

let darwin = new DiscoveySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darwin)
console.log(fenix)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()
