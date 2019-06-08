// var loginForm = document.getElementById('addPost');
var getAPIBtn = document.getElementById('getUser');
var form = document.getElementById('addPost');

getAPIBtn.addEventListener('click', () => {
    console.log('clicked');

    fetch(`https://polar-hollows-67198.herokuapp.com/api/v1/weapons`)
    .then(res => res.json())
    .then(data => console.log(data[1].icon));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // let username = 'nhatlq';
    // let password = '!@#!@#$@#$';
 
    var url = 'https://polar-hollows-67198.herokuapp.com/api/v1/users?username=nhatlq&password=sasdas' + 
    
    fetch(url, {
        method:'POST',
        mode:'no-cors',
        headers: {
            'Content-type':'application/json',
        },
    })
    .then(res => res.text())
    .then(data => console.log(data))    
});
