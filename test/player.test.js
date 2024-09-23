import { Player } from '../src/factories/player';

test('Player creation', () => {
    const player_1 = new Player();
    expect(player_1.board.getGrid().length).toBe(10);
});

test('Player attack', () => {
    const player_1 = new Player();
    const player_2 = new Player();
    player_1.attack(player_2, 0, 0);
    expect(player_2.board.getGrid()[0][0].hit).toBe(true);
});

