function gameboard() {
    const grid = Array(10).fill(null).map(() => Array(10).fill(null).map(() => ({ ship: null, hit: false })));

    return {
        getGrid() {
            return grid;
        },

        // Method to place a ship on the board
        placeShip(ship, x, y, direction) {
            for (let i = 0; i < ship.getLength(); i++) {
                if (direction === 'horizontal') {
                    if (!grid[x][y + i].ship) {
                        grid[x][y + i].ship = ship;
                    } else {
                        console.log('Ship already placed here');
                        return;
                    }
                } else if (direction === 'vertical') {
                    if (!grid[x + i][y].ship) {
                        grid[x + i][y].ship = ship;
                    } else {
                        console.log('Ship already placed here');
                        return;
                    }
                }
            }
        },

        // Attack method
        attack(x, y) {
            if (!grid[x][y].hit) {  // If the cell hasn't been hit before
                grid[x][y].hit = true;
                if (grid[x][y].ship) {
                    grid[x][y].ship.hit();  // Register the ship hit if there's a ship in the cell
                    console.log('Hit a ship at', x, y);
                } else {
                    console.log('Missed at', x, y);
                }
            } else {
                console.log('Cell already hit');
            }
        },

        // Check if all ships are sunk
        allShipsSunk() {
            return grid.flat().filter(cell => cell.ship).every(cell => cell.ship.isSunk());
        }
    };
}

export { gameboard };
