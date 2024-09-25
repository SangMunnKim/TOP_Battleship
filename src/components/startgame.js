import { Player } from "../factories/player";
import { Ship } from "../factories/battleship";
import { render } from "./render";

const startButton = document.getElementById('start');
const gameContainer = document.querySelector('.game-container');

const startGame = () => {
    console.log("Hello");
    const player = new Player();
    const computer = new Player();

    // Create ships
    const small_ship_1 = new Ship(2);
    const small_ship_2 = new Ship(2);
    const medium_ship_1 = new Ship(3);
    const medium_ship_2 = new Ship(3);
    const large_ship_1 = new Ship(4);
    const large_ship_2 = new Ship(4);

    // Place ships
    player.board.placeShip(small_ship_1, 0, 0, 'horizontal');
    player.board.placeShip(small_ship_2, 1, 0, 'vertical');
    player.board.placeShip(medium_ship_1, 2, 2, 'horizontal');
    player.board.placeShip(medium_ship_2, 3, 2, 'veritcal');
    player.board.placeShip(large_ship_1, 5, 4, 'horizontal');
    player.board.placeShip(large_ship_2, 8, 5, 'horizontal');

    computer.board.placeShip(small_ship_1, 0, 0, 'horizontal');
    computer.board.placeShip(small_ship_2, 1, 0, 'vertical');
    computer.board.placeShip(medium_ship_1, 2, 2, 'horizontal');
    computer.board.placeShip(medium_ship_2, 3, 2, 'veritcal');
    computer.board.placeShip(large_ship_1, 5, 4, 'horizontal');
    computer.board.placeShip(large_ship_2, 8, 5, 'horizontal');
    
    const playerGameboard = render(player.board.getGrid());
    gameContainer.appendChild(playerGameboard);
};

startButton.addEventListener('click', startGame);

export { startGame };