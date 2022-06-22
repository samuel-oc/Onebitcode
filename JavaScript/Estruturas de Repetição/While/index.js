/* let nomeNave = prompt("Qual o nome da nava ?")
let dobra = 0
let entrarDobra = prompt("Deseja entrar em dobra espacial ? \n\nOpções: \n\n1 - Sim \n2 - Não")

if(entrarDobra == 1) {
    dobra += 1

    let proximaDobra = prompt("Deseja entrar na proxima dobra espacial ? \n\nOpções: \n\n1 - Sim \n2 - Não")
    while (proximaDobra == 1)
    {
        dobra +=1
        proximaDobra = prompt("Deseja entrar na proxima dobra espacial ? \n\nOpções: \n\n1 - Sim \n2 - Não")
    }
}

alert("A nave " + nomeNave + " Realizou " + dobra + " dobra(s) espaciais")
 */

let nomeNave = prompt("Qual o nome da nava ?")
let dobra = 0
let entrarDobra = prompt("Deseja entrar em dobra espacial ? \n\nOpções: \n\n1 - Sim \n2 - Não")

while(entrarDobra == 1) {
    dobra += 1
    entrarDobra = prompt("Deseja entrar na proxima dobra espacial ? \n\nOpções: \n\n1 - Sim \n2 - Não")
}

alert("A nave " + nomeNave + " Realizou " + dobra + " dobra(s) espaciais")
