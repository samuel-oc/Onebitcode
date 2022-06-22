function cadastrarImovel () {
    event.preventDefault()
    let tipo = document.querySelector("input[name='tipo']:checked").value
    let area = document.querySelector("input[name='area']").value
    let status = document.querySelector("input[name='status']:checked").value
    let imovel = new Imovel(tipo, area, status)
    
    let id = Math.random()
  
    let linha = document.createElement("tr")
    linha.setAttribute("id", id)
    let coluna1 = document.createElement("td")
    let coluna2 = document.createElement("td")
    let coluna3 = document.createElement("td")
    let coluna4 = document.createElement("td")
    let colunaStatus = imovel.status
    let colunaTipo = imovel.tipo
    let colunaArea = imovel.area

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "excluirImovel(this)")
    removeButton.setAttribute("id", id)

    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    linha.appendChild(coluna3)
    linha.appendChild(coluna4)
    if(status == "Alugado") {
        coluna1.style.backgroundColor = "red"
        coluna1.style.color = "white"
    }
    coluna1.innerText = colunaStatus
    coluna2.innerText = colunaTipo
    coluna3.innerText = colunaArea
    coluna4.appendChild(removeButton)    
    
    document.getElementById("tabela").appendChild(linha)



    console.log(id)
    
}

function excluirImovel (button) {
    
    let id = button.id
    document.getElementById(id).remove()
        
    
    
}

