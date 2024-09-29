import { render } from "./gameBoardUI";

// To store the game state
let playerTurn = true;

function observeGame(player, computer) {
    const computerCells = document.querySelectorAll('#computer .cell');
    
    computerCells.forEach(cell => {
        cell.addEventListener('click', (event) => handleCellClick(event, player, computer));
    });
    console.log("Game observed");
}

function handleCellClick(event, player, computer) {
    if (!playerTurn) return;  // Prevent the player from moving during the computer's turn

    const [x, y] = event.target.id.split('-').slice(1).map(Number);  // Get x, y from id, skipping 'computer'
    if (computer.getBoard().getGrid()[x][y].hit) {
        console.log('This cell has already been attacked');
        return;
    }

    registerPlayerAttack(x, y, player, computer, event.target);
}

function registerPlayerAttack(x, y, player, computer, cell) {
    player.attack(computer, x, y);  // Perform the player's attack on the computer
    render.updateCell(x, y, computer.getBoard().getGrid(), 'computer');  // Update the cell in the computer's grid

    // Remove event listener after the attack
    cell.removeEventListener('click', handleCellClick);
    cell.style.cursor = 'default';  // Reset cursor to default

    console.log("Player attack registered at:", x, y);

    // Switch to computer's turn
    playerTurn = false;

    setTimeout(() => {
        computerAttack(player, computer);
    }, 100);  // Simulate a brief delay for the computer move
}

function computerAttack(player, computer) {
    const availableCells = getAvailableCells(player.getBoard().getGrid());

    if (availableCells.length === 0) {
        console.log('No available cells left for the computer to attack');
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const [x, y] = availableCells[randomIndex];

    computer.attack(player, x, y);  // Perform the computer's attack on the player
    render.updateCell(x, y, player.getBoard().getGrid(), 'player');  // Update the player's board with the attack

    console.log("Computer attack registered at:", x, y);

    // Switch back to player's turn
    playerTurn = true;
}

// Helper function to get all unclicked cells on the player's board
function getAvailableCells(grid) {
    const availableCells = [];
    grid.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (!cell.hit) {
                availableCells.push([i, j]);
            }
        });
    });
    return availableCells;
}

export { observeGame };
