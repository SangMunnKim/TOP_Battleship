import { render } from "./gameBoardUI";

function observeGame(player, computer) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        // Wrap the event listener in an anonymous function to pass parameters
        const handleClick = (event) => {
            registerAttack(event, player, computer, handleClick);  // Pass handleClick for removal
        };

        cell.addEventListener('click', handleClick);
    });
    console.log("Game observed");
}

function registerAttack(event, player, computer, handleClick) {
    const [x, y] = event.target.id.split('-').map(Number);
    player.attack(computer, x, y);
    render.updateCell(x, y, computer.getBoard().getGrid());

    // Remove the event listener and cursor pointer for the clicked cell
    event.target.removeEventListener('click', handleClick);
    event.target.style.cursor = 'default';  // Reset cursor to default

    console.log("Attack registered");
    // computer.attack();
}

export { observeGame };