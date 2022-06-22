const hitchedSpaceships = [
    /* Nome, Tripulantes, engate */
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Daewin", 15, false]
]
/* Filtrar o nome das naves que tem mais que 9 tripulantes */
function tripulantesNaves() {
    let naves = []
    for (let i = 0; i < hitchedSpaceships.length; i++) {
        if (hitchedSpaceships[i][1] > 9) {
            naves.push(hitchedSpaceships[i][0])
        }
    }
    return naves
}
/* Informar o numero da plataforma em que está a primeira nave que ainda está com engate pendete */
function pendingHitched() {
    let pendingSpaceship = []
    for (let i = 0; i < hitchedSpaceships.length; i++) {
        pendingSpaceship.push(hitchedSpaceships[i][2])
    }
    let navePendente = pendingSpaceship.indexOf(false)
    return navePendente + 1
}
/* Destacar o nome de todas as naves colocando-as em caixa alta e exibindo */
function capsLock() {
    let spaceshipsNames = []
    for (let i = 0; i < hitchedSpaceships.length; i++) {
        spaceshipsNames.push(hitchedSpaceships[i][0].toUpperCase())
    }
    return spaceshipsNames
}

/* Exibir um alerta com todas estas informações */
alert("Naves com tripulação maior que nove: " + tripulantesNaves().join(' - ') +
    "\nA Plataforma " + pendingHitched() + " ainda está com o engate pendente" +
    "\nNaves: " + capsLock().join(' - '))