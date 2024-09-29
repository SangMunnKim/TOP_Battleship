import { Player } from "../factories/player";
import { Ship } from "../factories/battleship";
import { render } from "./gameBoardUI";

// Utility to place ships
function placeShips(player, ships) {
    player.board.placeShip(ships.small_ship, 1, 0, 'horizontal');
    player.board.placeShip(ships.small_ship, 2, 0, 'vertical');
    player.board.placeShip(ships.medium_ship, 3, 2, 'horizontal');
    player.board.placeShip(ships.medium_ship, 4, 2, 'vertical');
    player.board.placeShip(ships.large_ship, 6, 4, 'horizontal');
    player.board.placeShip(ships.large_ship, 7, 5, 'horizontal');
}

const startGame = () => {
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = ''; // Clear previous content

    const player = new Player();
    const computer = new Player();

    const ships = createShips();

    // Place ships for player and computer using utility function
    placeShips(player, ships);
    placeShips(computer, ships);

    // Render gameboards
    renderBoard(gameContainer, player, "player");
    renderBoard(gameContainer, computer, "computer");

    render.renderBoardForPlayer(player.board.getGrid());

    return { player, computer };
};

// Helper function to create and render the board
function renderBoard(container, player, id) {
    const board = render.createGameBoard(player.board.getGrid(), id);
    container.appendChild(board);
}

function createShips() {
    return {
        small_ship: new Ship(2),
        medium_ship: new Ship(3),
        large_ship: new Ship(4),
    };
}

export { startGame };
