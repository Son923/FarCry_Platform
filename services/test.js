var getAPIBtn = document.getElementById('getUser');
var form = document.getElementById('addPost');

getAPIBtn.addEventListener('click', () => {
    console.log('clicked');

    fetch(`https://polar-hollows-67198.herokuapp.com/api/v1/weapons`)
    .then(res => res.json())
    .then(data => console.log(data[1].icon));
});


// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;

//     link = `https://polar-hollows-67198.herokuapp.com/api/v1/users?username=${username}&password=${password}`;
//     let params = {username: username, password: password}

//     fetch(link, {
//         method: 'POST',
//         body: JSON.stringify(params)
//     })
//     .then(async (response_data) => {
//         if (response_data.ok) {
//             response_data = await response_data.json()
//             console.log(response_data)

//             var fs = require("fs");
//             fs.writeFile('.user_token', response_data.user_token, (err) => {
//                 if (err) console.log(err);
//                 console.log('Successfully get user_token');
//             })

//         } else {
//             console.log(response_data.status);
//         }
//     }).catch(error => console.log('Connection error', error))
// });

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = 'samplefd@gmail.com';

    link = `https://polar-hollows-67198.herokuapp.com/api/v1/users?username=${username}&password=${password}&email=${email}`;
    let params = {username: username, password: password, email: email}

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
        } else {
            console.log(response_data);
        }
    }).catch(error => console.log('Connection error', error))
});