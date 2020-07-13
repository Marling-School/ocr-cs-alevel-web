class Stack {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.top = 0;
    }

    isFull() {
        return this.top === this.capacity;
    }

    isEmpty() {
        return this.top === 0;
    }

    push(item) {
        if (this.isFull()) {
            throw new Error('Stack Overflow');
        }

        this.items[this.top] = item;
        this.top += 1;
    }

    pop() {
        let item = this.peek();
        this.top -= 1;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack Underflow');
        }

        return this.items[this.top - 1];
    }
}

module.exports = {
    Stack
}