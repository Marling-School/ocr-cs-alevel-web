const LinkedList = require("../linkedList/LinkedList");

class Stack {
  constructor() {
    // Use a linked list for the items
    // New items are pushed into index 0, so that zero always contains the 'top'.
    this.items = new LinkedList();
  }

  getItems() {
    return this.items;
  }

  push(item) {
    this.items.insert(0, item);
    this.top += 1;
  }

  pop() {
    let item = this.peek();
    this.items.remove(0);
    return item;
  }

  peek() {
    if (this.items.isEmpty()) {
      throw new Error("Stack Underflow");
    }

    return this.items[0];
  }
}

module.exports = Stack;
