import { Player } from "../factories/player";
import { createGameBoard } from "./createGameboard";

const startButton = document.getElementById('start');
const gameContainer = document.querySelector('.game-container');

const startGame = () => {
    console.log("Hello");
    const player = new Player();
    const computer = new Player();
    const playerBoard_player = createGameBoard();
    gameContainer.appendChild(playerBoard_player);
};

startButton.addEventListener('click', startGame);

export { startGame };