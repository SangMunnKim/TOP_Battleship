import { Ship } from '../src/components/battleship';

test('test if ship has correct length', () => {
    const ship = new Ship(3);
    expect(ship.getLength()).toBe(3);
})

test('test number of hits', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.isHit()).toBeGreaterThan(0);
});

test('test if the ship is destroyed', () => {
    const ship = new Ship(3);
    //hit the ship 3 times
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});