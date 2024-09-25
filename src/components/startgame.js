import { Player } from "../factories/player";
import { Ship } from "../factories/battleship";
import { render } from "./gameBoardUI";

const gameContainer = document.querySelector('.game-container');

const startGame = () => {
    console.log("Hello");
    const player = new Player();
    const computer = new Player();

    const ships = createShips();
    // Place ships
    player.board.placeShip(ships.small_ship, 0, 0, 'horizontal');
    player.board.placeShip(ships.small_ship, 1, 0, 'vertical');
    player.board.placeShip(ships.medium_ship, 2, 2, 'horizontal');
    player.board.placeShip(ships.medium_ship, 3, 2, 'vertical');
    player.board.placeShip(ships.large_ship, 5, 4, 'horizontal');
    player.board.placeShip(ships.large_ship, 8, 5, 'horizontal');

    computer.board.placeShip(ships.small_ship, 0, 0, 'horizontal');
    computer.board.placeShip(ships.small_ship, 1, 0, 'vertical');
    computer.board.placeShip(ships.medium_ship, 2, 2, 'horizontal');
    computer.board.placeShip(ships.medium_ship, 3, 2, 'vertical');
    computer.board.placeShip(ships.large_ship, 5, 4, 'horizontal');
    computer.board.placeShip(ships.large_ship, 8, 5, 'horizontal');

    const computersGameboard = render.createGameBoard(player.board.getGrid());
    gameContainer.appendChild(computersGameboard);
    
    return { player, computer };
};

function createShips() {
    const small_ship = new Ship(2);
    const medium_ship = new Ship(3);
    const large_ship = new Ship(4);

    return { small_ship, medium_ship, large_ship };
}

export { startGame };