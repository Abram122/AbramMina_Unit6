const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const send = document.getElementById('send')
const nameValidation = /^[a-zA-Z]+$/
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
send.onclick = (e)=>{
    e.preventDefault()
    if(nameValidation.test(name.value) && emailValidation.test(email.value) && message.value){
        alert("Submitted Successfully")
        name.value = ""
        email.value = ""
        message.value = ""
    }else{
        alert("you should enter all fields and should be valid")
    }
}
