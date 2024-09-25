import { gameboard } from "./gameboard";

class Player {
    constructor() {
        this.board = gameboard();
    }
    
    getBoard() {
        return this.board;
    };
    
    attack(opponent, x, y) {
        opponent.board.attack(x, y);
    }
}

export { Player };