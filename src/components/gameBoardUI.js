const render = {
    createGameBoard(grid) { 
        const gameBoard = document.createElement('div');
        gameBoard.classList.add('game-board');

        for (let i = 0; i < grid.length; i++) {

            const row = document.createElement('div');
            row.classList.add("row");
            row.id = `row-${i}`;

            for (let j = 0; j < grid[i].length; j++) {

                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.id = `${i}-${j}`;

                row.appendChild(cell);

            };
            gameBoard.appendChild(row);
        };

        return gameBoard; 
    },

    updateCell(x, y, grid) {
        // Access the specific cell by its ID
        const cell = document.getElementById(`${x}-${y}`);
        
        // Update the cell based on its state in the grid
        if (grid[x][y].hit && grid[x][y].ship) {
            cell.classList.add('ship');
            cell.textContent = 'S';
            cell.backgroundColor = 'red';
        } else if (grid[x][y].hit) {
            cell.classList.add('hit');
            cell.textContent = 'X';
        } 
    }    
};

export { render };