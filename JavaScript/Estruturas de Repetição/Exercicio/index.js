let nomeNave = prompt("Qual o nome da nave ?")
let novoNome = ""
let forbidden = "e" 



for (let i = nomeNave.length - 1; i >= 0; i--) {
    if (nomeNave[i] == forbidden) {
        break
    } else {
        novoNome += nomeNave[i]
        console.log(nomeNave[i])
    }
}

alert("Nome Original da Nave: " + nomeNave + "\n Nome após ocultação: " + novoNome)
