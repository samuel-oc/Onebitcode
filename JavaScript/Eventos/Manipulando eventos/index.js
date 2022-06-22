function doChange() {
    alert(event.target.value)
}

/*
* Seleciona o input e armazena na variavel
let sampleInput = document.querySelector("input[name='sample-input']") 
// Adiciona o evento doChange no input
sampleInput.addEventListener("change", doChange)
//cria o objeto event o parametro do construtor é o nome do evento que deseja criar
let changeEvent = new Event("change")
// Dispara o evento de forma dinamica
sampleInput.dispatchEvent(changeEvent)
// Remove o evento do input
sampleInput.removeEventListener("change", doChange)
*/