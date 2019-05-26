console.log('login process');

const BrowserWindow = require('electron').remote.BrowserWindow;

const registerWindowBtn = document.getElementById('register-btn');
registerWindowBtn.addEventListener('click', (event) => {
    let registerWindow = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        },  
        resizable: false
    });
    
    registerWindow.loadFile('register/register.html');
})