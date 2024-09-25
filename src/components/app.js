import { startGame } from './startgame';

function app () {
    
    // Start game
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        const {player, computer} = startGame();
    });


}

export { app };
