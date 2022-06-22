class spaceship {
    constructor(name, type, Maxvelocity, origin) {
        this.name = name
        this.type = type
        this.Maxvelocity = Maxvelocity
        this.origin = origin
        this.velocity = 0
    }
    //Metodos
    speedUP(acceleration) {
        if (this.velocity < this.Maxvelocity && acceleration <= this.Maxvelocity) {
            this.velocity += acceleration
        } else {
            console.log("Você não pode exceder a velocidade Máxima")
        }
    }
}

let Fenix = new spaceship("Fenix", "Batalaha", 50, "Brasileira")


Fenix.speedUP(800)
console.log(Fenix.name)
console.log(Fenix)
