import { render } from "./gameBoardUI";

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

    // Check if computer has lost
    if (computer.getBoard().allShipsSunk()) {
        triggerGameOver('Player');
        return;
    }

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

    // Check if player has lost
    if (player.getBoard().allShipsSunk()) {
        triggerGameOver('Computer');
        return;
    }

    // Switch back to player's turn
    playerTurn = true;
}

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

// Trigger game over when one side wins
function triggerGameOver(winner) {
    console.log(`${winner} wins!`);

    const gameOverMessage = document.createElement('div');
    gameOverMessage.classList.add('game-over');
    gameOverMessage.textContent = `${winner} wins! Game Over.`;
    document.body.appendChild(gameOverMessage);

    // Disable further clicks by removing the 'clickable' class from the computer's cells
    const computerCells = document.querySelectorAll('.clickable');
    computerCells.forEach(cell => cell.classList.remove('clickable'));
}

export { observeGame };
