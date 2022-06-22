/* Array dentro de um Objeto 
let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"]
}

//Adicionando item no Array
spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)
*/

/* Objeto dentro de um Array 
let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15},
]

//Chamando o Objeto dentro do Array
//console.log(spaceships[0].crewQuantity)

//percorrendo o array
spaceships.forEach(spaceship => {
    alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes.")
})
*/

/* Objeto dentro de outro Objeto */
let spaceship = {
    name: "Wolf",
    maxCrew: 20,
    captain: {
        name:"Samuel Oliver",
        age: 28,
        family: {
            wife: {
                name: "Alice Porto",
                age: 25
            },
            daughter: {
                name: "Anny Sophie",
                age: 9
            }
        }
    }
}

console.log(spaceship.captain.name)
console.log(spaceship.captain.family.wife.name)
console.log(spaceship.captain.family.daughter.name)