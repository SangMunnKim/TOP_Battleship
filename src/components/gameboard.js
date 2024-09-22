function gameboard(){
    const grid = Array(10).fill(null).map(() => Array(10).fill(null));
    
    return {
        getGrid() {
            return grid;
        },

        placeShip() {
            // code here
        },

        receiveAttack() {
            // code here
        }
    }
}

module.exports = gameboard;