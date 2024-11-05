
//  Get and Trigger Form Event

let form = document.getElementById("form-id");
let trigger = document.getElementById('errormessage-validation');


form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    validateAndRedirect();
});

// Validate Login credencials and redirect to Logged Page

function validateAndRedirect() {
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexPassword = /.{8,}/;
    let email = document.getElementById('login-input-email');
    let password = document.getElementById('login-input-password');

    let errormessage = document.getElementById('errormessage-validation');

    

    if (email.value == "" && password.value == "") {
        errormessage.innerHTML = '<span>Todos os compos são obrigatórios</span>';
        errormessage.style.color = '#E70000';
        return; 
    }

    if (!regexEmail.test(email.value)) {
        errormessage.innerHTML = '<span>Email ou senha inválido</span>';
        errormessage.style.color = '#E70000';
        return; 
    }

    if (!regexPassword.test(password.value)) {
        errormessage.innerHTML = '<span>Sua senha deve ter no minimo 8 caracteres</span>';
        errormessage.style.color = '#E70000';
        return; 
    }

    errormessage.innerHTML = '<span>Dados Ok</span>'; 
    errormessage.style.color = '#00E749';

    setInterval( () => {
    window.location.href = "/pages/logged_page.html"; 
    },1200)
    
}