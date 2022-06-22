function addNewPhone() {
    const phoneForm = document.querySelector("form#phones")
    const newPhone = phoneForm.children[0].cloneNode(true) //Clona o elemento
    const phonePosition = phoneForm.children.length + 1   
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    newPhone.querySelector("input").value = "" 
    phoneForm.appendChild(newPhone) //Adiciona o novo elemento ao DOM
    console.log(phoneForm.children)
}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    alert(message)
}