import { render } from "./gameBoardUI";

function observeGame(player, computer) {
    const computerCells = document.querySelectorAll('#computer .cell');
    
    computerCells.forEach(cell => {
        cell.addEventListener('click', (event) => handleCellClick(event, player, computer));
    });
    console.log("Game observed");
}

function handleCellClick(event, player, computer) {
    const [x, y] = event.target.id.split('-').slice(1).map(Number);  // Get x, y from id, skipping 'computer'
    registerAttack(x, y, player, computer, event.target);
}

function registerAttack(x, y, player, computer, cell) {
    player.attack(computer, x, y);  // Perform the player's attack on the computer
    render.updateCell(x, y, computer.getBoard().getGrid());  // Update the cell in the computer's grid

    // Remove event listener after the attack
    cell.removeEventListener('click', handleCellClick);
    cell.style.cursor = 'default';  // Reset cursor to default

    console.log("Attack registered at:", x, y);
}

export { observeGame };
