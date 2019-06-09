const BrowserWindow = require('electron').remote.BrowserWindow;

const gamePathBtn = document.getElementById('game-path');

gamePathBtn.addEventListener('click', (event) => {
    let registerWindow = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
          nodeIntegration: true
        },
        resizable: false
    });
    // Load register.html
    registerWindow.loadFile(`${__dirname}/cac.html`);
})

