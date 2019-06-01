var loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', submitLogin);

function submitLogin(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('http://127.0.0.1:5000/api/v1/resources/users', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            username:username.value,
            password:password.value
        })
    })
    .then(res => {
        if (res.status === 201) {
            
        }
    })
}