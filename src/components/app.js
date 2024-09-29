import { startGame } from './startgame';
import { observeGame } from './gamelogic';
import { render } from './gameBoardUI';

function app() {
    const startButton = document.getElementById('start');

    startButton.addEventListener('click', () => {
        resetGame();  // Clear previous game state
        const { player, computer } = startGame();
        observeGame(player, computer);
    });
    
    // Function to reset the game state, useful for replayability
    function resetGame() {
        const gameContainer = document.querySelector('.game-container');
        gameContainer.innerHTML = '';  // Clear the game board

        const messageBoard = document.querySelector('.message-board');
        if (messageBoard) {
            messageBoard.innerHTML = '';  // Clear previous messages
        }
    }
}

export { app };
