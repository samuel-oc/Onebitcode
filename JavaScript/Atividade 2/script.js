/* <ul>
        <li>Pedir o nome da pessoa mais velha</li>
        <li>Pedir a idade da pessoa mais velha</li>
        <li>Pedir o nome da pessoa mais nova</li>
        <li>Pedir a idade da pessoa mais nova</li>
        <li>Calcuçar a diferença de idade</li>
        <li>Exibir o nome da pessoa mais velha e sua idade</li>
        <li>Exibir o nome da pessoa mais nova e sua idade</li>        
        <li>Exibir a diferença de idade</li>        
    </ul> */


let nomePessoaMaisVelha = prompt("Qual o seu nome ?")
let idadePessoaMaisVelha = prompt("Qual a sua idade ?")
let nomePessoaMaisNova = prompt("Qual o seu nome ?")
let idadePessoaMaisNova = prompt("Qual a sua idade ?")

let diferencaIdade = idadePessoaMaisVelha - idadePessoaMaisNova

/* alert("A pessoa mais velha é: " + nomePessoaMaisVelha + " ela tem: " + idadePessoaMaisVelha + " anos")
alert("A pessoa mais nova é: " + nomePessoaMaisNova + " ela tem: " + idadePessoaMaisNova + " anos")
alert("A diferença de idade entre elas é de : " + diferencaIdade) */

alert("A pessoa mais velha é: " + nomePessoaMaisVelha + " ela tem: " + idadePessoaMaisVelha + " anos\n" + 
"A pessoa mais nova é: " + nomePessoaMaisNova + " ela tem: " + idadePessoaMaisNova + " anos\n" + 
"A diferença de idade entre elas é de : " + diferencaIdade)
