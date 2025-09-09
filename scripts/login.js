const formLogin = document.getElementById('form');
const emailLogin = document.getElementById('email-input');
const passwordLogin = document.getElementById('password-input');
const errors_message = document.getElementById('errors_message');

formLogin.addEventListener("submit", function(event){
    event.preventDefault()
    errors_message.innerText = "";

    const user = JSON.parse(localStorage.getItem("user"));

    console.log(user)
    if (emailLogin.value.trim() === "" || passwordLogin.value.trim() === "") {
        errors_message.innerText = "Fill all the fields!";
        return;
    }

    if(emailLogin.value != user.email){
        errors_message.innerText = "Email not found";
    }

    if(passwordLogin.value != user.password){
        errors_message.innerText = "Password not found";
    }

    if((passwordLogin.value != user.password) && (emailLogin.value != user.email)){
        errors_message.innerText = "User not found! Sign up!";
    }

    alert("Login realizado com sucesso!")
    window.location.href = "/login.html";

 })