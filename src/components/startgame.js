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
    player.board.placeShip(ships.small_ship_1, 0, 0, 'horizontal');
    player.board.placeShip(ships.small_ship_2, 1, 0, 'vertical');
    player.board.placeShip(ships.medium_ship_1, 2, 2, 'horizontal');
    player.board.placeShip(ships.medium_ship_2, 3, 2, 'veritcal');
    player.board.placeShip(ships.large_ship_1, 5, 4, 'horizontal');
    player.board.placeShip(ships.large_ship_2, 8, 5, 'horizontal');

    computer.board.placeShip(ships.small_ship_1, 0, 0, 'horizontal');
    computer.board.placeShip(ships.small_ship_2, 1, 0, 'vertical');
    computer.board.placeShip(ships.medium_ship_1, 2, 2, 'horizontal');
    computer.board.placeShip(ships.medium_ship_2, 3, 2, 'veritcal');
    computer.board.placeShip(ships.large_ship_1, 5, 4, 'horizontal');
    computer.board.placeShip(ships.large_ship_2, 8, 5, 'horizontal');

    const computersGameboard = render.createGameBoard(player.board.getGrid());
    gameContainer.appendChild(computersGameboard);
    
    return { player, computer };
};

function createShips() {
    const small_ship_1 = new Ship(2);
    const small_ship_2 = new Ship(2);
    const medium_ship_1 = new Ship(3);
    const medium_ship_2 = new Ship(3);
    const large_ship_1 = new Ship(4);
    const large_ship_2 = new Ship(4);

    return { small_ship_1, small_ship_2, medium_ship_1, medium_ship_2, large_ship_1, large_ship_2 };
}

export { startGame };