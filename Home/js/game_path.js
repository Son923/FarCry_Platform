document.addEventListener('DOMContentLoaded', () => {
    let gamePathBtn = document.getElementById('game-path');
    let gamePathDiv = document.getElementById('inner-setting');
    gamePathBtn.addEventListener('click', () => {
        console.log('clicked');
        gamePathDiv.classList.add('selected');
        gamePathDiv.classList.remove('notselected');
    })
})