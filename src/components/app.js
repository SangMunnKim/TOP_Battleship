import { startGame } from './startgame';
import { observeGame } from './gamelogic';

function app () {

    // Start game
    const startButton = document.getElementById('start');
    startButton.addEventListener('click', () => {
        const {player, computer} = startGame();
        observeGame(player, computer); 
    });

}

export { app };
