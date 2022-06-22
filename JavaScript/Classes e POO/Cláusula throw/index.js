class SpaceshipWeapon {
    constructor(indentifier) {
        this.indentifier = indentifier
        this.shotsLeft = 5
    }

    shoot() {
        if(this.shotsLeft > 0) {
        console.log("Bang!")
        this.shotsLeft -= 1
        } else {
            throw new Error("Arma " + this.indentifier + " sem munição")
        }
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)
