class Queue {
  constructor() {
    this.items = [];
  }

  toString() {
    return JSON.stringify(this.items);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue Empty");
    }

    return this.items.splice(0, 1)[0];
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue Empty");
    }

    return this.items.peek();
  }
}

module.exports = Queue;
