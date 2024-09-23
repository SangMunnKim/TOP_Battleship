import { gameboard } from "./gameboard";

class Player {
    constructor() {
        this.board = gameboard();
    }

    attack(opponent, x, y) {
        opponent.board.attack(x, y);
    }
}

export { Player };