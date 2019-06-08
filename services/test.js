// var loginForm = document.getElementById('addPost');
var getAPIBtn = document.getElementById('getUser');

getAPIBtn.addEventListener('click', async () => {
    console.log('clicked');

    fetch(`https://polar-hollows-67198.herokuapp.com/api/v1/weapons`)
    .then(res => res.json())          // convert to plain text
    .then(data => console.log(data[]));
});
