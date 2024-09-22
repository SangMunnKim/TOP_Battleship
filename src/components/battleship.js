class Ship {
    constructor(length) {
        if (length < 1) {
            throw new Error('Ship length must be at least 1');
        }
        this.length = length;
        this.hits = Array(length).fill(false);
        this.destroyed = false;
    }

    getLength() {
        return this.length;
    }

    hit(position) {
        if (position >= this.length || position < 0) {
            throw new Error('Position out of range');
        }
        if (this.hits[position]) {
            throw new Error('Position already hit');
        }
        this.hits[position] = true;
    }
    
    isHit(position) {
        if (position >= this.length || position < 0) {
            throw new Error('Position out of range');
        }
        return this.hits[position];
    }
    
    isSunk() {
        return this.hits.every((hit) => hit);
    }

}

module.exports = Ship;