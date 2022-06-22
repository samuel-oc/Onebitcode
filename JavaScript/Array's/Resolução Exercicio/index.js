const hitchedSpaceships = [
    /* Nome, Tripulantes, engate */
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Daewin", 15, false]
]

/* Filtrar o nome das naves que tem mais que 9 tripulantes */
let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})
/* Informar o numero da plataforma em que está a primeira nave que ainda está com engate pendete */
let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})
/* Destacar o nome de todas as naves colocando-as em caixa alta e exibindo */
let highligthedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let menssage = "Epaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
menssage += "\nPlataform com processo de engate: " + (ongoingHitchPlatform +1)
menssage += "\nEspaçonaves destacadas: " + highligthedSpaceships.join(", ")

alert(menssage)