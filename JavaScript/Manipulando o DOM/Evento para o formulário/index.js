function save() {
    event.preventDefault() //Não deixa a página recarregar
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " + name + "\nLinguagem de Programação: " + programmingLang)
}