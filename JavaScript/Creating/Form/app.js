function showMessage(input, message, type){
    let msg = input.parentNode.querySelector("small")
    msg.innerText = message;
    input.className = type? 'success' : 'error';
    return type;
}

function showError(input, message){
    return showMessage(input,message,false)
}

function showSuccess(input){
    return showMessage(input, "", true);
}

function hasValue(input, message){
    if(input.value.trim() === ""){
        return showError(input, message)
    }
    return showSuccess(input)
}

function validateEmail(input, noValue, invalidValue){
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!hasValue(input, noValue)){
        return false;
    }
    let email = input.value.trim()
    if(!validEmail.test(email)){
        return showError(input, invalidValue)
    }
    return true;
}
let form = document.querySelector('form');
let name_requered = 'enter your Name!'
let email_requered = 'enter your Email!'
let email_NotValid = "enter your correct Email!" 

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nameValue = hasValue(form.elements["name"], name_requered);
    let emailValue = validateEmail(form.elements["email"],email_requered, email_NotValid);
    if(emailValue && nameValue){
        alert("THis is correct hurrahhh")
    }
})
