const Ship = require('../src/components/battleship');

test('test if ship has correct length', () => {
    const ship = new Ship(3);
    expect(ship.getLength()).toBe(3);
})


test('test if the ship is hit', () => {
    const ship = new Ship(3);
    ship.hit(0);
    expect(ship.isHit(0)).toEqual(true);
});


test('test if the ship is destroyed', () => {
    const ship = new Ship(3);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
});