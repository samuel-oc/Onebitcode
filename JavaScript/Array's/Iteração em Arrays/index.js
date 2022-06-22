let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

/* hitchedSpaceships.forEach(function(currentSpaceship, index){
    console.log("Nave: " + currentSpaceship + "\nIndice: " + index)
}) */

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

alert(upcasedSpaceships)