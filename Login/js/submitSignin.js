console.log('login_btn js');
let logInForm = document.getElementById('login-form');
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

logInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    link = `https://polar-hollows-67198.herokuapp.com/api/v1/users?username=${username}&password=${password}`;
    let params = {username: username, password: password}

    fetch(link, {
        method: 'POST',
        body: JSON.stringify(params)
    })
    .then(async (response_data) => {
        if (response_data.ok) {
            response_data = await response_data.json()
            console.log(response_data)
            location.href = '../Home/home.html';
        } else {
            alert('Wrong account');
        }
    }).catch(error => console.log('Connection error', error))
});