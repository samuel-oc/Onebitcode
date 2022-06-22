let nomeEspaconave = prompt("Qual o nome da Espaçonave ?")
let substituirCaractere = prompt("Qual caractere deseja substituir ?")
let novoCaractere = prompt("Por qual caractere deseja substituir ?")
let novoNome = ""

for (let i = 0; i < nomeEspaconave.length; i++)
{
   if(nomeEspaconave[i] == substituirCaractere)
   {
     novoNome += novoCaractere
   }else {
       novoNome += nomeEspaconave[i]
   }
}

alert(novoNome)