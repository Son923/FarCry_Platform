const { dialog } = require('electron').remote;

let folder_open = document.getElementById('folder-open');
let path_input = document.getElementById('path_input')


folder_open.addEventListener('click', () => {
    dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] },(path) => {
        console.log(path);
        path_input.value = path[0];
    })
})