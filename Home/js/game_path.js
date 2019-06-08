var remote = require('remote');
const { dialog } = require('electron').remote;



console.log(dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }))

document.addEventListener('DOMContentLoaded', () => {
    let gamePathBtn = document.getElementById('game-path');
    gamePathBtn.addEventListener('click', () => {
        console.log('clicked');
        dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections   '] })
        
    })
})