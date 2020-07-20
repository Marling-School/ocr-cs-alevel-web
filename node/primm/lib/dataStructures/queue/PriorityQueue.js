const LinkedList = require("../linkedList/LinkedList");

class PriorityQueue {
  /**
   * Constructor for Priority Queue.
   * @param {function} getPriority A function that accepts an item and returns a number to represent priority
   */
  constructor(getPriority) {
    this.getPriority = getPriority;
    this.items = new LinkedList();
  }

  toString() {
    return this.items.toString();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(newItem) {
    let newPriority = this.getPriority(newItem);

    for (let index = 0; index < this.items.length; index++) {
      let { priority } = this.items[index];
      if (newPriority > priority) {
        // Insert item at this point and return
        this.items.splice(index, 0, newItem);
        return;
      }
    }

    // Just push onto the end
    this.items.push(newItem);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue Empty");
    }

    return this.items.splice(0, 1)[0];
  }
}

module.exports = PriorityQueue;
