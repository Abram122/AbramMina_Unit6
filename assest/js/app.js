const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const messageError = document.getElementById('message-error')
const send = document.getElementById('send')
const nameValidation = /^[a-zA-Z]+$/
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
send.onclick = (e)=>{
    e.preventDefault()
    if(!nameValidation.test(name.value)){
        nameError.innerHTML = "please enter valid User Name"
    }
    if(!emailValidation.test(email.value)){
        emailError.innerHTML = "please enter valid Email"
    }
    if(!message.value){
        messageError.innerHTML = "please enter the message that can describe your problem to be able to help you"
    }
    if(nameValidation.test(name.value) && emailValidation.test(email.value) && message.value){
        alert("Submitted Successfully")
        name.value = ""
        email.value = ""
        message.value = ""
        nameError.innerHTML = ""
        emailError.innerHTML = ""
        messageError.innerHTML = ""
    }
}
