class Ship {
    constructor(length) {
        if (length < 1) {
            throw new Error('Ship length must be at least 1');
        }
        this.length = length;
        this.hits = 0;
        this.destroyed = false;
    }

    getLength() {
        return this.length;
    }

    hit() {
        this.hits += 1;
    }
    
    isHit() {
        return this.hits;
    }
    
    isSunk() {
        if (this.hits >= this.length) {
            return this.destroyed = true;
        }
        return this.destroyed;
    }
}

export { Ship };