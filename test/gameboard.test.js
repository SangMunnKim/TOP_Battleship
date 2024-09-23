import { gameboard } from '../src/components/gameboard';
import { Ship } from '../src/components/battleship';

test('test if gameboard has correct size', () => {
    const board = gameboard();
    expect(board.getGrid().length).toBe(10);

    for (let row = 0; row < board.getGrid().length; row++) {
        expect(board.getGrid()[row].length).toBe(10);
    }
});

test('test if ship is placed correctly', () => {
    const board = gameboard();
    const ship = new Ship(3);
    const ship2 = new Ship(5);
    board.placeShip(ship, 0, 0, 'horizontal');
    board.placeShip(ship2, 1, 0, 'vertical');
    expect(board.getGrid()[0][0].ship).toBe(ship);
    expect(board.getGrid()[0][1].ship).toBe(ship);
    expect(board.getGrid()[0][2].ship).toBe(ship);
    expect(board.getGrid()[0][3].ship).toBe(null);

    expect(board.getGrid()[1][0].ship).toBe(ship2);
    expect(board.getGrid()[2][0].ship).toBe(ship2);
    expect(board.getGrid()[3][0].ship).toBe(ship2);
    expect(board.getGrid()[4][0].ship).toBe(ship2);
    expect(board.getGrid()[5][0].ship).toBe(ship2);
    expect(board.getGrid()[6][0].ship).toBe(null);
});

test('test if ship is hit', () => {
    const board = gameboard();
    const ship = new Ship(3);
    board.placeShip(ship, 0, 0, 'horizontal');
    board.attack(0, 0);
    board.attack(0, 1);
    expect(board.getGrid()[0][0].hit).toBe(true);
    expect(board.getGrid()[0][1].hit).toBe(true);
    expect(ship.isHit()).toBe(2);
});

test('test if ship is sunk', () => {
    const board = gameboard();
    const ship = new Ship(3);
    board.placeShip(ship, 0, 0, 'horizontal');
    board.attack(0, 0);
    board.attack(0, 1);
    board.attack(0, 2);
    expect(ship.isSunk()).toBe(true);
});

test('test if all ships are sunk', () => {
    const board = gameboard();
    const ship = new Ship(3);
    const ship2 = new Ship(3);
    board.placeShip(ship, 0, 0, 'horizontal');
    board.placeShip(ship2, 1, 0, 'horizontal');
    board.attack(0, 0);
    board.attack(0, 1);
    board.attack(0, 2);
    board.attack(1, 0);
    board.attack(1, 1);
    board.attack(1, 2);
    expect(board.allShipsSunk()).toBe(true);
});


