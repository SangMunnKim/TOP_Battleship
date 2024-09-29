const render = {
    createGameBoard(grid, id) {
        const gameBoard = document.createElement('div');
        gameBoard.classList.add('game-board');
        gameBoard.id = id;  // Ensure the board gets the correct ID ('player' or 'computer')

        const header = document.createElement('h2');
        header.textContent = capitalize(id);
        gameBoard.appendChild(header);

        grid.forEach((row, i) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add("row");
            rowDiv.id = `row-${id}-${i}`;  // Unique row id based on the board

            row.forEach((_, j) => {
                const cell = createCell(i, j, id);  // Pass the board id ('player' or 'computer')
                rowDiv.appendChild(cell);
            });

            gameBoard.appendChild(rowDiv);
        });

        return gameBoard;
    },

    // Render the player's board with visible ships
    renderBoardForPlayer(grid) {
        grid.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (cell.ship) {
                    this.updatePlayerCell(i, j, grid);  // Show ships on the player's board
                }
            });
        });
    },

    // Update a cell for the player’s board (showing ships)
    updatePlayerCell(x, y, grid) {
        const cell = document.getElementById(`player-${x}-${y}`);  // Select by unique player cell id
        const cellData = grid[x][y];

        if (cellData.ship) {
            updateCellUI(cell, 'player-ship', 'S', 'green');  // Mark player's ships
        }
    },

    // Update a cell for the computer’s board (after an attack)
    updateCell(x, y, grid) {
        const cell = document.getElementById(`computer-${x}-${y}`);  // Select by unique computer cell id
        const cellData = grid[x][y];

        if (cellData.hit && cellData.ship) {
            updateCellUI(cell, 'hit-ship', 'S', 'red');  // Ship was hit
        } else if (cellData.hit) {
            updateCellUI(cell, 'miss', 'X', 'gray');  // Missed attack
        }
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
        cell.classList.add('clickable');  // Add a class for clickable cells on computer's board
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
