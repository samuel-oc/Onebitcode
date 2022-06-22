let level = 60

switch(level) {
    case 100: 
        console.log("Bonus de 10% no drop de gold")        
    case 90:      
        console.log("Bonus de +5% em todas as skills")
    case 80:       
        console.log("Bonus de 5% na regerenação de HP e de MP")
    case 70:
        console.log("Bonus de 5% ao cozinhar")
    case 60:
        console.log("Bonus de 5% ao pescar")
    case 50:
        console.log("Bonus de 5% ao cortar lenha")
    case 40:
        console.log("Bonus de 5% ao minerar")
    case 30:
        console.log("Bonus de 5% na defesa")        
    case 20:
        console.log("Bonus de 5% de Velocidade")        
    case 10:
        console.log("Bonus de 5% de Ataque")        
    case 5:
        console.log("Aumento de 10% do HP")
        break
    default:
        console.log("Level não encontrado")
        break
}
