console.log('submitRegister');
let signUpForm = document.getElementById('signup-form');
let requiredInputs = document.getElementsByClassName('require');

Array.prototype.forEach.call(requiredInputs, function(requiredInput){
    requiredInput.addEventListener('blur', () => {
        let signUpForm = document.getElementById('signup-form');
        let isFormValidate = signUpForm.checkValidity();
        let RegisterBtn = document.getElementById('register-submit');
        if (isFormValidate) {
            RegisterBtn.removeAttribute("disabled");
        } else {
            RegisterBtn.setAttribute('disabled', 'disabled');
        }
    })
});


signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password1 = document.getElementById('password1').value;
    let email = document.getElementById('email').value;

    link = `https://polar-hollows-67198.herokuapp.com/api/v1/users?username=${username}&password=${password1}&email=${email}`;
    let params = {username: username, password: password1, email: email}

    fetch(link, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(params),
        headers: {
            'User-Agent': 'Mozilla/5.0',
        }
    })
    .then(async (response_data) => {
        if (response_data.ok) {
            response_data = await response_data.json()
            console.log(response_data)
            location.href = '../../Home/home.html'
        } else {
            console.log(response_data);
        }
    }).catch(error => console.log('Connection error', error))
});