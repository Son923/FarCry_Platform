var getAPIBtn = document.getElementById('getUser');
var loginForm = document.getElementById('addPost');

getAPIBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach(user => {
            output += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>   
            </ul>
            `;
        });
    document.getElementById('userOutput').innerHTML = output;
    })
})

loginForm.addEventListener('submit', addUser);

function addUser(e) {
    e.preventDefault();

    let title = document.getElementById('title');
    let body = document.getElementById('body');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({title:title.value, body:body.value})
    })  
    .then(res => {
        if (res.status === 201) {
            console.log('oke babi token')
        } else {
            console.log('oh no fuck you')
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))


    // .then(data => console.log(data))
}