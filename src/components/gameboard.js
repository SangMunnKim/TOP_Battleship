function gameboard(){
    const grid = Array(10).fill(null).map(() => Array(10).fill(null).map(() => ({ship: null, hit: false})));
    
    return {
        getGrid() {
            return grid;
        },

        placeShip(ship, x, y, direction) {
            for (let i = 0; i < ship.getLength(); i++) {
                if (direction === 'horizontal') {
                    grid[x][y + i].ship = ship;
                } else if (direction === 'vertical') {
                    grid[x + i][y].ship = ship;
                }
            }
        },

        attack(x, y) {
            if (grid[x][y].hit) {
                console.log('already hit');
            } else if (grid[x][y].ship) {
                grid[x][y].ship.hit();
                grid[x][y].hit = true;
                console.log('hit');
            } else {
                grid[x][y].hit = true;
                console.log('miss');
            }
        },

        allShipsSunk() {
            return grid.flat().filter(cell => cell.ship).every(cell => cell.ship.isSunk());
        },

        render() {
            grid.forEach(row => {
              console.log(row.map(cell => {
                if (cell.ship) {
                  return cell.hit ? 'X' : 'S';  // 'S' for unhit ship, 'X' for hit ship
                } else {
                  return cell.hit ? 'O' : '.';  // 'O' for miss, '.' for untouched cell
                }
              }).join(' '));
            });
        }
    }
}

export { gameboard };