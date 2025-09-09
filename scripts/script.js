const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const errors_message = document.getElementById('errors_message');

form.addEventListener("submit", function(event) {
    event.preventDefault();  

     
    errors_message.innerText = "";

    if(firstname_input.value.trim() === "" && email_input.value.trim() === "" && password_input.value.trim() === "" && repeat_password_input.value.trim() === ""){
        errors_message.innerText = "Type the camps";
        return;  
    }

     if (firstname_input.value.trim() === "") {
        errors_message.innerText = "Type your first name";
        return;  
    }

    if (email_input.value.trim() === "") {
        errors_message.innerText = "Type your email";
        return;
    }

    if (password_input.value.trim() === "") {
        errors_message.innerText = "Type your password";
        return;
    }

    if (repeat_password_input.value.trim() === "") {
        errors_message.innerText = "Type the same password";
        return;
    }

    if (password_input.value !== repeat_password_input.value) {
        errors_message.innerText = "Passwords are not the same!";
        return;
    }

    const user = {
        email: email_input.value.trim(),
        password: password_input.value.trim()
    }

    localStorage.setItem("user", JSON.stringify(user))
    alert("Cadastro realizado com sucesso")

    window.location.href = "login.html";


    console.log("Formulário válido!");
});




// function Submit() {
//     alert("AAA")
//     // e.preventDefault();
//     let errors = [];

//     if(firstname_input){
//         errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value )
//     } else {
//         errors = getSigninFormErrors(email_input.value, password_input.value )
//     }

//     if(errors.length > 0){
//         event.preventDefault();
//         errors_message.innerText = errors.join('. ')

//     }
// }

// function getSignupFormErrors(firstname, email, password, repeatPassword){
//      let errors = [];
//      if(firstname === '' || firstname == null){
//         errors.push("Firstname is required")
//         firstname_input.parentElement.classList.add('incorrect')
//      }
//      if(email === '' || email == null){
//         errors.push("Email is required")
//         email_input.parentElement.classList.add('incorrect')
//      }
//      if(password === '' || password == null){
//         errors.push("Password is required")
//         password_input.parentElement.classList.add('incorrect')
//      }
//      if(password !== repeatPassword){
//         errors.push("Password does not match repeated password")
//                 password_input.parentElement.classList.add('incorrect')
//         repeat_password_input.parentElement.classList.add('incorrect')

//      }
//      return errors;
// }

// const allInputs =[ firstname_input, email_input, password_input, repeat_password_input]

// allInputs.forEach(input =>{
//     input.addEventListener('input', () => {
//         if(input.parentElement.classList.contains('incorrect')){
//             input.parentElement.classList.remove('incorrect')
//                 errors_message.innerText = ''
//         }
//     })
// })