function createGameBoard() {
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board');

    for (let i = 0; i < 10; i++) {

        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < 10; j++) {

            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        };
        gameBoard.appendChild(row);
    };

    return gameBoard;
}

export { createGameBoard };