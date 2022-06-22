/* 
-> Declarando Objetos
    let spaceship = new Object() 
    let spaceship = {}
    let spaceship = {
        name: "Fenix",
        crewQuantity: 7,
        type: "Batalha"
    }
-> podemos declarar objetos da seguinte forma também
    let spacialStation = {
        name: "Fox",
        platformQuantity: 10,
        "new Name": "Estrelar",
        true: false,
        2: "Descoberta"
    } 
    * Para chamar os objetos -> console.log(spacialStation["new name"]) - console.log(spacialStation["2"])
-> Adicionando Propiedades
    spaceship.isHitched = false
    spaceship["shieldLevel"] = 100
-> chamando o Objeto
    console.log(spaceship)    
    console.log(spaceship.name)    
    console.log(spaceship["name"])    
 */

let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

spaceship.isHitched = false
spaceship["shieldLevel"] = 100


console.log(spaceship["name"])


