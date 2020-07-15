class PriorityQueue {
  constructor() {
    this.items = [];
  }

  toString() {
    return JSON.stringify(this.items);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(newItem, newPriority) {
    let newPrioritisedObject = {
      item: newItem,
      priority: newPriority,
    };

    for (let index = 0; index < this.items.length; index++) {
      let { priority } = this.items[index];
      if (newPriority > priority) {
        this.items.splice(index, 0, newPrioritisedObject);
        return;
      }
    }

    this.items.push(newPrioritisedObject);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue Empty");
    }

    return this.items.splice(0, 1)[0];
  }
}

module.exports = {
  PriorityQueue,
};
