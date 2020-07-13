class CircularQueue {
    constructor(capacity = 10) {
        this.frontPointer = 0;
        this.rearPointer = 0;
        this.items = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(item) {
        if (this.isFull()) {
            throw new Error('Queue Full');
        }

        this.items[this.rearPointer] = item;
        this.rearPointer += 1;
        this.rearPointer %= this.items.length;
        this.size += 1
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue Empty');
        }

        let item = this.items[this.frontPointer];
        this.frontPointer += 1;
        this.frontPointer %= this.items.length;
        this.size -= 1
        return item;
    }
}

module.exports = {
    CircularQueue
}