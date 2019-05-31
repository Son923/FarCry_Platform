console.log('login_btn js');

let requiredInputs = document.getElementsByClassName('require');
Array.prototype.forEach.call(requiredInputs, function(requiredInput){
    requiredInput.addEventListener('blur', () => {
        let loginForm = document.getElementById('login-form');
        let isFormValidate = loginForm.checkValidity();
        let loginBtn = document.getElementById('login-submit');
        if (isFormValidate) {
            loginBtn.removeAttribute("disabled");
        } else {
            loginBtn.setAttribute('disabled', 'disabled');
        }
    })
});
