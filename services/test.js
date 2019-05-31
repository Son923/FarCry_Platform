var getAPIBtn = document.getElementById('getUser');

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

