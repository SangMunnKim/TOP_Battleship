const render = {
    createGameBoard(grid, boardId) {
        const gameBoard = document.createElement('div');
        gameBoard.classList.add('game-board');
        gameBoard.id = boardId;  // Ensure the board gets the correct ID ('player' or 'computer')

        const header = document.createElement('h2');
        header.textContent = capitalize(boardId);
        gameBoard.appendChild(header);

        grid.forEach((row, i) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add("row");
            rowDiv.id = `row-${boardId}-${i}`;  // Unique row id based on the board

            row.forEach((_, j) => {
                const cell = createCell(i, j, boardId);  // Pass the board id ('player' or 'computer')
                rowDiv.appendChild(cell);
            });

            gameBoard.appendChild(rowDiv);
        });

        return gameBoard;
    },

    // Update a cell for either the player or computer’s board after an attack
    updateCell(x, y, grid, boardId) {
        const cell = document.getElementById(`${boardId}-${x}-${y}`);  // Ensure we target the correct board's cell
        const cellData = grid[x][y];

        if (cellData.hit && cellData.ship) {
            updateCellUI(cell, 'hit-ship', 'S', 'red');  // Mark ship hit
        } else if (cellData.hit) {
            updateCellUI(cell, 'miss', 'X', 'gray');  // Mark miss
        }
    },

    // Render the player's board to show ships at the start of the game
    renderBoardForPlayer(grid) {
        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell.ship) {
                    const playerCell = document.getElementById(`player-${i}-${j}`);
                    updateCellUI(playerCell, 'player-ship', 'S', 'green');  // Display player's ships at the start
                }
            });
        });
    }
};

// Helper functions
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function createCell(i, j, boardId) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `${boardId}-${i}-${j}`;  // Create unique id for each cell by adding 'player' or 'computer' prefix

    // Add event listener only to the computer's board cells
    if (boardId === 'computer') {
        cell.classList.add('clickable');  // Make computer's cells clickable
    }

    return cell;
}

// Helper to update the cell UI
function updateCellUI(cell, className, text, bgColor) {
    if (cell) {  // Ensure the cell exists before applying changes
        cell.classList.add(className);
        cell.textContent = text;
        cell.style.backgroundColor = bgColor;
    } else {
        console.error('Cell not found for update', cell);
    }
}

export { render };
