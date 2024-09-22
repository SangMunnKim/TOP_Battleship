const gameboard = require('../src/components/gameboard');

test('test if gameboard has correct size', () => {
    const board = gameboard();
    expect(board.getGrid().length).toBe(10);

    for (let row = 0; row < board.getGrid().length; row++) {
        expect(board.getGrid()[row].length).toBe(10);
    }
});