const render = {
    createGameBoard(grid) { 
        const gameBoard = document.createElement('div');
        gameBoard.classList.add('game-board');

        for (let i = 0; i < grid.length; i++) {

            const row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < grid[i].length; j++) {

                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.id = `${i}${j}`;

                row.appendChild(cell);

            };
            gameBoard.appendChild(row);
        };

        return gameBoard; 
    },

    updateCell(grid) {
        // Access the specific cell by its ID
        const i = document.getElementById(`${i}${j}`);
        
        // Update the cell based on its state in the grid
        if (grid[i][j].hit) {
            cell.classList.add('hit');
            cell.textContent = 'X';
        } else if (grid[i][j].hit && grid[i][j].ship) {
            cell.classList.add('ship');
            cell.textContent = 'S';
            cell.backgroundColor = 'red';
        } 
    }    
};

export { render };